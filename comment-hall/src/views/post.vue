<template>
  <div>
    <Header />
    <div class="body">
      <Menu />
      <div v-if="!load">
        {{ get() }}
      </div>
      <div class="main">
        <div class="article">
          <h2>{{ post.title }}</h2>
          <div class="info">
            <div class="auth">
              <p>{{ post.user }}</p>
              <a href="#">{{ post.link }}</a>
            </div>
            <div class="like-share">
              <div class="like">{{ post.likes }} likes</div>
              <div class="share">{{ post.shares }} shares</div>
            </div>
          </div>
          <div class="img">
            <img :src="img(post.img)" />
          </div>
          <p>{{ post.comment }}</p>
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
  },
  data() {
    return {
      post: "",
      load: false
    };
  },
  methods: {
    get() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch(
        "http://127.0.0.1:8000/api/post/" + this.$route.params.id,
        requestOptions
      )
        .then(response => response.text())
        .then(result => console.log((this.post = JSON.parse(result))))
        .catch(error => console.log("error", error))
        .finally((this.load = true));
    },
    img(index) {
      return require("../assets/img/" + index);
    }
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
  display: flex;
  text-decoration: none;
  flex-direction: column;
  text-align: left;
}
.auth p {
  color: red;
}
.auth a {
  text-decoration: none;
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
