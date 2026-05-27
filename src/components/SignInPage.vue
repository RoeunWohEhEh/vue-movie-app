<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    
    <div class="bg-black w-full max-w-md p-8 rounded-2xl shadow-2xl">
      
      <!-- Title -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-white">
          Sign In
        </h1>

        <p class="text-gray-400 mt-2">
          Welcome back to Movie App
        </p>
      </div>

      <!-- Form -->
      <form class="space-y-6">

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
            placeholder="Enter your password"
            class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <!-- Remember -->
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-gray-400">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" class="text-yellow-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition"
        >
          Sign In
        </button>

      </form>

      <!-- Register -->
      <div class="text-center mt-6 text-gray-400">
        Don’t have an account?

        <a href="#" class="text-yellow-500 hover:underline">
          Sign Up
        </a>
      </div>

    </div>

  </div>
</template>

<script setup>
</script>