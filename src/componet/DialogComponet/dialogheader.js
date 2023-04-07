import { View, Text } from 'react-native'
import React from 'react'
import { scale, verticalScale } from '../../constants/scaling';
import { COLORS } from '../../constants';
import { Image } from 'react-native';
import images from '../../constants/images';
import { TouchableOpacity } from 'react-native';

export default function DialogHeader({title,description,descriptionColor,color,handleCrossClick}) {
    return (
     <View>
         <View
        style={{
          marginVertical: verticalScale(20),
          flexDirection:'row',
          position:'relative'
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            borderBottomWidth: 1,
            paddingBottom: verticalScale(20),
            color:color? color: 'black',
            alignContent:"center"
          }}>
          {title}
        </Text>
        <TouchableOpacity onPress={handleCrossClick} style={{position:'absolute',right:scale(2),top:verticalScale(20)}}>
        <Image source={images.cross} style={{
          height:verticalScale(150),
          width:scale(15),
          tintColor:COLORS.error
        }} />
        </TouchableOpacity>
      </View>
      <View style={{
        minHeight:verticalScale(300),
        justifyContent:'center'
      }}>
        <Text style={{
            color:descriptionColor? descriptionColor:COLORS.primary,
            fontWeight:"500",
            fontSize:12
        }}>{description}</Text>
      </View>
     </View>
    );
  }