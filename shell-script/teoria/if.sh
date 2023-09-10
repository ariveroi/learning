#!/bin/bash

#Condicionales if else
if [[ $1 >= 0 ]]
then
    echo "La variable es positiva"
    echo "La variable es positiva" >> log.txt
elif [[ $1 == 0 ]]
then
    echo "La variable es 0"
    echo "La variable es 0" >> log.txt
else
    echo "La variable es negativa"
    echo "La variable es negativa" >> log.txt
fi