import Home from './../pages/Home.svelte';
import Login from './../pages/Login.svelte';

export default [
	
	{
		path: '/home',
		component: Home
	},
	
	{
		path: '/login',
		component: Login
	},
	{
		path: '*',
		component: Home
	},
	
]