// ============================================================================
// Home Screen - Main entry point of Digital School app
// Modern 2026 approach: Uses functional components with hooks instead of classes
// This is more performant, easier to read, and aligns with React best practices
// ============================================================================

import React, { useState, useEffect } from 'react';
// Import React Native UI components needed for the screen
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// Import Swiper component for the image carousel functionality
import Swiper from 'react-native-swiper-new';
// Import custom Icon component for device category icons
import Icon from '../components/Icon';
// Import custom Item component for product card display
import Item from '../components/Item';
// Import products data from JSON file - 2026 best practice: separate data from UI
import data from '../data/data.json';

// ============================================================================
// Color Constants - Define colors as constants for maintainability
// 2026 practice: Extracting magic colors to named constants
// ============================================================================
const COLORS = {
  // Primary dark blue-gray color used throughout the app theme
  primary: '#384053',
  // Accent cyan color for highlights and interactive elements
  accent: '#22D3FF',
  // White background for cards and main content
  white: '#ffffff',
  // Light gray for secondary information
  lightGray: '#f5f5f5',
  // Dark text color
  darkText: '#000',
  // Secondary gray text
  secondaryText: '#666',
};

/**
 * Home Component - Main screen showing carousel, device icons, and products
 * Modern 2026 functional component with React hooks
 * @returns {JSX.Element} Complete home screen UI
 */
const Home = () => {
  // ========================================================================
  // State Management using React Hooks
  // ========================================================================
  
  // State to store the products loaded from data.json
  // Better 2026 practice: Use useState hook instead of class component state
  const [products, setProducts] = useState([]);
  
  // State to track the currently visible carousel slide index
  const [carouselIndex, setCarouselIndex] = useState(0);

  // ========================================================================
  // Side Effects - Load data on component mount
  // ========================================================================
  
  /**
   * useEffect hook runs once when component mounts (empty dependency array)
   * Loads products data from the imported JSON file
   * Better 2026 practice: Using hooks for side effects instead of componentDidMount
   */
  useEffect(() => {
    // Load popular products from data.json
    setProducts(data.popularproducts);
  }, []); // Empty dependency array means this runs only once on mount

  // ========================================================================
  // Component Render
  // ========================================================================
  
  return (
    // ScrollView allows vertical scrolling for content that exceeds screen height
    <ScrollView style={styles.container}>
      {/* ===================================================================
          SECTION 1: IMAGE CAROUSEL BANNER
          ====================================================================*/}
      
      {/* Container for the carousel/slider */}
      <View style={styles.sliderContainer}>
        {/* Swiper component - handles auto-rotating carousel of images */}
        <Swiper
          // Enable automatic sliding
          autoplay={true}
          // Time between slides in seconds
          autoplayTimeout={5}
          // Direction of autoplay (true = forward)
          autoplayDirection={true}
          // Starting slide index (0-based)
          index={0}
          // Enable infinite loop - jumps back to first slide after last
          loop={true}
          // Hide next/previous buttons
          showsButtons={false}
          // Callback when slide changes
          onIndexChanged={(index) => setCarouselIndex(index)}
          // Style for inactive pagination dots
          dotStyle={styles.dot}
          // Color for active pagination dot
          activeDotColor={COLORS.accent}
          // Custom styling for pagination container
          paginationStyle={styles.paginationStyle}
        >
          {/* Avatar 1 banner slide */}
          <View style={styles.imgItem}>
            <Image
              // Require imports the image from assets folder at build time
              source={require('../assets/avatar1.png')}
              style={styles.imgItem}
              // Cover resizeMode maintains aspect ratio and fills container
              resizeMode="cover"
            />
          </View>

          {/* Avatar 2 banner slide */}
          <View style={styles.imgItem}>
            <Image
              source={require('../assets/avatar2.png')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>

          {/* Avatar 3 banner slide */}
          <View style={styles.imgItem}>
            <Image
              source={require('../assets/avatar3.png')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>

          {/* Project 1 banner slide */}
          <View style={styles.imgItem}>
            <Image
              source={require('../assets/project1.png')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>

          {/* Project 2 banner slide */}
          <View style={styles.imgItem}>
            <Image
              source={require('../assets/project2.png')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>

          {/* Download banner slide */}
          <View style={styles.imgItem}>
            <Image
              source={require('../assets/download.png')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>
        </Swiper>
      </View>

      {/* ===================================================================
          SECTION 2: DEVICE CATEGORY ICONS (2x3 GRID)
          ====================================================================*/}
      
      {/* Container for all device icons */}
      <View style={styles.iconsContainer}>
        {/* First row of icons */}
        <View style={styles.iconRow}>
          {/* iPhone icon column */}
          <View style={styles.iconCol}>
            <Icon name="cellphone-iphone" iconText="iPhone" />
          </View>
          
          {/* Samsung icon column */}
          <View style={styles.iconCol}>
            <Icon name="android" iconText="Samsung" />
          </View>
          
          {/* Laptop icon column */}
          <View style={styles.iconCol}>
            <Icon name="laptop" iconText="Laptop" />
          </View>
        </View>

        {/* Second row of icons */}
        <View style={styles.iconRow}>
          {/* Tablet icon column */}
          <View style={styles.iconCol}>
            <Icon name="tablet" iconText="Tablet" />
          </View>
          
          {/* Mouse icon column */}
          <View style={styles.iconCol}>
            <Icon name="mouse-outline" iconText="Mouse" />
          </View>
          
          {/* Keyboard icon column */}
          <View style={styles.iconCol}>
            <Icon name="keyboard-outline" iconText="Keyboard" />
          </View>
        </View>
      </View>

      {/* ===================================================================
          SECTION 3: PRODUCTS SECTION HEADER
          ====================================================================*/}
      
      {/* Header text for the products section */}
      <View style={styles.item}>
        {/* Section title */}
        <Text style={styles.sectionTitle}>Most popular products</Text>
      </View>

      {/* ===================================================================
          SECTION 4: PRODUCT LIST
          ====================================================================*/}
      
      {/* Container for product cards */}
      <View style={styles.productsContainer}>
        {/* Map through products array and render Item component for each */}
        {products.map((item) => (
          // Item component - displays individual product card
          // key prop helps React identify which items have changed (required for lists)
          <Item key={item.id} item={item} />
        ))}
      </View>

      {/* ===================================================================
          SECTION 5: CALL-TO-ACTION BUTTON
          ====================================================================*/}
      
      {/* Touchable button to navigate to full products page */}
      <TouchableOpacity style={styles.viewMoreButton}>
        {/* Button text - white color for contrast against cyan background */}
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// ============================================================================
// StyleSheet - All styles for the Home component
// Using StyleSheet.create() improves performance in React Native
// 2026 best practice: Organized styles with clear sections
// ============================================================================

const styles = StyleSheet.create({
  // Main container for the entire screen
  container: {
    // Take up full available height
    flex: 1,
    // White background for clean appearance
    backgroundColor: COLORS.white,
  },

  // ========================
  // CAROUSEL STYLES
  // ========================

  // Container wrapper for the carousel
  sliderContainer: {
    // 90% width with 5% margins on each side for padding
    width: '90%',
    // Fixed height for carousel display
    height: 200,
    // Center the carousel horizontally on screen
    justifyContent: 'center',
    alignSelf: 'center',
    // Top margin for spacing from header
    marginTop: 16,
    // Rounded corners for modern design
    borderRadius: 8,
    // Hide content that exceeds the rounded corners
    overflow: 'hidden',
    // Light gray background
    backgroundColor: COLORS.lightGray,
  },

  // Style for each image slide in the carousel
  imgItem: {
    // Fill the entire carousel container
    width: '100%',
    height: '100%',
    // Rounded corners matching container
    borderRadius: 8,
  },

  // Style for inactive pagination dots
  dot: {
    // Semi-transparent black
    backgroundColor: 'rgba(0,0,0,.2)',
    // Small square size
    width: 8,
    height: 8,
    // Make it circular
    borderRadius: 4,
    // Spacing between dots
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  // Custom styling for pagination container
  paginationStyle: {
    // Space pagination away from bottom of carousel
    marginBottom: 8,
  },

  // ========================
  // DEVICE ICONS STYLES
  // ========================

  // Container for all icon rows
  iconsContainer: {
    // 90% width to match carousel width
    width: '90%',
    // Center horizontally
    alignSelf: 'center',
    // Top margin for spacing from carousel
    marginTop: 30,
    // Column layout for rows to stack vertically
    flexDirection: 'column',
    // Space between rows
    justifyContent: 'space-between',
  },

  // Style for each row of icons (3 columns)
  iconRow: {
    // Row layout - arrange icons horizontally
    flexDirection: 'row',
    // Evenly distribute space between icons
    justifyContent: 'space-between',
    // Space between rows
    marginBottom: 20,
  },

  // Style for each icon column
  iconCol: {
    // Center content
    alignItems: 'center',
    // Each icon takes 30% of row width (3 icons = 100%)
    width: '30%',
    // Fixed height for consistent icon container
    height: 100,
  },

  // ========================
  // SECTION HEADER STYLES
  // ========================

  // Container for section titles
  item: {
    // Center content
    justifyContent: 'center',
    alignSelf: 'center',
    // Horizontal padding for spacing
    paddingHorizontal: 20,
    // Top margin for separation from previous section
    marginTop: 20,
    // Bottom margin for spacing before products
    marginBottom: 40,
  },

  // Section title text styling
  sectionTitle: {
    // Large font size for prominence
    fontSize: 18,
    // Bold weight for emphasis
    fontWeight: 'bold',
    // Space below the title
    marginBottom: 16,
    // Dark color for high contrast
    color: COLORS.darkText,
  },

  // ========================
  // PRODUCTS LIST STYLES
  // ========================

  // Container for all product cards
  productsContainer: {
    // 90% width matching other sections
    width: '90%',
    // Center horizontally
    alignSelf: 'center',
    // Horizontal padding for spacing
    paddingHorizontal: 10,
  },

  // ========================
  // CALL-TO-ACTION BUTTON STYLES
  // ========================

  // View More button styling
  viewMoreButton: {
    // 90% width matching other sections
    width: '90%',
    // Fixed height for button
    height: 50,
    // Cyan background (theme accent color)
    backgroundColor: COLORS.accent,
    // Center horizontally
    alignSelf: 'center',
    // Rounded corners for modern button design
    borderRadius: 8,
    // Center content inside button
    justifyContent: 'center',
    alignItems: 'center',
    // Top margin for separation from products
    marginTop: 20,
    // Bottom margin for spacing before end of scroll
    marginBottom: 40,
  },

  // Text inside the button
  viewMoreText: {
    // Medium-large font for readability
    fontSize: 16,
    // Bold weight for emphasis
    fontWeight: 'bold',
    // White text for contrast against cyan background
    color: COLORS.white,
  },
});

// Export as default export - this is what navigation will load
export default Home;
