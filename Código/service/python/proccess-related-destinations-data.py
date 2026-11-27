#
#    @author jose.inestroza@unah.edu.hn, iadiazr@unah.hn
#    @version 0.1.2
#    @date 2026/11/26
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

times = lambda elements, element: len([e for e in elements if e == element])
unique = lambda elements: [
    elements[i] for i in range(len(elements)) if times([elements[j] for j in range(i)], elements[i]) == 0
]

dnis_of_destination = lambda visits, destination: [
    visit["dni"] for visit in visits if visit["destination"] == destination
]
other_destinations = lambda visits, destination: [
    visit["destination"] for visit in visits
    if visit["destination"] != destination and times(dnis_of_destination(visits, destination), visit["dni"]) > 0
]

related_destinations = lambda lines: [
    {"destination": destination}
    for destination in unique(other_destinations(process_data(get_visits(lines), keys), get_destination(lines)))
]

print(
    related_destinations(
        read_data()
    )
)