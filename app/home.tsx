import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">This screen doesn't exist.</ThemedText>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
