import { Grid, Typography } from "@mui/material";
import Link from "next/link";

const Menu = ({ setMenuOpen }: { setMenuOpen: (b: boolean) => void }) => {
  return (
    <Grid container item xs={12}>
      <Grid item container direction="column">
        <Grid item>
          <Link href="/">
            <Typography>Home</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/store">
            <Typography>Store</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/store/about">
            <Typography>About</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menu;
