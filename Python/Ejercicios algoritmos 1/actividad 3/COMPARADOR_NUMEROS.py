# Jose Manuel Ramírez Alegre
# 02/10/2024
# Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay 
# dos iguales o si son los tres distintos. 

print ("COMPARADO DE TRES NÚMEROS")

n = eval (input ("Escriba un número:"))
x = eval (input ("Escriba un número:"))
j = eval (input ("Escriba un número:"))

if n==x and n==j and x==j:
    print ("Ha escrito tres veces el mismo número.")
elif n==x or n==j or x==j:
    print ("Ha escrito uno de los números dos veces.")
else:
    print("Los tres números que ha escrito son distintos.")