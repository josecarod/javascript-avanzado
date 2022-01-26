const {sumar, restar, multiplicar, dividir} =  require('./calculadora');

describe('Pruebas en el componente calculadora', () =>{
    
    test('Prueba en la función sumar', () =>{
        
        expect(sumar(3, 5)).toBe(8);  
    });
    
    test('Prueba en la función restar', () =>{
        
        expect(restar(5, 3)).toBe(2);  
    });
    
    test('Prueba en la función sumar', () =>{
        
        expect(multiplicar(5, 6)).toBe(30);  
    });
    
    test('Prueba en la función sumar', () =>{
        
        expect(dividir(6, 2)).toBe(3);  
    });
    
});

