/* Tonybolzan - Decodificador de Strings */

function reverse(valor){
    function funcRev(){
        this.pos = "";
        for (var i=this.length; i>-1; i--){
            this.pos += this.charAt(i);
        }
        this.pos = this.pos.replace("http://", "");
        this.pos = this.pos.replace("//:ptth", "");
        return this.pos;
    }
    String.prototype.reversao = funcRev;
    nome = valor;
    document.getElementById('resultado').innerHTML = "<a href='http://"+nome.reversao()+"' target='_blank'>"+nome.reversao()+"</a>";
}

function decoder(valor){
    var data = valor;
    function hexDecode(data){
        var b16_digits='0123456789abcdef';
        var b16_map=new Array();
        for(var i=0;i<256;i++){
            b16_map[b16_digits.charAt(i>>4)+b16_digits.charAt(i&15)]=String.fromCharCode(i);
        }
        if(!data.match(/^[a-f0-9]*$/i)){
            return false;
        }
        if(data.length%2){
            data='0'+data;
        }
        var result=new Array();
        var j=0;
        for(var i=0;i<data.length;i+=2){
            result[j++]=b16_map[data.substr(i,2)];
        }
        return result.join('');
    }
    var LINK = hexDecode(data);
    LINK = LINK.replace("http://", "");
    document.getElementById('resultado').innerHTML = "<a href='http://"+LINK+"' target='_blank'>"+LINK+"</a>";
}
