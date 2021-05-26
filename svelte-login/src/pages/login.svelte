<script lang="ts">
    import {
      Button,Card,CardBody,CardFooter,CardHeader,CardSubtitle,CardText,CardTitle,
      FormGroup,  Input, Label
    } from 'sveltestrap';
    import { onMount } from 'svelte';
    import Remote from '../remote/remo.svelte';
    import StatusBar from'../components/StatusBar.svelte';

   
    let childstatusbar;
    let childremote;
    let childute;

    let name = '';
    let password = '';
    let focused = false;
    let mes="";
    

    onMount(() => {
     
    });
    const changeEvent = (Event) => {
        console.log("event : ", Event.target.value);
    };

   
    function submit(Event){
        console.log("valueForm ", {name}, {password});
        const data ={
          nome:name,
          password:password
        }
        console.log(data);
        childstatusbar.toggle(false, "Elaborazione in corso", true);

        childremote.callRemote(data, setResult, setErr);


       function setResult(res){
             mes=res.ragsoc.ragsoc;
            if(res.id === "OK"){
              childstatusbar.toggle(false, res.ragsoc.ragsoc, true);
            //  childute.setLoginUte(res.ragsoc.ragsoc);
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
            }, time);
       }
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
                />
                <Label>Password</Label>
                <Input
                    type="password"
                    required
                    on:blur={() => (focused = false)}
                    on:focus={() => (focused = true)}
                    bind:value={password}
                />
            </FormGroup>
            <Button on:click={changeEvent}>Button</Button>
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