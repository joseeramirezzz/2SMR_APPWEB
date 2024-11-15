# Jose Manuel Ramírez Alegre
# 08/10/2024
# Escriba un programa que pida un número entero mayor que cero y que escriba sus 
# divisores. 

print ("DIVISORES")

n = eval (input ("Escriba un número mayor que cero:"))

if n>0:
    j = []
    for x in range (1,n+1):

        if n%x==0:
           j.append(x)
    print ("Los divisores de",n,"son",j)
else:

    print ("¡Le he pedido un número entero mayor que cero!")