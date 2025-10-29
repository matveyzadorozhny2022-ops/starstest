const GIFT_COUNT = 2; // Укажи реальное количество gifts/N.webp

const buttonImg = document.getElementById('buttonImg');
const giftImg = document.getElementById('giftImg');
const message = document.getElementById('message');

let tapCount = 0;
let exploded = false;

function tapAnimate(){
  buttonImg.style.transition = 'transform 120ms cubic-bezier(.22,.9,.28,1)';
  buttonImg.style.transform = 'scale(0.86)';
  setTimeout(()=>{ buttonImg.style.transform = 'scale(1)'; }, 120);
}

function explodeAndShowGift(){
  if(exploded) return;
  exploded = true;
  buttonImg.classList.add('explode');

  setTimeout(()=>{
    buttonImg.style.opacity = '0';

    const idx = Math.floor(Math.random()*GIFT_COUNT) + 1;
    giftImg.src = `gifts/${idx}.webp`;

    giftImg.classList.remove('hidden');
    giftImg.classList.add('visible');

    message.classList.remove('hidden');
    setTimeout(()=> message.classList.add('show'), 150);
  }, 420);
}

function onTap(){
  if(exploded) return;
  tapCount++;
  tapAnimate();
  if(tapCount >= 5) explodeAndShowGift();
}

buttonImg.addEventListener('click', onTap);
buttonImg.addEventListener('touchstart', (e)=>{ e.preventDefault(); onTap(); }, {passive:false});
buttonImg.addEventListener('keydown', (e)=>{ 
  if(e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    onTap();
  }
});