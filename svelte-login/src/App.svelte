<script>
import router from "page";
import routes from './Routes/route.js';
import NavBar from "./components/NavBar.svelte";
import StatusBar from './components/StatusBar.svelte'

let page = null;
  let params = {};
  let user = true;

  routes.forEach(route => {
    router(
      route.path,
      (ctx, next) => {
        params = { ...ctx.params };
        next();
      },
      () => {
        if (route.auth && !user) {
          router.redirect("/");
        } else {
          page = route.component;
        }
      }
    );
  });
  router.start();
</script>



<main style="">
	<NavBar />
	<StatusBar></StatusBar>
	  <svelte:component this={page} {params} />
  </main>

  