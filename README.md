# vue2

## 참고

[BootStrap Vue](https://bootstrap-vue.org/)

[Vue](https://kr.vuejs.org/v2/guide/index.html)

[Nuxt](https://nuxtjs.org)

[BootStrap 기초강의](https://www.youtube.com/watch?v=5ETqQWvwXV4)

[Vue 기초강의](https://www.youtube.com/watch?v=sqH0u8wN4Rs)

[WebPack 기초강의](https://www.youtube.com/watch?v=rbmUFHZt3sg)

[Vue Tip](https://jess2.xyz/vue/vue-tip/)

[Api Server](https://github.com/Chung10Kr/SimpleApiServer)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```


## VSCode 플러그인

- vetur(뷰 확장 플러그인)
- Vue VSCode Snippets(뷰 코드 스니펫)
- ESLint, 

 1. ESLint 설치
 2. 설정(cmd+,) 에서 eslint:probe 검색
 3. eslint에서 vue를 지원하지 않으면 항목 
 4. 추가버튼을 눌러서 추가해줌

 5. eslint:Validate의 settings.js에 추가
 ```json
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.alwaysShowStatus": true,
"eslint.workingDirectories": [{
    "mode": "auto"
}],
"eslint.validate": [{
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    },
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    },
]
 ```

- Prettier플러그인 설치
1. 설치하고 사용안함(작업영역) , disable(workspace) 을 선택
2. 설정에서 format on save 검색 및 체크 해제

- TSLint(문법검사)



- Live Server(라이브로딩 서버)



# Jest Setup
```
npm install jest --global
jest --init
```