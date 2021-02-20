<template>
  <div>
    <Header />
    <div class="body">
      <div class="core">
        <div class="log">
          <h1>CONNECTION PAGE</h1>
        </div>
        <div class="boxall">
          <div class="box">
            <div class="décal">
              <input
                class="texte"
                placeholder="Email"
                type="text"
                v-model="email"
              />
              <input
                class="texte"
                placeholder="Password"
                type="text"
                v-model="password"
              />
            </div>
            <button>
              SIGN IN
            </button>
          </div>
          <div class="box1">
            <div class="décal">
              <input
                type="text"
                placeholder="Username"
                class="text"
                v-model="usernamereg"
              />
              <input
                type="text"
                placeholder="Email"
                class="text"
                name="name"
                v-model="emailreg"
              />
              <input
                type="password"
                placeholder="Password"
                class="text"
                name="name"
                v-model="passwordreg"
              />
              <input
                type="password"
                placeholder="Password confirmation"
                class="text"
                name="name"
                v-model="passwordconf"
              />
            </div>
            <button @click="PasswordCheck()">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <div class="footer">
        <div :class="pasvar" @click="Index">
          <img src="../assets/img/home.png" />
        </div>
        <div :class="cestvar" @click="profil">
          <img src="../assets/img/comment2.png" />
        </div>
        <div :class="bonvar" @click="Settings">
          <img src="../assets/img/settings.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/heads";
var CryptoJS = require("crypto-js");

export default {
  components: {
    Header
  },
  data() {
    return {
      pasvar: "but",
      cestvar: "but",
      bonvar: "but",
      username: "",
      usernamereg: "",
      password: "",
      passwordconf: "",
      passwordreg: "",
      email: "",
      emailreg: "",
      crypt: ""
    };
  },
  methods: {
    Index: function() {
      window.location.href = "/";
    },
    profil: function() {
      window.location.href = "/profil";
    },
    Settings: function() {
      window.location.href = "/settings";
    },
    PasswordCheck() {
      if (
        this.emailreg != "" &&
        this.passwordreg != "" &&
        this.passwordconf != "" &&
        this.usernamereg != ""
      ) {
        if (this.passwordreg == this.passwordconf) {
          this.register();
        } else {
          console.log("autre");
        }
      } else {
        console.log("manque");
      }
    },
    register() {
      console.log(CryptoJS.MD5(this.passwordreg).toString());
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
.core {
  height: 874px;
  width: 1300px;
}
.boxall {
  display: flex;
  padding: 6%;
  justify-content: space-between;
}
.log {
  margin-left: 34%;
  margin-top: 3%;
}
.box {
  background-color: #cecece;
  border-radius: 25px;
  padding: 1px;
  height: 600px;
  width: 440px;
}
.box button {
  border: 3px solid rgba(0, 0, 0, 0);
  background-color: rgba(74, 198, 255, 0.534);
  font-size: 21px;
  border-radius: 100px;
  height: 50px;
  width: 250px;
  margin-left: 50%;
  transform: translate(-50%, -100%);
}
.box1 button {
  border: 3px solid rgba(0, 0, 0, 0);
  background-color: rgba(74, 198, 255, 0.534);
  font-size: 21px;
  border-radius: 100px;
  height: 50px;
  width: 250px;
  margin-left: 50%;
  transform: translate(-50%, -100%);
}
.box input {
  border: 3px solid black;
}
.box p {
  margin-left: 50%;
  font-size: 130%;
  transform: translate(-5%, 27%);
}
.box1 {
  background-color: #cecece;
  border-radius: 25px;
  padding: 1px;
  height: 600px;
  width: 440px;
}
.décal {
  transform: translate(-54%, -50%);
  margin-left: 50%;
  margin-top: 55%;
  width: 85%;
}
.texte {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 70px;
  border-radius: 100px;
  margin-top: 2%;
  padding-left: 6%;
}
.text {
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid black;
  width: 100%;
  height: 43px;
  border-radius: 100px;
  margin-top: 5%;
  padding-left: 6%;
}
.footer {
  height: 50px;
  width: 70%;
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
  width: 33%;
  border-left: 3px solid #a6a6a6;
  border-right: 3px solid #a6a6a6;
}
</style>
