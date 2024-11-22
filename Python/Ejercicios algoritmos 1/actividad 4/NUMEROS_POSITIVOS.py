# Jose Manuel Ramírez Alegre
# 10/10/2024

# Escriba un programa que pida la cantidad de números positivos que se tienen que 
# escribir y a continuación pida números hasta que se haya escrito la cantidad de números 
# positivos indicada. 

print ("NÚMEROS POSITIVOS")

x = int(input ("Escriba la cantidad de números positivos a escribir: "))
cont = 0
listapostv = []
registro = 0

if x<=0:
    x=int(input("La cantidad debe ser mayor que 0. Inténtelo de nuevo: "))
    registro = int(input("Escriba un número: "))
    registro>0
    listapostv.append(+1)
    while int(listapostv)<x:
        registro2 = int(input("Escriba otro número: "))
        if registro2>0:
            x = x+1
            listapostv.append(registro2)
        print (listapostv)
        
    
        

        
    
else:
    while cont<x:
        cont = cont+1
        registro = int(input("Escriba un número: "))


