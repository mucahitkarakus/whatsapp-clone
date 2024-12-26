<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from "../src/store/user-store";
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
  if(!userStore.sub) router.push('/login')
})
</script>
