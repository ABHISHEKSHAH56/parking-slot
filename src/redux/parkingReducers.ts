import { createSlice } from "@reduxjs/toolkit";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface ServiceState {
  parkingSpaces:Array<any>;
  bookings:Array<any>;
  currentDate:Date;
  currentDayBookings:Array<any >;
}

const initialState: ServiceState = {
    currentDate:new Date(), 
    parkingSpaces: [
      { id: 'A1', isAvailable: true },
      { id: 'A2', isAvailable: true },
      { id: 'A3', isAvailable: true },
      { id: 'A4', isAvailable: true },
      { id: 'A5', isAvailable: false },
      { id: 'A6', isAvailable: true },
      { id: 'A7', isAvailable: true },
      { id: 'A8', isAvailable: false },
      { id: 'A9', isAvailable: true },
      { id: 'A10',isAvailable: true },
      { id: 'B1', isAvailable: true },
      { id: 'B2', isAvailable: true },
      { id: 'B3', isAvailable: true },
      { id: 'B4', isAvailable: true },
      { id: 'B5', isAvailable: false },
      { id: 'B6', isAvailable: true },
      { id: 'B7', isAvailable: true },
      { id: 'B8', isAvailable: true },
      { id: 'B9', isAvailable: true },
      { id: 'B10', isAvailable: true },
    ],
    bookings: [],
    currentDayBookings:[]

  
};

const isBookingActive = (booking:any,bookingDate) => {
  const bookingStartTime = new Date(booking.startTime);
  const bookingEndTime = new Date(booking.endTime);
  const currentTime = new Date(bookingDate);
  return currentTime >= bookingStartTime && currentTime <= bookingEndTime;
};

const ParkingReducers = createSlice({
  name: "ParkingReducers", //unique name for serviceSlice
  initialState,
  reducers: {
    BookTheParkingSpace:(state,action)=>{
      try {
        const { payload: bookingData } = action;
        const newBooking = {
          id:uuidv4(),      
          parkingSpaceId: bookingData.parkingSpaceId,
          vehicleType: bookingData.vehicleType,
          vehicleNumber: bookingData.vehicleNumber,
          startTime: bookingData.startTime,
          endTime: bookingData.endTime,
          bookingDate: bookingData.bookingDate,
        };
        const spaceToBook = state.parkingSpaces.find((space) => space.id === newBooking.parkingSpaceId);
        if (spaceToBook && spaceToBook.isAvailable) {
          return {
            ...state,
            bookings: [...state.bookings, newBooking],
            parkingSpaces: state.parkingSpaces.map((space) =>
              space.id === newBooking.parkingSpaceId ? { ...space, isAvailable: false } : space
            ),
          };
        }
      } catch (error) {
        console.log(error)
        
      }
    },
    ParkingSatus:(state,action)=>{
      const { bookingDate } = action.payload;
      const bookingsForDate = state.bookings.filter((booking) => new Date(booking.bookingDate ).toDateString() == new Date(bookingDate).toDateString());      
      state.currentDayBookings=bookingsForDate
      const parkingSpacesForDate = state.parkingSpaces.map((space) => {
        const isAvailable = !bookingsForDate.some(
          (booking) => booking.parkingSpaceId === space.id && isBookingActive(booking,bookingDate)
        );
        return { id: space.id, isAvailable };
      });
      state.parkingSpaces=parkingSpacesForDate;

    },
    CurrentDateSet:(state,action)=>{
      state.currentDate=action.payload

    },
    
}});

export const {BookTheParkingSpace,ParkingSatus,CurrentDateSet} =ParkingReducers.actions

export default ParkingReducers.reducer;



