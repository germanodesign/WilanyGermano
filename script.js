"use strict";
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navigation');
menuButton?.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!opened));
  menuButton.setAttribute('aria-label', opened ? 'Open menu' : 'Close menu');
  menu?.classList.toggle('open', !opened);
});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));
function fitGermano(){
  const img=document.querySelector('.artist-logo');
  const label=document.querySelector('.germano-word');
  if(!img || !label) return;
  label.style.letterSpacing='0px';
  label.style.width='max-content';
  const natural=label.getBoundingClientRect().width;
  const target=img.getBoundingClientRect().width*0.953;
  if(target>natural) {
    label.style.letterSpacing=((target-natural)/7)+'px';
    label.style.width=target+'px';
  }
}
window.addEventListener('load', fitGermano);
window.addEventListener('resize', fitGermano);
document.fonts?.ready.then(fitGermano);
fitGermano();
const btn=document.querySelector('#sound-toggle');
const frame=document.querySelector('#hero-video');
let player;
async function getPlayer(){
  if(!window.Vimeo?.Player || !frame) return null;
  if(!player) player=new window.Vimeo.Player(frame);
  await player.ready();
  return player;
}
btn?.addEventListener('click',async()=>{
  try{
    const p=await getPlayer();
    if(!p) throw new Error('Player unavailable');
    const muted=await p.getMuted();
    await p.setMuted(!muted);
    if(muted){await p.setVolume(1);await p.play();}
    btn.textContent=muted?'MUTE FILM SOUND ♪':'ENABLE FILM SOUND ♪';
    btn.setAttribute('aria-pressed',String(muted));
  }catch(err){
    window.open('https://vimeo.com/1238307931','_blank','noopener,noreferrer');
  }
});
const dialog=document.querySelector('#lightbox');
const fullImg=document.querySelector('#lightbox-photo');
document.querySelectorAll('.gallery-frame').forEach(item=>item.addEventListener('click',()=>{
  if(!dialog || !fullImg) return;
  fullImg.src=item.dataset.full || item.querySelector('img')?.src || '';
  fullImg.alt=item.dataset.alt || 'Wilany Germano original photograph';
  dialog.showModal();
}));
document.querySelector('.lightbox-close')?.addEventListener('click',()=>dialog?.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();