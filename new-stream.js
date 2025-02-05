const stream = require ("stream");


function EvenReadStream(){
  let even = 0;
  const reader = new stream.Readable();
  reader._read = function () {
    const evenString = String(even +=2);
    reader.push(evenString);
    if (even >= 40){
      reader.push(null)
    }
  };

  return reader;
}

  


const s = EvenReadStream();
s.on("data", (data)=> {
  console.log (data.toString())}
)
  s.on ("error", (err) => {
  console.log(err)
})
s.on("end", () => {
  console.log ('I have ended')
})