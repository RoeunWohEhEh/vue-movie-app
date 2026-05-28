<template>
  <!-- video and card -->
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
    

    <div class="text-center">
      <h3 class="inline-block bg-yellow-500 text-black text-2xl font-bold tracking-tight py-1 mt-5 rounded-sm w-40 hover:bg-yellow-400">
        CinemaGo
      </h3>
      <p class="mt-4 text-gray-500">Lights off. Movie on. Happiness starts.</p>
    </div>

    <div class="w-full bg-gray-900 p-6 flex items-center justify-center">
    <div class="w-full max-w mx-auto">
      
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-6">
        
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
              
              <div class="absolute inset-0 bg-gradient-to-t from-amber-500/60 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
  <!-- video 2-->
   <section class="relative w-full h-[300px] bg-black overflow-hidden shadow-2xl">
      <video 
        class="w-full h-full object-cover opacity-60"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      >
        <source :src="video2" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-900/20"></div>

      <p class>Watch everywhere </p>
    </section>
    
  <!-- footer of movie page -->
  <footer class="bg-gray-800 text-white pt-16 pb-8 px-4 md:px-12 lg:px-24 font-sans relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      
      <div class="space-y-6">
        <div>
          <img class="logoFilm brightness-0 invert" :src="logoUrl" alt="Site Logo">
          <p class="text-xs text-gray-400 mt-1">Your Tagline here</p>
        </div>
        
        <div>
          <h3 class="text-yellow-500 font-semibold text-lg mb-2">About Us</h3>
          <p class="text-sm text-gray-300 leading-relaxed max-w-xs">
            We want to help bring talented students and unique startups together.
          </p>
        </div>
        
        <div>
          <h3 class="text-yellow-500 font-semibold text-lg mb-3">Contact Us</h3>
          <div class="space-y-2 text-sm text-gray-300">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.384 17.791l-3.765-1.613c-.61-.261-1.314-.11-1.762.338l-1.63 1.63c-3.111-1.583-5.653-4.125-7.236-7.236l1.63-1.63c.448-.448.599-1.152.338-1.762L7.346 1.756A1.5 1.5 0 005.616 1h-3A1.5 1.5 0 001.12 2.56c.725 9.948 8.617 17.84 18.565 18.565a1.5 1.5 0 001.558-1.496v-3a1.5 1.5 0 00-.859-1.338z"/>
              </svg>
              <span>+91 9999 999 999</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>youremailid.com</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-yellow-500 font-semibold text-lg mb-4">Information</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-yellow-500 transition-colors">About Us</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition-colors">More Search</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition-colors">Blog</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition-colors">Testimonials</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition-colors">Events</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-500 font-semibold text-lg mb-4">Helpful Links</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-yellow-500 transition-colors">Services</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition-colors">Supports</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition-colors">Terms & Condition</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="flex flex-col justify-between">
        <div class="space-y-4">
          <h3 class="text-white font-medium text-base">Subscribe More Info</h3>
          <div class="relative max-w-xs">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </span>
            <input 
              type="email" 
              placeholder="Enter your Email" 
              class="w-full bg-white text-black pl-10 pr-4 py-2.5 rounded-sm focus:outline-none text-sm placeholder-gray-500"
            />
          </div>
          <button class="bg-yellow-500 text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-[#e68a00] transition-colors shadow-md">
            Subscribe
          </button>
        </div>

        <div class="flex justify-end mt-6 lg:mt-0">
          <a href="#" class="bg-yellow-500 p-2 rounded-sm hover:bg-[#e68a00] transition-colors" aria-label="Back to top">
            <svg class="w-4 h-4 text-black font-bold" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </a>
        </div>
      </div>

    </div>

    <div class="border-t border-gray-800 max-w-7xl mx-auto my-6"></div>

    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      
      <div class="flex justify-center items-center gap-3 md:flex-1 md:pl-32">
        <a href="#" class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#" class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-tiktok"></i>
        </a>
        <a href="#" class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div class="text-xs text-gray-400 text-center md:text-right">
        2026 &copy; company.Ltd. All Right reserved
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import movieVideo from '@/assets/video/movie.mp4';
import movieVideo2 from '@/assets/video/movie2.mp4';

// Local Component References
const videoSource = ref(movieVideo);
const video2 = ref(movieVideo2);
//card img
const images = ref([
  { 
    id: 1, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/1200x/76/be/2c/76be2cc86df005d7be1fa1b0b3c716c9.jpg' 
  },
  { 
    id: 2, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/736x/86/2a/54/862a5494a9bab9cc7f22523507c2fabf.jpg' 
  },
  { 
    id: 3, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/736x/af/ca/a9/afcaa9068c6fcdf1e9cc9641cc85c92e.jpg' 
  },
  { 
    id: 1, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/1200x/89/eb/e6/89ebe6f7f55deae5005e1d89e1710015.jpg' 
  },
  { 
    id: 2, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/736x/0c/b8/59/0cb859bc9f84931084f0868912304f2c.jpg' 
  },
  { 
    id: 3, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/736x/94/1b/a8/941ba8bc78439f6944fa42d169ce60ac.jpg' 
  },
  { 
    id: 2, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/1200x/6f/89/65/6f8965c70f730b561ee4bf0352e2e755.jpg' 
  },
  { 
    id: 3, 
    title: 'Free for watch', 
    url: 'https://i.pinimg.com/1200x/30/01/e3/3001e3222eadc4303e03d0730ce20af6.jpg' 
  }
]);

const featuredMovie = ref({
  title: 'Michael',
  description: 'A large and lovable rabbit deals with bullying forest creatures in this iconic, beautifully animated showcase. Experience self-hosted playback streaming at peak framerates loopable indefinitely.',
});

// Cleaned up, consolidated list using your high-quality Pinterest images
const cardsList = ref([
  { id: 1, title: 'goat', year: 2026, genre: 'Action', rating: '8.5', poster: 'https://i.pinimg.com/736x/b0/fa/a2/b0faa2e1f9e9e690797a299f605636b0.jpg' },
        { id: 2, title: 'hail mary', year: 2026, genre: 'Sci-Fi', rating: '8.6', poster: 'https://i.pinimg.com/1200x/99/42/48/994248ff990568ddde53e3f61bff54cc.jpg' },
        { id: 3, title: 'hoppers', year: 2026, genre: 'Drama', rating: '8.4', poster: 'https://i.pinimg.com/736x/de/68/50/de6850bd23d754b381c23465d0762865.jpg' },
        { id: 4, title: '7 scream', year: 2026, genre: 'Sci-Fi', rating: '8.7', poster: 'https://i.pinimg.com/1200x/70/ae/10/70ae10692d5f2c923993f8b594090ffc.jpg' },
        { id: 5, title: 'avatar 3', year: 2025, genre: 'Action', rating: '8.8', poster: 'https://i.pinimg.com/1200x/cd/b4/7d/cdb47d90e4a50ca21c869bb7a220d958.jpg' },
        { id: 6, title: 'badlands', year: 2025, genre: 'Animation', rating: '9.0', poster: 'https://i.pinimg.com/736x/c9/e8/5b/c9e85bafb5654fec812df197a97ba216.jpg' },
        { id: 7, title: 'michael', year: 2025, genre: 'Action', rating: '7.5', poster: 'https://i.pinimg.com/736x/e8/fc/8b/e8fc8b7db4b2313fe4b344715ac63739.jpg' },
        { id: 8, title: 'swapped', year: 2026, genre: 'Adventure', rating: '8.0', poster: 'https://i.pinimg.com/1200x/e1/52/40/e152405eddd244b74e24931deef63228.jpg' },
        { id: 9, title: 'mickey 17', year: 2025, genre: 'Sci-Fi', rating: '8.0', poster: 'https://i.pinimg.com/736x/97/95/d5/9795d5228e2f0ed06658709ea5c0bff3.jpg' },
        { id: 10, title: 'monarch', year: 2025, genre: 'Action', rating: '8.1', poster: 'https://i.pinimg.com/736x/bc/92/5a/bc925af0eac11cc3274a187ca66a6311.jpg' },
        { id: 11, title: 'avatar', year: 2025, genre: 'Thriller', rating: '8.5', poster: 'https://i.pinimg.com/736x/e8/fc/d5/e8fcd50d5c5dc49770239f4f8f161723.jpg' },
        { id: 12, title: 'anaconda', year: 2025, genre: 'Sci-Fi', rating: '7.8', poster: 'https://i.pinimg.com/736x/b0/32/19/b032198e8bfd8d8cc1567307a128895e.jpg' }
]);
</script>