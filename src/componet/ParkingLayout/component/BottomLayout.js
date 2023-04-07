import { View, Text,Image } from 'react-native'
import React from 'react'
import { COLORS, Images } from '../../../constants';
import { moderateScale ,verticalScale,scale} from '../../../constants/scaling';
import { TouchableOpacity } from 'react-native';
import images from '../../../constants/images';
import { formatDate } from '../../../constants/utility';
import { useSelector } from 'react-redux';

export default function BottomPart(props) {
  const currentDate=useSelector((state)=>state.ParkingState.currentDate)
    return (
      <View
        style={{
          flex: 0.2,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.RedDot}
              style={{
                height: moderateScale(10),
                width: moderateScale(10),
                tintColor: COLORS.support4,
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                padding: 2,
              }}>
              Booked
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.RedDot}
              style={{
                height: moderateScale(10),
                width: moderateScale(10),
                tintColor: COLORS.grey,
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                padding: 2,
              }}>
              Available
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.GreenDot}
              style={{
                height: moderateScale(10),
                width: moderateScale(10),
                tintColor: '#50D050',
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                padding: 2,
              }}>
              {' '}
              {props.selected ? 1  : ''}-Selected
            </Text>
          </View>
        </View>
        <View style={{
          marginHorizontal:scale(40)
        }}>
        
        
        <View style={{
          flexDirection:'row',
          justifyContent:"flex-start",
          alignItems:'center'

        }}>
          <Image source={images.info} style={{height:verticalScale(100),width:scale(10)}} />
          {
            props.selected ? 
            <View>
              <Text style={{fontSize:10,marginLeft:scale(10)}}>You selected parking  space <Text style={{fontWeight:"bold"}}>{props.selected}</Text> </Text>
            </View> :
            <View>
              <Text style={{fontSize:10,marginLeft:scale(10)}}>Tap on avilable car to book the parking space</Text>

            </View>
          }
          
          
          </View>
        </View>
  
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: verticalScale(550),
            margin: moderateScale(10),
            borderRadius: moderateScale(15),
            zIndex: 2,
          }}>
          <TouchableOpacity
            onPress={()=>props.setisDateVisible(true)}
            style={{
              flex: 0.5,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: COLORS.grey,
              justifyContent: 'space-around',
              backgroundColor:"teal",
              height:verticalScale(550),
              borderRadius: moderateScale(5),
              alignItems:'center',
              marginRight:moderateScale(2)
            }}>
            <Image
              source={images.Clock}
              style={{
                height: verticalScale(300),
                width: scale(30),
                tintColor: COLORS.light,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color:COLORS.light
                }}>
                {formatDate(currentDate? currentDate : new Date())}
              </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={props.selected ?props.onBookPress:()=>props.setisError(true)}
            style={{
              flex: 0.5,
              backgroundColor: props.selected?COLORS.green: COLORS.grey,
              height: verticalScale(550),
              borderRadius: moderateScale(5),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:moderateScale(2)
            }}>
            <Text
              style={{
                color: COLORS.light,
                fontWeight: 'bold',
              }}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }