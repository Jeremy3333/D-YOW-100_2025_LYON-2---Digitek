<template>
  <div>
    <div v-if="!load">
      {{ getCookies() }}
    </div>
    <Header />
    <div class="body">
      <Menu />
      <div class="main">
        <h1>Profil</h1>
        <div class="pdp">
          <img :src="user.pdp" />
        </div>
        <div class="change">change picture</div>
        <div class="info">
          <p>
            Likes:
            <br />
            230
          </p>
          <p>
            Shares:
            <br />
            50
          </p>
          <p>
            Comments:
            <br />
            100
          </p>
          <p>
            Posts:
            <br />
            10
          </p>
        </div>
        <div class="grid">
          <div class="article">
            <div class="img">
              <img src="../assets/img/temple.jpeg" />
            </div>
            <a href="/post"><p>Greek Temple</p></a>
            <div class="article-bot">
              <img src="../assets/img/hearts.png" />
              <img class="mid-img" src="../assets/img/comment.png" />
              <img src="../assets/img/share.png" />
            </div>
          </div>
          <div class="article">
            <div class="img">
              <img src="../assets/img/temple.jpeg" />
            </div>
            <p>Greek Temple</p>
            <div class="article-bot">
              <img src="../assets/img/hearts.png" />
              <img class="mid-img" src="../assets/img/comment.png" />
              <img src="../assets/img/share.png" />
            </div>
          </div>
          <div class="article">
            <div class="img">
              <img src="../assets/img/temple.jpeg" />
            </div>
            <p>Greek Temple</p>
            <div class="article-bot">
              <img src="../assets/img/hearts.png" />
              <img class="mid-img" src="../assets/img/comment.png" />
              <img src="../assets/img/share.png" />
            </div>
          </div>
          <div class="article">
            <div class="img">
              <img src="../assets/img/temple.jpeg" />
            </div>
            <p>Greek Temple</p>
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
import Header from "../components/heads";
import Menu from "../components/left-menu-profil";
import Footer from "../components/footer";

export default {
  components: {
    Header,
    Menu,
    Footer
  },
  data() {
    return {
      load: false,
      password: "",
      email: "",
      pdp: false,
      user: ""
    };
  },
  methods: {
    getCookies() {
      var email = "email=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(email) == 0) {
          this.load = true;
          this.email = c.substring(email.length, c.length);
        }
      }
      var password = "password=";
      var decodedCookies = decodeURIComponent(document.cookie);
      var cas = decodedCookies.split(";");
      for (var y = 0; y < cas.length; y++) {
        var f = cas[y];
        while (f.charAt(0) == " ") {
          f = f.substring(1);
        }
        if (f.indexOf(password) == 0) {
          this.load = true;
          this.password = f.substring(password.length, f.length);
        }
      }
      this.GetAllUsers();
    },
    async GetAllUsers() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      await fetch("http://localhost:8000/api/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log((this.users = JSON.parse(result))))
        .catch(error => console.log("error", error));

      this.users = this.users.find(user => user.email === this.email);

      if (this.users == undefined) {
        console.log("email existe pas");
      } else {
        this.id = this.users.id;
        this.LoginVerifie();
      }
    },
    async LoginVerifie() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      await fetch(`http://localhost:8000/api/users/${this.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log((this.user = JSON.parse(result))))
        .catch(error => console.log("error", error));

      if (this.password == this.user.password) {
        this.pdp = true;
      } else {
        console.log("code mauvais");
      }
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
  text-align: center;
  width: 80%;
  height: 100%;
}
.main h1 {
  margin: 15px;
}
.pdp {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  border: 2px solid #715696;
  border-radius: 5px;
  margin-top: 10%;
  overflow: hidden;
  text-align: center;
  margin-left: 32.2%;
}
.pdp img {
  width: 100%;
}
.change {
  background-color: #715696;
  width: 29%;
  margin-left: 50%;
  transform: translate(-50%);
  height: 40px;
  margin-top: 20px;
  padding-top: 17px;
  border-radius: 10px;
  color: white;
}
.info {
  background-color: #d8edf3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #715696;
  width: 90%;
  margin-left: 50%;
  transform: translate(-50%);
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin-bottom: 55px;
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
