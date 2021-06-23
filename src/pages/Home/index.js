import React from "react";

import { View, Text } from "react-native";

export default function Home() {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>React Native</Text>
      </View>

      <View
        style={{
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <Text>App</Text>
      </View>
    </>
  );
}
