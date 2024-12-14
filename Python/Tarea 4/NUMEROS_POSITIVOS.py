# Jose Manuel Ramírez Alegre
# 09/10/2024
# Escriba un programa que pida la cantidad de números positivos que se tienen que 
# escribir y a continuación pida números hasta que se haya escrito la cantidad de números 
# positivos indicada. 


print ("NUMEROS POSITIVOS")

x = int (input ("Escriba la cantidad de números positivos a escribir: "))
cont = 0
cont2 = 0
registro = 0
registro2 = 0
listapostv = []

if x<=0:
    x = int(input("La cantidad debe ser mayor que 0. Inténtelo de nuevo: "))
    registro = int(input ("Escriba un número: "))
    if registro>0:
            listapostv.append(registro)
            cont=cont+1
            cont2=cont2+1
    while cont!=x:
        registro2 = input ("Escriba otro número: ")
        cont2=cont2+1
        if int(registro2)>0:
             listapostv.append(registro2)
             cont=cont+1
             cont2=cont2+1
    totalpositivos = len(listapostv)
    if cont2==1:
        print ("Ha escrito",cont2,"número positivo.") 
    else: 
        print ("Ha escrito",cont2,"números",totalpositivos,"de ellos positivos.") 
else:
    registro = int(input ("Escriba un número: "))
    if registro>0:
            listapostv.append(registro)
            cont=cont+1
            cont2=cont2+1
    while cont!=x:
        registro2 = input ("Escriba otro número: ")
        cont2=cont2+1
        if int(registro2)>0:
            listapostv.append(registro2)
            cont=cont+1
    totalpositivos = len(listapostv)
    if cont2==1:
        print ("Ha escrito",cont2,"número positivo.")
    else:   
        print ("Ha escrito",cont2,"números, ",totalpositivos,"de ellos positivos.") 