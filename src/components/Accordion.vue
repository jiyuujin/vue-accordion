<template>
  <div v-if="filteredDetail.length !== 0">
    <div v-if="labelText" class="atoms-accordion-label">
      {{ labelText }}
    </div>
    <div v-cloak>
      <presentational-class :title="title" :item-length="filteredDetail.length">
        <presentational-list-item
          v-for="(detail, index) in filteredDetail"
          :key="index"
          :item-id="detail['itemId']"
          :item-name="getItemName(detail['itemId'])"
          :handle-click-callback="updateItemClass"
        />
      </presentational-class>
    </div>
  </div>
</template>

<script lang="ts">
import PresentationalClass from './presentational/Class.vue'
import PresentationalListItem from './presentational/ListItem.vue'

export default {
  components: {
    PresentationalClass,
    PresentationalListItem
  },
  props: {
    labelText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    filteredDetail(): unknown {
      return this.items
    }
  },
  methods: {
    getItemName(id: string) {
      let name = ''
      this.items.map((item: any) => {
        if (item.itemId === id) {
          name = item.itemName
        }
      })
      return name
    },
    updateItemClass(id: string) {
      this.$emit('handle-item-class', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.atoms-accordion-label {
  margin-top: 1rem;
  padding: 0 0.6rem 0.6rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  color: #007bc7;
}
</style>
