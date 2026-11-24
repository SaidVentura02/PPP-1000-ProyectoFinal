
#
#    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
#    @version 0.1.2
#    @date 2026/11/24
#    @since 2026/11/23
#
import sys

keys = ["name", "type"]

read_data = lambda: str(sys.stdin.read()).strip().split("\n")
process_item = lambda text: str(text).strip().split(",")
process_data = lambda items, keys: [
    {f"{keys[key]}":f"{process_item(item)[key]}" for key in range(len(keys))} for item in items
]

print(
    process_data(read_data(),keys)
)



#data = input()
#keys = ["name", "age", "dni", "country", "group"]
#result = []

#process_item = lambda text: str(text).strip().split(",")
#process_data = lambda items, keys: {f"{keys[key]}":f"{items[key]}" for key in range(len(keys))}

#try:
#    while data != "":
#        datos = process_item(data)
#        result.append(process_data(datos,keys))
#        data = input()
#except EOFError:
#    pass