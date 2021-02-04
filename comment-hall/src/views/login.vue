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
                        <input type="text" class="text" name="name" required>
                        <p>or</p>
                        <input type="text" class="text" name="name" required>
                        <p id="lepoint">.</p>
                        <input type="text" class="text" name="name" required>
                    </div>
                    <div class="box1">
                        <div><input type="text" class="text" name="name" required></div>
                        <div><input type="text" class="text" name="name" required></div>
                        <div><input type="text" class="text" name="name" required></div>
                        <div><input type="text" class="text" name="name" required></div>
                        <div><input type="text" class="text" name="name" required></div>
                        <div><input type="text" class="text" name="name" required></div>
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
    height: 600px;
    width: 440px;
}
.box1 {
    background-color: #cecece;
    border-radius: 25px;
    height: 600px;
    width: 440px;
}
.text{
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid black;
  border-radius: 100px;
}
.footer {
  height: 50px;
  width: 70%;
  background-color: #ededed;
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
#lepoint {
    color: rgba(0, 0, 0, 0);
}
</style>
