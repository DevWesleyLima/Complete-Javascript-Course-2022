//Browser Callback F12 > Console 
//Copy and Paste code bellow > Run in the Browser Console
document.getElementsByTagName('body')[0].onclick = function (e)
{
    console.log(`Occurred event!`);
}