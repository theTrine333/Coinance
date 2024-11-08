import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles } from "@/constants/Styles";
import { Link, useNavigation } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [role, setRole] = useState("seller"); // Default role is "buyer"
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigation();
  const handleAgree = () => {
    setAgreed(!agreed);
  };

  const handleLogin = async () => {
    // For now, just log the user credentials to the console.
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role); // Log the selected role
    await createUserWithEmailAndPassword(auth, email, password);
    setIsSubmitting(true);

    if (!email || !password || !walletAddress || !username) {
      Alert.alert(
        "Empty Fields",
        "Please fill all the fields to create your account"
      );
    }
    // Simulate a delay for the login process (e.g., API request)
    setTimeout(() => {
      setIsSubmitting(false);
      // After successful signup, navigate to the next screen or show a success message.
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

      {/* Signup Form Section */}
      <ThemedView style={Styles.subContainer}>
        <ThemedText
          style={{ fontSize: 14, textAlign: "center", paddingBottom: 20 }}
          type="subtitle"
        >
          Signup an account
        </ThemedText>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Unique username i.e @user123"
          placeholderTextColor="#888"
          value={username}
          onChangeText={(text) => setUsername(text)}
          keyboardType="default"
        />

        {/* Wallet Address Input */}
        <TextInput
          style={styles.input}
          placeholder="Wallet address"
          placeholderTextColor="#888"
          value={walletAddress}
          onChangeText={(text) => setWalletAddress(text)}
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

        {/* Role Selection (Radio buttons for Buyer/Seller) */}
        <ThemedView style={styles.roleContainer}>
          <Text style={styles.roleText}>Select your role:</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={role === "buyer" ? styles.selectedRadio : styles.radio}
              onPress={() => setRole("buyer")}
            >
              <ThemedText type="default">Buyer</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={role === "seller" ? styles.selectedRadio : styles.radio}
              onPress={() => setRole("seller")}
            >
              <ThemedText type="default">Seller</ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedView>

        {/* Agree to Terms and Conditions */}
        <ThemedView style={styles.termsContainer}>
          <ThemedText style={{ fontSize: 12 }} type="default">
            By signing up, you agree to our{" "}
          </ThemedText>
          <TouchableOpacity onPress={() => navigation.navigate("index")}>
            <ThemedText style={styles.link}>Terms & Conditions</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Sign Up Button */}
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

      {/* Divider */}
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
  roleContainer: {
    marginBottom: 15,
    flexDirection: "column",
  },
  roleText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radio: {
    backgroundColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadio: {
    backgroundColor: "#f2c025",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
});
