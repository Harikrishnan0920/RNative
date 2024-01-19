import React from 'react';
import { View, Text, Button } from 'react-native';

const YourOrders = ({ navigation }) => {
  
  return (
    <View>
      <Text>your order page</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default YourOrders;
