function luhn(number: number) {
  const tableauDeNombres = number.toString().split("").map(Number);
  let res = 0;
  let message: string = "KO";
  let chiffreManquant: number | null = null;

  for (let i = tableauDeNombres.length - 2; i >= 0; i -= 2) {
    if (tableauDeNombres[i] * 2 <= 9) {
      tableauDeNombres[i] *= 2;
    } else {
      tableauDeNombres[i] = tableauDeNombres[i] * 2 - 9;
    }
  }

  for (let j = 0; j < tableauDeNombres.length; j++) {
    res += tableauDeNombres[j];
  }



  if (res % 10 === 0) {
    message = "OK";
  } else {
    chiffreManquant = (10 - (res % 10));

    //  tableauDeNombres.push(chiffreManquant);

    res = 0;
    for (let k = 0; k < tableauDeNombres.length; k++) {
      res += tableauDeNombres[k];
    }

    if (res % 10 === 0) {
      message = "OK";
    }
  }

  return { message, chiffreManquant };
}

const args = process.argv.slice(2);

if (args.length !== 2 || (args[0] !== "-c" && args[0] !== "-f")) {
  console.error("Erreur lors de la saisie !");
  process.exit(1);
}

const numberToCheck = parseInt(args[1], 10);

if (args[0] === "-c") {
  const result = luhn(numberToCheck);
  console.log(result.message);

} else if (args[0] === "-f") {
  const result = luhn(numberToCheck);
  console.log(result.chiffreManquant);
}
