import "react-native-gesture-handler";
import React, { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import { View, Text, StyleSheet, Button } from "react-native";

import useResult from "../section10/hook/useResult";
import ResultList from "./components/searchBar/resultList";

//create fun component
const SearchScreen = () => {
  //states
  const [term, setRestaurnt] = useState("");
  const [result, errorMS, searchApi] = useResult();

  //method filter the result
  const filterResultByPrice = (price) => {
    //the price ='$' ||"$$"||"$$$"
    return result.filter((result) => {
      return result.price === price; //filter the result
    });
  };

  return (
    <View>
      <Text>SearchScreen </Text>
      <SearchBar
        restrant={term}
        onchanger={setRestaurnt}
        onTermSubmit={searchApi}
      />
      <Button title="Search" onPress={() => searchApi(term)} />
      <Text> result of call API is {result.length} </Text>
      {errorMS ? <Text>{errorMS}</Text> : null}

      {/*ResultList Component */}
      <ResultList title="lowPrice" result={filterResultByPrice("$")} />
      <ResultList title="MidemPrice" result={filterResultByPrice("$$")} />
      <ResultList title="HighPrice" result={filterResultByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SearchScreen;
