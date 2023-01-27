const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 0

next.addEventListener('click', function(){
    currentActive++
    if(currentActive>circles.length-1){
        currentActive = circles.length-1
    }
    updateCircle()
    updateProgress()
   disableAndEnableCheck()
   
})

prev.addEventListener('click', function(){
    currentActive--
    if(currentActive<0){
        currentActive = 0
    }
    updateCircle()
    updateProgress()
    disableAndEnableCheck()
})



function updateCircle(){
    circles.forEach(function(circle, index){
      if(index<=currentActive){
        circle.classList.add('active')
      }else{
        circle.classList.remove('active')
      }
    })
}

function updateProgress(){
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length-1) / (circles.length-1))*100+'%'
    if(currentActive===0){
        prev.disable = true;
    }else if(currentActive === circles.length-1){
        next.disable = true;
    }
}

function disableAndEnableCheck(){
    if(currentActive===0){
        prev.disabled = true
    }else if(currentActive === circles.length-1){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}