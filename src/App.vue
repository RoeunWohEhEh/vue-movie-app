<template>
  <nav class="bg-black text-white flex justify-between items-center px-6 py-4 font-sans border-slate-200 sticky top-0 z-50" >
    
    <div class="flex items-center gap-2">
      <img
        src="@/assets/img/film.png"
        alt="Logo" 
        class="w-10 brightness-0 invert"
      />
      <span class="text-aqua text-xl font-bold tracking-wide">
        Movie
      </span>
    </div>

    <div class="hidden md:flex items-center gap-8">
      <RouterLink to="/" class="hover:text-gray-300 transition-colors hover:translate-y-0.5">
        Home
      </RouterLink>
      <RouterLink to="/movie" class="hover:text-gray-300 transition-colors hover:translate-y-0.5">
        Movie
      </RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300 transition-colors hover:translate-y-0.5">
        About
      </RouterLink>
      <RouterLink to="/contact" class="hover:text-gray-300 transition-colors hover:translate-y-0.5">
        Contact
      </RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <button class="hover:text-gray-300 transition-colors text-sm font-medium">
        Sign In
      </button>
      <button class="bg-white text-black hover:bg-gray-200 transition-colors px-4 py-2 rounded-full text-sm font-semibold">
        Get Started
      </button>
    </div>

  </nav>

  <RouterView></RouterView>
</template>

<script setup>
// No script logic needed for this layout
</script>

<style scoped>
/* Note: 'body' styles usually don't work inside 'scoped' SFCs. 
  I added 'font-sans' to the nav class above, but you can import DM Sans in your main.css 
*/
</style>