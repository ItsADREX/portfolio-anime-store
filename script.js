document.addEventListener('DOMContentLoaded', () => {
// mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  // reveal
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }}), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ===== PRODUCTS =====
  const merch = [
    { name: 'Bakemono Oversized Tee',     cat: 'tees',        tag: 'Drop 007 · BAKEMONO',      price: 18500, img: 'img/tshirt1.jpg',   accent: 'cyan' },
    { name: 'Yandere Lab Cropped Tee',    cat: 'tees',        tag: 'Drop 005 · YANDERE LAB',   price: 22000, img: 'img/tshirt2.jpg',   accent: 'magenta' },
    { name: 'Glitch Print Tee',           cat: 'tees',        tag: 'Limited',                  price: 17000, img: 'img/tshirt3.jpg',   accent: 'lime' },
    { name: 'Bakemono Heavy Hoodie',      cat: 'hoodies',     tag: 'Drop 007 · BAKEMONO',      price: 42500, img: 'img/hood1.jpg',     accent: 'cyan' },
    { name: 'Tactical Streetwear Shorts', cat: 'hoodies',     tag: 'Drop 004 · ISEKAI INC',    price: 21000, img: 'img/shorts.jpg',    accent: 'yellow' },
    { name: 'Senpai Co Sneakers',         cat: 'hoodies',     tag: 'Drop 006 · SENPAI CO',     price: 38000, img: 'img/shoes.jpg',     accent: 'magenta' },
    { name: 'OtakuCity Cap',              cat: 'accessories', tag: 'Essentials',               price: 11500, img: 'img/cap1.jpg',      accent: 'lime' },
    { name: 'Cyber Ronin Mask',           cat: 'accessories', tag: 'Limited',                  price: 14500, img: 'img/mask1.jpg',     accent: 'cyan' },
    { name: 'Senpai Chain Necklace',      cat: 'accessories', tag: 'Drop 006 · SENPAI CO',     price: 16000, img: 'img/neckless1.jpg', accent: 'magenta' },
    { name: 'Yandere Pendant',            cat: 'accessories', tag: 'Essentials',               price: 9500,  img: 'img/neckless2.jpg', accent: 'magenta' },
    { name: 'Vinyl Sigil Ring',           cat: 'accessories', tag: 'Essentials',               price: 7500,  img: 'img/ring1.jpg',     accent: 'cyan' },
    { name: 'Bakemono Wallet',            cat: 'accessories', tag: 'Essentials',               price: 12500, img: 'img/wallet1.jpg',   accent: 'lime' },
    { name: 'Stacked Bracelet',           cat: 'accessories', tag: 'Essentials',               price: 6500,  img: 'img/bresslet1.jpg', accent: 'yellow' },
    { name: 'Crystal Sigil Ring',         cat: 'accessories', tag: 'Limited',                  price: 8500,  img: 'img/ring2.jpg',     accent: 'magenta' },
    { name: 'Mecha Katana Replica',       cat: 'figures',     tag: 'Collectible · Limited',    price: 45000, img: 'img/sword1.jpg',    accent: 'cyan' },
    { name: 'Anime Vinyl Poster · Vol.1', cat: 'figures',     tag: 'Collectible',              price: 12000, img: 'img/poster1.jpg',   accent: 'magenta' },
  ];

  const fmt = n => '₦' + n.toLocaleString('en-NG');
  const wa = (name) => `https://wa.me/2348024100099?text=Yo%20OtakuCity%2C%20I%20want%20to%20cop%20the%20${encodeURIComponent(name)}`;

  function accentColor(a) {
    return { cyan: '#00f0ff', magenta: '#ff00cc', lime: '#caff00', yellow: '#fff200' }[a] || '#00f0ff';
  }

  function card(p) {
    const c = accentColor(p.accent);
    return `
      <article class="merch reveal rounded-sm overflow-hidden p-4 flex flex-col" data-cat="${p.cat}">
        <div class="aspect-square overflow-hidden bg-black/40 mb-4 relative">
          <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy"/>
          <div class="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-tech tracking-widest" style="background:${c};color:#06020d">${p.tag}</div>
        </div>
        <h3 class="font-display text-2xl leading-tight tracking-tight">${p.name}</h3>
        <p class="text-xs text-white/45 mt-1 font-tech tracking-widest">// ${p.cat.toUpperCase()}</p>
        <div class="mt-auto pt-4 flex items-center justify-between gap-2">
          <p class="font-tech text-lg" style="color:${c}">${fmt(p.price)}</p>
          <div class="flex gap-1.5">
            <button class="add-cart w-9 h-9 border border-cyan/30 hover:border-cyan hover:text-cyan transition flex items-center justify-center" data-name="${p.name}" aria-label="Add to cart">
              <svg class="w-4 h-4 text-cyan" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <a href="${wa(p.name)}" target="_blank" class="w-9 h-9 bg-lime hover:bg-cyan text-black flex items-center justify-center transition" aria-label="WhatsApp checkout">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.6-.6-.6-1.1-1.3-1.5-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.4.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  document.getElementById('merchGrid').innerHTML = merch.map(card).join('');
  document.querySelectorAll('.merch.reveal').forEach(el => io.observe(el));

  // category filter
  const cats = document.querySelectorAll('.cat-btn');
  cats.forEach(b => b.addEventListener('click', () => {
    cats.forEach(x => { x.classList.remove('size-active'); x.classList.add('text-white/60'); });
    b.classList.add('size-active'); b.classList.remove('text-white/60');
    const f = b.dataset.cat;
    document.querySelectorAll('#merchGrid > [data-cat]').forEach(c => {
      c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
    });
  }));

  // cart
  let cartN = 0;
  const cartCount = document.getElementById('cartCount');
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-cart');
    if (!btn) return;
    cartN++;
    cartCount.textContent = cartN;
    cartCount.classList.remove('hidden');
    cartCount.classList.add('flex');
    btn.innerHTML = '<svg class="w-4 h-4 text-lime" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>';
    setTimeout(() => {
      btn.innerHTML = '<svg class="w-4 h-4 text-cyan" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';
    }, 1400);
  });

  // countdown — next drop in 6 days from page load
  const target = new Date(); target.setDate(target.getDate() + 6); target.setHours(20,0,0,0);
  function tick() {
    const now = new Date();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000); diff -= h * 3600000;
    const m = Math.floor(diff / 60000); diff -= m * 60000;
    const s = Math.floor(diff / 1000);
    document.getElementById('cd-d').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);

  // join form
  document.getElementById('joinForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.querySelector('input').disabled = true;
    e.target.querySelector('button').disabled = true;
    document.getElementById('joinOk').classList.remove('hidden');
  });
});
