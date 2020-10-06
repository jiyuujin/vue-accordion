<template>
  <accordion
    label-text="Front"
    title="Markup"
    :items="itemClasses"
    @handle-item-class="updateItemClass"
  />
</template>

<script lang="ts">
import Accordion from './components/Accordion.vue'

import { items } from './mock'

export default {
  components: {
    Accordion
  },
  computed: {
    itemClasses() {
      return items
    }
  },
  methods: {
    updateItemClass() {
      //
    }
  }
}
</script>
