function fn() {
    log('hoisting de função');

    function log(value) {
        console.log(value)
    }
}
//chamo a função primeiro e crio ela depois
fn();