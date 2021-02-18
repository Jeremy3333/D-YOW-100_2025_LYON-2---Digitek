<template>
  <div class="menu">
    <a href="/create">
      <div class="create">
        <p>create post</p>
      </div>
    </a>
    <div class="separation"></div>
    <div class="menu-title">
      <p>Preview</p>
    </div>
    <div class="preview">
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
    <div class="separation"></div>
    <div class="menu-title">
      <p>Settings of the post</p>
    </div>
    <div class="ordre">
      <label>
        <div class="check">
          <input type="checkbox" id="places" name="Places" />
          <p>Places</p>
        </div>
      </label>
      <label>
        <div class="check">
          <input type="checkbox" id="Rating" name="Rating" />
          <p>Rating</p>
        </div>
      </label>
      <label>
        <div class="check">
          <input type="checkbox" id="Popularity" name="Popularity" />
          <p>Popularity</p>
        </div>
      </label>
      <label>
        <div class="check">
          <input type="checkbox" id="Discover" name="Discover" />
          <p>Discover</p>
        </div>
      </label>
    </div>
    <div class="separation"></div>
    <div class="policy">Policy Privacy</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
.menu {
  background-color: #f2f2f2;
  width: 37%;
  padding: 1px;
}
.create {
  height: 100px;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50%;
  transform: translate(-50%);
  background-color: #8bc8db;
  color: white;
  text-align: center;
  padding: 1px;
  border-radius: 5px;
  border: 3px solid #715696;
}
.article {
  width: 80%;
  margin-left: 10%;
  background-color: #ededed;
  border-radius: 5px;
  padding: 1px;
  text-align: center;
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
}
.article-bot img {
  width: 20px;
  padding: 7px;
  padding-left: 10px;
  padding-right: 15px;
}
.mid-img {
  border-left: 2px solid #a6a6a6;
  border-right: 2px solid #a6a6a6;
}
.create p {
  margin-top: 20%;
}
.preview {
  background-color: #8bc8db;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
  border-radius: 10px;
}
.separation {
  border: 1px solid #8973a7;
  margin-left: 15%;
  margin-right: 15%;
}
.menu-title {
  height: 40px;
  margin-left: 10%;
  margin-top: 15px;
  margin-bottom: 15px;
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
  margin-top: 60px;
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
  margin-bottom: 58px;
}
</style>
