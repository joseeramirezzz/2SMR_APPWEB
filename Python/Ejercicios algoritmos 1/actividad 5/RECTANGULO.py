# Jose Manuel Ramírez Alegre
# 11/10/2024
# Escriba un programa que pida la anchura y altura de un rectángulo y lo dibuje con 
# caracteres producto (*): 

Anchura = int(input("Anchura del rectángulo: "))
Altura = int(input("Altura del rectángulo: "))

def rectangulo():
    for x in range(Altura):
        print("* "*Anchura)
    

print (rectangulo())

