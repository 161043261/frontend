<template>
  <div id="app">
    <app-content></app-content>
  </div>
</template>

<script>
import content from "./components/content"

export default {
  name: "PlantDiseaseDetection",
  components: {
    "app-content": content
  },
}
</script>