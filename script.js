// Destination photos use Unsplash except for the locally hosted Makkah and Madinah images.
const destinations = [
{name:'Makkah',country:'Saudi Arabia',region:'middle-east',localImage:'assets/makkah-card.jpg'},
{name:'Dubai',country:'United Arab Emirates',region:'middle-east',image:'photo-1512453979798-5ea266f8880c'},
{name:'Istanbul',country:'Turkey',region:'middle-east',localImage:'assets/blue-mosque.jpg'},
{name:'Cairo',country:'Egypt',region:'middle-east',image:'photo-1539768942893-daf53e448371'},
{name:'Paris',country:'France',region:'europe',image:'photo-1502602898657-3e91760cbb34'},
{name:'London',country:'United Kingdom',region:'europe',image:'photo-1513635269975-59663e0ac1ad'},
{name:'Rome',country:'Italy',region:'europe',image:'photo-1552832230-c0197dd311b5'},
{name:'Swiss Alps',country:'Switzerland',region:'europe',image:'photo-1531366936337-7c912a4589a7'},
{name:'Santorini',country:'Greece',region:'europe',image:'photo-1613395877344-13d4a8e0d49e'},
{name:'Barcelona',country:'Spain',region:'europe',image:'photo-1539037116277-4db20889f2d4'},
{name:'Pakistan',country:'Pakistan',region:'asia',localImage:'assets/pakistan-quaid-monument.png'},
{name:'Tokyo',country:'Japan',region:'asia',image:'photo-1540959733332-eab4deabeeaf'},
{name:'Bali',country:'Indonesia',region:'asia',image:'photo-1537996194471-e657df975ab4'},
{name:'Bangkok',country:'Thailand',region:'asia',image:'photo-1508004680771-708b02aabdc0'},
{name:'Maldives',country:'Maldives',region:'asia',image:'photo-1514282401047-d79a71a590e8'},
{name:'Taj Mahal',country:'India',region:'asia',image:'photo-1564507592333-c60657eea523'},
{name:'Chicago',country:'United States',region:'americas',localImage:'assets/willis-tower-chicago.jpg'},
{name:'Toronto',country:'Canada',region:'americas',image:'photo-1517090504586-fde19ea6066f'},
{name:'Cancún',country:'Mexico',region:'americas',image:'photo-1512813195386-6cf811ad3542'},
{name:'Rio de Janeiro',country:'Brazil',region:'americas',image:'photo-1483729558449-99ef09a8c325'},
{name:'Sydney',country:'Australia',region:'other',localImage:'assets/sydney-opera-house.jpg'},
{name:'Cape Town',country:'South Africa',region:'other',image:'photo-1580060839134-75a5edca2e99'},
{name:'Singapore',country:'Singapore',region:'asia',image:'photo-1525625293386-3f8f99389edd'},
{name:'Seoul',country:'South Korea',region:'asia',localImage:'assets/south-korea.jpg'}
];
const grid=document.querySelector('#destinationGrid');
function renderDestinations(region='all'){
 const shown=destinations.filter(d=>region==='all'||d.region===region);
 grid.innerHTML=shown.map(d=>`<a class="destination-card" href="#inquiry" data-destination="${d.country === 'Saudi Arabia' ? 'Saudi Arabia' : `${d.name}, ${d.country}`}" aria-label="Request a travel quote for ${d.name}, ${d.country}"><img src="${d.localImage || `https://images.unsplash.com/${d.image}?auto=format&fit=crop&w=700&q=75`}" loading="lazy" alt="Travel scenery for ${d.name}, ${d.country}" onerror="this.style.opacity='0'"><div class="card-info"><h3>${d.country}</h3><span class="card-action">Inquire about this trip ↗</span></div></a>`).join('');
}
renderDestinations();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');renderDestinations(btn.dataset.filter)}));
grid.addEventListener('click',e=>{const tile=e.target.closest('a[data-destination]');if(!tile)return;document.querySelector('[name=destination]').value=tile.dataset.destination;});
document.querySelectorAll('[data-prefill]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('[name=travelType]').value='Umrah / Hajj';document.querySelector('[name=destination]').value='Makkah & Madinah, Saudi Arabia'}));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#navlinks');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();
const form=document.querySelector('#travelForm');form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const f=new FormData(form);const start=f.get('departureDate'),end=f.get('returnDate');const status=document.querySelector('#formStatus');if(start&&end&&end<start){status.textContent='Return date must be on or after departure date.';return;}if(f.get('travelType')==='Pakistan car rental' && f.get('rentalStart') && f.get('rentalEnd') && f.get('rentalEnd')<f.get('rentalStart')){status.textContent='Rental end date must be on or after rental start date.';return;}status.textContent='';const fields=[['Name','fullName'],['Email','email'],['Phone','phone'],['Travel type','travelType'],['From','departure'],['Destination','destination'],['Departure date','departureDate'],['Return date','returnDate'],['Adults','adults'],['Children','children'],['Pickup city (Pakistan)','rentalCity'],['Pickup location','pickupLocation'],['Rental start','rentalStart'],['Rental end','rentalEnd'],['Vehicle / driver preferences','rentalPreferences'],['Additional details','notes']];const msg='Hello JA Travels Inc.! I would like a travel quote.\n\n'+fields.map(([label,key])=>`${label}: ${f.get(key)||'Not specified'}`).join('\n');const url='https://wa.me/17739544448?text='+encodeURIComponent(msg);const win=window.open(url,'_blank','noopener,noreferrer');if(!win)window.location.href=url;status.textContent='WhatsApp should open with your inquiry. Please press Send in WhatsApp to submit it.';});

// Show the floating back-to-top button once the visitor scrolls down.
const backToTop=document.getElementById('backToTop');
function updateBackToTop(){const visible=window.scrollY>320;backToTop.classList.toggle('is-visible',visible);backToTop.setAttribute('aria-hidden',String(!visible));backToTop.tabIndex=visible?0:-1;}
window.addEventListener('scroll',updateBackToTop,{passive:true});
updateBackToTop();
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));

// Pakistan car rental inquiry: show dedicated fields and preselect service.
const travelTypeSelect=form.elements.travelType;
const rentalFields=document.querySelector('#carRentalFields');
function updateRentalFields(){
 const active=travelTypeSelect.value==='Pakistan car rental';
 rentalFields.hidden=!active;
 rentalFields.querySelectorAll('[name="rentalCity"], [name="rentalStart"], [name="rentalEnd"]').forEach(el=>el.required=active);
 if(active){form.elements.destination.value='Pakistan'; if(!form.elements.departure.value)form.elements.departure.value='Pakistan (local pickup)';}
}
travelTypeSelect.addEventListener('change',updateRentalFields);
document.querySelectorAll('[data-car-rental]').forEach(link=>link.addEventListener('click',()=>{travelTypeSelect.value='Pakistan car rental';updateRentalFields();}));
updateRentalFields();

// Floating WhatsApp office chooser
(()=>{const launch=document.getElementById('waLaunch'),panel=document.getElementById('waPanel'),close=document.getElementById('waClose');if(!launch||!panel||!close)return;const setOpen=open=>{panel.hidden=!open;launch.setAttribute('aria-expanded',String(open));if(open)close.focus();else launch.focus()};launch.addEventListener('click',()=>setOpen(panel.hidden));close.addEventListener('click',()=>setOpen(false));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)setOpen(false)});document.addEventListener('click',e=>{if(!panel.hidden&&!document.getElementById('waFloat').contains(e.target)){panel.hidden=true;launch.setAttribute('aria-expanded','false')}})})();
