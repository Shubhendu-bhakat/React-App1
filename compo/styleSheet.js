import { View, Text, StyleSheet } from "react-native";
export default function Style() {
  return (
    <View style={StyleCode.container}>
      <Text style={StyleCode.para}>enter</Text>
    </View>
  );
}
//if we will not use export we can,t use it in diffrent files but now due to export we can use it across diffrent file
export const StyleCode = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "white",
    margin: 10,
    padding: 60,
    borderWidth: 2,
    borderBlockColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    shadowColor:"blue",
    shadowOpacity:0.6,
    shadowOffset:{
        height:6,
        width:6,
    },
    shadowRadius:5,
    elevation:10
  },
  para: { fontSize: 40, color: "black" },
});
