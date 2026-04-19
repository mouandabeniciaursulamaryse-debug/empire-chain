// src/types/GameRole.ts
export type GameRole = 'Oil Magnat' | 'Luxury Dealer' | 'Trader' | 'President';

// src/types/Player.ts
export interface Player {
  id: string;
  name: string;
  role: GameRole;
  creditCard: CreditCard;
  clanId?: string;
  stockMarket: StockMarket;
  criminalSystem: CriminalSystem;
}

// src/types/CreditCard.ts
export interface CreditCard {
  type: 'Basic' | 'Black Card' | 'Titan Card';
  balance: number;
}

// src/types/ClanSystem.ts
export interface Clan {
  id: string;
  name: string;
  territoryControl: number;
  members: Player[];
}

// src/types/StockMarket.ts
export interface StockMarket {
  stocks: { [key: string]: number };
}

// src/types/CriminalSystem.ts
export interface CriminalSystem {
  activities: string[];
  wantedLevel: number;
}