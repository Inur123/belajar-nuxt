export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const token = localStorage.getItem('auth_token')
    
    if (!token) {
      return navigateTo('/login', { replace: true })
    }
  }
})