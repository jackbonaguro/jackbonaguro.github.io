<template>
  <div class="container px4">
    <h2 class="is-primary has-text-right">Projects</h2>
    <div class="tabs is-fullwidth">
      <ul>
        <li v-for="tab in tabs" :key="tab" class="tab"
            v-bind:class="{'is-active': (tab === activeTab)}">
          <a v-on:click="setActiveTab(tab)">{{tab}}</a>
        </li>
      </ul>
    </div>
    <div id="tabview" :tab="getActiveTab">
      <div v-show="activeTab === 'BlockPatent'">
        <h2 class="is-primary">BlockPatent</h2>
        <p>
          Blockpatent is a Blockchain-based proof of intellectual property and documentation.
        </p>
        <p>
          My team combined a Smart Contract layer built on Ethereum with a centralized storage
          layer to tokenize document ownership. Our implementation was part of a larger trend in
          decentralized applications now referred to as 'Blockchain Notarization'.</p>
        <p>
          The code is currently not hosted publicly, however the main contract is published
          (including source code) on Ethereum's Rinkeby Testnet:
        </p>
        <div class="box level">
          <a href="https://rinkeby.etherscan.io/address/0xba023b835744b272c767e6be1ce7f8343358798f#code"
            class="level-left">
            0xba023b835744b272c767e6be1ce7f8343358798f
          </a>
          <span class="level-right tag is-success">Contract</span>
        </div>
        <p class="px4 center">
          Bitbucket: <a href="https://bitbucket.org/jbonaguro/blockpatent/src/master/">
          https://bitbucket.org/jbonaguro/blockpatent/src/master/
        </a>
        <div class="px4 content">
          Built using:
          <ul>
            <li><a href="https://ethereum.org">
              Ethereum
            </a> // <a href="https://github.com/ethereum/web3.js/">
              Web3
            </a> // <a href="https://metamask.io">
              MetaMask
            </a></li>
            <li><a href="https://ubuntu.com">
              Ubuntu
            </a> // <a href="https://nodejs.org">
              Node
            </a> // <a href="https://expressjs.com">
              Express
            </a> // <a href="https://mongodb.com">
              MongoDB
            </a></li>
            <li><a href="https://vuejs.org">
              Vue.js
            </a> // <a href="https://webpack.js.org">
              Webpack
            </a></li>
          </ul>
        </div>
      </div>
      <div v-show="activeTab === 'BCGT DAO'">
        <h2 class="is-primary">BCGT DAO</h2>
        <p>
          A <strong>Decentralized Autonomous Organization</strong> is a group of stakeholders,
          a set of assets, and fixed set of rules governing control of the organization.
        </p>
        <p>
          Ethereum has powered several of the most prominent DAOs: <a
            href="https://en.wikipedia.org/wiki/The_DAO_(organization)">The DAO</a>, <a
            href="https://makerdao.com/">MakerDAO</a>, and <a
            href="https://digix.global/">DigixDAO</a> for example.
        </p>
        <p>
          The goal of this project is to make a small DAO for the student organization I helped
          start; <a href="https://bcgatech.github.io">Blockchain & Cryptocurrency at Georgia
          Tech</a>. The goal is to provide an interface for submitting proposals, viewing and
          voting on proposals, and eventually control an endowment of Cryptoassets for investment.
        </p>
        <p>
          To date, we have experimented with distributing an ERC20 token, BuzzToken:
        </p>
        <div class="box level">
          <a href="https://rinkeby.etherscan.io/token/0x26994735000ca5718ae17ecb34ea145179444670"
             class="level-left">
            0x26994735000ca5718ae17ecb34ea145179444670
          </a>
          <span class="level-right tag is-warning">Token</span>
        </div>
        <p>
          Future efforts will go to writing the controller contract, and user interfaces / explorers
          to serve as an educational case study in decentralized application architecture.
        </p>
        <p class="px4 center">
          Github: <a href="https://github.com/BCGatech/blockchainpresentation">
          https://github.com/BCGatech/blockchainpresentation
        </a>
        </p>
      </div>
      <div v-show="activeTab === 'Slide'">
        <h2 class="is-primary">Slide</h2>
        <p>
          Slide is an open source, ad free Reddit browser for Android. It is based around the Java
          Reddit API Wrapper.
        </p>
        <p>
          My fork of Slide is a proof of concept for social media clients supporting multiple
          social platforms that follow the same format (à la <a
            href="https://play.google.com/store/apps/details?id=com.yatsuhashi.crims0n&hl=en_US">
          Cosian</a>) to improve privacy and attack
          / censorship resistance.
        </p>
        <p class="px4 center">
          Github: <a href="https://github.com/jackbonaguro/Slide">
          https://github.com/jackbonaguro/Slide
        </a>
        </p>
      </div>
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
    color: $primary;
  }
</style>
