<template>
    <input v-model="userInput"/> {{ computed }} - {{ userInput }}
</template>
<script>
export default {
  data() {
    return {
      userInput: '',
      computed: '-NA-'
    }
  }
}
</script>