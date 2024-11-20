anchura = int(input("Dame la anchura: "))

for x in range(anchura):
    print ("* "*(x+1))
for x in range(anchura,0,-1):
    print ("* "*(x-1))