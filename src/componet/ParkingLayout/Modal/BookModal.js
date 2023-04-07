import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dialog} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../constants/scaling';
import SelectDropdown from 'react-native-select-dropdown';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants';
import DialogHeader from '../../DialogComponet/dialogheader';
import DialogButton from '../../DialogComponet/dialogButton';
import { useDispatch, useSelector } from 'react-redux';
import { BookTheParkingSpace } from '../../../redux/parkingReducers';
const vehicleNumberRegex = /^[A-Z]{2}\s?[0-9]{1,2}\s?[A-Z]{1,2}\s?[0-9]{4}$/;
const isMatching =(vehicleNumber)=> {return  vehicleNumberRegex.test(vehicleNumber)}
const futureDate=(selectedDate)=>{
  let currentDate = selectedDate;

// Increase the minutes by 30
currentDate.setMinutes(currentDate.getMinutes() + 30);
return currentDate
}

function InputBox({value,handleChange,placeholder,isDisable,errormessage,title}) {
  console.log("error message",errormessage)
  return (
    <View>
      <View
        style={{
          marginVertical: verticalScale(20),
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            margin: moderateScale(2),
            color: COLORS.primary,
          }}>
          {placeholder}
        </Text>
      </View>
      <TextInput
        
        value={value}
        placeholder={placeholder}
        editable={!isDisable}        
        style={{
          width: '100%',
          height: verticalScale(400),
          borderWidth: 1,
          borderColor: errormessage?COLORS.error: COLORS.grey,
          borderRadius: moderateScale(5),
          paddingLeft:scale(20),
          fontSize:12,
          fontWeight:"500"
        }}
        placeholderTextColor={"black"}
        onChangeText={handleChange}
      />
      <Text style={{color:COLORS.error,fontSize:10}}>{errormessage}</Text>
      
    </View>
  );
}

export default function BookingModal({isBookingVisible, setisBookingVisible,selectedSpace,setselectedSpace}) {
  const [bookingData, setBookingData] = useState({
        vehicleType: "",
        vehicleNumber: "DL 11 XX 1111",
        startTime: null,
        endTime: ""
  });
  const [isStartTimeVisible, setisStartTimeVisible] = useState(false)
  const [isEndTimeVisible, setisEndTimeVisible] = useState(false)
  const typeOfVechile = ['Two-wheelers', 'Cars','Three-wheelers',"Electric vehicles"];
  const [ErrorbookingData, setErrorBookingData] = useState({});
 
  const currentDate=useSelector((state)=>state.ParkingState.currentDate)
  const [selectedDate, setselectedDate] = useState(new Date(currentDate))
  useEffect(() => setselectedDate(new Date(currentDate)),[])
  const dispatch=useDispatch()

  const validateData=()=>{
    console.log(bookingData,ErrorbookingData)
    setErrorBookingData({})
    if(!bookingData.vehicleType.length) {
      setErrorBookingData({...ErrorbookingData,vehicleType:"Please select the vechile type "})
      return false
    }
    if(!bookingData.startTime) {
      setErrorBookingData({...ErrorbookingData,startTime:"Please enter the start time  "})
      return false
    }
    if(!bookingData.endTime) {
      setErrorBookingData({...ErrorbookingData,endTime:"Please enter end time  "})
      return false
    }
    if(!bookingData.vehicleNumber) {
      setErrorBookingData({...ErrorbookingData,vehicleNumber:"Please enter the vechile number "})
      return false
    }
    if(!isMatching(bookingData.vehicleNumber))
    {
      setErrorBookingData({...ErrorbookingData,vehicleNumber:"Please enter a valid vechile Number like KA 01 AB 1234"})
      return false 
    }
    setErrorBookingData({})

    return true
  }


  return (
    <View>
      <Dialog
        isVisible={isBookingVisible}
        style={{
          padding: moderateScale(50),
        }}
        onBackdropPress={() => setisBookingVisible(false)}>
        <DialogHeader title={'Parking Booking'} description={"Please enter the details of your parking Vechile"} descriptionColor={COLORS.grey} />
        <View>
          <View>
            <View
              style={{
                marginVertical: verticalScale(20),
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  margin: moderateScale(2),
                  color: COLORS.primary,
                }}>
                Type of vechile
              </Text>
            </View>
            <SelectDropdown
              buttonStyle={{
                width: '100%',
                height: verticalScale(400),
                borderWidth: 1,
                borderColor: COLORS.grey,
                borderRadius: moderateScale(5),
                backgroundColor:'transparent',
                justifyContent:'flex-start',
                borderColor: ErrorbookingData?.vehicleType?COLORS.error: COLORS.grey,

              }}
              buttonTextStyle={{
     
                textAlign:'left',
                fontSize:12,
                fontWeight:"500"
              }}
              data={typeOfVechile}
              
              onSelect={(selectedItem, index) => {
                setBookingData({...bookingData,vehicleType:selectedItem})
                setErrorBookingData({...ErrorbookingData,vehicleType:""})
              }}
            />
            <Text style={{color:COLORS.error,fontSize:10}}>{ErrorbookingData?.vehicleType}</Text>
          </View>

         <TouchableOpacity onPress={()=>setisStartTimeVisible(true)}>
         <InputBox
            placeholder={`Start Time of Parking`}
            value={bookingData.startTime?.toLocaleString()}            
            handleChange={(text)=>{}}
            isDisable={true}
            errormessage={ErrorbookingData?.startTime}
            
          />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>setisEndTimeVisible(true)}>
         <InputBox
            placeholder="End Time  of Parking"
            value={bookingData.endTime?.toLocaleString()}            
            handleChange={(text)=>{}}           
            isDisable={true}
            errormessage={ErrorbookingData?.endTime}

            
          />
         </TouchableOpacity>
          
          <InputBox
            placeholder="Vehicle Number"
            value={bookingData.vehicleNumber}
            errormessage={ErrorbookingData?.vehicleNumber}
            title={"vehicleNumber"} 
            pla           
            handleChange={(text)=>{
              console.log(text.toUpperCase())
              if(isMatching(text)){
                setBookingData({...bookingData,vehicleNumber:text})
                setErrorBookingData({})

              }else{
                setBookingData({...bookingData,vehicleNumber:text})
                setErrorBookingData({...ErrorbookingData,vehicleNumber:"Please enter a valid vechile Number like KA 01 AB 1234"})
              }
            }
            }

            
          />
        </View>
        <DialogButton 
            title="Confirm "
            opacity={(bookingData.endTime && bookingData.startTime && bookingData.vehicleNumber && bookingData.vehicleType ) ? 1 :0.7
            }

            onPress={() => {
              if(validateData())
              {
                
                console.log({
                  ...bookingData,
                  bookingDate: selectedDate.toUTCString(), 
                  parkingSpaceId:selectedSpace,
                  endTime:bookingData.endTime.toUTCString(),
                  startTime:bookingData.startTime.toUTCString()
                })
                dispatch(BookTheParkingSpace({
                  ...bookingData,
                  bookingDate: selectedDate.toUTCString(), 
                  parkingSpaceId:selectedSpace,
                  endTime:bookingData.endTime.toUTCString(),
                  startTime:bookingData.startTime.toUTCString()
                  

                }))
                setisBookingVisible(false)
                setselectedSpace(null)
              }
              else console.log("pressed-")

            }} />
        <DatePicker 
              mode='time'  
              title={"Start Time "} 
              date={selectedDate? selectedDate :new Date()}
              minimumDate={selectedDate? selectedDate :new Date()}
              androidVariant='nativeAndroid'
              modal={true}
              open={isStartTimeVisible}
              onConfirm={(text)=>{
                setBookingData({...bookingData,startTime:new Date(text)})
                setErrorBookingData({...ErrorbookingData,startTime:""})
                setisStartTimeVisible(false)
              }}
              minuteInterval={10}
              is24hourSource='locale'
              onCancel={()=>setisStartTimeVisible(false)}
              

        />
         <DatePicker 
              mode='datetime'  
              title={"End Time "} 
              date={new Date()}
              androidVariant='nativeAndroid'
              modal={true}
              
              minimumDate={futureDate(selectedDate)}
              open={isEndTimeVisible}
              onConfirm={(text)=>{
                if(!bookingData.startTime){
                  setErrorBookingData({...ErrorbookingData,startTime:"Select the start time before end time"})
                }
                else {
                  const startTime=new Date(bookingData.startTime)
                  const endTime=new Date(text)
                  console.log(startTime,endTime)
                  if(startTime>endTime)
                  {
                    setErrorBookingData({...ErrorbookingData,startTime:""})
                    setErrorBookingData({...ErrorbookingData,endTime:"End time can't be smaller than start time "})

                  }
                  else{
                    setErrorBookingData({...ErrorbookingData,startTime:""})
                    setErrorBookingData({...ErrorbookingData,endTime:""})
                    setBookingData({...bookingData,endTime:new Date(text)})
                  }
                }
                setisEndTimeVisible(false)
              }}
              minuteInterval={10}
              is24hourSource='locale'
              onCancel={()=>setisEndTimeVisible(false)}
              

        />
      </Dialog>
    </View>
  );
}
