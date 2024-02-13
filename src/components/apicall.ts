import axios from "axios";
import { SetStateAction } from "react";

async function getApicall(
  coins: any[] | undefined,
  setCoins: { (value: SetStateAction<undefined>): void; (arg0: any): void },
  setChanged: { (value: SetStateAction<undefined>): void; (arg0: any): void }
) {
  let response = await axios.get("https://api.coincap.io/v2/assets");
  if (coins) {
    let less = response.data.data
      .filter((i: any, j: number) => j < 50)
      .filter((i: { name: any; priceUsd: any }, j: any) =>
        coins.find(
          (element: { name: any; priceUsd: any }) =>
            element.name == i.name &&
            Number(element.priceUsd).toFixed(2) < Number(i.priceUsd).toFixed(2)
        )
      );
    let more = response.data.data
      .filter((i: any, j: number) => j < 50)
      .filter((i: { name: any; priceUsd: any }, j: any) =>
        coins.find(
          (element: { name: any; priceUsd: any }) =>
            element.name == i.name &&
            Number(element.priceUsd).toFixed(2) > Number(i.priceUsd).toFixed(2)
        )
      );
    if (less.length != 0 || more.length != 0) {
      setCoins(response.data.data.filter((i: any, j: number) => j < 50));
    }
    less = less.map((i: { name: any }) => ({ name: i.name, color: "green" }));
    more = more.map((i: { name: any }) => ({ name: i.name, color: "red" }));
    console.log(less.concat(more));
    setChanged(less.concat(more));
  }
}

async function firstCall(setCoins) {
  let response = await axios.get("https://api.coincap.io/v2/assets");
  setCoins(response.data.data.filter((i: any, j: number) => j < 50));
}
export { getApicall, firstCall };
