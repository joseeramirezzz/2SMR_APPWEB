seguir = True
n = int(input("Escriba un número: "))
lista = []
if n!=0:
    lista.append(n)
    while seguir:
        n = int(input("Escriba otro número: "))
        if n!=0:
            
           lista.append(n)
        else:
            seguir=False
    print(lista)







