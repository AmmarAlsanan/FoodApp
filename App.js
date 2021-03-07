import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import the screen
import SearchScreen from "./src/screen/section8/searchScreen";
import DetailOfResult from "./src/screen/section8/deatilOfResult";

//create the navigator

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Search for Restaurants " component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailOfResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
