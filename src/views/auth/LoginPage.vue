
<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      //validate inputs

      //send request
      alert(`phone is ${this.phone}\npassword is ${this.password}`);
      //clear inputs
      this.phone = "";
      this.password = "";
      //navigate to main page
      this.$router.push("/home");
    },
  },
};
</script>

<template>
  <div class="flex items-center justify-center h-[100vh]">
    <!-- form holding container -->
    <div class="">
      <h1 class="text-blue-500 text-center font-bold text-xl mb-10">LOGIN</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="phone"
            >PHONE NUMBER:</label
          >
          <input
            class="
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-grey-darker
            "
            id="phone"
            type="phone"
            placeholder="Your phone number"
            v-model="phone"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
            >PASSWORD:</label
          >
          <input
            class="
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-grey-darker
            "
            id="password"
            type="password"
            placeholder="Your password number"
            v-model="password"
          />
        </div>
        <div class="flex items-center justify-between mt-8">
          <button
            class="
              bg-blue-500
              hover:bg-blue-300
              font-bold
              py-2
              px-4
              rounded-full
              w-full
            "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
</style>