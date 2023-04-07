
import { combineReducers } from "@reduxjs/toolkit";
import parkingReducers from "./parkingReducers";

export const rootReducer= combineReducers({

  ParkingState:parkingReducers
    
  }
); 