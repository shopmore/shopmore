<script>
    let isActive = false;
    let mesremo  = '';
    export let name = "alert-primary";

	export const toggle = (tipoclasse, mes, hideshow) =>{
        
        mesremo = mes;
        // isActive = ! isActive;
        isActive=hideshow;

        if(tipoclasse){
            name="alert-danger";
        }else{
            name = "alert-primary";
        }
    }  
  </script>

<div>
    {#if isActive}
        <div class="alert {name}" role="alert">
            {mesremo}
        </div>
    {/if}
</div>