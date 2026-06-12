// ============================================================================
// Item Component - Product card display with image and details
// Modern 2026 approach: Functional component with proper prop destructuring
// ============================================================================

import React from 'react';
// Import React Native UI components
import { View, Text, StyleSheet, Image } from 'react-native';

/**
 * Item Component
 * Displays a single product in a card format with image on left and details on right
 * @param {Object} props - Component props
 * @param {Object} props.item - Product object containing product data
 * @param {number} props.item.id - Unique product identifier
 * @param {string} props.item.name - Product name (e.g., 'iPad 8')
 * @param {string} props.item.category - Product category (e.g., 'Tablet')
 * @param {string} props.item.price - Product price as string (e.g., '$880')
 * @param {string} props.item.image - Product image URL for network image display
 * @param {string} props.item.description - Product description text
 * @returns {JSX.Element} Rendered product card
 */
const Item = ({ item }) => {
  return (
    // Main card container using flexDirection row to arrange image and text horizontally
    <View style={styles.cardContainer}>
      {/* Image container on the left side of the card */}
      <View style={styles.imgContainer}>
        {/* Image component with network source (URI) and cover resize mode */}
        <Image 
          source={{ uri: item.image }} 
          style={styles.img} 
          resizeMode="cover" // Ensures image fills the space without distortion
        />
      </View>

      {/* Text container on the right side with product details */}
      <View style={styles.textContainer}>
        {/* Product name - main heading */}
        <Text style={styles.name}>{item.name}</Text>
        
        {/* Product category - displayed in cyan color for emphasis */}
        <Text style={styles.category}>{item.category}</Text>
        
        {/* Product description - longer text with gray color */}
        <Text style={styles.desc}>{item.description}</Text>
        
        {/* Product price - bold and in theme color for visibility */}
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

// StyleSheet for Item component - organized for optimal rendering
const styles = StyleSheet.create({
  // Main card container
  cardContainer: {
    // Take full width available (100%)
    width: '100%',
    // Fixed height for consistent card sizes
    height: 130,
    // Arrange child elements horizontally (row) instead of vertically (column)
    flexDirection: 'row',
    // White background for card appearance
    backgroundColor: 'white',
    // Rounded corners for modern card design
    borderRadius: 8,
    // Space between cards in a list
    marginBottom: 10,
  },

  // Container for the product image on the left
  imgContainer: {
    // Fixed width for image column
    width: 100,
    // Match the height of the parent card
    height: '100%',
  },

  // Image styling
  img: {
    // Fixed dimensions to match container
    width: 100,
    height: '100%',
    // Cover mode - scales image to fill space while maintaining aspect ratio
    resizeMode: 'cover',
    // Rounded corners to match card design
    borderRadius: 8,
    // Small top margin for spacing
    marginTop: 5,
  },

  // Container for all text content on the right
  textContainer: {
    // Horizontal padding (left/right) to create spacing from image
    paddingHorizontal: 10,
    // Vertical padding (top/bottom) for spacing
    paddingVertical: 5,
    // Flex: 1 makes this container take up remaining space after image
    flex: 1,
  },

  // Product name/title styling
  name: {
    // Large font for prominence
    fontSize: 16,
    // Bold weight for emphasis
    fontWeight: 'bold',
    // Black color for high contrast
    color: '#000',
  },

  // Product category styling
  category: {
    // Smaller font than name
    fontSize: 12,
    // Cyan color (2026 theme accent) to highlight category
    color: '#22D3FF',
    // Space between name and category
    marginTop: 4,
  },

  // Product description styling
  desc: {
    // Small font size for secondary information
    fontSize: 11,
    // Gray color for muted appearance
    color: '#666',
    // Space between category and description
    marginTop: 4,
  },

  // Product price styling
  price: {
    // Medium-large font for visibility
    fontSize: 14,
    // Bold weight for emphasis
    fontWeight: 'bold',
    // Dark blue-gray theme color
    color: '#384053',
    // Space between description and price
    marginTop: 4,
  },
});

// Export as default export for use in other components
export default Item;
