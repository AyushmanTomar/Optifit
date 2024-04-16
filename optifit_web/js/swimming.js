function calculateCalori()
{
    let arr=[4,7,10,13.5];i=1;
    wt=parseFloat( document.getElementById('weight').value);
    ti=parseFloat( document.getElementById('time').value);
    ti=ti/60;
    let finalval = wt*ti*arr[i];
    document.getElementById('answer').innerHTML="Burnt: "+ finalval.toFixed(2);
    console.log("yes");
}