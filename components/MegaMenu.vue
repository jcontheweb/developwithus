<template>
  <div class="relative z-50 px-4 py-2 overflow-hidden bg-indigo-900 sm:overflow-visible">
    <div id="mega-menu" class="relative max-w-5xl mx-auto">
      <div
        v-for="(link, index) in links"
        :key="index"
        @mouseenter="expanded = link.heading"
        @mouseleave="expanded = null"
        class="inline-block px-4 py-3 text-sm leading-none text-white transition duration-300 rounded-md cursor-pointer hover:bg-indigo-700"
      >
        <span class="capitalize">{{ link.heading }}</span>
        <transition name="menu">
          <div
            v-show="expanded == link.heading"
            class="absolute inset-x-0 overflow-auto rounded-md cursor-text"
            style="top: 116%; max-height: calc(100vh - 72px)"
          >
            <div class="relative p-6 bg-indigo-700 rounded-md sm:p-10">
              <div
                class="absolute inset-0 hidden bg-no-repeat opacity-25 sm:block"
                style="background-size: 170px;background-position: 89% 80%;"
                :style="`background-image: url(${link.backgroundImage})`"
              ></div>
              <div class="relative grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
                <div v-for="(child, index) in link.children" :key="index" class="pr-8 mb-6 md:mb-0 last:pr-0">
                  <p
                    class="mb-4 font-semibold leading-none text-white uppercase lg:mb-6"
                  >{{ child.heading }}</p>
                  <nuxt-link
                    v-for="(subchild, index) in child.children"
                    :key="index"
                    :to="subchild.url"
                    class="block mb-4 lg:mb-6 last:mb-0 group"
                  >
                    <p
                      class="text-sm font-semibold leading-none text-white group-hover:underline"
                      :class="subchild.classList && subchild.classList"
                    >{{ subchild.heading }}</p>
                    <p class="text-sm text-white75">{{ subchild.description }}</p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
const links = [
  {
    heading: "solutions",
    children: [
      {
        heading: "products",
        children: [
          {
            heading: "Meetings and Chat",
            description: "HD video, audio, collaboration & chat",
            url: "/"
          },
          {
            heading: "Workspaces",
            description: "Power up your conference rooms with video",
            url: "/"
          },
          {
            heading: "Phone System",
            description: "Enterprise cloud phone system",
            url: "/"
          }
        ]
      },
      {
        heading: "industries",
        children: [
          {
            heading: "Meetings and Chat",
            description: "HD video, audio, collaboration & chat",
            url: "/"
          },
          {
            heading: "Workspaces",
            description: "Power up your conference rooms with video",
            url: "/"
          },
          {
            heading: "Phone System",
            description: "Enterprise cloud phone system",
            url: "/"
          }
        ]
      },
      {
        heading: "blog",
        children: [
          {
            heading: "Get the latest insights and updates",
            url: "/",
            classList: "text-xl font-normal"
          }
        ]
      }
    ],
    backgroundImage: "/menu-bg.svg"
  },
  {
    heading: "prices",
    children: [
      {
        heading: "products",
        children: [
          {
            heading: "Meetings and Chat",
            description: "HD video, audio, collaboration & chat",
            url: "/"
          },
          {
            heading: "Workspaces",
            description: "Power up your conference rooms with video",
            url: "/"
          },
          {
            heading: "Phone System",
            description: "Enterprise cloud phone system",
            url: "/"
          }
        ]
      },
      {
        heading: "industries",
        children: [
          {
            heading: "Meetings and Chat",
            description: "HD video, audio, collaboration & chat",
            url: "/"
          },
          {
            heading: "Workspaces",
            description: "Power up your conference rooms with video",
            url: "/"
          },
          {
            heading: "Phone System",
            description: "Enterprise cloud phone system",
            url: "/"
          }
        ]
      },
      {
        heading: "blog",
        children: [
          {
            heading: "Get the latest insights and updates",
            url: "/",
            classList: "text-xl font-normal"
          }
        ]
      }
    ],
    backgroundImage: "/price-bg.svg"
  },
  {
    heading: "contact",
    children: [
      {
        heading: "products",
        children: [
          {
            heading: "Meetings and Chat",
            description: "HD video, audio, collaboration & chat",
            url: "/"
          },
          {
            heading: "Workspaces",
            description: "Power up your conference rooms with video",
            url: "/"
          },
          {
            heading: "Phone System",
            description: "Enterprise cloud phone system",
            url: "/"
          }
        ]
      },
      {
        heading: "industries",
        children: [
          {
            heading: "Meetings and Chat",
            description: "HD video, audio, collaboration & chat",
            url: "/"
          },
          {
            heading: "Workspaces",
            description: "Power up your conference rooms with video",
            url: "/"
          },
          {
            heading: "Phone System",
            description: "Enterprise cloud phone system",
            url: "/"
          }
        ]
      },
      {
        heading: "blog",
        children: [
          {
            heading: "Get the latest insights and updates",
            url: "/",
            classList: "text-xl font-normal"
          }
        ]
      }
    ],
    backgroundImage: "/contact-bg.svg"
  }
];
export default {
  data: () => ({ expanded: null, links })
};
</script>

<style lang="scss">
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s;
}
.menu-enter,
.menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(8px);
}

#mega-menu {
  .overflow-auto::-webkit-scrollbar {
    width: 7px;
    border-radius: 8px;
    margin-right: -7px;
  }

  .overflow-auto.scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }

  .overflow-auto::-webkit-scrollbar-track {
    @apply bg-indigo-700;
    border-radius: 8px;
  }

  .overflow-auto::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
  }
}
</style>