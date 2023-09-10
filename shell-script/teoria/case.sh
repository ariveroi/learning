#!/bin/bash

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