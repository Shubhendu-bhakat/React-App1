import { useState } from "react";
import {
  View,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert
} from "react-native";
import Greet from "./Greet";
export default function CoreCompo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShow, setIsShow] = useState(true);
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "pink" }}>
      <Button
        title="Hide-statusBar"
        color="black"
        onPress={() => {
          if(isShow==true){
            setIsShow(false);
            console.log(isShow);
          }
          else{
            setIsShow(true);
            console.log(isShow);
          }
        }}
      />
      <StatusBar backgroundColor="lightyellow" barStyle="light-content" hidden={isShow} />
      <Button
        title="press"
        color="midnightblue"
        
        onPress={() => {
          console.log("Button state changed from True to true by first");
          setIsVisible(true);
          Alert.alert("State chnaged ","Color changed",[{
            text:"Cancel",
            onPress:()=>{console.log("Cancel pressed")}
          },
        {
          text:"Ok",
          onPress:()=>{console.log("Ok pressed")}
        }]);
        }}
      />

      {/* <ActivityIndicator color="black" size={80} animating={true}/> by default the value of animation is true  */}
      <Modal
        visible={isVisible}
        animationType="slide"
        presentationStyle="pageSheet" //or formSheet
        onRequestClose={() => {
          setIsVisible(false);
        }}
      >
        <View style={{ flex: 1, padding: 60, backgroundColor: "red" }}>
          <Text>Model content</Text>
          <Button
            title="Close"
            color="lightblue"
            onPress={() => {
              console.log("Button state changed from false to true by 2nd");
              setIsVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}


