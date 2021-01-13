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
    var img = document.createElement("img");
    var nameP = document.createElement("p");
    var followersP = document.createElement("p");
    var reposP = document.createElement("p");
    var followingP = document.createElement("p");
    
    //Assign a text to it
    nameP.textContent = name;
    img.innerHTML = '<img src="'+avatar_url+'" alt="Profile pic"></img>';
    followersP.innerHTML = '<p>Followers: '+followers+'</p>';
    reposP.innerHTML = '<p>Repos: '+public_repos+'</p>';
    followingP.innerHTML = '<p>Following: '+following+'</p>';
    
    //Add these elements to the new div
    div=img.innerHTML;
    div+=nameP.innerHTML;
    div+=followersP.innerHTML;
    div+=reposP.innerHTML;
    div+=followingP.innerHTML;

    //Then add the div to the HTML page
    result.innerHTML+=div;
    // document.querySelector("div").style.backgroundColor = 'rgb(207, 207, 207)';
    // document.querySelector("div").style.color = 'black';
    

        
    
}

var username = "";
var url = "https://api.github.com/users/yegabebar";
console.log('URL TO SEND: '+url);
var input = document.querySelector('#search');
var form = document.querySelector('#form');
var result = document.querySelector('#result'); 

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