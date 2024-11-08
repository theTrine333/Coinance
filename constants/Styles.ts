import { StyleSheet, Dimensions } from "react-native";
export const { width, height } = Dimensions.get("screen");
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  icon: {
    height: 160,
    width: 160,
    borderRadius: 120,
  },
  rowView: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  agreeButton: {
    backgroundColor: "#f2c025",
    padding: 15,
    borderRadius: 8,
    width: width * 0.95,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  agreeButtonDisabled: {
    backgroundColor: "#f8dc85",
    padding: 15,
    borderRadius: 8,
    width: width * 0.95,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  subContainer: {
    width: width * 0.95,
    minHeight: height * 0.35,
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
