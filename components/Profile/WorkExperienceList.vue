<template>
  <div>
    <WorkExperienceListItem
      v-for="role in roles"
      :key="role.id"
      :role="role"
    />
  </div>
</template>

<script>
export default {
  props: {
    roles: {
      type: Array,
      required: true
    }
  },
  components: {
    WorkExperienceListItem: () =>
      import("~/components/Profile/WorkExperienceListItem.vue")
  }
};
</script>