import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../constants'
import DialogButton from '../../DialogComponet/dialogButton'
import DialogHeader from '../../DialogComponet/dialogheader'
import { Dialog } from '@rneui/themed'

export default function MessagesDetails({errorMessage,handleclose,isErrorVisible}) {
  return (
    <View>
      <Dialog
        isVisible={isErrorVisible}
        onBackdropPress={handleclose}>
        <DialogHeader
          title={'Warning'}
          description={errorMessage}
          handleCrossClick={handleclose}
        />

        
        <DialogButton
          title={"close"}
          onPress={handleclose}
          color={COLORS.error}
          
          />
      </Dialog>
    </View>
  )
}