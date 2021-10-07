const colors = require ('colors');
const fs = require('fs');

const crearArchivo = async(base , lista, h) =>{
    
   try{ 

    let salida ="";



    for(let i = 1; i <= h; i++){
        
        salida += `${ base } X ${ i } = ${ base * i}\n`;
    
    }

    
   // console.log(salida);
    
    fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
    if(lista){
        console.log(salida.rainbow);
        return (`tabla${base}.txt creado`.underline.red);
    
    }else{
        console.log('La tabla se a guardado');
        return(`tabla${base}.txt creado`);
    
    }

   //return(`tabla${base}.txt creado`);
    
}catch(err){
    throw err;
}


   

}  


module.exports = {
    crearArchivo
    
}  

 
