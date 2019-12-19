/*
*
* Promise.allSettled
* Promise.any
*
*/

// Promise.all: Short-circuits quando uma promise for rejeitada(rejected)
// Promise.race: Short-circuits quando uma promise concluir (fulfilled ou rejected)

// Promise.allSettled: Sem short-circuit
// Promise.any:	Short-circuits quando uma promise concluir com sucesso (fulfilled)


// Promise.allSettled
const promises = [
    fetch('/url'),
    fetch('/url'),
    fetch('/url'),
];

await Promise.allSettled(promises);
removerLoading();


// Promise.any
try {
    const primeiraPromise = await Promise.any([
        fetch('/url').then(() => 'primeiro'),
        fetch('/url').then(() => 'segundo'),
        fetch('/url').then(() => 'terceiro'),
    ]);

    console.log(primeiraPromise);

} catch (error) {
    console.error(error);
}