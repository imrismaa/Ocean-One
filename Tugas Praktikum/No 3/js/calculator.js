document.getElementById("inputA").addEventListener("input", calculate);
document.getElementById("inputB").addEventListener("input", calculate);
document.getElementById("inputC").addEventListener("input", calculate);
document.getElementById("inputD").addEventListener("input", calculate);
document.getElementById("inputE").addEventListener("input", calculate);
document.getElementById("inputF").addEventListener("input", calculate);
document.getElementById("inputG").addEventListener("input", calculate);
document.getElementById("inputH").addEventListener("input", calculate);
document.getElementById("inputI").addEventListener("input", calculate);
document.getElementById("inputJ").addEventListener("input", calculate);

function calculate() {
    inputA = inputA >= 0 ? inputA : 0;
    inputB = inputB >= 0 ? inputB : 0;
    inputC = inputC >= 0 ? inputC : 0;
    inputD = inputD >= 0 ? inputD : 0;
    inputE = inputE >= 0 ? inputE : 0;
    inputF = inputF >= 0 ? inputF : 0;
    inputG = inputG >= 0 ? inputG : 0;
    inputH = inputH >= 0 ? inputH : 0;
    inputI = inputI >= 0 ? inputI : 0;
    inputJ = inputJ >= 0 ? inputJ : 0;
    
    var inputA = parseInt(document.getElementById("inputA").innerHTML) || 0;
    document.getElementById("inputA").innerHTML = inputA;
    
    var inputB = parseInt(document.getElementById("inputB").innerHTML) || 0;
    document.getElementById("inputB").innerHTML = inputB;
    
    var inputC = parseInt(document.getElementById("inputC").innerHTML) || 0;
    document.getElementById("inputC").innerHTML = inputC;
    
    var inputD = parseInt(document.getElementById("inputD").innerHTML) || 0;
    document.getElementById("inputD").innerHTML = inputD;
    
    var inputE = parseInt(document.getElementById("inputE").innerHTML) || 0;
    document.getElementById("inputE").innerHTML = inputE;
    
    var inputF = parseInt(document.getElementById("inputF").innerHTML) || 0;
    document.getElementById("inputF").innerHTML = inputF;
    
    var inputG = parseInt(document.getElementById("inputG").innerHTML) || 0;
    document.getElementById("inputG").innerHTML = inputG;
    
    var inputH = parseInt(document.getElementById("inputH").innerHTML) || 0;
    document.getElementById("inputH").innerHTML = inputH;
    
    var inputI = parseInt(document.getElementById("inputI").innerHTML) || 0;
    document.getElementById("inputI").innerHTML = inputI;
    
    var inputJ = parseInt(document.getElementById("inputJ").innerHTML) || 0;
    document.getElementById("inputJ").innerHTML = inputJ;
    
    
    var outputA = inputA * 365;
    document.getElementById("outputA").innerHTML = outputA;
    
    var outputB = inputB * 365;
    document.getElementById("outputB").innerHTML = outputB;
    
    var outputC = inputC * 365;
    document.getElementById("outputC").innerHTML = outputC;
    
    var outputD = inputD * 365;
    document.getElementById("outputD").innerHTML = outputD;
    
    var outputE = inputE * 365;
    document.getElementById("outputE").innerHTML = outputE;
    
    var outputF = inputF * 365;
    document.getElementById("outputF").innerHTML = outputF;
    
    var outputG = inputG * 365;
    document.getElementById("outputG").innerHTML = outputG;
    
    var outputH = inputH * 365;
    document.getElementById("outputH").innerHTML = outputH;
    
    var outputI = inputI * 365;
    document.getElementById("outputI").innerHTML = outputI;
    
    var outputJ = inputJ * 365;
    document.getElementById("outputJ").innerHTML = outputJ;
    

    var total = outputA + outputB + outputC + outputD + outputE + outputF + outputG + outputH + outputI + outputJ;
    document.getElementById("total").innerHTML = total;
}
  
  