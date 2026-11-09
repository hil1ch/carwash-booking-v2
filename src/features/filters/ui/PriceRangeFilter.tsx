import { useEffect, useState } from "react";

import { Slider } from "antd";
import { UIInputNumber } from "../../../shared/ui/UIInputNumber";

import type { IFilters } from "../model/types";

type PriceRange = IFilters["priceRange"];
type PriceInputValue = number | string | null;

interface IPriceRangeFilterProps {
  value: PriceRange;
  defaultValue: PriceRange;
  onChange: (value: PriceRange) => void;
}

const getPriceRange = (value: number | number[]): PriceRange | undefined =>
  Array.isArray(value) && value.length === 2 ? [value[0], value[1]] : undefined;

export const PriceRangeFilter = ({
  value,
  defaultValue,
  onChange,
}: IPriceRangeFilterProps) => {
  const [minDefault, maxDefault] = defaultValue;
  const [localRange, setLocalRange] = useState<PriceRange>(value);
  const [minPrice, maxPrice] = localRange;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalRange(value);
  }, [value]);

  const handleInputChange = (
    bound: "min" | "max",
    inputValue: PriceInputValue,
  ) => {
    const fallback = bound === "min" ? minDefault : maxDefault;
    const parsedValue = inputValue === null ? fallback : Number(inputValue);
    if (!Number.isFinite(parsedValue)) return;

    const nextRange: PriceRange =
      bound === "min"
        ? [Math.min(maxPrice, Math.max(minDefault, parsedValue)), maxPrice]
        : [minPrice, Math.max(minPrice, Math.min(maxDefault, parsedValue))];

    setLocalRange(nextRange);
    onChange(nextRange);
  };

  const handleSliderChange = (sliderValue: number | number[]) => {
    const range = getPriceRange(sliderValue);
    if (range) setLocalRange(range);
  };

  const handleSliderChangeComplete = (sliderValue: number | number[]) => {
    const range = getPriceRange(sliderValue);
    if (range) onChange(range);
  };

  return (
    <section className="text-left">
      <h4 className="font-semibold">Цена</h4>
      <div className="mt-3 flex items-center gap-2">
        <UIInputNumber
          aria-label="Минимальная цена"
          suffix="₽"
          min={minDefault}
          max={maxPrice}
          onChange={(inputValue) => handleInputChange("min", inputValue)}
          value={minPrice}
          size="medium"
          controls={false}
        />
        <UIInputNumber
          aria-label="Максимальная цена"
          suffix="₽"
          min={minPrice}
          max={maxDefault}
          onChange={(inputValue) => handleInputChange("max", inputValue)}
          value={maxPrice}
          size="medium"
          controls={false}
        />
      </div>
      <Slider
        keyboard
        range
        value={localRange}
        min={minDefault}
        max={maxDefault}
        onChange={handleSliderChange}
        onChangeComplete={handleSliderChangeComplete}
      />
    </section>
  );
};
