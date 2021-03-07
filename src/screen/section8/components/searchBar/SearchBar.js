import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ onchanger, restrant, onTermSubmit }) => {
  return (
    <View style={styles.SearchBar}>
      <EvilIcons
        name="search"
        size={40}
        color="black"
        style={styles.iconSearch}
      />
      <TextInput
        style={styles.inputSearch}
        placeholder="Search"
        value={restrant}
        onChangeText={onchanger}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    backgroundColor: "#b2b2b2",
    flexDirection: "row",
    marginHorizontal: 15,
    height: 50,
    margin: 15,
    borderRadius: 5,
  },
  inputSearch: {
    height: 50,
    flex: 1,
    color: "black",
    fontSize: 20,
  },
  iconSearch: {
    margin: 3,
    alignSelf: "center",
  },
});

export default SearchBar;
