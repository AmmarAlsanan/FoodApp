import React from "react";
import { View, Text, StyleSheet } from "react-native";

//create fun component

const DetailOfResult = () => {
  return (
    <View>
      <Text>Detail Of Result Screen </Text>
      <Text>Info about the Result</Text>
      <Text>Image about the result </Text>
    </View>
  );
};

//create style
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default DetailOfResult;
