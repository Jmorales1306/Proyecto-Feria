<script lang="ts">
  import '$lib/app.css'
  import facebook from "$lib/assets/facebook-circle-logo-48.png" 
  import twitter from "$lib/assets/twitter-logo-48.png"
  import instagram from "$lib/assets/instagram-alt-logo-48.png"
  import src from '$lib/assets/Logo.png'
</script>

<!-- container -->
  <div class="bg-white fixed w-screen z-10">
    <div class="container flex justify-between items-center h-28">
      <div class="flex ">
        <a href="/">
          <img {src} alt="logo" />
        </a>
        <!-- nav-nar -->
        <div
        class="flex-col space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center text-center lg:space-x-10 lg:mt-0 relative z-50 bg-white}"
      >
        <a
          class=" text-black text-[22px] font-bold font-['Inter'] "
          href="/covers">Covers</a
        >
        <a class=" text-black text-[22px] font-bold font-['Inter']" href="/"
          >Audifonos</a
        >
        <a
          class=" text-black text-[22px] font-bold font-['Inter']"
          href="/">Cargadores</a
        >
        <a
          class=" text-black text-[22px] font-bold font-['Inter']"
          href="/">SmarPhone</a
        >
        <a
          class=" text-black text-[22px] font-bold font-['Inter']"
          href="/">Adaptadores</a
        >
      </div>
      </div>
       <!-- icon -->
      <div class="flex items-center gap-3">
          <input
          type="search"
          placeholder="Buscar"
          class="bg-stone-50 ms-9 rounded-[35px] h-[61px] w-96 p-4 text-black text-opacity-50 text-[22px] font-bold font-['Inter']"
        />        <button>
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.8889 40.3436L22.8889 26.3436C21.7778 27.2325 20.5 27.9362 19.0556 28.4547C17.6111 28.9733 16.0741 29.2325 14.4444 29.2325C10.4074 29.2325 6.99074 27.8344 4.19444 25.0381C1.39815 22.2418 0 18.8251 0 14.7881C0 10.751 1.39815 7.33437 4.19444 4.53807C6.99074 1.74178 10.4074 0.343628 14.4444 0.343628C18.4815 0.343628 21.8981 1.74178 24.6944 4.53807C27.4907 7.33437 28.8889 10.751 28.8889 14.7881C28.8889 16.4177 28.6296 17.9547 28.1111 19.3992C27.5926 20.8436 26.8889 22.1214 26 23.2325L40 37.2325L36.8889 40.3436ZM14.4444 24.7881C17.2222 24.7881 19.5833 23.8159 21.5278 21.8714C23.4722 19.927 24.4444 17.5659 24.4444 14.7881C24.4444 12.0103 23.4722 9.64918 21.5278 7.70474C19.5833 5.76029 17.2222 4.78807 14.4444 4.78807C11.6667 4.78807 9.30556 5.76029 7.36111 7.70474C5.41667 9.64918 4.44444 12.0103 4.44444 14.7881C4.44444 17.5659 5.41667 19.927 7.36111 21.8714C9.30556 23.8159 11.6667 24.7881 14.4444 24.7881Z"
              fill="black"
            />
          </svg>
        </button>
         <!-- user -->
        <a href="/login">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0835 20.6873C17.3335 20.6873 14.9793 19.7082 13.021 17.7498C11.0627 15.7915 10.0835 13.4373 10.0835 10.6873C10.0835 7.93732 11.0627 5.58315 13.021 3.62482C14.9793 1.66648 17.3335 0.687317 20.0835 0.687317C22.8335 0.687317 25.1877 1.66648 27.146 3.62482C29.1043 5.58315 30.0835 7.93732 30.0835 10.6873C30.0835 13.4373 29.1043 15.7915 27.146 17.7498C25.1877 19.7082 22.8335 20.6873 20.0835 20.6873ZM0.0834961 40.6873V33.6873C0.0834961 32.2707 0.448079 30.9686 1.17725 29.7811C1.90641 28.5936 2.87516 27.6873 4.0835 27.0623C6.66683 25.7707 9.29183 24.8019 11.9585 24.1561C14.6252 23.5102 17.3335 23.1873 20.0835 23.1873C22.8335 23.1873 25.5418 23.5102 28.2085 24.1561C30.8752 24.8019 33.5002 25.7707 36.0835 27.0623C37.2918 27.6873 38.2606 28.5936 38.9897 29.7811C39.7189 30.9686 40.0835 32.2707 40.0835 33.6873V40.6873H0.0834961ZM5.0835 35.6873H35.0835V33.6873C35.0835 33.229 34.9689 32.8123 34.7397 32.4373C34.5106 32.0623 34.2085 31.7706 33.8335 31.5623C31.5835 30.4373 29.3127 29.5936 27.021 29.0311C24.7293 28.4686 22.4168 28.1873 20.0835 28.1873C17.7502 28.1873 15.4377 28.4686 13.146 29.0311C10.8543 29.5936 8.5835 30.4373 6.3335 31.5623C5.9585 31.7706 5.65641 32.0623 5.42725 32.4373C5.19808 32.8123 5.0835 33.229 5.0835 33.6873V35.6873ZM20.0835 15.6873C21.4585 15.6873 22.6356 15.1977 23.6147 14.2186C24.5939 13.2394 25.0835 12.0623 25.0835 10.6873C25.0835 9.31232 24.5939 8.13523 23.6147 7.15607C22.6356 6.1769 21.4585 5.68732 20.0835 5.68732C18.7085 5.68732 17.5314 6.1769 16.5522 7.15607C15.5731 8.13523 15.0835 9.31232 15.0835 10.6873C15.0835 12.0623 15.5731 13.2394 16.5522 14.2186C17.5314 15.1977 18.7085 15.6873 20.0835 15.6873Z"
              fill="black"
            />
          </svg>
        </a> 
        <!-- shop-car -->
        <a href="/">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.0835 40C3.7085 40 2.53141 39.6083 1.55225 38.825C0.573079 38.0417 0.0834961 37.1 0.0834961 36V12C0.0834961 10.9 0.573079 9.95833 1.55225 9.175C2.53141 8.39167 3.7085 8 5.0835 8H10.0835C10.0835 5.8 11.0627 3.91667 13.021 2.35C14.9793 0.783333 17.3335 0 20.0835 0C22.8335 0 25.1877 0.783333 27.146 2.35C29.1043 3.91667 30.0835 5.8 30.0835 8H35.0835C36.4585 8 37.6356 8.39167 38.6147 9.175C39.5939 9.95833 40.0835 10.9 40.0835 12V36C40.0835 37.1 39.5939 38.0417 38.6147 38.825C37.6356 39.6083 36.4585 40 35.0835 40H5.0835ZM5.0835 36H35.0835V12H30.0835V16C30.0835 16.5667 29.8439 17.0417 29.3647 17.425C28.8856 17.8083 28.2918 18 27.5835 18C26.8752 18 26.2814 17.8083 25.8022 17.425C25.3231 17.0417 25.0835 16.5667 25.0835 16V12H15.0835V16C15.0835 16.5667 14.8439 17.0417 14.3647 17.425C13.8856 17.8083 13.2918 18 12.5835 18C11.8752 18 11.2814 17.8083 10.8022 17.425C10.3231 17.0417 10.0835 16.5667 10.0835 16V12H5.0835V36ZM15.0835 8H25.0835C25.0835 6.9 24.5939 5.95833 23.6147 5.175C22.6356 4.39167 21.4585 4 20.0835 4C18.7085 4 17.5314 4.39167 16.5522 5.175C15.5731 5.95833 15.0835 6.9 15.0835 8Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <slot/>

  <!-- <footer class="bg-[#2C465D] py-12">
    <div class="container mx-auto px-2 text-white">
        <div class="flex justify-start">
            <div class="pr-10">
                <h2 class="text-3xl font-bold mb-4">Soporte</h2>
                <ul>
                    <li><a href="/">Garantía de productos</a></li>
                    <li><a href="/">Guías de uso</a></li>
                    <li><a href="/">Ubicación</a></li>
                </ul>
            </div>
            <div class="pr-10">
                <h2 class="text-3xl font-bold mb-4">Sobre nosotros</h2>
                <ul>
                    <li><a href="/">H Ventas Locas</a></li>
                    <li><a href="/">Políticas de privacidad</a></li>
                    <li><a href="/">Términos y condiciones</a></li>
                </ul>
            </div>
            <div class="pr-10">
                <h2 class="text-3xl font-bold mb-4">Contáctanos</h2>
                <ul>
                    <li><a href="/">Escribe a nuestro WhatsApp</a></li>
                    
                </ul>
            </div>
            <div>
                <h2 class="text-3xl font-bold mb-4">Síguenos</h2>
                <ul class="flex space-x-2 text-6xl">
                    <li><img src={facebook} alt=""></li>
                    <li><img src={twitter} alt=""></li>
                    <li><img src={instagram} alt=""></li>
                    
                </ul>
            </div>
        </div>
    </div>
    <div class="grid justify-items-center text-white mt-20">
        <p>© 2023 H ventas Locas. Todos los derechos reservados.</p>
    </div>
</footer> -->
