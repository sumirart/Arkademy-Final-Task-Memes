import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CommentScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CommentScreen</Text>
            </View>
        );
    }
}
export default CommentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});