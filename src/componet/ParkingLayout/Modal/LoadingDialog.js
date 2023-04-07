import { View, Text } from 'react-native'
import React from 'react'
import { Dialog } from '@rneui/themed'

export default function LoadingDialog({isloaderVisible}) {
  return (
    <View>
     <Dialog isVisible={isloaderVisible}>
      <Dialog.Loading />
    </Dialog>
    </View>
  )
}