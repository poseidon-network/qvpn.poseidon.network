<template>
  <div class="view ios">
    <h3 class="title"><img src="../assets/ios-dark.svg" alt=""> iOS</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>Download Shadowrocket</h3>
        <p class="info">You can download Shadowrocket here: <a href="https://apps.apple.com/tw/app/shadowrocket/id932747118" target="_blank">Apple Store</a></p>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>Save Config QRCode to your album</h3>
        <img class="s" src="../assets/qrcode.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>Import QRcode from your album</h3>
        <p class="info">
          Click scan icon in the Upper left corner, and scan QRcode.<br>You can also save QRcode and import the QRcode from your album to Shadowrocket.
        </p>
        <img class="s" src="../assets/ios-1.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>Turn on Disney+ and allow Shadowrocket to add configuration</h3>
        <img class="s" src="../assets/ios-2.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">5</span>Go to setting and turn on VPN configuration</h3>
        <img class="s" src="../assets/ios-3.gif" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">6</span>Download Disney+ App</h3>
        <div class="caution">You will need to have a United States Apple Account to download the app.</div>
        <p class="info">Go to <a href="https://apps.apple.com/us/app/disney/id1446075923" target="_blank">Apple Store</a> download Disney+ and sign up an account.<br/>If you’d like to take a trial of watching Disney+, our community supports you for Disney + free trial. Come join us!</p>
      </div>
      <div class="done"><h4>🎉 ALL DONE! ENJOY.</h4></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iOS',
  props: {
    msg: String
  },
  data () {
    return {
      title: 'QVPN - iOS'
    }
  }
}
</script>

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
