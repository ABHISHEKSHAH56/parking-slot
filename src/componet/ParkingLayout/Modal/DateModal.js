import {View} from 'react-native';
import React ,{useEffect, useState}from 'react';
import {Dialog} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import {scale, verticalScale} from '../../../constants/scaling';
import DialogHeader from '../../DialogComponet/dialogheader';
import {getFutureDate} from '../../../utility';
import DialogButton from '../../DialogComponet/dialogButton';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentDateSet } from '../../../redux/parkingReducers';

export default function DateModal({
  isDateVisible,
  setisDateVisible
}) {
  const dispatch=useDispatch()
  const currentDate=useSelector((state)=>state.ParkingState.currentDate)
  const [currentDateSelected, setcurrentDateSelected] = useState(new Date(currentDate))
  useEffect(() => setcurrentDateSelected(new Date(currentDate)),[])
  
  return (
    <View>
      <Dialog
        isVisible={isDateVisible}
        onBackdropPress={() => setisDateVisible(false)}>
        <DialogHeader
          title={'Select the Date'}
          description={'Please select the date for bookings'}
          handleCrossClick={()=>setisDateVisible(false)}
        />

        <DatePicker
          style={{
            width: scale(200),
            marginVertical: verticalScale(100),
          }}
          minimumDate={new Date()}
          date={currentDateSelected}
          onDateChange={date => {
            setcurrentDateSelected(date)
          }}
          mode="date"
        />
        <DialogButton
          title={"Save Date"}
          onPress={()=>{
            dispatch(CurrentDateSet(currentDateSelected))
           
            setisDateVisible(false)

          }}
          
          />
      </Dialog>
    </View>
  );
}
