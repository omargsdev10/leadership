import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CoursesView from '@/views/CoursesView.vue';
import ContactView from '@/views/ContactView.vue';
import ThisIsUsView from '@/views/ThisIsUsView.vue';
import LoginView from '@/views/LoginView.vue';
import CourseTopicsView from '@/views/CourseTopicsView.vue';
import TopicContentView from '@/views/TopicContentView.vue';
import FormTopicView from '@/views/topic/FormTopicView.vue';
import PublicRegisterView from '@/views/users/PublicRegisterView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/us',
    name: 'ThisIsUs',
    component: ThisIsUsView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresBackground: true }
  },
  {
    path: '/course/topics',
    name: 'CourseTopics',
    component: CourseTopicsView,
  },
  {
    path: '/course/topics/content',
    name: 'TopicContent',
    component: TopicContentView,
  },
  {
    path: '/topic/form',
    name: 'FormTopic',
    component: FormTopicView,
  },
  {
    path: '/sign-up',
    name: 'PublicRegister',
    component: PublicRegisterView,
    meta: { requiresBackground: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
