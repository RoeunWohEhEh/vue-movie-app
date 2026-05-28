<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans antialiased">
    
    <section class="relative w-full h-[500px] bg-black overflow-hidden shadow-2xl">
      <video 
        class="w-full h-full object-cover opacity-60"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      >
        <source :src="videoSource" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-900/20"></div>

      <div class="absolute bottom-12 left-6 md:left-12 max-w-2xl space-y-4">
        <h2 class="text-4xl md:text-6xl font-black tracking-tight drop-shadow-md">
          {{ featuredMovie.title }}
        </h2>
        <div class="flex items-center gap-3 pt-2">
          <button class="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-yellow-500/20 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            Play Now
          </button>
          <button class="bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-sm border border-zinc-700 text-white font-semibold text-sm px-5 py-3 rounded-lg flex items-center gap-2 transition-all">
            More Info
          </button>
        </div>
      </div>
    </section>
    
    <div class="w-full min-h-screen bg-zinc-950 p-6 flex items-center justify-center">
    <div class="w-full max-w-6xl mx-auto">
      
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-6">
        
        <div 
          v-for="image in images" 
          :key="image.id" 
          class="relative overflow-hidden rounded-xl bg-gray-900 border border-zinc-800 shadow-lg group hover:border-zinc-700 transition-all duration-300"
        >
          <div class="aspect-video w-full overflow-hidden relative">
            <img 
              :src="image.url" 
              :alt="image.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p class="text-sm font-medium text-white tracking-wide">
                {{ image.title }}
              </p>
            </div>
          </div>
        </div>

    </div>
      
    </div>
  </div>

    <main class="max-w-[1600px] mx-auto px-6 py-12 space-y-6">
      <div class="flex items-center justify-between border-b border-zinc-800 pb-4">
        <h3 class="text-xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
          <span class="w-1 h-5 bg-yellow-500 rounded-full"></span>
          Trending Now
        </h3>
        <span class="text-xs text-zinc-400 hover:text-yellow-500 font-medium cursor-pointer transition-colors">View All &rarr;</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <RouterLink 
          v-for="item in cardsList" 
          :key="item.id"
          :to="`/moviedetail/${item.id}`"
          class="group relative bg-zinc-900 rounded-xl overflow-hidden shadow-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-2 block cursor-pointer"
        >
          <div class="relative aspect-[2/3] w-full overflow-hidden bg-zinc-800">
            <img 
              :src="item.poster" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <div class="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 text-yellow-400 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              {{ item.rating }}
            </div>

            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="p-4 bg-yellow-500 text-zinc-950 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-yellow-500/40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div class="p-4 bg-zinc-900">
            <h4 class="text-white font-bold text-sm group-hover:text-yellow-500 transition-colors duration-200 truncate">
              {{ item.title }}
            </h4>
            <div class="flex items-center gap-1.5 mt-1 text-zinc-400 text-xs font-semibold">
              <span>{{ item.year }}</span>
              <span class="inline-block w-1 h-1 bg-zinc-600 rounded-full"></span>
              <span class="truncate text-zinc-500">{{ item.genre }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import movieVideo from '@/assets/video/movie.mp4';

// Local Component References
const videoSource = ref(movieVideo);
//card img
const images = ref([
  { 
    id: 1, 
    title: 'Cinematic Preview One', 
    url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Cinematic Preview Two', 
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    title: 'Cinematic Preview Three', 
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop' 
  }
]);

const featuredMovie = ref({
  title: 'Big Buck Bunny',
  description: 'A large and lovable rabbit deals with bullying forest creatures in this iconic, beautifully animated showcase. Experience self-hosted playback streaming at peak framerates loopable indefinitely.',
});

// Cleaned up, consolidated list using your high-quality Pinterest images
const cardsList = ref([
  { id: "1", title: 'Interstellar', rating: '8.7', year: '2014', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/736x/b0/fa/a2/b0faa2e1f9e9e690797a299f605636b0.jpg' },
  { id: "2", title: 'The Dark Knight', rating: '9.0', year: '2008', genre: 'Action', poster: 'https://i.pinimg.com/1200x/99/42/48/994248ff990568ddde53e3f61bff54cc.jpg' },
  { id: "3", title: 'Inception', rating: '8.8', year: '2010', genre: 'Action', poster: 'https://i.pinimg.com/736x/de/68/50/de6850bd23d754b381c23465d0762865.jpg' },
  { id: "4", title: 'Avatar: The Way of Water', rating: '7.6', year: '2022', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/1200x/70/ae/10/70ae10692d5f2c923993f8b594090ffc.jpg' },
  { id: "5", title: 'Spirited Away', rating: '8.6', year: '2001', genre: 'Animation', poster: 'https://i.pinimg.com/1200x/cd/b4/7d/cdb47d90e4a50ca21c869bb7a220d958.jpg' },
  { id: "6", title: 'Gladiator', rating: '8.5', year: '2000', genre: 'Action', poster: 'https://i.pinimg.com/736x/c9/e8/5b/c9e85bafb5654fec812df197a97ba216.jpg' },
  { id: "7", title: 'The Matrix', rating: '8.7', year: '1999', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/736x/e8/fc/8b/e8fc8b7db4b2313fe4b344715ac63739.jpg' },
  { id: "8", title: 'Whiplash', rating: '8.5', year: '2014', genre: 'Drama', poster: 'https://i.pinimg.com/1200x/e1/52/40/e152405eddd244b74e24931deef63228.jpg' },
  { id: "9", title: 'Parasite', rating: '8.5', year: '2019', genre: 'Thriller', poster: 'https://i.pinimg.com/736x/97/95/d5/9795d5228e2f0ed06658709ea5c0bff3.jpg' },
  { id: "10", title: 'Spider-Man: Into the Spider-Verse', rating: '8.4', year: '2018', genre: 'Animation', poster: 'https://i.pinimg.com/736x/bc/92/5a/bc925af0eac11cc3274a187ca66a6311.jpg' },
  { id: "11", title: 'The Lion King', rating: '8.5', year: '1994', genre: 'Animation', poster: 'https://i.pinimg.com/736x/e8/fc/d5/e8fcd50d5c5dc49770239f4f8f161723.jpg' },
  { id: "12", title: 'Dune: Part Two', rating: '8.6', year: '2024', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/736x/b0/32/19/b032198e8bfd8d8cc1567307a128895e.jpg' }
]);
</script>