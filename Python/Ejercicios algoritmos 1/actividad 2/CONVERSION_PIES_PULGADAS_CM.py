print ("CONVERTIDOR DE PIES Y PULGADAS A CENTÍMETROS")
N = eval (input ("Escribe una cantidad de pies: "))
X = eval (input ("Escribe una cantidad de pulgadas: "))
centimetros = N*12
cent = centimetros*2.54 + X*2.54
print (N,"pies y ",X,"pulgadas son: ",cent)