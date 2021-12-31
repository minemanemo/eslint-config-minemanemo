module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // Line 한 줄 길이
        printWidth: 100,

        // Tab 사용 여부
        useTabs: false,

        // Tab 길이
        tabWidth: 2,

        // 세미콜론 사용 여부
        semi: true,

        // 작은 따옴표 사용
        singleQuote: true,

        // TODO:
        // 객체의 키의 따옴표 사용 종류 (as-needed|consistent|preserve)
        quoteProps: 'consistent',

        // JSX 문법 내부에서 작은 따옴표 사용 여부
        jsxSingleQuote: false,

        // 후행 쉼표 사용 여부
        trailingComma: 'all',

        // 리터럴 객체의 대괄호 사이 공백 사용 여부
        bracketSpacing: true,

        // 태그에서 > 문자의 한라인 포함 여부
        bracketSameLine: false,

        // 화살표 함수의 괄호사용 여부 (always|avoid)
        arrowParens: 'always',

        // 개행 문자 타입
        endOfLine: 'lf',
      },
    ],
  },
};

// 0 npm 배포 -> setting zero... (보안팀이나)
// 1 사내 nexus -> npm re
// 2 지금처럼 파일 -> script 배포할때
