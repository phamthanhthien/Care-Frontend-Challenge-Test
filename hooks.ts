import useSWR from "swr";
import SWRFetch from "./utils/useSWR";

// Get coins
export function useCoins(shouldFetch: any) {
  const queryString = new URLSearchParams({
    "x-access-token": "coinrankingffe328d3b6e13fedf28f8c1840276a7fdc3115986410d1e7",
    search: "Bit",
  });

  const key = "https://api.coinranking.com/v2/coins?" + queryString;

  const { data, error } = useSWR(key && shouldFetch, () => SWRFetch(key));

  console.log("useCoins data", data);

  return { data: data, error };
}
