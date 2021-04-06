const member_background = document.querySelector('.member-area')
const member = document.querySelectorAll('.member')

member.forEach((n, i)=>{
  member_background.addEventListener('mouseenter',function(){
    n.classList.add('disappear')
  })
  n.addEventListener('mouseenter', function(){
    if(!n.classList.contains('active')){
      n.classList.add('active')
    }
    if(n.classList.contains('disappear')){
      n.classList.remove('disappear')
    }
    member_background.setAttribute('data-bg', i)
  })
  n.addEventListener('mouseleave', function(){
    if(n.classList.contains('active')){
      n.classList.remove('active')
    }
    if(!n.classList.contains('disappear')){
      n.classList.add('disappear')
    }
    member_background.removeAttribute('data-bg')
  })
  member_background.addEventListener('mouseleave',function(){
    n.classList.remove('disappear')
  })
})




// window.addEventListener('scroll',function(){
//   let  position = window.scrollY

// })

