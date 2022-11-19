import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstTab" component={FirstTab} />
        <Stack.Screen name="SecondTab" component={SecondTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
