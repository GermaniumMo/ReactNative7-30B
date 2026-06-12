// Import React for component creation
import React from "react";
// Import RN primitives used below
import { Text, Image, View, StyleSheet } from "react-native";

// `StudentDetails` renders a compact card with an image and text
const StudentDetails = (props) => {
    // props: { image, name, description }
    return (
        // outer container (reserved for future padding or spacing)
        <View style={styles.container}>
            {/* Card wrapper aligns image and text side-by-side */}
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    {/* Student avatar or image */}
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    {/* Student name */}
                    <Text style={styles.name}>{props.name}</Text>
                    {/* Short description or additional info */}
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}

// Styles for the small student card
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