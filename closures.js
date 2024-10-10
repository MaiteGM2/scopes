const globaLVar = 20;

function parameters (paramVar){
    let functionVar = globaLVar-paramVar;
    for(let blockVar = 0; blockVar < functionVar; blockVar++){
        nestedFunc(functionVar, blockVar);
    }
}

function nestedFunc (functionVar, blockVar){
    functionVar = functionVar*10;
    blockVar = globaLVar;

    console.log(globaLVar);
    console.log(functionVar);
    console.log(blockVar);
}

window.onload = parameters(15);