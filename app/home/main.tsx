import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles } from "@/constants/Styles";
import { useNavigation } from "expo-router";

// Define types for the offer data
interface Offer {
  id: number;
  seller: string;
  price: number;
  amount: number;
}

// Mock API for Worldcoin price (replace with real API integration)
const fetchWorldcoinPrice = async (): Promise<number | null> => {
  try {
    // Replace with real API call, e.g., CoinGecko or CoinMarketCap
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=worldcoin&vs_currencies=kes"
    );
    const data = await response.json();
    return data.worldcoin.kes;
  } catch (error) {
    console.error("Error fetching Worldcoin price:", error);
    return null;
  }
};

const Main: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null); // Price of Worldcoin
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [offers, setOffers] = useState<Offer[]>([]); // List of offers from sellers
  const [isFetching, setIsFetching] = useState<boolean>(false); // For pull-to-refresh
  const navigation = useNavigation();

  // Fetch real-time Worldcoin price on component mount
  useEffect(() => {
    const getPrice = async () => {
      setLoading(true);
      const worldcoinPrice = await fetchWorldcoinPrice();
      setPrice(worldcoinPrice);
      setLoading(false);
    };

    getPrice();
  }, []);

  // Mock offer data (in real life, this would be fetched from a database)
  useEffect(() => {
    setOffers([
      { id: 1, seller: "@user123", price: 800, amount: 2 },
      { id: 2, seller: "@crypto_king", price: 810, amount: 1.5 },
      { id: 3, seller: "@kenya_trade", price: 805, amount: 3 },
    ]);
  }, []);

  // Pull-to-refresh to fetch new offers
  const handleRefresh = async () => {
    setIsFetching(true);
    // Mock API refresh (in reality, you would fetch new offers from a backend)
    setTimeout(() => {
      setIsFetching(false);
      setOffers([
        ...offers,
        { id: Math.random(), seller: "@new_seller", price: 815, amount: 0.5 },
      ]);
    }, 2000);
  };

  // Render the Buy Offers Section
  const renderOfferItem = ({ item }: { item: Offer }) => (
    <ThemedView style={styles.offerCard}>
      <Text style={styles.sellerText}>{item.seller}</Text>
      <Text style={styles.priceText}>Price: KES {item.price} / WLD</Text>
      <Text style={styles.amountText}>Amount: {item.amount} WLD</Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => navigation.navigate("buy", { offer: item })}
      >
        <ThemedText style={styles.buyText}>Buy Now</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );

  // If price is loading, show a loading spinner
  if (loading) {
    return (
      <ThemedView style={Styles.container}>
        <ActivityIndicator size="large" color="#f2c025" />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={Styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          ● Coinance ●
        </ThemedText>
        <Text style={styles.priceText}>
          Current Worldcoin Price: KES{" "}
          {price ? price.toLocaleString() : "Loading..."}
        </Text>
      </View>

      {/* Buyers Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionTitle}>Buy Worldcoin</ThemedText>

        {/* FlatList to display available offers */}
        <FlatList
          data={offers}
          renderItem={renderOfferItem}
          keyExtractor={(item) => item.id.toString()}
          refreshing={isFetching}
          onRefresh={handleRefresh}
        />
      </ThemedView>

      {/* Sellers Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionTitle}>Post New Offer</ThemedText>
        <TouchableOpacity
          style={styles.postOfferButton}
          onPress={() => navigation.navigate("sell")}
        >
          <ThemedText style={styles.postOfferText}>Post New Offer</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <ThemedText type="default" style={styles.navText}>
            Profile
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          <ThemedText type="default" style={styles.navText}>
            Settings
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("transactions")}>
          <ThemedText type="default" style={styles.navText}>
            Transactions
          </ThemedText>
        </TouchableOpacity>
      </View>
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
  priceText: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  sectionContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  offerCard: {
    backgroundColor: "#2f2f2f",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  sellerText: {
    fontSize: 16,
    color: "#f2c025",
    marginBottom: 5,
  },
  amountText: {
    fontSize: 14,
    color: "#fff",
  },
  priceText: {
    fontSize: 14,
    color: "#fff",
  },
  buyButton: {
    backgroundColor: "#f2c025",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  postOfferButton: {
    backgroundColor: "#f2c025",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  postOfferText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navText: {
    fontSize: 16,
    color: "#fff",
  },
});
