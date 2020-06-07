<template>
  <div class="home">
    <h3>👆🏻 Select a device </h3>
    <p>Let QVPN show you a whole new world.</p>
    <img src="../assets/disney-logo-dark.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'QVPN',
  props: {
    msg: String
  },
  data () {
    return {
      title: 'QVPN'
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 30px;
}
p {
  opacity: .6;
}
#nav {
  .btn {
    color: rgba($color: #fff, $alpha: .3);
  }
}
#nav a.router-link-exact-active {
  color: rgba($color: #fff, $alpha: 1);
  &::before {
    opacity: 1 !important;
  }
}
</style>
