# Jose Manuel Ramírez Alegre
# 02/10/2024
# Escriba un programa que pida primero un número par y luego un número impar (positivos 
# o negativos). En caso de que uno o los dos valores no sea correcto, se mostrará un único 
# aviso. 


print ("PAR E IMPAR (1)")
n = eval (input ("Escriba un número par:"))
x = eval (input ("Escriba un número impar:"))

if (n%2==0 or x%2!=0):
    print ("¡Gracias por su colaboración!")
else: 
    print ("Uno o más de los valores que ha escrito no son correctos.")