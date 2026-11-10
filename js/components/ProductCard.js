import {money,esc,photo,stockText} from '../utils/helpers.js';
const picks={};
export const pick=p=>picks[p.id]||(picks[p.id]={size:p.sizes[0],col:0});
const swatches=p=>`<div class="sw">${p.colors.map((c,i)=>`<button class="dot ${pick(p).col===i?'on':''}" style="background:${c[1]}" aria-label="${c[0]}" data-act="col" data-id="${p.id}" data-i="${i}"></button>`).join('')}</div>`;
const sizes=p=>`<div class="sz">${p.sizes.map(z=>`<button class="${pick(p).size===z?'on':''}" data-act="size" data-id="${p.id}" data-z="${esc(z)}">${esc(z)}</button>`).join('')}</div>`;
export const priceOf=p=>`${p.was?`<span class="was">${money(p.was)}</span>`:''}${money(p.price)}`;
const label=p=>p.stock<1?'Sold out':p.tag==='offer'?'Offer':p.tag==='best'?'Best seller':p.tag==='new'?'New':'';
export const Options=p=>{const out=p.stock<1;return `<div class="opts"><div class="lab">Colour · ${esc(p.colors[pick(p).col][0])}</div>${swatches(p)}<div class="lab">Size</div>${sizes(p)}<p class="stock ${out?'out':''}">${stockText(p.stock)}</p><div class="acts"><button class="btn" data-act="add" data-id="${p.id}" ${out?'disabled':''}>Add to bag</button></div></div>`};
export const ProductCard=(p,i=0,still=false)=>`<article class="card ${still?'still':''}" style="--i:${i}" data-id="${p.id}"><div style="position:relative"><a class="zoom" href="#p-${p.id}" aria-label="${esc(p.name)}">${photo(p)}</a>${label(p)?`<span class="tag">${label(p)}</span>`:''}</div><div class="row"><span>${esc(p.name)}</span><span>${priceOf(p)}</span></div>${swatches(p)}${sizes(p)}<div style="display:flex;gap:18px;margin-top:12px"><button class="link" data-act="add" data-id="${p.id}" ${p.stock<1?'disabled':''}>Add to bag</button><button class="link" data-act="quick" data-id="${p.id}">Quick view</button></div></article>`;
