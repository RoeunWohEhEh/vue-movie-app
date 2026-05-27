<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4">

    <div class="bg-black w-full max-w-md p-8 rounded-2xl shadow-2xl">

      <!-- Title -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-white">
          Create Account
        </h1>

        <p class="text-gray-400 mt-2">
          Join Movie App today
        </p>
      </div>

      <!-- Form -->
      <form class="space-y-5">

        <!-- Full Name -->
        <div>
          <label class="block text-gray-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-gray-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-gray-300 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <!-- Terms -->
        <label class="flex items-center gap-2 text-sm text-gray-400">
          <input type="checkbox" />
          I agree to the Terms & Conditions
        </label>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition"
        >
          Sign Up
        </button>

      </form>

      <!-- Login -->
      <div class="text-center mt-6 text-gray-400">
        Already have an account?

        <RouterLink
          to="/signin"
          class="text-yellow-500 hover:underline"
        >
          Sign In
        </RouterLink>
      </div>

    </div>

  </div>
</template>

<script setup>
</script>