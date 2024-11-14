<template>
    <div>
    <HeaderBox :username="totaldata.title"></HeaderBox>
    <RecordColumn :practicetimes="totaldata.userId" :scenariocount="totaldata.id" :totaltime="totaldata.id"></RecordColumn>
    <div class="title">
        选择陪练场景
    </div>
    <TrainList v-for="item in practice" :key="item.id" :item="item" >
    </TrainList>
    <div class="bottoms">已显示全部内容</div>
</div>
</template>

<script>
import HeaderBox from '../components/HeaderBox.vue'
import RecordColumn from '../components/RecordColumn.vue'
import TrainList from '../components/TrainList.vue'

import axios from 'axios';
export default {
    name:'HomeList',
  components: { HeaderBox, RecordColumn, TrainList },

data() {
    return {
        practice:[],
        totaldata:[]
        
    }
},
  created() {
    this.fetchApiData(); 
    this.totaldatas();
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users');
        this.practice = response.data; 
      } catch (err) {
        this.error = 'Failed to fetch data'; 
      } finally {
        this.loading = false; 
      }
    },
    async totaldatas() {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/albums/1');
        this.totaldata = response.data; 
      } catch (err) {
        this.error = 'Failed to fetch data'; 
      } finally {
        this.loading = false; 
      }
    }
  }
}
</script>

<style lang="css">
 .bottoms{
    margin-top: 5vw;
  text-align: center;
 }
 .title {
  margin: 5.12820513vw 2.56410256vw 5.12820513vw;
  color: white;
}
</style>