<template>
  <div class="home">
    <div class="data-box">
      <MyBar :data="barData" :options="barOptions"/>
    </div>
    <div class="data-box">
      <MyPie :data="pieData" :options="pieOptions"/>
    </div>
    <div class="data-box">
      <MyLine :data="lineData" :options="lineOptions"/>
    </div>
  </div>
</template>

<script>
import MyBar from '@/components/MyBar.vue';
import MyPie from '@/components/MyPie.vue';
import MyLine from '@/components/MyLine.vue';

export default {
  name: 'Home',
  components: {
    MyBar,
    MyPie,
    MyLine,
  },
  data () {
    return {
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
      barData: {
        labels: ['Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'],
        datasets: [
          {
            label: 'Number of plays',
            backgroundColor: '#0f0',
            data: [40, 30, 10, 5, 3, 19, 4, 3, 6, 31],
          },
        ],
      },
      barOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
              },
            },
          ],
        },
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
 .data-box {
   width: 400px;
   height: 400px;
 }
</style>
