import React, { Component } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Container, Header, Button, Text, Body, Right, 
        Title, Content, Spinner, ListItem } from 'native-base';
import { connect } from 'react-redux';

// import actions
import { fetch } from '../../public/redux/actions/meme';

// import component
// import ProductList from '../components/ProductList';

class HomeScreen extends Component {
    componentDidMount() {
        this.props.dispatch(fetch())
    }

    // Route
    handlePress = (Screen) => {
        this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: Screen
        })
    }


    render() {
        // console.log(this.props.meme);

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Meme List</Title>
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
                    <FlatList style={{ alignItems: 'center', marginLeft: 10, marginRight: 10 }}
                        data={this.props.meme.memes}
                        style={{ flex: 1, marginVertical: 10 }}
                        renderItem={({ item, index }) => (
                            <ListItem onPress={() => this.props.navigation.navigate('Meme', item.id)}>
                                <Text>{item.title}</Text>
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

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});