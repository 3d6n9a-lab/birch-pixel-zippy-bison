import { create } from "zustand";

export type ViewId =
  | "home"
  | "studio"
  | "domains"
  | "gateway"
  | "owbook"
  | "market"
  | "agents"
  | "analytics";

export type AgentId = "grok" | "gpt" | "gemini" | "claude" | "auto" | "nodes" | "settings";

export type BotId = "orb" | "us" | "spider";

export type WeatherKind = "clear" | "clouds" | "rain" | "snow";

export type Cat = "trad" | "dig" | "re";

export interface Listing {
  id: number;
  title: string;
  cat: Cat;
  price: number;
  date: number;
  score: number;
  tags: string[];
}

export interface ChatLine {
  id: string;
  from: BotId | AgentId | "you";
  text: string;
}

export interface WeatherState {
  kind: WeatherKind;
  tempC: number;
  label: string;
  cloud: number;
}

const TAGS = ["Handmade", "Luxury", "New", "In stock", "Tokenized", "Cadastral"];

function seedListings(): Listing[] {
  const cats: Cat[] = ["trad", "dig", "re"];
  return Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Asset sample ${i + 1}`,
    cat: cats[i % 3]!,
    price: (12 + i * 8) * 1e6,
    date: 1404000 + i,
    score: 62 + ((i * 7) % 35),
    tags: [TAGS[i % 6]!, TAGS[(i + 2) % 6]!],
  }));
}

interface AppStore {
  view: ViewId;
  setView: (v: ViewId) => void;
  agent: AgentId;
  setAgent: (a: AgentId) => void;
  chat: ChatLine[];
  pushChat: (line: Omit<ChatLine, "id">) => void;
  weather: WeatherState;
  setWeather: (w: WeatherState) => void;
  meeting: boolean;
  triggerMeeting: () => void;
  endMeeting: () => void;
  listings: Listing[];
  addListing: (l: Listing) => void;
  profileName: string;
  setProfileName: (n: string) => void;
  credit: number;
  setCredit: (n: number) => void;
  domainQuery: string;
  setDomainQuery: (q: string) => void;
  prompt: string;
  setPrompt: (p: string) => void;
  generated: boolean;
  setGenerated: (v: boolean) => void;
}

export const useApp = create<AppStore>((set) => ({
  view: "home",
  setView: (view) => set({ view }),
  agent: "gpt",
  setAgent: (agent) => set({ agent }),
  chat: [
    { id: "c0", from: "orb", text: "ORBWEBS mesh online. Identity lattice is stable." },
    { id: "c1", from: "us", text: "US link established. Logistics + escrow synced." },
  ],
  pushChat: (line) =>
    set((s) => ({
      chat: [...s.chat.slice(-40), { ...line, id: crypto.randomUUID() }],
    })),
  weather: { kind: "clear", tempC: 22, label: "Clear", cloud: 20 },
  setWeather: (weather) => set({ weather }),
  meeting: false,
  triggerMeeting: () => set({ meeting: true }),
  endMeeting: () => set({ meeting: false }),
  listings: seedListings(),
  addListing: (l) => set((s) => ({ listings: [l, ...s.listings] })),
  profileName: "Jatin Reddy",
  setProfileName: (profileName) => set({ profileName }),
  credit: 740,
  setCredit: (credit) => set({ credit }),
  domainQuery: "orbwebs.dob",
  setDomainQuery: (domainQuery) => set({ domainQuery }),
  prompt:
    "Create a modern, responsive landing page for BAZARID ecosystem with a hero section, feature cards, and a call-to-action button. Use a futuristic style and brand colors.",
  setPrompt: (prompt) => set({ prompt }),
  generated: false,
  setGenerated: (generated) => set({ generated }),
}));
