const globaLVar = 1;

function variables(){
    let functionVar = 30;
    if(functionVar > globaLVar){
        const blockVar = functionVar;
    } else{
        const blockVar = globaLVar;
    }
}