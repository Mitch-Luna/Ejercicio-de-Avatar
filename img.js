import { useState } from "react";
import { FlatList, Image } from "react-native";

const images = () => {
    const [images, setimages] = useState([
        require('./assets/chica.jpg'),
        require('./assets/chica2.jpg'),
        require('./assets/chico3.jpg'),
        require('./assets/chica4.jpeg'),
        require('./assets/usuario5.jpg')
    ]);

    return (
        <FlatList
            data={images}
            key={"2"}
            numColumns={2}
            renderItem={({ item }) => (
                <Image
                    source={item}
                    style={{
                        width: 180,
                        height: 220,
                        borderWidth: 2,
                        borderColor: "#c35547",
                        resizeMode: "contain",
                        margin: 6,
                    }}
                    keyExtractor={(item) => item.id}
                />
            )}
        />
    )
}

export {
    images
}