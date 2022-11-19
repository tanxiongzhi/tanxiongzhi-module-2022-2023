import * as React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

function SecondTab({ navigation }) {
  const [val, setVal] = useState("");
  const [list, setList] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'center'
        }}
      >
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(text) => setVal(text)}
          value={val}
        />
        <TouchableOpacity
          onPress={() => {
            let newList = [...list];
            newList.push(val);
            setList(newList);
          }}
        >
          <Text>add</Text>
        </TouchableOpacity>
      </View>
      {list.map((val, index) => {
        return <Text key={index}>{val}</Text>;
      })}
    </View>
  );
}

export default SecondTab;
