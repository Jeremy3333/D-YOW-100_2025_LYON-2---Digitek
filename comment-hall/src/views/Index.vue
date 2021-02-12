<template>
  <div>
    <Header />
    <div class="body">
      <Menu />
      <div v-if="!load">
        {{ getpost() }}
      </div>
      <div class="main">
        <div class="main-top">
          <div class="main-title">Recommended Post</div>
          <div class="more">
            <p>see more</p>
            <img class="plus" src="../assets/img/plus.webp" />
          </div>
        </div>
        <div class="grid">
          <div class="article" v-for="(post, index) in posts" :key="index">
            <div class="img">
              <img :src="img(post.img)" />
            </div>
            <a href="/post"
              ><p>{{ post.title }}</p>
            </a>
            <div class="article-bot">
              <img src="../assets/img/hearts.png" />
              <img class="mid-img" src="../assets/img/comment.png" />
              <img src="../assets/img/share.png" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/left-menu";
import Footer from "../components/footer";
import Header from "../components/heads";

export default {
  components: {
    Menu,
    Footer,
    Header
  },
  data() {
    return {
      posts: "caca",
      load: false
    };
  },
  methods: {
    getpost() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch("http://127.0.0.1:8000/api/post", requestOptions)
        .then(response => response.text())
        .then(result => console.log((this.posts = JSON.parse(result))))
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
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.article {
  width: 80%;
  margin-left: 10%;
  margin-top: 30px;
  background-color: #ededed;
  border-radius: 5px;
  padding: 1px;
  text-align: center;
  border: 1px solid #a6a6a6;
}
.article p {
  margin: 10px;
}
.img {
  position: relative;
  width: 80%;
  border-radius: 5px;
  margin-left: 10%;
  margin-top: 10%;
  height: 115px;
  overflow: hidden;
  text-align: center;
}
.img img {
  width: 100%;
}
.article-bot {
  border-top: 3px solid #a6a6a6;
  margin-top: 10px;
}
.article-bot img {
  width: 20px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
}
.mid-img {
  border-left: 2px solid #a6a6a6;
  border-right: 2px solid #a6a6a6;
}
</style>
