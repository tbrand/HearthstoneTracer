<template>
  <MyBar :data="data" :options="options"/>
</template>

<script>
import MyBar from '@/components/MyBar.vue';
import Heroes from '@/heroes';

export default {
  components: {
    MyBar,
  },
  props: ['numOfPlays'],
  data () {
    return {
      data: {
        labels: Heroes.map(h => h.name),
        datasets: [
          {
            label: 'Number of plays',
            backgroundColor: '#0f0',
            data: this.numOfPlays,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
    };
  },
}
</script>
