import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View>
            <Text style={StyleSheet.text}>Students Screen</Text>
            <StudentDetails name="Dion" image={require('../assets/avatar1.png')} description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem fugit quibusdam, reprehenderit et neque exercitationem deleniti dolor nobis laborum consectetur accusantium impedit ea cumque alias, molestias totam, porro quas."/>
            <StudentDetails  name="Fisi" image={require('../assets/avatar2.png')} description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem fugit quibusdam, reprehenderit et neque exercitationem deleniti dolor nobis laborum consectetur accusantium impedit ea cumque alias, molestias totam, porro quas."/>
            <StudentDetails  name="Jon" image={require('../assets/avatar3.png')} description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem fugit quibusdam, reprehenderit et neque exercitationem deleniti dolor nobis laborum consectetur accusantium impedit ea cumque alias, molestias totam, porro quas."/>
            <StudentDetails  name="Leon" image={require('../assets/avatar1.png')} description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem fugit quibusdam, reprehenderit et neque exercitationem deleniti dolor nobis laborum consectetur accusantium impedit ea cumque alias, molestias totam, porro quas."/>
            <StudentDetails  name="Germanium" image={require('../assets/avatar2.png')} description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem fugit quibusdam, reprehenderit et neque exercitationem deleniti dolor nobis laborum consectetur accusantium impedit ea cumque alias, molestias totam, porro quas."/>
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