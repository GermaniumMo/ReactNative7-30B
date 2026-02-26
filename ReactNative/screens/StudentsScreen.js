import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View>
            <Text style={StyleSheet.text}>Students Screen</Text>
            <StudentDetails name="Dion"/>
            <StudentDetails/>
            <StudentDetails/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical:  20
    }
})

export default StudentsScreen;