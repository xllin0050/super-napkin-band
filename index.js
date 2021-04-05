const member = document.querySelectorAll('.member')



member.forEach((n)=>{
  n.addEventListener('mouseenter', function(){
    n.classList.add('active')
  })
  n.addEventListener('mouseleave' ,function(){
    n.classList.remove('active')

  })
})