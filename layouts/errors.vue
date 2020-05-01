<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <nuxt />
    <div class="flex items-center mt-6">
      <Button @click="$router.push('/')" class="shadow-button" modifier="secondary" size="large" text="back home"></Button>
      <Button @click="$router.push('/listings')" class="ml-4" modifier="primary" size="large" text="view developers"></Button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>