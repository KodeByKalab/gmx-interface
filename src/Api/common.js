import { ApolloClient, InMemoryCache } from "@apollo/client";

export const chainlinkClient = createClient("https://api.thegraph.com/subgraphs/name/deividask/chainlink");
export const arbitrumGraphClient = createClient("https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats");
export const arbitrumPricesGraphClient = createClient(
  "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-prices"
);
export const avalancheGraphClient = createClient("https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-stats");
export const avalanchePricesGraphClient = createClient(
  "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-prices"
);
export const nissohGraphClient = createClient("https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault");
export const arbitrumReferralsGraphClient = createClient(
  "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-referrals"
);
export const avalancheReferralsGraphClient = createClient(
  "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-referrals"
);

function createClient(uri) {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
}
