// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<li>(<%= artist %>)--<%= title %></li>'),

  initialize: function() {


  },

  events: {
    'click li' : function() {
      this.model.dequeue()
      this.render();
    }
  },

render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
