
<script context="module">
  let uteauth=txtlogin;//'Eseguire il login';
 // lo script login richiama la funzione quando torna la callrest
  export function  setLoginUte(ragsoc){
       
       //uteauth=ragsoc; 
       // viene inizializzata dalla login purtroppo non aggiorna la variazione nella pagina html
       // sicuro mi sfugge qualcosa che devo rivedere
       //uso document x aggiornare l'interfaccia
       const ico = document.getElementById("idutei");
       let ute   = document.getElementById("idute");
          
           //ute.appendChild(ico);
           if(ragsoc===""){
               ute.innerText=txtlogin + ' ';
               ico.setAttribute("class","ico bi-person");
           }else{
               ute.innerText=ragsoc + ' ';
               ico.setAttribute("class","icol bi-person");
           }
           
    }
</script>


<script>
    import { url, isActive, layout, page } from '@roxi/routify';
    import { onMount, onDestroy } from 'svelte';
    import { Icon } from 'sveltestrap';
    import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Button} from 'sveltestrap';
    import  {callRemoteMenu} from '../remote/remo.svelte'; //funzione definita in navbar
    import {txtlogin, logprod} from '../enviroments/config.svelte';
    let isOpen = false;
    let uteauth=txtlogin;//'Eseguire il login';
    let classe="ico";
    let menu;
    let errore;

    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
    export const showHide = (hideshow) =>{
      show=hideshow;
    }
    const colors = ['primary','secondary','success','danger','warning','info','light','dark'];
    // const links =[
    //     ['./index','home','info',false, 'shop'],
    //     ['./about','about','warning',true,'display'],
    //     ['./login','login','success',true,'person-circle'],
    //     ['./logout','logout','primary',true,'arrow-right-square'],
    //     ['./blog','blog','danger',true,'globe']
    // ];

    onMount(async () => {

      console.log($page.title);
      callRemoteMenu('', setResult, setErr);// call rest

        function setResult(data){
          console.log("setResult links : ",data.menu);
            menu=data.menu;
          //  console.log(" links : ",links1);
        }
        function setErr(err){
          console.log("setErr : ",err);
          errore=err; 
        }
	  });

    

    function handleOnClick(event) {
      if(logprod){
        console.log("handleOnClick:", event);
      }
      
      isOpen=false;
    }

    export function  setLoginUte(ragsoc){
      uteauth=ragsoc;
      classe="icol";
    }
</script>

<style>
  
  /* class:selected={$isActive(path)} */
  :global(.btp){
    margin: 8px;
    padding: 10px;
    width:100px;
    height: 70%;
  }
  :global(.ico){
    color:red;
  }
  :global(.icol){
    color:green;
  }
  .loading{
    background-color: green;
    width: 40%;
    height: 60px;
    text-align: center;
  }
  .errore{
    margin-top: 10px;
    background-color: red;
    width: 40%;
    text-align: left;
  }
</style>

  <!-- svelte-ignore missing-declaration -->
 
  <Navbar class="navbar navbar-dark bg-dark " light expand="md">
      
    <NavbarBrand  href="/">
      <Icon name='person' id="idutei" class={classe}/>
    </NavbarBrand>
    <NavbarBrand id="idute" href="/">
      {uteauth}
    </NavbarBrand>

    <Nav class="ms-auto" navbar>
      {#if menu}
        {#each menu as [path, name,color,show, icon]}
          {#if !show}
            <NavItem>
              
              <Button on:click={() => handleOnClick($url(path))} 
                href={$url(path)} {color} class="btp" 
                size="sm"
                
                >
                <Icon name={icon} /> {name}
              </Button>
              <!-- <a href="/non-routify-page" target="_self">Legacy Navigation</a> -->
            
            </NavItem>
          {/if}
        {/each}
      {/if} 
    </Nav>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        {#if menu}
          {#each menu as [path, name,color,show, icon]}
            {#if show}
              <NavItem >
                <Button size="sm" on:click={() => handleOnClick($url(path))} 
                        href={$url(path)} 
                        {color} 
                        class="btp" 
                >
                <Icon name={icon} /> {name} 
                </Button>
              </NavItem>
            {/if}
          {/each}
        {/if}
      </Nav>
    </Collapse>
  </Navbar>
 
  <div class="py-2">
    {#if !menu} 
      <p class="loading">loading...</p>
    {/if}
    
    {#if errore}
      <div class="errore">si è verificato un errore : {errore} </div>
    {/if}
  </div>