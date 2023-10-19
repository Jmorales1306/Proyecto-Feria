<script>
    import headphone from '$lib/assets/headphone-regular-240.png'
    import icon from '$lib/assets/check-circle-solid-240 (1).png'
    import phone from '$lib/assets/game-solid-240.png'
    import facebook from "$lib/assets/facebook-circle-logo-48.png" 
    import twitter from "$lib/assets/twitter-logo-48.png"
    import instagram from "$lib/assets/instagram-alt-logo-48.png"
  </script>

<body class="bg:[#F8F8F8] ">
    <section class="services mx-8 mt-16 mb">
        <div class="bg-gradient-to-r from-sky-100 to-indigo-100 max-w[1466px] mx-4 xl:mx-auto 
        rounded-[20px] xl:pt-12 px-6 xl:px-5 relative h-[368px] flex items-center
        xl:items-start">
        <div class="container pl-5 pr-5 mx-auto">
            <div class="hero__text xl:w-[48%] text-center xl:text-left">
                <h2 class=" mb-5 font-bold px-5 items-center text-2xl">
                    Política de garantía
    
                </h2>
                <p class="px-5 mb-[5px] text-justify text-lg">
                    En H Ventas Locas, aseguramos que al comprar un producto, está obteniendo calidad y confiabilidad con el mismo, en caso de presentar fallos, puede reclamarlo en un lapso de 72 horas para el caso de los accesorios, y de 60 días en smartphones, para esto debe cumplir con ciertas condiciones que debe tomar en cuenta si desea realizar un reclamo.
                </p>
                
            </div>
    
    
        </div>
        <div class="hero__img hidden xl:flex max-w-[300px] pr-20 pt-10 center ">
            <img src={icon} alt="">
        </div>
    </div>
    </section>
    
    <section class="services mx-8 mt-16 mb">
        <div class="bg-gradient-to-r from-cyan-100 to-blue-100 max-w[1466px] mx-4 xl:mx-auto 
        rounded-[20px] xl:pt-12 px-6 xl:px-5 relative h-[368px] flex items-center
        xl:items-start">
        <div class="container pl-5 pr-5 mx-auto">
            <div class="hero__text xl:w-[48%] text-center xl:text-left">
                <h2 class=" mb-5 font-bold px-5 items-center text-2xl">
                    Condiciones de garantía de accesorios
    
                </h2>
                
                <ol class="px-5 mb-[10px] text-justify text-lg">
                    <li class="mb-[10px] ">
                        El cliente puede realizar un reclamo en un lapso de 72 horas después de comprado el producto.
                    </li>
                    <li class="mb-[10px] ">El producto debe presentar un fallo de fábrica, no generado por el uso indebido por parte del cliente.</li>
                    <li class="mb-[10px] ">En caso de cumplir con las condiciones, tiene derecho a un cambio de producto o reembolso.</li>
                    <li class="mb-[10px] ">El cambio de producto también puede ser por otro de igual o similar valor.</li>
                <ol>
            </div>
    
    
        </div>
        <div class="hero__img hidden xl:flex max-w-[300px] pr-20 pt-10 center ">
            <img src={headphone} alt="">
        </div>
    </div>
    </section>
    
    
    <section class="services mx-8 mt-16 mb-16">
        <div class="bg-gradient-to-r from-sky-100 to-indigo-100 max-w[1466px] mx-4 xl:mx-auto 
        rounded-[20px] xl:pt-12 px-6 xl:px-5 relative h-[368px] flex items-center
        xl:items-start">
        <div class="container pl-5 pr-5 mx-auto">
            <div class="hero__text xl:w-[48%] text-center xl:text-left">
                <h2 class=" mb-5 font-bold px-5 items-center text-2xl">
                    Condiciones de garantía de SmartPhones
    
                </h2>
    
                <ol class="px-5 mb-[10px] text-justify items-center text-lg">
                    
                    <li class="mb-[10px] ">El smartphone debe presentar un daño de fábrica y no ocasionado por el cliente.</li>
                    <li class="mb-[10px] ">En caso de cumplir las condiciones, puede solicitar un cambio de producto o un reembolso.</li>
                    <li class="mb-[100px] ">El cambio del producto también puede ser por otro de igual o similar valor.</li>
                <ol>
                
                
            </div>
    
    
        </div>
        <div class="hero__img hidden xl:flex max-w-[300px] pr-20 pt-10 center ">
            <img src={phone} alt="">
        </div>
    </div>
    </section>  
</body>

<footer class="bg-[#2C465D] py-12">
    <div class="container mx-auto px-2 text-white">
        <div class="flex justify-start">
            <div class="pr-10">
                <h2 class="text-3xl font-bold mb-4">Soporte</h2>
                <ul>
                    <li><a href="#">Garantía de productos</a></li>
                    <li><a href="#">Guías de uso</a></li>
                    <li><a href="#">Ubicación</a></li>
                </ul>
            </div>
            <div class="pr-10">
                <h2 class="text-3xl font-bold mb-4">Sobre nosotros</h2>
                <ul>
                    <li><a href="#">H Ventas Locas</a></li>
                    <li><a href="#">Políticas de privacidad</a></li>
                    <li><a href="#">Términos y condiciones</a></li>
                </ul>
            </div>
            <div class="pr-10">
                <h2 class="text-3xl font-bold mb-4">Contáctanos</h2>
                <ul>
                    <li><a href="#">Escribe a nuestro WhatsApp</a></li>
                    
                </ul>
            </div>
            <div>
                <h2 class="text-3xl font-bold mb-4 mr-7">Síguenos</h2>
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
</footer>
