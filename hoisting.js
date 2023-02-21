function fn() {
    console.log(text);
    var text = 'exemplo'
    console.log(text)
}
fn();

function fn() {
    var text;
    console.log(text);

    text = 'exemplo';

    console.log(text)
}
fn();