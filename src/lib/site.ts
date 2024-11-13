import { env } from "@/env";
import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "dApp Boilerplate",
  author: "panoptisDev",
  description: "A dapp boilerplate for your next project.",
  keywords: ["web3", "crypto", "nft", "boilerplate"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/panoptisDev",
  },
  links: {
    twitter: "https://github.com/panoptisDev",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
