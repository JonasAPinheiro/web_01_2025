const hello = () => console.log("Hello World"); 

const soma1 = (a:number, b:number, c?:number) => c !== undefined ? a + b + c : a + b;

soma1(10,20);

soma1(10,20,30);