type gruKeyword =
  | "finna"
  | "nocap"
  | "cap"
  | "oof"
  | "yikes"
  | "facts"
  | "yeet"
  | "smash"
  | "fresh"
  | "fr"
  | "lowkey"
  | "fr lowkey"
  | "ded"
  | "bet"
  | "be"
  | "===="
  | "W"
  | "L"
  | "Gotchu"
  | "sheesh"
  | "bussin"
  | "bless"
  | "sus"
  | "ong"
  | "holUp"
  | ":hash:"
  | ":pencil2:"
  | "Fam"
  | "Chad"
  | "Gigachad"
  | "boomer";

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
  ["if", "fr"],
  ["else", "lowkey"],
  ["else if", "fr lowkey"],
  ["break", "ded"],
  ["try", "bet"],
  ["=", "be"],
  ["===", "===="],
  ["?", "W"],
  [":", "L"],
  ["Promise", "Gotchu"],
  ["reject", "sheesh"],
  ["resolve", "bussin"],
  ["then", "bless"],
  ["catch", "sus"],
  ["finally", "ong"],
  ["setTimeout", "holUp"],
  ["number", ":hash:"],
  ["string", ":pencil2:"],
  ["Array", "Fam"],
  ["Object", "Chad"],
  ["Map", "Gigachad"],
  ["class", "boomer"],
]);
