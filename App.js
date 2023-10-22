

import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import SetUp from './SetUp'
import FishBowl from './FishBowl'
import AddDream from './AddDream'
import ChooseFish from './ChooseFish'



const Stack = createNativeStackNavigator();

const MemoryGame = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>     
        
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SetUp" component={SetUp} /> 
        <Stack.Screen name="FishBowl" component={FishBowl} />
        <Stack.Screen name="AddDream" component={AddDream} />
        <Stack.Screen name="ChooseFish" component={ChooseFish} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MemoryGame;