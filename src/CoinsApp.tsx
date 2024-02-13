import axios from "axios";
import React, { useEffect, useState } from "react";
import { firstCall, getApicall } from "./components/apicall.ts";

function CoinApp() {
  const [coins, setCoins] = useState();
  const [changed, setChanged] = useState();

  useEffect(() => {
    firstCall(setCoins);
  }, []);
  useEffect(() => {
    let x = setTimeout(() => {
      getApicall(coins, setCoins, setChanged);
    }, 500);
    return () => clearTimeout(x);
  });
  return (
    <div>
      {coins
        ? coins.map((i, j) => {
            if (changed?.find((ele) => ele.name == i.name)) {
              let color = changed?.find((ele) => ele.name == i.name).color;
              return (
                <p key={i.id} style={{ backgroundColor: color }}>
                  {i.name} - {i.priceUsd} - {i.marketCapUsd}
                </p>
              );
            } else {
              return (
                <p key={i.id}>
                  {" "}
                  {i.name} - {i.priceUsd} - {i.marketCapUsd}
                </p>
              );
            }
          })
        : null}
    </div>
  );
}

export default CoinApp;
