<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <div class="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
              <span>A</span>
            </div>
            <span class="ml-2 text-xl font-semibold">AppName</span>
          </div>
          
          <!-- Desktop Navigation Links -->
          <div class="hidden md:ml-8 md:flex md:items-center md:space-x-4">
            <a href="#features" class="px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#how-it-works" class="px-3 py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
            <a href="#pricing" class="px-3 py-2 text-gray-700 hover:text-indigo-600">Pricing</a>
            <a href="#about" class="px-3 py-2 text-gray-700 hover:text-indigo-600">About Us</a>
          </div>
        </div>
        
        <!-- Auth Buttons -->
        <div class="flex items-center">
          <NuxtLink to="/login" class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium">
            Sign In
          </NuxtLink>
          <NuxtLink to="/register" class="ml-4 px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </NuxtLink>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg v-if="!mobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open -->
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu, show/hide based on menu state -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <a href="#features" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Features</a>
        <a href="#how-it-works" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">How It Works</a>
        <a href="#pricing" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Pricing</a>
        <a href="#about" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">About Us</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>