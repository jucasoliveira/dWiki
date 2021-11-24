import { dWiki } from "../../declarations/dWiki";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with dWiki actor, calling the greet method
  const greeting = await dWiki.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
