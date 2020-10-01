window.onload= () =>{
    const parrafo = document.getElementById('text');
    // console.log(parrafo.innerHTML); tambien se puede utilizar .innerText
    // parrafo.innerText = 'Texto actualizado';
    parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>';
}
