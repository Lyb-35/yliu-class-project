<!-- eslint-disable vue/no-unused-components -->
<script>
//import JSONLab from './components/JSONLab.vue'
import HomeView from './views/RegistrationView.vue';
// eslint-disable-next-line no-unused-vars
import BHeader from './components/BHeader.vue';
/*
export default {
  name: 'app',
  components: {
    JSONLab: JSONLab
  }
};
*/
export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    HomeView: HomeView,
    BHeader: BHeader
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI';
    }
  }
}
</script>

<template>
  <!--
  <div id="app">
    <JSONLab></JSONLab>
  </div>
  -->
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <!--<LibraryRegistrationForm />-->
      <!--<JSONLab />-->
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
