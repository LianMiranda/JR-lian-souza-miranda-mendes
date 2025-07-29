import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProjectView from '@/views/CreateProjectView.vue'
import UpdateProjectView from '@/views/UpdateProjectView.vue'
import ProjectView from '@/views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }, 
    {
      path: '/create/project',
      name: 'create project',
      component: CreateProjectView,
    },
    {
      path: '/update/project/:id',
      name: 'update project',
      component: UpdateProjectView,
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectView,
    }
  ],
})

export default router
