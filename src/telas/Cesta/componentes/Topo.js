import React from "react";

import {Image, StyleSheet, Dimensions} from 'react-native';

import topo from '../../../../assets/topo.png'
import Texto from '../../../componetes/Texto'

const width = Dimensions.get('screen').width

export default function Topo({titulo}){

    return <>
        <Image source={topo} style={estilo.topo }/>
        <Texto style={estilo.titulo} >{ titulo }</Texto>
    
    </>
}


const estilo = StyleSheet.create({
    
    topo:{
        width:'100%',
        height:578 / 768 * width
    },

    titulo:{
        width:'100%',
        textAlign:'center',
        position:"absolute",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold",
        padding:16,
        color:"white"
    },
})