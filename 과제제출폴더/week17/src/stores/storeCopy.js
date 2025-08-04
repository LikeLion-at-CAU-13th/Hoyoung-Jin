import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLikeStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    { name: "like-storage" }
  )
);

export default useLikeStore;
