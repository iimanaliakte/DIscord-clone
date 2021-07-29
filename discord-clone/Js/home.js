
firebase.auth().onAuthStateChanged(async user =>{
    if(user){
        window.location.href = './mainhome.html';
    }else{
        console.log('NO');
    }
});