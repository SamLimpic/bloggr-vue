import { createRouter, createWebHashHistory } from 'vue-router'
// import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: 'blog/:id',
    name: 'BlogDetails',
    component: loadPage('BlogDetailsPage')
  },
  {
    path: '/profile/:id',
    name: 'Account',
    component: loadPage('AccountPage')
    // NOTE Prevents the page from loading if the user is not logged in
    // beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router