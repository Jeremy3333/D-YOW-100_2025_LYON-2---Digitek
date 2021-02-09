<template>
  <div>
    <Header />
    <div class="body">
      <Menu />
      <div class="main">
        <h1>Profil</h1>
        <img src="../assets/img/unnamed.jpg" />
        <div class="change">change picture</div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/heads";
import Menu from "../components/left-menu-profil";
import Footer from "../components/footer";

export default {
  components: {
    Header,
    Menu,
    Footer
  }
};
</script>

<style scoped>
.body {
  margin-left: 15%;
  width: 70%;
  border-right: 2px solid #a6a6a6;
  border-left: 2px solid #a6a6a6;
  display: flex;
}
.main {
  text-align: center;
  width: 80%;
  height: 100%;
}
.main img {
  width: 30%;
  border-radius: 20px;
  border: 2px solid black;
}
</style>
