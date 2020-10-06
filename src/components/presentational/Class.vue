<template>
  <div class="item-class-accordion">
    <div :class="{ 'is-opened': isAccordionOpened }" class="item-class">
      <a
        class="item-class-name"
        @click.prevent="isAccordionOpened = !isAccordionOpened"
      >
        {{ title }}
        <small class="item-count">({{ itemLength }})</small>
      </a>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isAccordionOpened" class="item-list">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    itemLength: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isAccordionOpened: false
    }
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.height = '0'
    },
    enter(el: HTMLElement) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el: HTMLElement) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el: HTMLElement) {
      el.style.height = '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.item-class-accordion {
  border-bottom: 1px solid #ddd;
}

.item-class {
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  &:hover {
    background-color: #f7f7f7;
  }

  .item-class-name {
    padding: 0.65rem;
    width: 100%;
    color: #333;
    text-decoration: none;
    text-align: left;
    cursor: pointer;

    .icon {
      margin: 0 0.65rem;
      transition: all 0.1s ease-in-out;
    }

    .item-count {
      color: #999;
    }
  }
}

.is-opened {
  .item-class-name {
    .icon {
      transform: rotate(90deg);
    }
  }
}

.item-list {
  transition: height 0.15s ease-in-out;
  overflow: hidden;
}
</style>
