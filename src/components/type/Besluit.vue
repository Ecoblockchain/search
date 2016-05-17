<template>
	<article>
		<header>
			<h1 class="thing-name">{{name}}</h1>
			<p class="thing-type">{{type}}</p>
		</header>
		<main>
			<p class="thing-description" v-if="description">{{description}}</p>
			<div v-if="thing['lbld:gelet']">
			<h3>Vaststellingen</h3>
				<p v-for="article in thing['lbld:gelet']">Gelet op {{a(article)['dcterms:title']}}</p>
			</div>
			<div v-if="thing['lbld:creates']">
				<div v-for="article in thing['lbld:creates']">
					<h4>{{a(article)['dcterms:title']}}</h4>
					<p v-html="a(article)['schema:description']"></p>
				</div>
			</div>
			<p v-for="(prop, value) in thing" v-if="check(prop)">
				<u>{{prop}}</u>: {{value|json}}
			</p>
		</main>
	</article>
</template>

<script>
import _common from './_common.js'

export default {
	methods: {
		check (prop) {
			return prop[0] !== '@' && prop !== 'schema:name' && prop !== 'schema:description' && prop !== 'dcterms:title' && prop !== 'lbld:creates' && prop !== 'lbld:gelet'
		}
	},
	mixins: [_common]
}
</script>
