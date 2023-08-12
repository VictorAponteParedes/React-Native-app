//IMPORTANDO MODULOS DE REACT
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

//IMPORTANDO MODULOS DEL PROYECTO
import Texto from "../../componetes/Texto";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

import Item from "./componentes/Item";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} /> 
              <View style={estilo.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilo.titulo}>{itens.nome}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilo = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 36,
    marginVertical: 8,
    fontSize: 20,
    lineHeight: 32,
  },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
