import { create } from "zustand";
import type { Carwash } from "./types";

export interface ICarwashStore {
  carwashes: Carwash[];
  //   getCarwashById: (id: number) => Carwash | undefined;
  //   getCarwashesByOwnerId: (ownerId: number) => Carwash | null;
  //   createCarwash: (carwash: CreateCarwashData) => Promise<Carwash>;
  //   updateCarwash: (id: number, data: UpdateCarwashData) => Promise<Carwash>;
  toggleFavorite: (id: number) => void;
}

export const useCarwashes = create<ICarwashStore>((set) => ({
  carwashes: [],

  //   getCarwashById: (id) => {
  //     return get().carwashes.find((carwash) => carwash.id === id);
  //   },

  //   getCarwashesByOwnerId: (id) => {
  //     return get().carwashes.filter((carwash) => carwash.id === id);
  //   },

  //   createCarwash: async () => {},

  //   updateCarwash: async () => {},

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
