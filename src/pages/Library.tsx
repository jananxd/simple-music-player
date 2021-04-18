import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";

const Library: React.FC<{}> = () => {
    const playlist = [
        {name: 'Test'},
        {name: 'Another Test'},
    ];

    return (
        <View>
            {playlist.map((music, index) => {
                return (
                    <ListItem key={index}>

                        <ListItem.Content>
                            <ListItem.Title>{music.name}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                );
            })}

        </View>
    );
}

export default Library;