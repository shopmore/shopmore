import Enviroments from '../enviroment/enviroments';
   
function callRemote(data, cb, cbe){

        console.log("remoteLogin : ", data);
        let url;
        if(Enviroments.production){
            url = Enviroments.urlLoginp;
        }else{
            url = Enviroments.urlLoginl;
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

    export default callRemote;


