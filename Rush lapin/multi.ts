function multi(A: number, B: number): void {


    let nombre;
    for (let i = 0; i <= B; i++) {
        nombre = (i + 'x' + A + '=' + i * A);

        console.log(nombre);
    }

}


multi(4, 7);