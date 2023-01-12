<script>
export default {
  data() {
    return {
      name: "go to login",
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<template>
  <div class="mx-auto h-[100vh] flex justify-center items-center">
    <button
      @click="goToLogin"
      class="
        text-3xl text-white
        bg-[#001233]
        rounded-2xl
        p-2
        hover:bg-slate-700
      "
    >
      GO TO LOGIN
    </button>
  </div>
</template>