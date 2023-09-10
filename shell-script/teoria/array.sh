#!/bin/bash

array=(1 2 3 4 5 6 7 8 9 10)

#Acceder a todos los elementos de un array
for i in ${array[@]}
do
    echo $i
done

#Acceder a un elemento especifico de un array
echo ${array[2]}

#Eliminar un elemento de un array
unset array[2]

#Contar el numero de elementos de un array
echo ${#array[@]}
echo ${#array[*]}

#Añadir elementos a un array
array+=(11)

#Array bidimensional
declare -A matrix

#Acceder a los elementos de un array bidimensional
matrix[0,0]=1
matrix[0,1]=2
matrix[1,0]=3
matrix[1,1]=4

#Eliminar elementos de un elemento de un array bidimensional
unset matrix[0,1]

#Añadir elementos a un array bidimensional
matrix[0,2]=5
matrix[1,2]=6

#Contar el numero de elementos de un array bidimensional
echo ${#matrix[@]}
echo ${#matrix[*]}
