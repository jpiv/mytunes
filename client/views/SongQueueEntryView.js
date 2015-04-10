// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  el: '<li></li>',
  template: _.template('(<%= artist %>)--<%= title %>'),

  initialize: function() {


  },

  events: {
    'click' : function() {
      this.model.dequeue()
      this.render();
    }
  },

render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
