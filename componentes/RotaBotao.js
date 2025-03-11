import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import placa_mae from './placa_mae';
import placa_video from './placa_video';

const Stack = createStackNavigator();

export default function rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="placa_mae" component={placa_mae} />
                <Stack.Screen name="placa_video" component={placa_video} />
            </Stack.Navigator>
        </NavigationContainer>
    )   
  }