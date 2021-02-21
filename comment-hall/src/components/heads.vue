<template>
  <div class="zoe">
    <div v-if="!load">
      {{ getCookies() }}
    </div>
    <div class="heads">
      <div class="jeje">
        <a href="/">
          <img
            id="image"
            src="../assets/img/logodigidrive.png"
            alt="logo digidrive"
          />
        </a>
      </div>
      <div class="searchbar">
        <input
          type="search"
          placeholder="Search a topic"
          id="site-search"
          name="q"
          aria-label="Search through site content"
        />
        <button>
          <img src="../assets/img/loupe.png" alt="loupe" />
        </button>
      </div>
      <div class="pp" v-if="pdp == false">
        <a href="/login">
          <img
            src="../assets/img/pdp.png"
            alt="photo de profile non connecter"
          />
        </a>
      </div>
      <div v-else>
        <a href="/profil">
          <div class="img">
            <img :src="user.pdp" alt="photo de profile non connecter" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

      console.log(this.password);
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
.zoe {
  height: 100px;
  border-bottom: 3px solid #999999;
}
.heads {
  width: 76%;
  margin-left: 16%;
  display: flex;
  justify-content: space-between;
}
.jeje {
  width: 12%;
  margin-top: 0.2%;
}
.searchbar {
  width: 65%;
  margin-top: 1.2%;
  display: flex;
  flex-direction: row;
}
.searchbar button {
  height: 9%;
  width: 20%;
  border-color: rgba(90, 203, 255, 0);
  border-radius: 200px;
  transform: translate(-30%);
  background-color: rgb(0, 195, 255);
}
.pp img {
  height: 11.2%;
  margin-top: 1.5%;
  border-radius: 10px;
  border: 5px solid #c2b6d2;
}
button img {
  height: 50%;
}
#site-search {
  border-color: rgba(90, 203, 255, 0);
  background-color: rgb(228, 228, 228);
  height: 9%;
  width: 100%;
  border-radius: 200px;
  font-size: 110%;
  padding-left: 2%;
}
#image {
  height: 12.7%;
}
.img {
  position: relative;
  width: 86px;
  border-radius: 5px;
  margin-top: 1.5%;
  height: 86px;
  overflow: hidden;
  text-align: center;
  border: 5px solid #c2b6d2;
}
.img img {
  width: 100%;
}
</style>
