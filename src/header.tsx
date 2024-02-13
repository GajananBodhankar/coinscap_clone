import { AppBar, Box, Button } from "@mui/material";
import "./header.css";
function Header() {
  return (
    <AppBar position="sticky" className="mainContainerHeader">
      <Box>
        <Button variant="text" className="buttons">
          Coins
        </Button>
        <Button variant="text" className="buttons">
          Exchanges
        </Button>
        <Button variant="text" className="buttons">
          Swap
        </Button>
      </Box>
      <Box
        component={"img"}
        src="https://coincap.io/static/logos/black.svg"
        className="mainImage"
      />
    </AppBar>
  );
}

export default Header;
