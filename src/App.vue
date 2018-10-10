<template>
  <div id="app" class="has-navbar-fixed-top">
    <!--img src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-view/-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <layout></layout>
  </div>
</template>

<script>
import layout from '@/components/layout';
import $ from 'jquery';

export default {
  name: 'App',
  components: {
    layout,
  },
  mounted() {
    // On load, add class to body for padding for the fixed navbar
    // document.body.classList.add('has-navbar-fixed-top');

    // FontAwesome
    const fa = document.createElement('link');
    fa.setAttribute('rel', 'stylesheet');
    fa.setAttribute('href', 'https://use.fontawesome.com/releases/v5.3.1/css/all.css');
    fa.setAttribute('integrity', 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU');
    fa.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(fa);

    // Initialize navbar
    // $('.navbar').css('min-height', '3.25rem');
    // $('.navbar').css('height', '3.25rem');
    $('.navbar').css('background-color', 'rgba(255,255,255,0)');

    // Set up scroll handler
    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop();

      // Navbar
      if (scrollTop < 50) {
        // Initialize navbar
        // $('.navbar').css('min-height', '3.25rem');
        // $('.navbar').css('height', '3.25rem');
        $('.navbar').css('background-color', 'rgba(255,255,255,0)');
      } else if (scrollTop >= 250) {
        // $('.navbar').css('min-height', '2.25rem');
        // $('.navbar').css('height', '2.25rem');
        $('.navbar').css('background-color', 'rgba(255,255,255,.9)');
      } else {
        const navScroll = ((scrollTop - 50) / 200);
        // const navHeight = 3.25 - navScroll;
        const navOpacity = navScroll * 0.90;

        // $('.navbar').css('min-height', `${navHeight}rem`);
        // $('.navbar').css('height', `${navHeight}rem`);
        // $('.navbar-brand').css('min-height', `${navHeight}rem`);
        // $('.navbar-brand').css('height', `${navHeight}rem`);
        $('.navbar').css('background-color', `rgba(255,255,255,${navOpacity})`);
      }
    });
  },
};
</script>

<style lang="scss">
  @import './assets/stylesheets/main';

  @import url('https://fonts.googleapis.com/css?family=Fira+Sans');

  @font-face {
    font-family: "BrandonText";
    src: url("../static/fonts/BrandonText-Regular.otf");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "BrandonText";
    src: url("../static/fonts/BrandonText-Bold.otf");
    font-weight: bold;
    font-style: normal;
  }

  #app {
    font-family: 'BrandonText', sans-serif;
    overflow-x: hidden;
  }
</style>
