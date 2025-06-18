<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Selamat Datang</h1>
      <p class="mb-6">Silakan pilih opsi di bawah ini:</p>
      <div class="space-x-4">
        <NuxtLink
          to="/login"
          class="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="inline-block bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Register
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Tidak perlu logika tambahan untuk halaman ini
</script>