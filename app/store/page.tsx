"use client";
import { useState } from "react";
import AppBarContainer from "../components/appBar";
import { Cart } from "../components/constants/Types";

const emptyCart: Cart = {
  products: [],
};
export default function Store(): JSX.Element {
  const [cart, setCart] = useState(emptyCart);
  const [openCart, setOpenCart] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <>
      <AppBarContainer openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
}
