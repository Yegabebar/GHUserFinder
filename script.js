async function getUser(username){

    //Assignation des variables et récupérations éléments du DOM
    let url = "https://api.github.com/users/";

    let form = document.querySelector('#form');
    let result = document.querySelector('#result'); 

    //Vidage section pahe HTML pour éviter empilement des résultats
    document.querySelector("#result").innerHTML="";
    //Création de la requête et attente de la réponse
    const response = await fetch(url+username);
    if(response.status==200){
        
                //Récupération des données de la réponse
                const data = await response.json();
                //Récupération des variables dans la structure du JSON
                const {avatar_url} = data;
                const {name} = data;
                const {followers} = data;
                const {public_repos} = data;
                const {following} = data;
            
                //Création du div principal
                var div = document.createElement("div");
                div.setAttribute('id','searchResult')
                //Création des sous-div
                var img = document.createElement("img");
                var divName = document.createElement("div");
                var divFollowers = document.createElement("div");
                var divRepos = document.createElement("div");
                var divFollowing = document.createElement("div");
                
                //Assignation de valeurs aux sous-div
                img.setAttribute('src',avatar_url);
                img.setAttribute('alt','Profile pic');
                divName.setAttribute('id','userName');
                divName.textContent = name;
                divFollowers.textContent = 'Followers: '+followers;
                divRepos.textContent = 'Repos: '+public_repos;
                divFollowing.textContent = 'Following: '+following;
                //Autre méthode ajout attributs
                //img.src = avatar_url;
                //img.alt = 'Profile pic';
                
                //Ajout des sous-div dans le div principal
                div.append(img);
                div.append(divName);
                div.append(divFollowers);
                div.append(divRepos);
                div.append(divFollowing);
            
                //Puis ajout du div dans page HTML pour affichage résultats
                result.appendChild(div);
    }else if(response.status==404){
        //Si pas de résultat retourné, affichage d'une erreur
        //Création div, insertion valeurs dans div puis ajout div dans page HTML
        var div = document.createElement("div");
        div.textContent = "User not found";
        result.appendChild(div);
    }else{
        //Si résultat autre que Ok ou utilisateur non trouvé, erreur générique:
        //Création div, insertion valeurs dans div puis ajout div dans page HTML
        var div = document.createElement("div");
        div.textContent = "Try again later";
        result.appendChild(div);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); //Empêche l'ouverture d'une autre page à l'envoi du form
    let input = document.querySelector('#search');
    if(input.value==""){
        input.style.borderColor = 'red'; //Surlignage rouge si aucune string entrée dans l'input
    }else{
        input.style.borderColor = 'silver'; 
        let username = input.value; //Récupération nom d'utilisateur
        input.value = ""; //Puis vidage données du champ input
        getUser(username); //Appel fonction de recherche
    }
});