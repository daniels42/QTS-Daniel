import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertNotEquals,
    assertStrictEquals,
    assertObjectMatch,
    assertThrows,
}from "http://deno.land/std/testing/asserts.ts"

let nome = 'Robson Murilo'
let lista = ['Jeff', 'Pierce', 'Troy', 'Abed']
let testestring = 'Me chamo T-Bone, a aranha discoteca!'

Deno.test("Teste 1 - Passou!", () => {
    assertEquals(nome, "Robson Murilo"); 
    assertStringIncludes(nome, "Robson");    
})

Deno.test("Teste 2 - Passou!", () => {
    assertArrayIncludes(lista, 
        ["Troy", "Jeff", "Abed"],
        "Ops! Algo deu errado.");
})

Deno.test("Teste 3 - Passou!", () => {

  assertObjectMatch ( 
    {  Biliboteca:  true ,  Biblioteca:  false  } , 
    { 
      Biliboteca:  true , 
    } , 
  ) ;

})



Deno.test("Teste 4 - Falha!", () => {
    assertStringIncludes(testestring, "Hello world!");    
})

Deno.test("Teste 5 - Falha!", () => {
  assertNotEquals("Livros", "Livros");
 
});

Deno.test("Teste 6 - Falha!", () => {
    assertStrictEquals("pressão", "neném");
  });