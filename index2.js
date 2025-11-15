function afficherPersonne(pers){
    console.log(`nom=${pers.nom} prenom=${pers.prenom}`);
}

let personne={
    nom:"fouad",
    prenom:"achraf"
};

afficherPersonne(personne);//nom=fouad prenom=achraf

//autre facon avec la destructuration
afficherPersonne({nom:"ALI", prenom:"Hassan"});//nom=ALI prenom=Hassan