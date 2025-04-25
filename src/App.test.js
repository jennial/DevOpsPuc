import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("deve renderizar o valor inicial como 0", () => {
    render(<App />);
    const input = screen.getByDisplayValue("0");
    expect(input).toBeInTheDocument();
  });

  test("deve aumentar o valor ao clicar em Adicionar", () => {
    render(<App />);
    const btn = screen.getByText("Adicionar");
    fireEvent.click(btn);
    const input = screen.getByDisplayValue("1");
    expect(input).toBeInTheDocument();
  });

  test("deve diminuir o valor ao clicar em Diminuir", () => {
    render(<App />);
    const btnAdd = screen.getByText("Adicionar");
    const btnSub = screen.getByText("Diminuir");

    fireEvent.click(btnAdd);
    fireEvent.click(btnSub);
    const input = screen.getByDisplayValue("0");
    expect(input).toBeInTheDocument();
  });

  test("deve renderizar botões numéricos", () => {
    render(<App />);
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("deve renderizar operadores e reagir a clique", () => {
    render(<App />);
    const btn = screen.getByText("+");
    fireEvent.click(btn);
    const input = screen.getByDisplayValue("1");
    expect(input).toBeInTheDocument();
  });
});
