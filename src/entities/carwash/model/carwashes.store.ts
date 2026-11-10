// import { create } from "zustand";
// import type { Carwash, CreateCarwashData, UpdateCarwashData } from "./types";

// export interface ICarwashStore {
//   carwashes: Carwash[];
//   getCarwashById: (id: number) => Carwash | undefined;
//   getCarwashesByOwnerId: (ownerId: number) => Carwash | null;
//   createCarwash: (carwash: CreateCarwashData) => Promise<Carwash>;
//   updateCarwash: (id: number, data: UpdateCarwashData) => Promise<Carwash>;
//   toggleFavorite: () => void;
// }

// export const useCarwashes = create<ICarwashStore>((set, get) => ({
//   carwashes: [],

//   getCarwashById: (id) => {
//     return get().carwashes.find((carwash) => carwash.id === id);
//   },

//   getCarwashesByOwnerId: (id) => {
//     return get().carwashes.filter((carwash) => carwash.id === id);
//   },

//   createCarwash: async () => {},

//   updateCarwash: async () => {},

//   toggleFavorite: () => {},
// }));
