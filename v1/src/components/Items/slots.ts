export const itemSlots = [
  "Helm",
  "Neck",
  "Finger 1",
  "Finger 2",
  "Chest",
  "Gloves",
  "Pants",
  "Boots",
  "2 Hand (blunt)",
  "1 Hand (left)",
  "1 Hand (right)",
  "2 Hand (slashing)",
] as const;

export type Slot = (typeof itemSlots)[number];

export const weaponSlots: Slot[] = [
  "2 Hand (blunt)",
  "1 Hand (left)",
  "1 Hand (right)",
  "2 Hand (slashing)",
];

export const armorSlots: Slot[] = [
  "Helm",
  "Chest",
  "Gloves",
  "Pants",
  "Boots",
];

export const jewelrySlots: Slot[] = [
  "Neck",
  "Finger 1",
  "Finger 2",
];

export const singleGemSlots: Slot[] = [
  "Helm",
  "Neck",
  "Finger 1",
  "Finger 2",
  "1 Hand (left)",
  "1 Hand (right)",
] as const;

export const doubleGemSlots: Slot[] = [
  "Chest",
  "Pants",
  "2 Hand (blunt)",
  "2 Hand (slashing)",
] as const;