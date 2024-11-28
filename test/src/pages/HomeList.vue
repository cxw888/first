<template>
    <div>
    <HeaderBox></HeaderBox>
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
<!--html格式混乱，需要学习一下eslint相关知识，目标在项目中用上eslint，即在编辑器里有提示代码格式化入口，并且点击可以自动格化式-->
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
import axios from 'axios';
import HeaderBox from '../components/HeaderBox.vue';
import RecordColumn from '../components/RecordColumn.vue';
import TrainList from '../components/TrainList.vue';

export default {
  name: 'HomeList',
  components: { HeaderBox, RecordColumn, TrainList },

  data() {
    return {
      practice: [],
      totaldata: [],

    };
  },
  created() {
    this.fetchApiData();
    this.totaldatas();
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/392da74a-f951-4db2-bfe3-7ddff91b7888');
        this.practice = response.data.scene;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    async totaldatas() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/4632d2c9-96f2-4331-93c6-3603938dde60');
        this.totaldata = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
  },
};
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
