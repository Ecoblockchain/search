<template>
	<article>
		<header>
			<h1 class="thing-name">{{a(thing['mandaat:person'])['schema:name']}}</h1>
			<p class="thing-type">{{thing['mandaat:mandateType']}} {{start}} {{end}}</p>
		</header>
	</article>
</template>

<script>
import _common from './_common.js'

export default {
	computed: {
		start () {
			if (!this.thing || !this.thing['schema:startDate']) {
				return
			}
			var d = (this.thing['schema:startDate']['@value'] || this.$parent.$parent.lookup[this.thing['schema:startDate']['@id']]['@value'])
			return d ? 'vanaf ' + d : null
		},
		end () {
			if (!this.thing || !this.thing['schema:endDate']) {
				return
			}
			return 'tot ' + this.thing['schema:endDate']['@value']
		}
	},
	methods: {
		check (prop) {
			return prop[0] !== '@' && prop !== 'schema:name' && prop !== 'schema:description' && prop !== 'dcterms:title'
		}
	},
	mixins: [_common]
}
</script>
