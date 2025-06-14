export interface RegExpInterface {
  description: string;
  pattern: string;
  approved: boolean;
}

export type Mode = "edit" | "approval";

export type DialogType = "edit" | "add";
