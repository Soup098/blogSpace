const itemsBox = document.getElementById("items-box")
const postButton = document.getElementById("post-button")
const postTitle = document.getElementById("post-title")
const postBody = document.getElementById("post-body")

let postArr = []

function renderPosts(){
    itemsBox.innerHTML = ""
    for(let post of postArr){
        itemsBox.innerHTML += `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            <hr />
        `
    }
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(results => results.json())
    .then(data =>{
        postArr = data.slice(0, 5)
        renderPosts()
        console.log(postArr)
    })

postButton.addEventListener("click",function(event){
    event.preventDefault()
    const newPost = {
        title: postTitle.value,
        body: postBody.value
    }
    postTitle.value = ""
    postBody.value = ""
    
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost),
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(response => response.json())
        .then(post =>{
            postArr.unshift(post)
            renderPosts()
        })
})