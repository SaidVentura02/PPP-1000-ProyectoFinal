#
#    @author jose.inestroza@unah.edu.hn, iadiazr@unah.hn
#    @version 0.1.0
#    @date 2026/11/24
#
import sys

keys = ["name", "dni", "guide"]

read_data = lambda: str(sys.stdin.read()).strip().split("\n")
process_item = lambda text: str(text).strip().split(",")
process_data = lambda items, keys: [
    {
        f"{keys[key]}":f"{process_item(item)[key]}" for key in range(len(keys))
    } 
    for item in items
]

get_guide = lambda lines: str(lines[0]).strip()
get_tourists = lambda lines: [lines[i] for i in range(len(lines)) if i > 0]

tourists_of_guide = lambda tourists, guide: [tourist for tourist in tourists if tourist["guide"] == guide]

guide_tourists = lambda lines: tourists_of_guide(process_data(get_tourists(lines), keys), get_guide(lines))

print(
    guide_tourists(
        read_data()
    )
)