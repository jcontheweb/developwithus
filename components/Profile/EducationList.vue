<template>
  <div>
    <!-- <EducationListItem v-for="education in educations" :key="education.id" :education="education" /> -->
  </div>
</template>

<script>
export default {
  props: {
    educations: {
      type: Array,
      required: true
    }
  },
  components: {
    EducationListItem: () => import("~/components/Profile/EducationListItem.vue")
  }
};
</script>