const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    const products = productDetails('Alcool gel', 'Máscara');
    
    // Teste se o retorno da função é um array.
    expect(Array.isArray(products)).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(products.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof products[0] === 'object' && typeof products[1] === 'object').toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const result = [{ name: 'Alcool gel', details: { productId: 'Alcool gel123', } }, { name: 'Máscara', details: { productId: 'Máscara123', } }];
    expect(products).toEqual(result);
    // Teste se os dois productIds terminam com 123.
    expect(validateProductIdEnded123(products)).toBe(true);
  });
});


function productIdEnded123(product) {
  const productId = product.details.productId;
  const length = productId.length;
  if (productId.includes('123') && productId[length - 1] === '3') {
    return true;
  }
  return false;
}

function validateProductIdEnded123(array) {
  if (!(productIdEnded123(array[0]) && productIdEnded123(array[1]))) {
    return false;
  }
  return true;
}