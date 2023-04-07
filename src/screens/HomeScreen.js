import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../constants";
import Layout from "../componet/ParkingLayout/Layout";

function HomeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Layout />
    </View>
  );
}

export default HomeScreen;