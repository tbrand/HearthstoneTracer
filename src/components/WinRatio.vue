<template>
  <div class="win-ratio-box">
    <span class="name">{{ hero.name }}</span>
    <div class="win-ratio-abst">
      <img :src="hero.icon"/><span>{{ winRatioComputed }}%</span>
    </div>
    <MyPie class="win-ratio-graph" :data="data" :options="options"/>
  </div>
</template>

<script>
import MyPie from '@/components/MyPie.vue';
import Heroes from '@/heroes';
import { winRatio } from '@/analyzer';

export default {
  components: {
    MyPie,
  },
  props: ['hero', 'numOfWinLoose'],
  computed: {
    winRatioComputed: function () {
      return winRatio(this.numOfWinLoose[0], this.numOfWinLoose[1]);
    },
  },
  data () {
    return {
      data: {
        labels: ['Win', 'Loose'],
        datasets: [
          {
            label: this.hero.name,
            backgroundColor: ['#0f0', '#f0f'],
            data: [this.numOfWinLoose[0], this.numOfWinLoose[1]],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
 .win-ratio-box {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 1px solid #3b3b3b;

   .name {
     font-size: 18px;
     font-weight: bold;
   }

   .win-ratio-abst {
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;

     img {
       width: 60px;
       height: 60px;
       margin-right: 10px;
     }

     span {
       font-size: 36px;
       font-weight: bold;
     }
   }

   .win-ratio-graph {
     width: 180px;
     height: 180px;
   }
 }
</style>
