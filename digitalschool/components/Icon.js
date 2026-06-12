// ============================================================================
// Icon Component - Displays a circular icon with label below
// Modern 2026 approach: Functional component with proper prop destructuring
// ============================================================================

import React from 'react';
// Import React Native UI components
import { View, Text, StyleSheet } from 'react-native';
// Import Material Community Icons for the icon set
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * Icon Component
 * @param {Object} props - Component props
 * @param {string} props.name - Icon name from MaterialCommunityIcons (e.g., 'cellphone-iphone')
 * @param {string} props.iconText - Label text displayed below the icon
 * @returns {JSX.Element} Rendered icon with label
 */
const Icon = ({ name, iconText }) => {
  return (
    // Container wrapper that applies circular background styling
    <View style={styles.iconWrapper}>
      {/* Inner container for the icon itself */}
      <View style={styles.iconContainer}>
        {/* Material Community Icon with cyan color (#22D3FF) and size 27 */}
        <MaterialCommunityIcons name={name} size={27} color="#22D3FF" />
      </View>
      {/* Text label displayed below the icon */}
      <Text style={styles.iconText}>{iconText}</Text>
    </View>
  );
};

// StyleSheet for Icon component - organized for optimal performance
const styles = StyleSheet.create({
  // Main wrapper container
  iconWrapper: {
    // Modern dark blue-gray background color (2026 theme)
    backgroundColor: '#384053',
    // Make it fill 100% of parent width and height
    width: '100%',
    height: '100%',
    // Center content vertically and horizontally
    justifyContent: 'center',
    alignItems: 'center',
    // Apply border radius for circular effect
    borderRadius: 50,
  },

  // Container specifically for the icon element
  iconContainer: {
    // Center the icon horizontally
    alignItems: 'center',
    // Fixed dimensions for consistency
    width: 60,
    height: 60,
    // Center content inside the container
    justifyContent: 'center',
    // Center the container relative to parent
    alignSelf: 'center',
    // Make the icon container circular
    borderRadius: 50,
  },

  // Text styling for the icon label
  iconText: {
    // Fixed height to maintain consistent spacing
    height: 20,
    // Bold font weight for better visibility
    fontWeight: '600',
    // Dark red color for label text (retro-style)
    color: '#600',
  },
});

// Export as default export for use in other components
export default Icon;
