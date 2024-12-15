export const UsageCode = {
  Student: "ETUDIANT"
} as const;

export type UsageCode = typeof UsageCode[keyof typeof UsageCode];
