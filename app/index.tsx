import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles, width } from "@/constants/Styles";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BuyerCard } from "@/components/Cards";
import { getBuyers } from "@/constants/database";
// Define types for the offer data
interface Offer {
  id: number;
  seller: string;
  price: number;
  amount: number;
}
interface Buyer {
  id: number;
  name: string;
  profilePic: string;
  buyRate: number;
  online: boolean;
}
const buyersData: Buyer[] = [
  {
    id: 1,
    name: "Alice",
    profilePic: "https://via.placeholder.com/50",
    buyRate: 105,
    online: true,
  },
  {
    id: 2,
    name: "Bob",
    profilePic: "https://via.placeholder.com/50",
    buyRate: 103,
    online: true,
  },
  {
    id: 3,
    name: "Carol",
    profilePic: "https://via.placeholder.com/50",
    buyRate: 107,
    online: false,
  },
  {
    id: 4,
    name: "Erick Ronald",
    profilePic: "https://avatars.githubusercontent.com/u/148716108?v=4",
    buyRate: 105,
    online: true,
  },
];
// Mock API for Worldcoin price (replace with real API integration)
const fetchWorldcoinPrice = async () => {
  try {
    const response = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbol=WLDUSDT"
    );
    const data = await response.json();
    if (data && data.price) {
      return data.price; // Set the price if successful
    } else {
      return null; // Handle case where price is not available
    }
  } catch (error) {
    console.error("Error fetching Worldcoin price from Binance:", error);
    return null; // Handle error
  }
};
const fetchUSDTtoKES = async () => {
  const url =
    "https://v6.exchangerate-api.com/v6/003dd1dbfc8d464a2ae45a54/latest/USD";

  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log("\n" + JSON.stringify(data, undefined, 2));
    return data.conversion_rates.KES;
  } catch (error) {
    console.error("Error fetching USDT to KES exchange rate:", error);
    return null;
  }
};
const Main = () => {
  const [price, setPrice] = useState<number | null>(null); // Price of Worldcoin
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [isFetching, setIsFetching] = useState<boolean>(true); // For pull-to-refresh
  const navigation = useNavigation();
  const [usdtKes, setUsdtKes] = useState<number | null>();
  const [buyers, setBuyers] = useState<Buyer[] | any>();
  const theme = useColorScheme() ?? "light";
  // Fetch real-time Worldcoin price on component mount
  async function getPrices() {
    setLoading(true);
    const worldcoinPrice = await fetchWorldcoinPrice();
    const usdtToKes = await fetchUSDTtoKES();
    setUsdtKes(usdtToKes);

    setPrice(worldcoinPrice);
    setLoading(false);
  }
  useEffect(() => {
    getPrices().then((e) => {
      setBuyers(e);
      setIsFetching(false);
    });
  }, []);

  // Mock offer data (in real life, this would be fetched from a database)
  useEffect(() => {
    getBuyers();
  }, []);

  return (
    <ThemedView
      style={[
        Styles.container,

        {
          paddingTop: 50,
          justifyContent: "flex-start",
          alignSelf: "flex-start",
        },
      ]}
    >
      <ThemedText type="title" style={styles.title}>
        ● Coinance ●
      </ThemedText>
      <ThemedText type="defaultSemiBold">Current Worldcoin Price</ThemedText>
      {/* Header Section */}
      <ThemedView
        style={[
          Styles.rowView,
          {
            width: width,
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
          },
        ]}
      >
        <ThemedView>
          <ThemedView>
            <ThemedText type="subtitle">
              1 WLD : USD{" "}
              {price ? Number(price.toLocaleString()).toFixed(2) : "Loading..."}
            </ThemedText>
            <ThemedText type="subtitle">
              1 USD : KES{" "}
              {usdtKes
                ? Number(usdtKes.toLocaleString()).toFixed(2)
                : "Loading..."}
            </ThemedText>
          </ThemedView>
        </ThemedView>
        {loading ? (
          <ThemedView style={styles.postOfferButton}>
            <ActivityIndicator color={"white"} size={24} />
          </ThemedView>
        ) : (
          <TouchableOpacity
            style={styles.postOfferButton}
            onPress={() => {
              getPrices();
            }}
          >
            <Ionicons name="reload-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        )}
      </ThemedView>
      <ThemedText type="link">Select your preffed buyer</ThemedText>
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={buyers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BuyerCard buyer={item} />}
          contentContainerStyle={{
            paddingTop: 20,
            marginTop: 5,
            paddingHorizontal: 10,
            paddingBottom: 80,
            minWidth: "90%",
            alignSelf: "center",
            backgroundColor: theme === "light" ? "lightgrey" : "#282c2e",
            borderRadius: 12,
          }}
        />
      )}
    </ThemedView>
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: "#f2c025",
  },
  postOfferButton: {
    alignSelf: "center",
    backgroundColor: "#f2c025",
    padding: 5,
    borderRadius: 28,
    alignItems: "center",
  },
});
