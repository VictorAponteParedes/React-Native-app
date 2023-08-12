import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Texto from "../../../componetes/Texto";

export default function Item( { item: { nome, imagen }}) {

  
   return <View style={estilos.item}>

      <Image source={imagen} style={estilos.imagen} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ecec",
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  imagen: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
