
import {StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

//IMPORTANDO LOS COMPONENTES DE REACT 
import Cesta from './src/telas/Cesta'

import mock from './src/mocks/cesta'

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRagular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fonteCarregada){
    return <View/>
  }
  return (
    <SafeAreaView style={ { flex:1 } }>
      <StatusBar/>
      <Cesta {...mock}/>
      
    </SafeAreaView>
  );
}

