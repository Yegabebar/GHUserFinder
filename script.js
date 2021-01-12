function getUser(){
    //Create request
    let request = new XMLHttpRequest(); //Create object
    request.open('GET',url); //First parameter GET/POST, 2nd param: url
    request.responseType = 'json'; //Type of return we want
    request.send(); //Sending the request

    //This function will be triggered as soon as we'll get a reply
    request.onload = function() {
        if(request.readyState === XMLHttpRequest.DONE){ //If the request has been done
            if(request.status === 200){ //If the request status is correct,
                let response = request.response; //Stores the reply
                //let data = JSON.parse(response);

                //We create the elements
                var div = document.createElement("div");
                var followersP = document.createElement("p");
                var reposP = document.createElement("p");
                var followingP = document.createElement("p");


                console.log("Valeur brute "+response.followers); 

                //Assign a text to it
                followersP.textContent = response.followers;
                reposP.textContent = response.public_repos;
                followingP.textContent = response.following;

                
                console.log("Valeur stockée "+followersP.innerHTML);
                //followers, following, name, public_repos, avatar_url
                
                //Add these elements to the new div
                div.innerHTML+=followersP+'<br>';
                div.innerHTML+=reposP+'<br>';
                div.innerHTML+=followingP;
                
                console.log("Valeur dans div avant ajout dans HTML: "+div.innerHTML);

                //Then add the div to the HTML page
                container.innerHTML=div.followersP.innerHTML;
                container.innerHTML=div.reposP.innerHTML;
                container.innerHTML=div.followingP.innerHTML;
                //Then display the informations to the DOM in a newly-created div
                console.log('test: '+div.followersP);
            }else{
                alert('An error occurred, please try again later');
            }
        }
    }
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