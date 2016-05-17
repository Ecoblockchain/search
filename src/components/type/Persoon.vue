<template>
	<article class="person">
		<header>
			<div class="thing-avatar"></div>
			<h1 class="thing-name">{{name}}</h1>
			<p class="thing-type">fractieleider</p>
		</header>
		<main>
			
		</main>
	</article>
</template>

<script>
import _common from './_common.js'

export default {
	mixins: [_common]
}
</script>

<style>
.person {
}
</style>