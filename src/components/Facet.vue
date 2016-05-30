<template>
  <div class="facet">
    <h4 class="facet-title">{{facet.title}}</h4>
    <select v-if="facet.type=='select'" @change="selected">
      <option v-for="opt in facet.options" v-text="opt.value || opt.key"></option>
    </select>
    <div class="facet-options" v-else>
      <div class="facet-option" :class="{active:facet.value==opt.key}" v-for="opt in facet.options" @click="choose(opt.key)">{{ opt.value || opt.key}}</div>
    </div>
    <a v-if="facet.prop=='temporal'" href="#" @click.prevent style="display:none">
      Aangepaste periode...
    </a>
  </div>
</template>

<script>
export default {
  props: ['facet'],
  methods: {
    selected (evt) {
      this.$dispatch('set', this.facet.prop, evt.target.value)
    },
    choose (value) {
      this.facet.value = this.facet.value == value ? null : value
      this.$dispatch('set', this.facet.prop, this.facet.value)
    }
  }
}
</script>

<style lang="sass">
.facet {
	h4 {
		margin-bottom: 0;
	}
}
</style>