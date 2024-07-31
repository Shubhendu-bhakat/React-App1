import {View,StyleSheet,SafeAreaView,Text,useWindowDimensions,Platform} from "react-native";
export default function Safearea(){
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;
    return(
        <SafeAreaView style={[c.area,{
            backgroundColor:windowWidth>500?"lightblue" :"plum"
        }]} >
            <View style={[c.box,{
                height:windowHeight>500?"90%":"80%",
                  backgroundColor:windowWidth>500?"lightblue" :"plum"
            }]} >
                <View style={c.box} >
                    <Text style={[{
                        fontSize:  windowWidth>300?50:24 //added platform 
                    }]} >Welcome!</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export const c = StyleSheet.create({
    area:{
        flex:1
    },
    box:{
        flex:1,
        alignItems:"center",
        ...Platform.select({
            ios:{
                fontStyle:'italic',
                fontWeight:600,
                paddingTop:25
            },
            android:{
                fontWeight:400,
            }
        })
        
    },
})