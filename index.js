const itemsBox = document.getElementById("items-box")
const postButton = document.getElementById("post-button")
const postTitle = document.getElementById("post-title")
const postBody = document.getElementById("post-body")


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

postButton.addEventListener("click",function(event){
    event.preventDefault()
    const newPost = {
        newPostTitle: postTitle.value,
        newPostBody: postBody.value
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost),
    })
        .then(response => response.json())
        .then(data => console.log(data))
})