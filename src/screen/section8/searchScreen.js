import "react-native-gesture-handler";
import React, { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import useResult from "../section10/hook/useResult";
import ResultList from "./components/searchBar/resultList";

//create fun component
const SearchScreen = ({}) => {
  //states
  const [term, setRestaurnt] = useState("");
  const [result, errorMS, searchApi] = useResult();
  if (!result.length) {
    return (
      <>
        <AntDesign
          style={styles.spiner}
          name="loading1"
          size={60}
          color="black"
        />
        <Text>Loading ...!</Text>
      </>
    );
  }

  //method filter the result
  const filterResultByPrice = (price) => {
    //the price ='$' ||"$$"||"$$$"
    return result.filter((result) => {
      return result.price === price; //filter the result
    });
  };

  return (
    //   add the style flex :1 if use View  to make inforce the view to use all the screen to show all the content
    <>
      <Text>SearchScreen </Text>
      <SearchBar
        restrant={term}
        onchanger={setRestaurnt}
        onTermSubmit={searchApi}
      />
      <Button title="Search" onPress={() => searchApi(term)} />
      <Text> result of call API is {result.length} </Text>
      {errorMS ? <Text>{errorMS}</Text> : null}

      {/*ResultList Component with scroll view  */}
      <ScrollView>
        <ResultList title="lowPrice" result={filterResultByPrice("$")} />
        <ResultList title="MidemPrice" result={filterResultByPrice("$$")} />
        <ResultList title="HighPrice" result={filterResultByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  spiner: {
    alignSelf: "center",
  },
});

export default SearchScreen;
