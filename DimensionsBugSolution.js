```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const dimensions = Dimensions.get('window');
    setScreenDimensions(dimensions);
  }, []);

  return (
    <View style={[styles.container, { width: screenDimensions.width, height: screenDimensions.height }]}>
      <Text>Width: {screenDimensions.width}</Text>
      <Text>Height: {screenDimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DimensionsBugSolution;
```