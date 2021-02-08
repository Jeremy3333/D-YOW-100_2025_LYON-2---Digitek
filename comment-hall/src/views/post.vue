<template>
  <div>
    <Header />
    <div class="body">
      <Menu />
      <div class="main">
        <div class="article">
          <h2>Greek Temple</h2>
          <div class="info">
            <div class="auth">
              <p>Jade23</p>
            </div>
            <div class="like-share">
              <div class="like">124 likes</div>
              <div class="share">40 shared</div>
            </div>
          </div>
          <div class="img">
            <img src="../assets/img/temple.jpeg" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            cupiditate ratione debitis est obcaecati iure accusantium recusandae
            illo similique velit expedita ullam quaerat modi repellendus culpa
            provident odio nulla. Earum!
          </p>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/heads";
import Menu from "../components/left-menu";
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
  width: 80%;
  height: 100%;
}
.article {
  background-color: #e2e2e2;
  border: 2px solid black;
  width: 50%;
  margin-left: 50%;
  padding-top: 30px;
  transform: translate(-50%);
  margin-top: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding-bottom: 30px;
  text-align: center;
}
.info {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.auth {
  padding-top: 15px;
  color: red;
}
.img {
  position: relative;
  width: 80%;
  border-radius: 5px;
  margin-left: 10%;
  margin-top: 10%;
  height: 215px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 25px;
}
.img img {
  width: 100%;
}
</style>
