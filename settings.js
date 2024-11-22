import localStorageHelper from "./local-storage.js";

const storage = new localStorageHelper();
const darkModeButton = document.getElementById('toggle-dark-mode');
const europeCheckBox = document.getElementById('EUROPE');
const healthCheckBox = document.getElementById('HEALTH');
const sportCheckBox = document.getElementById('SPORT');
const businessCheckBox = document.getElementById('BUSINESS');
const travelCheckBox = document.getElementById('TRAVEL');


if (storage.get('dark-mode') == 1){
    document.body.classList.add('dark-mode');
}

if (storage.get('europe') == 1){
    europeCheckBox.checked = true;
}

if (storage.get('health') == 1){
    healthCheckBox.checked = true;
}

if (storage.get('sport') == 1){
    sportCheckBox.checked = true;
}

if (storage.get('business') == 1){
    businessCheckBox.checked = true;
}

if (storage.get('travel') == 1){
    travelCheckBox.checked = true;
}

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')){
        storage.set('dark-mode', 1);
    }else{
        storage.set('dark-mode', 0);
    }
});

europeCheckBox.addEventListener('change', () => {
    if(europeCheckBox.checked) {
        storage.set('europe', 1);
    } else {
        storage.set('europe', 0);
    }
});

healthCheckBox.addEventListener('change', () => {
    if(healthCheckBox.checked) {
        storage.set('health', 1);
    } else {
        storage.set('health', 0);
    }
});
  
sportCheckBox.addEventListener('change', () => {
    if(sportCheckBox.checked) {
        storage.set('sport', 1);
    } else {
        storage.set('sport', 0);
    }
});

businessCheckBox.addEventListener('change', () => {
    if(businessCheckBox.checked) {
        storage.set('business', 1);
    } else {
        storage.set('business', 0);
    }
});

travelCheckBox.addEventListener('change', () => {
    if(travelCheckBox.checked) {
        storage.set('travel', 1);
    } else {
        storage.set('travel', 0);
    }
});
  