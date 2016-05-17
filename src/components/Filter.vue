<template>
  <div class="filter">
    <div class="facet query">
      <h4></h4>
      <input type="text" v-model="term" class="inp inp-query" placeholder="Zoeken naar besluiten...">
    </div>
    <div class="facet daterange" v-if="show.daterange">
      <h4>Tussen deze datums</h4>
      <input type="date" class="inp inp-daterange">
      <input type="date" class="inp inp-daterange">
    </div>
    <facet v-for="facet in facets" :facet="facet"></facet>
    <div id="map" style="height:200px"></div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'

import Facet from './Facet.vue'
import L from 'leaflet'
import draw from 'leaflet-draw'

export default {
  props: ['term', 'facets'],
  data () {
    return {
      show: {
        daterange: false
      }
    }
  },
  attached () {
    var self = this
    var map = L.map('map').setView([50.6, 4.6], 6);
    var extentLayer
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
    });

    // When user finishes drawing the box, record it and add it to the map
    map.on('draw:created', function (e) {
      if (extentLayer) {
        map.removeLayer(extentLayer);
      }
      extentLayer = e.layer;
      map.addLayer(extentLayer);
      // $('.apply', buttons).removeClass('disabled').addClass('btn-primary');
      var spatial = extentLayer.getBounds().toBBoxString()
      self.$dispatch('set', 'spatial', spatial)

      // Reset map
      self.$el.classList.remove('map-expanded');
      L.Util.requestAnimFrame(map.invalidateSize, map, false, map._container);
    });
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