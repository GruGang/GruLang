export type gruKeyword =
  | "finna"
  | "nocap"
  | "cap"
  | "oof"
  | "yikes"
  | "facts"
  | "yeet"
  | "be"
  | "===="
  | "W"
  | "L"
  | "smash"
  | "fresh"
  | "fr"
  | "lowkey"
  | "fr lowkey"
  | "ded"
  | "bet"
  | "Gotchu"
  | "sheesh"
  | "bussin"
  | "bless"
  | "sus"
  | "ong"
  | "holUp"
  | "Fam"
  | "Chad"
  | "Gigachad"
  | ":hash:"
  | ":pencil2:";

export const grumap = new Map<string, gruKeyword>([
  // Main keywords
  ["function", "finna"],
  ["true", "nocap"],
  ["false", "cap"],
  ["error", "oof"],
  ["throw", "yikes"],
  ["const", "facts"],
  ["return", "yeet"],
  ["delete", "smash"],
  ["new", "fresh"],

  // Flow Control
  ["if", "fr"],
  ["else", "lowkey"],
  ["else if", "fr lowkey"],
  ["break", "ded"],
  ["try", "bet"],
  ["=", "be"],
  ["===", "===="],
  ["?", "W"],
  [",", "L"],

  // Promises
  ["Promise", "Gotchu"],
  ["reject", "sheesh"],
  ["resolve", "bussin"],
  ["then", "bless"],
  ["catch", "sus"],
  ["finally", "ong"],

  // Types
  ["number", ":hash:"],
  ["string", ":pencil2:"],

  // Other shit that I can't be fucked to categorise
  ["setTimeout", "holUp"],
  ["Array", "Fam"],
  ["Object", "Chad"],
  ["Map", "Gigachad"],
]);
