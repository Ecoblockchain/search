<template>
	<article>
		<header>
			<h1 class="thing-name">{{a(thing['mandaat:person'])['schema:name']}}</h1>
			<p class="thing-type">{{org}}: {{thing['mandaat:mandateType']}} {{start}} {{end}}</p>
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
		},
		org () {
			if (!this.thing['lbld:organization']) {
				return 'Gemeenteraad Vlavirgem'
			}
			if (this.thing['lbld:organization']['@id'] == 'editor:orgaan-gemeenteraad-virgem') {
				return 'Gemeenteraad Virgem'
			}
			if (this.thing['lbld:organization']['@id'] == 'editor:orgaan-gemeenteraad-vlagem') {
				return 'Gemeenteraad Vlagem'
			}
			return 'Gemeenteraad Vlavirgem'
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
