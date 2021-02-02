import RPi.GPIO as GPIO
import time
pin=40 

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(pin, GPIO.OUT)
GPIO.output(pin, GPIO.LOW)
GPIO.cleanup()