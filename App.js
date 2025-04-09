import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FeedbackScreen from './screens/FeedbackScreen';
import SurveysScreen from './screens/SurveysScreen';
import WellnessScreen from './screens/WellnessScreen';
import MatchScreen from './screens/MatchScreen';
import ChatScreen from './screens/ChatScreen';
import AuthProvider from './services/AuthProvider';
import AuthGate from './services/AuthGate';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthGate>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'Feedback') iconName = 'feedback';
                else if (route.name === 'Surveys') iconName = 'assignment';
                else if (route.name === 'Wellness') iconName = 'self-improvement';
                else if (route.name === 'Match') iconName = 'people';
                else if (route.name === 'Chat') iconName = 'chat';
                return <MaterialIcons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#4CAF50',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { paddingBottom: 5, height: 60 },
              tabBarLabelStyle: { fontSize: 12 },
            })}
          >
            <Tab.Screen name="Feedback" component={FeedbackScreen} />
            <Tab.Screen name="Surveys" component={SurveysScreen} />
            <Tab.Screen name="Wellness" component={WellnessScreen} />
            <Tab.Screen name="Match" component={MatchScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
          </Tab.Navigator>
        </AuthGate>
      </NavigationContainer>
    </AuthProvider>
  );
}
