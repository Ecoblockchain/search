<template>
  <div class="result thing">
    <div :is="type" :thing="thing"></div>
  </div>
</template>

<script>
import Decision from './type/Decision.vue'
import Fractie from './type/Fractie.vue'
import Legislatuur from './type/Legislatuur.vue'
import Mandaat from './type/Mandaat.vue'
import MandaatType from './type/MandaatType.vue'
import Orgaan from './type/Orgaan.vue'
import Persoon from './type/Persoon.vue'
import Thing from './type/Thing.vue'

export default {
  props: ['thing'],
  computed: {
    type () {
      switch(this.thing['@type']) {
        case 'lbld:Decision': return 'Decision'
        case 'schema:Person': return 'Persoon'
        case 'schema:Event': return 'Thing'
        case 'lbld:Fractie': return 'Fractie'
        case 'mandaat:Mandate': return 'Mandaat'
        case 'lbld:Mandaat': return 'Mandaat'
      }
      return 'Thing'
    }
  },
  components: {
    Decision,
    Fractie,
    Legislatuur,
    Mandaat,
    MandaatType,
    Orgaan,
    Persoon,
    Thing
  }
}
</script>