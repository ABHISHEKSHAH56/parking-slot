import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dialog} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import DialogHeader from '../../DialogComponet/dialogheader';
import DialogButton from '../../DialogComponet/dialogButton';
import {COLORS} from '../../../constants';
import {useSelector} from 'react-redux';
import {formatDate} from '../../../constants/utility';
import {moderateScale, scale, verticalScale} from '../../../constants/scaling';

function BookingDetailsItems(props) {
  return (
    <View
     >
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: scale(5),
        }}>
        <View
          style={{
            elevation: 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            {props.label}:{' '}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'teal',
              textAlign: 'center',
              fontSize:12
            }}>
            {props.value}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function BookingDetails({
  isBookingDetails,
  setisBookingDetails,
}) {
  const currentDayBookings = useSelector(
    state => state.ParkingState.currentDayBookings,
  );
  const [bookingDetails, setbookingDetails] = useState({});
  const [showLoader, setshowLoader] = useState(true);
  useEffect(() => {
    const Bookings = currentDayBookings.find(
      item => item.parkingSpaceId == isBookingDetails,
    );
    if (Bookings) setbookingDetails(Bookings);
    setTimeout(() => {
      setshowLoader(false);
    }, 1000);
  }, [currentDayBookings]);

  return (
    <View>
      <Dialog
        isVisible={isBookingDetails ? true : false}
        onBackdropPress={() => setisBookingDetails(null)}>
        <DialogHeader
          title={'Booking Details'}
          description={'Please enter the details of your parking Vechile'}
          handleCrossClick={() => setisBookingDetails(null)}
        />
        {showLoader ? (
          <Dialog.Loading />
        ) : (
          <View style={{
            minHeight: verticalScale(1200),
            justifyContent: 'center',
          }}>
            <BookingDetailsItems
            key={"Booking Date"}
            label={"Booking Date"}
            value={formatDate(bookingDetails.bookingDate) } />
            <BookingDetailsItems
            key={"Start Time"}
            label={"Start Time"}
            value={`${formatDate(new Date(bookingDetails.startTime))} ${new Date(bookingDetails.startTime).toLocaleTimeString()} `} />
             <BookingDetailsItems
            key={"End time"}
            label={"End time"}
            value={`${formatDate(new Date(bookingDetails.endTime))} ${new Date(bookingDetails.endTime).toLocaleTimeString()} `} />
            <BookingDetailsItems
            key={"Vechile Number"}
            label={"Vechile Number"}
            value={bookingDetails.vehicleNumber} />
          </View>
            
        )}

        <DialogButton
          title={'close'}
          onPress={() => setisBookingDetails(null)}
          color={COLORS.error}
        />
      </Dialog>
    </View>
  );
}
