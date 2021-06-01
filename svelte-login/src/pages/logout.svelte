<script lang="ts">
    import {
      Button,Card,CardBody,CardFooter,CardHeader,CardSubtitle,CardText,CardTitle,
      FormGroup,  Input, Label
    } from 'sveltestrap';
    import { onMount } from 'svelte';
    import { page,url,  goto } from '@roxi/routify'
  
    import StatusBar from'../components/StatusBar.svelte';
    import { removeLocalStorage } from '../remote/remo.svelte';
    import  {setLoginUte} from '../components/NavBar.svelte';
    import {logprod} from '../enviroments/config.svelte';
    //import Environment from '../enviroments/enviroments'; 
   
    
    let childstatusbar;
    let mes=$page.title;

    onMount(() => {
     console.log($page.title);
     setLogout();
    });
    const changeEvent = (Event) => {
        if(logprod){
            console.log("event : ", Event.target.value);
        }
    };

    function setLogout(){
       
        childstatusbar.toggle(false, "Logout andato a buon fine", true);
        removeLocalStorage("token");
        setLoginUte("");
        hideStatusBar(2000);
       function hideStatusBar(time){
            setTimeout(function(){
              childstatusbar.toggle(false,'',false);
              $goto('./index');
            }, time);
       }
    }
   
  </script>

    <!-- svelte-ignore missing-declaration -->
    <StatusBar bind:this="{childstatusbar}" />

  
  <!-- svelte-ignore missing-declaration -->
  <div class="py-4 box">
    
  <Card class="mt-4 " style="width: 38rem; justify-content: center;align-items-center " >
    <CardHeader>
      <CardSubtitle style="text-align: left; color:brown"></CardSubtitle>
      <CardTitle style="text-align: center;">Logout</CardTitle>
    </CardHeader>
    
    <CardBody>
      <CardText >
       
        <div style="width: 38rem; text-align: center ">
            Logout andato a buon fine
        </div>
      </CardText>
    </CardBody>

    <CardFooter class="py-4">
        {#if mes}
            {mes}
        {/if}
    </CardFooter>
  </Card>
</div>

<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:30px;
}
</style>
