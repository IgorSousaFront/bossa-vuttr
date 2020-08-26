<template>
  <header>
    <h1 class="header-brand">{{ nameBrand }}</h1>
    <h4 class="header-description">{{ description }}</h4>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    nameBrand: {
      type: String,
      required: true,
      default: 'Nome da feramenta'
    },
    description: {
      type: String,
      required: false,
      default: 'Descrição breve da ferramenta'
    }
  }
}
</script>

<style lang="scss">
header {
  padding: 30px 0;
}

.header-brand {
  text-transform: uppercase;
  margin-bottom: 10px;
}
</style>