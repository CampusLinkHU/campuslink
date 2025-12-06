import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Homescreen, LoginScreen } from './screens';
import { UserHomeScreen } from './screens/CustomerScreen';
import { RestaurantProfile } from './screens/RestaurantProfile';
import { ServiceProfile } from './screens/ServiceProfile';
import { StoreProfile } from './screens/StoreProfile';
import { NavBar } from './Navbar';
import { UserProfile } from './screens/UserProfile';
import { ServerProfile } from './screens/ServerProfile';

const Stack = createNativeStackNavigator();
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

const navigationRef = createNavigationContainerRef();

export function NavigationController({
  currentRoute,
}: {
  currentRoute?: string;
}) {
  const routeName = currentRoute ?? '';
  const shouldShowNavBar = !['Homescreen', 'Login'].includes(routeName);

  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Homescreen' component={Homescreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='UserHome' component={UserHomeScreen} />
        <Stack.Screen name='RestaurantProfile' component={RestaurantProfile} />
        <Stack.Screen name='ServiceProfile' component={ServiceProfile} />
        <Stack.Screen name='StoreProfile' component={StoreProfile} />
        <Stack.Screen name='UserProfile' component={UserProfile} />
        <Stack.Screen name='ServerProfile' component={ServerProfile} />
      </Stack.Navigator>
      {shouldShowNavBar && <NavBar />}
    </SafeAreaProvider>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>();

  return (
    <ConvexProvider client={convex}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          const route = navigationRef.current?.getCurrentRoute();
          setCurrentRoute(route?.name ?? '');
        }}
        onStateChange={() => {
          const route = navigationRef.current?.getCurrentRoute();
          setCurrentRoute(route?.name ?? '');
        }}
      >
        <NavigationController currentRoute={currentRoute} />
      </NavigationContainer>
    </ConvexProvider>
  );
}
