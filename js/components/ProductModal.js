import {esc,photo} from '../utils/helpers.js';
import {Options,priceOf} from './ProductCard.js';
export const ProductModal=p=>`<div class="sheet">${photo(p)}<div><button class="x caps" data-act="shut" aria-label="Close">Close</button><div class="caps gold">${esc(p.cat)}</div><h2 style="margin:6px 0 8px">${esc(p.name)}</h2><div>${priceOf(p)}</div><p class="mute">${esc(p.desc)}</p>${Options(p)}<a class="link" href="#p-${p.id}" data-act="shut" style="display:inline-block;margin-top:16px">Full details</a></div></div>`;
