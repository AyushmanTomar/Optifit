function calculateCalori()
{
    wt=parseFloat( document.getElementById('weight').value);
    ti=parseFloat( document.getElementById('time').value);
    ti=ti/60;
    let finalval = wt*ti*3.5;
    document.getElementById('answer').innerHTML="Burnt: "+ finalval.toFixed(2);
    console.log("yes");
}