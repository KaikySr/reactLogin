import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Usuarios from './components/Usuarios';
import './global.css';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="cadastro" component={Cadastro} />
        <Stack.Screen options={{headerShown: false}} name="main" component={Usuarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
