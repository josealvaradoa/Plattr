import { Deal } from "./deals";
import { UserDeal } from "./userDeal";

// types/walletItem.ts
export interface WalletItem {
    userDeal: UserDeal;
    dealDetails: Deal;
  }
  