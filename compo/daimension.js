// import { useEffect, useState } from "react"; not nedded if we use useWindowDiamensions
import {View,StyleSheet,Text ,useWindowDimensions} from "react-native";
export default function Daimension(){
    // const [daimension,setDaimensions] = useState({
    //     window:Dimensions.get("window")
    // })

    // useEffect(()=>{
    //     const subscription = Dimensions.addEventListener("change",({window})=>{setDaimensions({window})});
    //     return ()=>subscription?.remove();
    // })
    // const {window} = daimension;
    // const windowWidth = window.width;
    // const windowHeight = window.height;
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;
    return(
        <View style={s.div}>
            <View style={[s.box1,{
                 width:windowWidth > 500 ? "90%":"90%",
                 height:windowHeight >600 ? "60%":"80%",
            }
            ]}>
                <Text style={ {fontSize: windowWidth>500?50:24}} >Welcome!</Text>
            </View>
        </View>
    )
};
// const widowWidth = Dimensions.get("window").width; //importing the dimensions api and their methods 
// const windowHeight = Dimensions.get("window").height;
// console.log({widowWidth,windowHeight});
export const s = StyleSheet.create({
    div:{
        flex:1,
        backgroundColor:"plum",
        padding:60,
        alignItems:"center",
        justifyContent:"center"
    },
    box1:{
        
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent:"center"
    },
    // text:{
    //     fontSize:widowWidth>500? 50:30,
    // }
})