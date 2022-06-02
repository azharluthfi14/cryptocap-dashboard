import React, { useEffect, useState } from "react";
import { useGetCoinsQuery } from "../../services/coinApi";

const Card = () => {
  const { data: coinLists } = useGetCoinsQuery(6);
  const [coins, setCoins] = useState();
  useEffect(() => {
    setCoins(coinLists?.data?.coins);
  }, [coinLists]);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {coins?.map((coin) => (
        <div
          key={coin.uuid}
          className="bg-white border rounded-md p-4 sm:p-6 xl:p-5 "
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img className="w-8 h-8" src={coin.iconUrl} alt="" />
              <span>{coin.symbol}</span>
              <span className="flex text-xs rounded-full justify-center items-center px-2 py-1 bg-violet-100 font-bold">
                {coin.name}
              </span>
            </div>

            {coin.change < 0 ? (
              <div className="text-xs flex flex-row items-center font-bold text-red-500 bg-red-100 py-1 px-2 rounded-full ml-3">
                <span className="material-icons font-bold text-sm">
                  arrow_drop_down
                </span>
                {coin.change}%
              </div>
            ) : (
              <div className="text-xs flex flex-row items-center font-bold text-emerald-500 bg-emerald-100 py-1 px-2  rounded-full ml-3">
                <span className="material-icons font-bold text-sm">
                  arrow_drop_up
                </span>
                {coin.change}%
              </div>
            )}
          </div>
          <div className="flex flex-col mt-4 space-y-4">
            <span className="font-bold text-slate-600 text-2xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(coin.price)}
            </span>
            <span className="text-xs text-slate-500font-semibold">
              {coin.btcPrice} BTC
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
