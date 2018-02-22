function wait (delay) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, delay);
        setTimeout(reject, 5000)
    })
}



function wait (delay) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve()
        }, delay)
    })

}

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(6000).then(() => console.log("hello"));



function getCommit (username){

let url = `https://api.github.com/users/${username}/repos`;
return fetch(url, {headers: {'Authorization': 'token }})
.then((response) => response.json() )
    .then((repos) => repos.map((repo) => repo.pushed_at));

}


getCommit("zachramos").then((lastCommit) => console.log(lastCommit));


// 0 payload commits[0]