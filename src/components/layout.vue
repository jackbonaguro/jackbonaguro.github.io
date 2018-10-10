<template>
  <div>
    <nav class="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" data-aria-label="menu"
           data-aria-expanded="false" data-target="menu" :class="{'is-active': menuActive}"
           v-on:click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>


      <div id="menu" class="navbar-menu" :class="{'is-active': menuActive}">
        <div
          active-class="is-active"
          :offset="80"
          :duration="800"
          bezier-easing-value=".5,0,.35,1"
          class="navbar-start">
          <div class="navbar-item">
            <a href="#Section1" class="navbar-item scrollactive-item">
              Section 1
            </a>
          </div>
          <div class="navbar-item">
            <a href="#Section2" class="navbar-item scrollactive-item">
              Section 2
            </a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/" class="navbar-item">Home</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/bulma" class="navbar-item">Bulma</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !(this.menuActive);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Yellowtail');

  .brand {
    font-family: 'Yellowtail', cursive;
    font-size: 28px;
    font-weight: bold;
    color: #529;
  }
</style>
