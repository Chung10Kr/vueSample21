export default [
	{ path: '/main', component: () => import('@/view/common/Main.vue') },
	{ path: '/set', component: () => import('@/view/common/Setting.vue') },
	{ path: '/ajax', component: () => import('@/view/Ajax.vue') },
];

/*
다이나믹 임포트

SPA(Single Page Application)이기 때문에 
랴우트의 변경으로 현재 페이지가 변경되더라도 개발자 도구의 Network탭에는 아무런 변화가 없다.
최초 사이트 접속할때 app.js안에 모든 페이지 정보가 들어가 있다.

그러나 실제 프로젝트의 화면 개수는 엄청나게 많다.
그 많은 페이지를 처음에 한번에 다 로딩해오는것은 베리 타이어드

따라서 Login페이지라면 최초에 Login페이지만 먼저 들어오고 
나머지는 해당 url로 이동했을 떄만 들고 오게 하는것이 코드 스플리팅의 역할이다.

이것이 다이나믹 임포트
*/
