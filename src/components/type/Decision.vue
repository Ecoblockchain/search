<template>
	<article>
		<header>
			<h1 class="thing-name">{{name}}</h1>
		</header>
		<main>
			<p class="thing-description" v-if="description">{{description}}</p>
			<div v-if="thing['dcterms:temporal']">
			 temporal {{thing['dcterms:temporal']}}
			</div>
			<div v-if="thing['dcterms:spatial']">
			 spatial {{thing['dcterms:spatial']}}
			</div>
			<div v-if="thing['lbld:legalBackground']">
				<h2>Juridische gronden</h2>
				<div v-for="article in thing['lbld:legalBackground']">
					<h4>{{a(article)['dcterms:title']}}</h4>
					<p v-html="a(article)['dcterms:description']"></p>
				</div>
			</div>
			<div v-if="thing['lbld:article']">
				<h2>Besluit</h2>
				<div v-for="article in thing['lbld:article']">
					<h4>{{a(article)['dcterms:title']}}</h4>
					<p v-html="a(article)['dcterms:description']"></p>
				</div>
			</div>
		</main>
	</article>
</template>

<script>
import _common from './_common.js'

export default {
	computed: {

	},
	methods: {
		check (prop) {
			return prop[0] !== '@' && prop !== 'schema:name' && prop !== 'schema:description' && prop !== 'dcterms:title' && prop !== 'lbld:creates' && prop !== 'lbld:gelet'
		}
	},
	mixins: [_common]
}
</script>
