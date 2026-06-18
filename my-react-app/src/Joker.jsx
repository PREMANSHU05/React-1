import { useEffect, useState } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getnewjoke = async () => {
    let response = await fetch(URL);
    let jsonresponse = await response.json();
    setjoke({ setup: jsonresponse.setup, punchline: jsonresponse.punchline });
  };

  useEffect(() => {
    async function getfirstjoke() {
      let response = await fetch(URL);
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      setjoke({ setup: jsonresponse.setup, punchline: jsonresponse.punchline });
    }
    getfirstjoke();
  }, []);
  let [joke, setjoke] = useState(getnewjoke);

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getnewjoke}>New Joke</button>
    </div>
  );
}
