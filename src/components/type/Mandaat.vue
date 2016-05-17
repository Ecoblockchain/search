<template>
	<article>
		<header>
			<h1 class="thing-name">{{name}}</h1>
			<p class="thing-type">{{type}}</p>
		</header>
		<main>
			<p class="thing-description" v-if="description">{{description}}</p>
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
			return prop[0] !== '@' && prop !== 'schema:name' && prop !== 'schema:description' && prop !== 'dcterms:title'
		}
	},
	mixins: [_common]
}
</script>
