function bunnyroad(instructions: string[]): { x: number, y: number } {
    let mouvement_x = 0;
    let mouvement_y = 0;


    for (let i = 0; i < instructions.length; i++) {

        if (instructions[i] === 'droite') {
            mouvement_x += 1;
        }
        else if (instructions[i] === 'gauche') {
            mouvement_x -= 1;
        }

        else if (instructions[i] === 'nord') {
            mouvement_y += 1;
        }


        else {
            mouvement_y -= 1;
        }
    }
    return { x: mouvement_x, y: mouvement_y }
}
const instructions = ['droite', 'droite', 'gauche', 'droite', 'nord', 'sud', 'nord'];
const positionFinale = bunnyroad(instructions);
console.log(`Le lapin est à la position (${positionFinale.x}, ${positionFinale.y})`);