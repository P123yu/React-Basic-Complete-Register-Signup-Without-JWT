import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      isAuthenticatedData: false,
      setIsAuthenticated: (newIsAuthenticated) =>
        set({ isAuthenticatedData: newIsAuthenticated }),
    }),
    {
      name: "Response",
      Storage: () => localStorage,
    }
  )
);

export default useStore;
