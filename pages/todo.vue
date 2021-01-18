<template>
  <div>
    Todo List
    <div>
      <input v-model="text" type="text" data-cy="add-todo-input" @keypress="addTodo">
    </div>
    <div>
      <ul>
        <li v-for="todo in list" :key="todo.id" data-cy="todo-item">
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const text = ref('')
    const list = ref<any[]>([])
    let id = 0

    function addTodo (e) {
      if (e.key === 'Enter') {
        list.value.push(reactive({
          id: ++id,
          text: text.value.trim()
        }))
      }
    }

    return {
      text,
      list,
      addTodo
    }
  }
})
</script>
