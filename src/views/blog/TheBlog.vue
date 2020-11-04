<template>
  <div class="the-blog">
    <div class="blog-list">
      <div class="blog-list_i" v-for="item in blogList" :key="item.name" @click="onBlogClick(item.url)">
        <div class="blog-title">{{item.name}}</div>
        <div class="blog-content">{{item.content}}</div>
        <div class="blog-tips">
          <div class="blog-tips_i" v-for="subItem in item.tips" :key="subItem">{{subItem}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blogListInit from './blogList.js'
export default {
  setup() {
    const { blogList, onBlogClick } = blogListInit()
    return {
      blogList,
      onBlogClick
    }
  },
}
</script>
<style lang="scss">
.the-blog {
	position: relative;
	box-sizing: border-box;
	padding-top: 140px;
  padding-left: 100px;
  padding-bottom: 140px;
	width: 100%;
	height: 100%;
	background: url("../../assets/images/blog.jpg") no-repeat center center;
	background-color: #f0f2f5;
	background-size: 100% 100%;
	background-blend-mode: screen;
  .blog-list {
    width: 70%;
    margin: 0 auto;
    overflow-y: auto;
    height: 100%;
    &_i {
      padding: 20px;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 20px;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: rgba(#ccc, 0.5);
        bottom: -30px;
        position: relative;
      }
      &:hover {
        background-color: rgba(#ccc, 0.3);
      }
      &:last-child::after {
        display: none;
      }
      .blog-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .blog-tips {
        display: flex;
        margin-top: 20px;
        &_i {
          padding: 4px 16px;
          border-radius: 9999px;
          min-width: 50px;
          text-align: center;
          font-size: 14px;
          background-color: rgba(#ccc, .4);
          & + .blog-tips_i {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
