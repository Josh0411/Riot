/** ----- created by gulp-riot-css -----*/
riot.tag2('inner', '<span>this is the content of inner</span>', '', '', function(opts) {

    this.printInner = function() {

      console.log('from inner event');

    }.bind(this)

});



riot.tag2('notice', '<span> This is the message from <yield> </yield></span> <input type="button" value="clickme" onclick="{clickme}"> <inner id="me"></inner>', '', '', function(opts) {
  this.name = 'notice';

  this.mixin('util');

  this.clickme = function() {

  this.getName();

  }.bind(this)

});
riot.tag2('submit', '<form onsubmit="{handleSubmit}"> <fieldset> <legend>输入代办的数据</legend> <label for="name">事项：</label> <input type="text" name="name"> <label for="date">时间：</label> <input type="text" name="date"> <input type="submit" name="submit" value="提交"> </fieldset> </form>', '', '', function(opts) {


    this.handleSubmit = function(e) {

          var form = e.target[0];
          var name = form.querySelector('[name="name"]').value;
          var date = form.querySelector('[name="date"]').value;
          this.trigger('submit',{title: name, date: date});
      }.bind(this)
});
riot.tag2('to-do', '<span class="title" age="{opts.age}" riot-style="color:{opts.cusColor}"><b>{opts.title}</b></span> <ul> <li each="{item, i in opts.items}"> <span>{item.title}</span>--<span>{item.date}</span> </li> </ul> <input type="button" value="modify" onclick="{modifyAttr}">', '', '', function(opts) {
      this.toDoArray = opts.items;
      this.modifyAttr = function () {
         this.root.querySelector('.title').setAttribute('age', '20');
         console.log(dom);
      }.bind(this)
      this.on('update', function () {
         console.log('tag - to-do -update');
      });
      this.on('mount', function () {
         console.log('tag - to-do -mount-- from inner');
      });
});
