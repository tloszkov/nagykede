<template>
  <ContentOfTheSites :contentOfPage="contentOfPage" />
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
      'Neve régi magyar személynévből keletkezett. Ernst Wagner szerint először 1436-ban, Kedei János tordai főispán nevében fordult elő.\n' +
      'Forrás: https://hu.wikipedia.org/wiki/Nagykede\n'
  },
  {
    title: 'Orbán Balázs: A Székelyföld leírása',
    subtitle: 'XX. Tovább utazás a Nyikó völgyén.',
    content: `"...Hogy a Fehér-Nyikó mentének minden falujával ismeretesek legyünk, még be kell tekintenünk a Rugonfalvánál beszakadó Kis-patak völgyébe, hol két egymás meletti völgyfőben fekszik a két Kede, Kis- és Nagy-Kede, bár ketten se igen nagyok, alig számitván 600 lakost. Az unitáriusok szerény kis fatemploma a két falu közötti Templom oldal nevü helyen fekszik magányosan; e templomról példabeszéd is van, mely a gyenge menhelyről mondja, hogy: csak olyan menedék, mint a kedei templom. E példabeszédet pedig ekként hallottam értelmezni, hogy egykor egy kifáradott s a vadászoktól nagyon szorongatott nyul éppen az isteni tisztelet folyama alatt bemenekült e templomba, de itt sem talált biztonságot, mert a hivek ajtót zártak, s az áhitatosságukat zavarót elcsipték. ..."
    Forrás: Orbán Balázs: A Székelyföld leírása, XX. Tovabbo utazás a Nyikó völgyén.`
  }
]);
</script>
