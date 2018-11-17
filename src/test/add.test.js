const add = (a,b) => a+b;
const greeting = (name="Anonymous") => `Hello ${name}!`;


test("Addition should be work correctly", ()=>{
    const result = add(3,4);
    expect(result).toBe(7);
})

test('Greeting Test',()=>{
   const result = greeting('mahesh');
   expect(result).toBe("Hello mahesh!"); 
})

test('Greeting Test no name',()=>{
    const result = greeting();
    expect(result).toBe("Hello Anonymous!"); 
 })