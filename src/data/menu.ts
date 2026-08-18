import { StaticImageData } from "next/image";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: ("vegetarian" | "spicy" | "popular" | "egg")[];
  note?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  shortName: string;
  description?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "popular",
    name: "Most Popular",
    shortName: "Popular",
    description: "Guest favorites — start here if it's your first visit.",
    items: [
      {
        id: "thelewala-chicken-roll",
        name: "Thelewala Chicken Roll",
        description: "Chicken, fried eggs, green sauce, red onions, cilantro",
        price: 11.49,
        tags: ["popular"],
        image: "/ThelewalaChickenRoll.jpg",
      },
      {
        id: "chata-pata-paneer-roll",
        name: "Chata Pata Paneer Roll",
        description: "Paneer cheese, tomato sauce, red onions, cilantro",
        price: 11.49,
        tags: ["vegetarian", "popular"],
        image: "/ChataPataPaneerRoll.jpg",
      },
      {
        id: "chicken-phall-roll",
        name: "Chicken Phall Roll",
        description:
          "Chicken, fried eggs, habanero chutney, red onions, cilantro",
        price: 11.99,
        tags: ["spicy", "popular"],
        note: "It's fire!!",
        image: "/ChickenPhallRoll.jpg",
      },
      {
        id: "bhel-puri",
        name: "Bhel Puri",
        description: "Crispy morsels, red onions, two chutneys, cilantro",
        price: 11.49,
        tags: ["vegetarian", "popular"],
        image: "/BhelPuri.jpg",
      },
      {
        id: "lime-paneer-roll",
        name: "Lime Paneer Roll",
        description: "Paneer cheese, red onion, lime and cilantro",
        price: 11.49,
        tags: ["vegetarian", "popular"],
        image: "/LimePaneerRoll.jpg",
      },
    ],
  },
  {
    id: "nizami-non-veg",
    name: "Nizami Rolls — Non-Vegetarian",
    shortName: "Non-Veg Rolls",
    description:
      "Farm-raised natural chicken (hormone free). Cooked in olive oil. Served with eggs — can be prepared without eggs on request.",
    items: [
      {
        id: "egg-roll",
        name: "Egg Roll",
        description: "Fried egg, red onions, chili, cilantro",
        price: 8.99,
        note: "Add Phall Sauce $1 extra",
        image: "/EggRoll.jpg",
      },
      {
        id: "chicken-phall-roll-full",
        name: "Chicken Phall Roll",
        description:
          "Chicken, fried eggs, habanero chutney, red onions, cilantro",
        price: 11.99,
        tags: ["spicy"],
        note: "It's fire!!",
        image: "/ChickenPhallRoll.jpg",
      },
      {
        id: "chat-pata-chicken-roll",
        name: "Chat Pata Chicken Roll",
        description: "Chicken, fried eggs, tomato sauce, red onions, cilantro",
        price: 11.49,
        image: "/ChatPataChickenRoll.jpg",
      },
      {
        id: "chicken-malai-roll",
        name: "Chicken Malai Roll",
        description:
          "Chicken, fried eggs, creamy marinade, red onions, lime, cilantro",
        price: 11.49,
        image: "/ChickenMalaiRoll.jpg",
      },
      {
        id: "thelewala-chicken-roll-full",
        name: "Thelewala Chicken Roll",
        description: "Chicken, fried eggs, green sauce, red onions, cilantro",
        price: 11.49,
        tags: ["popular"],
        image: "/ThelewalaChickenRoll.jpg",
      },
      {
        id: "chapli-roll",
        name: "Chapli Roll",
        description: "Minced lamb patties, fried eggs, red onions, cilantro",
        price: 11.99,
        image: "/ChapliRoll.jpg",
      },
    ],
  },
  {
    id: "nizami-vegetarian",
    name: "Nizami Rolls — Vegetarian",
    shortName: "Veg Rolls",
    description: "No eggs included. Add egg for $1.50 extra.",
    items: [
      {
        id: "achari-aloo-tiki-roll",
        name: "Achari Aloo Tiki Roll",
        description: "Potatoes, pickling spices, red onions, cilantro",
        price: 10.5,
        tags: ["vegetarian"],
        image: "/AchariAlooTikkiRoll.jpg",
      },
      {
        id: "aloo-gobi-roll",
        name: "Aloo Gobi Roll",
        description: "Potato, cauliflower, smoked chili, red onion",
        price: 10.75,
        tags: ["vegetarian"],
      },
      {
        id: "gobi-paneer-roll",
        name: "Gobi Paneer Roll",
        description:
          "Cauliflower, paneer cheese, smoked chili, red onion, cilantro",
        price: 10.75,
        tags: ["vegetarian"],
        image: "/GobiPaneerRoll.jpg",
      },
      {
        id: "smoky-gobi-roll",
        name: "Smoky Gobi Roll",
        description: "Cauliflower, smoky red chili, red onions, cilantro",
        price: 10.75,
        tags: ["vegetarian"],
        image: "/SmokyGobiRoll.jpg",
      },
      {
        id: "aloo-paneer-roll",
        name: "Aloo Paneer Roll",
        description: "Potatoes, paneer cheese, cumin, cilantro",
        price: 10.75,
        tags: ["vegetarian"],
        image: "/AlooPaneerRoll.jpg",
      },
      {
        id: "okra-roll",
        name: "Okra Roll",
        description: "Crispy grilled okra, onions, lime, cilantro",
        price: 10.75,
        tags: ["vegetarian"],
        image: "/OkraRoll.jpg",
      },
    ],
  },
  {
    id: "basti-khana",
    name: "Calcutta Basti Khana",
    shortName: "Basti Khana",
    description: "Hearty Calcutta-style plates served with two breads.",
    items: [
      {
        id: "chili-anda-paratha",
        name: "Chili Anda w/ Paratha",
        description: "Indian-style scrambled eggs, chilies, onion, cilantro",
        price: 14.99,
      },
      {
        id: "ghugni-paratha",
        name: "Ghugni w/ Paratha",
        description: "Yellow-peas curry from Calcutta",
        price: 16.99,
        tags: ["vegetarian"],
        image: "/GhugniWithParatha.jpg",
      },
      {
        id: "tawa-chicken-paratha",
        name: "Tawa Chicken w/ Paratha",
        description:
          "Grilled chicken, sautéed onions, house blend spices, cilantro",
        price: 17.99,
        image: "TawaChickenwithParatha.jpg",
      },
    ],
  },
  {
    id: "chaatwala",
    name: "Chaatwala",
    shortName: "Chaat",
    description: "Classic Calcutta street snacks. Served cold.",
    items: [
      {
        id: "ragara-patties",
        name: "Ragara Patties",
        description: "Potato patties, chickpeas, two chutneys, cilantro",
        price: 11.49,
        tags: ["vegetarian"],
        image: "RagaraPatties.jpg",
      },
      {
        id: "peanut-masala",
        name: "Peanut Masala",
        description: "Peanuts, red onions, fresh coriander, chili, lime",
        price: 8.99,
        tags: ["vegetarian"],
        image: "PeanutMasala.jpg",
      },
      {
        id: "puchka",
        name: "Puchka (Pani Puri)",
        description: "Stuffed puri bread served with spiced tamarind water",
        price: 11.49,
        tags: ["vegetarian"],
        image: "PuchkaPaniPuri.jpg",
      },
      {
        id: "jaal-muri",
        name: "Jaal Muri",
        description: "Puffed rice, peanuts, potatoes, lime, cilantro",
        price: 11.49,
        tags: ["vegetarian"],
        image: "JaalMuri.jpg",
      },
    ],
  },
  {
    id: "add-ons",
    name: "Add-Ons",
    shortName: "Add-Ons",
    items: [
      {
        id: "extra-egg",
        name: "Extra Egg",
        description: "Add to any roll",
        price: 2.0,
      },
      {
        id: "phall-sauce",
        name: "Phall Sauce on the Side",
        description: "Habanero heat — handle with care",
        price: 2.0,
        tags: ["spicy"],
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return `$${price.toFixed(2).replace(/\.00$/, "")}`;
}
