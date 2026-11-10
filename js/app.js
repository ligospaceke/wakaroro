import {$,persist} from './utils/helpers.js';
import {cart,byId} from './state/cartState.js';
import {filters} from './state/filterState.js';
import {orderUrl} from './utils/whatsapp.js';
import {ProductCard,pick} from './components/ProductCard.js';
import {Navbar} from './components/Navbar.js';
import {Footer} from './components/Footer.js';
import {Sidebar} from './components/Sidebar.js';
import {ProductModal} from './components/ProductModal.js';
import {CartDrawer,draft} from './components/CartDrawer.js';
import {HomeView} from './views/HomeView.js';
import {CategoryView,CategoryGrid} from './views/CategoryView.js';
import {ProductDetailView,setImg} from './views/ProductDetailView.js';
import {AboutContactView} from './views/AboutContactView.js';
const ROUTES=['home','women','men','kids','accessories','new','offers','about','contact'];
const root=document.documentElement,app=$('#app');
let route='home';
const view=()=>route.startsWith('p-')?ProductDetailView(route.slice(2)):route==='home'?HomeView():(route==='about'||route==='contact')?AboutContactView(route):CategoryView(route);
const chrome=()=>{$('#nav').innerHTML=Navbar(route);$('#side').innerHTML=Sidebar(route);$('#drawer').innerHTML=CartDrawer()};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.1});
const reveal=()=>app.querySelectorAll('.head,.tiles a,.band>*,.q,.hero .t>*').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%6)*70+'ms';io.observe(el)});
const go=()=>{const h=location.hash.slice(1)||'home';route=(ROUTES.includes(h)||/^p-\d+$/.test(h))?h:'home';filters.reset();setImg(0);
const g=$('#prog');g.classList.remove('run');void g.offsetWidth;g.classList.add('run');flag('menu-open',false);
app.classList.remove('in');void app.offsetWidth;app.innerHTML=view();app.classList.add('in');reveal();$('#foot').innerHTML=Footer();chrome();scrollTo(0,0);
const p=route.startsWith('p-')&&byId(route.slice(2));document.title=(p?p.name+' | ':'')+'WAKARORO COLLECTION'};
const flag=(c,on)=>{root.classList.toggle(c,on);document.body.classList.toggle('lock',root.classList.contains('drawer-open')||root.classList.contains('modal-open')||root.classList.contains('menu-open'))};
const refresh=id=>{const p=byId(id);
if(root.classList.contains('modal-open'))$('#modal').innerHTML=ProductModal(p);
else if(route==='p-'+id)app.innerHTML=ProductDetailView(id);
else{const el=app.querySelector(`.card[data-id="${id}"]`);if(el)el.outerHTML=ProductCard(p,0,true)}};
cart.subscribe(()=>{chrome();$('.tools b').classList.add('bump')});
document.addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,id=b.dataset.id;
if(a==='theme'){const n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;persist('wk_theme',n)}
else if(a==='cart')flag('drawer-open',true);
else if(a==='menu')flag('menu-open',true);
else if(a==='close'){flag('drawer-open',false);flag('modal-open',false);flag('menu-open',false)}
else if(a==='shut'){flag('modal-open',false)}
else if(a==='quick'){$('#modal').innerHTML=ProductModal(byId(id));flag('modal-open',true)}
else if(a==='col'){pick(byId(id)).col=+b.dataset.i;refresh(id)}
else if(a==='size'){pick(byId(id)).size=b.dataset.z;refresh(id)}
else if(a==='add'){const s=pick(byId(id));flag('modal-open',false);cart.add(id,s.size,s.col);flag('drawer-open',true)}
else if(a==='step')cart.step(+b.dataset.k,+b.dataset.d);
else if(a==='rm')cart.remove(+b.dataset.k);
else if(a==='tag'){filters.set({tag:b.dataset.v});app.innerHTML=view()}
else if(a==='thumb'){setImg(+b.dataset.i);app.innerHTML=view()}
else if(a==='wa'){draft.name=$('#c_name').value.trim();draft.loc=$('#c_loc').value.trim();if(!draft.name||!draft.loc){alert('Please add your name and delivery location.');return}window.open(orderUrl(cart.items,draft.name,draft.loc),'_blank')}});
document.addEventListener('input',e=>{const t=e.target;if(t.id==='c_name')draft.name=t.value;if(t.id==='c_loc')draft.loc=t.value;if(t.id==='q'){filters.set({q:t.value});$('#grid').innerHTML=CategoryGrid()}});
document.addEventListener('change',e=>{const t=e.target;if(t.id==='size'||t.id==='sort'){filters.set({[t.id]:t.value});$('#grid').innerHTML=CategoryGrid()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){flag('drawer-open',false);flag('modal-open',false);flag('menu-open',false)}});
addEventListener('hashchange',go);
go();
setTimeout(()=>$('#loader').classList.add('done'),2100);
