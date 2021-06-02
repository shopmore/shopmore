<script lang="ts">
    import { Carousel, CarouselItem } from 'sveltestrap';
    import { page, metatags, afterPageLoad } from '@roxi/routify'
    import { onMount } from 'svelte';
   

    let img = 'image/shopmore.jpg';

    onMount(() => {
     console.log($page.title);
    });
    $afterPageLoad(page => {
      console.log('loaded ' + page.title)
    })
</script>
  
  <!-- svelte-ignore missing-declaration -->
  
  <div class="box site-logo">
    <img class=" logoimage w-50 d-block"src={img} alt="about." aria-hidden="true">
  </div>

<style>
  .box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5%;
      max-width:80%;
      margin-left:center;
  }


  @media screen and (max-width:1024px ){
      div.site-logo {
          max-width:90%;
      }

      img.logoimage {
          max-width:100%;
      }
  }
</style>
