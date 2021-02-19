<template>
  <div class="footer">
    <div v-if="!charged">
      {{ footer() }}
    </div>
    <div :class="pasvar" @click="Index">
      <img :src="img('home.png')" />
    </div>
    <div :class="cestvar" @click="profil">
      <img src="../assets/img/comment2.png" />
    </div>
    <div :class="bonvar" @click="Settings">
      <img src="../assets/img/settings.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pasvar: "but",
      cestvar: "but",
      bonvar: "but",
      charged: false,
      imgLink: "../assets/img/home.png"
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
    img(index) {
      if (this.$route.path == "/") {
        return require("../assets/img/homeb.png");
      } else return require("../assets/img/" + index);
    },
    footer: function() {
      this.charged = true;
      if (this.$route.path == "/") {
        this.pasvar = "but1";
      }
    }
  }
};
</script>
<style>
.footer {
  height: 50px;
  width: 56%;
  background-color: #ededed;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: left;
  text-align: left;
}
.footer img {
  height: 80%;
  margin-top: 5px;
  margin-left: 50%;
  transform: translate(-50%);
}
.but {
  width: 32.8%;
  border-left: 3px solid #a6a6a6;
  border-right: 3px solid #a6a6a6;
}
.but1 {
  background: #adedfd;
  width: 32.8%;
  border-left: 3px solid #a6a6a6;
  border-right: 3px solid #a6a6a6;
}
</style>
