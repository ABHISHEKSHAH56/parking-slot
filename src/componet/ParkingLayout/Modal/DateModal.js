import {View, Text, Image} from 'react-native';
import React from 'react';
import {Dialog} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import {moderateScale, scale, verticalScale} from '../../../constants/scaling';
import {COLORS, Images} from '../../constants';
import images from '../../../constants/images';
import DialogHeader from '../../DialogComponet/dialogheader';
import {getFutureDate} from '../../../utility';
import DialogButton from '../../DialogComponet/dialogButton';
import { useDispatch } from 'react-redux';
import { ParkingSatus } from '../../../redux/parkingReducers';

export default function DateModal({
  isDateVisible,
  setisDateVisible,
  selectedDate,
  setselectedDate,
}) {
  const dispatch=useDispatch()
  return (
    <View>
      <Dialog
        isVisible={isDateVisible}
        onBackdropPress={() => setisDateVisible(false)}>
        <DialogHeader
          title={'Select the Date'}
          description={'Please select the date for bookings'}
        />

        <DatePicker
          style={{
            width: scale(200),
            marginVertical: verticalScale(100),
          }}
          minimumDate={new Date()}
          maximumDate={getFutureDate()}
          date={selectedDate}
          onDateChange={date => {
            console.log('xxx', date);
            setselectedDate(date);
            dispatch(ParkingSatus({bookingDate:date.toISOString()}))
          }}
          mode="date"
        />
        <DialogButton
          title={"Save Date"}
          onPress={()=>setisDateVisible(false)}
          
          />
      </Dialog>
    </View>
  );
}
