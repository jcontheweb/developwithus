<template>
  <span
    class="inline-block bg-no-repeat bg-cover rounded-full avatar"
    :class="{ 'avatar--active': is_active }"
    :style="`background-image: url(${avatar})`"
  ></span>
</template>

<script>
/*
* Pass this component the width, height, image, and active boolean
*/
export default {
  props: {
    avatar: {
      type: String,
      requried: true
    },
    is_active: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
.avatar {
  position: relative;
}

.avatar:after {
  position: absolute;
  content: "";
  top: 6.25%;
  right: 6.25%;
  height: 15%;
  width: 15%;
  background-color: #edeaea;
  border: 2px solid #fff;
  border-radius: 100%;
}

.avatar--active:after {
  background-color: #25d786;
}
</style>