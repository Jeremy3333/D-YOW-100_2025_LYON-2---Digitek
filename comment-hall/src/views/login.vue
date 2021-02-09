<template>
    <div>
        <Header />
        <div class="body">
            <div class="core">
                <div class="log">
                    <h1>CONNECTION PAGE</h1>
                </div>
                <div class="boxall">
                    <div class="box">
                      <div class="décal">
                        <input class="texte" placeholder="Email" type="text" name="name" required>
                        <p class="texte">or</p>
                        <input class="texte" placeholder="Username" type="text" name="name" required>
                        <div class="texte"></div>
                        <input class="texte" placeholder="Password" type="text" name="name" required>
                      </div>
                      <button>
                          SIGN IN
                      </button>
                    </div>
                    <div class="box1">
                      <div class="décal">
                        <input type="text" placeholder="Username" class="text" name="name" required>
                        <input type="text" placeholder="Email" class="text" name="name" required>
                        <input type="text" placeholder="Password" class="text" name="name" required>
                        <input type="text" placeholder="Password confirmation" class="text" name="name" required>
                        <input type="text" placeholder="City" class="text" name="name" required>
                        <input type="text" placeholder="Age" class="text" name="name" required>
                      </div>
                      <button>
                          SIGN UP
                      </button>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="but">
                    <img src="../assets/img/home.png" />
                </div>
                <div class="but">
                    <img src="../assets/img/comment2.png" />
                </div>
                <div class="but">
                    <img src="../assets/img/settings.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from  "../components/heads"

export default {
  components: {
    Header
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
.core {
    height: 874px;
    width: 1300px;
}
.boxall {
    display: flex;
    padding: 6%;
    justify-content: space-between;
}
.log {
    margin-left: 34%;
    margin-top: 3%;
}
.box {
    background-color: #cecece;
    border-radius: 25px;
    padding: 1px;
    height: 600px;
    width: 440px;
}
.box button {
  border: 3px solid rgba(0, 0, 0, 0);
  background-color: rgba(74, 198, 255, 0.534);
  font-size: 21px;
  border-radius: 100px;
  height: 50px;
  width: 250px;
  margin-left: 50%;
  transform: translate(-50%, -300%);
}
.box1 button {
  border: 3px solid rgba(0, 0, 0, 0);
  background-color: rgba(74, 198, 255, 0.534);
  font-size: 21px;
  border-radius: 100px;
  height: 50px;
  width: 250px;
  margin-left: 50%;
  transform: translate(-50%, -300%);
}
.box input {
  border: 3px solid black;
}
.box p {
  margin-left: 50%;
  font-size: 130%;
  transform: translate(-5%, 27%);
}
.box1 {
    background-color: #cecece;
    border-radius: 25px;
    padding: 1px;
    height: 600px;
    width: 440px;
}
.décal {
  transform: translate(-54%, -50%);
  margin-left: 50%;  
  margin-top: 55%;
  width: 85%;
}
.texte {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 70px;
  border-radius: 100px;
  margin-top: 2%;
  padding-left: 6%;
}
.text {
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid black;
  width: 100%;
  height: 43px;
  border-radius: 100px;
  margin-top: 5%;
  padding-left: 6%;
}
.footer {
  height: 50px;
  width: 70%;
  background-color: #ededed00;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: left;
}
.footer img {
  height: 80%;
  margin-top: 5px;
  margin-left: 50%;
  transform: translate(-50%);
}
.but {
  width: 33%;
  border-left: 3px solid #a6a6a6;
  border-right: 3px solid #a6a6a6;
}
</style>
