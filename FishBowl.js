
import {useCallback} from'react'
import { Text, 
SafeAreaView, 
StyleSheet, 
Button, 
View, 
TouchableOpacity, 
ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();



export default function FishBowl({navigation}) {
    const route = useRoute()
      const [name, setName] = useState(route.params?.name);
  const [fontsLoaded] = useFonts ({
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
    <View style= {styles.container}>
    <ImageBackground source ={require('./components/fishBowl.png')} resizeMode= "cover" style={styles.image}>
    <View style={{flex: 1}}>
      <Text style={styles.title1}>
        {name}Fish Bowl
      </Text>
    </View>
    <View style={styles.fixToText}>
 
    
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('AddDream')}>
      <Text style={styles.buttonText2}>
        +
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText2}>
        ☰
      </Text>
    </TouchableOpacity>
    </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title1: {
    flex: 1,
   // justifyContent: 'center',
    textAlign: 'center', // Centering text horizontally
    textAlignVertical: 'center',
    marginTop: -30,
    paddingVertical: 95,
    fontSize: 50,
    fontFamily: 'Ohwhale',
    color: '#bfe2ff',
  },
  button: { 
    width: 100, 
    height: 100,
    borderRadius: 50, // Half of the width and height to make it a circle
    backgroundColor: '#7095e4', // Button background color
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  buttonText1: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
    color: '#bfe2ff',
  },
  buttonText2: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
    color: '#bfe2ff',
  },
  fixToText: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    //backgroundColor: "#841584",
    fontSize: 50,
  },
});
