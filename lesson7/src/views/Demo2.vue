<template>
  <div>
    <h1>Demo 2, navigation and communication!</h1>
    <p>
        {{ txt }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Demo2',
  props: {
      txt: String,
  }
}
</script>

<style scoped>
  h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2em;
  }
</style>
