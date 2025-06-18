export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const token = localStorage.getItem('auth_token')
    
    if (!token) {
      // Using replace: true ensures a cleaner redirect without stacking history
      return navigateTo('/login', { replace: true })
    }
  }
})