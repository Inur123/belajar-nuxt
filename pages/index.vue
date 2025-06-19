<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-indigo-50 to-blue-100 py-16 lg:py-24">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block">Powerful Solution for</span>
              <span class="block text-indigo-600">Your Business</span>
            </h1>
            <p class="mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5">
              Streamline your workflow, boost productivity, and scale your business with our comprehensive platform.
            </p>
            <div class="mt-8 sm:flex">
              <div class="rounded-md shadow">
                <NuxtLink to="/register" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </NuxtLink>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#features" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 lg:mt-0">
            <div class="pl-4 -mr-16 sm:pl-6 md:-mr-20 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img class="w-full rounded-xl shadow-lg lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Dashboard screenshot">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="py-16 bg-white">
           <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features Designed For You
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to manage your business efficiently
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div class="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
            <p class="text-gray-600">
              Comprehensive analytics to track performance and make data-driven decisions for your business.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div class="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Time Tracking</h3>
            <p class="text-gray-600">
              Track time spent on projects and tasks to improve productivity and billing accuracy.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div class="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Team Collaboration</h3>
            <p class="text-gray-600">
              Powerful tools for team collaboration, communication and project management.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-indigo-700">
       <div class="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Ready to get started?</span>
          <span class="block">Create your account today.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-100">
          Join thousands of businesses already using our platform to grow and succeed.
        </p>
        <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-md shadow">
            <NuxtLink to="/register" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
              Sign up for free
            </NuxtLink>
          </div>
          <div class="ml-3 inline-flex">
            <NuxtLink to="/login" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900">
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title
useHead({
  title: 'Welcome - Your App Name',
  meta: [
    { name: 'description', content: 'Your application description goes here' }
  ]
})
</script>
