async function getUser(username){

    //Assignation des variables et récupérations éléments du DOM
    const url = "https://api.github.com/users/";
    const form = document.querySelector('#form');
    const result = document.querySelector('#result'); 

    //Vidage section pahe HTML pour éviter empilement des résultats
    document.querySelector("#result").innerHTML="";
    //Création de la requête et attente de la réponse
    const response = await fetch(url+username);
    if(response.status==200){
        
                //Récupération des données de la réponse
                const data = await response.json();
                //Récupération des variables dans la structure du JSON
                const {avatar_url, name, followers, public_repos, following} = data;
            
                //Création du div principal
                const div = document.createElement("div");
                div.setAttribute('id','searchResult')
                //Création des sous-div
                const img = document.createElement("img");
                const divName = document.createElement("div");
                const divFollowers = document.createElement("div");
                const divRepos = document.createElement("div");
                const divFollowing = document.createElement("div");
                
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
        const div = document.createElement("div");
        div.textContent = "User not found";
        result.appendChild(div);
    }else{
        //Si résultat autre que Ok ou utilisateur non trouvé, erreur générique:
        //Création div, insertion valeurs dans div puis ajout div dans page HTML
        const div = document.createElement("div");
        div.textContent = "Try again later";
        result.appendChild(div);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); //Empêche l'ouverture d'une autre page à l'envoi du form
    const input = document.querySelector('#search');
    if(input.value==""){
        input.style.borderColor = 'red'; //Surlignage rouge si aucune string entrée dans l'input
    }else{
        input.style.borderColor = 'silver'; 
        const username = input.value; //Récupération nom d'utilisateur
        input.value = ""; //Puis vidage données du champ input
        getUser(username); //Appel fonction de recherche
    }
});