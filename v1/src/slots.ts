export const itemSlots = [
  "Helm",
  "Chest",
  "2 Hand (blunt)",
  "Neck",
  "Gloves",
  "1 Hand (left)",
  "Finger 1",
  "Pants",
  "1 Hand (right)",
  "Finger2",
  "Boots",
  "2 Hand (slashing)",
] as const;

export type Slot = (typeof itemSlots)[number];

export const weaponSlots: Slot[] = [
  "2 Hand (blunt)",
  "1 Hand (left)",
  "1 Hand (right)",
  "2 Hand (slashing)",
];
