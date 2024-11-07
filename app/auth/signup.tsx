import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles } from "@/constants/Styles";
import { Link, useNavigation } from "expo-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigation();
  const handleAgree = () => {
    setAgreed(!agreed);
  };

  const handleLogin = () => {
    // For now, just log the user credentials to the console.
    console.log("Email:", email);
    console.log("Password:", password);

    setIsSubmitting(true);

    // Simulate a delay for the login process (e.g., API request)
    setTimeout(() => {
      setIsSubmitting(false);
      // After successful login, you can navigate to the next screen or show a success message.
    }, 2000);
  };

  return (
    <ThemedView
      style={[
        Styles.container,
        { justifyContent: "flex-start", paddingTop: 60 },
      ]}
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

      {/* Login Form Section */}
      <ThemedView style={Styles.subContainer}>
        <ThemedText
          style={{ fontSize: 14, textAlign: "center", paddingBottom: 20 }}
          type="subtitle"
        >
          Signup an account
        </ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Unique username i.e @user123"
          placeholderTextColor="#888"
          value={username}
          onChangeText={(text) => setUsername(text)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Wallet address"
          placeholderTextColor="#888"
          value={username}
          onChangeText={(text) => setUsername(text)}
          keyboardType="default"
        />
        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        {/* Agree to Terms and Conditions */}
        <ThemedView style={styles.termsContainer}>
          <ThemedText style={{ fontSize: 12 }} type="default">
            By signing up, you agree to our{" "}
          </ThemedText>
          <TouchableOpacity onPress={() => navigation.navigate("terms")}>
            <ThemedText style={styles.link}>Terms & Conditions</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.loginButton,
            { backgroundColor: isSubmitting ? "#ccc" : "#f2c025" },
          ]}
          onPress={handleLogin}
        >
          <ThemedText type="defaultSemiBold">
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Terms and Conditions Button */}
      <ThemedView
        style={[
          {
            borderColor: "grey",
            marginTop: 5,
            marginBottom: 5,
          },
        ]}
      />
    </ThemedView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 14,
    color: "#fff",
  },
  termsContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "#f2c025",
    fontWeight: "bold",
  },
  loginButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
