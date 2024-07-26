window.addEventListener('load', init);

function init(){
    document.querySelector('#calculate').addEventListener('click', calculate);
    document.querySelector('#clear').addEventListener('click', clear);
}

function calculate(){
    let thrust = document.querySelector('#thrust').value;
    let massFlow = document.querySelector('#massFlow').value;
    let exhaustVel = document.querySelector('#exhaustVel').value;
    let isp = document.querySelector('#isp').value;
    if(thrust+massFlow+exhaustVel+isp == '0' || thrust+massFlow+exhaustVel+isp == ''){
        document.querySelector('#error').textContent = 'Please input some values.';
    }else{
        document.querySelector('#error').textContent = '';
    }
    if(massFlow>0 && exhaustVel>0){
        thrust = massFlow * exhaustVel;
        document.querySelector('#thrust').value = thrust;
    }
    if(thrust>0 && exhaustVel>0){
        massFlow = thrust/exhaustVel;
        document.querySelector('#massFlow').value = massFlow;
    }
    if(thrust>0 && massFlow>0){
        exhaustVel = thrust/massFlow;
        isp = (exhaustVel/9.81)*1000;
        document.querySelector('#exhaustVel').value = exhaustVel;
        document.querySelector('#isp').value = isp;
    }
    if(isp>0){
        exhaustVel = (isp*9.80665)/1000;
        document.querySelector('#exhaustVel').value = exhaustVel;
    }
    if(exhaustVel>0){
        isp = (exhaustVel/9.80665)*1000;
        document.querySelector('#isp').value = isp;
    }
    if(massFlow>0 && isp>0){
        thrust = (massFlow*((isp*9.80665)/1000));
        document.querySelector('#thrust').value = thrust 
    }
}

function clear(){
    document.querySelector('#thrust').value = '';
    document.querySelector('#massFlow').value = '';
    document.querySelector('#exhaustVel').value = '';
    document.querySelector('#isp').value = '';
}