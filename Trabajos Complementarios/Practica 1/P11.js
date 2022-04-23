let num;
process.stdout.write("Ingresa un numero: ");
process.stdin.on('data', function(data) {
    num = data.toString().trim();

    for(let i=1; i<11; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}
process.exit();
});

