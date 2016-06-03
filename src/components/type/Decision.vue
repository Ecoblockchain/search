<template>
	<article>
		<header >
			<h1 class="thing-name clickable" @click="show.more=!show.more">{{name}}</h1>
			<a :href="thing['@id']" target="_blank" @click.stop></a>
		</header>
		<main v-if="show.more">
			<p class="thing-description" v-if="description">{{description}}</p>
			<div v-if="thing['dcterms:spatial']" style="font-size:14px;margin-top:5px;">
				Toepassingsgebied zie kaart
			</div>
			<div v-if="thing['lbld:legalBackground']">
				<h2 @click="showSub(1)" class="clickable">Juridische gronden ({{thing['lbld:legalBackground'].length}})</h2>
				<div v-if="show.sub==1" v-for="article in thing['lbld:legalBackground']">
					<p>
						<span @click="showArt(article)" class="clickable">{{validRef(article) && 'Gelet op'}} {{art(article)['dcterms:title']}}</span>
						<a v-if="validRef(article)" :href="article['@id']" target="_blank"></a>
					</p>
					<p v-if="show.art==article" class="thing-pre" v-text="art(article)['dcterms:description']"></p>
				</div>
			</div>
			<div v-if="thing['lbld:article']">
				<h2 @click="showSub(2)" class="clickable">Besluit ({{thing['lbld:article'].length}} artikels)</h2>
				<div v-if="show.sub==2" v-for="article in thing['lbld:article']">
					<p @click="showArt(article)">{{art(article)['dcterms:title']}}</p>
					<p v-if="show.art==article" class="thing-pre" v-text="art(article)['dcterms:description']"></p>
				</div>
			</div>
		</main>
	</article>
</template>

<script>
import _common from './_common.js'

export default {
	data () {
		return {
			show: {
				more: false,
				sub: 0,
				art: null
			}
		}
	},
	computed: {
	},
	methods: {
		showSub (s) {
			this.show.sub = this.show.sub === s ? 0 : s
		},
		showArt (a) {
			this.show.art = this.show.art === a ? 0 : a
		},
		validRef (ref) {
			return ref && ref['@id'] && this.$parent.$parent.lookup[ref['@id']]
		},
		art (ref) {
			return this.validRef(ref) || ref
		},
		check (prop) {
			return prop[0] !== '@' && prop !== 'schema:name' && prop !== 'schema:description' && prop !== 'dcterms:title' && prop !== 'lbld:creates' && prop !== 'lbld:gelet'
		}
	},
	mixins: [_common]
}
</script>
