# Jose Manuel Ramírez Alegre
# 09/10/2024
# Escriba un programa que pregunte cuántos números se van a introducir, pida esos 
# números, y escriba el mayor, el menor y la media aritmética.

print ("MAYOR, MENOR Y MEDIA ARITMÉTICA")

NumeroValores = int(input ("¿Cuántos valores va a introducir? "))
Listavalores = []
comp = 0
maximo = 0
min = 0
suma = 0
if NumeroValores>0:
    for numeroveces in range(NumeroValores):
        registros = input ("Escriba el número "+str(numeroveces+1)+":")
        Listavalores.append (registros)
    for menor in Listavalores:
        if min==0 or int(menor)<int(min):
            min = menor
    print ("El número más pequeño de los introducidos es ",float(min))

    for mayor in Listavalores:
        if int(mayor)>int(maximo):
            maximo = mayor
    print ("El número más grande de los introducidos es",float(maximo))

    for x in Listavalores:
        suma = int(suma)+int(x)
        media = suma/NumeroValores
    print ("La media de los números introducidos es ",media)

else:
    print ("¡Imposible!")