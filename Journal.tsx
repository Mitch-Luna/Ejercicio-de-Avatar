import { View, Button, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import { useState } from 'react';
import { JournalInput } from './JournalInput';
import UserAvatar from 'react-native-user-avatar';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';


type Imagen = "imagen1" | "imagen2" | "imagen3" | "imagen4" | "imagen5"
type Mensaje = "alert1" | "alert2" | "alert3" | "alert4"
type Caja = "caja1" | "caja2" | "caja3" | "caja4"

interface Props {
  imagen?: Imagen;
  mensage?: Mensaje;
  caja?: Caja;
}
const ValidarImagen = {
  imagen1: 'https://i.pinimg.com/originals/13/6b/f4/136bf41b645636e0ee48f3601b8e0c8d.jpg',
  imagen2: 'https://i.pinimg.com/736x/97/1f/5a/971f5a3514595bba759e8722b5f4e55e.jpg',
  imagen3: 'https://i.pinimg.com/736x/29/47/b4/2947b4e9da7802bafbb98f14c8829fcb.jpg',
  imagen4: 'https://i.pinimg.com/236x/45/8d/69/458d69ed636616b91c79fa62d266f19a.jpg',
  imagen5: 'https://i-d-images.vice.com/images/2016/01/25/la-obsesin-coreana-con-la-belleza-masculina-desafa-el-gnero-body-image-1453713762.jpg',
  default: 'https://thumbs.dreamstime.com/b/icono-de-usuario-personas-vectoriales-vector-perfil-ilustraci%C3%B3n-persona-comercial-s%C3%ADmbolo-grupo-usuarios-masculino-195157776.jpg'
}
const mandarAlert = {
  alert1: "white",
  alert2: "black",
  alert3: "green",
  alert4: "blue"

}
const colorAlert = {
  caja1: "red",
  caja2: "yellow",
  caja3: "gray",
  caja4: "pink"

}

export const Journal = ({ imagen, mensage, caja }: Props) => {
  const AvatarImage = imagen ? ValidarImagen[imagen] : ValidarImagen.default;
  const MostraAlert = mensage ? mandarAlert[mensage] : mandarAlert.alert2;
  const cajaAlert = caja ? colorAlert[caja] : colorAlert.caja2;

  const [name, setName] = useState("");

  const saveName = (text: string) => {
    setName(text);
  };

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
          <View
            style={{
              marginHorizontal: 80

            }
            }
          >
            <View
              style={{
                marginBottom: 25

              }}
            >
              <Avatar
                rounded
                size={130}
                source={{ uri: AvatarImage }}
              />
            </View>
            <UserAvatar
              rounded
              size={80}
              name={name}
            />

            <View
              style={{
                marginTop: 38,
                marginBottom: 20,
                alignItems: 'center',
                width: 130,
                height: 56,
                backgroundColor: cajaAlert,
              }}
            >
              <Text style={{ color: MostraAlert, fontSize: 18 }}>  ****Alert,**** Perosonalizable</Text>

            </View>
          </View>
          <View
            style={{
              marginHorizontal: 30,
              margin: -190

            }}>
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
          <Text style={{ fontSize: 20, backgroundColor: 'white' }}>👆Ingresa un nombre y apellido👆</Text>
        </View>

      </View>
    </View>
  );
}


