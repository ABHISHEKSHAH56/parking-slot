import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants';
import { moderateScale, verticalScale } from '../../constants/scaling';

export default function DialogButton({title,onPress,color}) {
    return (
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor:color?color: COLORS.primary,
            borderRadius: moderateScale(10),
            height: verticalScale(450),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: verticalScale(100),
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 12,
              color: COLORS.light,
            }}>
           {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }