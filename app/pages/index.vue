<template>
  <div class="container">
    <div class="wrapper">
      <Header nameBrand="Vuttr" descriptions="Very Useful Tools to Remember"/>
      <h1>{{ info }}</h1>
      <section class="search-bar">
        <div class="search">
          <input type="search">
          <input type="checkbox" id="tags-only">
          <label for="tags-only">Search in tags only</label>
        </div>
        <div class="add-button">
          <button>
            Add
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
const axios = require('axios').default;

export default {
  components: {
    Header
  },
  data() {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/tools')
      .then(response => (this.info = response))
  }
}
</script>

<style lang="scss">
.wrapper {
  margin: 100px 0 40px;
}

header {
  padding: 30px 0;
}

.header-brand {
  text-transform: uppercase;
  margin-bottom: 10px;
}
</style>

