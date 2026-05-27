<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    class="mySwiper"
  >
    <SwiperSlide v-for="(movie, index) in movies" :key="index">
      <div class="movie-card">
        <img :src="movie.image" :alt="movie.title">
        <div class="movie-info">
          <h1 class="font-bold">{{ movie.title }}</h1>
          <p>{{ movie.desc }}</p>
          <button class="btn" style="background-color: crimson; padding: 5px 10px; border-radius: 2px; font-weight:bold; margin-top: 10px;">
            Watch Now
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <h1 class="bg-black text-white font-bold p-4 text-2xl ">Movie Treding</h1>

  <section class="bg-black w-full min-h-screen p-6">
    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      
      <div
        v-for="item in card"
        :key="item.id"
        class=" bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-102 transition-transform duration-300"
      >
        <div class="relative aspect-2/3 bg-zinc-800">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
          <span class="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
            {{ item.rating }}
          </span>
        </div>
        <div class="p-4">
          <h3 class="text-white font-semibold text-base truncate">{{ item.title }}</h3>
          <p class="text-zinc-400 text-xs mt-1">{{ item.year }} • {{ item.genre }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // 1. Swiper Slider Data
      movies: [
        {
          image: "https://i.pinimg.com/1200x/8a/01/59/8a015975df909a24d6b0c0d6377e1bf2.jpg",
          title: "Avengers",
          desc: "Earth’s mightiest heroes fight to save the world.",
        },
        {
          image: "https://edmondtownhall.org/wp-content/uploads/2026/04/goat-1.png",
          title: "Batman",
          desc: "The dark knight rises to protect Gotham city.",
        },
        {
          image: "https://m.media-amazon.com/images/S/pv-target-images/52cf86f6994526923cac7dfba13b97a1b247560ccbf40edef2fd56daa24e3572.jpg",
          title: "Spider Man",
          desc: "A young hero learns responsibility and courage.",
        },
        {
          image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQ5-l5fHQfFiVZy6zw0iTsnMVNpSA6ybc7WuQjMrFaM3pz7Xo-SYltJsFn5tmSPIDaMXtJH_pw0TAoAZEjDg9Rz_EkR0Po0tS3V0wF6K5qKnfriMwPFr_byUmPcDfXqm1MNEgKQKrib1Cldts-5Cwv-PQJg.jpg?r=3eb",
          title: "Joker",
          desc: "A dark psychological story of chaos and madness.",
        },
        {
          image: "https://variety.com/wp-content/uploads/2025/12/Avatar_Fire_and_Ash-vfx.jpg",
          title: "Doctor Strange",
          desc: "Magic and multiverse collide in epic battles.",
        },
        {
          image: "https://m.media-amazon.com/images/S/pv-target-images/97cf1be17b309f9737aed20853df9222966c6b7a7c3e3f38f2e90660e28eb79c._SX1080_FMjpg_.jpg",
          title: "Thor",
          desc: "The god of thunder returns with powerful action.",
        },
      ],
      // 2. Movie Grid Data moved cleanly inside data returning function
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
  background: linear-gradient(100deg, #ffb300b1, #2564eb00); 
  padding: 20px;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Keeps text gracefully pinned to the bottom */
}

.movie-info h1 {
  margin: 0 0 5px 0;
  font-size: 3rem;
}

.movie-info p {
  margin: 0;
  font-size: 16px;
}

.btn {
  transition: all 0.2s;
  width: fit-content;
}

.btn:hover {
  box-shadow: 0 0 10px red;
}

</style>