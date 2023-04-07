import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import Layout from "../componet/ParkingLayout/Layout";
import { useSelector } from "react-redux";

function HomeScreen() {
  const bookings=useSelector((state)=>state.ParkingState.bookings)
  console.log("total Bookings",bookings?.length)
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout />
    </SafeAreaView>
  );
}

export default HomeScreen;