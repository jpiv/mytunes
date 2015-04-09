// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  this.view =  new SongQueueEntryView();
    this.render();
},

  render: function() {
    this.view.render();
    return this.$el;
  }

});
