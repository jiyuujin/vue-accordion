<template>
  <div class="item-list-item" @click.prevent="handleClick">
    <div class="item-name">
      {{ itemName }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    itemId: {
      type: Number,
      default: 0
    },
    itemName: {
      type: String,
      default: ''
    },
    handleClickCallback: {
      type: Function,
      default: function () {}
    }
  },
  methods: {
    handleClick() {
      this.handleClickCallback(this.itemId)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list-item {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  transition: all 0.15s linear;

  .item-name {
    padding: 0.65rem;
    padding-left: 3rem;
    width: 100%;
    text-align: left;
    cursor: pointer;

    .warehouse {
      color: #fff;
      background-color: #00aaac;
      padding: 4px 4px;
      display: inline-block;
      line-height: 100%;
      cursor: default;
      font-size: 11px;
      border-radius: 4px;
      margin-right: 4px;

      .ec {
        color: #fff;
        background-color: #ffb900;
        padding: 4px 4px;
        display: inline-block;
        line-height: 100%;
        cursor: default;
        font-size: 11px;
        border-radius: 4px;
        margin-right: 4px;

        .pause {
          color: #fff;
          background-color: #bbb;
          padding: 4px 4px;
          display: inline-block;
          line-height: 100%;
          cursor: default;
          font-size: 11px;
          border-radius: 4px;
        }
      }

      &:hover {
        background-color: #f7f7f7;
      }

      &.is-selected {
        .item-name {
          opacity: 0.5;
        }
      }

      &.is-selected-items {
        .item-name {
          padding-left: 0.65rem;
        }

        &.is-selected {
          .item-name {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
