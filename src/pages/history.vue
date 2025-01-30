<template>
  <v-container max-width="1200">
      <ContentOfTheSites :contentOfPage="contentOfPage" />
      <img src="../assets/oldmap.png" alt="Nagykede térképe" />
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
    title: 'Nagykede története',
    subtitle: 'Egyháztörténet',
    content: `A középkorban tiszta katolikus falu a reformáció korában válik unitáriussá. A szintén többségébe unitáriussá lett Kiskedével együtt építettek a két falu közötti Templomdombra templomot. Így a két település egy egyházközséget alkot, amely 1816-ban nyerte el önállóságát Székelyszentmiklóssal szemben.
    Hiteles adatok szerint 1723-ban már létezett a templom, 1900–ban újraépítették fából, egyszerű, sima vonalú új reneszánsz modorban. Kék színben pompázó mennyezete fakazettás. Az 1828-ban vásárolt, kemény cserefából készült haranglábat a templom déli oldalára helyezték.
  Az unitáriusok mellett élő reformátusok az 1800-as évek elején református templomot építettek fából, amit 1942-ben lebontottak. Később a falu közepén emelkedő kistornyos imaházban tartottak istentiszteletet. Az imaház megromlott állapota miatt ma családi háznál gyűlnek össze a hívek ünnepnapokon. A beszolgáló lelkész Jakab Imola Siménfalváról, a kis közösség gondnoka Benedekffy Albert 96 éves egyháztag volt.`
  },
  {
    title: 'Iskolatörténet',
    subtitle: 'XX. Tovább utazás a Nyikó völgyén.',
    content: `Az első elemi iskolát 1820-ban létesítették Kiskedével közösen. Több éven át ebben az iskolában tanított Tiboldi István népköltészeti gyűjtő, író. Évről évre nagy gondot jelent újraindítani az összevont I-IV osztályt, tanulók hiányában.
            Nagykedében külön elemi iskola 1922-ben létesült a református egyház keretében. 1948 után mint állami iskola működött 1970-ig akkor tanulók hiányában megszűnt. Kiskede fogatta az okulni vágyókat.
            A faluban 1975-ig élénk kulturális élet folyt. A faluházat 1923-ban építették, ahol évente színdarabos bálokat, szabadtéri táncmulatságokat – majálist –rendeztek. A faluban volt könyvtár is, sajnos a könyvek legnagyobb része a második világháború alatt elveszett. Az utóbbi években, a nagyfokú elvándorlás miatt gyakorlatilag megszűnt a kulturális élet.
            2017-ben néhány lelkes fiatal újraindította a kulturális életet a faluban. Színdarabos kosaras bált és Falunapot szerveztek. A helyi kultúrotthonban utoljára 1975-ben mutattak be színdarabos előadást.
           Forrás: https://hu.wikipedia.org/wiki/Nagykede`
  },
  {
    title: 'A falu jeles szülöttei',
    subtitle: '',
    content:
      '· Tiboldi István (1793-1880) tanító, népköltészeti gyűjtő, író.'+
       '· Sándor Mózes (1839-1916) középiskolai tanár, tanfelügyelő.'+
       '· Fekete István (1800-as évek) mérnök, barlangász, térkép készítő.'+
       '· Benedekffy Sámuel (1915-?) lelkész, költő, újságíró.'
  }
]);
</script>

<style scoped>

img {
  width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
}

</style>
