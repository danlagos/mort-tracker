<template>
  <v-container>
    <h1>To do List</h1>
    <v-row>
      <v-col>
        <TodoItem />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
};
</script>
