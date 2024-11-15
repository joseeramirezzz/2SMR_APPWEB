# Jose Manuel Ramirez Alegre
# 02/10/2024
# Mejore el programa anterior haciendo que tenga en cuenta que no se puede dividir por 
# cero.

print ("DIVISOR DE NÚMEROS")


n = eval (input ("Escriba el dividendo:"))
x = eval (input ("Escriba el divisor:"))

if x==0:
    print ("No se puede dividir por cero")

elif n%x==0:
    r=n//x
    print ("La division es exacta. Cociente:", r)
else:
    r=n//x
    y=n%x
    print ("La división no es exacta. Cociente:",r,"Resto:",y)

