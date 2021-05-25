<script>
    import callRemote from '../remote/Remote.js';
    // let remote = new Remote();
    import Child from '../components/StatusBar.svelte';
    let child;
    let mes;
    
    function remoteLogin(){
        document.querySelector('#formLogin').addEventListener('submit', (e) => {
// blocco evento di submit del form
            console.log('event.default');
            e.preventDefault();

            const form = document.querySelector('#formLogin');
            const data = formToJSON(form.elements);
            console.log(data);

            const jdata = JSON.stringify(data);
            console.log(jdata);
           
            child.toggle(false, "Elaborazione in corso", true);
    
            callRemote(data, setResult, setErr);
        });
        const formToJSON = elements => [].reduce.call(elements, (data, element) => {
            data[element.name] = element.value;
            return data;
        }, {}); 

        function setResult(res){

            mes=res.ragsoc.ragsoc;
            if(res.id === "OK"){
                child.toggle(false, res.ragsoc.ragsoc, true);
            }else{
                child.toggle(true, res.ragsoc.ragsoc, true);
            }
            hideStatusBar(3000);
        }
        function setErr(content){
            child.toggle(true, content, true);
            hideStatusBar(5000);
        }
        function hideStatusBar(time){

            setTimeout(function(){
                child.toggle(false,'',false);
            }, time);
        }
    }

    window.remoteLogin= remoteLogin;
</script>
    
<Child bind:this="{child}" />

<div class="container  ">
    <div class="row justify-content-center">
    <div class="card "  style="width: 38rem;">
        <div class="card-header">
          Autenticazione
        </div>
        <div class="card-body">
          <h5 class="card-title">Login</h5>
         
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <form name="loginForm" id="formLogin" onSubmit="return false">
                <div class="form-group">
                  <label for="email">Nome</label>
                  <input
                    required
                    class="form-control"
                    type="text"
                    name="nome"
                    id="nome"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    class="form-control"
                    required
                    minlength="6"
                    ngModel
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div class="form-group py-4">
                  <div class="row">
                    <div class="col-6">
                        <button class="btn btn-primary  btn-lg" onclick="remoteLogin()">Log in</button>
                    </div>
                    <div class="col-6">
                       
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <footer class="footer fw-bolder">
            {#if mes}
                {mes}
            {/if}
          </footer>
        </div>
      </div>
    </div>
</div>
