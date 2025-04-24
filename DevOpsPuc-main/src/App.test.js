import { render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renderiza o componente App sem falhar', () => {
  render(<App />);
});
test('exibe o texto "Bem-vindo"', () => {
  render(<App />);
  const texto = screen.getByText(/bem-vindo/i); // Troque pelo texto real que aparece no App
  expect(texto).toBeInTheDocument();
});
test('exibe o botão "Enviar"', () => {
  render(<App />);
  const botao = screen.getByRole('button', { name: /enviar/i }); // ajuste o nome se necessário
  expect(botao).toBeInTheDocument();
});
test('ao clicar no botão, algo acontece', async () => {
  render(<App />);
  const botao = screen.getByRole('button', { name: /enviar/i });
  await userEvent.click(botao);

  // Agora verifica o resultado do clique (pode ser uma mensagem, etc.)
  const resultado = await screen.findByText(/mensagem enviada/i); // ajuste o texto
  expect(resultado).toBeInTheDocument();
});
test('campo de entrada está presente', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/digite seu nome/i); // ou use label se preferir
  expect(input).toBeInTheDocument();
});