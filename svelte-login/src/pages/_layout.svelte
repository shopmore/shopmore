
<script>
    import Nav from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte';
    import { isChangingPage, ready } from "@roxi/routify";
    import { Circle } from 'svelte-loading-spinners'


    // let data = {};
    // getData(callRes);
    // async function getData(cb) {
    //     const res = await fetch('https://cmannocg-qahd7fgfeti-apigcp.nimbella.io/api/backend/menu');
    //     data = await res.json()
       
    //     cb(data)
    //     $ready()
    // }

   
        // fetch("https://cmannocg-qahd7fgfeti-apigcp.nimbella.io/api/backend/menu")
        // .then(response => response.json())
        // .then(json => {
        //     data = json
            
        //     })
        // .then($ready)
        // function callRes(data){
        //     console.log("data : ", data);
        // }
</script>

<Nav />

<slot></slot>
<!-- <h1>{data.ok} - {data.menu}</h1> -->
<Footer />
{#if $isChangingPage}
    <Circle />
    <div>change page......</div>
{/if}