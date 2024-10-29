import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};
const App = () => {
    const [type, setType] = useState('');
    const [user, setUser] = useState('');
    const [pw, setPw] = useState('');
    return (
      <View>
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setType(value)}
              items={[
                  {label:'Admin', value:'Admin'},
                  {label:'Guest', value:'Guest'},
              ]}
          />
          <InputBox label="User Name:" onChangeText={(text) => setUser(text)} />
          <InputBox label="Password:" onChangeText={(text) => setPw(text)} />
          <TouchableOpacity onPress={()=> {
              const correctPassword = 'Test';
              let message = 'Error! Wrong Password!';
              if (pw === correctPassword) {
                  message = 'Welcome ' + type + ' ' + user;
              }
              ToastAndroid.show(message, ToastAndroid.SHORT);
          }
          }>
              <Text>LOG IN</Text>
          </TouchableOpacity>
          <Text>{pw}</Text>
      </View>
    );
};

export default App;
