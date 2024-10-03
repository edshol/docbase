export default function decorate(block) {
    const id = crypto.randomUUID();
    
    // create Label Tag
    const labelElm = document.createElement('label');
    labelElm.classList.add('label');
    labelElm.setAttribute('for',id);
 
    const textDiv = block.querySelector(':scope > div > div');
    labelElm.innerHTML = `${textDiv.innerHTML}`; 
    textDiv.replaceWith(labelElm);


    // create Input Tag
    const inputElm = document.createElement('input');
    inputElm.classList.add('toggle');
    inputElm.setAttribute('type','checkbox');
    inputElm.setAttribute('id',id);

    const accordion_div = block.querySelector(':scope > div');
    accordion_div.appendChild( inputElm );
}