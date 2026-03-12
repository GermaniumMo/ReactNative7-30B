import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
    return(
       <View style={{flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: "center"
       }}>
            <View style={{width: 150, height: 50, backgroundColor: 'powderblue', alignSelf: 'stretch'}}></View>
            <View style={{width: 100, height: 50, backgroundColor: 'skyblue', alignSelf: "flex-end"}}></View>
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue', alignSelf: "flex-start"}}></View>
       </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    }
});

export default BoxScreen;