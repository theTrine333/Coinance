import { StyleSheet, Image, View, ActivityIndicator } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { Styles } from "@/constants/Styles";
import { ThemedText } from "./ThemedText";

const LoadingScreen = () => {
  return (
    <ThemedView
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
        flex: 1,
      }}
    >
      <ThemedView>
        <Image
          source={require("@/assets/images/icon.png")}
          style={Styles.icon}
          resizeMode="contain"
        />
      </ThemedView>

      <ThemedText type="title" style={{ color: "#f2c025", paddingTop: 10 }}>
        ● Coinance ●
      </ThemedText>
      <ActivityIndicator color={"#f2c025"} size={35} />
    </ThemedView>
  );
};

export default LoadingScreen;
