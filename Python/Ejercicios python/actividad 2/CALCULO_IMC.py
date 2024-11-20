print ("CÁLCULO DEL ÍNDICE DE MASA CORPORAL (IMC)")
N = eval (input ("¿Cuanto pesa?: "))
X = eval (input ("¿Cuánto mide en metros?: "))
imc = N/X**2
print ("Su imc es", imc)
print ("Un ímc muy alto indica obesidad. Los valores normales de imc están entre 20 y 25 pero esos límites dependen de la edad, del sexo, de la constitución física, etc.")
56