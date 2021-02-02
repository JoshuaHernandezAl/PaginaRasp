#importacion de modulos
from time import sleep
from rpi_TM1638 import TMBoards #imprtante cambio de biblioteca/modulo de TM1638 a rpi_TM1638
import random

#numeros de piens a usar en BCM para TMBoards
DIO = 19
CLK = 13
STB = 26
#intanciacion en TMBoards se incia los pin desabilitados con 0
TM = TMBoards(DIO, CLK, STB, 0)

#metodo limpieza de display similiar a clear.py
TM.clearDisplay()
TM.leds[1] = False       
TM.leds[3] = False
TM.leds[5] = False
TM.leds[7] = False

TM.leds[0] = False       
TM.leds[2] = False
TM.leds[4] = False
TM.leds[6] = False
TM.clearDisplay()