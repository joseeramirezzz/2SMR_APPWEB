print ("CONVERTIDOR DE SEGUNDOS A HORAS Y MINUTOS")
N = eval (input ("Escriba una cantidad de segundos: "))
Horas = N//3600
Minutos = N%3600//60
Segundos = N%60
print  (N,"segundos son",Horas,"horas,",Minutos,"minutos y",Segundos,"segundos")