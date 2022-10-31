import { StyleSheet } from "react-native";

import { COLORS } from "../../shared/constants";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: COLORS.WHITESMOKE,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 7,
  },

  bookInfoContainer: {
    flexDirection: "row",
  },

  sideContainer: {
    flexShrink: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    color: COLORS.BLACK,
  },

  authors: {
    fontSize: 14,
    color: COLORS.GRAY,
  },

  removeButton: {
    alignItems: "center",
    marginTop: 5,
    flexDirection: "row",
  },

  removeButtonText: {
    color: COLORS.ACCENT,
    fontSize: 14,
    flexShrink: 1,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});
