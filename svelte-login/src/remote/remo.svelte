
<script context="module">
    export const callRemoteMenu =(data, cb, cbe)=>{
        if(!Environment.production){
            console.log("remoteMenu : ", data, );
        }
        let url;
        if(Environment.production){
            url = Environment.urlMenup;
        }else{
            url = Environment.urlMenul;
        }

        (async () => {
            try{
                const rawResponse = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({tipo:1})
                    });
                    const content = await rawResponse.json();

                        console.log(content);
                    
                    cb(content);
            }catch(err){
                
                cbe(err.stack.split("at ")[1]);
            }
        })();
}
export function getLocalStorage(){
    return localStorage.getItem('token');
}
export function removeLocalStorage(key){
    localStorage.removeItem(key);
}

</script>

<script>
   import Environment from '../enviroments/enviroments.ts'; 

   export const callRemote =(data, cb, cbe)=>{
        if(!Environment.production){
            console.log("remoteLogin : ", data, );
        }
        let url;
         if(Environment.production){
             url = Environment.urlLoginp;
         }else{
             url = Environment.urlLoginl;
         }
 
        const nome=data.nome;
        const password=data.password;

       
        (async () => {
            try{
                const rawResponse = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({nome:nome, password:password})
                    });
                    const content = await rawResponse.json();
                    localStorage.setItem('token', content.token);
                    cb(content);
            }catch(err){
                
                cbe(err.stack.split("at ")[1]);
            }
        })();
}
</script>