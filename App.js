import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'


export default function App() {

  const [imageUri, setImageUri] = React.useState()

  const obterPermissao = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()

    if(!granted){
      alert('voce precisa dar pemissao')
    }
  }
 
  const obterImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync()

    if (!result.cancelled) {
      setImageUri(result.uri)
    }
  }

  React.useEffect(() => {
    obterPermissao();
  }, [])

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{uri: imageUri}} style={{width:200, height:200}}/>}
      <Button title='carregar imagem' onPress={() => obterImagem()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
