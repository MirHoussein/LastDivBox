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
    

   
   
    const x = Math.round(Math.random()*880+1)
    const y = Math.round(Math.random()*880+1)

    const sizeWidth=Math.floor(Math.random()*100+'px');
    const sizeHeight=Math.floor(Math.random()*100+'px');
    newDiv.style.width=sizeWidth
    newDiv.style.height=sizeHeight;
    
   
    newDiv.style.top=`${x}px`
    newDiv.style.left=`${y}px`;
    newDiv.style.width=`170px`;
    newDiv.style.height='145px';
    newDiv.style.position='relative';
    
    newDiv.style.backgroundColor=`${randomColors()}`;
   
    document.body.appendChild(newDiv);
   
  
    


    // Delete Div

    newDiv.addEventListener('click',()=>{
        newDiv.remove();


       
    })

   
    

    
    

    
   
   
   

    
       
   
    }
    
    

 
  
