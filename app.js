// Escribe tu código aquí.
const bigWords = (referenceString, arrayOfStrings) => {
    return arrayOfStrings.filter(word => word.length > referenceString.length);
}

const printArray = (stringsArray) => {
    const list = document.getElementById('wordsList'); 
    list.innerHTML = ''; 
    stringsArray.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        list.appendChild(listItem);
    });
}
