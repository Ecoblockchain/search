
var facets = [{
  title: 'Type',
  prop: 'type',
  options: [{
    key: null,
    value: 'Alle types'
  }, {
    key: 'lbld:Mandaat'
  }, {
    key: 'lbld:MandaatType'
  }, {
    key: 'lbld:Artikel'
  }, {
    key: 'lbld:Besluit'
  }, {
    key: 'schema:Person'
  }, {
    key: 'schema:LocalBusiness'
  }]
}, {
  title: 'Periode',
  prop: 'temporal',
  options: [{
    key: 'Afgelopen 24 uur'
  }, {
    key: 'Afgelopen week'
  }, {
    key: 'Afgelopen maand'
  }, {
    key: 'Afgelopen jaar'
  }, {
    key: 'Leefmilieu'
  }]
}, {
  title: 'Thema',
  prop: 'category',
  options: [{
    key: 'Verkeer'
  }, {
    key: 'Gezondheid'
  }, {
    key: 'Overheid'
  }, {
    key: 'Onderwijs'
  }, {
    key: 'Leefmilieu'
  }]
}]

var results = [{
  '@type': 'rdfs:Class',
  '@id': '_:types/gemeenteraadslid',
  'dcterms:title': 'Gemeenteraadslid',
  'schema:description': 'Een gemeenteraadslid is een gekozen volksvertegenwoordiger binnen een gemeente. Alle gemeenteraadsleden van één gemeente vormen samen de gemeenteraad van de betreffende gemeente. Gemeenteraadsleden kunnen worden ondersteund door burgerraadsleden.'
}, {
  '@type': 'lbld:MandaatType',
  '@id': '_:types/burgemeester',
  'dcterms:title': 'Burgemeester',
  'schema:description': 'Een burgemeester is een bestuursfunctionaris op gemeentelijk niveau.'
}, {
  '@type': 'lbld:MandaatType',
  '@id': '_:types/schepen',
  'dcterms:title': 'Schepen',
  'schema:description': 'Een schepen is een openbaar bestuurder op plaatselijk niveau. De term is in gebruik voor bestuurders binnen een Belgische gemeente of Luxemburgse gemeente.'
}, {
  '@type': 'lbld:MandaatType',
  '@id': '_:types/districtsraadslid',
  'dcterms:title': 'Districtsraadslid',
  'schema:description': 'De districtsraad is het volksvertegenwoordigend orgaan van de districten (deelgemeenten). Antwerpen is de enige Belgische gemeente waarvan de deelgemeenten een bestuurslaag vormen. Vóór 2000 werden de districtsraden gekozen door de leden van de Antwerpse gemeenteraad, op voordracht van de politieke partijen. Sinds 2000 worden de leden van de districtsraad om de 6 jaar rechtstreeks door de burgers verkozen. De verkiezingen vonden plaats op 8 oktober 2000, 8 oktober 2006 en 14 oktober 2012.'
}, {
  '@type': 'lbld:MandaatType',
  '@id': '_:types/ocmw-voorzitter',
  'dcterms:title': 'OCMW-voorzitter',
  'schema:description': 'Als voorzitter krijgt u van het OCMW een wedde, inclusief vakantiegeld en eindejaarspremie (maar geen maaltijdcheques noch hospitalisatieverzekering, aangezien sectorale akkoorden niet van toepassing zijn op u). Deze wedde is gelijk aan die van schepen binnen dezelfde gemeente en hangt af van de grootte van die gemeente. U geniet overigens dezelfde socialezekerheidsregeling als de schepenen.'
}, {
  '@type': 'schema:Person',
  '@id': '_:petra',
  'schema:name': 'Petra Verhenne'
}, {
  '@type': 'schema:Person',
  '@id': '_:bartcaron',
  'schema:name': 'Bart Caron'
}, {
  '@type': 'schema:Person',
  '@id': '_:mattias',
  'schema:name': 'Mattias Vandemaele'
}, {
  '@type': 'schema:LocalBusiness',
  '@id': '_:goedkope-woning',
  'schema:name': 'CVBA Goedkope Woning'
}, {
  '@type': 'lbld:Zitting',
  '@id': '_:2014-06-07-raadscommissie1',
  'schema:name': 'Gemeenteraad Kortrijk 7 juli 2014',
  'schema:startDate': '2014-06-07',
  'lbld:besluit': {
    '@id': '_:2014_GR_00163'
  }
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:1988-06-24-gemeentewet',
  'dcterms:title': 'de nieuwe gemeentewet van 24 juni 1988',
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:2005-07-15-gemeentedecreet',
  'dcterms:title': 'het gemeentedecreet van 15 juli 2005',
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:1968-03-16-politiewet',
  'dcterms:title': 'de wet betreffende politie over het wegverkeer, zie koninklijk besluit van 16 maart 1968',
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:1976-10-11-ministrieelbesluit',
  'dcterms:title': 'het ministrieel besluit van 11 oktober 1976',
}, {
  '@type': 'lbld:Besluit',
  '@id': '_:2014_GR_00163',
  'dcterms:title': 'Eedaflegging en installatie gemeenteraadslid',
  'schema:author': 'Petra Verhenne',
  'schema:description': 'Op 15 juni 2014 liet de heer Bart Caron weten dat hij ontslag neemt als gemeenteraadslid. In vervanging van de heer Bart Caron dient een opvolger geïnstalleerd te worden. De heer Mattias Vandemaele, eerste opvolger op de lijst Groen, is bereid het mandaat van gemeenteraadslid op te nemen in opvolging van de heer Bart Caron.',
  'lbld:context': 'Op 15 juni 2014 liet de heer Bart Caron weten dat hij ontslag neemt als gemeenteraadslid. De gemeenteraad nam daarvan akte in huidige zitting',
  'lbld:argumentatie': 'Volgens het proces-verbaal... Hier komt een copy/paste van elders: Op 15 juni 2014 liet de heer Bart Caron weten dat hij ontslag neemt als gemeenteraadslid.\n\n In vervanging van de heer Bart Caron dient een opvolger geïnstalleerd te worden. De heer Mattias Vandemaele, eerste opvolger op de lijst Groen, is bereid het mandaat van gemeenteraadslid op te nemen in opvolging van de heer Bart Caron.Op 15 juni 2014 liet de heer Bart Caron weten dat hij ontslag neemt als gemeenteraadslid. In vervanging van de heer Bart Caron dient een opvolger geïnstalleerd te worden. De heer Mattias Vandemaele, eerste opvolger op de lijst Groen, is bereid het mandaat van gemeenteraadslid op te nemen in opvolging van de heer Bart Caron.\n\nOp 15 juni 2014 liet de heer Bart Caron weten dat hij ontslag neemt als gemeenteraadslid. In vervanging van de heer Bart Caron dient een opvolger geïnstalleerd te worden. De heer Mattias Vandemaele, eerste opvolger op de lijst Groen, is bereid het mandaat van gemeenteraadslid op te nemen in opvolging van de heer Bart Caron.',
  'dcterms:title': 'Eedaflegging en installatie gemeenteraadslid',
  'lbld:gelet': [{
    '@id': '_:1968-03-16-politiewet'
  }, {
    '@id': '_:2005-07-15-gemeentedecreet'
  }, {
    '@id': '_:1988-06-24-gemeentewet'
  }, {
    '@id': '_:1976-10-11-ministrieelbesluit'
  }],
  'lbld:creates': [{
    '@id': '_:artikel/1'
  }, {
    '@id': '_:artikel/2'
  }, {
    '@id': '_:artikel/3'
  }, {
    '@id': '_:artikel/4'
  }]
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:artikel/2',
  'dcterms:title': 'Artikel 2. inzake voorrangsregelingen',
  'schema:description': 'Het verkeer in de <a href="#">Brun Cornet<\/a> dient voorrang te verlenen aan het verkeer in de <a href="#">Grote Weg<\/a>.\nDeze maatregel wordt ter kennis gebracht door middel van het <a href="#">verkeersbord B5<\/a> aangevuld met markeringen overeenkomstig artikel 76 van het <a href="#">KB van 1/12/1975<\/a>',
  'dcterms:spatial': {
    'lat': 50.7682967,
    'lng': 3.181583
  }
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:artikel/1',
  'dcterms:title': 'Artikel 1. opheffing vorige reglementen',
  'schema:description': 'Alle beplaing in vorige reglementen met betrekking tot hogervermelde straat worden opgeheven',
  'dcterms:spatial': {
    'lat': 50.7682967,
    'lng': 3.181583
  }
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:artikel/3',
  'dcterms:title': 'Artikel 3. Dit is ook een artikel',
  'dcterms:spatial': {
    'lat': 51,
    'lng': 5
  }
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:artikel/4',
  'dcterms:title': 'Artikel 4. Dit is ook een artikel',
  'dcterms:spatial': {
    'lat': 50.5,
    'lng': 4.6
  }
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:artikel-5',
  'dcterms:title': 'Artikel 5. Dit is ook een artikel',
  'dcterms:spatial': {
    'lat': 51.2,
    'lng': 4.2
  }
}, {
  '@type': 'lbld:Artikel',
  'dcterms:title': 'Artikel 6. Dit is ook een artikel',
  'dcterms:spatial': {
    'lat': 51,
    'lng': 3.72
  }
}, {
  '@type': 'lbld:Artikel',
  'dcterms:title': 'Artikel 7. Dit is ook een artikel',
  'dcterms:spatial': {
    'lat': 50.98,
    'lng': 3.7
  }
}, {
  '@type': 'lbld:Artikel',
  'dcterms:title': 'Artikel 8. Dit is ook een artikel',
  'dcterms:spatial': {
    'lat': 51.05,
    'lng': 3.8
  }
}, {
  '@type': 'lbld:Artikel',
  'dcterms:title': 'Artikel 9. LBLOD ',
  'schema:description': 'Overwegende het LBLOD-onderzoek wordt een vervolgtraject gepland.',
  'dcterms:spatial': {
    'lat': 51.0369,
    'lng': 3.708
  }
}, {
  '@type': 'lbld:Artikel',
  '@id': '_:artikel-mandaat',
  'dcterms:title': 'Artikel 3. mandaat aanstelling',
  'lbld:creates': {
    '@id': '_:mandaat/12'
  }
}, {
  '@type': 'lbld:Mandaat',
  '@id': '_:mandaat/12',
  'dcterms:title': 'Eedaflegging en installatie gemeenteraadslid',
  'lbld:mandaatType': {
    '@id': '_:mattias'
  },
  'lbld:mandaatType': {
    '@id': '_:types/gemeenteraadslid'
  },
  'lbld:bevoegdheid': 'Leefmilieu',
  'lbld:beslotenIn': {
    '@id': '_:8500/2014_GR_00163'
  }
}]

// Generate missing ids
for (var i = 0; i < results.length; i++) {
  if (!results[i]['@id']) {
  	results[i]['@id'] = '_:' + i
  }
}

// Create lookup table
var lookup = {}
for (var i = 0; i < results.length; i++) {
  lookup[results[i]['@id']] = results[i]
}

// Add stuff to facets
for (var i = 0; i < facets.length; i++) {
  facets[i].value = null
}

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
	}
}
