<template>
  <div class="footer">
    <div class="but">
      <img src="../assets/img/home.png" />
    </div>
    <div class="but">
      <img src="../assets/img/comment2.png" />
    </div>
    <div class="but">
      <img src="../assets/img/settings.png" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  height: 50px;
  width: 56%;
  background-color: #ededed;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: left;
}
.footer img {
  height: 80%;
  margin-top: 5px;
  margin-left: 50%;
  transform: translate(-50%);
}
.but {
  width: 32.8%;
  border-left: 3px solid #a6a6a6;
  border-right: 3px solid #a6a6a6;
}
</style>
