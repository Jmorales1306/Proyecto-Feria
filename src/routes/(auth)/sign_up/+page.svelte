<script>
    import logo from '$lib/assets/Logo.png';
</script>
<div class="min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-900 to-blue-950">
<form class="px-8 mt-10 mb-10 sm:mx-auto items-center justify-center rounded-xl block bg-white w-96">

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <a href="/">
        <img class="mx-px-auto h-40 w-auto" src="{logo}" alt="Logo">
      </a>
      <h2 class="mt-1 text-center text-xl font-bold leading-5 tracking-tight text-gray-900">Registro</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-16" action="#" method="POST">
        <div>
          <label for="nombre" class="block text-sm font-medium  leading-6 text-gray-900">Nombre</label>
          <div class="mt-2">
            <input id="nombre" name="nombre" type="nombre" autocomplete="name" required class="block w-full rounded-xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
          <div>
            <label for="apellido" class="mt-2 block text-sm font-medium  leading-6 text-gray-900">Apellido</label>
            <div class="mt-2">
              <input id="apellido" name="apellido" type="apellido" autocomplete="nombre" required class="block w-full rounded-xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>  
        </div>
        <div>
          <label for="email" class="mt-2 block text-sm font-medium  leading-6 text-gray-900">Correo</label>
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
          <button type="submit" class="mt-5 flex w-full justify-center rounded-xl bg-sky-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Registrate</button>
        </div>

        <div>
          <button type="submit" class="mt-10 flex w-full justify-center rounded-xl bg-gray-100 px-3 py-1.5 text-sm font-medium leading-6 text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Registrate con Google</button>
        </div>
        <div>
          <button type="submit" class="mt-5 flex w-full justify-center rounded-xl bg-gray-100 px-3 py-1.5 text-sm font-medium leading-6 text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Registrate con Facebook</button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-sm text-gray-500">
        Ya tienes una cuenta?
        <a href="/login" class="font-semibold leading-6 text-sky-800 hover:text-gray-500">Inicia sesión aquí</a>
      </p>
      <p class="mt-4 mb-10 text-center text-sm text-gray-500">
        Olvidaste tu contraseña?
        <a href="/sign_up" class="font-semibold leading-6 text-sky-800 hover:text-gray-500">Haz click aquí</a>
      </p>
      <p class="mt-4 mb-10 text-center text-sm text-gray-500">
        <a href="/sign_up" class="font-semibold leading-6 text-sky-800 hover:text-gray-500">Volver a la página principal</a>
      </p>
      
    </div>
  </div>

</form>
</div>