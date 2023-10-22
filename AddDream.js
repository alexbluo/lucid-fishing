import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useRoute } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
const image = {uri: 'https://cdn.discordapp.com/attachments/1163558861819625555/1165364465609478246/Screenshot_2023-10-21_150158.png?ex=6546953c&is=6534203c&hm=e87139911dd87539e2f5cc4480eee8919adc79d8d8dc4ba91cab9d14dfe0d25d&'}

export default function AddDream({ navigation }) {
  const route = useRoute()
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  // const [chosenFish, setChosenFish] = useState(route.params?.chosenFish)
  const [diaryEntries, setDiaryEntries] = useState([]);

  const onSubmit = () => {
    const newEntry = {
      title: title,
      date: date,
      text: text
    };
    setDiaryEntries([...diaryEntries, newEntry]);
    setTitle("");
    setText("");
    setDate("");
  };

const [fontsLoaded] = useFonts ({
    'Pinchik' : require('./components/fonts/Pinchik-qRp6.otf'),
    'Ohwhale' : require('./components/fonts/Ohwhale-6Ozo.otf'),
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
    <ImageBackground source = {image} resizeMode= "cover" style={styles.image}>
      <View style={styles.formContainer}>
        <View style={styles.diaryForm}>
          <TextInput
            value={title}
            placeholderTextColor="#bfe2ff"
            maxLength={10}
            onChangeText={(value) => setTitle(value)}
            placeholder="Add a Title"
            style={styles.diaryInput}
          />
          <TextInput
            value={date}
            placeholderTextColor="#bfe2ff"
            maxLength={10}
            onChangeText={(value) => setDate(value)}
            placeholder="Enter the Date"
            style={styles.diaryDateInput}
          />
        </View>
        <TextInput
          value={text}
          onChangeText={(value) => setText(value)}
          multiline
          numberOfLines={2}
          returnKeyType='done'
          maxLength={300}
          style={styles.diaryTextarea}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
        <TouchableOpacity title="Choose Fish" onPress={() => navigation.navigate('ChooseFish')} style={styles.diaryButton} ><Text style={styles.entryTitle}>Choose fish</Text></TouchableOpacity>
        <TouchableOpacity title="Enter" onPress={() => navigation.navigate('FishBowl')} style={styles.diaryButton} ><Text style={styles.entryTitle}>Enter</Text></TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.entriesContainer}>
        {diaryEntries.map((entry, index) => (
          <View key={index} style={styles.entryContainer}>
            <Text style={styles.entryTitle}>{entry.title}</Text>
            <Text style={styles.entryDate}>{entry.date}</Text>
            <Text style={styles.entryText}>{entry.text}</Text>
          </View>
        ))}
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  formContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8 * 16,
  },
  diaryForm: {
    flexDirection: 'column',
    marginBottom: 10,
    marginTop: 8 * 16,
  },
  diaryInput: {
    borderWidth: 1,
    borderColor: '#b8d8e6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Ohwhale',
    fontSize: 16,
    width:230,
    backgroundColor: '#eaf2f8',
  },
  diaryDateInput: {
    borderWidth: 1,
    borderColor: '#b8d8e6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Ohwhale',
    fontSize: 16,
    backgroundColor: '#eaf2f8',
  },
  diaryTextarea: {
    borderWidth: 1,
    borderColor: '#b8d8e6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Ohwhale',
    fontSize: 16,
    height: 100,
    width:230,
    backgroundColor: '#eaf2f8',
  },
  diaryButton: {
    fontFamily: 'Ohwhale',
    fontWeight:'bold',
    fontSize: 16,
    backgroundColor: '#b8d8e6',
    borderRadius: 100,
    padding: 10,
    color: '#bfe2ff'
  },
  entriesContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  entryContainer: {
    borderWidth: 1,
    borderColor: '#b8d8e6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eaf2f8',
  },
  entryTitle: {
    fontFamily: 'Ohwhale',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  entryDate: {
    fontFamily: 'Ohwhale',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryText: {
    fontFamily: 'Ohwhale',
    fontSize: 16,
    textAlign: 'center',
  },
});