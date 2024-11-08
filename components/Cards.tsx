import {
  Image,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { width } from "@/constants/Styles";

interface Buyer {
  id: number;
  name: string;
  profilePic: string;
  buyRate: number;
  online: boolean;
}

export const BuyerCard = ({ buyer }: { buyer: Buyer }) => {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView
      style={[
        styles.buyerCard,
        { backgroundColor: theme === "light" ? "#f9f9f9" : "#2d3133" },
      ]}
    >
      <Image source={{ uri: buyer.profilePic }} style={styles.profilePic} />
      <ThemedView
        style={[styles.buyerInfo, { backgroundColor: "transparent" }]}
      >
        <ThemedText style={styles.buyerName}>{buyer.name}</ThemedText>
        <ThemedText style={styles.buyRate}>
          Rate: {buyer.buyRate} KES/WLD
        </ThemedText>
        <ThemedText
          style={[
            styles.onlineStatus,
            { color: buyer.online ? "green" : "#949da2" },
          ]}
        >
          {buyer.online ? "Online" : "Offline"}
        </ThemedText>
      </ThemedView>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => alert(`Selected ${buyer.name}`)}
      >
        <ThemedText style={styles.selectButtonText}>Select</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  // Original styles

  buyerList: {
    marginTop: 10,
  },
  buyerCard: {
    width: width * 0.95,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    elevation: 4,
    borderRadius: 10,
    marginVertical: 5,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  buyerInfo: {
    flex: 1,
    marginLeft: 10,
  },
  buyerName: {
    fontSize: 16,
  },
  buyRate: {
    fontSize: 14,
  },
  onlineStatus: {
    fontSize: 12,
  },
  selectButton: {
    backgroundColor: "#f2c025",
    padding: 8,
    borderRadius: 5,
  },
  selectButtonText: {
    color: "white",
  },
});
