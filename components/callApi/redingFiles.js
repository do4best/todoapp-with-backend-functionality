
async function fetchDAta2(fileName) {
    const result = await fetch(fileName).then(response => response.json());
    const jsonResult = result.slice(1,5);
    console.log(jsonResult)
}


fetchDAta2('https://jsonplaceholder.typicode.com/posts');
