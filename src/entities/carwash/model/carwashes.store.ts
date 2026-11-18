import { create } from "zustand";
import type { Carwash } from "./types";

export interface ICarwashStore {
  carwashes: Carwash[];
  isInitialized: boolean;
  //   getCarwashById: (id: number) => Carwash | undefined;
  //   getCarwashesByOwnerId: (ownerId: number) => Carwash | null;
  //   createCarwash: (carwash: CreateCarwashData) => Promise<Carwash>;
  //   updateCarwash: (id: number, data: UpdateCarwashData) => Promise<Carwash>;
  setCarwashes: (carwashes: Carwash[]) => void;
  toggleFavorite: (id: number) => void;
}

export const useCarwashes = create<ICarwashStore>((set) => ({
  carwashes: [],
  isInitialized: false,

  //   getCarwashById: (id) => {
  //     return get().carwashes.find((carwash) => carwash.id === id);
  //   },

  //   getCarwashesByOwnerId: (id) => {
  //     return get().carwashes.filter((carwash) => carwash.id === id);
  //   },

  //   createCarwash: async () => {},

  //   updateCarwash: async () => {},

  setCarwashes: (carwashes) => {
    set((state) => ({
      carwashes: carwashes.map((carwash) => {
        const currentCarwash = state.carwashes.find(
          ({ id }) => id === carwash.id,
        );

        return currentCarwash
          ? { ...carwash, isFavorite: currentCarwash.isFavorite }
          : carwash;
      }),
      isInitialized: true,
    }));
  },

  toggleFavorite: (id) => {
    set((state) => ({
      carwashes: state.carwashes.map((carwash) =>
        carwash.id === id
          ? { ...carwash, isFavorite: !carwash.isFavorite }
          : carwash,
      ),
    }));
  },
}));
