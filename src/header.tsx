import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import "./header.css";
import { useState } from "react";
let options = [
  { name: "Afghan Afghani", acr: "AFN" },
  { name: "United States Dollar", acr: "USD" },
];
function Header() {
  const [value, setValue] = useState<any>(options[1].acr);
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
      <Box className={"lastComponentOfHeader"}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          getOptionLabel={(option) => option.acr}
          options={options}
          onChange={(e, newValue) => setValue(newValue)}
          value={value.acr}
          disableClearable
          sx={{ width: 120 }}
          renderOption={(props, option) => (
            <Box component="li" className="currencyList" {...props}>
              <Typography className="optionName">{option.name}</Typography>
              <Typography>{option.acr}</Typography>
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} variant="standard" placeholder="USD" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["English", "हिंदी"]}
          renderInput={(params) => (
            <TextField {...params} variant="standard" placeholder="English" />
          )}
          sx={{ width: 120 }}
        />
      </Box>
    </AppBar>
  );
}

export default Header;
