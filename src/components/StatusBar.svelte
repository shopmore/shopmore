<script lang="ts">
    import { Alert } from 'sveltestrap';

    let isActive = false;
    let mesremo  = '';
    export let name = "alert-primary";
    export const toggle = (tipoclasse, mes, hideshow) =>{
        
        mesremo = mes;
        isActive=hideshow;

        if(tipoclasse){
            name="alert-danger";
        }else{
            name = "alert-primary";
        }
    }  
  </script>


<!-- svelte-ignore missing-declaration -->
{#if isActive}
    <Alert color="info" dismissible  class="alert {name}">
            {mesremo}
    </Alert>
{/if}