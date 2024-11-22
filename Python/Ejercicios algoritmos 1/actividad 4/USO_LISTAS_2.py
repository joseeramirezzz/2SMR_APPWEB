# Jose Manuel Ramírez Alegre
# 08/10/2024
# Escriba un programa que pida dos números enteros y escriba la lista de números 
# consecutivos que hay entre ellos, de menor a mayor.


print ("LISTA DE MENOR A MAYOR")

n = eval (input ("Escriba un número entero:"))
x = eval (input ("Escriba otro número entero:"))

if n<x:
    print (list(range(n+1,x,1)))
else:
    print (list(range(x+1,n,1)))
