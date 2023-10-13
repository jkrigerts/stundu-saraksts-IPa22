import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

// 1. Iegūt elementu no index.html
const elementsNoHTML = document.getElementById("root");

// 2. Parasto elementu pārvēršs par React sakni
const sakne = ReactDOM.createRoot(elementsNoHTML);

// 3. Uz ekrāna parāda pirmo React komponenti
sakne.render(<App />);
