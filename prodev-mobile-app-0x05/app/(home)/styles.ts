import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  searchControlGroup: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchFormText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1F1F1F",
  },
  searchControl: {
    marginTop: 6,
    fontSize: 14,
    color: "#333333",
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    columnGap: 16,
  },
  filterContainer: {
    height: 56,
    width: 72,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 6,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  paginationContainer: {
    paddingVertical: 24,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#1F1F1F",
    borderRadius: 22,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  showMoreButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
