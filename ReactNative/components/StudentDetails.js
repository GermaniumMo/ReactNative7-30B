import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const StudentDetails = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 15
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    infoWrapper: {
        marginLeft: 20,
        marignTop: 20
    },
    name: {
        fontWeight: 'bold'
    }
})

export default StudentDetails;