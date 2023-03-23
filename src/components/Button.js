import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const style = StyleSheet.create({
    Button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#888'
    },
    OperationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    ButtonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3
    }
})

export default props => {
    const stylesButton = [style.Button]
    if(props.double) stylesButton.push(style.ButtonDouble)
    if(props.triple) stylesButton.push(style.buttonTriple)
    if(props.operation) stylesButton.push(style.OperationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}