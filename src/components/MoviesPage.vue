<template>
  <div class="max-w-3xl mx-auto my-8 p-4 bg-white rounded-xl shadow-md">
    <h2 class="text-xl font-bold text-gray-800 mb-4 text-center">
      Self-Hosted Video Player
    </h2>
    
    <div class="overflow-hidden rounded-lg border border-gray-200 bg-black">
      <video 
        class="w-full h-auto aspect-video object-cover"
        controls
        preload="metadata"
      >
        <source :src="videoSource" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

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
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import { ref } from 'vue'
//video
// const videoSource=ref('src/components/03005b45d9a7_thumbsrc.mp4')
import movieVideo from '@/assets/video/movie.mp4'
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
      videoSource: movieVideo,
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