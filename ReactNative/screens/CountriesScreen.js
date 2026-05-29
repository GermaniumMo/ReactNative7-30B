import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import countriesData from '../data/countries.json';

export default function CountriesScreen({ navigation }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries</Text>
      <FlatList
        data={countries}
        keyExtractor={(country) => country.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemId}>ID: {item.id}</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCountry}>{item.country}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#34C759',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemId: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemCountry: {
    fontSize: 14,
    color: '#34C759',
    marginBottom: 5,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  backButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
