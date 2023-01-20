describe('Testando as funções do arquivo Math', () => {
  const math = require('./Math');
  jest.mock("./Math");

  test("#somar", () => {
    // Aqui testamos se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);

    math.somar = jest.fn().mockImplementation((a, b) => a - b);
    math.somar(5, 1);

    expect(math.somar(5, 1)).toBe(4);

    math.somar.mockReset();

    expect(math.somar(1,2)).toBe(undefined);
  });

  const math2 = require('./Math');

  test("Somar, com spyOn", () => {
    const mockSomar = jest.spyOn(math2, "somar")
      .mockImplementation((a, b) => a + b);
    // mockSomar(5, 1);
    math2.somar(2, 3);

    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(2, 3)
    expect(mockSomar(2, 3)).toBe(5);
  });

  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

    math.somar(5, 1);
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar(5, 1)).toBe(4);
    expect(mockSomar).toHaveBeenCalledTimes(2);
    expect(mockSomar).toHaveBeenLastCalledWith(5, 1);
 
})