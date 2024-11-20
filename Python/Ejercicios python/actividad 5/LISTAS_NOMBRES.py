# Jose Manuel Ramírez Alegre
# 11/10/2024
# Escriba un programa que pida cuántas listas se quieren crear y las solicite a 
# continuación 

print ("Generador de listas")

seguir=True
contlist=0 
listanumero = 0 
numerolistas = int(input ("¿Cuántas listas quiere escribir?: ")) 
   
while contlist!=numerolistas: 
    contlist=contlist+1
    
    listpalabras = []
    contpalabras=0 
    contpalab=0
    listanumero = listanumero+1
    contpalabras = int(input (("Dígame cuántas palabras tiene la lista "+str(listanumero)+": ")))
    while contpalabras!=contpalab:
        contpalab=contpalab+1
        palabras = input("Dígame la palabra "+str(contpalab)+": ")
        listpalabras.append (palabras)
        if contpalabras==contpalab:
            print("La lista",contlist,"es:",listpalabras)

            



