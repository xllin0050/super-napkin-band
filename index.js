const logo = document.querySelector('.logo')
const noise_bg = document.querySelector('#noise')
const member_background = document.querySelector('.member-area')
const member = document.querySelectorAll('.member')
const cover = document.querySelectorAll('#cover')
const albumT = document.querySelectorAll('.album__title')

logo.addEventListener('click', function(){
  
    noise_bg.style.opacity=0
  
})

cover.forEach((e, i)=>{
  e.addEventListener('mouseenter',function(){
    e.classList.add('unMask')
    albumT.forEach((f, l)=>{
      if ( i == l){
        f.classList.add('frameWord')
      }
    })
  })
  e.addEventListener('mouseleave', function(){
    e.classList.remove('unMask')
    albumT.forEach((f, l)=>{
      if ( i == l){
        f.classList.remove('frameWord')
      }
    })
  })
})

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

const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;


  // Create Noise
  const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
              buffer32[i] = 0xFFFFFFFF;
          }
      }

      noiseData.push(idata);
  };


  // Play Noise
  const paintNoise = () => {
      if (frame === 9) {
          frame = 0;
      } else {
          frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
  };


  // Loop
  const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
      }, (1000 / 25));
  };


  // Setup
  const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
          createNoise();
      }

      loop();
  };


  // Reset
  let resizeThrottle;
  const reset = () => {
      window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              setup();
          }, 200);
      }, false);
  };


  // Init
  const init = (() => {
      canvas = document.getElementById('noise');
      ctx = canvas.getContext('2d');

      setup();
  })();
};
noise();

let ms1 = document.querySelector('#cursor1')
let ms2 = document.querySelector('#cursor2')
// let ms3 = document.querySelector('#cursor3')


document.querySelector("body").addEventListener("mousemove", function(n) {

  ms1.style.left = n.clientX + "px"
  ms1.style.top = n.clientY + "px"
  ms2.style.left = n.clientX + "px"
  ms2.style.top = n.clientY + "px"
  // ms3.style.left = n.clientX + "px"
  // ms3.style.top = n.clientY + "px"
});

let fcs = document.querySelectorAll(".hover-target")
for (a = fcs.length - 1; a >= 0; a--) {
  o(fcs[a])
}
function o(ms1) {
  ms1.addEventListener("mouseover", n), ms1.addEventListener("mouseout", s)
}

function n(ms1) {
  ms2.classList.add("hover")
}
function s(ms1) {
  ms2.classList.remove("hover")
}