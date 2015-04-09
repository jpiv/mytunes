// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<li>(<%= artist %>)--<%= title %></li>'),

  initialize: function() {
  },

render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
