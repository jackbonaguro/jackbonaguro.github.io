<template>
  <div>
    <div class="w100v">
      <diamond top="70%" left="-10%" scale="600px"
                  color="rgba(210,220,255,1)" z="0"></diamond>
      <diamond top="50%" left="80%" scale="200px"
               color="rgba(200,50,200,1)" z="0"></diamond>
      <diamond top="20%" left="20%" scale="60px"
               color="rgba(100,200,200,1)" z="0"></diamond>
    </div>
    <section id="Home" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container center">
          <h1 class="title">Jack Bonaguro</h1>
          <p class="subtitle">Computer Science Student at Georgia Tech</p>
          <!--ul>
            <li class="icon px4">
              <a href="https://github.com/jackbonaguro">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="icon px4">
              <a href="https://twitter.com/jackbonaguro">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="icon px4">
              <a href="https://medium.com/@jbonaguro2">
                <i class="fab fa-medium"></i>
              </a>
            </li>
          </ul-->
          <nav class="level my0 py0">
            <div class="level-item"></div>
            <div class="level-item"></div>
            <div class="level-item"></div>
            <div class="level-item"></div>
            <div class="level-item has-text-centered">
              <div>
                <p class="icon px4">
                  <a href="https://github.com/jackbonaguro">
                    <i class="fab fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="icon px4">
                  <a href="https://twitter.com/jackbonaguro">
                    <i class="fab fa-twitter"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="icon px4">
                  <a href="https://medium.com/@jbonaguro2">
                    <i class="fab fa-medium"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="level-item"></div>
            <div class="level-item"></div>
            <div class="level-item"></div>
            <div class="level-item"></div>
          </nav>
        </div>
      </div>
    </section>
    <div class="w100v">
      <diamond top="140%" left="80%" scale="700px"
               color="rgba(220,250,250,1)" z="0"></diamond>
      <diamond top="225%" left="10%" scale="80px"
               color="rgba(200,50,200,1)" z="0"></diamond>
      <diamond top="115%" left="95%" scale="150px"
               color="rgba(150,180,255,1)" z="0"></diamond>
    </div>
    <section id="About" class="section h100v">
      <div class="container px4">
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
        <div class="p4">
          <div class="level">
            <div class="level-left">Hometown:</div>
            <div class="level-right">Chicago, IL</div>
          </div>
          <div class="level">
            <div class="level-left">Current Favorite Tech:</div>
            <div class="level-right"><a href="https://acss.io/">
              Atomic CSS</a>&nbsp;or&nbsp;<a href="https://www.parity.io/substrate/">
              Parity Substrate
            </a></div>
          </div>
          <div class="level">
            <div class="level-left">Who should I follow:</div>
            <div class="level-right"><a href="https://twitter.com/matthew_d_green"
              class="is-info">
              @matthew_d_green
            </a>&nbsp;for no nonsense</div>
          </div>
        </div>
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
    color: $primary;
  }

  .h100v {
    min-height: 100vh;
  }

  h2 {
    color: $primary;
  }
</style>
