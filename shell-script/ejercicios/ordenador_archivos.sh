#!/bin/bash

#Crear tres carpetas llamadas docx, pptx y xlsx
mkdir docx
mkdir pptx
mkdir xlsx

#Leer todos los archivos del directorio actual y moverlos a las carpetas correspondientes
for i in $(ls)
do
	if [[ $i == *.docx ]]
    then
        mv $i docx
        continue
        fi
    if [[ $i == *.pptx ]]
    then
        mv $i pptx
        continue

        fi

    if [[ $i == *.xlsx ]]
    then
        mv $i xlsx
        continue
    fi
done
