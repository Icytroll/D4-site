export const itemStats = [
  "Strength",
  "Maximum Life",
  "Life On Hit",
  "Fury On Kill",
  "Attack Speed",
  "Critical Strike Chance",
  "Critical Strike Damage",
  "Overpower Damage",
  "Vulnerable Damage",
  "Damage Over Time",
  "Lucky Hit Chance",
  "Lucky Hit Chance Vulnerable For 2 Seconds",
  "Lucky Hit Chance Restore Resource",
  "Armor",
  "Resistance to All Elements",
  "Fire Resistance",
  "Cold Resistance",
  "Lightning Resistance",
  "Poison Resistance",
  "Shadow Resistance",
  "Resource Cost Reduction",
  "Core Skills",
  "Double Swing",
  "Hammer of the Ancients",
  "Rend",
  "Upheaval",
  "Whirlwind",  
  "non-weapon stat",
  "Dust Devil Size",
  "Dust Devil Damage",
  "Damage vs Close",
] as const;

export type Stat = (typeof itemStats)[number];

export const weaponAffixStats: Stat[] = [
  "Strength",
  "Maximum Life",
  "Life On Hit",
  "Fury On Kill",
  "Critical Strike Damage",
  "Overpower Damage",
  "Vulnerable Damage",
  "Damage Over Time",
  "Lucky Hit Chance Restore Resource",
  "Resource Cost Reduction",
];

export const weaponTemperStats: Stat[] = [
  "Dust Devil Size",
  "Dust Devil Damage",
  "Damage vs Close"
];

export const otherAffixStats: Stat[] = [
  "non-weapon stat"
];

export const glovesAffixStats: Stat[] = [
  "Strength",
  "Maximum Life",
  "Life On Hit",
  "Attack Speed",
  "Critical Strike Chance",
  "Critical Strike Damage",
  "Overpower Damage",
  "Vulnerable Damage",
  "Damage Over Time",
  "Lucky Hit Chance",
  "Lucky Hit Chance Vulnerable For 2 Seconds",
  "Lucky Hit Chance Restore Resource",
  "Armor",
  "Resistance to All Elements",
  "Fire Resistance",
  "Cold Resistance",
  "Lightning Resistance",
  "Poison Resistance",
  "Shadow Resistance",
  "Resource Cost Reduction",
  "Core Skills",
  "Double Swing",
  "Hammer of the Ancients",
  "Rend",
  "Upheaval",
  "Whirlwind", 
]

