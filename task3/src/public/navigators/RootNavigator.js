import { createStackNavigator, createAppContainer } from 'react-navigation';

// IMPORT SCREEN
import Login from '../../auth/screens/Login'
import Register from '../../auth/screens/Register';

import HomeScreen from '../../meme/screens/HomeScreen';
import MemeScreen from '../../meme/screens/MemeScreen';
import CommentScreen from '../../meme/screens/CommentScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Login: Login,
    Register, Register,
    Meme: MemeScreen,
    Comment: CommentScreen
},
{
    headerMode: "none"
})
export default createAppContainer(AppNavigator);