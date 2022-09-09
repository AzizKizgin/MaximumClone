import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./screens/MainScreen";
import Categories from "./screens/Categories";
import Shopcart from "./screens/Shopcart";
import Account from "./screens/Account";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Search from "./screens/Search";
import { Icon } from "@rneui/base";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Anasayfa",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="home" iconStyle={{ color: "gray" }} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: "Kategoriler",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="apps" iconStyle={{ color: "gray" }} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ShopCart"
        component={Shopcart}
        options={{
          tabBarLabel: "Anasayfa",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="shopping-bag" iconStyle={{ color: "gray" }} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="account-circle" iconStyle={{ color: "gray" }}
                 />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
