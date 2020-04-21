<template>
  <div class="relative">
    <div class="relative" style="padding-top: 56.666%;">
      <iframe
        class="absolute top-0"
        height="100%"
        width="100%"
        :src="`//www.youtube.com/embed/${resolve(selected).id}`"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <client-only>
      <carousel :per-page="3" :navigation-enabled="true" class="mt-2">
        <slide
          v-for="(video, index) in _videos"
          :key="index"
          :data-video="video"
          @slideclick="handleSlideClick"
          class="px-1"
        >
          <img class="w-full" :src="resolve(video).thumbnail" alt />
        </slide>
        <transition name="fade">
          <div v-if="transitioning" class="absolute inset-0 bg-black">
            <Loader />
          </div>
        </transition>
      </carousel>
    </client-only>
  </div>
</template>

<script>
const videos = [
  "https://www.youtube.com/watch?v=_4qDsAMX9ds",
  "https://www.youtube.com/watch?v=NwF5q4I12xc",
  "https://www.youtube.com/watch?v=ldQUJJKd7j8",
  "https://www.youtube.com/watch?v=nby5jgjb0Dk",
  "https://www.youtube.com/watch?v=_4qDsAMX9ds",
  "https://www.youtube.com/watch?v=NwF5q4I12xc",
  "https://www.youtube.com/watch?v=ldQUJJKd7j8",
  "https://www.youtube.com/watch?v=nby5jgjb0Dk"
];

export default {
  components: {
    Loader: () => import("~/components/ui/Loader.vue")
  },
  data() {
    return {
      videos,
      selected: videos[0],
      transitioning: false
    };
  },
  methods: {
    handleSlideClick({ video }) {
        this.selected = this.videos[this.videos.indexOf(video)];
      this.transitioning = true;
      setTimeout(() => {
        this.transitioning = false;
      }, 1000);
    },
    select(video) {
      this.selected = this.videos[this.videos.indexOf(video)];
    },
    resolve(video) {
      const id = video.split("v=")[1];
      const thumbnail = `http://img.youtube.com/vi/${id}/mqdefault.jpg`;

      return {
        thumbnail,
        id
      };
    }
  },
  computed: {
    _videos() {
      return this.videos.filter(video => video != this.selected);
    }
  }
};
</script>

<style lang="scss">
</style>