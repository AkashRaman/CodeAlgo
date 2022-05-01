'use strict';

const store = document.getElementById('name');
const userNameList = document.querySelector('.user-name-list');
const logoutList = document.querySelector('.logout-list');
const modal = document.querySelector('.redirecting-modal');
const redBox = document.querySelector('.red-box');
// const guest = {
//     name: 'Guest',
//     email: 'unknown',
//     password: 'unknown'
// }
// localStorage.clear()
// localStorage.setItem('guest',JSON.stringify({
//     firstName: 'Guest',
    // lastName: 'Guest',
//     email: 'unknown',
//     password: 'unknown'
// }))
class database {
    #accounts;
    #currentAccount;
    constructor(){
        this._getLocalStorage();
        userNameList.addEventListener('mouseover', function(){
            logoutList.classList.remove('hidden');
        });
        logoutList.addEventListener('mouseover', function(){
            logoutList.classList.remove('hidden');
        });
        userNameList.addEventListener('mouseleave', function(){
            logoutList.classList.add('hidden');
        });
        logoutList.addEventListener('mouseleave', function(){
            logoutList.classList.add('hidden');
        });
        logoutList.addEventListener('click',this._logout)
    }
    
    _getLocalStorage(){
        const data = JSON.parse(localStorage.getItem('currentAccount'));
        if(!data){
            modal.classList.remove('hidden')
            setTimeout(redBox.classList.remove('hidden'),500)
            setTimeout(this._locationToLogOrSign,2000);
            
            // const guest = JSON.parse(localStorage.getItem('guest'));
            // this.#currentAccount = guest;
            // store.insertAdjacentHTML('afterbegin',`${guest.firstName}`);
            // console.log(guest.name);
            return;
        }
        store.insertAdjacentHTML('afterbegin',`${data.firstName}`);
    }

    _logout(){
        localStorage.removeItem('currentAccount')
        location.href = "https://akashraman.github.io/CodeAlgo/"
    }
    _locationToLogOrSign(){
        location.href = "https://akashraman.github.io/CodeAlgo-LogOrSign/"
    }
}

const d = new database();


