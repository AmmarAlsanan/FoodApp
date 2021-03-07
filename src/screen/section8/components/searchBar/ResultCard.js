import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultCard = ({ result }) => {
  return (
    <View>
      <Image style={styles.cardImage} source={{ uri: result.image_url }} />
      <Text style={styles.cardName}>{result.name}</Text>
      <Text style={styles.cardInfo}>
        {result.rating} Stars , {result.review_count} Review
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 15,
  },
  cardName: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  cardImage: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
  cardInfo: {
    color: "grey",
    fontSize: 10,
  },
});

export default ResultCard;
