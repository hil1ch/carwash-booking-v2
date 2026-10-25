import { CarWash } from "../../../entities/carwash";

export const FavoritePage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Мои записи</h1>
      <p className="text-sm text-gray-500 mb-5!">
        Сохраненные автомойки, которые вам понравились
      </p>
      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
      </ul>
    </>
  );
};
