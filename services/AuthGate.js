import React, { useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { useNavigation } from '@react-navigation/native';

const AuthGate = ({ children }) => {
  const { user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user, navigation]);

  return children;
};

export default AuthGate;
