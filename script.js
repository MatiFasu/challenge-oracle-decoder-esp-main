
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function enviarEncriptado() {

    var texto = document.getElementById("input-texto").value;

    let s = ""

    const m = new Map([
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
      ]);

    for(let cont = 0; cont < texto.length; cont++) {

        if( texto.charAt(cont) == "a" || texto.charAt(cont) == "e" || texto.charAt(cont) == "i" || texto.charAt(cont) == "o" || texto.charAt(cont) == "u" ) {
            s = s + m.get(texto.charAt(cont));
        }
        else {
            s = s + texto.charAt(cont);
        }
    }

    document.getElementById("msg").value = s;

}

function esVocal(letra) {
    if( letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u" ) {
        return true;
    }
    else {
        return false;
    }
}

function enviarDesencriptado() {

    var texto = document.getElementById("input-texto").value; // gaitober

    let arr = Array.from(texto);
    
    let s = "";

    const m = new Map([
        ["a", 1],
        ["e", 4],
        ["i", 3],
        ["o", 3],
        ["u", 3]
    ]);

    for(let i=0; i<arr.length; i++)
    {
        if( esVocal(arr[i]) )
        {
            if( arr[i]=="a" || arr[i]=="e" || arr[i]=="i" || arr[i]=="o" || arr[i]=="u" )
            {
                let l = m.get(arr[i]);
                let index = i;
                for(let j=0; j<l; j++) {
                    arr[index+1] = "";
                    index++;
                }
            }
        }          
    }
    
    for(let k=0; k<arr.length; k++) {
        s = s + arr[k];
    }

    document.getElementById("msg").value = s;
}

function copiar() 
{
    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');
}

function limpiar()
{
    document.getElementById("input-texto").value = "";
    document.getElementById("msg").value = "";
}
