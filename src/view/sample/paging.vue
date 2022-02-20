<template>
	<div>
		<table>
			<colgroup>
				<col style="width: 50%" />
				<col style="width: auto" />
			</colgroup>
			<thead>
				<tr>
					<th class="AC">타입</th>
					<th class="AC">카테고리</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(list, item) in dataList"
					:key="item"
					style="cursor: pointer"
				>
					<td class="AC">{{ list.name }}</td>
					<td class="AC">{{ list.age }}</td>
				</tr>
				<tr v-if="this.dataList.length === 0">
					<td colspan="2">검색 결과가 없습니다.</td>
				</tr>
			</tbody>
		</table>
		<page-component
			:pageData="page"
			@onPage="pageClick"
			v-if="this.dataList.length !== 0"
		/>
	</div>
</template>

<script>
import pageComponent from '@/components/page/page';

export default {
	components: {
		pageComponent,
	},
	data() {
		return {
			page: {
				page: 1,
				count: 10,
				total: 0,
			},
			dataList: [],
		};
	},
	mounted() {
		this.search(1);
	},
	methods: {
		pageClick(page) {
			this.search(page);
		},
		search(page) {
			this.page.page = page;

			//DB 연결
			this.dataList = [
				{ name: '유재석', age: 21 },
				{ name: '이충렬', age: 27 },
				{ name: '김광현', age: 22 },
				{ name: '정근우', age: 25 },
				{ name: '박경완', age: 32 },
				{ name: '성시경', age: 33 },
				{ name: '이지영', age: 22 },
				{ name: '김형중', age: 24 },
				{ name: '이태선', age: 43 },
				{ name: '이수영', age: 23 },
			];

			this.page.total = 50;
		},
	},
};
</script>
