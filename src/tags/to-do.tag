<to-do>
<span class="title" age="{ opts.age }" style="color:{ opts.cusColor }"><b>{ opts.title }</b></span>
<ul>
    <li each="{ item, i in opts.items }">
        <span>{ item.title }</span>--<span>{ item.date }</span>
    </li>
</ul>

<input type="button" value="modify" onClick="{ modifyAttr }"/>
   
    <script>
      this.toDoArray = opts.items;
      modifyAttr () {
         this.root.querySelector('.title').setAttribute('age', '20');
         console.log(dom);
      }
      this.on('update', function () {
         console.log('tag - to-do -update');
      });
      this.on('mount', function () {
         console.log('tag - to-do -mount-- from inner');
      });
    </script>

</to-do>