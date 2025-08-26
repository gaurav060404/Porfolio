"use client";

import { twMerge } from "tailwind-merge";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_GRIDS = {
  "6x4": { rows: 4, cols: 6 },
  "4x4": { rows: 4, cols: 4 }, // Smaller grid for better performance
  "8x3": { rows: 3, cols: 8 },
};

export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 600, // Reduced delay
  colorRevealDelay = 1300,
  customGrid,
  isInView = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };

    return isValidGrid(customGrid) ? customGrid : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        const colorTimeout = setTimeout(() => {
          setShowColor(true);
        }, colorRevealDelay);
        return () => clearTimeout(colorTimeout);
      }, 100); // Debounce visibility updates
      return () => clearTimeout(timeout);
    }
  }, [colorRevealDelay, isInView]);

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const overlap = 0.1;
      const colWidth = 100 / cols;
      const rowHeight = 100 / rows;

      const clipPath = `polygon(
        ${Math.max(0, col * colWidth - overlap)}% ${Math.max(0, row * rowHeight - overlap)}%,
        ${Math.min(100, (col + 1) * colWidth + overlap)}% ${Math.max(0, row * rowHeight - overlap)}%,
        ${Math.min(100, (col + 1) * colWidth + overlap)}% ${Math.min(100, (row + 1) * rowHeight + overlap)}%,
        ${Math.max(0, col * colWidth - overlap)}% ${Math.min(100, (row + 1) * rowHeight + overlap)}%
      )`;

      const delay = Math.random() * maxAnimationDelay;
      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay]);

  return (
    <div className="relative h-72 w-72 select-none md:h-96 md:w-96">
      {pieces.map((piece, index) => (
        <div
          key={index}
          className={twMerge(
            "absolute inset-0 transition-all ease-out",
            isVisible ? "opacity-100" : "opacity-0",
          )}
          style={{
            clipPath: piece.clipPath,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
        >
          <img
            loading="lazy"
            src={src}
            alt={`Pixel image piece ${index + 1}`}
            className={twMerge(
              "w-full h-full object-cover rounded-[2.5rem]",
              grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale"),
            )}
            style={{
              transition: grayscaleAnimation
                ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
              transform: "scale(1.01)", // Slight scale to eliminate gaps
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};
