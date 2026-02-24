import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const MenuScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>
                Welcome to Menu Screen
            </Text>
            <Button
                title="Go to List Screen"
                color="purple"
                onPress={() => props.navigation.navigate('List')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20
    }
});

export default MenuScreen;