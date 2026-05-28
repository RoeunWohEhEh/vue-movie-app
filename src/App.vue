<template>
  <nav
    class="bg-gray-900 text-white flex justify-between items-center px-6 py-4 font-sans border-slate-200 sticky top-0 z-50"
  >
    
    <div class="flex items-center gap-2">
      <img
        src="@/assets/img/film.png"
        alt="Logo"
        class="w-10 brightness-0 invert"
      />
      <a href="#"
        class="text-aqua text-2xl font-bold tracking-wide hover:text-yellow-500"
      >
        CinemaGo
      </a>
    </div>

    <div class="hidden md:flex items-center gap-8">
      <RouterLink
        to="/"
        class="hover:text-yellow-500 transition-colors hover:translate-y-0.5"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/movie"
        class="hover:text-yellow-500 transition-colors hover:translate-y-0.5"
      >
        Movie
      </RouterLink>

      <RouterLink
        to="/about"
        class="hover:text-yellow-500 transition-colors hover:translate-y-0.5"
      >
        About
      </RouterLink>

      <RouterLink
        to="/contact"
        class="hover:text-yellow-500 transition-colors hover:translate-y-0.5"
      >
        Contact
      </RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <RouterLink
        to="/signin"
        class="hover:text-yellow-500 transition-colors text-sm font-medium"
      >
        Sign In
      </RouterLink>

      <RouterLink
        to="/movie"
        class="bg-white text-black hover:bg-yellow-500 hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-semibold"
      >
        Get Started
      </RouterLink>
    </div>
  </nav>

  <RouterView :key="$route.fullPath"></RouterView>
</template>

<script setup>
</script>

<style scoped>
</style>