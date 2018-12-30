import React, { Component } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
    Container, Header, Button, Text, Body, Right,
    Title, Content, Spinner, ListItem, Left
} from 'native-base';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// import component for redux form
import TextInput from '../../public/components/TextInput';

// import actions
import { fetchSingleMeme } from '../../public/redux/actions/meme';
import { postComment } from '../../public/redux/actions/meme';

class MemeScreen extends Component {
    componentDidMount() {
        this.props.dispatch(fetchSingleMeme(this.props.navigation.state.params))
    }

    // Submit Comment
    handleSave = (value) => {
        console.log(value)
        // this.props.dispatch(postComment(value))
        //     .then(() => {
        //         this.handlePress('Home')
        //     })
        //     .catch(err => alert(err));
    }

    // Move to other screen
    handlePress = (Screen) => {
        this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: Screen
        })
    }


    render() {
        // console.log(this.props.navigation.state.params);

        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{ color: "#FFF" }}>Back</Text>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title>Single Meme</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: "#FFF" }}>Logout</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    {
                        (this.props.meme.isLoading == true) ?
                            <Spinner />
                            : null
                    }
                    <Text>Title: {this.props.meme.singleMeme.title}</Text>
                    <Text>Content: {this.props.meme.singleMeme.content}</Text>

                    <Field
                        name="content"
                        component={TextInput}
                        placeholder="Comment"
                        style={inputStyle}
                        placeholderColor={"#808080"}
                        // keyboardType='email-address'
                        // validate={[required, email]}
                    />
                    <Button 
                        full primary style={{ marginBottom: 1 }}
                        onPress={this.props.handleSubmit(this.handleSave)}>
                        <Text>Add Comment</Text>
                    </Button>

                    <FlatList style={{ alignItems: 'center', marginLeft: 10, marginRight: 10 }}
                        data={this.props.meme.singleMeme.comments}
                        style={{ flex: 1, marginVertical: 10 }}
                        renderItem={({ item, index }) => (
                            <ListItem onPress={() => this.props.navigation.navigate('Meme', item.id)}>
                                <Text>{item.content}</Text>
                            </ListItem>
                        )}
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    meme: state.meme,
    auth: state.auth
})

export default reduxForm({
    form: 'comment'
})(connect(mapStateToProps)(MemeScreen));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const inputStyle = {
    width: 330,
    height: 44,
    borderRadius: 2,
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0.3,
    borderColor: '#000',
    color: '#000'
}