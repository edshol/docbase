export default function decorate(block) {
    const accordionDiv = block.querySelector(':scope > div');
    const inputElm = document.createElement('input');
    inputElm.classList.add('toggle');
    inputElm.setAttribute('type','checkbox');
    const id = crypto.randomUUID();
    inputElm.setAttribute('id',id);

    accordionDiv.appendChild( inputElm );
}