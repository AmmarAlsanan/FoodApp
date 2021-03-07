import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//import components
import ResultCard from "./ResultCard";

const ResultList = ({ title, result }) => {
  //create navigation hook
  const navigation = useNavigation();
  return (
    <View style={styles.contener}>
      <Text style={styles.title}>Component {title}</Text>
      <FlatList
        horizontal //so the result will show horizontal
        showsHorizontalScrollIndicator={false}
        data={result} // the data is result list
        keyExtractor={(key) => key.id} // id is coming from Api call
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={(() => navigation.navigate("Details"), { id: item.id })}
            >
              <ResultCard result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  contener: { marginBottom: 5 },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 5,
  },
});

export default ResultList;
