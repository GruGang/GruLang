export type GruToken = {
  type: TokenType;
  value?: string;
};
enum TokenType {
  VariableDeclaration = "VariableDeclaration",
  AssignmentOperator = "AssignmentOperator",
  Literal = "Literal",
  String = "String",
  LineBreak = "LineBreak",
  Log = "Log",
  Unknown = "Unknown",
}
const delimiters = [" ", "\n", ":", "(", ")", "{", "}"];

const gruToken: (source: string) => GruToken | null = (source: string) => {
  type mapEntry = {
    type: TokenType;
    pattern: RegExp;
    hasValue: boolean;
  };
  type tokenMap = Array<mapEntry>;

  const typeMap: tokenMap = [
    {
      type: TokenType.Literal,
      pattern: /[A-Za-z0-9]*/,
      hasValue: true,
    },
    {
      type: TokenType.String,
      pattern: /\'[^']*\'/,
      hasValue: true,
    },
    {
      type: TokenType.AssignmentOperator,
      pattern: /be/g,
      hasValue: false,
    },
  ];

  let retVal: GruToken | null = { type: TokenType.Unknown, value: source };

  typeMap.forEach((entry) => {
    if (source.match(entry.pattern) !== null) {
      retVal = {
        type: entry.type,
        value: entry.hasValue ? source : undefined,
      };
      return;
    }
  });
  return retVal;
};

const lex: (code: string) => Array<GruToken> = (code: string) => {
  let position = 0;
  let inString = false;
  let substr = "";
  const tokens: Array<GruToken> = [];
  while (position < code.length) {
    let char: string = code[position] || "";
    if (delimiters.includes(char) && char == "'" && !inString) {
      if (substr.length > 0) {
        let gToken = gruToken(substr);
        if (gToken) tokens.push(gToken);
      }
      substr = "";
      position++;
      continue;
    }
    substr += code[position];
    position++;
  }
  // const tokens: Array<GruToken> = code.split(" ").map((value) => {
  //   return { type: TokenType.Literal, value: value } as GruToken;
  // });
  return tokens;
};

export const gruLex: (gruString: string) => Array<GruToken> = (
  gruString: string
) => {
  let tokens = lex(gruString);
  return tokens;
};
