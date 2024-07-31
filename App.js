import React from 'react';
import { SafeAreaView, StyleSheet, Platform ,ScrollView} from 'react-native';
import Mpokemoncard from './compo/PokemonCard';

export default function App() {
  const charmander = {
    name: "Charmander",
    image: require("./assets/images1.jpg"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  }
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/images3.jpeg"), 
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/images2.jpeg"), 
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/images3.jpeg"), 
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Mpokemoncard {...charmander} />
      <Mpokemoncard {...squirtleData } />
      <Mpokemoncard {...bulbasaurData}/>
      <Mpokemoncard {...pikachuData}/>
      
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
