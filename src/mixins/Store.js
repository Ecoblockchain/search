import jsonld from 'jsonld'

var facets = [{
  title: 'Periode',
  prop: 'temporal',
  options: [{
    key: 3600 * 24,
    value: 'Afgelopen 24 uur'
  }, {
    key: 3600 * 24 * 7,
    value: 'Afgelopen week'
  }, {
    key: 3600 * 24 * 31,
    value: 'Afgelopen maand'
  }, {
    key: 3600 * 24 * 365,
    value: 'Afgelopen jaar'
  }]
}, {
  title: 'Beleidsveld',
  prop: 'bbc',
  options: [
    {key: 'BV00', value: '00 Algemene financiering'},
    {key: 'BV01', value: '01 Algemeen bestuur'},
    {key: 'BV02', value: '02 Zich verplaatsen en mobiliteit'},
    {key: 'BV03', value: '03 Natuur en milieubeheer'},
    {key: 'BV04', value: '04 Veiligheidszorg'},
    {key: 'BV05', value: '05 Ondernemen en werken'},
    {key: 'BV06', value: '06 Wonen en ruimtelijke ordening'},
    {key: 'BV07', value: '07 Cultuur en vrije tijd'},
    {key: 'BV08', value: '08 Leren en onderwijs'},
    {key: 'BV09', value: '09 Zorg en opvang'}
  ]
}]

var context = {
  "hydra": "http://www.w3.org/ns/hydra/core#",
  "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  "foaf": "http://xmlns.com/foaf/0.1/",
  "void": "http://rdfs.org/ns/void#",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "skos": "http://www.w3.org/2004/02/skos/core#",
  "xs": "http://www.w3.org/2001/XMLSchema#",
  "schema": "http://schema.org/",
  "dcterms": "http://purl.org/dc/terms/",
  lbld: 'http://decisions.data.vlaanderen.be/ns#',
  mandaat: 'http://mandates.data.vlaanderen.be/ns#'
}

// Add stuff to facets
for (var i = 0; i < facets.length; i++) {
  facets[i].value = null
}

// Create a reference here and use it in this.load()
const results = []
const lookup = {}

export default {
  data() {
    return {
      facets: facets,
      results: results,
      lookup: lookup
    }
  },
  computed: {
    features () {
      return this.results.filter(r => r['dcterms:spatial'])
    }
  },
  methods: {
    load (url) {
      return this.$http.get(url).then(function ({data}) {
        if (!data || !data['@graph']) {
          throw 'This resource is not a graph'
        }

        // Generate missing ids
        for (var i = 0; i < results.length; i++) {
          if (!results[i]['@id']) {
            results[i]['@id'] = '_:' + i
          }
        }

        // Set context
        jsonld.compact(data, context, function(err, compacted) {
          for (var i = compacted['@graph'].length - 1; i >= 0; i--) {
            results.push(compacted['@graph'][i])
            lookup[compacted['@graph'][i]['@id']] = compacted['@graph'][i]
          }
          console.log('got', results.length, 'fragments')
        })
      })
    }
  },
  ready () {
    this.load('./assets/gemeentedecreet.json')
    this.load('http://linkeddatatestagiv.cloudapp.net/poc/decisions.jsonld').catch(function () {
      this.load('./assets/example.json')
    })
  }
}
