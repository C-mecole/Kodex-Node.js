const stream = require ("stream");

function LogWriter () {
  const writer = new stream.Writable();

  writer._write = function(chunk, _encoding, callback) {
    try{
      console.log (chunk.toString());
      console.log(_encoding)
    } catch (err){
      console.log (err)
    }
  };


  return writer;
}

const W = LogWriter ();
W.write("that chidimma");
W.end();