import VueRouter from 'vue-router';
import AllRecord from '../pages/AllRecord.vue';
import HomeList from '../pages/HomeList.vue';
import ContentPractice from '../pages/ContentPractice.vue';
import StartPracticing from '../pages/StartPracticing.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeList,
    },
    {
      path: '/allrecord',
      component: AllRecord,
    },
    {
      path: '/contentpractice',
      component: ContentPractice,

    },
    {
      path: '/startpracticing',
      component: StartPracticing,

    },
  ],
});
