<script>
   import Environment from '../enviroments/enviroments.ts'; 

   export const callRemote =(data, cb, cbe)=>{

        console.log("remoteLogin : ", data, );
        let url;// = 'https://cmannocg-qahd7fgfeti-apigcp.nimbella.io/api/backend/login';
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
        
                        //console.log(content);
                    cb(content);
            }catch(err){
                
                cbe(err.stack.split("at ")[1]);
            }
        })();


}

//export default callRemote;
</script>