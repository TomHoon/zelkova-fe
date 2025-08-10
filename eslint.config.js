import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 1. JS 권장 설정 적용
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },

  // 2. 글로벌 환경 설정 (브라우저 + 노드)
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },

  // 3. React 권장 설정 적용 (Flat Config 방식)
  pluginReact.configs.flat.recommended,

  // 4. Prettier 플러그인 적용 및 룰 설정
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      // prettier 규칙을 ESLint 에러로 표시
      'prettier/prettier': 'error',
      'linebreak-style': ['error', 'windows'], //CRLF 줄바꿈을 강제
    },
    // Prettier를 eslint:recommended와 같이 extends에 넣는 대신 직접 플러그인과 룰만 등록하는 방식입니다.
  },
]);

