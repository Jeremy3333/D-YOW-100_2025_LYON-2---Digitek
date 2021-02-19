<template>
  <div>
    <Header />
    <div class="body">
      <div class="core">
        <div class="log">
          <h1>SETTINGS</h1>
        </div>
        <div class="gear">
          <img src="../assets/img/gear2.png" alt="image écrou of settings" />
        </div>
        <div class="boxall">
          <div class="box">
            <div class="décal">
              <div class="langage">
                <p class="title">
                  Language
                </p>
                <div class="switche">
                  <div>
                    <input
                      type="radio"
                      name="demo5"
                      class="demo5"
                      id="demo5-a"
                    />
                    <label for="demo5-a">English</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="demo5"
                      class="demo5"
                      id="demo5-b"
                    />
                    <label for="demo5-b">French</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="demo5"
                      class="demo5"
                      id="demo5-c"
                    />
                    <label for="demo5-c">Spanish</label>
                  </div>
                </div>
              </div>
              <div>
                <p class="title">
                  Night mode
                </p>
                <div class="switch">
                  <input type="checkbox" id="check" />
                  <label for="check" class="loadcheck" id="loadcheck">
                    <span class="entypo-cancel">&#10008;</span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="entypo-check">&#10004;</span>
                  </label>
                </div>
              </div>
              <div>
                <p class="title">
                  Audiodescribption
                </p>
                <div class="switch">
                  <input type="checkbox" id="check1" />
                  <label for="check1" class="loadcheck" id="loadcheck">
                    <span class="entypo-cancel">&#10008;</span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="entypo-check">&#10004;</span>
                  </label>
                </div>
              </div>
              <div>
                <p class="title">
                  Bluetooth
                </p>
                <div class="switch">
                  <input type="checkbox" id="check2" />
                  <label for="check2" class="loadcheck" id="loadcheck">
                    <span class="entypo-cancel">&#10008;</span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="entypo-check">&#10004;</span>
                  </label>
                </div>
              </div>
              <div>
                <p class="title">
                  Report a problem
                </p>
                <button>Report</button>
              </div>
            </div>
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
        <div class="but1">
          <img src="../assets/img/settings-b.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/heads";

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
  margin-top: 1%;
  margin-left: 9%;
  justify-content: space-between;
}
.langage {
  display: flex;
  justify-content: space-between;
}
.langue {
  margin-top: 9%;
}
.log {
  margin-left: 42%;
  margin-top: 3%;
}
.box {
  background-color: #adedfd;
  border-radius: 25px;
  padding: 1px;
  height: 600px;
  width: 90%;
}
.décal button {
  border: 3px solid rgba(0, 0, 0, 0);
  background-color: rgba(74, 198, 255, 0.534);
  font-size: 21px;
  border-radius: 100px;
  height: 50px;
  width: 250px;
  margin-left: 70%;
  transform: translate(0, -80%);
}
.slider {
  border: 3px solid black;
}
.gear img {
  width: 7%;
  margin-left: 45.5%;
  margin-top: 1.5%;
}
.décal {
  margin-left: 11%;
  width: 80%;
}
.title {
  margin-top: 8%;
  font-size: 200%;
  font-weight: bold;
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
.but1 {
  background: #adedfd;
  width: 33%;
  border-left: 3px solid #a6a6a6;
  border-right: 3px solid #a6a6a6;
}
.switch {
  margin-left: 70%;
  transform: translate(0%, -70px);
}
.switche {
  transform: translate(0%, 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65%;
}
.switche input[type="radio"].demo5 {
  display: none;
}
.switche input[type="radio"].demo5 + label {
  position: relative;
  padding-left: 1.3rem;
}
.switche input[type="radio"].demo5 + label::before,
.switche input[type="radio"].demo5 + label::after {
  display: block;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
}
.switche input[type="radio"].demo5 + label::before {
  border: 1px solid #00b7e8;
  background-color: #eee;
}
.switche input[type="radio"].demo5:checked + label::after {
  background-color: #00b7e8;
}
[class*="entypo-"]:before {
  font-family: "entypo", sans-serif;
}
.buka {
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  opacity: 0;
  -webkit-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.buka a {
  color: #6fcbed;
  text-decoration: none;
}
#check:checked ~ .buka {
  opacity: 1;
  letter-spacing: 2px;
}
.switch input[type="checkbox"] {
  display: none;
}
#loadcheck {
  position: absolute;
  left: 0;
  right: 0;
  margin: 30px auto;
}
.loadcheck {
  width: 165px;
  height: 40px;
  font-size: 35px;
}
.loadcheck span {
  float: left;
}
.load {
  display: block;
  width: 7px;
  height: 7px;
  margin: 20px 5px;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
}
.load:nth-child(2) {
  background: #db1536;
}
.load:nth-child(3) {
  background: rgba(219, 21, 54, 0.7);
}
.load:nth-child(4) {
  background: rgba(219, 21, 54, 0.5);
}
.load:nth-child(5) {
  background: rgba(219, 21, 54, 0.3);
}
.load:nth-child(6) {
  background: rgba(219, 21, 54, 0.1);
}
span[class*="entypo"] {
  cursor: pointer;
}
span[class*="cancel"] {
  font-size: 40px;
  color: #db1536;
  transition: 0.5s;
  transition-delay: 0.1s;
}
span[class*="check"] {
  color: rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  transition-delay: 0.1s;
}
#check:checked + .loadcheck .entypo-check {
  color: #58d37b;
}
#check:checked + .loadcheck .entypo-cancel {
  color: rgba(0, 0, 0, 0.1);
}
#check:checked + .loadcheck .load:nth-child(2) {
  background: rgba(88, 211, 123, 0.1);
}
#check:checked + .loadcheck .load:nth-child(3) {
  background: rgba(88, 211, 123, 0.3);
}
#check:checked + .loadcheck .load:nth-child(4) {
  background: rgba(88, 211, 123, 0.5);
}
#check:checked + .loadcheck .load:nth-child(5) {
  background: rgba(88, 211, 123, 0.7);
}
#check:checked + .loadcheck .load:nth-child(6) {
  background: #58d37b;
}
#check1:checked + .loadcheck .entypo-check {
  color: #58d37b;
}
#check1:checked + .loadcheck .entypo-cancel {
  color: rgba(0, 0, 0, 0.1);
}
#check1:checked + .loadcheck .load:nth-child(2) {
  background: rgba(88, 211, 123, 0.1);
}
#check1:checked + .loadcheck .load:nth-child(3) {
  background: rgba(88, 211, 123, 0.3);
}
#check1:checked + .loadcheck .load:nth-child(4) {
  background: rgba(88, 211, 123, 0.5);
}
#check1:checked + .loadcheck .load:nth-child(5) {
  background: rgba(88, 211, 123, 0.7);
}
#check1:checked + .loadcheck .load:nth-child(6) {
  background: #58d37b;
}
#check2:checked + .loadcheck .entypo-check {
  color: #58d37b;
}
#check2:checked + .loadcheck .entypo-cancel {
  color: rgba(0, 0, 0, 0.1);
}
#check2:checked + .loadcheck .load:nth-child(2) {
  background: rgba(88, 211, 123, 0.1);
}
#check2:checked + .loadcheck .load:nth-child(3) {
  background: rgba(88, 211, 123, 0.3);
}
#check2:checked + .loadcheck .load:nth-child(4) {
  background: rgba(88, 211, 123, 0.5);
}
#check2:checked + .loadcheck .load:nth-child(5) {
  background: rgba(88, 211, 123, 0.7);
}
#check2:checked + .loadcheck .load:nth-child(6) {
  background: #58d37b;
}
</style>
