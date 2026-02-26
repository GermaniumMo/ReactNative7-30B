import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StudentDetails = (props) => {
    return (
        <View>
            <Text style={styles.text}>Student Details Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})

export default StudentDetails;