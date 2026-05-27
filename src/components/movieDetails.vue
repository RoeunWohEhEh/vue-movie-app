<template>
  <div class="min-h-screen bg-slate-900 flex flex-col justify-start">
    
    <div v-if="movie" class="w-full flex items-center justify-center p-4 md:p-8">
      <div class="relative max-w-5xl w-full bg-slate-800/80 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 backdrop-blur-md">
        
        <div 
          class="absolute inset-0 bg-cover bg-center opacity-10 blur-xl scale-110 pointer-events-none"
          :style="{ backgroundImage: `url(${movie.backdrop})` }"
        ></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
          
          <div class="flex justify-center md:justify-start">
            <div class="w-64 md:w-full aspect-2/3 rounded-xl overflow-hidden shadow-lg border border-slate-700 transform transition duration-300 hover:scale-[1.02]">
              <img :src="movie.poster" :alt="movie.title" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="md:col-span-2 flex flex-col justify-between space-y-6">
            <div>
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  {{ movie.title }}
                </h1>
                <span class="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 rounded">
                  {{ movie.certification }}
                </span>
              </div>
              <p class="text-sm font-medium text-amber-400 italic">{{ movie.tagline }}</p>
            </div>

            <div class="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 font-medium border-y border-slate-700/60 py-3">
              <div class="flex items-center gap-1.5">
                <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-white font-bold text-base">{{ movie.rating }}</span>
                <span class="text-slate-400 text-xs">/10</span>
              </div>
              <div>{{ movie.releaseYear }}</div>
              <div>{{ movie.runtime }}</div>
            </div>

            <div class="flex flex-wrap gap-2">
              <span 
                v-for="genre in movie.genres" 
                :key="genre"
                class="px-3 py-1 text-xs font-semibold bg-slate-700 text-slate-200 rounded-full border border-slate-600/50"
              >
                {{ genre }}
              </span>
            </div>

            <div>
              <h2 class="text-lg font-bold text-white mb-2">Overview</h2>
              <p class="text-slate-300 leading-relaxed text-sm md:text-base">
                {{ movie.overview }}
              </p>
            </div>

            <div class="flex flex-wrap gap-4 pt-4">
              <button class="flex-1 sm:flex-none px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>
                Watch Trailer
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div v-else class="w-full flex-1 flex items-center justify-center p-8">
      <p class="text-xl font-semibold animate-pulse text-zinc-400">Loading movie details...</p>
    </div>
     
    <div class="w-full flex items-center justify-center p-6 h-60 bg-cover bg-center bg-no-repeat mt-auto" style="background-image: url('https://i.pinimg.com/1200x/92/14/8a/92148ae16c20ddbdbe85beb1e9ea6082.jpg');">
        <div class="w-full max-w-lg bg-black/50 p-6 rounded-xl backdrop-blur-md border border-slate-700/40 shadow-xl">
            <form class="sm:flex sm:items-center">
                <input 
                    id="q" 
                    name="q" 
                    class="inline w-full rounded-md border border-gray-600 bg-slate-900/90 text-white py-2.5 pl-3 pr-3 leading-5 placeholder-gray-400 focus:border-amber-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-500 sm:text-sm" 
                    placeholder="Search another movie..." 
                    type="search" 
                    autofocus="" 
                    value=""
                >
                <button 
                    type="submit" 
                    class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-amber-500 px-5 py-2.5 font-bold text-slate-950 shadow-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-150"
                >
                    Search
                </button>
            </form>
        </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie = ref(null)

// Comprehensive dictionary for all 12 entries
const MOVIES_DATABASE = [
  {
    id: "1",
    title: 'GOAT',
    tagline: 'Greatest of all time.',
    certification: 'PG-13',
    rating: '8.7',
    releaseYear: '2024',
    runtime: '2h 49m',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel.',
    poster: 'https://i.pinimg.com/736x/b0/fa/a2/b0faa2e1f9e9e690797a299f605636b0.jpg', 
    backdrop: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Matthew M.', character: 'Cooper', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "2",
    title: 'Hail Mary',
    tagline: 'A solitary astronaut must save humanity from an extinction-level event.',
    certification: 'PG-13',
    rating: '9.0',
    releaseYear: '2026',
    runtime: '2h 32m',
    genres: ['Action', 'Crime', 'Drama'],
    overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept his greatest test.',
    poster: 'https://i.pinimg.com/1200x/99/42/48/994248ff990568ddde53e3f61bff54cc.jpg',
    backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Christian Bale', character: 'Bruce Wayne', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "3",
    title: 'Hoppers',
    tagline: 'An unconventional scientific breakthrough introduces chaos.',
    certification: 'PG-13',
    rating: '8.8',
    releaseYear: '2026',
    runtime: '2h 28m',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.',
    poster: 'https://i.pinimg.com/736x/de/68/50/de6850bd23d754b381c23465d0762865.jpg',
    backdrop: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Leonardo DiC.', character: 'Cobb', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "4",
    title: '7 Scream',
    tagline: 'A new game of terror begins.',
    certification: 'PG-13',
    rating: '7.6',
    releaseYear: '2026',
    runtime: '3h 12m',
    genres: ['Sci-Fi', 'Action', 'Fantasy'],
    overview: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns, they must fight.',
    poster: 'https://i.pinimg.com/1200x/70/ae/10/70ae10692d5f2c923993f8b594090ffc.jpg',
    backdrop: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Sam W.', character: 'Jake Sully', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "5",
    title: 'Avatar 3',
    tagline: 'The fire Ash People rise on Pandora.',
    certification: 'PG',
    rating: '8.6',
    releaseYear: '2025',
    runtime: '2h 5m',
    genres: ['Animation', 'Family', 'Fantasy'],
    overview: 'A young girl wanders into a spirit world ruled by gods, witches, and spirits, where humans are changed into beasts.',
    poster: 'https://i.pinimg.com/1200x/cd/b4/7d/cdb47d90e4a50ca21c869bb7a220d958.jpg',
    backdrop: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Rumi Hiiragi', character: 'Chihiro', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "6",
    title: 'Predator Badlands',
    tagline: 'In the Wasteland, the ultimate hunter emerges.',
    certification: 'R',
    rating: '8.5',
    releaseYear: '2025',
    runtime: '2h 35m',
    genres: ['Action', 'Adventure', 'Drama'],
    overview: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.',
    poster: 'https://i.pinimg.com/736x/c9/e8/5b/c9e85bafb5654fec812df197a97ba216.jpg',
    backdrop: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Russell Crowe', character: 'Maximus', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "7",
    title: 'Michael',
    tagline: 'The King of Pop. The man behind the mirror.',
    certification: 'R',
    rating: '8.7',
    releaseYear: '2025',
    runtime: '2h 16m',
    genres: ['Sci-Fi', 'Action'],
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    poster: 'https://i.pinimg.com/736x/e8/fc/8b/e8fc8b7db4b2313fe4b344715ac63739.jpg',
    backdrop: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Keanu Reeves', character: 'Neo', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "8",
    title: 'Swapped',
    tagline: 'Be careful whose shoes you step into.',
    certification: 'R',
    rating: '8.5',
    releaseYear: '2024',
    runtime: '1h 46m',
    genres: ['Drama', 'Music'],
    overview: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an intense instructor.',
    poster: 'https://i.pinimg.com/1200x/e1/52/40/e152405eddd244b74e24931deef63228.jpg',
    backdrop: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Miles Teller', character: 'Andrew', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "9",
    title: 'Mickey 17',
    tagline: 'To save his life, he has to die sixteen times.',
    certification: 'R',
    rating: '8.5',
    releaseYear: '2025',
    runtime: '2h 12m',
    genres: ['Thriller', 'Drama', 'Comedy'],
    overview: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    poster: 'https://i.pinimg.com/736x/97/95/d5/9795d5228e2f0ed06658709ea5c0bff3.jpg',
    backdrop: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Song Kang-ho', character: 'Ki-taek', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "10",
    title: 'Monarch: Legacy of Monsters',
    tagline: 'The truth will surface.',
    certification: 'PG',
    rating: '8.4',
    releaseYear: '2023',
    runtime: '1h 57m',
    genres: ['Animation', 'Action', 'Adventure'],
    overview: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions.',
    poster: 'https://i.pinimg.com/736x/bc/92/5a/bc925af0eac11cc3274a187ca66a6311.jpg',
    backdrop: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Shameik Moore', character: 'Miles Morales', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "11",
    title: 'Avatar',
    tagline: 'Enter the world of Pandora.',
    certification: 'G',
    rating: '8.5',
    releaseYear: '2009',
    runtime: '1h 28m',
    genres: ['Animation', 'Drama', 'Family'],
    overview: 'Lion prince Simba and his father are targeted by his bitter uncle Scar, who wants to ascend the throne himself.',
    poster: 'https://i.pinimg.com/736x/e8/fc/d5/e8fcd50d5c5dc49770239f4f8f161723.jpg',
    backdrop: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Matthew B.', character: 'Simba', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80' }]
  },
  {
    id: "12",
    title: 'Anaconda',
    tagline: 'When you can’t breathe, you can’t scream.',
    certification: 'PG-13',
    rating: '8.6',
    releaseYear: '1997',
    runtime: '2h 46m',
    genres: ['Sci-Fi', 'Adventure'],
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    poster: 'https://i.pinimg.com/736x/b0/32/19/b032198e8bfd8d8cc1567307a128895e.jpg',
    backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=60',
    cast: [{ name: 'Timothée Ch.', character: 'Paul Atreides', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80' }]
  }
]
onMounted(() => {
  // Grabs the current id variant parameter from the URL path
  const currentId = route.params.id
  
  // FIXED: Finds the unique dataset object that matches the clicked homepage card ID
  const match = MOVIES_DATABASE.find(item => String(item.id) === String(currentId))
  
  if (match) {
    movie.value = match
  }
})
</script>