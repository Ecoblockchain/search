export default {
	props: ['thing'],
	computed: {
		name () {
			return this.thing && (this.thing['schema:name'] || this.thing['dcterms:title'] || this.thing['rdfs:label']) || 'Without name...'
		},
		type () {
			return this.thing && this.thing['@type'] || 'weird'
		},
		description () {
			return this.thing && (this.thing['schema:description'] || this.thing['dcterms:description'])
		}
	},
	methods: {
		a (ref) {
			return (ref && ref['@id'] && this.$parent.$parent.lookup[ref['@id']]) || {'dcterms:title':'nope'}
		}
	}
}
