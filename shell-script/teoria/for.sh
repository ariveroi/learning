#!/bin/bash

#Bucle for
for i in $(seq 1 10)
do
    echo "Iteración $i"
done

for [i=0; i<10; i=i+1]
do
    echo "Iteración $i"
done

for i in {1..10}
do
    echo "Iteración $i"
done

for i in {1..10..2}
do
    echo "Iteración $i"
done

for i in {10..1..-1}
do
    echo "Iteración $i"
done
