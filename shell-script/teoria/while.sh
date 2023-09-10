#!/bin/bash

#Bucle while
CONTADOR=0
while [ $CONTADOR < 3 ]; do
    echo "Contador: $CONTADOR "
    CONTADOR=$(($CONTADOR+1))
done