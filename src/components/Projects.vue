<template>
  <div class="container p4">
    <h2 class="is-primary has-text-right">Projects</h2>
    <div class="tabs is-fullwidth">
      <ul>
        <li v-for="tab in tabs" :key="tab"
            v-bind:class="{'is-active': (tab === activeTab)}">
          <a v-on:click="setActiveTab(tab)">{{tab}}</a>
        </li>
      </ul>
    </div>
    <div id="tabview" :tab="getActiveTab">
      <div v-show="activeTab === 'BlockPatent'">
        <h2 class="is-primary">BlockPatent</h2>
        <p>Blockpatent is a Blockchain-based proof of intellectual property and documentation.</p>
        <p>My team combined a Smart Contract layer built on Ethereum with a centralized storage
        layer to tokenize document ownership. Our implementation was part of a larger trend in
          decentralized applications now referred to as 'Blockchain Notarization'.</p>
        <p class="px4 content">
          Built using:
          <ul>
            <li><a>Ethereum</a> // <a>Web3</a> // <a>MetaMask</a></li>
            <li><a>Ubuntu</a> // <a>Node</a> // <a>Express</a> // <a>Webpack</a></li>
            <li>Vue.js // AWS EC2 // Remix</li>
          </ul>
        </p>
      </div>
      <div v-show="activeTab === 'BCGT DAO'">Test BCGT DAO</div>
      <div v-show="activeTab === 'Slide'">Test Slide</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'projects',
  /* components: {
    tabview,
  }, */
  data() {
    return {
      activeTab: 'BlockPatent',
      tabs: [
        'BlockPatent',
        'BCGT DAO',
        'Slide',
      ],
    };
  },
  methods: {
    getActiveTab() {
      return this.activeTab;
    },
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/stylesheets/main';

  h2 {
    color: $primary2;
  }
</style>
