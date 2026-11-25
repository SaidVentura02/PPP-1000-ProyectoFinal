#
#    @author jose.inestroza@unah.edu.hn, iadiazr@unah.hn
#    @version 0.1.0
#    @date 2026/11/24
#

import sys

keys = ["name", "dni", "destination"]

read_data = lambda: str(sys.stdin.read()).strip().split("\n")
process_item = lambda text: str(text).strip().split(",")
process_data = lambda items, keys: [
    {f"{keys[key]}":f"{process_item(item)[key]}" for key in range(len(keys))} for item in items
]

get_destination = lambda lines: str(lines[0]).strip()
get_visits = lambda lines: [lines[i] for i in range(len(lines)) if i > 0]

tourists_of_destination = lambda visits, destination: [
    {"name": visit["name"], "dni": visit["dni"]} for visit in visits if visit["destination"] == destination
]

times = lambda elements, element: len([e for e in elements if e == element])
unique = lambda elements: [
    elements[i] for i in range(len(elements)) if times([elements[j] for j in range(i)], elements[i]) == 0
]
count = lambda elements: [
    {"name": e["name"], "dni": e["dni"], "count": times(elements, e)} for e in unique(elements)
]

rank = lambda counts, i: len([
    j for j in range(len(counts))
    if counts[j]["count"] > counts[i]["count"] or (counts[j]["count"] == counts[i]["count"] and j < i)
])
sort_desc = lambda counts: [counts[i] for r in range(len(counts)) for i in range(len(counts)) if rank(counts, i) == r]
top = lambda counts, amount: [counts[i] for i in range(len(counts)) if i < amount]

frequent_tourists = lambda lines, amount: top(
    sort_desc(count(tourists_of_destination(process_data(get_visits(lines), keys), get_destination(lines)))),
    amount
)

print(
    frequent_tourists(
        read_data(), 
        3
    )
)