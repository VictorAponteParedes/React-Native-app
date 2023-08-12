import React from "react";

import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}){
    let estilo = estilos.texto

    if(style?.fontWeight === "bold"){
        estilo = estilo.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}


const estilos = StyleSheet.create({
    texto:{
        fontFamily:"MontserratRagular",
        fontWeight:"normal"
    },
    textoNegrito:{
        fontFamily:"MontserratBold",
        fontWeight:"normal"
    }
})