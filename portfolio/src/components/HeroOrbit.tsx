import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  spinDuration,
  orbitDuration,
  shouldSpin = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  shouldSpin?: boolean;
  shouldOrbit?: boolean;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-orbit")}
        style={{
          animationDuration: orbitDuration || "10s",
        }}
      >
        <div
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: spinDuration || "1s",
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
