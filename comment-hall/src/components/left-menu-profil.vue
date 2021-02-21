<template>
  <div class="menu">
    <div v-if="!load">
      {{ getCookies() }}
    </div>
    <h2>User<br />Information</h2>
    <h3>Username:</h3>
    {{ user.username }}
    <h3>Email:</h3>
    {{ user.email }}
    <div class="create">
      <p>Modify</p>
    </div>
    <div class="separation"></div>
    <div class="policy">Policy Privacy</div>
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
          this.password = c.substring(password.length, c.length);
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
a {
  text-decoration: none;
}
h2 {
  margin-top: 15%;
}
h3 {
  margin-top: 15%;
}
.menu {
  background-color: #f2f2f2;
  width: 20%;
  padding: 1px;
  text-align: center;
}
.create {
  height: 55px;
  width: 180px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50%;
  transform: translate(-50%);
  background-color: #8d74b1;
  color: white;
  text-align: center;
  padding: 1px;
  padding-top: 15%;
  border-radius: 5px;
  border: 3px solid #cec8de;
}
.create p {
  text-decoration: none;
  color: white;
}
.separation {
  border: 1px solid #8973a7;
  margin-left: 15%;
  margin-right: 15%;
}
.menu-title {
  height: 40px;
  margin-left: 10%;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 10%;
  border-radius: 5px;
  text-align: center;
  background-color: #e2e2e2;
  padding: 1px;
  border: 1px solid black;
}
.menu-title p {
  margin-top: 5%;
}
.ordre {
  margin-left: 20%;
  margin-right: 20%;
  background-color: white;
  border: 1px solid #c7bad9;
  border-radius: 5px;
  margin-bottom: 30px;
}
.check {
  display: flex;
  justify-content: left;
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px solid #c7bad9;
}
.check-last {
  display: flex;
  justify-content: left;
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
}
.check p {
  margin-top: 4%;
  margin-left: 10px;
}
.check-last p {
  margin-top: 4%;
  margin-left: 10px;
}
.select {
  margin-left: 20%;
  width: 60%;
  margin-bottom: 50px;
}
.policy {
  margin-top: 30px;
  height: 30px;
  background-color: #2b59a2;
  width: 200px;
  margin-left: 50%;
  transform: translate(-50%);
  color: white;
  text-align: center;
  padding-top: 5%;
  border-radius: 200px;
  border: 3px solid #8bc8db;
  margin-bottom: 80px;
}
</style>
