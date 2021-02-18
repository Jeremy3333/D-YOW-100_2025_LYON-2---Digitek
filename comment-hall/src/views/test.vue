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
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>
