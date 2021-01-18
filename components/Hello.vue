<template>
  <div>{{ message }}</div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup () {
    const message = ref('hello')

    return {
      message
    }
  }
})
</script>
