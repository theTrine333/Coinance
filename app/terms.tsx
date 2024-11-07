import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles } from "@/constants/Styles";
import { Link, useNavigation } from "expo-router";
const Home = () => {
  const [agreed, setAgreed] = useState();
  const navigation = useNavigation();
  const handleAgree = () => {};
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
      <ThemedView style={styles.subContainer}>
        <ThemedText
          style={{ fontSize: 14, textAlign: "center", paddingBottom: 10 }}
          type="subtitle"
        >
          Terms and Conditions
        </ThemedText>
        <ThemedView
          style={[
            {
              borderColor: "grey",
              marginTop: -5,
              marginBottom: 5,
            },
          ]}
        />
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <ThemedText style={{ fontSize: 13 }} type="defaultSemiBold">
            1. Introduction
          </ThemedText>
          <ThemedText style={styles.infoText} type="default">
            - Welcome to the Coinance app.{"\n"}- Coinance is a secure and
            easy-to-use mobile app that allows Kenyans to buy Worldcoin (WLD)
            directly from their phones.{"\n"}- With simple payment methods like
            M-Pesa, you can quickly and safely purchase Worldcoin and manage
            your digital assets.{"\n"}- The app features fast transactions,
            real-time updates, and a user-friendly interface designed for both
            beginners and experienced crypto enthusiasts.{"\n"}- Whether you're
            new to cryptocurrency or an active trader, Coinance provides a
            seamless and reliable platform to buy Worldcoin in Kenya. {"\n"}- By
            accessing and using this app, you agree to comply with the following
            terms and conditions.
            {"\n"}
          </ThemedText>
          <ThemedText style={{ fontSize: 13 }} type="defaultSemiBold">
            2. User Responsibilities
          </ThemedText>
          <ThemedText style={styles.infoText}>
            - Users must ensure that the information they provide is accurate.
            {"\n"}- You are responsible for maintaining the confidentiality of
            your information. {"\n"}
          </ThemedText>
          <ThemedText style={{ fontSize: 13 }} type="defaultSemiBold">
            3. Privacy Policy
          </ThemedText>
          <ThemedText style={styles.infoText}>
            - We respect your privacy and are committed to protecting your
            personal data.
            {"\n"}- Our privacy policy outlines the types of data we collect and
            how we use it. {"\n"}
          </ThemedText>
          <ThemedText style={{ fontSize: 13 }} type="defaultSemiBold">
            4. Limitation of Liability
          </ThemedText>
          <ThemedText style={styles.infoText}>
            - The Serveur app is provided on an 'as is' basis.
            {"\n"}- We still make no guarantees regarding the app's performance
            or accuracy. {"\n"}
          </ThemedText>
          <ThemedText style={{ fontSize: 13 }} type="defaultSemiBold">
            5. Modification
          </ThemedText>
          <ThemedText style={styles.infoText}>
            - We reserve the right to update these terms and conditions at any
            time.
            {"\n"}- Any changes will be posted on this session. {"\n"}
          </ThemedText>
          <ThemedText style={{ fontSize: 13 }} type="defaultSemiBold">
            6. Governing Law
          </ThemedText>
          <ThemedText style={styles.infoText}>
            - These terms shall be governed by and construed in accordance with
            the laws of your country of residence.{"\n"}
          </ThemedText>
          <ThemedText style={{ fontSize: 13 }} type="defaultSemiBold">
            7. Termination
          </ThemedText>
          {/* Added margin to create space below the terms and conditions */}
          <ThemedText style={[styles.infoText, { marginBottom: 40 }]}>
            - We reserve the right to terminate user accounts that violate our
            terms or engage in harmful activities.
          </ThemedText>
        </ScrollView>
        <ThemedView
          style={[
            {
              borderColor: "grey",
              marginTop: 5,
              marginBottom: 5,
            },
          ]}
        />
        <ThemedText style={{ fontSize: 13, paddingTop: 10 }} type="subtitle">
          By clicking "Agree," you confirm that you have read and understood
          these terms.
        </ThemedText>
      </ThemedView>

      <TouchableOpacity
        style={agreed ? Styles.agreeButtonDisabled : Styles.agreeButton}
        disabled={agreed}
        onPress={() => {
          navigation.navigate("auth/login");
        }}
      >
        <ThemedText type="defaultSemiBold">
          {agreed ? "Agreed" : "Agree"}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Home;
const styles = StyleSheet.create({
  infoText: {
    paddingLeft: 10,
    fontSize: 13,
  },
  subContainer: {
    flex: 1,
    shadowColor: "grey",
    elevation: 4,
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 10,
  },
  scrollContainer: {
    borderRadius: 8,
    paddingTop: 10,
    marginHorizontal: -10,
    paddingHorizontal: 10,
  },
});
