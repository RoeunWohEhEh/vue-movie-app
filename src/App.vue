<template>
  <div class="bg-blue-600 flex gap-6 p-4">

    <RouterLink to="/" class="text-white font-bold">
      Home
    </RouterLink>

    <RouterLink to="/movie" class="text-white font-bold">
      Movie
    </RouterLink>

    <RouterLink to="/about" class="text-white font-bold">
      About
    </RouterLink>

    <RouterLink to="/contact" class="text-white font-bold">
      Contact
    </RouterLink>

  </div>

  <RouterView />
</template>