# vuesample


## 참고

[BootStrap Vue](https://bootstrap-vue.org/)
[Vue](https://kr.vuejs.org/v2/guide/index.html)

[BootStrap 참고](https://www.youtube.com/watch?v=5ETqQWvwXV4)
[Vue 참고](https://www.youtube.com/watch?v=sqH0u8wN4Rs)
[WebPack 참고](https://www.youtube.com/watch?v=rbmUFHZt3sg)
[Vue Tip 참고](https://jess2.xyz/vue/vue-tip/)
## Vue install

```
npm install -g @vue/cli
```

## Vscode Setup

vetur 플러그인 설치

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


## Vue 생명주기

![생명주기](./src/assets/img/lifecycle.png)

1. beforeCreate

beforeCreate()는 라이프사이클 중에서 가장 맨 처음 실행됩니다.

이때는 "아직 컴포넌트가 DOM에 추가되기 전이기 때문에 DOM에 접근을 하게 되면 에러가 발생"합니다.

2. created

data() 변수와 events 메서드가 활성화되어 접근할 수 있습니다.

beforeCreate() => data() => created() 순으로 실행되며 created에는 메서드나 변수를 접근해도 에러가 발생하지 않는다.

하지만 아직 템플릿과 가상 DOM에는 접근할 수 없다.

3. beforeMount

 template 태그가 실행된 후 실행됩니다.(즉, html 태그를 등록합니다.)

템플릿과 렌더 함수들이 컴파일된 후에 첫 렌더링 일어나기 직전에 실행됩니다.

 "만약에 초기 렌더링 직전에 DOM을 변경하고자 한다면 이 생명주기를 활 요하면 된다.

 하지만 컴포넌트 초기에 설정해야 할 데이터들은 created 단계에서 해야 합니다. "

4. mounted

템플릿과 렌더링 된 돔에 접근할 수 있는 단계입니다.

부모와 자식 관계에서 컴포넌트를 렌더링 할 때  자식 컴포넌트가 부모 컴포넌트보다 먼저 Mounted가 실행됩니다.

5. beforeUpdate

컴포넌트가 데이터가 변하여 업데이트 시작될 때 실행됩니다.

정확히는 DOM이 재 렌더링 되고 패치되기 직전에 실행되며, 재 렌더링 전의 "새 상태의 데이터"를 얻을 수 있습니다.

"여기서 혹시 값을 변경해도 재 랜더링 되지 않습니다!."

6. update

컴포넌트가 데이터가 변하여 재 렌더링이 일어난 후에 실행됩니다.

DOM이 업데이트 완료된 상태이며 연산과 기능을 할 수 있습니다.

 "여기서 상태를 변경하면... 무한루프에 빠질 수 있으니 조심하세요."

 7. beforeDestroy

 소멸(뷰 컴포넌트 제거)되기 직전에 호출됩니다.

컴포넌트는 기본 모습과 기능을 그대로 가지고 있으며, 이벤트와 같은 부분을 제거한다고 하면 해당 생명주기를 활용하자!.

8. destroyed

소멸된 후에 호출됩니다.

Vue의 모든 디렉티브(v-)가 바인딩 해제되고 모든 이벤트 리스너가 제거되며 모든 하위 Vue 컴포넌트도 삭제됩니다.