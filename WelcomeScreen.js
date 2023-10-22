import React, { useCallback, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Modal,
  Image
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function WelcomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={styles.container}>
      <ImageBackground source={require('./components/background.png')} style={styles.image}>
      <View style= {{flex: 2, justifyContent:'flex-end', alignItems: 'center'}}>
      </View>
      <View style= {{flex: 5, justifyContent:'flex-end', alignItems: 'center', margin:20}}>
      <Image style={{height: 80, width: 100}} source={require('./components/fishbowl.gif')}/>
      </View>
        <View style= {{flex: 8, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={styles.title1}>Welcome to</Text>
          <Text style={styles.title2}>Lucid Fishing</Text>
        </View>
        <View style= {{flex: 10, justifyContent:'flex-start'}}>
        <View >
          <View style={styles.space}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SetUp')}
              style={styles.button}>
              <Text style={styles.buttonText}>【 start 】</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rules}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textStyle}>
                  Our app provides users with a dedicated dream diary where they
                  can record vivid details and emotions from their dreams. This
                  diary includes options to add tags, images, and descriptions,
                  helping users to capture every aspect of their dreams.
                </Text>
                <Pressable
                  style={[styles.rulesButton, styles.buttonOpen]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.ruleText}>close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View>
            <View style={styles.space}>
              <Pressable
                style={[styles.rulesButton, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.ruleText}>➥info</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  space: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
  },
  title1: {
    textAlign: 'center',
    fontSize: 50,
    margin: 5,
    fontWeight: 'bold',
    fontFamily: 'Ohwhale',
    color: '#bfe2ff',
  },
  title2: {
    textAlign: 'center',
    fontSize: 80,
    margin: 15,
    fontWeight: 'bold',
    fontFamily: 'Ohwhale',
    color: '#daf0ff',
  },
  button: {
    paddingVertical: 20,
    paddingLeft: 50,
    paddingRight: 50,
    opacity: 0.9,
    borderRadius: 100,
    backgroundColor: '#7095e4',
  },
  rulesButton: {
    paddingVertical: 10,
    paddingLeft: 30,
    paddingRight: 30,
    opacity: 0.7,
    borderRadius: 100,
    backgroundColor: '#7095e4',
  },
  modalView: {
    margin: 10,
    backgroundColor: '#080b24',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 50,
    margintop: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Ohwhale',
    opacity: 1,
    color: '#bfe2ff',
  },
  ruleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Ohwhale',
    opacity: 1,
    color: '#bfe2ff',
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Ohwhale',
    fontSize: 20,
    marginBottom: 10,
  },
});
