/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["The", "Our", "My", "A"];
  let adjectives = ["great", "big", "small", "clever", "giant", "obnoxious"];
  let nouns = ["cat", "grandma", "dog", "llama", "bird", "coworker"];

  for (let i = 0; i < 1000; i++) {
    const randomPronoun = () => {
      return pronouns[Math.floor(Math.random() * pronouns.length)];
    };

    const randomAdj = () => {
      return adjectives[Math.floor(Math.random() * adjectives.length)];
    };

    const randomNoun = () => {
      return nouns[Math.floor(Math.random() * nouns.length)];
    };

    let nameDomain = randomPronoun() + randomAdj() + randomNoun() + ".com";

    console.log(nameDomain);
  }
};
