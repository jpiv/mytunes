// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  el: "<ul class='queueView'></ul>",


  initialize: function() {

    this.collection.on('add', function () {
        this.render();
    }, this);

    this.collection.on('remove', function () {
        this.render();
    }, this);
},


  render: function() {

    // var listItems = [];
    // for(var key in this.collection)
    // {
    //   listItems.push(&('<li>' + this.collection[key] + '</li>'))
    // }
    // this.$el.append((new SongQueueEntryView({model: this.collection.at(this.collection.length - 1)}).render()));
  this.$el.empty();
  this.$el.html(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

  }

});
