#!/bin/bash

#Definición de funciones
function saludo {
    echo "Hola $1"
    return
}

#Llamada a funciones
saludo "Juan"
saludo "Pedro"
