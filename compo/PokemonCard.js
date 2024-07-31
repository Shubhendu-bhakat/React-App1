import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function Mpokemoncard({
  name,
  image,
  type,
  hp,
  moves,
  weakness,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
 
    <View style={styles.card}>
      <View style={styles.nameContainer} >
        <Text style={styles.name} >{name}</Text>
        <Text style={styles.hp} >❤️HP: {hp}</Text>
      </View>
      <Image source={image} style={styles.image} accessibilityLabel={`${name} pokemon`} resizeMode='contain' />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weakness.join(", ")}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 18,
  },
  nameContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginBottom:32,
  },
  name:{
    fontSize:30,
    fontWeight:"bold",
  },
  hp:{
    fontSize:22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom:10,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 12,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
},
);
