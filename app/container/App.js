import { StackNavigator, TabNavigator } from 'react-navigation';
import TabBarBottom from 'react-navigation/src/views/TabView/TabBarBottom';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Stars from '../pages/Stars/Stars';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import Me from '../pages/Me/Me';
import Setting from '../pages/Setting/Setting';

const TabContainer = TabNavigator(
    {
        Stars: { screen: Stars },
        Shop: { screen: Shop },
        Cart: { screen: Cart },
        Me: { screen: Me }
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            style: {
                height:49
            },
            activeBackgroundColor: 'white',
            activeTintColor: '#377BF3',
            inactiveBackgroundColor: 'white',
            inactiveTintColor: '#aaa',
            showIcon: true
        }
    }
);

const App = StackNavigator(
    {
        Welcome: {
            screen: Welcome
        },
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        },
        Main: {
            screen: TabContainer
        },
        Setting: {
            screen: Setting
        }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#377BF3'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 18
            },
            headerTintColor: '#fff'
        }
    }
)

export default App;
