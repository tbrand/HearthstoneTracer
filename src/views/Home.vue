<template>
  <div class="home">
    <div class="title">
      Big Demon Hunter
    </div>
    <div class="win-ratio-wrap">
      <WinRatio v-for="hero in heroes" :hero="hero" :numOfWinLoose="numOfWinLoose(hero.id)"/>
    </div>

    <NumOfPlays class="num-of-plays" :num-of-plays="numOfPlays"/>
    <!--
    <div class="data-box">
      <MyLine :data="lineData" :options="lineOptions"/>
    </div>
    -->
  </div>
</template>

<script>
import NumOfPlays from '@/components/NumOfPlays.vue';
import WinRatio from '@/components/WinRatio.vue';
import Heroes from '@/heroes';
import { extractDeck, countPlays, countWinLoose } from '@/analyzer';
import DummyData from '@/dummyData';

const dummyDeckId = 'yyy';

export default {
  name: 'Home',
  components: {
    NumOfPlays,
    WinRatio,
  },
  computed: {
    myDeckData: function () {
      return extractDeck(DummyData, dummyDeckId);
    },
    numOfPlays: function () {
      return Heroes.map(h => countPlays(this.myDeckData, h.id));
    },
  },
  methods: {
    numOfWinLoose: function (heroId) {
      return countWinLoose(this.myDeckData, heroId);
    },
  },
  data () {
    return {
      heroes: Heroes,
      winRatioHero: Heroes[0],
      pieData: {
        labels: ['Win', 'Loose'],
        datasets: [
          {
            label: 'Druid',
            backgroundColor: ['#0f0', '#f0f'],
            data: [40, 60],
          },
        ],
      },
      pieOptions: {
      },
      lineData: {
        labels: ['Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Paladin', 'Priest'],
        datasets: [
          {
            label: 'Play history',
            data: [1, 2, 1, 0, -1, 1],
            fill: false,
            lineTension: 0,
            pointBorderColor: ['#f00', '#0f0', '#f00', '#0f0', '#f00', '#0f0'],
            pointBackgroundColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            pointBorderWidth: [2, 2, 2, 2, 2, 2],
            pointRadius: [4, 4, 4, 4, 4, 4],
            borderColor: '#3b3b3b',
          },
        ],        
      },
      lineOptions: {
      },
    };
  },
}
</script>

<style lang="scss" scoped>
 .win-ratio-wrap {
   width: 100%;
   height: auto;

   display: flex;
   flex-direction: row;
 }

 .num-of-plays {
   width: 800px;
   height: 200px;
 }

 .data-box {
   width: 400px;
   height: 400px;
 }
</style>
