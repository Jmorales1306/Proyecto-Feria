<script>
  import "../app.css";
  import src from "$lib/assets/Logo.png";
  import search from "$lib/assets/search.svg"
  import user from "$lib/assets/user.svg"
  import shop from "$lib/assets/shop.svg"
  
</script>

<!-- Container -->
<div class="w-[1920px] h-28 flex bg-white px-4 py-5 place-content-around">
  <!-- Container logo -->

  <div class="w-[221px] h-20">
    <img {src} alt="Logo Store" />
  </div>
  <!-- Container nav-bar -->
  <div class="space-x-2 ms-16 items-center w-[780px] h-26 flex bg-white">
    <div class="w-40 h-11 text-center">
      <a href="/#" class=" text-black text-[22px] font-bold font-['Inter']"
        >Covers</a
      >
    </div>
    <div class="w-40 h-11 text-center">
      <a href="/#" class=" text-black text-[22px] font-bold font-['Inter']"
        >Audifonos</a
      >
    </div>
    <div class="w-40 h-11 text-center">
      <a href="/#" class=" text-black text-[22px] font-bold font-['Inter']"
        >Cargadores</a
      >
    </div>
    <div class="w-40 h-11 text-center">
      <a href="/#" class=" text-black text-[22px] font-bold font-['Inter']"
        >Smarphones</a
      >
    </div>
    <div class="w-40 h-11 text-center">
      <a href="/#" class=" text-black text-[22px] font-bold font-['Inter']"
        >Adaptadores</a
      >
    </div>
  </div>
  <!-- Container search -->
  <div class="w-[732px] h-[61px] flex items-center space-x-2">
    <input type="search" placeholder="Buscar" class="bg-stone-50  ms-9 rounded-[35px] w-[513px] h-[61px] text-black text-opacity-50 text-[22px] font-bold font-['Inter']">
    <button>
      <img src="{search}" alt="search" class="bg-white">
    </button>
    
    <!-- Container icons -->

    <div class="h-[51px] w-[131px] flex items-center place-content-around">
      <button>
        <img src="{user}" alt="search" class="bg-white">
      </button>
      <button>
        <img src="{shop}" alt="search" class="bg-white">
      </button>
    </div>
  </div>
</div>



<slot />
