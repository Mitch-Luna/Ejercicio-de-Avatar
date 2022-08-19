
import { View, Text, TextInput } from "react-native";


export const JournalInput = ({ saveNombre }) => {
    return (
        <View>


            <TextInput
                style={{
                    marginTop: -180,
                    alignContent: 'center',
                    fontSize: 20,
                    borderColor: "black",
                    borderWidth: 1,
                    width: 250,
                    height: 50,
                    backgroundColor: "rgb(114, 190, 235)",
                }}

                placeholder='Nombre y apellido' onChangeText={(text) => saveNombre(text)}
            />

        </View>

    )
}

