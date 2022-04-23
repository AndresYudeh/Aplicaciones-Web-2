let num;
//let can=10;
process.stdout.write("Ingresa un numero: ");
process.stdin.on('data', function(data) {
    num = data.toString().trim();

    for(let i=1; i<11; i++){
    //process.stdout.write(`${num} * ${i} = ${num * i}`);
    console.log(`${num} * ${i} = ${num * i}`)
   
}
process.exit();
});

