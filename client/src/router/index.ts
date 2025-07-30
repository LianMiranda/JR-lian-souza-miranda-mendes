import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProjectView from '@/views/CreateProjectView.vue'
import UpdateProjectView from '@/views/UpdateProjectView.vue'
import ProjectView from '@/views/ProjectView.vue'
import CreateTaskView from '@/views/task/CreateTaskView.vue'
import UpdateTaskView from '@/views/task/UpdateTaskView.vue'

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
    },
    {
      path: '/project/:id/create-task',
      name: 'create task',
      component: CreateTaskView,
    },
    {
      path: '/update/task/:id',
      name: 'update task',
      component: UpdateTaskView
    }
  ],
})

export default router
