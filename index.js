const itemsBox = document.getElementById("items-box")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(results => results.json())
    .then(data =>{
        const postArr = data.slice(0, 5)
        for(let post of postArr){
            itemsBox.innerHTML += `
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                <hr />
            `
        }
        console.log(postArr)
    })


    