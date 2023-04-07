import React, {useRef} from 'react';
import {View, Button} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS} from '../constants';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

export default function Example() {
  const refRBSheet = useRef();
  const HandleClick= () => {
    console.log('does not work');
    refRBSheet.current.open()
    console.log('does not work-2');
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
       <TouchableOpacity
    style={{backgroundColor: 'red', padding: 20}}
    onPress={HandleClick}>
    <Text>X</Text>
  </TouchableOpacity>
      
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: '#fff',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}></RBSheet>
    </View>
  );
}
