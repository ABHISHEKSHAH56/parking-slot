import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();






function MyStack() {
    return (
      <Stack.Navigator>       
        <Stack.Screen options={{headerShown: false}} name="HomeData" component={HomeScreen} />
      </Stack.Navigator>
    );
  }

const Routes = () =>{
  return (
    <>
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
    
    </>
  );
}

export default Routes;