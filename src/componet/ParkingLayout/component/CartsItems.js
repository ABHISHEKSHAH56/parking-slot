import { View, Text ,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { scale, verticalScale } from '../../../constants/scaling';
import { COLORS } from '../../../constants';
import CarItemsLayout from './CarItemsLayout';
import { TouchableOpacity } from 'react-native';
import images from '../../../constants/images';

export default function CarItems({item,setselected,selected,setisBookingDetails}) {
 
   
   
  
    return (
      <>
      {
        item &&  <View
        style={{
          height: verticalScale(450),
          width: scale(100),
          borderColor: COLORS.grey,
          borderRadius: 5,            
          shadowColor: COLORS.grey,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 4,
          backgroundColor: item.isAvailable && selected==item.id ? COLORS.green : "transparent"
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CarItemsLayout zone={item.id}  />          
          <TouchableOpacity
            onPress={() => {
              if(item.isAvailable)
              {
                if(selected==item.id) setselected(null)
                else setselected(item.id)
              }
              else setisBookingDetails(item.id)
              
             
            }}
            style={{
              flex: 0.8,
              height: verticalScale(450),
              justifyContent:"center",
              alignItems:"center"
            }}>
            <Image
              source={item.isAvailable?images.sedan: images.car}
              resizeMode="center"
              style={{
                height: verticalScale(450),
                width: scale(100),
                paddingTop:verticalScale(50)
               
                
              }}
            />
          </TouchableOpacity>          
        </View>
      </View>
      }
      </>
     
    );
  }