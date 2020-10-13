<template>
  <div class="">
    <h4
      class="text-2xl font-semibold tracking-tighter text-black75"
    >Lastly, let's get a profile picture!</h4>
    <p class="text-sm text-black50">(You can edit this any time)</p>
    <div class="mt-6">
      <input
        class="absolute invisible w-px"
        style="left: -9999px"
        type="file"
        ref="avatar"
        @change="onFileChange(image, $event)"
      />
      <button @click="editAvatar" class="button__avatar focus:outline-none focus:shadow-outline">
        <span
          class="block w-48 h-48 bg-no-repeat bg-cover rounded-full"
          :style="`background-image:url(${avatar})`"
        ></span>
      </button>
    </div>
    <Button @click="submit" class="mt-8" modifier="primary" size="small-wide" text="create"></Button>
    <transition name="fade2">
      <div v-if="loading" class="absolute inset-0 z-50 flex items-center justify-center rounded-md bg-white75">Loading</div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    entry: "",
    loading: false,
    image: {
      raw: null,
      image: false
    }
  }),
  created() {
    this.image.image = `/${this.profile.gender}.svg`;
  },
  methods: {
    editAvatar() {
      this.$refs.avatar.click();
    },
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.image.raw = files[0];
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = e => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(item) {
      item.image = false;
    },
    async submit() {
      const profile = this.profile;
      profile.languages = profile.languages.toString();
      profile.avatar = this.image.image;

      try {
        this.loading = true;
        const { data } = await this.$axios.$post("profile", { ...profile });
        if (this.image.raw && this.image.raw.name) {
          const fd = new FormData();
          fd.append("avatar", this.image.raw, this.image.raw.name);
          const res = await this.$axios.$post("profile/avatar", fd);
        }
        this.loading = false;
      } catch (error) {
        console.log(error.response.data.message);
        this.loading = false;
      }
    }
  },
  computed: {
    avatar() {
      return this.image.image;
    }
  }
};
</script>

<style lang="scss" scoped>
.button__avatar {
  @apply relative rounded-full;

  &:before {
    @apply flex items-center justify-center absolute inset-0 opacity-0 transition duration-200 text-white font-semibold text-lg z-10;
    content: "Edit";
  }

  &:after {
    @apply absolute inset-0 rounded-full transition duration-300  opacity-0;
    background-color: rgba(0, 0, 0, 1);
    content: "";
  }

  &:hover:after {
    @apply opacity-50;
  }

  &:hover:before {
    @apply opacity-100;
  }
}
</style>