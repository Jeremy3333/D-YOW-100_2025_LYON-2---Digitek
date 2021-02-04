<template>
  <div>
    <Header />
    <div class="body">
      <Menu />
      <div class="princ">
        <div class="main">
          <div class="img">
            <img src="../assets/img/temple.jpeg" />
          </div>
          <img class="plus" src="../assets/img/plusb.webp" />
          <input type="text" placeholder="Link" />
          <input type="text" placeholder="Description" />
        </div>
        <div class="submit">
          <p>Submit</p>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/heads";
import Menu from "../components/left-menu-create";
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
  background-color: #e2e2e2;
  border: 2px solid black;
  width: 50%;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding-bottom: 30px;
}
input {
  background-color: #e2e2e2;
  width: 75%;
  margin: 2%;
  margin-left: 50%;
  transform: translate(-50%);
  border: 1px solid #a6a6a6;
  height: 50px;
  border-radius: 10px;
  padding-left: 2%;
}
.img {
  position: relative;
  width: 80%;
  border-radius: 5px;
  margin-left: 10%;
  margin-top: 10%;
  height: 290px;
  overflow: hidden;
  text-align: center;
}
.img img {
  width: 100%;
}
.plus {
  width: 10%;
  margin-left: 50%;
  transform: translate(-50%);
}
.submit {
  background-color: #715696;
  border: 3px solid #c7bad9;
  width: 50%;
  margin-left: 50%;
  transform: translate(-50%);
  height: 50px;
  text-align: center;
  margin-top: 5%;
  border-radius: 10px;
}
.submit p {
  margin-top: 3%;
  color: white;
}
</style>
