// https://prettier.io/docs/en/options.html

module.exports = {
  $schema: "http://json.schemastore.org/prettierrc",

  // Line 한 줄 길이
  printWidth: 100,

  // Tab 사용 여부
  useTabs: false,

  // Tab 길이
  tabWidth: 2,

  // 세미콜론 사용 여부
  semi: false,

  // 작은 따옴표 사용
  singleQuote: true,

  // TODO:
  // 객체의 키의 따옴표 사용 종류 (as-needed|consistent|preserve)
  quoteProps: "consistent",

  // JSX 문법 내부에서 작은 따옴표 사용 여부
  jsxSingleQuote: false,

  // 후행 쉼표 사용 여부
  trailingComma: "all",

  // 리터럴 객체의 대괄호 사이 공백 사용 여부
  bracketSpacing: true,

  // TODO:
  // 태그에서 > 문자의 한라인 포함 여부
  bracketSameLine: false,

  // TODO:
  // 화살표 함수의 괄호사용 여부 (always|avoid)
  arrowParens: "always",

  // 화살표 함수 괄호 (always|avoid)
  arrowParens: "always",

  // 개행 문자 타입
  endOfLine: "lf",
};
