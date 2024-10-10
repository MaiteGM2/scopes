const globaLVar = 20;

function parameters (paramVar){
    let functionVar = globaLVar-paramVar;
    for(let blockVar = 0; blockVar < functionVar; blockVar++){
        nestedFunc(functionVar, blockVar);
    }
}

window.onload = parameters(15);