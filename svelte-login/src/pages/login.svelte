<script lang="ts">
    import {
      Button,Card,CardBody,CardFooter,CardHeader,CardSubtitle,CardText,CardTitle,
      FormGroup,  Input, Label
    } from 'sveltestrap';
    import { onMount } from 'svelte';
    import { page, metatags, goto } from '@roxi/routify'
    
    import Remote from '../remote/remo.svelte';
    import StatusBar from'../components/StatusBar.svelte';
    import  {setLoginUte} from '../components/NavBar.svelte'; //funzione definita in navbar
    import  { getLocalStorage } from '../remote/remo.svelte';
    import {logprod} from '../enviroments/config.svelte';


    let childstatusbar;
    let childremote;

    let name = '';
    let password = '';
    let focused = false;
    let mes="";
    let item = false;

    onMount(() => {
     console.log($page.title);
     if(getLocalStorage()){
        item=true;
        mes="Utente autenticato !!";
     }
     
    });
    const changeEvent = (Event) => {
      if(logprod){
          console.log("event : ", Event.target.value);
      }
    };

   
    function submit(Event){
      
        const data ={
          nome:name,
          password:password
        }
        
        
        childstatusbar.toggle(false, "Elaborazione in corso", true);
        childremote.callRemote(data, setResult, setErr);


       function setResult(res){
             mes=res.ragsoc.ragsoc;
            if(res.id === "OK"){
              childstatusbar.toggle(false, res.ragsoc.ragsoc, true);
              setLoginUte(res.ragsoc.ragsoc);
              item=true;
              
            }else{
              childstatusbar.toggle(true, res.ragsoc.ragsoc, true);
            }
            hideStatusBar(3000);
           
       }
       function setErr(content){
            childstatusbar.toggle(true, content, true);
            hideStatusBar(5000);
       }
      
       function hideStatusBar(time){
            setTimeout(function(){
              childstatusbar.toggle(false,'',false);
              $goto('./index');
            }, time);
       }
    }
    
	  function isDisable(item) {
				return item;
		}
  </script>
  <!-- svelte-ignore missing-declaration -->
  <Remote bind:this="{childremote}" />
  <!-- svelte-ignore missing-declaration -->
  <StatusBar bind:this="{childstatusbar}" />
 
  
  <!-- svelte-ignore missing-declaration -->
  <div class="py-4 box">
  <Card class="mt-4 " style="width: 38rem; justify-content: center;align-items-center " >
    <CardHeader>
      <CardSubtitle style="text-align: left; color:brown">Autenticazione</CardSubtitle>
      <CardTitle style="text-align: center;">Login</CardTitle>
    </CardHeader>
    
    <CardBody>
      <CardText >
        <form name="loginForm" id="formLogin"on:submit|preventDefault={submit}>
            <FormGroup>
                <Label>Username</Label>
                <Input
                    type="text"
                    required
                    on:blur={() => (focused = false)}
                    on:focus={() => (focused = true)}
                    bind:value={name}
                    placeholder="nimbella"
                />
                <Label>Password</Label>
                <Input
                    type="password"
                    required
                    on:blur={() => (focused = false)}
                    on:focus={() => (focused = true)}
                    bind:value={password}
                    placeholder="action"
                />
            </FormGroup>
            <Button on:click={changeEvent} disabled='{isDisable(item)}'>Button</Button>
        </form>
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
 <!-- on:input={ changeEvent} 
on:change={changeEvent}
-->