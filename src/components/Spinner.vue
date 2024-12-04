<template>
  <div class="spinner-container">
    <span class="loader">L &nbsp; ading...</span>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.loader {
  display: inline-block;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #000;
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  left: 34px;
  bottom: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #000;
  border-bottom-color: #0d6efd;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
}
</style>
