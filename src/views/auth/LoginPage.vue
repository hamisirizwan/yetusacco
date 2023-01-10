
<script>
</script>

<template>
  <div class="flex items-center justify-center" id="container">
    <div class="">
      <h1 class="text-center mb-10 text-xl">LOGIN TO YOUR FINANCIAL SAVIOR</h1>
      <div>
        <div class="py-4 px-8">
          <div class="flex mb-4">
            <div class="w-1/2 mr-1">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="first_name"
                >First Name</label
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
                id="first_name"
                type="text"
                placeholder="Your first name"
              />
            </div>
            <div class="w-1/2 ml-1">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="last_name"
                >Last Name</label
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
                id="last_name"
                type="text"
                placeholder="Your last name"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="email"
              >Email Address</label
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
              id="email"
              type="email"
              placeholder="Your email address"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
              >Password</label
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
              placeholder="Your secure password"
            />
            <p class="text-grey text-xs mt-1">At least 6 characters</p>
          </div>
          <div class="flex items-center justify-between mt-8">
            <button
              class="
                bg-blue
                hover:bg-blue-dark
                text-white
                font-bold
                py-2
                px-4
                rounded-full
              "
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#container {
  height: 100vh;
}
</style>