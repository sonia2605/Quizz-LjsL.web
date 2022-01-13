const form = document.querySelector('.form-quizz');
let tableauResultats=[];
const reponses = ['a','a','a','a'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector(".résultats h3");
const noteResultat=document.querySelector(".note");
const aideResultat=document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question-block");
let verifTableau = [];

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //console.log(document.querySelector('input[name="q1"]:checked').value);
 
// on fait une boucle 
for(i=1; i<5; i++){
    tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
}
//console.log(tableauResultats);
verifFunc(tableauResultats);
tableauResultats=[];
})

function verifFunc(tabResultats) {
    for(let a=0; a<4; a++){
       if(tabResultats[a]=== reponses[a]){
           verifTableau.push(true);
       } else{
           verifTableau.push(false)
       }
    }
//console.log(verifTableau);
afficherResultats(verifTableau);
couleursFonction(verifTableau);
verifTableau=[];
}

    function afficherResultats(tabCheck){
        const nbDeFautes = tabCheck.filter(el => el !== true).length;
        //console.log(nbDeFautes);
        switch(nbDeFautes){
            
    case 0:
    titreResultat.innerText ="✔️ Bravo, c'est un sans faute ! ✔️";
    aideResultat.innerText = 'Tu es mon "chouchou"';
    noteResultat.innerText = "4/4";
    break;

    case 1:
    titreResultat.innerText ="✨ C'est presque ça !✨ ";
    aideResultat.innerText = 'Retente une autre réponse dans la case rouge, puis valide à nouveau!';
    noteResultat.innerText = "3/4";
    break;

    case 2:
    titreResultat.innerText ="😭 Il y a  quelques erreurs! 😭";
    aideResultat.innerText = 'Un peu de concentration avant de checker !';
    noteResultat.innerText = "2/4";
    break;

    case 3:
    titreResultat.innerText =" 👀 Hein! On se connait si mal ! 👀";
    aideResultat.innerText = "C'est fait exprès !?!";
    noteResultat.innerText = "1/4";
    break;

    case 4:
    titreResultat.innerText =" 👎Oups, les jeux sont faits !👎";
    aideResultat.innerText = 'On va passer du temps ensemble avant de devenir de parfaits inconnus !';
    noteResultat.innerText = "0/4";
    break;
    default: 
    "C'est rigolo, ça ne devrait pas faire ça !";
    }
    }
function couleursFonction(tabValeurBollean) {
    for(let j=0; j<tabValeurBollean.length; j++){
        if (tabValeurBollean[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');
            setTimeout(()=>{
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
}
toutesLesQuestions.forEach(item => {
    item.addEventListener('click', ()=> {
        item.style.background= "white";
    })
})






