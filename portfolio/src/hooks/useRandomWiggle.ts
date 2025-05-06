import { useState, useEffect } from "react";

interface UseRandomWiggleProps {
  items: { title: string }[];
  wiggleDuration?: number;
  pauseDuration?: number;
}

export const useRandomWiggle = ({
  items,
  wiggleDuration = 1000,
  pauseDuration = 1000,
}: UseRandomWiggleProps) => {
  const [activeWiggle, setActiveWiggle] = useState<string | null>(null);

  useEffect(() => {
    const pickRandomItem = () => {
      const randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex].title;
    };

    const interval = setInterval(() => {
      setActiveWiggle(pickRandomItem());
      setTimeout(() => setActiveWiggle(null), wiggleDuration);
    }, wiggleDuration + pauseDuration);

    return () => clearInterval(interval);
  }, [items, wiggleDuration, pauseDuration]);

  return activeWiggle;
};
