<script>
    import logo from '$lib/assets/Logo.png';
</script>
<div class="min-h-screen flex flex-col justify-center bg-gradient-to-r from-[#2C465D] to-[#0052A5]">
<form class="mt-10 mb-10 sm:mx-auto items-center justify-center rounded-xl block bg-white flex w-96">

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="items-center mx-px-auto h-40 w-auto" src="{logo}" alt="Logo">
      <h2 class="mt-1 text-center text-xl font-bold leading-5 tracking-tight text-gray-900">Inicio de sesión</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-2" action="#" method="POST">
        
        <div>
          <label for="email" class="mt-2 block text-sm font-medium  leading-4 text-gray-900">Correo</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="mt-2 block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
            
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <button type="submit" class="mt-5 flex w-full justify-center rounded-xl bg-sky-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Ingresar</button>
        </div>

        <div>
          <button type="submit" class="mt-10 flex w-full justify-center rounded-xl bg-gray-100 px-3 py-1.5 text-sm font-medium leading-6 text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Ingresa con Google</button>
        </div>
        <div>
          <button type="submit" class="mt-4 flex w-full justify-center rounded-xl bg-gray-100 px-3 py-1.5 text-sm font-medium leading-6 text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Ingresa con Facebook</button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-sm text-gray-500">
        No tienes una cuenta?
        <a href="#" class="font-semibold leading-6 text-sky-800 hover:text-gray-500">Registrate aquí</a>
      </p>
      <p class="mt-4 mb-10 text-center text-sm text-gray-500">
        Olvidaste tu contraseña?
        <a href="#" class="font-semibold leading-6 text-sky-800 hover:text-gray-500">Haz click aquí</a>
      </p>
      <p class="mt-4 mb-10 text-center text-sm text-gray-500">
        <a href="#" class="font-semibold leading-6 text-sky-800 hover:text-gray-500">Volver a la página principal</a>
      </p>
      <p class="mt-4 mb-10 text-center text-sm text-gray-500">
        <a href="#" class="font-semibold leading-6 text-sky-800 hover:text-gray-500">Cambiar a administrador</a>
      </p>
    </div>
  </div>

</form>
</div>