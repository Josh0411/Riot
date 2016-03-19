


<notice>

  <span> This is the message from <yield/> </span>
  <input type="button" value="clickme" onclick="{ clickme}" />

  <inner id="me"></inner>

  <script>
  this.name = 'notice';

  this.mixin('util');

  


  clickme() {

  //var dom = this.root.querySelector('#me');
  //dom._tag.printInner();

  this.getName();

     

  }


  

  </script>


</notice>