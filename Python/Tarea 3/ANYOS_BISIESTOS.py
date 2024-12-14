# Jose Manuel Ramírez Alegre
# 03/10/2024
# Escriba un programa que pida un año y que escriba si es bisiesto o no. 
# Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo 
# son, aunque los múltiplos de 400 sí.

print ("COMPROBADOR DE AÑOS BISIESTOS")

n = eval (input ("Escriba un año y le diré si es bisiesto:"))

if n%4==0 and n%100!=0 or n%400==0:
 
    print ("El año",n,"es un año bisiesto porque es múltiplo de 4 sin ser múltiplo de 100.")

else:
    
    print("EL año",n,"no es un año bisiesto.")

