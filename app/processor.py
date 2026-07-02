import re


def process_line(line):
    m = re.match(r'(\w+)=(\d+)', line)
    if m:
        key, value = m.group(1), int(m.group(2))
        return key, value
    return None
