import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MainScreen =() => {
    return <View style={styles.container}>
        <Text style={styles.textStyles}>This is Main Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles: {
        fontSize: 50,
    }
});

export default MainScreen;