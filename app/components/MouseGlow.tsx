"use client";

import { useEffect, useRef } from "react";
import { fairyDustCursor } from "cursor-effects";

export default function MouseGlow() {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      // @ts-expect-error - ignore cursor-effects TS types
      new fairyDustCursor({ colors: ["#F3FE00"] });
      isInitialized.current = true;
    }
  }, []);

  return null;
}
