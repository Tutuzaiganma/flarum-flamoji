import json
import re
from pathlib import Path

try:
    # 1. 始终基于脚本所在目录读取文件，避免受当前工作目录影响
    base_dir = Path(__file__).resolve().parent
    source_path = base_dir / 'flamoji.json'
    output_path = base_dir / 'output.json'

    with source_path.open('r', encoding='utf-8') as f:
        content = f.read()

    # 2. 优先尝试标准 JSON 解析；失败时回退到正则，兼容当前文件的键值列表格式
    try:
        parsed = json.loads(content)
        matches = list(parsed.items()) if isinstance(parsed, dict) else []
    except json.JSONDecodeError:
        # 兼容无大括号/有尾逗号的数据格式
        pattern = r'"([^"]+)"\s*:\s*"([^"]+)"'
        matches = re.findall(pattern, content)

    if not matches:
        print("错误：在 flamoji.json 中没有提取到任何有效的数据，请检查文件内容是否为空或格式完全不符。")
    else:
        # 3. 遍历匹配结果并转换格式
        target_dict = {}
        for index, (key, value) in enumerate(matches):
            target_dict[str(index)] = {
                "title": key,
                "text_to_replace": f"[{key}]",
                "path": value
            }

        # 4. 将转换后的结果写入同目录下的 output.json
        with output_path.open('w', encoding='utf-8') as f:
            json.dump(target_dict, f, ensure_ascii=False, indent=4)
            
        print(f"转换成功：已解析出 {len(matches)} 个表情，已生成 {output_path}")

except FileNotFoundError:
    print("错误：未找到 flamoji.json 文件，请确保脚本和该文件在同一个文件夹内。")
except Exception as e:
    print(f"运行过程中发生未知错误: {e}")