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

  // for (let i = 0; i < 1000; i++) {
  //   const randomPronoun = () => {
  //     return pronouns[Math.floor(Math.random() * pronouns.length)];
  //   };

  //   const randomAdj = () => {
  //     return adjectives[Math.floor(Math.random() * adjectives.length)];
  //   };

  //   const randomNoun = () => {
  //     return nouns[Math.floor(Math.random() * nouns.length)];
  //   };

  for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
    for (let adjective = 0; adjective < adjectives.length; adjective++) {
      for (let noun = 0; noun < nouns.length; noun++) {
        let nameDomain = console.log(
          pronouns[pronoun] + adjectives[adjective] + nouns[noun] + ".com"
        );

        // let nameDomain = randomPronoun() + randomAdj() + randomNoun() + ".com";
      }
    }
  }
};
