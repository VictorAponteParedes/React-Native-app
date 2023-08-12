import React from "react";

import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from '../../../componetes/Texto'


export default function Detalhes({nome, nomeFazenda, descricao, logoFazenda, preco, boton}) {
  return (
    <>
      <Texto style={estilo.nome}>{nome}</Texto>
      <View style={estilo.fazenda}>
        <Image source={logoFazenda} style={estilo.imagenFazendo} />
        <Texto style={estilo.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilo.descricao}>
        {descricao}
      </Texto>
      <Texto style={estilo.preco}>{preco}</Texto>

      <TouchableOpacity style={estilo.boton} onPress={()=>{}}>
        <Texto style={estilo.texto}>{ boton }</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilo = StyleSheet.create({
    
    nome:{
        color:"#464646",
        fontSize:26,
        lineHeight:46,
        fontWeight:"bold",
    },

    fazenda:{
        flexDirection:"row",
        paddingVertical:12,
        
    },

    imagenFazendo:{
        width:32,
        height:32
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        fontFamily:"MontserratRagular"
    },
    descricao:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26
    },
    preco:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8
    },
    boton:{
      marginTop:16,
      backgroundColor:"#2A9F85",
      paddingVertical:16,
      borderRadius:6,

    },
    texto:{
      textAlign: 'center',
      color: '#FFF',
      fontSize:16,
      lineHeight:26,
      fontWeight:"bold"

    }
})
