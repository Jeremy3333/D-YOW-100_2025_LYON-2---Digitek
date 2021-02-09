<template>
  <div class="zoe">
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
        <button><img src="../assets/img/loupe.png" alt="loupe" /></button>
      </div>
      <div class="pp">
        <img src="../assets/img/pdp.png" alt="photo de profile non connecter" />
      </div>
    </div>
  </div>
</template>

<script></script>

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
</style>
