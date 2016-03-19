<submit>
 <form onsubmit="{handleSubmit}">

    <fieldset>
    <legend>输入代办的数据</legend>
    <label for="name">事项：</label>
     <input type="text" name="name"/>
     <label for="date">时间：</label>
      <input type="text" name="date"/>
    <input type="submit" name="submit" value="提交"/>

    </fieldset>

    </form>
    <style>
    fieldset {
     border: 2px dashed threedface;
    }
    </style>

    <script>

    // console.log(this.parent);

    handleSubmit(e) {
  
          var form = e.target[0];
          var name = form.querySelector('[name="name"]').value;
          var date = form.querySelector('[name="date"]').value;
          this.trigger('submit',{title: name, date: date});
      }
    </script>

</submit>