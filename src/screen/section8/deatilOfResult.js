import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import yelp from "./section9/API/yelpApi";

//create fun component

const DetailOfResult = () => {
  //create state
  const [resultInfo, setResultInfo] = useState(null);
  const [errorMs, setErrorMs] = useState("");

  const navigation = useNavigation();

  const id = navigation.getParam("id");

  //get the info for  the restarant by id

  const fetchInfo = async (id) => {
    try {
      const respnonse = await yelp.get(`/${id}`);
      setResultInfo(respnonse.data);
    } catch (err) {
      setErrorMs("Something Went Wrong ");
    }
  };

  //call it when render the screen
  useEffect(() => {
    fetchInfo(id);
  }, []);

  if (!resultInfo) {
    <Text>Loading ...</Text>;
  }

  return (
    <View>
      <Text>{id} </Text>
      {errorMs ? <Text>{errorMs}</Text> : null}
      <Text>{resultInfo.photos}</Text>
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
