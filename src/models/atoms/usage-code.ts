export const UsageCode = {
  Students: "ETUDIANT"
} as const;

export type UsageCode = typeof UsageCode[keyof typeof UsageCode];
