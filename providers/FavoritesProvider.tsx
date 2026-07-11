"use client";

import { ReactNode } from "react";

import {
  FavoritesProvider as Provider,
} from "@/context/FavoritesContext";

interface Props {
  children: ReactNode;
}

export default function FavoritesProvider({
  children,
}: Props) {
  return (
    <Provider>
      {children}
    </Provider>
  );
}