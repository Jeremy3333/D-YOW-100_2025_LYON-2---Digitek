<template>
  <div class="menu">
    <h2>User<br />Information</h2>
    <h3>Username:</h3>
    <p>Geraldine Poutine</p>
    <h3>Email:</h3>
    <p>Geraldine.P@gmail.com</p>
    <h3>City:</h3>
    <p>Toulouse</p>
    <h3>Age:</h3>
    <p>22 years old</p>
    <div class="create">
      <p>Modify</p>
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
