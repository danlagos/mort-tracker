<template>
  <div>
    <h1>todo item</h1>
    <v-text-field
      label="item"
      :prepend-icon="
        itemComplete
          ? 'mdi-checkbox-blank-circle'
          : 'mdi-checkbox-blank-circle-outline'
      "
      @click:prepend="itemComplete = !itemComplete"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemComplete: false,
  }),
};
</script>

<style scoped></style>
