<script>
    import { url, isActive } from '@sveltech/routify';
    import { onMount, onDestroy } from 'svelte';
    import { Icon } from 'sveltestrap';
    import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Button} from 'sveltestrap';
  
   

    let isOpen = false;
    let uteauth='Eseguire il login';
    let classe="ico";
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
    export const showHide = (hideshow) =>{
      show=hideshow;
    }
    const colors = ['primary','secondary','success','danger','warning','info','light','dark'];
    const links =[
        ['./index','home','info',false, 'shop'],
        ['./about','about','warning',true,'display'],
        ['./login','login','success',true,'person-circle'],
        ['./logout','logout','primary',true,'arrow-right-square'],
        ['./blog','blog','danger',true,'globe']
    ];

    function handleOnClick(event) {
      console.log("aaaaaaaaaaaaaa:", event);
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
</style>

  <!-- svelte-ignore missing-declaration -->
 
  <Navbar class="navbar navbar-dark bg-dark " light expand="md">
      
    <NavbarBrand href="/"><Icon name='person' class={classe}/> {uteauth}</NavbarBrand>
    <Nav class="ms-auto" navbar>
      {#each links as [path, name,color,show, icon]}
        {#if !show}
          <NavItem >
            <Button on:click={() => handleOnClick($url(path))} 
              href={$url(path)} {color} class="btp" 
              size="sm"
              >
              <Icon name={icon} /> {name}
            </Button>
          </NavItem>
        {/if}
      {/each}
    </Nav>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
          {#each links as [path, name,color,show, icon]}
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
      </Nav>
    </Collapse>
  </Navbar>
 
<div class="py-2"></div>