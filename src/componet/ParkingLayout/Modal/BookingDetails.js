import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Dialog } from '@rneui/themed'
import DatePicker from 'react-native-date-picker'
import DialogHeader from '../../DialogComponet/dialogheader'
import DialogButton from '../../DialogComponet/dialogButton'
import { COLORS } from '../../../constants'

export default function BookingDetails({isBookingDetails,setisBookingDetails}) {
    const [BookingsInfo, setBookingsInfo] = useState({
        typeOfVechile:"",
        

    })
  return (
    <View>
      <Dialog
      isVisible={isBookingDetails}
      onBackdropPress={()=>setisBookingDetails(false)}
    >
      <DialogHeader title={"Booking Details"} description={"Please enter the details of your parking Vechile"} />
      <DialogButton
          title={"close"}
          onPress={()=>{}}
          color={COLORS.error}
          
          />   
    </Dialog>
    </View>
  )
}