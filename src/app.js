/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let form = document.getElementById("myForm");
  let sendButton = document.getElementById("send");
  let generateButton = document.getElementById("generate");

  let who = [];
  let action = [];
  let what = [];
  let when = [];

  sendButton.addEventListener("click", function() {
    let whoInput = document.getElementById("whoInput").value;
    let actionInput = document.getElementById("actionInput").value;
    let whatInput = document.getElementById("whatInput").value;
    let whenInput = document.getElementById("whenInput").value;

    if (!whoInput || !actionInput || !whatInput || !whenInput) {
      alert("Por favor, completa todos los campos.");
      return;
    } else {
      who.push(whoInput);
      action.push(actionInput);
      what.push(whatInput);
      when.push(whenInput);
    }

    form.reset();
  });

  generateButton.addEventListener("click", function() {
    if (!who.length || !action.length || !what.length || !when.length) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    let firstRnd = Math.floor(Math.random() * who.length);
    let secondRnd = Math.floor(Math.random() * action.length);
    let thirdRnd = Math.floor(Math.random() * what.length);
    let fourthRnd = Math.floor(Math.random() * when.length);

    let finalExcuse =
      who[firstRnd] +
      " " +
      action[secondRnd] +
      " " +
      what[thirdRnd] +
      " " +
      when[fourthRnd] +
      ".";

    document.getElementById("excuse").innerHTML = finalExcuse;
  });
};
