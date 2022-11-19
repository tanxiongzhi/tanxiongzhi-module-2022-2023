import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function FirstTab({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{
        fontSize: 20
      }}>tanxiongzhi</Text>
      <Text style={{
        fontSize: 20
      }}>KP04</Text>
      <TouchableOpacity style={{
        marginTop: 20
      }} onPress={() => {
        navigation.navigate('SecondTab');
      }}>
        <Text>
         Go To Second Tab
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default FirstTab;
