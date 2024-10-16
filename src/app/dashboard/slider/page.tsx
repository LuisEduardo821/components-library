"use client";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([20, 60]);
  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider Value {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        max={100}
        step={1}
        onValueChange={(value) => setSliderValue(value[0])}
      />
      <span>Range Value {rangeValue.join(",")}</span>
      <Slider
        defaultValue={rangeValue}
        max={100}
        step={1}
        onValueChange={setRangeValue}
      />
    </div>
  );
}
