<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-tabbar route :safe-area-inset-bottom="true">
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" replace to="/article">文章</van-tabbar-item>
    </van-tabbar>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="test">也行吧</div>

    <van-cell-group>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      username: "",
      password: "",
      value:''
    };
  },
  methods: {},
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  created() {
    Dialog({ message: "提示ssdasdasdasdasdsadaasda" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style lang="scss">
@import "../scss/svg.scss";

.test {
  border-radius: 2px;
  background: white svg(square param(--color #00b1ff));
  //border: 1px solid transparent;
  //border-image: svg(1px-border param(--color red)) 1 stretch;
}
</style>