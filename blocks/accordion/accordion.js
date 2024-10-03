export default function decorate(block) {
    const accordionDiv = block.querySelector(':scope > div > div');
    const inputElm = document.createElement('input');
    inputElm.classList.add('toggle');
    accordionDiv.appendChild( inputElm );
}