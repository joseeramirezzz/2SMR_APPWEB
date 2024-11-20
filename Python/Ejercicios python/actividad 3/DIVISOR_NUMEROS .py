# Jose Manuel Ramírez Alegre
# 02/10/2024
# Escriba un programa que pida dos números enteros y que calcule su división, 
# escribiendo si la división es exacta o no.

print ("DIVISOR DE NÚMEROS")

n = eval (input ("Escriba el dividendo:"))
x = eval (input ("Escriba el divisor:"))

if n%x==0:
    r=n//x
    print ("La division es exacta. Cociente:", r)
else:
    r=n//x
    y=n%x
    print ("La división no es exacta. Cociente:",r,"Resto:",y)
