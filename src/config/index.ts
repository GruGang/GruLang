type gruKeyword =
  | "finna"
  | "nocap"
  | "cap"
  | "oof"
  | "yikes"
  | "facts"
  | "yeet"
  | "nah"
  | "smash"
  | "fresh"
  | "fr"
  | "lowkey"
  | "fr lowkey"
  | "ded"
  | "bet"
  | "be"
  | "do be"
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

export const lineCommentPrefix = "//";
export const goodPracticeComment = "IYKYK";

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
  ["null", "nah"],

  // Flow Control
  ["if", "fr"],
  ["else", "lowkey"],
  ["else if", "fr lowkey"],
  ["break", "ded"],
  ["try", "bet"],
  ["=", "be"],
  ["==", "do be"],
  ["===", "===="],
  ["?", "W"],
  [":", "L"],

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

  // TODO: *Maybe* think about OOP
  ["class", "boomer"],
]);
