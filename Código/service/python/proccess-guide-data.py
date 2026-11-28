
#
#    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
#    @version 0.1.2
#    @date 2026/11/24
#    @since 2026/11/23
#
import sys

keys = ["name", "group"]

read_data = lambda: str(sys.stdin.read()).strip().split("\n")
process_item = lambda text: str(text).strip().split(",")
process_data = lambda items, keys: [
    {f"{keys[key]}":f"{process_item(item)[key]}" for key in range(len(keys))} for item in items if item.strip()
]

print(
    process_data(read_data(),keys)
)
