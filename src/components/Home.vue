<template>
  <div>
    <diamond top="70%" left="-10%" scale="600px"
             color="rgba(200,210,255,1)" z="0"></diamond>
    <diamond top="50%" left="80%" scale="200px"
             color="rgba(200,50,200,1)" z="1"></diamond>
    <diamond top="20%" left="20%" scale="60px"
             color="rgba(100,200,200,1)" z="2"></diamond>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container center">
          <h1 class="title">Jack Bonaguro</h1>
          <p class="subtitle">Computer Science Student at Georgia Tech</p>
        </div>
      </div>
    </section>
    <section id="About" class="section h100v">
      <div class="container p4">
        <h2 class="has-text-dark">About</h2>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Graduation</p>
              <p>December 2020</p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div class="level-item has-text-centered p4">
            <div>
              <p class="heading">Organizations</p>
              <p>Blockchain & Cryptocurrency</p>
              <p>at Georgia Tech</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Threads</p>
              <p>Systems & Architectures</p>
              <p>Devices</p>
            </div>
          </div>
        </nav>
        <p class="px4">
          I'm Jack.
        </p>
        <p class="px4">
          I do Computer Science, more specifically I learn about <strong>Operating Systems</strong>
          and make <strong>Decentralized Applications</strong>. There is a brave new world in Tech,
          and I try to learn something new every day. And the best way to learn is by doing: check
          out my projects below to see what technologies I'm currently experimenting with.
        </p>
      </div>
    </section>
    <section id="Projects" class="section h100v">
      <projects></projects>
    </section>
  </div>
</template>

<script>
import diamond from '@/components/Diamond';
import projects from '@/components/Projects';

export default {
  name: 'Home',
  components: {
    diamond,
    projects,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/stylesheets/main';

  /* .splash {
    height: 100vh;
  } */

  .title {
    font-size: 32pt;
    line-height: 48pt;
    margin-top: 0;
    color: $primary2;
  }

  .h100v {
    min-height: 100vh;
  }
</style>
