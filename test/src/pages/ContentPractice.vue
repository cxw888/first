<template>
  <div>
    <div class="top">
        <div class="tag">场景任务</div>
        <div class="title">{{theme}}</div>
        <div class="content">{{ content }}</div>
    </div>
    <div class="two">
        <div class="tag">陪练对象</div>
        <div class="contents">
            <div class="pc"></div>
            <div class="right">
                <div class="titles">
                    <span class="title">{{ names }}</span>
                    <span class="women">{{gender}}</span>
                </div>
                <div class="content">
                   {{ personnality }}
                </div>
            </div>
        </div>

    </div>
    <div class="three">
        <div class="tag">我的角色</div>
        <div class="contents">
            <div class="pc2"></div>
            <div class="titles">
                <span class="title">{{own}}</span>
            </div>
        </div>
    </div>
    <RankingRecords></RankingRecords>
   <div class="bottom" @click="ask(theme,names)"><i class="el-icon-microphone"></i>点击开始练习</div> 
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
import RankingRecords from '@/components/RankingRecords.vue';

export default {
  components: { RankingRecords },
    name:'ContentPractice',
    props:['id','theme','content','names','gender','personnality','own'] ,
    methods: {
        ask(theme,names){
            this.$router.push({
            path:'/startpracticing',
            query:{
            theme:theme,
            names:names
             } })
             const objj={id:nanoid(),names:names,theme:theme,times:'2024-10-13 14:57'}
             this.$store.commit('JIA',objj)
        }
    },
    
}
</script>
<style lang="css" scoped>
 

.top {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 2.56410256vw;
  padding: 2.56410256vw;
  backdrop-filter: blur(4px);
  height: 44.1025641vw;
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
  height: 37.17948718vw;
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
  height: 18.71794872vw;
}
.two .right .titles .women {
  font-size: 3.07692308vw;
}
.contents {
  width: 86.66666667vw;
  height: 18.71794872vw;
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