import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const MenuScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Welcome to Menu Screen
            </Text>
            <Button
                title="Go to List Screen"
                color="purple"
                onPress={() => props.navigation.navigate('List')}
            />
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('Students')}
            >
                <Text style={styles.btnText}>Go to Students Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('Box')}
            >
                <Text style={styles.btnText}>Go to Box Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.apiBtn]}
                onPress={() => props.navigation.navigate('Posts')}
            >
                <Text style={styles.btnText}>API: Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.apiBtn2]}
                onPress={() => props.navigation.navigate('Users')}
            >
                <Text style={styles.btnText}>API: Users</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.apiBtn3]}
                onPress={() => props.navigation.navigate('Todos')}
            >
                <Text style={styles.btnText}>API: Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.apiBtn4]}
                onPress={() => props.navigation.navigate('Comments')}
            >
                <Text style={styles.btnText}>API: Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.apiBtn5]}
                onPress={() => props.navigation.navigate('Photos')}
            >
                <Text style={styles.btnText}>API: Photos</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5'
    },
    textStyle: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#3446eb',
        marginVertical: 10,
        paddingVertical: 12,
        borderRadius: 8
    },
    apiBtn: {
        backgroundColor: '#007AFF',
        marginTop: 20
    },
    apiBtn2: {
        backgroundColor: '#007AFF'
    },
    apiBtn3: {
        backgroundColor: '#FF9500'
    },
    apiBtn4: {
        backgroundColor: '#9C27B0'
    },
    apiBtn5: {
        backgroundColor: '#FF6B6B'
    },
    btnText: {
        color: "white",
        fontSize: 15,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default MenuScreen;