<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Fixed Header/Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white  shadow-md px-4 py-3 flex justify-between items-center z-30">
      <div class="flex items-center">
        <!-- Mobile sidebar toggle button -->
        <button @click="toggleSidebar" class="mr-2 p-1 rounded-lg text-gray-500 hover:bg-gray-100 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div class="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-xl font-bold text-gray-800 hidden md:block">MyApp Dashboard</h1>
      </div>

      <div class="flex items-center space-x-4">
        <button class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <div class="relative">
    <button @click="toggleDropdown" class="flex items-center space-x-1 cursor-pointer">
      <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
        {{ userInitials }}
      </div>
      <span class="hidden md:block text-sm font-medium text-gray-700">{{ userName }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-40">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Your Profile</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Settings</a>
      <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-indigo-50 cursor-pointer">
        Sign out
      </button>
    </div>
  </div>
      </div>
    </nav>

    <!-- Main Content with Sidebar -->
    <div class="pt-16 md:pt-20 relative">
      <!-- Sidebar - Fixed position on both mobile and desktop -->
      <div :class="[
        'bg-white shadow-md z-20 transition-all duration-300 ease-in-out',
        'fixed top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]',
        'overflow-y-auto',
        isSidebarOpen ? 'left-0' : '-left-64',
        'w-64 md:left-0'
      ]">
        <div class="p-4 flex flex-col space-y-1">
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg bg-indigo-50 text-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
            </svg>
            <span class="font-medium">Dashboard</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profile</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Calendar</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Tasks</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </a>
        </div>
      </div>

      <!-- Overlay for mobile sidebar -->
      <div v-if="isSidebarOpen" @click="closeSidebar"
        class="fixed inset-0 bg-gray-900 bg-opacity-30 z-10 md:hidden transition-opacity duration-300 ease-in-out">
      </div>

      <!-- Main Content Area with left margin to make space for the sidebar -->
      <div class="md:ml-64 p-4 md:p-6">
        <!-- Welcome Section -->
        <div class="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Welcome back, {{ userName }}!</h2>
          <p class="text-gray-600">Here's what's happening with your account today.</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm font-medium text-gray-500">Total Users</p>
                <p class="text-2xl font-bold text-gray-800">2,457</p>
              </div>
              <div class="bg-indigo-100 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <p class="text-sm text-green-600 mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>12% increase</span>
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm font-medium text-gray-500">Revenue</p>
                <p class="text-2xl font-bold text-gray-800">$12,897</p>
              </div>
              <div class="bg-purple-100 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p class="text-sm text-green-600 mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>7.8% increase</span>
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm font-medium text-gray-500">Orders</p>
                <p class="text-2xl font-bold text-gray-800">684</p>
              </div>
              <div class="bg-blue-100 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <p class="text-sm text-green-600 mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>4.3% increase</span>
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm font-medium text-gray-500">Conversion</p>
                <p class="text-2xl font-bold text-gray-800">24.8%</p>
              </div>
              <div class="bg-green-100 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <p class="text-sm text-red-600 mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>1.2% decrease</span>
            </p>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-gray-800">Recent Activity</h3>
            <button class="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
          </div>

          <div class="space-y-4">
            <div class="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-800">New message from <span class="text-indigo-600">John
                    Doe</span></p>
                <p class="text-xs text-gray-500">Hey, I wanted to follow up on our meeting yesterday...</p>
              </div>
              <p class="text-xs text-gray-400">5 min ago</p>
            </div>

            <div class="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-800">Project <span class="text-indigo-600">Marketing
                    Campaign</span> completed</p>
                <p class="text-xs text-gray-500">The project has been marked as completed successfully</p>
              </div>
              <p class="text-xs text-gray-400">1 hour ago</p>
            </div>

            <div class="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-800">System Alert: <span class="text-red-600">Storage almost
                    full</span></p>
                <p class="text-xs text-gray-500">Your storage is at 85% capacity. Consider upgrading your plan.</p>
              </div>
              <p class="text-xs text-gray-400">3 hours ago</p>
            </div>

            <div class="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-800"><span class="text-indigo-600">Jane Smith</span> viewed your
                  profile</p>
                <p class="text-xs text-gray-500">Jane Smith from ABC Company viewed your profile</p>
              </div>
              <p class="text-xs text-gray-400">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Apply auth middleware
definePageMeta({
  middleware: ['auth']
})

// Set page title
useHead({
  title: 'Dashboard - My Application',
  meta: [
    { name: 'description', content: 'Dashboard overview of your account' }
  ]
})

const router = useRouter()

// User information
const userName = ref('User')
const userInitials = computed(() => {
  return userName.value
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
})

// Get user data from localStorage on component mount
onMounted(() => {
  try {
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      // Support different user data structures
      userName.value = user.name || user.username || user.full_name || user.email?.split('@')[0] || 'User'
    }
  } catch (error) {
    console.error('Error loading user data:', error)
  }
  
  // Add click event listener to detect clicks outside dropdown
  document.addEventListener('click', closeDropdownOnClickOutside)
})

// Clean up event listeners when component is destroyed
onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnClickOutside)
})

// Logout function
const logout = () => {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('user')
  router.push('/login')
}

// Sidebar state
const isSidebarOpen = ref(false)

// Toggle sidebar on mobile
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Close sidebar when clicking overlay
const closeSidebar = () => {
  isSidebarOpen.value = false
}

// Dropdown state
const isDropdownOpen = ref(false)

// Toggle dropdown visibility
const toggleDropdown = (event) => {
  // Prevent event from bubbling to document
  event.stopPropagation()
  isDropdownOpen.value = !isDropdownOpen.value
}

// Close dropdown when clicking outside
const closeDropdownOnClickOutside = (event) => {
  const profileButton = document.querySelector('.relative button')
  const dropdown = document.querySelector('.relative div[class*="absolute"]')
  
  // If click is outside the dropdown and the button that toggles it
  if (profileButton && dropdown && 
      !profileButton.contains(event.target) && 
      !dropdown.contains(event.target)) {
    isDropdownOpen.value = false
  }
}
</script>