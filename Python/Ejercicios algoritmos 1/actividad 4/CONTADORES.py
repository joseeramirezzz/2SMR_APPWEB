# Jose Manuel Ramírez Alegre
# 09/10/2024
# Escriba un programa que pregunte cuántos números se van a introducir, pida esos
# números y escriba cuántos negativos ha introducido.

print ("NÚMEROS NEGATIVOS")

n = eval (input ("¿Cuántos valores va a introducir?:"))
negativos = 0
if n<0:
    print ("¡Imposible!")
elif n==0:
    print ("No ha escrito ningún número negativo.")

else:
    for numeroveces in range (n):
        x = eval (input ("Escriba el número "+str(numeroveces+1)+": "))
        if x<0:
            negativos = negativos+1
    if negativos>1:
        print ("Ha escrito "+str(negativos)+" números negativos.")
    elif negativos==1:
        print ("Ha escrito 1 número negativo.")
    else:
        print ("No ha escrito ningún número negativo")

        