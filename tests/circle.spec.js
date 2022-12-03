/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const assert = require ('assert')
const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('1')).toBeUndefined();
    expect(typeof circle(1)).toBe('object');
    expect(Object.keys(circle(1)).length).toBe(3);
    expect(circle()).toBeUndefined();
    expect(parseFloat(circle(2).circumference.toPrecision(3))).toBeCloseTo(12.6)
    expect(parseFloat(circle(3).area.toPrecision(2))).toBeCloseTo(28)
    const circle3 = circle(3);
    expect(circle3.radius).toBe(3);
    expect(parseFloat(circle3.area.toPrecision(3))).toBeCloseTo(28.3);
    expect(parseFloat(circle3.circumference.toPrecision(3))).toBeCloseTo(18.8)
  });
});
