import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [],
        };
    }
    componentDidMount() {
        this.setState({ countries: data });
    }
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Countries Screen</Text>
            <FlatList
                style={styles.list}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={this.state.countries}
                keyExtractor={(countries) => countries.id}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <Text>{item.name}</Text>
                        <Text>{item.country}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text style={styles.buttonText}>← Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    list: {
        flex: 1,
    },
    cardWrapper: {
        backgroundColor: "#f0f0f0",
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    backButton: {
        backgroundColor: "#3446eb",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
export default CountriesScreen;