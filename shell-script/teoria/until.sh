#!/bin/bash

#Bucle until
CONTADOR=0
until [ $CONTADOR >= 3]]; do
    echo El contador es $CONTADOR
    CONTADOR=$(($CONTADOR+1))
done