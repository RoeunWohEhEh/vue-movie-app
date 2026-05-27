<template>
  <div class="min-h-screen bg-gray-900 text-white">
    
    <!-- Header -->
    <div class="bg-black py-16 text-center">
      <h1 class="text-5xl font-bold text-yellow-600">
        Contact Us
      </h1>

      <p class="text-gray-400 mt-4">
        We'd love to hear from you
      </p>
    </div>

    <!-- Contact Section -->
    <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

      <!-- Left Side -->
      <div>
        <h2 class="text-3xl font-bold mb-6">
          Get In Touch
        </h2>

        <p class="text-gray-400 leading-8 mb-8">
          If you have any questions, suggestions, or feedback about our movie website,
          feel free to contact us anytime.
        </p>

        <div class="space-y-6">

          <div class="flex items-center gap-4">
            <div class="bg-yellow-600 p-3 rounded-full">
              📍
            </div>

            <div>
              <h3 class="font-semibold text-lg">
                Address
              </h3>

              <p class="text-gray-400">
                Phnom Penh, Cambodia
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="bg-yellow-600 p-3 rounded-full">
              📧
            </div>

            <div>
              <h3 class="font-semibold text-lg">
                Email
              </h3>

              <p class="text-gray-400">
                movieapp@gmail.com
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="bg-yellow-600 p-3 rounded-full">
              📞
            </div>

            <div>
              <h3 class="font-semibold text-lg">
                Phone
              </h3>

              <p class="text-gray-400">
                +855 12 345 678
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- Right Side -->
      <div class="bg-black p-8 rounded-2xl shadow-lg">

        <form class="space-y-6">

          <div>
            <label class="block mb-2 text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              class="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label class="block mb-2 text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              class="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label class="block mb-2 text-gray-300">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              class="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-600"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-yellow-600 hover:bg-yellow-700 transition py-4 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>
</template>

<script setup>
</script>