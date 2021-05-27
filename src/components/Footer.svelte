
<script>
   import { Icon } from 'sveltestrap';
   const icon = 'book';
</script>

<footer class="footer footerp">
 
    <div class="container"> </div>
      
      <span class="tleft"><span class="icon"><Icon name={icon} /></span>Applicazione Sveltejs e Sveltestrap</span>
   
  </footer>
  
<style>
.footer {
    position: absolute;
    bottom: 0;
    width: 98.5%;
    height: 60px; /* Set the fixed height of the footer here */
    line-height: 60px; /* Vertically center the text there  //#f5f5f5;*/
    background-color: black;
    margin-bottom: 2px;
    color:white;
    font-weight: bold;
  }
.tleft{
  margin: 10px;
}
.icon{
  padding: 10px;
  margin-left: 0px;
}
  /* .container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
} */
</style>