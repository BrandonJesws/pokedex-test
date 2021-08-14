const urlApi = "https://pokeapi.co/api/v2";

export async function getPokemonsLimitOffset({ limit, offset }) {
    const url = `${urlApi}/pokemon?limit=${limit}&offset=${offset}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(data);
                console.log('Hubo un problema con la petición Fetch:' + error.message);
            })
    });
}

export function getDetailsByUrl({url}) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(data);
                console.log('Hubo un problema con la petición Fetch:' + error.message);
            })
    });
}


export function getPokemonDetailsById({ id }) {
    const url = `${urlApi}/pokemon/${id}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(data);
                console.log('Hubo un problema con la petición Fetch:' + error.message);
            })
    });
}
