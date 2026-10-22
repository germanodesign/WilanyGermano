"use strict";
const navButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.navigation');
navButton?.addEventListener('click',()=>{const state=navButton.getAttribute('aria-expanded')==='true';navButton.setAttribute('aria-expanded',String(!state));navButton.setAttribute('aria-label',state?'Open menu':'Close menu');nav.classList.toggle('open',!state);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');navButton?.setAttribute('aria-expanded','false');}));
function fitWordmark(){const parent=document.querySelector('.artist-lockup');const image=document.querySelector('.artist-logo');const label=document.querySelector('.germano-word');if(!parent||!image||!label)return;label.style.letterSpacing='0px';label.style.width='auto';const natural=label.getBoundingClientRect().width;const target=image.getBoundingClientRect().width*(1952/2048);if(target>natural){label.style.letterSpacing=`${(target-natural)/7}px`;label.style.width=`${target}px`;}}
window.addEventListener('resize',fitWordmark);window.addEventListener('load',fitWordmark);document.fonts?.ready.then(fitWordmark);fitWordmark();
const soundToggle=document.getElementById('sound-toggle');const videoFrame=document.getElementById('hero-video');let vimeoPlayer=null;function connectVimeo(){
  if(!window.Vimeo?.Player||!videoFrame)return;
  const videoShell=document.querySelector('.video-shell');
  const showVideo=()=>videoShell?.classList.add('video-playing');
  const showPoster=()=>videoShell?.classList.remove('video-playing');
  try{
    vimeoPlayer=new window.Vimeo.Player(videoFrame);
    vimeoPlayer.on('playing',showVideo);
    vimeoPlayer.on('error',showPoster);
    vimeoPlayer.ready().then(async()=>{
      try {
        await vimeoPlayer.setMuted(true);
        await vimeoPlayer.setLoop(true);
        await vimeoPlayer.play();
        const paused=await vimeoPlayer.getPaused();
        if(!paused)showVideo();
      }catch(e){showPoster();}
    }).catch(showPoster);
  }catch(e){showPoster();}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(connectVimeo,120));else setTimeout(connectVimeo,120);
soundToggle?.addEventListener('click',async()=>{try{if(!vimeoPlayer&&window.Vimeo?.Player)vimeoPlayer=new window.Vimeo.Player(videoFrame);if(!vimeoPlayer){window.open('https://vimeo.com/1238307931','_blank','noopener');return;}const muted=await vimeoPlayer.getMuted();if(muted){await vimeoPlayer.setMuted(false);await vimeoPlayer.setVolume(1);await vimeoPlayer.play();soundToggle.textContent='MUTE FILM SOUND ♪';soundToggle.setAttribute('aria-pressed','true');}else{await vimeoPlayer.setMuted(true);soundToggle.textContent='ENABLE FILM SOUND ♪';soundToggle.setAttribute('aria-pressed','false');}}catch(e){window.open('https://vimeo.com/1238307931','_blank','noopener');}});
const lightbox=document.getElementById('lightbox');const lightImage=document.getElementById('lightbox-photo');document.querySelectorAll('.gallery-frame').forEach(btn=>btn.addEventListener('click',()=>{lightImage.src=btn.dataset.full;lightImage.alt=btn.dataset.alt||'Original gallery photo';lightbox.showModal();}));document.querySelector('.lightbox-close')?.addEventListener('click',()=>lightbox.close());lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});document.getElementById('year').textContent=new Date().getFullYear();
