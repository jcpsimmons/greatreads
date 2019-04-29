import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <a href="http://jcsdesign.me" className="href">
        Josh C. Simmons
      </a>
    </footer>
  );
}
