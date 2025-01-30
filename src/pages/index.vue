<template>
  <v-container max-width="1200">
    <ContentOfTheSites :contentOfPage="contentOfPage" />
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const props = defineProps({
  title: String,
  subtitle: String,
  content: Array as () => string[],
});

const contentOfPage = reactive([
  {
    title: 'Bevezető',
    subtitle: '',
    content: 'Rugonfalvától északra a Kedei –patak suvadásos völgyfőjében, szélvédett területen fekszik Kiskede ikerfalvaként. Rugonfalva felszegi része felől, a kedei patak völgyébe vezető 38-as községi úton közelíthető meg. Szomszédai: keleten Kiskede, északon Gagy, nyugaton Csekefalva, délen Rugonfalva. Az 500 m hosszú falu Felszegre és Alszegre tagolódik két utcával. A vízhiánnyal küzködő településtől keletre gázszondát mélyítettek az 1980-as évek elején.\n' +
      'Neve régi magyar személynévből keletkezett. Ernst Wagner szerint először 1436-ban, Kedei János tordai főispán nevében fordult elő.' +
      'Forrás: https://hu.wikipedia.org/wiki/Nagykede'
  },
  {
    title: 'Orbán Balázs: A Székelyföld leírása',
    subtitle: 'XX. Tovább utazás a Nyikó völgyén.',
    content: `"...Hogy a Fehér-Nyikó mentének minden falujával ismeretesek legyünk, még be kell tekintenünk a Rugonfalvánál beszakadó Kis-patak völgyébe, hol két egymás meletti völgyfőben fekszik a két Kede, Kis- és Nagy-Kede, bár ketten se igen nagyok, alig számitván 600 lakost. Az unitáriusok szerény kis fatemploma a két falu közötti Templom oldal nevü helyen fekszik magányosan; e templomról példabeszéd is van, mely a gyenge menhelyről mondja, hogy: csak olyan menedék, mint a kedei templom. E példabeszédet pedig ekként hallottam értelmezni, hogy egykor egy kifáradott s a vadászoktól nagyon szorongatott nyul éppen az isteni tisztelet folyama alatt bemenekült e templomba, de itt sem talált biztonságot, mert a hivek ajtót zártak, s az áhitatosságukat zavarót elcsipték. ..."
    Forrás: Orbán Balázs: A Székelyföld leírása, XX. Tovabbo utazás a Nyikó völgyén.`
  },
  {
    title: 'Nagykede leírása',
    subtitle: '',
    content: `Nagykede Székelykeresztúrtól 5 km-re északra, a Kedei-patak völgyfőjében fekvő 18.12 ha területű falu, Siménfalva községhez tartozik.
      Kiskedével együtt a község nyugati részén fekszik, alacsony légnyomású területen, Székelykeresztúr szomszédságában.
      A falu és környékén földgáz található, amelyeket a 1980-as években termeltek ki. A környék éghajlata mérsékelt kontinentális,
      termikus kilengéssel az évszakok között. A falu gazdasági profilját főként állattenyésztés, valamint mezőgazdaság képezi
       saját felhasználásra és nem pedig eladásra.Első bejegyzés a faluról 1436-ban jelenik meg Ernst Wagner írásaiban, amelyek a helység nevét a saját nevéhez kötik, Kedei János,
     valoszínűleg a falu létrehozója vagy első lakosa. 1567-ben a település 5 kaput számol, és 1786-ban 203 lakosa volt, majdnem tízszerese
     a mai lakosoknak-25. A lakosság drasztikus csökkenése az 1975 utáni emigrálások nyomán következett be. Addig Nagykede és Kiskede aktív
     szociokulturális életet élt, ünnepségekkel, bálokkal, illetve színjátékokkal, a település könyvtárral is rendelkezett valamikor.
      Nagykede kis völgyi falu, lineárisan fejlődött a főút mentén, amely átszeli kelet-nyugat irányban. A falu központját középületek
      alkotják: az iskola és a művelődési ház a mellékágak kereszteződésénél találhatóak, míg a templomok, amelyek közül az egyiket nem
      használják, különböző pontokban, a falu nyugati, illetve keleti szélén vannak elhelyezve. Az épületek szalagtelkes, laza sorházas
      formában szerveződnek, jobb, illetve a bal oldalon, az utca tengelyére merőlegesen. Ez az elhelyezés egy rendezett utcát képez,
       ütemezve a kertek, gyümölcsösök és üres telekrészekkel. A csűr átlósan, az utcával párhuzamosan van elhelyezve, elválasztván az
       udvart két részre: hátsó és első. Egyéb háztartási épületek mint például tárolók, és az árnyékszék az udvar hátsó részén található,
        míg a kutak, kemencék és nyári konyhák(sütő) az udvar első részén helyezkednek.
          forras: https://epitettorokseg.ro/nagykede/`

  }
]);
</script>
