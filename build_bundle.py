# Bundles the ES-module project into one self-contained HTML file (for previews or hosting without a server)
import re,sys
order=['utils/helpers','data/products','state/cartState','state/filterState','utils/whatsapp','components/ProductCard','components/Navbar','components/Footer','components/Sidebar','components/ProductModal','components/CartDrawer','views/HomeView','views/CategoryView','views/ProductDetailView','views/AboutContactView','app']
js=''
for m in order:
    s=open(f'js/{m}.js').read()
    s=re.sub(r'^import .*?;\n','',s,flags=re.M)
    js+=re.sub(r'^export ','',s,flags=re.M)+'\n'
h=open('index.html').read()
css=''.join(open(f'css/{c}.css').read() for c in ['main','components','views'])
h=re.sub(r'<link rel="stylesheet" href="css/[^>]*>\n?','',h)
h=h.replace('</head>','<style>'+css+'</style></head>')
h=h.replace('<script type="module" src="js/app.js"></script>','<script>(()=>{'+js+'})();</script>')
open(sys.argv[1],'w').write(h)
