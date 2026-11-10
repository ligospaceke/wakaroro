import {PRODUCTS,CATS} from '../data/products.js';
import {filters} from '../state/filterState.js';
import {ProductCard} from '../components/ProductCard.js';
let cur='women';
const base=()=>{const c=CATS.find(x=>x.toLowerCase()===cur);let l=PRODUCTS;if(c)l=l.filter(p=>p.cat===c);if(cur==='new')l=l.filter(p=>p.tag==='new');if(cur==='offers')l=l.filter(p=>p.tag==='offer'||p.was);return l};
export const CategoryGrid=()=>{const l=filters.apply(base());return l.length?l.map((p,i)=>ProductCard(p,i)).join(''):'<p class="empty">Nothing matches yet. Try clearing your filters.</p>'};
export const CategoryView=name=>{cur=name;const c=CATS.find(x=>x.toLowerCase()===name);const sz=[...new Set(base().flatMap(p=>p.sizes))];
return `<section class="sec wrap"><div class="head"><div class="caps gold">${c?'Shop':'Edit'}</div><h2>${c||(name==='new'?'New arrivals':'Special offers')}</h2></div>
<div class="chips">${[['all','All'],['new','New'],['best','Best sellers'],['offer','Offers']].map(([v,l])=>`<button class="chip ${filters.tag===v?'on':''}" data-act="tag" data-v="${v}">${l}</button>`).join('')}</div>
<div class="tb"><input id="q" type="search" placeholder="Search" aria-label="Search" value="${filters.q}"><select id="size" aria-label="Size"><option value="all">All sizes</option>${sz.map(s=>`<option ${filters.size===s?'selected':''}>${s}</option>`).join('')}</select><select id="sort" aria-label="Sort"><option value="new">Newest</option><option value="lo" ${filters.sort==='lo'?'selected':''}>Price: low to high</option><option value="hi" ${filters.sort==='hi'?'selected':''}>Price: high to low</option></select></div>
<div class="grid" id="grid">${CategoryGrid()}</div></section>`};
