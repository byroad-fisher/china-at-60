const routes = {
  balanced: {
    label: 'Two-city balance', tag: 'Our recommendation', title: 'The landmarks, without the sprint.',
    summary: 'Four nights in Beijing, one comfortable high-speed train, four nights in Shanghai. A proper taste of old and new China with only one hotel change.',
    facts: ['2 hotel bases', '1 long rail journey', 'Best all-round fit'],
    hotels: [
      ['Beijing · 22–26 June · 4 nights', 'Grand Hyatt Beijing', 'Allow €180–240 / room / night', 'Wangfujing/Oriental Plaza; gym and pool. Central for sights, but use a car to avoid a long walk to the Palace Museum. Sauna is not confirmed for standard guests.', 'https://www.hyatt.com/grand-hyatt/en-US/beigh-grand-hyatt-beijing'],
      ['Shanghai · 26–30 June · 4 nights', 'Shanghai Marriott Marquis City Centre', 'Allow €160–220 / room / night', 'By People’s Square metro and Nanjing Road; gym, pool and sauna. Traffic and crowds make a car sensible for the birthday traveller.', 'https://www.marriott.com/en-us/hotels/shamc-shanghai-marriott-hotel-city-centre/overview/']
    ],
    days: [
      ['Mon 21', 'Fly from two countries', 'Ireland group: compare Dublin (DUB) with Belfast plus a connection. Switzerland group: compare Zürich (ZRH), Geneva (GVA) if closer, and an open-jaw ticket. Aim to meet at the Beijing hotel on the 22nd.', 'Travel day · no sightseeing'],
      ['Tue 22', 'Land, settle, birthday welcome', 'Private airport transfer, hotel check-in and a gentle dinner near Wangfujing. No timed attraction after a long-haul flight.', 'Rest day · ≤1 km optional'],
      ['Wed 23', 'The Forbidden City, in a smaller dose', 'Pre-book the Palace Museum (¥60 each). Take a car to the entrance, follow a short central-axis route for 90–120 minutes, then lunch and hotel rest. Security queues and the one-way exit still mean standing and uneven stone.', 'Moderate · ~2–3 km / standing'],
      ['Thu 24', 'Mutianyu, with a choice', 'Private car to the Great Wall (allow €140–220 for the vehicle). Cable car up and down; the birthday traveller can enjoy the view near the upper station without committing to steep wall steps. If that still feels too much, she and the siblings can choose a Beijing tea/arts afternoon while the couple visits the wall.', 'Optional stretch · wall steps are not accessible'],
      ['Fri 25', 'A quieter Beijing day', 'Temple of Heaven park edge or a seated hutong rickshaw/tea stop in the morning. Afternoon entirely free for a spa, gym or birthday meal. Avoid combining the Temple, Summer Palace and markets in one day.', 'Easy · ~1–2 km, adaptable'],
      ['Sat 26', 'Bullet train to Shanghai', 'Car to Beijing South; a mid-morning G train to Shanghai Hongqiao takes roughly 4½–6 hours. Reserve adjacent seats; first class is worth comparing for extra room. Car to hotel, simple dinner.', 'Travel day · stations involve walking'],
      ['Sun 27', 'Riverfront & a slow afternoon', 'A short Bund view, then an optional seated Huangpu river cruise (regular daytime fare around ¥120 / €15 each; allow more for a night sailing). Return before the afternoon heat or rain.', 'Easy · ~1–2 km'],
      ['Mon 28', 'The separate day', '<strong>Birthday traveller + siblings:</strong> an unhurried, car-based visit to H22 pre-owned designer shops around Middle Huaihai Road, lunch and hotel rest. <strong>The couple:</strong> Suzhou by train for a classical garden and canal-side lunch; budget €45–75 each for rail, admission and local rides. Reunite for dinner.', 'Two tracks · Suzhou involves ~4–6 km for the couple'],
      ['Tue 29', 'Shanghai favourites & farewell', 'Choose one: Yu Garden area early (crowded, uneven paving) or Shanghai Museum/People’s Square for an indoor day. Leave room for authenticated resale at ZZER and a celebratory dinner. Purchases not in budget.', 'Easy–moderate · ~1–2 km'],
      ['Wed 30', 'Fly home', 'Private transfer to Pudong airport with ample time. Depending on routing and departure time, arrive Europe late 30 June or 1 July.', 'Travel day']
    ],
    budget: [['Economy flights · 3 Ireland + 2 Switzerland','€5,300–7,700'],['Three rooms · eight nights','€4,080–5,520'],['Train, airport rides & local cars','€900–1,500'],['Meals · eight China days','€1,400–2,000'],['Admissions & experiences','€350–650'],['Insurance, connectivity & 10–15% buffer','€1,300–1,900']], total:'€13,300–19,300',
    flight: 'Planning allowance per person: Ireland €1,000–1,500; Switzerland €1,150–1,600 for an open-jaw itinerary. These are not live date-specific fares. Published public return examples: Turkish DUB–PEK €1,023+ and DUB–PVG €679+; SWISS ZRH–PEK CHF 1,043+ and ZRH–PVG CHF 872+ (a June 2027 example CHF 962). Open-jaw combinations, baggage and dates may cost more.'
  },
  gentle: {
    label:'Shanghai & Suzhou', tag:'Least moving around', title:'One hotel, many small pleasures.',
    summary:'Stay in Shanghai for all eight nights. Visit Suzhou only if everyone feels up to it, and give the shopping and birthday meal proper space. This avoids the longest train and every hotel change.',
    facts:['1 hotel base','Optional short rail day','Gentlest logistics'],
    hotels:[['Shanghai · 22–30 June · 8 nights','Shanghai Marriott Marquis City Centre','Allow €160–220 / room / night','People’s Square metro, Nanjing Road, gym, pool and sauna. Ask for quiet/accessible rooms and a lift-near room.','https://www.marriott.com/en-us/hotels/shamc-shanghai-marriott-hotel-city-centre/overview/']],
    days:[
      ['Mon 21','Depart for Shanghai','Ireland group via Dublin or Belfast connection; Zürich travellers can compare direct/one-stop flights.','Travel day'],
      ['Tue 22','Arrive & exhale','Car from Pudong, check in, easy dinner. Keep this day empty.','Rest day'],
      ['Wed 23','People’s Square','A short Shanghai Museum visit if tickets/hours allow; café and hotel rest.','Easy · ~1 km'],
      ['Thu 24','The Bund by car','Choose a short riverside viewpoint and a seated Huangpu cruise. Return before humidity builds.','Easy · ~1–2 km'],
      ['Fri 25','Garden morning','Yu Garden area early, with seating breaks; substitute an indoor museum if rain or crowds are uncomfortable.','Easy–moderate · ~2 km'],
      ['Sat 26','Birthday slow day','Spa or pool, one relaxed lunch and a special dinner; no formal sightseeing.','Rest day'],
      ['Sun 27','Suzhou, or stay local','Optional ~30-minute high-speed rail to Suzhou for one classical garden. The birthday traveller can instead spend the day at the hotel or visit a nearby café with siblings; no one is obliged to do the rail outing.','Optional rail · garden paths'],
      ['Mon 28','Separate shopping day','<strong>Birthday traveller + siblings:</strong> H22 and Huaihai Road resale by car. <strong>The couple:</strong> Suzhou day trip if not done, or Shanghai’s contemporary art galleries. Rejoin at dinner.','Two tracks'],
      ['Tue 29','Free choice','ZZER/Hongqiao resale with a car, or a completely free day. Pack and dine near the hotel.','Easy'],
      ['Wed 30','Fly home','Car to Pudong; confirm actual arrival date in Europe.','Travel day']
    ],
    budget:[['Economy flights · 3 Ireland + 2 Switzerland','€4,800–6,700'],['Three rooms · eight nights','€3,840–5,280'],['Airport rides, cars & optional short train','€500–900'],['Meals · eight China days','€1,400–2,000'],['Admissions & experiences','€250–450'],['Insurance, connectivity & 10–15% buffer','€1,100–1,600']], total:'€11,900–16,900',
    flight:'Planning allowance per person: Ireland €850–1,250; Switzerland €1,100–1,475. SWISS advertises Zürich–Shanghai direct service and a June 2027 fare example from CHF 962 return, but it is not a confirmed 21–30 June quote. Compare connections and baggage-inclusive fares.'
  },
  classic: {
    label:'Three-city classics', tag:'Most sights, more effort', title:'History in three chapters.',
    summary:'Beijing, Xi’an and Shanghai in eight nights. The Terracotta Army is remarkable, but this route has two long train journeys and two hotel changes. Choose only if the birthday traveller is comfortable with travel days.',
    facts:['3 hotel bases','2 long rail journeys','Highest effort'],
    hotels:[['Beijing · 22–25 June · 3 nights','Grand Hyatt Beijing','Allow €180–240 / room / night','Central Wangfujing base; gym and pool.','https://www.hyatt.com/grand-hyatt/en-US/beigh-grand-hyatt-beijing'],['Xi’an · 25–27 June · 2 nights','Hilton Xi’an City Wall','Allow €130–180 / room / night','Gym, pool and sauna shown by Hilton; Wulukou metro is 900 m away, so use a car for an easier transfer.','https://www.hilton.com/en/hotels/xiyhihi-hilton-xian/'],['Shanghai · 27–30 June · 3 nights','Shanghai Marriott Marquis City Centre','Allow €160–220 / room / night','Central metro links, gym, pool and sauna.','https://www.marriott.com/en-us/hotels/shamc-shanghai-marriott-hotel-city-centre/overview/']],
    days:[
      ['Mon 21','Depart for Beijing','Overnight flights from Ireland and Switzerland.','Travel day'],
      ['Tue 22','Arrive & rest','Car to hotel, light dinner.','Rest day'],
      ['Wed 23','Palace Museum','Short central route, advance tickets, hotel rest.','Moderate · ~2–3 km'],
      ['Thu 24','Great Wall or tea','Cable car at Mutianyu for anyone comfortable with steps; a Beijing tea/museum alternative for anyone who prefers a gentler day.','Optional stretch'],
      ['Fri 25','Train to Xi’an','Mid-morning Beijing West–Xi’an North G train (~4–6h), car to hotel. Dinner only.','Travel day'],
      ['Sat 26','Terracotta Army','Private car, pre-book ¥120 tickets, choose the main pits only. This is a large site with queues and standing; have a wheelchair plan or substitute an in-town museum. Afternoon rest.','Moderate · ~2–3 km / standing'],
      ['Sun 27','Train to Shanghai','Xi’an North–Shanghai Hongqiao (~5½–9½h). This consumes most of a day; take a car at each end.','Long travel day'],
      ['Mon 28','Separate day','<strong>Birthday traveller + siblings:</strong> H22 pre-owned designer shopping and lunch. <strong>The couple:</strong> Suzhou garden by short train or contemporary art.','Two tracks'],
      ['Tue 29','Bund & farewell','Short riverfront visit or seated cruise, birthday dinner.','Easy · ~1–2 km'],
      ['Wed 30','Fly home','Transfer to Pudong.','Travel day']
    ],
    budget:[['Economy flights · 3 Ireland + 2 Switzerland','€5,300–7,700'],['Three rooms · eight nights','€3,840–5,220'],['Two long trains, cars & transfers','€1,100–1,650'],['Meals · eight China days','€1,400–2,000'],['Admissions & experiences','€400–700'],['Insurance, connectivity & 10–15% buffer','€1,300–1,900']], total:'€13,300–19,200',
    flight:'Use the same open-jaw flight allowance as the two-city route. The published return fare examples are benchmarks, not a quote for flying into Beijing and home from Shanghai on these dates.'
  }
};

function render(key) {
  const route=routes[key];
  document.querySelectorAll('.route-tab').forEach(button=>{
    const active=button.dataset.route===key;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
    button.tabIndex=active?0:-1;
  });
  const panel=document.getElementById('route-panel');
  panel.setAttribute('aria-labelledby',`tab-${key}`);
  panel.innerHTML=`<div class="route-summary"><div><span class="pill">${route.tag}</span><h3>${route.title}</h3><p>${route.summary}</p></div><div class="fact-list">${route.facts.map(f=>`<span>${f}</span>`).join('')}</div></div><div class="route-body"><div class="days"><div class="subhead"><h4>Day by day</h4><span>One anchor activity · afternoons flexible</span></div>${route.days.map(([date,title,body,effort])=>`<article class="day"><span class="day-date">${date}</span><div><h5>${title}</h5><p>${body}</p><small>${effort}</small></div></article>`).join('')}</div><aside class="route-aside"><div class="aside-panel"><h4>Where to stay</h4>${route.hotels.map(([date,name,price,why,url])=>`<div class="hotel"><small>${date}</small><h5><a href="${url}" target="_blank" rel="noopener">${name} ↗</a></h5><strong>${price}</strong><p>${why}</p></div>`).join('')}<p class="aside-disclaimer">These are vetted location/amenity choices, not live June 2027 room offers. Confirm breakfast, room configuration, cancellation terms and accessible-room details directly.</p></div><div class="aside-panel flight-panel"><h4>Flights to compare</h4><p>${route.flight}</p><p>For Belfast, compare BHD/BFS with DUB including the ground journey and any connection. A cheap fare that adds a tiring layover may not suit the birthday traveller.</p></div></aside></div>`;
  document.getElementById('budget-route').textContent=`${route.label} · five people`;
  document.getElementById('budget-total').textContent=route.total;
  document.getElementById('budget-lines').innerHTML=route.budget.map(([name,value])=>`<div class="budget-line"><span>${name}</span><strong>${value}</strong></div>`).join('');
}

document.querySelectorAll('.route-tab').forEach(button=>{
  button.addEventListener('click',()=>render(button.dataset.route));
  button.addEventListener('keydown',event=>{
    if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
    event.preventDefault();
    const tabs=[...document.querySelectorAll('.route-tab')]; let index=tabs.indexOf(button);
    index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    tabs[index].focus();render(tabs[index].dataset.route);
  });
});
render('balanced');
