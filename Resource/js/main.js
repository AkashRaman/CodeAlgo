'use strict';

const store = document.getElementById('name');

// const guest = {
//     name: 'Guest',
//     email: 'unknown',
//     password: 'unknown'
// }
// localStorage.clear()
// localStorage.setItem('guest',JSON.stringify({
//     name: 'Guest',
//     email: 'unknown',
//     password: 'unknown'
// }))
class database {
    #accounts;
    #currentAccount;
    constructor(){
        this._getLocalStorage();
    }
    
    _getLocalStorage(){
        const data = JSON.parse(localStorage.getItem('currentAccount'));
        if(!data){
            const guest = JSON.parse(localStorage.getItem('guest'));
            this.#currentAccount = guest;
            store.insertAdjacentHTML('afterbegin',`${guest.name}`);
            console.log(guest.name);
            return;
        }
        store.insertAdjacentHTML('afterbegin',`${data.name}`);
        console.log(data.name);
    }
}

const d = new database();


