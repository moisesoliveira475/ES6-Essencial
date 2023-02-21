function fn() {
    return 'code here';
}

const arrowFn = () => 'code here';
const arrowFn2 = () => {
    //mais de uma expressão
    return 'code here'
}
//funções também são objetos 
fn.prop = 'posso criar propriedades';
console.log(fn());
console.log(fn.prop);

//receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam)

logFnResult(fn)