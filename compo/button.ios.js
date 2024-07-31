import {
  Pressable,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  useWindowDimensions,
} from "react-native";
export default function ButtonSet() {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={setNewStyle.content}>
      <Pressable>
        <View>
          <Text style={[setNewStyle.text,{
            fontSize: windowWidth > 300 ? 50 : 24,
          }]}>Hi!</Text>
          <Button
            style={[
              setNewStyle.but,
              {
                height: windowHeight > 800 ? "90%" : "70%",
                width: windowWidth > 400 ? "90%" : "80%",
              },
            ]}
            title="Press me!"
            onPress={() => {
              alert("presses");
            }}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

export const setNewStyle = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "plum",
    padding: 20,
    paddingTop: 25,
    alignItems: "center",
  },
  text: {
    color: "lightblue",
  },
  but: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    backgroundColor: "lightgreen",
  },
});
