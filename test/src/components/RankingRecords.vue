<template>
    <div class="four">
        <div class="get">
            <div class="tag">练习记录</div>
            <i class="el-icon-arrow-righ"></i>
        </div>
        <div class="con">
            <div class="item">
                <div class="number">{{practicetimes}}</div>
                <div class="text">练习次数</div>

            </div>
            <div class="item">
                <div class="number">{{totaltime}}分钟</div>
                <div class="text">练习时长</div>
            </div>
            <div class="item">
                <div class="number">{{number}}</div>
                <div class="text">最高分</div>
            </div>
            <div class="item">
                <div class="number">{{ranking }}</div>
                <div class="text">排名</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'RankingRecords',
data() {
        return {
            practicetimes:1,
            totaltime:3,
            number:4,
            ranking:5
        }
    },
}
</script>
<style lang="css">
    .four {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 2.56410256vw;
  padding: 2.56410256vw;
  backdrop-filter: blur(4px);
  height: 32.30769231vw;
  border-radius: 3.84615385vw;
}
.four .get {
  display: flex;
  justify-content: space-between;
}
.four .con {
  display: flex;
  justify-content: space-around;
}
.four .con .item {
  height: 13.33333333vw;
  width: 21.66666667vw;
  text-align: center;
  position: relative;
}
.four .con .item::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-right: 1px solid gray;
  height: 50%;
}
.four .con .number {
  margin-bottom: 2.56410256vw;
  color: white;
  font-weight: 400;
  font-size: 5.12820513vw;
}
.four .con .text {
  font-size: 3.07692308vw;
  font-weight: 400;
}
</style>