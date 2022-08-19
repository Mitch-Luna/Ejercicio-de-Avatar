import { View, Button, Text, Image, ImageBackground, StyleSheet, TextInput } from 'react-native';
import { Avatar } from "react-native-elements";
import { useState } from 'react';
import { JournalInput } from './JournalInput';
import { PasarAlHijo } from './JournalAlert';
import UserAvatar from 'react-native-user-avatar';

export const Journal = () => {
  const [name, setName] = useState("");

  const saveName = (text: string) => {
    setName(text);
  };

  const saveJournal = () => {
    if (name !== name) {
      return (
        <View
          style={{
            marginHorizontal: 86,
          }}
        >
          <UserAvatar
            size={80}
            name={name.substring}
            bgColor={'red'} />
        </View>
      )
    }
  }
  // const intento = () => {
  //   if (name !== lastName) {
  //     name.substring(0, 1)
  //     lastName.substring(0, 1)
  //   }

  // }
  return (
    <View>
      <Text style={{
        backgroundColor: 'lightpink', fontSize: 25, textAlign: 'center',
        marginHorizontal: 26,
        marginTop: 70
      }}>**Welcome to your Avatar**</Text>
      <View
        style={{

          borderColor: "white",
          alignItems: 'center',
          marginTop: 45,
          marginHorizontal: 20,
          padding: 2,
          paddingTop: 20,
          backgroundColor: "rgb(90, 189, 196)",
          width: 370,
          height: 700,

        }}
      >

        <View style={{
          borderColor: "white",
          alignItems: 'flex-end',
          marginTop: 45,
          marginHorizontal: 20,
          padding: 12,
          paddingTop: 30,
          backgroundColor: '#ffe4c4',
          width: 300,
          height: 600

        }}>

          <UserAvatar
            textColor={'black'}
            size={80}
            name={name}
            bgColor={'red'} />

          <UserAvatar
            size={80}
            source={require('./assets/chico3.jpg')}
          />




          <Avatar containerStyle={{ height: 80, width: 70, marginBottom: 24 }}
            size="large"
            rounded
            source={require('./assets/chico3.jpg')}
          />
          <Text>Liliana</Text>

          <Avatar containerStyle={{ height: 80, width: 70 }}
            size="large"
            rounded
            source={require('./assets/chica.jpg')}

          />
          <Text>  Jack</Text>
          <View
            style={{
              marginHorizontal: 30,
              margin: -190

            }}>
            <Avatar containerStyle={{ height: 80, width: 70, marginHorizontal: 150, marginBottom: 24 }}
              size="large"
              rounded
              source={require('./assets/chica4.jpeg')} />

            {/* <Avatar containerStyle={{ height: 80, width: 70, marginHorizontal: 150, marginBottom: 24, backgroundColor: 'red' }}
              size="large"
              rounded
            /> */}

          </View>
        </View>


        <View
          style={{
            marginTop: 50
          }}
        >
          <JournalInput
            saveNombre={saveName}
          />

        </View>
        <View
          style={{
            marginTop: -100,
          }}
        >
          <Button
            color={"mediumorchid"}
            title="Guardar"
            onPress={saveJournal}
          />
        </View>

      </View>
    </View>


  );
}

