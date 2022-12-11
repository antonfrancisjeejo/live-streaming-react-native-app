import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import HostPage from './screens/HostPage';
import AudiencePage from './screens/AudiencePage';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HostPage"
        component={HostPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AudiencePage"
        component={AudiencePage}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
