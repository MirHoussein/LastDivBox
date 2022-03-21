var documentHeight = document.documentElement.clientHeight;
var documentWidth = document.documentElement.clientWidth;
// Random Color


function randomColors() {
    const colors = "0123456789ABCDEF";

    let color = '#';


    for (let i = 0; i < 6; i++)
        color += colors[(Math.floor(Math.random() * 16))];


    return color;
}

// Button create
const btn = document.querySelector('button')
btn.addEventListener('click', divYarat)


function divYarat() {

    // Create Div 
    const newDiv = document.createElement('div')
    const yeniDiv=Math.floor(Math.random()*80+20)
    const x = Math.round(Math.random() * (documentWidth)-yeniDiv);
    const y = Math.round(Math.random() * (documentHeight) -yeniDiv)
    const sizeWidth = Math.floor(Math.random() * 100);
    const sizeHeight = Math.floor(Math.random() * 100);
    newDiv.style.size=sizeWidth+'px'
    newDiv.style.size=sizeHeight+'px'   
    newDiv.style.left = x+'px';
    newDiv.style.top = y+'px'
    newDiv.style.width = '40px';
    newDiv.style.height ='55px';
    
    newDiv.style.position = 'absolute';
    newDiv.style.backgroundColor = `${randomColors()}`;

    document.body.appendChild(newDiv);

    // Delete Div

    newDiv.addEventListener('click', () => {
        newDiv.remove();

    })

}





