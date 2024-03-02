"use client";

import { AppBar, Grid, Toolbar, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { ShopName } from "../constants/Texts";
import Link from "next/link";

interface AppBarContainerProps {
  numberOfItems?: number;
  openCart: boolean;
  setOpenCart: (b: boolean) => void;
}
const AppBarContainer: React.FC<AppBarContainerProps> = ({
  numberOfItems,
  openCart,
  setOpenCart,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar id="back-to-top-anchor">
          <Grid container alignItems="center">
            <Grid item>
              <Button>
                {isMenuOpen ? (
                  <CloseIcon sx={{ color: "#fff" }} />
                ) : (
                  <MenuIcon />
                )}
              </Button>
            </Grid>

            <Grid item>
              <Link href="/">
                <Typography>{ShopName}</Typography>
              </Link>
            </Grid>

            <Grid item>
              <Button>
                <ShoppingCartIcon sx={{ color: "#000" }} />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarContainer;
