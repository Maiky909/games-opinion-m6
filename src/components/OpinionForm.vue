<template>
  <form @submit.prevent="submitForm" class="opinion-form">
    <input
      v-model="opinion.author"
      type="text"
      class="form-control mb-3"
      placeholder="Your Name"
      required />
    <textarea
      v-model="opinion.text"
      class="form-control mb-3"
      placeholder="Write your opinion here..."
      required>
    </textarea>
    <button type="submit" class="btn btn-primary w-100">
      {{ isEditing ? "Update Opinion" : "Submit Opinion" }}
    </button>
  </form>
</template>

<script>
export default {
  name: "OpinionForm",
  props: {
    initialOpinion: {
      type: Object,
      default: () => ({ text: "", author: "" }),
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      opinion: { ...this.initialOpinion }, // Datos del formulario
    };
  },
  methods: {
    submitForm() {
      // Emitir evento con la opinión
      this.$emit("submit-opinion", this.opinion);
      // Limpiar el formulario después de enviar
      if (!this.isEditing) {
        this.opinion = { text: "", author: "" };
      }
    },
  },
  watch: {
    initialOpinion: {
      deep: true,
      handler(newVal) {
        this.opinion = { ...newVal }; // Actualizar datos cuando cambien
      },
    },
  },
};
</script>

<style>
textarea,
input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
