<template>
  <div class="the-resume">
    <div class="resume-list" v-for="item in resumeList" :key="item.name" :data-title="item.name" @click="downloadResume(item.url)">
      <icon-font :name="item.icon"></icon-font>
    </div>
  </div>
</template>
<script>
import resumeListInit from './resumeListInit.js'
export default {
  setup() {
    const { resumeList, downloadResume } = resumeListInit()
    return {
      resumeList,
      downloadResume
    }
  }
}
</script>
<style lang="scss" scoped>
.the-resume {
  box-sizing: border-box;
	padding-top: 140px;
  padding-left: 100px;
  padding-bottom: 140px;
	width: 100%;
	height: 100%;
	background: url("../../assets/images/resume.jpg") no-repeat center center;
	background-color: #f0f2f5;
	background-size: 100%;
	background-blend-mode: screen;
  display: flex;
  justify-content: center;
  align-items: center;
  .resume-list {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(215, 210, 241);
    border-radius: 40px;
    transition: all .5s;
    cursor: pointer;
    .icon-font {
      font-size: 80px;
      color: rgba(#fff, 0.8);
      transition: all .5s;
    }
    &::after {
      position: absolute;
      content: attr(data-title);
      bottom: -30px;
      left: 0;
      right: 0;
      margin: auto;
      background-color: rgba(#000, 0.7);
      color: #fff;
      font-size: 16px;
      opacity: 0;
      padding: 6px 10px;
      border-radius: 6px;
      transition: all .5s;
      height: max-content;
      width: max-content;
    }
    &:hover {
      background-color: rgb(205, 195, 255);
      .icon-font {
        color: rgba(#fff, 1);
      }
      &::after {
        transform: translateY(20px);
        opacity: 1;
      }
    }
  }
}
</style>