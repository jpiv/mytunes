describe('Dequeue Song', function () {
  var playSpy, songData1, songData2;

  beforeEach(function() {
    playSpy = sinon.spy(SongQueue.prototype, 'playFirst');
    songData1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    };
    songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title:'test song 2'
    };
  });


      it('removes the from the queue', function() {
      removeSpy = sinon.spy(SongQueue.prototype, 'remove');
      var songQueue = new SongQueue(songData1);
      songQueue.at(0).dequeue();
      expect(removeSpy).to.have.been.called;
      SongQueue.prototype.remove.restore();
    });
    });
