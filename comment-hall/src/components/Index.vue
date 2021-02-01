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
            <div>
              <input type="checkbox" id="places" name="Places" />
            </div>
          </label>
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
  border: 3px solid #65b4ce;
}
.create p {
  margin-top: 20%;
}
.separation {
  border: 1px solid #c9c1d5;
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
  margin-left: 20px;
  margin-right: 20px;
  background-color: white;
}
</style>
