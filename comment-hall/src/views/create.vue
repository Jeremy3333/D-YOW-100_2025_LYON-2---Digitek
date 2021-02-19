<template>
  <div>
    <Header />
    <div class="body">
      <Menu />
      <div class="princ">
        <div class="main">
          <div class="img">
            <img :src="imageSrc" />
          </div>
          <img class="plus" src="../assets/img/plusb.webp" />
          <form method="post" enctype="multipart/form-data">
            <input
              @change="updateProfile"
              type="file"
              name="photo"
              accept="image/*"
            />
            <input type="text" v-model="title" placeholder="Title" />
            <input type="text" v-model="link" placeholder="Link" />
            <input type="text" v-model="comment" placeholder="Description" />
          </form>
        </div>
        <div class="submit" @click="post">
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
  },
  data() {
    return {
      imageSrc: "",
      image: "",
      title: "",
      link: "",
      comment: ""
    };
  },
  methods: {
    updateProfile(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = e => {
        this.imageSrc = reader.result;
        console.log(e);
        this.string();
      };
      reader.readAsDataURL(file);
    },
    string() {
      var n = this.imageSrc.indexOf(",");
      this.image = this.imageSrc.substring(n + 1);
      console.log(this.image);
    },
    post() {
      if (
        this.image != "" &&
        this.title != "" &&
        this.link != "" &&
        this.comment != ""
      ) {
        var formdata = new FormData();
        formdata.append("title", this.title);
        formdata.append("user", "Jordan");
        formdata.append("link", this.link);
        formdata.append("likes", 0);
        formdata.append("shares", 0);
        formdata.append("comment", this.comment);
        formdata.append("img", this.image);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch("http://localhost:8000/api/post", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log("error", error))
          .finally(this.redirect());
      } else {
        console.log("il manque");
      }
    },
    redirect() {
      window.location.href = "/";
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
  background-color: #e2e2e2;
  border: 2px solid black;
  width: 70%;
  margin-left: 25%;
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
  margin-left: 10%;
  margin-top: 10%;
  height: 230px;
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
  margin-bottom: 20%;
  border-radius: 10px;
}
.submit p {
  margin-top: 3%;
  color: white;
}
</style>
