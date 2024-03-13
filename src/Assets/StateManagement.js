import { create } from "zustand";

export const useSnackbarStore = create((set) => ({
  showSnackbar: false,
  setShowSnackbar: () =>
    set((state) => ({ showSnackbar: !state.showSnackbar })),
  snackbarMessage: "",
  setSnackbarMessage: (value) =>
    set((state) => ({
      snackbarMessage: value,
    })),
  snackbarType: "info",
  setSnackbarType: (value) =>
    set((state) => ({
      snackbarType: value,
    })),
}));
