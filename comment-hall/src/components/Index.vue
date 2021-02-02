<template>
  <div>
    <div class="header"></div>
    <div class="body">
      <div class="menu">
        <div class="create">
          <p>create post</p>
        </div>
        <div class="separation"></div>
        <div class="menu-title">
          <p>Refine the search</p>
        </div>
        <div class="ordre">
          <label>
            <div class="check">
              <input type="checkbox" id="places" name="Places" />
              <p>Places</p>
            </div>
            <div class="check">
              <input type="checkbox" id="Rating" name="Rating" />
              <p>Rating</p>
            </div>
            <div class="check">
              <input type="checkbox" id="Popularity" name="Popularity" />
              <p>Popularity</p>
            </div>
            <div class="check">
              <input type="checkbox" id="Discover" name="Discover" />
              <p>Discover</p>
            </div>
            <div class="check">
              <input type="checkbox" id="my-topics" name="my-topics" />
              <p>My topic</p>
            </div>
            <div class="check-last">
              <input type="checkbox" id="shared" name="shared" />
              <p>Shared</p>
            </div>
          </label>
        </div>
        <div class="separation"></div>
        <div class="menu-title">
          <p>Categories</p>
        </div>
        <select class="select" name="categories" id="Categories">
          <option value="">All</option>
          <option value="culture">Culture</option>
          <option value="sport">Sport</option>
          <option value="food">Food</option>
          <option value="Others">others</option>
        </select>
        <div class="separation"></div>
        <div class="policy">Policy Privacy</div>
      </div>
      <div class="main">
        <div class="main-top">
          <div class="main-title">Recommended Post</div>
          <div class="more">
            <p>see more</p>
            <img class="plus" src="../assets/plus.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.header {
  border-bottom: 3px solid #a6a6a6;
  height: 100px;
}
.body {
  margin-left: 15%;
  width: 70%;
  border-right: 2px solid #a6a6a6;
  border-left: 2px solid #a6a6a6;
  display: flex;
}
.menu {
  background-color: #f2f2f2;
  width: 20%;
  height: 100%;
  padding: 1px;
}
.create {
  height: 100px;
  width: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50%;
  transform: translate(-50%);
  background-color: #8bc8db;
  color: white;
  text-align: center;
  padding: 1px;
  border-radius: 5px;
  border: 3px solid #715696;
}
.create p {
  margin-top: 20%;
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
  color: #9397a0;
  background-color: #e2e2e2;
  padding: 1px;
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
  justify-content: space-between;
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px solid #c7bad9;
}
.check-last {
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
}
.check p {
  margin-top: 4%;
}
.check-last p {
  margin-top: 4%;
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
.main {
  width: 80%;
}
.main-top {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
}
.main-title {
  border: 3px solid #c6c6c6;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}
.more {
  background: linear-gradient(#c4b7d9, #1814f2);
  display: flex;
  width: 15%;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 100px;
  color: white;
}
.more p {
  margin-top: 12px;
  margin-bottom: 10px;
}
.plus {
  width: 25%;
  height: 80%;
  margin-top: 4px;
}
</style>
