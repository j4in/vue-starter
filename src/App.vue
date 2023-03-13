<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import router from "./router";
import { userStore } from "./store/user_store";

const user = userStore();

if (user.name == "") {
  router.push("/login");
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
