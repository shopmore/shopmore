<script lang="ts">
	import {Router} from '@sveltech/routify';
	import {routes} from '@sveltech/routify/tmp/routes';

</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
</svelte:head>
<Router {routes}/>