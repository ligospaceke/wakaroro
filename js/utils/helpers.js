export const money=n=>'KES '+Number(n).toLocaleString('en-KE');
export const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
export const $=(s,r=document)=>r.querySelector(s);
export const stockText=n=>n<1?'Sold out':n<5?`Only ${n} left`:'In stock';
export const photo=(p,i=0)=>`<div class="ph" style="--tone:${p.colors[0][1]}">${p.imgs[i]?`<img src="${p.imgs[i]}" alt="${esc(p.name)}" loading="lazy">`:'<span>Photograph</span>'}</div>`;
export const store=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
export const persist=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
