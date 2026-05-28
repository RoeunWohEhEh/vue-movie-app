<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    :modules="swiperModules"
    :loop="true" 
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <SwiperSlide v-for="(movie, index) in movies" :key="index">
      <div class="movie-card">
        <img :src="movie.image" :alt="movie.title">
        <div class="movie-info">
          <h1 class="font-bold">{{ movie.title }}</h1>
          <p>{{ movie.desc }}</p>
          <button class="bg-yellow-500 w-50 mt-3 p-2 rounded-sm font-bold shadow-xs hover:shadow-yellow-600">
            Watch Now
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
 
  <h1 class="bg-gray-900 text-white font-bold text-3xl p-4 hover:text-amber-400">Movie Trending</h1>

  <!-- card -->
  <section class="bg-gray-900 w-full min-h-screen p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      
      <RouterLink 
        v-for="item in card"
        :key="item.id"
        :to="`/moviedetail/${item.id}`" 
        class="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-102 transition-transform duration-300 block"
      >
        <div class="relative aspect-2/3 bg-zinc-800">
          <img :src="item.poster || item.image" :alt="item.title" class="w-full h-full object-cover">
          <span class="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
            {{ item.rating }}
          </span>
        </div>
        <div class="p-4">
          <h3 class="text-white font-semibold text-base truncate">{{ item.title }}</h3>
          <p class="text-zinc-400 text-xs mt-1">{{ item.year || item.releaseYear }} • {{ item.genre || item.genres?.[0] }}</p>
        </div>
      </RouterLink>

    </div>
  </section>

   <!-- search --> 
  <h1 class="h-25 bg-gray-900"></h1>
  <div class=" flex flex-1 items-center justify-center p-6 h-50 bg-cover bg-center bg-no-repeat" style="background-image: url('https://i.pinimg.com/1200x/92/14/8a/92148ae16c20ddbdbe85beb1e9ea6082.jpg');">
      <div class="w-full max-w-lg bg-black/40 p-4 rounded-xl backdrop-blur-xs"> <!-- Added a slight glass card for contrast -->
          <form class="sm:flex sm:items-center">
              <input 
                  id="q" 
                  name="q" 
                  class="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-yellow-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm" 
                  placeholder="Keyword" 
                  type="search" 
                  autofocus="" 
                  value=""
              >
              <button 
                  type="submit" 
                  class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                  Search
              </button>
          </form>
      </div>
  </div>

  <footer class="bg-gray-800 text-white pt-16 pb-8 px-4 md:px-12 lg:px-24 font-sans relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      
      <div class="space-y-6">
        <div>
          <img class="logoFilm brightness-0 invert" :src="logoUrl" alt="Site Logo">
          <p class="text-xs text-gray-400 mt-1">Your Tagline here</p>
        </div>
        
        <div>
          <h3 class="text-[#ff9900] font-semibold text-lg mb-2">About Us</h3>
          <p class="text-sm text-gray-300 leading-relaxed max-w-xs">
            We want to help bring talented students and unique startups together.
          </p>
        </div>
        
        <div>
          <h3 class="text-[#ff9900] font-semibold text-lg mb-3">Contact Us</h3>
          <div class="space-y-2 text-sm text-gray-300">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-[#ff9900]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.384 17.791l-3.765-1.613c-.61-.261-1.314-.11-1.762.338l-1.63 1.63c-3.111-1.583-5.653-4.125-7.236-7.236l1.63-1.63c.448-.448.599-1.152.338-1.762L7.346 1.756A1.5 1.5 0 005.616 1h-3A1.5 1.5 0 001.12 2.56c.725 9.948 8.617 17.84 18.565 18.565a1.5 1.5 0 001.558-1.496v-3a1.5 1.5 0 00-.859-1.338z"/>
              </svg>
              <span>+91 9999 999 999</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-[#ff9900]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>youremailid.com</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-[#ff9900] font-semibold text-lg mb-4">Information</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">About Us</a></li>
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">More Search</a></li>
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">Blog</a></li>
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">Testimonials</a></li>
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">Events</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-[#ff9900] font-semibold text-lg mb-4">Helpful Links</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">Services</a></li>
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">Supports</a></li>
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">Terms & Condition</a></li>
          <li><a href="#" class="hover:text-[#ff9900] transition-colors">Privacy Policy</a></li>
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
          <button class="bg-[#ff9900] text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-[#e68a00] transition-colors shadow-md">
            Subscribe
          </button>
        </div>

        <div class="flex justify-end mt-6 lg:mt-0">
          <a href="#" class="bg-[#ff9900] p-2 rounded-sm hover:bg-[#e68a00] transition-colors" aria-label="Back to top">
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
        <a href="#" class="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#" class="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-tiktok"></i>
        </a>
        <a href="#" class="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" class="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center text-black hover:bg-white transition-colors">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div class="text-xs text-gray-400 text-center md:text-right">
        2018 &copy; company.Ltd. All Right reserved
      </div>

    </div>
  </footer>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import { ref } from 'vue'

// Your 12 distinct cards with varying IDs
const card = ref([
  { id: "1", title: 'Interstellar', rating: '8.7', year: '2014', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/736x/b0/fa/a2/b0faa2e1f9e9e690797a299f605636b0.jpg' },
  { id: "2", title: 'The Dark Knight', rating: '9.0', year: '2008', genre: 'Action', poster: 'https://i.pinimg.com/1200x/99/42/48/994248ff990568ddde53e3f61bff54cc.jpg' },
  { id: "3", title: 'Inception', rating: '8.8', year: '2010', genre: 'Action', poster: 'https://i.pinimg.com/736x/de/68/50/de6850bd23d754b381c23465d0762865.jpg' },
  { id: "4", title: 'Avatar: Water', rating: '7.6', year: '2022', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/1200x/70/ae/10/70ae10692d5f2c923993f8b594090ffc.jpg' },
  { id: "5", title: 'Spirited Away', rating: '8.6', year: '2001', genre: 'Animation', poster: 'https://i.pinimg.com/1200x/cd/b4/7d/cdb47d90e4a50ca21c869bb7a220d958.jpg' },
  { id: "6", title: 'Gladiator', rating: '8.5', year: '2000', genre: 'Action', poster: 'https://i.pinimg.com/736x/c9/e8/5b/c9e85bafb5654fec812df197a97ba216.jpg' },
  { id: "7", title: 'The Matrix', rating: '8.7', year: '1999', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/736x/e8/fc/8b/e8fc8b7db4b2313fe4b344715ac63739.jpg' },
  { id: "8", title: 'Whiplash', rating: '8.5', year: '2014', genre: 'Drama', poster: 'https://i.pinimg.com/1200x/e1/52/40/e152405eddd244b74e24931deef63228.jpg' },
  { id: "9", title: 'Parasite', rating: '8.5', year: '2019', genre: 'Thriller', poster: 'https://i.pinimg.com/736x/97/95/d5/9795d5228e2f0ed06658709ea5c0bff3.jpg' },
  { id: "10", title: 'Spider-Verse', rating: '8.4', year: '2018', genre: 'Animation', poster: 'https://i.pinimg.com/736x/bc/92/5a/bc925af0eac11cc3274a187ca66a6311.jpg' },
  { id: "11", title: 'The Lion King', rating: '8.5', year: '1994', genre: 'Animation', poster: 'https://i.pinimg.com/736x/e8/fc/d5/e8fcd50d5c5dc49770239f4f8f161723.jpg' },
  { id: "12", title: 'Dune: Part Two', rating: '8.6', year: '2024', genre: 'Sci-Fi', poster: 'https://i.pinimg.com/736x/b0/32/19/b032198e8bfd8d8cc1567307a128895e.jpg' }
])
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperModules: [Autoplay],
      logoUrl: "src/components/film.png",
      movies: [
        {
          image: "https://i.pinimg.com/1200x/8a/01/59/8a015975df909a24d6b0c0d6377e1bf2.jpg",
          title: "MICHAEL",
          desc: "The early life of musician Michael Jackson, from the discovery of his talent as the lead of the Jackson Five to the artist whose creative ambition fueled a pursuit to become the biggest entertainer in the world.",
        },
        {
          image: "https://edmondtownhall.org/wp-content/uploads/2026/04/goat-1.png",
          title: "GOAT",
          desc: "A young anthropomorphic goat named Will Harris dreams of playing roar-ball, a high-intensity, animalistic version of basketball dominated by much larger, fiercer creatures.",
        },
        {
          image: "https://m.media-amazon.com/images/S/pv-target-images/52cf86f6994526923cac7dfba13b97a1b247560ccbf40edef2fd56daa24e3572.jpg",
          title: "HOPPERS",
          desc: "Scientists have discovered how to 'hop' human consciousness into lifelike robotic animals, allowing people to communicate with animals as animals.",
        },
        {
          image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQ5-l5fHQfFiVZy6zw0iTsnMVNpSA6ybc7WuQjMrFaM3pz7Xo-SYltJsFn5tmSPIDaMXtJH_pw0TAoAZEjDg9Rz_EkR0Po0tS3V0wF6K5qKnfriMwPFr_byUmPcDfXqm1MNEgKQKrib1Cldts-5Cwv-PQJg.jpg?r=3eb",
          title: "SWAPPED",
          desc: "A small woodland creature and a majestic bird, two natural sworn enemies of the Valley, magically trade places and set off on an adventure of a lifetime.",
        },
        {
          image: "https://variety.com/wp-content/uploads/2025/12/Avatar_Fire_and_Ash-vfx.jpg",
          title: "AVATAR",
          desc: "Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, who are led by the fiery Varang.",
        },
        {
          image: "https://m.media-amazon.com/images/S/pv-target-images/97cf1be17b309f9737aed20853df9222966c6b7a7c3e3f38f2e90660e28eb79c._SX1080_FMjpg_.jpg",
          title: "ANACONDA",
          desc: "A group of friends facing mid-life crises head to the rainforest with the intention of remaking their favorite movie from their youth, only to find themselves in a fight for their lives.",
        },
      ],
      card: [
        { id: 1, title: 'The Batman', year: 2022, genre: 'Action', rating: '8.5', image: 'https://i.pinimg.com/736x/b0/fa/a2/b0faa2e1f9e9e690797a299f605636b0.jpg' },
        { id: 2, title: 'Dune: Part Two', year: 2024, genre: 'Sci-Fi', rating: '8.6', image: 'https://i.pinimg.com/1200x/99/42/48/994248ff990568ddde53e3f61bff54cc.jpg' },
        { id: 3, title: 'Oppenheimer', year: 2023, genre: 'Drama', rating: '8.4', image: 'https://i.pinimg.com/736x/de/68/50/de6850bd23d754b381c23465d0762865.jpg' },
        { id: 4, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: '8.7', image: 'https://i.pinimg.com/1200x/70/ae/10/70ae10692d5f2c923993f8b594090ffc.jpg' },
        { id: 5, title: 'Inception', year: 2010, genre: 'Action', rating: '8.8', image: 'https://i.pinimg.com/1200x/cd/b4/7d/cdb47d90e4a50ca21c869bb7a220d958.jpg' },
        { id: 6, title: 'Spider-Man: Beyond the Spider-Verse', year: 2026, genre: 'Animation', rating: '9.0', image: 'https://i.pinimg.com/736x/c9/e8/5b/c9e85bafb5654fec812df197a97ba216.jpg' },
        { id: 7, title: 'Gladiator II', year: 2024, genre: 'Action', rating: '7.5', image: 'https://i.pinimg.com/736x/e8/fc/8b/e8fc8b7db4b2313fe4b344715ac63739.jpg' },
        { id: 8, title: 'Everything Everywhere All at Once', year: 2022, genre: 'Adventure', rating: '8.0', image: 'https://i.pinimg.com/1200x/e1/52/40/e152405eddd244b74e24931deef63228.jpg' },
        { id: 9, title: 'Blade Runner 2049', year: 2017, genre: 'Sci-Fi', rating: '8.0', image: 'https://i.pinimg.com/736x/97/95/d5/9795d5228e2f0ed06658709ea5c0bff3.jpg' },
        { id: 10, title: 'Mad Max: Fury Road', year: 2015, genre: 'Action', rating: '8.1', image: 'https://i.pinimg.com/736x/bc/92/5a/bc925af0eac11cc3274a187ca66a6311.jpg' },
        { id: 11, title: 'Parasite', year: 2019, genre: 'Thriller', rating: '8.5', image: 'https://i.pinimg.com/736x/e8/fc/d5/e8fcd50d5c5dc49770239f4f8f161723.jpg' },
        { id: 12, title: 'Avatar: Fire and Ash', year: 2025, genre: 'Sci-Fi', rating: '7.8', image: 'https://i.pinimg.com/736x/b0/32/19/b032198e8bfd8d8cc1567307a128895e.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
/* Keeping your custom styling untouched */
.mySwiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  background: #2563eb;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.movie-card {
  position: relative;
  width: 100%;
  height: 100%;
}
.logoFilm {
  width: 100px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.movie-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(100deg, #000000b1, #00000000, #ffbf0088); 
  padding: 20px;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  
}

.movie-info h1 {
  margin: 0 0 40px 0;
  font-size: 6rem;
  color: rgb(255, 170, 0);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.movie-info p {
  margin: 0;
  font-size: 16px;
  max-width: 600px; 
  line-height: 1.5;
}
</style>