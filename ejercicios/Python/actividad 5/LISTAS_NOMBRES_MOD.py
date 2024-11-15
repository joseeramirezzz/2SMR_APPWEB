# Jose Manuel Ramírez Alegre
# 12/10/2024
# Escriba un programa que pida cuántas listas se quieren crear y las solicite a 
# continuación 
# Modifique el programa anterior de manera que las listas se escriban al final del 
# programa. 


print("Generador de listas")

numerolistas = int(input("¿Cuántas listas quiere escribir? "))

contlist=0
listaseparada = []
def funcion ():
    for x in range(numerolistas):
        listpalabras = []
        numpalabras = int(input ("Dígame cuántas palabras tiene la lista "+str(x+1)+": "))

        for n in range(numpalabras):
            palabras = input("Dígame la palabra "+str(n+1)+": ")
            listpalabras.append (palabras)
        listaseparada.append(listpalabras)
    for j in  range(numerolistas):

        print("La lista ",j+1,"es: ",listaseparada[j])

funcion ()


