import CustomTabs from "@/components/CustomTabs";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

const _layout = () => {
    return (
        <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: true }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="statistics" />
            <Tabs.Screen name="wallet" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}

export default _layout;

const styles = StyleSheet.create({});
