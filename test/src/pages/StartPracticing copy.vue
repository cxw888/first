<template>
  <div>
    <div class="header">
        <div class="title">
            
            <div class="tag">
                任务场景
            </div>
            <template>
                <div @click="stop"><el-button size="mini" round icon="el-icon-switch-button">结束</el-button></div>
            </template>
        </div>
        
        <div class="single-line">{{theme}}</div>
    </div>
    <div class="chat-list">
        <div class="pc"></div>
        <div class="content">
            <div class="name">
                {{names}}
            </div>
            <div class="content-audio-wrapper">
                <img src="../assets/wifi-blue.7f24edee.gif" alt="">
                <span>4"</span>
            </div>
            <div class="content-text">
                你们保险公司又想坑我钱？我已经买过保险了！
            </div>
        </div>
    </div>
    <!--pj：下一步把录音及录音完成后在对话列表中显示录音内容及点播可播放自己的录音实现一下（不需要录音转文本，内需要展示录音和点击可播放，这个不需要接口的，纯前端可实现）-->
   <div class="bottom" @click="begins"  v-show="began" ><i class="el-icon-microphone"></i>点击开始录音</div> 
    <div class="nova-btn" @click="hint" v-show="!isRecording"> <div><i class="el-icon-sunny"></i> 话术提示</div></div>
    <div class="tips-dialog" v-show="isRecording">
      <div class="headericon">
        <div><i class="el-icon-sunny"></i> 话术提示 </div>
        <div @click="deletetips"> <i class="el-icon-close"></i></div> 
     </div>
        <div class="letter">
            <h3>角度一：资金安全保障</h3>
            <strong>回复示例：</strong>
            <p>王奶奶，您放心，我们的养老保险产品是由国家认可的保险公司承保的，受到严格的监管。保险公司会定期公布财务报告，您可以了解到公司的经营状况和资金运作情况。保险合同中有明确的保障条款，确保您的权益得到保障。</p>
        </div>
    </div>
    <div class="recording" v-show="!began">
          <img src="../assets/audioing-peding.93561376.png" alt="">
          <el-button type="text" class="close" @click="afters">关闭</el-button>
         <div data-v-f7bd0078 class="time">录音中</div>
         <div class="twobutton">
          <el-button round>重录</el-button>
          <el-button round>发送</el-button>
        </div>
     </div>
</div>

</template>

<script>

export default {
name:'StartPracticing',
props:['theme','names'],
data() {
    return {
        isRecording:false,
        began:true,


        mediaRecorder: null,
      audioChunks: [],
      audioUrl: null,
      recordingStartTime: null,
      recordingDuration: 0,
    }
},
computed:{
},
methods: {
    hint(){
        this.isRecording=true
    },
    deletetips(){
        this.isRecording=false
    },
    async begins(){
      this.began=false
    },
    afters(){
      this.began=true
      
    },
    stop(){
        this.$confirm('您将结束本次场景任务对话，并前往AI智能分析您的对话效果，看看本次对话的得分如何吧 ', '结束本次任务并前往评估', {
          confirmButtonText: '前往评估',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    
},
}
</script>
<style lang="css" scoped>
 .recording{
  position: fixed;
  left: 2.56410256vw;
  bottom: 2.56410256vw;
  width: 92.87179487vw;
  height: 47vw;
  border: 2px solid #5c67ff;
  border-radius: 3vw;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  background: linear-gradient(247deg, rgba(92, 103, 255, .85098) 15.1%, rgba(226, 112, 255, .85098) 84.9%);
}

.recording img{
  width: 18vw;
  height: 18vw;
  position: absolute;
  bottom: 35vw;
  left: 37vw;
}
.recording .close{
  position: absolute;
  right: 4vw;
  bottom: 35vw;
}
.recording .time{
  margin-bottom: 24px;
    margin-top: 60px;
}
.header {
  margin: 2.56410256vw;
  padding: 2.56410256vw;
  background: rgba(0, 0, 0, 0.6);
  height: 20.51282051vw;
  border-radius: 3.07692308vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header .single-line {
  font-weight: 500;
  font-size: 4.1025641vw;
  color: white;
}
.header .title {
  margin: 2vw 2vw 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 7.17948718vw;
}
.chat-list {
  margin: 3.84615385vw 2.56410256vw;
  height: 33.33333333vw;
  display: flex;
  gap: 2.56410256vw;
}
.chat-list .pc {
  width: 9.23076923vw;
  height: 9.23076923vw;
  background-size: cover;
  background: url(../assets/cover.aa799c19.png);
  border-radius: 51.28205128vw;
  background-size: 100% 100%;
}
.chat-list .content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chat-list .content .name {
  font-size: 2.82051282vw;
  color: #fff;
}
.chat-list .content .content-audio-wrapper {
  padding: 1.28205128vw;
  height: 9.23076923vw;
  width: 23.07692308vw;
  border-radius: 0 3.07692308vw 3.07692308vw 3.07692308vw;
  background: white;
  display: flex;
  gap: 1.28205128vw;
  align-items: center;
}
.chat-list .content .content-audio-wrapper img {
  width: 5.12820513vw;
  height: 5.12820513vw;
}
.chat-list .content .content-text {
  height: 17.43589744vw;
  background: rgba(235, 236, 255, 0.94902);
  border-radius: 3.07692308vw;
  font-size: 4.1025641vw;
  padding: 2.56410256vw 3.07692308vw;
  color: #222;
  font-weight: 400;
  display: flex;
  align-items: center;
}
.nova-btn {
  padding: 1.5vw 2.2vw;
  position: fixed;
  background-color: white;
  width: 25.64102564vw;
  height: 8.20512821vw;
  color: #707aff;
  left: 5.12820513vw;
  border: none;
  border-radius: 12.82051282vw;
  bottom: 17.94871795vw;
}
.tips-dialog {
  position: fixed;
  background-color: #fff;
  border-radius: 5.12820513vw;
  height: 51.28205128vw;
  color: #707aff;
  left: 2.56410256vw;
  bottom: 2.56410256vw;
  width: 94.87179487vw;
  padding: 5.12820513vw;
}
.tips-dialog .letter {
  overflow: auto;
  width: 80vw;
  height: 40vw;
}
.tips-dialog .headericon {
  display: flex;
  justify-content: space-between;
}
.recording {
  background-color: linear-gradient(247deg, rgba(92, 103, 255, 0.85098) 15.1%, rgba(226, 112, 255, 0.85098) 84.9%);
}

</style>