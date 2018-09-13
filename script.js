
/*vote*/
function vote(){
    let vote = document.getElementById('votes');
    let count = parseInt(vote.innerHTML);
    count++;
    votes.innerHTML = count;
}
function votedown(){
    let vote = document.getElementById('votes');
    let count = parseInt(vote.innerHTML);
    count--;
    vote.innerHTML = count;
}