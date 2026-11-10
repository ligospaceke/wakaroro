import {esc,photo} from '../utils/helpers.js';
import {byId} from '../state/cartState.js';
import {Options,priceOf} from '../components/ProductCard.js';
let idx=0;
export const setImg=i=>{idx=i};
export const ProductDetailView=id=>{const p=byId(id);if(!p)return '<section class="sec wrap"><p>Piece not found. <a class="link" href="#home">Home</a></p></section>';
const n=Math.max(p.imgs.length,1);
return `<section class="wrap"><a class="link" href="#${p.cat.toLowerCase()}" style="display:inline-block;margin-top:20px">← ${p.cat}</a><div class="det"><div>${photo(p,idx)}<div class="thumbs">${Array.from({length:n},(_,i)=>`<button data-act="thumb" data-i="${i}" aria-label="Photo ${i+1}">${photo(p,i)}</button>`).join('')}</div></div><div><div class="caps gold">${esc(p.cat)}</div><h1 style="margin:8px 0 12px">${esc(p.name)}</h1><div style="font-size:18px">${priceOf(p)}</div><p class="mute">${esc(p.desc)}</p>${Options(p)}</div></div></section>`};
