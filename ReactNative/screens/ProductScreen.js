import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from "react-native";
import data from "../data/products.json";

class ProductScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }
    componentDidMount() {
        this.setState({ products: data });
    }
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Products Screen</Text>
            <FlatList
                style={styles.list}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={this.state.products}
                keyExtractor={(products) => products.id}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.productImage}
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <View style={styles.infoRow}>
                                <View style={styles.priceStock}>
                                    <Text style={styles.price}>${item.price}</Text>
                                    <Text style={styles.stock}>Stock: {item.stock}</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.nikeLink}
                                onPress={() => Linking.openURL(item.link)}
                            >
                                <Text style={styles.linkText}>View on Nike →</Text>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: '#f5f5f5'
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: '#333'
    },
    list: {
        flex: 1,
    },
    cardWrapper: {
        backgroundColor: "#fff",
        padding: 0,
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    productImage: {
        width: '100%',
        height: 250,
        backgroundColor: '#f0f0f0',
        resizeMode: 'contain'
    },
    cardContent: {
        padding: 15,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333'
    },
    category: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
        fontStyle: 'italic'
    },
    description: {
        fontSize: 12,
        color: '#888',
        marginBottom: 10,
        lineHeight: 18
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    priceStock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6B6B'
    },
    stock: {
        fontSize: 12,
        color: '#666',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4
    },
    nikeLink: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#000',
        borderRadius: 4,
        alignItems: 'center'
    },
    linkText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
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
        fontWeight: '600'
    },
});
export default ProductScreen;
