import json
from pathlib import Path


def normalize_text_to_title(text: str) -> str:
    """把 [doge_金箍] / [笑哭] 这种 text 提取为标题。"""
    if not text:
        return ""

    value = text.strip()
    if value.startswith("[") and value.endswith("]"):
        value = value[1:-1]

    # [doge_金箍] 取最后一段，得到 金箍
    if "_" in value:
        value = value.split("_")[-1]

    return value.strip()


def parse_source_content(content: str):
    """兼容标准 JSON 数组和逗号分隔对象片段。"""
    raw = content.strip()
    if not raw:
        return []

    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        # 用户可能粘贴的是：
        # {...},
        # {...},
        # 这种片段，不是完整数组
        wrapped = f"[{raw.rstrip(',')}]"
        data = json.loads(wrapped)

    if isinstance(data, list):
        return data
    return []


def convert_to_output_format(items):
    result = {}
    for index, item in enumerate(items):
        if not isinstance(item, dict):
            continue

        meta = item.get("meta") if isinstance(item.get("meta"), dict) else {}
        alias = (meta.get("alias") or "").strip()
        source_text = str(item.get("text", "")).strip()
        title = alias or normalize_text_to_title(source_text)

        # 优先 url，若没有则回退 gif_url
        path = (item.get("url") or item.get("gif_url") or "").strip()
        text_to_replace = source_text or f"[{title}]"

        if not title or not path or not text_to_replace:
            continue

        result[str(index)] = {
            "title": title,
            "text_to_replace": text_to_replace,
            "path": path,
        }

    return result


def main():
    base_dir = Path(__file__).resolve().parent
    source_path = base_dir / "flamoji2.json"
    output_path = base_dir / "output2.json"

    if not source_path.exists():
        print(f"错误：未找到输入文件 {source_path}")
        print("请把你贴的对象数组内容保存到 tests/flamoji2.json 再运行。")
        return

    content = source_path.read_text(encoding="utf-8")
    items = parse_source_content(content)
    output = convert_to_output_format(items)

    if not output:
        print("错误：没有转换出有效数据，请检查输入内容格式。")
        return

    output_path.write_text(
        json.dumps(output, ensure_ascii=False, indent=4),
        encoding="utf-8",
    )
    print(f"转换成功：共 {len(output)} 条，输出文件 {output_path}")


if __name__ == "__main__":
    main()
