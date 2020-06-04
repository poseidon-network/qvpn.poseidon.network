<template>
  <div class="view android">
    <h3 class="title"><img src="../assets/android-dark.svg" alt=""> Android</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>Download v2rayNG</h3>
        <p class="info">You can download v2rayNG here: <a href="https://play.google.com/store/apps/details?id=com.v2ray.ang&hl=en" target="_blank">Google Play Store</a></p>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>Save Config QRCode to your album</h3>
        <img class="s" src="../assets/qrcode.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>Click "+" icon, and tap "Import config from QRcode"</h3>
        <img class="s" src="../assets/and-1.png" alt="" />
        <img class="s" src="../assets/and-2.png" alt="" />
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>Accept connection request</h3>
        <p class="info">
        </p>
        <img class="s" src="../assets/and-3.png" alt="">
      </div>
      <div>
        <h3><span class="number">5</span>Download Disney+ App</h3>
        <div class="caution">You will need to have a United States Google Play Account to download the app.</div>
        <p class="info">Go to <a href="https://play.google.com/store/apps/details?id=com.disney.disneyplus&hl=en_US" target="_blank">Google Play Store</a> download Disney+ and sign up an account.<br/>If you’d like to take a trial of watching Disney+, our community supports you for Disney + free trial. Come join us!</p>
        <img class="s" src="../assets/and-4.png" alt="">
      </div>
      <div class="done"><h4>🎉 ALL DONE! ENJOY.</h4></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Android',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style lang="scss">
  #nav {
    .btn {
      color: rgba($color: #fff, $alpha: .4);
       &::before {
        opacity: .4 !important;
      }
    }
  }
  #nav a.router-link-exact-active {
    color: rgba($color: #fff, $alpha: 1);
    &::before {
      opacity: 1 !important;
    }
  }
</style>
