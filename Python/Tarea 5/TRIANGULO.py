# Jose Manuel Ramírez Alegre
# 1/10/2024
# 


anchura = int(input("Anchura del triángulo:"))

def triangulo ():
    for x in range(1,anchura+1):
        print("* "*x)
    for x in range(anchura-1,0,-1):
        print("* "*x)

triangulo ()

