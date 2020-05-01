<template>
  <div class="bg-white rounded-md shadow-cardSlim">
    <p class="px-10 py-5 text-xl font-bold border-b border-gray-100">Change password</p>
    <div class="p-10">
      <div class="grid grid-cols-1 gap-6">
        <div class="form-row">
          <label class="required" for="first_name">Old password</label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div class="form-row">
          <label class="required" for="first_name">New password</label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div class="form-row">
          <label for="first_name">Confirm new password</label>
          <input type="text" name="" id="">
        </div>
      </div>
      <Button modifier="secondary" size="small-wide" text="update password" class="mt-6"></Button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>