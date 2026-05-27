<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Banner -->
    <div class="relative h-[280px]">
      <img
        src="https://i.pinimg.com/1200x/a6/20/2b/a6202bb7fd8cea7886e0fb0c6709c5f8.jpg"
        alt="movie"
        class="w-full h-full object-cover opacity-40"
      />

      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-5xl font-bold text-red-600">ABOUT US</h1>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-5xl mx-auto p-10">
      <!-- Intro -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-red-500 mb-4 text-center mt-5">
          Welcome to Website Movie
        </h2>

        <p class="text-gray-300 text-lg leading-8">
          This is a simple movie website where users can explore popular movies,
          discover new releases, and find entertainment anytime and watch for
          free users can watch anytime, any hour , every second and from
          anywhere .
        </p>
      </div>

      <!-- Features -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-zinc-900 p-6 rounded-2xl hover:scale-105 duration-300">
          <h3 class="text-2xl font-semibold text-red-400 mb-3">
            Browse Movies
          </h3>

          <p class="text-gray-300">
            Explore different movie collections and trending films.
          </p>
        </div>

        <div class="bg-zinc-900 p-6 rounded-2xl hover:scale-105 duration-300">
          <h3 class="text-2xl font-semibold text-red-400 mb-3">
            Movie Ratings
          </h3>

          <p class="text-gray-300">
            Check ratings and information about your favorite movies.
          </p>
        </div>

        <div class="bg-zinc-900 p-6 rounded-2xl hover:scale-105 duration-300">
          <h3 class="text-2xl font-semibold text-red-400 mb-3">Easy Search</h3>

          <p class="text-gray-300">
            Quickly search and discover movies with a simple interface.
          </p>
        </div>
      </div>

      <!-- Mission -->
      <div class="bg-zinc-900 rounded-2xl p-8 mb-10">
        <h2 class="text-3xl font-bold text-red-500 mb-4">Our Mission</h2>

        <p class="text-gray-300 text-lg leading-8">
          We want to create a clean and modern platform where movie lovers can
          easily discover and enjoy movies online.
        </p>
      </div>

      <!-- Developer -->
      <div class="text-center border-t border-zinc-700 pt-6">
        <p class="text-gray-400 text-lg">
          Designed & Developed by
          <span class="text-red-500 font-semibold"> Group Assignment!!! </span>
        </p>
      </div>
    </div>
  </div>
</template>
