import {View, Text, Image, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, Images} from '../../constants';
import {verticalScale, moderateScale, scale} from '../../constants/scaling';
import {useDispatch, useSelector} from 'react-redux';
import DateModal from './Modal/DateModal';
import CarItems from './component/CartsItems';
import BottomPart from './component/BottomLayout';
import BookingModal from './Modal/BookModal';
import BookingDetails from './Modal/BookingDetails';
import MessagesDetails from './Modal/MessagesDetails';
import { CurrentDateSet, ParkingSatus } from '../../redux/parkingReducers';
import LoadingDialog from './Modal/LoadingDialog';

function RoadLayout() {
  return (
    <View
      style={{
        height: verticalScale(450),
        width: scale(100),
      }}>
      <Image
        source={require('../../assets/icons/road.png')}
        resizeMode="cover"
        style={{
          height: verticalScale(450),
          width: scale(100),
        }}
      />
    </View>
  );
}

export default function () {
  const currentDate=useSelector((state)=>state.ParkingState.currentDate)
  const parkingSpaces = useSelector(state => state.ParkingState.parkingSpaces);
  const [selectedSpace, setselectedSpace] = useState('');
  const [isDateVisible, setisDateVisible] = useState(false);
  const [isBookingVisible, setisBookingVisible] = useState(false);
  const [isBookingDetails, setisBookingDetails] = useState(false);
  const [isError, setisError] = useState(false)
  const [isLoaderVisible, setisLoaderVisible] = useState(false)
  const dispatch=useDispatch()
  useEffect(() => {


     if(currentDate){
      setisLoaderVisible(true)
      setTimeout(() => {
        setisLoaderVisible(false)
        
      }, 1000);    
      dispatch(ParkingSatus({
        bookingDate: currentDate ?? new Date().toUTCString()
      }))
    
     }
  
    
  }, [currentDate])

  useEffect(() => {
    dispatch(CurrentDateSet(new Date()))
  }, [])
  
 
  return (
    <View style={{flex: 1, backgroundColor: COLORS.light}}>
      <View style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginVertical: verticalScale(50),
          flexDirection:'row'
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            borderBottomWidth: 1,
            paddingBottom: verticalScale(20),
            color:COLORS.error,
            alignContent:"center"
          }}>
         Parking Slot
        </Text>
        </View>
        <View
          style={{
            width: scale(100) * 3,
            height: verticalScale(450) * 11,
            borderRadius: 4,            
            shadowColor: COLORS.grey,
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 2,
            
          }}>
            <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <View style={{width:scale(100),height:verticalScale(400),justifyContent:"center",alignItems:'center',}}>
                  <Text style={{fontSize:15,fontWeight:"600",color:"black"}}>Zone-A</Text>
                </View>
                <View style={{width:scale(100),height:verticalScale(400),justifyContent:"center",alignItems:'center'}}>
                  <Text style={{fontSize:15,fontWeight:"600",color:"black"}}>Entry</Text>
                </View>
                <View style={{width:scale(100),height:verticalScale(400),justifyContent:"center",alignItems:'center'}}>
                  <Text style={{fontSize:15,fontWeight:"600",color:"black"}}>Zone-B</Text>
                </View>

            </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                
              {parkingSpaces.slice(0,10).map((item,index) => (
                <CarItems
                  key={item.id}
                  item={item}
                  index={index}
                  isRight={true}
                  selected={selectedSpace}
                  setselected={setselectedSpace}
                  setisBookingDetails={setisBookingDetails}
                />
              ))}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              {parkingSpaces.slice(0,10).map((item, index) => (
                <RoadLayout key={index} />
              ))}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              {parkingSpaces.slice(10,20).map((item, index) => (
                <CarItems
                  key={item.id}
                  item={item}
                  index={index}
                  isRight={true}
                  selected={selectedSpace}
                  setselected={setselectedSpace}
                  setisBookingDetails={setisBookingDetails}
                />
              ))}
            </View>
            
          </View>
        </View>
       
      </View>
      <BottomPart
        selected={selectedSpace}
        setisDateVisible={setisDateVisible}
        setisError={setisError}
        onBookPress={() => setisBookingVisible(true)}
      />
      {isDateVisible && (
        <DateModal
          isDateVisible={isDateVisible}
          setisDateVisible={setisDateVisible}
         
        />
      )}
      {isBookingVisible && (
        <BookingModal
          isBookingVisible={isBookingVisible}
          setisBookingVisible={setisBookingVisible}
          selectedSpace={selectedSpace}
          setselectedSpace={setselectedSpace}
        />
      )}
      {isBookingDetails && (
        <BookingDetails
          isBookingDetails={isBookingDetails}
          setisBookingDetails={setisBookingDetails}
        />
      )}
      {
        isError && (
          <MessagesDetails 
            errorMessage={"Please Select avilable parking space to proceed "}
            isErrorVisible={isError}
            handleclose={()=>setisError(false)}
            
          />
        )
      }
      {
        isLoaderVisible && <LoadingDialog isloaderVisible={isLoaderVisible} />
      }
    </View>
  );
}
