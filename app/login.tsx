import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles } from "@/constants/Styles";
import { Link, useNavigation } from "expo-router";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigation();
  const handleAgree = () => {
    setAgreed(!agreed);
  };

  const handleLogin = async () => {
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, email, password).then((e) => {
      navigation.navigate("home/main");
    });

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
          Login to Your Account
        </ThemedText>

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
            By logging in, you agree to our{" "}
          </ThemedText>
          <TouchableOpacity onPress={() => navigation.navigate("index")}>
            <ThemedText style={styles.link}>Terms & Conditions</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.loginButton,
            {
              backgroundColor: isSubmitting
                ? "#ccc"
                : !email || !password
                ? "#f8dc85"
                : "#f2c025",
            },
          ]}
          onPress={handleLogin}
          disabled={isSubmitting || !email || !password}
        >
          <ThemedText type="defaultSemiBold">
            {isSubmitting ? "Logging in..." : "Log In"}
          </ThemedText>
        </TouchableOpacity>
        <ThemedView style={Styles.rowView}>
          <ThemedText type="default" style={{ fontSize: 13 }}>
            Don't have an account?{" "}
          </ThemedText>
          <Link href={"/signup"}>
            <ThemedText type="link" style={{ fontSize: 14 }}>
              Signup
            </ThemedText>
          </Link>
        </ThemedView>
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

export default Login;

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
