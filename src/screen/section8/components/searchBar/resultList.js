import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultList = ({ title, result }) => {
  return (
    <View>
      <Text style={styles.title}>Component {title}</Text>
      <FlatList
        horizontal //so the result will show horizontal
        data={result} // the data is result list
        keyExtractor={(key) => key.id} // id is coming from Api call
        renderItem={({ item }) => {
          <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 5,
  },
});

export default ResultList;
