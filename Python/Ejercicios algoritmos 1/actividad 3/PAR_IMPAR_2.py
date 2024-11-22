# Jose Manuel Ramírez Alegre
# 02/10/2024
# Escriba un programa que pida primero un número par (positivo o negativo) y si el valor 
# no es correcto, muestre un aviso. Si el valor es correcto, pedirá un número impar 
# (positivo o negativo) y si el valor no es correcto, mostrará un aviso

print ("PAR E IMPAR (2)")

n = eval (input ("Escriba un número par:"))

if n%2==0:
    x= eval (input ("Escriba un numero impar:"))
    if x%2!=0:
        print ("¡Gracias por su colaboración!")
    else: 
        print ("No ha escrito un número impar.")


else:
    print ("No ha escrito un número par.")