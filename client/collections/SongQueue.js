// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
        if (this.length === 1) {
          this.playFirst();
        }
      },this);

    this.on('ended', function () {

         if (this.length >= 1) {
          this.playNext();
        }

    }, this);

    this.on('dequeue', function  (song) {
      this.remove(song);

    }, this);


  },

  playNext: function () {
    this.shift();
    this.playFirst();
  },

  playFirst: function() {
    this.at(0).play();
  }

});
