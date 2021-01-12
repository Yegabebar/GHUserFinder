async function getUser(){
    //Create request

    const reponse = await fetch(url);
    const data = await reponse.json();
    const {avatar_url} = data;
    const {name} = data;
    const {followers} = data;
    const {public_repos} = data;
    const {following} = data;
    //console.log(avatar_url);

    //We create the elements 
    var div = document.createElement("div");
    var followersP = document.createElement("p");
    var reposP = document.createElement("p");
    var followingP = document.createElement("p");
    
    //Assign a text to it
    followersP.textContent = followers;
    
    reposP.textContent = repos;
    followingP.textContent = following;

    
    console.log("Valeur stockée "+followersP);
    //followers, following, name, public_repos, avatar_url
    
    //Add these elements to the new div
    div.innerHTML.value+=followersP+'<br>';
    div.innerHTML.value+=reposP+'<br>';
    div.innerHTML.value+=followingP;
    
    console.log("Valeur dans div avant ajout dans HTML: "+div);

    //Then add the div to the HTML page
    container.innerHTML=div.followersP.innerHTML;
    container.innerHTML=div.reposP.innerHTML;
    container.innerHTML=div.followingP;
    //Then display the informations to the DOM in a newly-created div
    console.log('test: '+div.followersP);

        
    
}

var username = "";
var url = "https://api.github.com/users/yegabebar";
console.log('URL TO SEND: '+url);
var input = document.querySelector('#search');
var form = document.querySelector('#form');
var container = document.querySelector('#container'); 

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the browser to redirect to another page
    if(input.value==""){
        input.style.borderColor = 'red';
    }else{
        input.style.borderColor = 'silver';
        username = input.value;
        input.value = "";

    }
    getUser();
});