<template>
  <div>
    <input @change="updateProfile" type="file" name="photo" accept="image/*" />
    <img :src="imageSrc" class="image" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageSrc: ""
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
      this.api();
    },
    api() {
      var formdata = new FormData();
      formdata.append("img", this.image);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("http://127.0.0.1:8000/api/test", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    }
  }
};
</script>
