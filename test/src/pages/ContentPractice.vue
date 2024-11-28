<template>
  <div>
    <div class="top">
        <div class="tag">场景任务</div>
        <div class="title">{{only.title}}</div>
        <div class="content">{{ only.desc }}</div>
    </div>
    <div class="two">
        <div class="tag">陪练对象</div>
        <div class="contents">
            <div class="pc"></div>
            <div class="right">
                <div class="titles">
                    <span class="title">{{ only.manager }}</span>
                    <span class="women">{{only.gender}}</span>
                </div>
                <div class="content">
                   {{ only.content }}
                </div>
            </div>
        </div>

    </div>
    <div class="three">
        <div class="tag">我的角色</div>
        <div class="contents">
            <div class="pc2"></div>
            <div class="titles">
                <span class="title">{{only.name}}</span>
            </div>
        </div>
    </div>
    <RecordColumn :datas="ranking">
      <template slot="center">
        <div class="get">
            <div class="tag">练习记录</div>
            <i class="el-icon-arrow-righ"></i>
        </div>
      </template>
    </RecordColumn>
   <div class="bottom" @click="ask(only)"><i class="el-icon-microphone"></i>点击开始练习</div>
  </div>
</template>

<script>
/**
 * pj：这里从列表页进到详情页的传参设计不对，一两句讲不清，下次面授课讲
 */
 import { mapState } from 'vuex';
import axios from 'axios';
import RecordColumn from '../components/RecordColumn.vue';

export default {
  components: { RecordColumn },
  name: 'ContentPractice',
  data() {
    return {
      ranking: [],
      clickedDate: ''
    };
  },
  created() {
    this.rankings();
  },
  computed: {
    ...mapState(['only']),
  },
  methods: {
    async rankings() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/07ea617c-2444-49e0-b764-f5bbc30c1903');
        this.ranking = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    ask(only) {
      const today = new Date();
            const nowday= today.getFullYear() + '-' +
                                  String(today.getMonth() + 1).padStart(2, '0') + '-' +
                                  String(today.getDate()).padStart(2, '0');
                                  this.clickedDate = 'You clicked on: ' + nowday;
      const objj = {
        ...only, 
        times:nowday,
      };
      this.$store.commit('JIA', objj);
      this.$store.commit('CHANGE',only);
      this.$router.push({
        path: '/startpracticing',
      });
      
    },
  },

};
</script>
<style lang="css" scoped >

 .get {
  display: flex;
  height: 8vw;
  justify-content: space-between;
}
.top {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 2.56410256vw;
  padding: 2.56410256vw;
  backdrop-filter: blur(4px);
  border-radius: 3.84615385vw;
}
.tag {
  width: 14.35897436vw;
  height: 5.12820513vw;
  font-size: 3.07692308vw;
  line-height: 5.12820513vw;
  color: white;
  text-align: center;
  border-radius: 1.02564103vw;
  background: linear-gradient(237deg, #5c67ff 17.4%, #e270ff 87.02%), #707aff;
  margin-bottom: 5.12820513vw;
}
.title {
  font-size: 4.61538462vw;
  color: white;
  margin: 5.12820513vw 0;
  margin-right: 2.56410256vw;
}
.content {
  color: #fff;
  font-size: 3.58974359vw;
  opacity: 0.7;
  margin-top: 3.84615385vw;
}
.two {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 2.56410256vw;
  padding: 2.56410256vw;
  backdrop-filter: blur(4px);
  /* height: 37.17948718vw; */
  border-radius: 3.84615385vw;
}
.two .pc {
  width: 12.30769231vw;
  height: 12.30769231vw;
  background-size: cover;
  background: url(../assets/cover.aa799c19.png);
  border-radius: 51.28205128vw;
  background-size: 100% 100%;
  margin-right: 2.56410256vw;
}
.two .right {
  width: 71.79487179vw;
}
.two .right .titles .women {
  font-size: 3.07692308vw;
}
.contents {
  width: 86.66666667vw;
  /* height: 14.71794872vw; */
  display: flex;
  justify-content: start;
}
.three {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 2.56410256vw;
  padding: 2.56410256vw;
  backdrop-filter: blur(4px);
  height: 31.28205128vw;
  border-radius: 3.84615385vw;
}
.three .pc2 {
  width: 12.30769231vw;
  height: 12.30769231vw;
  background-size: cover;
  background: url(../assets/avatar-default.png);
  border-radius: 51.28205128vw;
  background-size: 100% 100%;
  margin-right: 2.56410256vw;
}
.three .titles {
  margin-bottom: 5.12820513vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
