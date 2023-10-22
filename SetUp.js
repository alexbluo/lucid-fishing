import React, { useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function SetUp({ navigation }) {
  const [name, setName] = useState('');
  const [fontsLoaded] = useFonts({
    Ohwhale: require('./components/fonts/Ohwhale-6Ozo.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#1c3e81' }}>
      <ImageBackground
        source={require('./components/background.png')}
        style={styles.image}>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={styles.spaceInput}>
            <TextInput
              style={styles.input}
              placeholder="What's your name?"
              maxLength={10}
              placeholderTextColor="#bfe2ff"
              onChangeText={(text) =>
                setName(text == '' ? '' : text + "'s ")
              }></TextInput>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('./components/ogfish.gif')} />
          </View>
          <View style={styles.nameSection}>
            <Text style={styles.nameTxt}>fish bowl name:</Text>
            <Text style={styles.nameTxt}>{name} Fish Bowl</Text>
          </View>
        </View>
        <View style={styles.spaceButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FishBowl', { name })}
            style={styles.button}>
            <Text style={styles.buttonText}>Generate fish bowl</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  spaceInput: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 30,
  },
  spaceButton: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 50,
    color:"#bfe2ff",
  },
  input: {
    paddingVertical: 20,
    paddingLeft: 30,
    paddingRight: 50,
    opacity: 0.9,
    borderRadius: 100,
    backgroundColor: '#7095e4',
    justifyContent: 'center',
    fontSize:20,
        fontFamily: 'Ohwhale',
    width: 300, 
  },
  inputText: {
    fontSize: 30,
    color: '#bfe2ff',
  },
  button: {
    paddingVertical: 20,
    paddingLeft: 30,
    paddingRight: 30,
    opacity: 0.9,
    borderRadius: 100,
    backgroundColor: '#7095e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameSection: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
        fontFamily: 'Ohwhale',
  },
  nameTxt: {
    fontSize: 35,
        fontFamily: 'Ohwhale',
    color: '#bfe2ff',
  },
  buttonText: {
    fontSize: 25,
    color: '#bfe2ff',
        justifyContent: 'center',
    alignItems: 'center',
        fontFamily: 'Ohwhale',
    
    

  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
