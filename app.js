// Discovery Day — shared behavior (nav, scroll reveal, count-up)
document.documentElement.classList.remove('no-js');
(function(){
  var header=document.querySelector('header.nav');
  var mb=document.getElementById('menuBtn'), lk=document.getElementById('links');
  if(mb&&lk){
    mb.addEventListener('click',function(){lk.classList.toggle('open');});
    lk.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){lk.classList.remove('open');});});
  }
  // nav elevates on scroll
  if(header){
    var onScroll=function(){ header.classList.toggle('scrolled', window.scrollY>16); };
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  }
  function animateCount(el){
    var target=parseInt(el.getAttribute('data-count'),10)||0;
    var suffix=el.getAttribute('data-suffix')||'';
    var dur=1200, start=null;
    function step(ts){
      if(!start) start=ts;
      var p=Math.min((ts-start)/dur,1);
      var val=Math.floor((1-Math.pow(1-p,3))*target);
      el.textContent=val+suffix;
      if(p<1) requestAnimationFrame(step); else el.textContent=target+suffix;
    }
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window){
    // staggered reveal
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          var sibs=Array.prototype.slice.call(e.target.parentNode.children).filter(function(n){return n.classList&&n.classList.contains('reveal');});
          var idx=sibs.indexOf(e.target);
          if(idx>0) e.target.style.transitionDelay=(idx*90)+'ms';
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
    // count-up stats
    var cu=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ animateCount(e.target); cu.unobserve(e.target); } });
    },{threshold:.4});
    document.querySelectorAll('[data-count]').forEach(function(el){cu.observe(el);});
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});
  }
})();
