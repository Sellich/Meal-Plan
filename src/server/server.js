const http = require('http');

/*const OpenAI = require ('openai');

const openai = new OpenAI({apiKey: ''});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();*/

const server = http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
})

server.listen(8080);
