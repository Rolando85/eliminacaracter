

function eliminar_caracter(){
    let inpVal=document.querySelector('.inp_caract').value;

    let inpVal2=inpVal.slice(0, -1);
    document.querySelector('.inp_caract').value=inpVal2;

}

document.querySelector('.btn_borrar').addEventListener('click',function(){
    eliminar_caracter()
})