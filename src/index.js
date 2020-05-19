import React from "react";
import ReactDOM from "react-dom";

import Input from "./components/Input";
import Form from "./components/Form";
import Select from "./components/Select";
import Radio from "./components/Radio";
import File from "./components/File";
import Wrapper from "./components/Wrapper";

const questions = [
  {
    title: "Quelle architecture est utilisée pour faire du Symfony ?",
    choices: ["MMV", "MVC", "MMVV"],
    response: 1,
    type: "Select",
    name: "symfony",
    feedback: "Symfony est basé sur le pattern MVC",
  },
  {
    title: "React est-il un framework ?",
    choices: ["yes", "no"],
    response: 1,
    type: "radio",
    name: "react",
    feedback: "React est une librairie",
  },
  {
    title: "JSX c'est quoi ?",
    choices: [
      "JSX est un langage compilé",
      "JSX est un sur-ensemble développé par Facebook",
    ],
    response: 1,
    type: "radio",
    name: "jsx",
    feedback: "JSX est un sur ensemble à JS",
  },
];

let arbo = null;
let count = 0;

arbo = questions.map((question) => {
  return (
    <div key={Math.random()}>
      <h3>
        Q{++count} : {question.title}
      </h3>
      {question.type === "Select" ? (
        <Select name={question.name} choices={question.choices} />
      ) : (
        question.choices.map((choice) => (
          <Input
            type={question.type}
            label={choice}
            nameRadio={question.name}
            value={choice}
            key={Math.random()}
          />
        ))
      )}
    </div>
  );
});

const display = (
  <Wrapper>
    <h2>Bonjour, quel est votre email ?</h2>

    <Input type="email" />
    <Form>{arbo}</Form>
  </Wrapper>
);

ReactDOM.render(display, document.getElementById("root"));
