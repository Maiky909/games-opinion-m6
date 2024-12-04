<template>
  <div>
    <div v-if="opinions.length > 0" class="accordion" id="opinionsAccordion">
      <h5 class="text-center mt-5">You Can Read the Opinions Here :</h5>
      <div
        v-for="(opinion, index) in opinions"
        :key="opinion.id"
        class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + opinion.id"
            :aria-expanded="index === 0 ? true : false"
            :aria-controls="'collapse' + opinion.id">
            Opinion written by: {{ opinion.author }}
          </button>
        </h2>
        <div
          :id="'collapse' + opinion.id"
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
          data-bs-parent="#opinionsAccordion">
          <div class="accordion-body">
            <p><strong>Comment:</strong> {{ opinion.text }}</p>

            <button
              class="btn btn-warning btn-sm me-3"
              @click="editOpinion(opinion)">
              Edit
            </button>

            <button
              class="btn btn-danger btn-sm"
              @click="deleteOpinion(opinion.id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-danger mt-5">
      No opinions yet... Be the first to share one!
    </div>
  </div>
</template>

<script>
export default {
  name: "OpinionList",
  props: {
    opinions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteOpinion(id) {
      // Emitir evento al eliminar una opinión
      this.$emit("delete-opinion", id);
    },
    editOpinion(opinion) {
      // Emitir evento al editar una opinión
      this.$emit("edit-opinion", opinion);
    },
  },
};
</script>

<style>
.alert {
  text-align: center;
}
.accordion {
  margin-top: 2rem;
}
</style>
