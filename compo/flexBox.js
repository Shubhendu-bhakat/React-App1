import {Text,View,StyleSheet} from "react-native";
export default function Box({name,backgroundColor }){
    return(
            <Text style={style.box}>This is the text {name}</Text>
        
    )
}


export const style = StyleSheet.create({
    box:{
       backgroundColor:"black"
    },
     
})