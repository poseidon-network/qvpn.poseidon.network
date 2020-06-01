<template>
  <div class="view windows">
    <h3 class="title"><img src="../assets/windows-dark.svg" alt=""> Windows</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>Download v2rayN</h3>
        <p class="info">You can download the v2rayN here: <a href="/assets/v2rayN.zip" download="v2rayN.zip" target="_blank"> v2rayN.zip</a></p>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>Install v2rayN</h3>
        <p class="info">Once downloaded, unzip the archive to a location you prefer.<br> You can then go ahead and open the “v2rayN.exe” file.</p>
        <img src="../assets/windows-1.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>Copy Configuration</h3>
        <div class="config">
          <h3>Your Configuration</h3>
          <div class="input" id="copy-input" v-on:click="Copy">
            <div id="copy">Tab to copy</div>
            <div class="input-text">vmess://eyJwb3J0IjoiMzI0NDMiLCJwcyI6IkRpc25leVBsdXNfVVMiLCJ0bHMiOiJub25lIiwiaWQiOiI1MzFkNTBjMS0zODU1LTQ3MDMtOTRkYi1hNWQyM2Y5ZWU2ZDYiLCJhaWQiOiI2NCIsInYiOiIyIiwiaG9zdCI6IiIsInR5cGUiOiJub25lIiwicGF0aCI6IiIsIm5ldCI6InRjcCIsImFkZCI6ImRpc25leS4zcS52YyJ9</div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>Import bulk URL from clipboard to the v2rayN toolbar.</h3>
        <img src="../assets/windows-2.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">5</span>Setup Http proxy</h3>
        <p class="info">Select the menu "Http proxy" and then select "global mode"</p>
        <img src="../assets/windows-3.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">6</span>Set the server you imported as active server</h3>
        <img src="../assets/windows-4.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>Sign up your Disney+ Account</h3>
        <p class="info">Go to <a href="https://www.disneyplus.com/home" target="_blank">Disney+ Account</a> and sign up account.<br/>If you’d like to take a trial of watching Disney+, our community supports you for Disney + free trial. Come join us!</p>
      </div>
      <div class="done"><h4>🎉 ALL DONE! ENJOY.</h4></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Copy',
  methods: {
    Copy () {
      CopyToClipboard('vmess://eyJwb3J0IjoiMzI0NDMiLCJwcyI6IkRpc25leVBsdXNfVVMiLCJ0bHMiOiJub25lIiwiaWQiOiI1MzFkNTBjMS0zODU1LTQ3MDMtOTRkYi1hNWQyM2Y5ZWU2ZDYiLCJhaWQiOiI2NCIsInYiOiIyIiwiaG9zdCI6IiIsInR5cGUiOiJub25lIiwicGF0aCI6IiIsIm5ldCI6InRjcCIsImFkZCI6ImRpc25leS4zcS52YyJ9', true, 'Copied!')
      $('#copy').html('Copied!')
      setTimeout(function () { $('#copy').html('Tab to copy') }, 1600)

      function CopyToClipboard (value, showNotification, notificationText) {
        var $temp = $('<input>')
        $('body').append($temp)
        $temp.val(value).select()
        document.execCommand('copy')
        $temp.remove()

        if (typeof showNotification === 'undefined') {
          showNotification = true
        }
        if (typeof notificationText === 'undefined') {
          notificationText = 'Copied to clipboard'
        }

        var notificationTag = $('div.copy-notification')
        if (showNotification && notificationTag.length === 0) {
          notificationTag = $('<div/>', { class: 'copy-notification', text: notificationText })
          $('body').append(notificationTag)

          notificationTag.fadeIn(function () {
            setTimeout(function () {
              notificationTag.fadeOut(function () {
                notificationTag.remove()
              })
            }, 800)
          })
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
<style scoped lang="scss">

</style>
