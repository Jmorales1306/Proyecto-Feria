<script>
  import headPhone from '$lib/assets/audifonos.png'
  import smarthWatch from '$lib/assets/xiaomi_redmi_watch_2_lite_azul.png'
  import smarthPhone from '$lib/assets/SmarthPhone.png'
  import fastCharger from '$lib/assets/Cargador_Rapido_ANKER.png'
  import xiomiCharger from '$lib/assets/Cargador_Xiomi.png'
  import usbCharger from '$lib/assets/Cable_Usb_type-c_FastCharge.png'

</script>

<!-- container head phone-->
<div class="absolute flex flex-col  bg-[#f7f6f4] top-32">
  <div class="h-[805px] relative flex bg-slate-700 bg-opacity-25">
    <!-- info -->
    <div class="w-[1200px] h-[805px]">
      <!-- <div class="w-[1000px] h-[320px] text-black text-[64px] font-bold font-['Inter'] flex justify-center leading-[8px]"> -->
      <h1
        class="w-[1003px] h-[320px] left-[76px] top-[46px] absolute text-black text-[64px] font-bold font-['Inter']"
      >
        Descubre la mejor cancelación <br /> de ruido en unos audífonos.
      </h1>
      <!-- </div> -->
      <!-- paragraph -->
      <p
        class="w-[1003px] h-[280px] left-[76px] top-[328px] absolute text-black text-[32px] font-medium font-['Inter']"
      >
        Ya disponibles los Sony WHXM4, disfruta del fabuloso sonido de alta
        fidelidad, su gran autonomía que te ofrece hasta 30 horas de duración de
        batería y otras funciones que cambiarán la forma en la que escuchas
        música.
      </p>
      <!-- know more -->
      <div
        class="w-[194px] h-14 left-[76px] top-[660px] absolute bg-black rounded-[15px] flex items-center justify-center"
      >
        <a href="/" class="text-white text-[22px] font-medium font-['Inter']"
          >Saber más</a
        >
      </div>
    </div>
    <!-- Head Phone -->
    <div class="w-[720px] h-[805px]">
      <img src={headPhone} alt="Head Phone" class="object-cover" />
    </div>
  </div>

  <!-- container smarth watch-->
  <div
    class="w-[1920px] h-[805px] relative flex bg-gradient-to-r from-slate-700 to-slate-300 items-center justify-between"
  >
    <!-- Smarth Watch -->
    <div class="w-[565px] h-[645px]">
      <img
        src={smarthWatch}
        alt="Head Phone"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- info -->
    <div class="w-[1200px] h-[805px] relative flex flex-col items-end">
      <h1
        class="w-[1003px] h-[320px] text-white text-[64px] font-bold font-['Inter'] flex justify-center items-center text-end"
      >
        Ya disponibles, los mejores<br /> relojes inteligentes de Xiaomi.
      </h1>
      <!-- paragraph -->
      <p
        class="w-[1003px] h-[280px] text-white text-[32px] font-medium font-['Inter'] flex justify-center items-center text-end"
      >
        Cambia tu estilo de vida, monitorea tu salud con funciones <br />
        dedicadas como visualizar tu ritmo cardíaco, lleva control de tus <br />
        actividades físicas y mucho más.
      </p>
      <!-- know more -->

      <div
        class="w-[194px] h-14 bg-white rounded-[15px] flex justify-center items-center mr-24"
      >
        <a href="/" class="text-black text-[22px] font-medium font-['Inter']"
          >Saber más</a
        >
      </div>
    </div>
  </div>

  <!-- container SmarthPhone -->
  <div
    class="h-[933px] relative flex bg-black items-center justify-center"
  >
    <img src={smarthPhone} alt="SmarthPhone" class="object-cover"> 
     <div class="w-[1200px] h-[267] left-[456px] top-[317px] absolute mix-blend-difference text-center text-white text-6xl font-bold font-['Inter']">Mira las novedosas características del Redmi Note 12, ya disponible.</div>
  </div>

  <div class="h-[110px] relative mt-12 justify-center items-center flex">
    <p class="text-black text-4xl font-bold font-['Inter']">Nuestros ultimos productos</p>
  </div>

  <div
    class="h-[650px] relative flex  items-center justify-around text-center"
  >
  <div class="w-[500px] h-[648px] bg-white flex flex-col items-center gap-y-20 rounded-3xl ">
    <div class="h-[297px] w[287pxs]">
      <img class="h-[297px] w[287pxs]" src="{fastCharger}" alt="Cargador Rapido Anker">
    </div>

    <p class="text-black text-4xl font-bold font-['Inter']">Cargador Rapido Anker</p>

    <button class="h-16 w-48 rounded-[8px] border-black border-2">
      <a href="/#">
      Saber Más
      </a>
    </button>

  </div>
  <div class="w-[500px] h-[648px] bg-white flex flex-col items-center gap-y-20 rounded-3xl ">
    <div class="h-[297px] w[287pxs]">
      <img class="h-[297px] w[287pxs]" src="{xiomiCharger}" alt="Cargador Xiomi 120W">
    </div>

    <p class="text-black text-4xl font-bold font-['Inter']">Cargador Xiomi 120W</p>

    <button class="h-16 w-48 rounded-[8px] border-black border-2">
      <a href="/#">
      Saber Más
      </a>
    </button>

  </div>
  <div class="w-[500px] h-[648px] bg-white flex flex-col items-center gap-y-20 rounded-3xl ">
    <div class="h-[297px] w[287pxs]">
      <img class="h-[297px] w[287pxs]" src="{usbCharger}" alt="Cable USB tipo C fast-Charge">
    </div>

    <p class="text-black text-4xl font-bold font-['Inter']">Cable USB tipo C fast-Charge</p>

    <button class="h-16 w-48 rounded-[8px] border-black border-2">
      <a href="/#">
      Saber Más
      </a>
    </button>

  </div>

</div>
<div class="h-[156px] mt-12 justify-center items-center flex flex-col gap-10">
  <button class="h-16 w-48 text-white bg-[hsl(210,29%,24%)] rounded-[8px] border-black border-2">
    <a href="/#">
    Saber Más
    </a>
  </button>

  <p class="text-black text-4xl font-bold font-['Inter']">Recomendaciones</p>
</div>

</div>
