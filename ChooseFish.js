import * as React from 'react'
import {useCallback, useState} from'react'
import { Text, 
Image, 
StyleSheet, 
Button, 
View, 
TouchableOpacity, 
ImageBackground,
FlatList } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const image = {uri: 'https://cdn.discordapp.com/attachments/1163558861819625555/1165369355580747877/Screenshot_2023-10-21_152133.png?ex=654699c9&is=653424c9&hm=c0f79ecc6f3cb203b3f3004f147798761719c6157008a38bdeef542ef160450e&'};

type TileProps = {
  pic: string;
  onPress: string;
  index: string
};

const Fish = (props: TileProps) =>{
  return (
    <View style={styles.game}>
      <TouchableOpacity onPress={props.onPress}>
        <Image className= "back" style={styles.pic} source={props.pic}/>
      </TouchableOpacity>
    </View>
  )
}


export default function ChooseFish({navigation}) {
  
  const [cards, setCards] = useState([
  {id: 1, name: "orange", status: false, img:require('./components/ogfish.gif')},
  {id: 2, name: "red", status: false, img:require('./components/fish2.gif')},
  {id: 3, name: "green", status: false, img:require('./components/fish3.gif')},
  {id: 4, name: "blue", status: false, img:require('./components/fish4.gif')},
  {id: 5, name: "purple", status: false, img:require('./components/fish5.gif')},
  {id: 6, name: "rainbow", status: false, img:require('./components/fish6.gif')},

  ].map((card) => ({...card})))

  const [fontsLoaded] = useFonts ({
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

  const changeStatus = (userObj, userObj1, status) => {
    userObj1.status = status     
    userObj.status = status  
  }


  const renderItems = ({item, index}) => {
    return (
        <Fish 
          pic={item.img} 
          id={item.id} 
          onPress={() => navigation.navigate('AddDream')}
          indx={index}
        />
    );
  };

  return (
  <View style={styles.container}>
    <ImageBackground source = {image} resizeMode= "cover" style={styles.image}>
    <Text style = {styles.title1}>
        Select a Fish!
      </Text>
    <View style={styles.game}>
      <FlatList
        numColumns={2}
        keyExtractor = {(item) => item.id}
        data={cards}
        renderItem={(index) => renderItems(index)}
      />

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
    textAlign: 'center', // Centering text horizontally
    textAlignVertical: 'center',
    marginTop: -10,
    paddingVertical: 95,
    fontSize: 50,
    fontFamily: 'Ohwhale',
    color: '#bfe2ff',
  },
game:{
  //backgroundColor:  "#d1d5d6",
  flex: 25,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
},

pic:{
  height: 100,
  width: 100, 
}
});