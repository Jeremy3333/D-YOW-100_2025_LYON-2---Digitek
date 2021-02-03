<template>
  <div>
    <div class="header"></div>
    <div class="body">
      <Menu />
      <div class="main">
        <div class="main-top">
          <div class="main-title">Recommended Post</div>
          <div class="more">
            <p>see more</p>
            <img class="plus" src="../assets/plus.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./left-menu";
export default {
  components: {
    Menu
  }
};
</script>

<style scoped>
.header {
  border-bottom: 3px solid #a6a6a6;
  height: 100px;
}
.body {
  margin-left: 15%;
  width: 70%;
  border-right: 2px solid #a6a6a6;
  border-left: 2px solid #a6a6a6;
  display: flex;
}
.main {
  width: 80%;
}
.main-top {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
}
.main-title {
  border: 3px solid #c6c6c6;
  color: #c6c6c6;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}
.more {
  background: linear-gradient(#c4b7d9, #1814f2);
  display: flex;
  width: 15%;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 100px;
  color: white;
}
.more p {
  margin-top: 12px;
  margin-bottom: 10px;
}
.plus {
  width: 25%;
  height: 80%;
  margin-top: 4px;
}
</style>
