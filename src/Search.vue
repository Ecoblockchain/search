<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <h1>Zoek interface</h1>
      </div>
    </div>
    <div class="container">
      <div class="listview">
        <filter :term.sync="term" :facets="facets" :state="filterState"></filter>
        <div class="results">
          <result v-for="result in filtered" :thing="result"></result>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/scss/main.scss'

import Filter from './components/Filter.vue'
import Result from './components/Result.vue'

import Filtering from './mixins/Filtering.js'
import Store from './mixins/Store.js'

function toBounds(bbox) {
  if (bbox && bbox['@value']) {
    let arr = bbox['@value'].split('(')[1].split(',').map(c => parseFloat(c))
    return [arr[0], arr[1], arr[4], arr[5]]
  }
  return typeof bbox === 'object' ? [bbox.lng || bbox.lon, bbox.lat, bbox.lng || bbox.lon, bbox.lat] : bbox.split(',').map(parseFloat)
}
function withinBounds(bbox, area) {
  bbox = toBounds(bbox)
  area = toBounds(area)
  return bbox[0] < area[2] && bbox[2] > area[0] && bbox[1] < area[3] && bbox[3] > area[1]
}
export default {
  data () {
    return {
      term: '',
      limit: 20,
      page: 0
    }
  },
  computed: {
    filtered () {
      var self = this
      var term = this.term.toLowerCase()
      var state = this.filterState;
      return this.results
      // Type filter
      .filter(function(item) {
        var value = item['@type']
        return (value || false) && value === (state.type || 'lbld:Decision')
      })
      // Category filter
      .filter(function(item) {
        var value = item['schema:category'] || item['lbld:bbcCode']
        if (!state.bbc) return true
        return (value || false) && value === state.bbc
      })
      // Search term filter
      .filter(function(item) {
        var value = item.textual
        if (!value) {
          value = item['schema:name'] || item['dcterms:title'] || item['rdfs:label']
          if (!value && item['mandaat:person']) {
            value = self.lookup[item['mandaat:person']['@id']]['schema:name']
          }
          item.textual = value
        }
        if (!term) return true
        return (value || false) && value.toLowerCase().indexOf(term) !== -1
      })
      // Lcation filter
      .filter(function(item) {
        var value = item['dcterms:spatial']
        if (!state.area) return true
        return (value || false) && withinBounds(value, state.area)
      })
      // Limit
      .slice(this.limit * this.page, this.limit * (this.page + 1))
    }
  },
  events: {
    set (prop, value) {
      console.log('set cate', prop, value)
      this.filterState[prop] = value
    }
  },
  mixins: [Store, Filtering],
  components: {
    Filter,
    Result
  }
}
</script>
