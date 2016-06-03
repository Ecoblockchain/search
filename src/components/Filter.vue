<template>
  <div class="filter">
    <div class="facet query">
      <input type="text" v-model="term" class="inp inp-query" placeholder="Zoeken naar besluiten...">
    </div>
    <div class="facet daterange" v-if="show.daterange">
      <h4>Tussen deze datums</h4>
      <input type="date" class="inp inp-daterange">
      <input type="date" class="inp inp-daterange">
    </div>
    <facet v-for="facet in facets" :facet="facet"></facet>
    <div class="facet">
      <h4>Gebied</h4>
      <div id="map" style="height:200px"></div>
      <a href="#" v-if="state.area" @click.prevent="clearArea">Alle gebieden</a>
    </div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'

import Facet from './Facet.vue'
import L from 'leaflet'
import draw from 'leaflet-draw'

var map, extentLayer, markers

export default {
  props: ['term', 'facets', 'state'],
  data () {
    return {
      show: {
        daterange: false
      }
    }
  },
  computed: {
    features () {
      return this.$parent.results.filter(r => r['dcterms:spatial'])
    }
  },
  methods: {
    clearArea () {
      this.state.area = null
      map.removeLayer(extentLayer)
      extentLayer = null
    }
  },
  attached () {
    var self = this
    map = L.map('map').setView([50.6, 4.6], 6);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);

    // Initialize the draw control
    map.addControl(new L.Control.Draw({
      position: 'topright',
      draw: {
        polyline: false, polygon: false,
        circle: false, marker: false,
        rectangle: {
          title: 'Draw rectangle'
        }
      }
    }));

    this.$el.querySelector('.leaflet-draw-draw-rectangle').addEventListener('click', function(e) {
      self.$el.classList.add('map-expanded');
      L.Util.requestAnimFrame(map.invalidateSize, map, false, map._container);
      if (!extentLayer) {
        setTimeout(() => map.fitBounds(markers.getBounds()), 100)
      }
    });
    this.$el.querySelector('.leaflet-draw-draw-rectangle').addEventListener('dblclick', function(e) {
      e.stopPropagation()
      return false
    });

    // When user finishes drawing the box, record it and add it to the map
    map.on('draw:created', function (e) {
      if (extentLayer) {
        map.removeLayer(extentLayer);
      }
      extentLayer = e.layer;
      map.addLayer(extentLayer);
      var spatial = extentLayer.getBounds().toBBoxString()
      self.$dispatch('set', 'area', spatial)

      // Reset map
      self.$el.classList.remove('map-expanded');
      L.Util.requestAnimFrame(map.invalidateSize, map, false, map._container);
      setTimeout(() => map.fitBounds(extentLayer.getBounds()), 300)
    });
  },
  watch: {
    features (features) {
      if (!map || !features) {
        return
      }
      if (markers) {
        map.removeLayer(markers);
      }

      markers = new L.FeatureGroup();
      for (var i = 0; i < features.length; i++) {
        var a = features[i];
        var geo = typeof a['dcterms:spatial'] === 'object' ? a['dcterms:spatial']['@value'] : a['dcterms:spatial']
        if (geo.indexOf('POLYGON') === -1) {
          var circle = new L.CircleMarker([geo.lat, geo.lng], 10, {
              color: 'blue',
              fillColor: '#bbf',
              fillOpacity: 0.5
          }).addTo(markers);
        } else {
          let arr = geo.split('(')[1].split(',').map(c => parseFloat(c))
                    var bounds = [[arr[1], arr[0]], [arr[5], arr[4]]];
          var circle = new L.CircleMarker([(arr[1]+arr[5])/2, (arr[0]+arr[4])/2], 10, {
              color: 'blue',
              fillColor: 'blue',
              fillOpacity: 0.3
          }).addTo(markers);
          L.rectangle(bounds, {color: 'blue', weight: 1}).addTo(markers);
        }
      }

      map.addLayer(markers);
    }
  },
  components: {
    Facet
  }
}
</script>

<style>
.map-expanded #map {
  position: fixed!important;
  z-index: 10;
  top: 2rem;
  left: 2rem;
  bottom: 2rem;
  right: 2rem;
  height: auto!important;
}
</style>