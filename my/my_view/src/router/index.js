import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'
import Mywork from '@/components/Mywork'
import Latest from '@/components/Latest'
import Classification from '@/components/Classification'
import activity from '@/components/activity'
import Details from '@/components/Details'
import Photo from '@/components/Photo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
		},
		{
		  path: '/Details',
		  name: 'Details',
		  component: Details
		},
		{
		  path: '/Photo',
		  name: 'Photo',
		  component: Photo
		},
		{
		  path: '/activity',
		  name: 'activity',
		  component: activity
		},
		{
		  path: '/Classification',
		  name: 'Classification',
		  component: Classification
		},
		{
		  path: '/login',
		  name: 'login',
		  component: login
		},
		{
		  path: '/register',
		  name: 'register',
		  component: register
		},
		{
		  path: '/index',
		  name: 'index',
		  component: index
		},
		{
		  path: '/Mywork',
		  name: 'Mywork',
		  component: Mywork
		},
		{
		  path: '/Latest',
		  name: 'Latest',
		  component: Latest
		}
  ]
})
