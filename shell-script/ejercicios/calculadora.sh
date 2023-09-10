#!/bin/bash

# Calculator in shell script
a=$1
b=$3
operacion=$2

case $operacion in
    "+")
        echo "La suma es: " $((a+b))
        ;;
    "-")
        echo "La resta es: " $((a-b))
        ;;
    "*")
        echo "La multiplicacion es: " $((a*b))
        ;;
    "/")
        echo "La division es: " $((a/b))
        ;;
    *)
        echo "Operacion no valida"
        ;;
esac

# Lo mismo pero con if else
if [ $operacion == "+" ]
then
    echo "La suma es: " $((a+b))
elif [ $operacion == "-" ]
then
    echo "La resta es: " $((a-b))
elif [ $operacion == "*" ]
then
    echo "La multiplicacion es: " $((a*b))
elif [ $operacion == "/" ]
then
    echo "La division es: " $((a/b))
else
    echo "Operacion no valida"
    exit 1

fi


