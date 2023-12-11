<template>
  <div class="m-5">
    <multiselect @input="selectedItem" v-model="selectedValues" :options="options" track-by="id" label="name" placeholder="Select options">
      <template slot="option" slot-scope="{ option }">
        <div class="row">
          <div class="col-auto">
            <img style="height: 100px !important; width: 100px !important" :src="option.imageURL" />
          </div>
          <div class="col-auto">
            {{ option.name }}
          </div>
        </div>
      </template>
    </multiselect>
  </div>
</template>

<style src="../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      selectedValues: [],
      options: [...this.$store.getters.getProducts],
    };
  },

  methods: {
    selectedItem(event) {
      console.log(event);
    },
  },
};
</script>
