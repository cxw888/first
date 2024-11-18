<template>
    <div>
    <HeaderBox :username="totaldata.title"></HeaderBox>
    <RecordColumn :datas="totaldata" customClass="gradient-background" >
    <template slot="center">
     <div class="tge">
    <div class="leftt">
      <i class="el-icon-s-fold"></i>
      <span>成长记录</span>
    </div>
  <router-link class="rightt" to="/allrecord">
    <span>所有练习记录</span>
    <i class="el-icon-edit"></i>
  </router-link>
</div>
</template>
    </RecordColumn>
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
        const response = await axios.get('http://jsonplaceholder.typicode.com/comments?postId=1');
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

<style lang="css" >
.gradient-background{
  background: linear-gradient(48deg, #e270ff 0%, #5b66ff 44%, #10de8b 92%);

}
 .bottoms{
    margin-top: 5vw;
  text-align: center;
 }
 .title {
  margin: 5.12820513vw 2.56410256vw 5.12820513vw;
  color: white;
}
</style>