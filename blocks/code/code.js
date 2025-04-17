export default function decorate(block) {
    // decorate the code as a code element
    const codeDiv = block.querySelector(':scope > div > div');
    const code = document.createElement('code');
    code.innerHTML = `${codeDiv.innerHTML}`;
    codeDiv.parentElement.replaceWith(code);

  }