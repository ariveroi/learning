#!/bin/bash

lista=($@)

#Ordenar la lista de mayor a menor

for ((i=0; i<$#; i++))
do
    for ((j=0; j<${#lista[@]}; j++))
    do
        if ((${lista[i]} > ${lista[j]}))
        then
            aux=${lista[i]}
            lista[i]=${lista[j]}
            lista[j]=$aux
        fi
    done
done

echo ${lista[@]}
