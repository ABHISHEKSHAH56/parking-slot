import React from 'react'
import { View,Text } from 'react-native';
import { verticalScale } from '../../../constants/scaling';

export default function CarItemsLayout({zone}) {
    return (
      <View
        style={{
          flex: 0.3,
          height: verticalScale(450),
          justifyContent: 'center',
          alignItems:'center'
        }}>
        <Text
          style={{
            fontSize: 10,
            transform: [
              {
                rotate: '90deg',
              },
            ],
            fontWeight: 'bold',
          }}>
          {zone}
        </Text>
      </View>
    );
  }
