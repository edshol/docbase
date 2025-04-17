export default function decorate(block) {
    // decorate the code as a code element
    const codeDivs = block.querySelectorAll(':scope > div > div');
    console.log(codeDivs);
    codeDivs.forEach(codeDiv, index => {
      console.log("code "+index);
      console.log(codeDiv.innerText);
      const code = document.createElement('code');
      code.innerHTML = `${codeDiv.innerHTML}`;
      codeDiv.parentElement.replaceWith(code);
    });
}