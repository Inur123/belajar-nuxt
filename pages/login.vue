<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 transition-all duration-300 hover:shadow-2xl">
      <div class="flex justify-center mb-6">
        <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </div>
      </div>
      <h2 class="text-3xl font-bold mb-2 text-center text-gray-800">Welcome Back</h2>
      <p class="text-center text-gray-500 mb-6">Sign in to your account</p>
      
      <!-- Display error message if login fails -->
      <div v-if="error" class="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
        {{ error }}
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              v-model="email"
              class="pl-10 block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type="password"
              id="password"
              v-model="password"
              class="pl-10 block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="••••••••"
              required
            />
          </div>
          <div class="flex justify-end mt-1">
            <a href="#" class="text-sm text-indigo-600 hover:text-indigo-800">Forgot password?</a>
          </div>
        </div>

        <button
          type="submit"
          class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium text-base hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md"
          :disabled="isLoading"
        >
          <span v-if="isLoading">
            <span class="inline-block animate-spin mr-2">⟳</span>
            Signing in...
          </span>
          <span v-else>Sign In</span>
        </button>
      </form>
      
      <p class="mt-6 text-center text-gray-600 text-sm">
        Don't have an account yet? 
        <NuxtLink to="/register" class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
          Sign up
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '~/services/api'
import { useRouter } from 'vue-router'

// Set page title
useHead({
  title: 'Login - My Application',
  meta: [
    { name: 'description', content: 'Login to access your account' }
  ]
})

// Router for navigation after login
const router = useRouter()

// Form data
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
  try {
    // Clear previous errors
    error.value = ''
    isLoading.value = true
    
    // Call login API
    const response = await login(email.value, password.value)
    
    // Store token in localStorage for authentication (handle different API response formats)
    const token = response.token || response.access_token || response.data?.token || response.data?.access_token
    
    if (!token) {
      throw new Error('Authentication token not found in response')
    }
    
    localStorage.setItem('auth_token', token)
    
    // Store user data if returned from API (handle different response formats)
    const userData = response.user || response.data?.user
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData))
    }
    
    // Navigate to dashboard/home
    router.push('/dashboard')
    
  } catch (err) {
    // Handle error
    if (typeof err === 'object' && err.message) {
      error.value = err.message
    } else if (typeof err === 'string') {
      error.value = err
    } else {
      error.value = 'Login failed. Please check your credentials and try again.'
    }
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>