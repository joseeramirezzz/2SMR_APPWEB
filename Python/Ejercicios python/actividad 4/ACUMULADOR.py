# Jose Manuel Ramírez Alegre
# 09/10/2024
# Escriba un programa que pida dos números enteros y escriba la suma de todos los
# enteros desde el primer número hasta el segundo.

print ("SUMA ENTRE VALORES")
lista = []
suma  = 0
n = int (input ("Esciba un número entero positivo: "))
if n>0:
    x = int (input("Escriba un número entero mayor que "+str(n)+": "))

    if n<x:
        for a in range(n,x+1,1):
            lista.append (a)
        for x in lista:
            suma = int(x)+suma
        print ("La suma desde ",n," hasta ",x,"es", suma)        
    else:
        print("¡Le he pedido un número entero mayor que "+str(n)+"!")
    

else:
    print ("¡Le he pedido un número entero positivo!")