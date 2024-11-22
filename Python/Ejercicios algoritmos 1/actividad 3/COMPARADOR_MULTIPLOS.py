# Jose Manuel Ramírez Alegre
# 02/10/2024
# Escriba un programa que pida dos números enteros y que escriba si el mayor es múltiplo 
# del menor. El programa debe avisar cuando se escriben valores negativos o nulos. 

print ("COMPARADOR DE MÚLTIPLO")

n = int (input ("Escriba un número:"))
x = int (input ("Escriba otro número:"))

if n==0 or x==0:
    print ("Lo siento, este programa no admite valores nulos.")
elif n<0 or x<0:
    print ("Lo siento , este programa no admite valores negativos.")
elif n>x or n/x==1:
    if n%x==0:
        print (n,"es múltiplo de",x)
    else: 
        print (n,"no es múltiplo de",x)

elif x>n:
    if x%n==0:
        print (x,"es múltiplo de",n)
    else:
        print (x,"no es múltiplo de",n) 
else:
    print ("Lo siento, este programa no admite valores negativos.")


    

