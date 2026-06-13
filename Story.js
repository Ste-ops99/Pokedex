/*!
 * Pokédex — Le Cronache di Velmora
 * Copyright © 2026 — Tutti i diritti riservati.
 * Unauthorized copying, distribution or modification is strictly prohibited.
 */
const STORY_SAVE_KEY='pkdx-story-v1';function defaultStory(){return{'version':0x2,'started':![],'chapter':0x1,'act':0x1,'nodeId':'prologo_1','flags':{},'team':[],'activeSlot':0x0,'balls':{'pokeball':0x8,'superball':0x2,'ultraball':0x0},'bag':{'pozione':0x3,'superpozione':0x0,'iperpozione':0x0,'antidoto':0x1},'monete':0x1f4,'caught':[],'tcgCards':[],'badges':[],'daysLeft':0x7,'rivalRelation':0x0,'elara':0x0,'morale':0x0,'ending':null,'wildPokemon':null,'enemyTeam':null,'enemyActiveIdx':0x0,'battlePhase':'player','battleLog':[],'battleReturnNode':null,'_selectedBall':'pokeball','audio':!![]};}let story=(function(){try{let _0x529767=localStorage['getItem'](STORY_SAVE_KEY);if(_0x529767){let _0x1d15ff=JSON['parse'](_0x529767);if(_0x1d15ff['version']===-0x2*-0xfc7+-0x4*-0x8d2+0xe*-0x4c6)return _0x1d15ff;}}catch(_0x4e7f32){}return defaultStory();}());function saveStory(){try{localStorage['setItem'](STORY_SAVE_KEY,JSON['stringify'](story));}catch(_0x50aa4e){}}const ZONE_POOLS={'bosco_sussurri':{'types':['grass','bug','normal','fairy'],'levelRange':[-0x26d+0xd*0x125+-0x8*0x18e,0x24b*0x7+-0x44*-0x29+-0x53*0x53],'label':'Bosco\x20dei\x20Sussurri'},'palude_nebbiosa':{'types':['poison','water','bug','ground'],'levelRange':[0x2*-0x855+0x6*0x653+0xa0*-0x22,0x23b+0x7*0x527+0x37*-0xb2],'label':'Palude\x20Nebbiosa'},'costa_rotta':{'types':['water','flying','ice'],'levelRange':[0x600*0x4+-0x1d84+0x590,0x5aa+-0x1c82+0x1*0x16ea],'label':'Costa\x20Rotta'},'miniere_sigillo':{'types':['rock','ground','steel','dark'],'levelRange':[-0x905+-0x1d7d*-0x1+-0x1468,-0x3b*-0x6a+-0x10d1*-0x1+0x83b*-0x5],'label':'Miniere\x20del\x20Sigillo'},'vetta_glaciale':{'types':['ice','rock','flying','fighting'],'levelRange':[-0xc9a*-0x2+-0x992+-0xf8c,-0x129d*-0x1+-0x2255+0xfd6],'label':'Vetta\x20Glaciale'},'rovine_antiche':{'types':['psychic','ghost','dark','fairy'],'levelRange':[0x1197+-0x2*-0xd67+-0x2c49,-0x1ec*-0x3+-0x22*-0x33+-0xc66],'label':'Rovine\x20Antiche'},'cuore_cometa':{'types':['dragon','fire','electric','psychic'],'levelRange':[0xf93*-0x1+0x31*-0xbb+0x3380,-0x3*-0xad3+-0xaca+-0x1583],'label':'Cuore\x20della\x20Cometa'}};function spawnFromZone(_0x1f8570){let _0x61be14=ZONE_POOLS[_0x1f8570]||ZONE_POOLS['bosco_sussurri'],_0x317a6c=allPokemon['filter'](_0x148c97=>_0x148c97['types']['some'](_0x3a5aee=>_0x61be14['types']['includes'](_0x3a5aee['type']['name'])));if(!_0x317a6c['length'])_0x317a6c=allPokemon['slice']();return _0x317a6c[Math['floor'](Math['random']()*_0x317a6c['length'])];}const GYMS=[{'key':'bozzolo','leader':'Bryn','type':'bug','badge':'Medaglia\x20Bozzolo','lvl':0x9,'loc':'Radura\x20di\x20Filo','desc':'specialista\x20del\x20tipo\x20Coleottero'},{'key':'roccia','leader':'Garrow','type':'rock','badge':'Medaglia\x20Roccia','lvl':0xe,'loc':'Cava\x20di\x20Pietragrigia','desc':'specialista\x20del\x20tipo\x20Roccia'},{'key':'scintilla','leader':'Vesa','type':'electric','badge':'Medaglia\x20Scintilla','lvl':0x13,'loc':'Faro\x20di\x20Voltaria','desc':'specialista\x20del\x20tipo\x20Elettro'},{'key':'foglia','leader':'Miren','type':'grass','badge':'Medaglia\x20Foglia','lvl':0x18,'loc':'Serra\x20di\x20Verdesonno','desc':'specialista\x20del\x20tipo\x20Erba'},{'key':'brace','leader':'Calder','type':'fire','badge':'Medaglia\x20Brace','lvl':0x1e,'loc':'Fucina\x20di\x20Emberhold','desc':'specialista\x20del\x20tipo\x20Fuoco'},{'key':'onda','leader':'Nerith','type':'water','badge':'Medaglia\x20Onda','lvl':0x24,'loc':'Cisterna\x20di\x20Maris','desc':'specialista\x20del\x20tipo\x20Acqua'},{'key':'velo','leader':'Umbra','type':'ghost','badge':'Medaglia\x20Velo','lvl':0x2a,'loc':'Cripta\x20di\x20Nebbiombra','desc':'specialista\x20del\x20tipo\x20Spettro'},{'key':'apice','leader':'Vaelthar','type':'dragon','badge':'Medaglia\x20Apice','lvl':0x30,'loc':'Picco\x20di\x20Draconis','desc':'specialista\x20del\x20tipo\x20Drago'}];function gymByKey(_0x722f63){return GYMS['find'](_0x4c2e20=>_0x4c2e20['key']===_0x722f63);}const UNOWN_WORD='DESIDERIO',UNOWN_GLYPHS={'A':'ᔑ','B':'ʖ','C':'ᓵ','D':'ↀ','E':'ᒷ','F':'⎓','G':'⊣','H':'⍑','I':'╎','J':'⋮','K':'ꖌ','L':'ꖎ','M':'ᒲ','N':'リ','O':'𝙹','P':'!¡','Q':'ᑑ','R':'∷','S':'ᓭ','T':'ℸ','U':'⚍','V':'⍊','W':'∴','X':'̇/','Y':'||','Z':'⨅'};function toUnown(_0x2d8daa){const _0x3c5441=(function(){let _0x456495=!![];return function(_0x1c1e41,_0x366b5a){const _0x33af6e=_0x456495?function(){if(_0x366b5a){const _0x475e15=_0x366b5a['apply'](_0x1c1e41,arguments);return _0x366b5a=null,_0x475e15;}}:function(){};return _0x456495=![],_0x33af6e;};}()),_0x4ae4cc=_0x3c5441(this,function(){return _0x4ae4cc['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x4ae4cc)['search']('(((.+)+)+)+$');});return _0x4ae4cc(),_0x2d8daa['toUpperCase']()['split']('')['map'](_0x1dd4b3=>UNOWN_GLYPHS[_0x1dd4b3]||_0x1dd4b3)['join']('\x20');}const STORY_NODES={'prologo_1':{'chapter':0x1,'location':'Villaggio\x20di\x20Aldenmoor','title':'Il\x20Risveglio','text':()=>'Per\x20la\x20prima\x20volta\x20in\x20mille\x20anni,\x20la\x20Cometa\x20di\x20Velmora\x20è\x20tornata\x20a\x20solcare\x20il\x20cielo\x20notturno.\x0a\x0aGli\x20anziani\x20lo\x20chiamano\x20\x22il\x20Risveglio\x22:\x20quando\x20la\x20cometa\x20appare,\x20antiche\x20energie\x20si\x20destano,\x20e\x20con\x20esse\x20arrivano\x20Pokémon\x20di\x20ogni\x20origine,\x20attratti\x20qui\x20da\x20una\x20forza\x20che\x20nessuno\x20comprende.\x0a\x0aNel\x20villaggio\x20di\x20Aldenmoor,\x20la\x20professoressa\x20Maren\x20ti\x20ha\x20convocato.\x20Accanto\x20a\x20te\x20c\x27è\x20Kael,\x20tuo\x20amico\x20d\x27infanzia,\x20impaziente\x20come\x20sempre.','choices':[{'label':'Ascolta\x20la\x20professoressa\x20Maren','action':'goto:prologo_2'},{'label':'Guarda\x20Kael','action':'goto:prologo_kael'}]},'prologo_kael':{'chapter':0x1,'location':'Villaggio\x20di\x20Aldenmoor','title':'Kael','text':()=>'Kael\x20ti\x20sorride,\x20ma\x20c\x27è\x20qualcosa\x20di\x20teso\x20nei\x20suoi\x20occhi.\x0a\x0a«Lo\x20sai\x20cosa\x20significa\x20la\x20Cometa,\x20vero?\x20Le\x20vecchie\x20storie\x20parlano\x20di\x20'+STORY_LEGENDARY_NAME+',\x20il\x20Pokémon\x20dei\x20Desideri,\x20che\x20si\x20risveglia\x20solo\x20quando\x20la\x20cometa\x20passa.\x20Chi\x20lo\x20trova...\x20può\x20esprimere\x20qualsiasi\x20desiderio.»\x0a\x0aStringe\x20il\x20pugno.\x20«Io\x20non\x20resterò\x20a\x20guardare\x20mentre\x20qualcun\x20altro\x20lo\x20trova\x20per\x20primo.»','choices':[{'label':'«Non\x20è\x20una\x20gara,\x20Kael.»','action':'flag:rival_warned;rival:-1;goto:prologo_2'},{'label':'«Allora\x20che\x20vinca\x20il\x20migliore.»','action':'rival:+1;goto:prologo_2'}]},'prologo_2':{'chapter':0x1,'location':'Laboratorio\x20di\x20Maren','title':'La\x20scelta\x20del\x20compagno','text':()=>'«La\x20Cometa\x20non\x20è\x20solo\x20uno\x20spettacolo»\x20dice\x20Maren,\x20grave.\x20«Ogni\x20mille\x20anni\x20risveglia\x20'+STORY_LEGENDARY_NAME+',\x20il\x20Pokémon\x20dei\x20Desideri.\x20È\x20inevitabile,\x20è\x20la\x20natura.»\x0a\x0a«Ma\x20c\x27è\x20una\x20leggenda\x20più\x20cupa:\x20con\x20un\x20antico\x20rituale,\x20qualcuno\x20potrebbe\x20spezzare\x20i\x20Sigilli\x20che\x20proteggono\x20Jirachi\x20e\x20legarlo\x20a\x20sé\x20—\x20costringerlo\x20a\x20esaudire\x20un\x20solo,\x20terribile\x20desiderio.\x20E\x20temo\x20che\x20l\x27Ordine\x20del\x20Sigillo\x20voglia\x20fare\x20proprio\x20questo.»\x0a\x0aApre\x20una\x20custodia\x20con\x20tre\x20Poké\x20Ball.\x20«Prima\x20che\x20tu\x20parta,\x20scegli\x20il\x20tuo\x20primo\x20compagno.»','choices':[{'label':'🌱\x20Compagno\x20di\x20indole\x20gentile\x20(Erba)','action':'starter:grass;goto:prologo_3'},{'label':'🔥\x20Compagno\x20di\x20indole\x20ardente\x20(Fuoco)','action':'starter:fire;goto:prologo_3'},{'label':'💧\x20Compagno\x20di\x20indole\x20calma\x20(Acqua)','action':'starter:water;goto:prologo_3'}]},'prologo_3':{'chapter':0x1,'location':'Laboratorio\x20di\x20Maren','title':'La\x20partenza','text':()=>'«Abbi\x20cura\x20l\x27uno\x20dell\x27altro»\x20dice\x20Maren.\x0a\x0a«Ascolta\x20bene:\x20la\x20leggenda\x20narra\x20che\x20solo\x20chi\x20raccoglie\x20le\x20otto\x20Medaglie\x20dei\x20Custodi\x20può\x20essere\x20accolto\x20da\x20Sila,\x20la\x20Guardiana,\x20e\x20varcare\x20la\x20porta\x20verso\x20il\x20Cuore\x20della\x20Cometa.\x20Senza\x20di\x20esse,\x20nessuno\x20è\x20ritenuto\x20degno\x20di\x20avvicinarsi\x20a\x20'+STORY_LEGENDARY_NAME+'.»\x0a\x0a«Trova\x20gli\x20otto\x20Custodi\x20di\x20Velmora.\x20E\x20sbrigati:\x20ogni\x20notte\x20la\x20Cometa\x20brilla\x20più\x20forte.»\x0a\x0aKael\x20è\x20già\x20sulla\x20porta.\x20«Otto\x20medaglie?\x20Sarò\x20io\x20ad\x20averle\x20per\x20primo.»\x20E\x20sparisce.','choices':[{'label':'Inizia\x20il\x20viaggio\x20per\x20le\x20Medaglie\x20→','action':'chapter:2;goto:hub_medaglie'}]},'hub_medaglie':{'chapter':0x2,'location':'Velmora','title':'Il\x20cammino\x20dei\x20Custodi','text':()=>{let _0x2f7aa8=story['badges']['length'],_0x4821db=['Il\x20cielo\x20è\x20sereno;\x20la\x20Cometa\x20è\x20solo\x20un\x20puntino\x20lontano.','La\x20Cometa\x20cresce,\x20una\x20scheggia\x20di\x20luce\x20tra\x20le\x20stelle.','Ogni\x20notte\x20la\x20Cometa\x20è\x20più\x20luminosa.\x20Il\x20tempo\x20stringe.','La\x20Cometa\x20domina\x20il\x20cielo\x20notturno.\x20Manca\x20poco\x20al\x20Risveglio.','Il\x20cielo\x20arde\x20di\x20luce\x20dorata.\x20Jirachi\x20sta\x20per\x20destarsi.'][Math['min'](0x1*0x1d47+-0x2209*0x1+0x4c6,Math['floor'](_0x2f7aa8/(0x55*-0x34+-0x28d*-0x7+-0x95)))],_0x5c35f8=_0x2f7aa8===0x1591+0x517*-0x3+-0x64c?'Non\x20hai\x20ancora\x20Medaglie.':'Hai\x20'+_0x2f7aa8+'/8\x20Medaglie:\x20'+story['badges']['map'](_0x13339b=>gymByKey(_0x13339b)?.['badge']||_0x13339b)['join'](',\x20')+'.';return _0x5c35f8+'\x0a\x0a'+_0x4821db+'\x0a\x0a'+(_0x2f7aa8>=-0xd44*0x1+0xb65+0x1e7*0x1?'Hai\x20tutte\x20e\x20otto\x20le\x20Medaglie!\x20È\x20ora\x20di\x20cercare\x20Sila.':'Scegli\x20quale\x20Custode\x20sfidare.\x20Tra\x20una\x20sfida\x20e\x20l\x27altra\x20puoi\x20esplorare\x20per\x20allenarti\x20e\x20catturare\x20Pokémon.');},'choices':[{'label':'__GYM_CHOICES__','action':'noop'}]},'sila_porta':{'chapter':0x3,'location':'Soglia\x20delle\x20Rovine','title':'La\x20Guardiana','text':()=>'Davanti\x20a\x20un\x27enorme\x20porta\x20di\x20pietra\x20incisa\x20di\x20simboli,\x20una\x20donna\x20anziana\x20dagli\x20occhi\x20acuti\x20ti\x20osserva\x20avvicinarti.\x0a\x0a«Otto\x20Medaglie.\x20Le\x20sento,\x20sai?\x20Il\x20legame\x20che\x20porti\x20con\x20i\x20tuoi\x20Pokémon.»\x20Sorride\x20appena.\x20«Sono\x20Sila,\x20l\x27ultima\x20Guardiana.\x20Mille\x20anni\x20fa\x20giurammo\x20di\x20proteggere\x20'+STORY_LEGENDARY_NAME+',\x20il\x20Pokémon\x20dei\x20Desideri,\x20da\x20chi\x20volesse\x20usarlo.»\x0a\x0a«La\x20Cometa\x20è\x20quasi\x20al\x20suo\x20apice,\x20e\x20l\x27Ordine\x20è\x20già\x20là\x20sotto.\x20Ma\x20le\x20medaglie\x20non\x20bastano.\x20Prima\x20di\x20affidarti\x20il\x20mio\x20segreto,\x20devo\x20vedere\x20con\x20i\x20miei\x20occhi\x20di\x20cosa\x20sei\x20capace.»','choices':[{'label':'«Allora\x20mettimi\x20alla\x20prova.»','action':'goto:sila_battle'},{'label':'«Chi\x20è\x20l\x27Ordine\x20del\x20Sigillo?»','action':'goto:sila_ordine'}]},'sila_ordine':{'chapter':0x3,'location':'Soglia\x20delle\x20Rovine','title':'L\x27Ordine\x20del\x20Sigillo','text':()=>'«Un\x20tempo\x20custodi\x20come\x20me»\x20dice\x20Sila,\x20amara.\x20«Ora\x20guidati\x20da\x20Vael,\x20che\x20crede\x20di\x20poter\x20domare\x20un\x20desiderio.\x20E\x20il\x20tuo\x20amico\x20Kael...\x20è\x20sceso\x20laggiù\x20con\x20loro.\x20Cerca\x20'+STORY_LEGENDARY_NAME+'\x20per\x20sé.»\x0a\x0a«Se\x20vuoi\x20fermarli,\x20devi\x20arrivare\x20prima.\x20Ma\x20prima\x20ancora,\x20devi\x20affrontare\x20me.»','choices':[{'label':'Accetta\x20la\x20sfida\x20della\x20Guardiana','action':'goto:sila_battle'}]},'sila_battle':{'chapter':0x3,'location':'Soglia\x20delle\x20Rovine','title':'La\x20prova\x20della\x20Guardiana','text':()=>'Sila\x20si\x20toglie\x20il\x20mantello.\x20Sotto,\x20l\x27abito\x20di\x20una\x20allenatrice\x20che\x20fu\x20leggendaria.\x0a\x0a«Mille\x20anni\x20di\x20veglia\x20non\x20mi\x20hanno\x20indebolita,\x20ragazzo.\x20Mostrami\x20che\x20sei\x20degno\x20di\x20ciò\x20che\x20custodisco!»\x0a\x0aLibera\x20il\x20suo\x20Pokémon:\x20l\x27aria\x20stessa\x20sembra\x20piegarsi\x20attorno\x20a\x20lui.','choices':[{'label':'⚔️\x20Affronta\x20Sila','action':'battle:guardiana:sila;goto:sila_dopo_battle'}]},'sila_dopo_battle':{'chapter':0x3,'location':'Soglia\x20delle\x20Rovine','title':'Degno','text':()=>'Sila\x20richiama\x20il\x20suo\x20Pokémon,\x20soddisfatta.\x20«Non\x20vincevo\x20da\x20così\x20tanto\x20che\x20avevo\x20quasi\x20dimenticato\x20come\x20ci\x20si\x20sente\x20a\x20perdere.\x20Bene.»\x0a\x0aDal\x20collo\x20si\x20sfila\x20un\x20ciondolo:\x20una\x20piccola\x20stella\x20d\x27oro\x20opaco.\x20«Questo\x20è\x20l\x27Amuleto\x20della\x20Cometa.\x20L\x27ho\x20portato\x20per\x20mille\x20anni.\x20Davanti\x20a\x20'+STORY_LEGENDARY_NAME+',\x20ti\x20permetterà\x20di\x20farti\x20ascoltare\x20invece\x20di\x20farti\x20divorare.\x20Usalo\x20con\x20saggezza.»\x0a\x0a«Ora,\x20l\x27ultima\x20prova:\x20l\x27antica\x20scrittura.»','choices':[{'label':'Ricevi\x20l\x27Amuleto\x20della\x20Cometa','action':'flag:has_amulet;goto:enigma_unown'}]},'enigma_unown':{'chapter':0x3,'location':'Porta\x20degli\x20Unown','title':'L\x27antica\x20scrittura','text':()=>'Sulla\x20porta,\x20otto\x20simboli\x20Unown\x20si\x20illuminano\x20uno\x20a\x20uno:\x0a\x0a'+toUnown(UNOWN_WORD)+'\x0a\x0a«Gli\x20Unown\x20custodiscono\x20una\x20sola\x20parola»\x20dice\x20Sila.\x20«La\x20parola\x20che\x20muove\x20tutto,\x20a\x20Velmora.\x20Ciò\x20che\x20l\x27Ordine\x20brama,\x20ciò\x20che\x20Jirachi\x20esaudisce.»\x0a\x0a«Decifrala,\x20e\x20la\x20porta\x20si\x20aprirà.»','choices':[{'label':'Rispondi:\x20SPERANZA','action':'goto:enigma_sbagliato'},{'label':'Rispondi:\x20DESIDERIO','action':'flag:solved_unown;goto:enigma_giusto'},{'label':'Rispondi:\x20POTERE','action':'goto:enigma_sbagliato'},{'label':'Rispondi:\x20COMETA','action':'goto:enigma_sbagliato'}]},'enigma_sbagliato':{'chapter':0x3,'location':'Porta\x20degli\x20Unown','title':'Non\x20è\x20quella','text':()=>'I\x20simboli\x20pulsano\x20di\x20rosso.\x20La\x20porta\x20resta\x20chiusa.\x0a\x0a«Guarda\x20meglio»\x20dice\x20Sila\x20con\x20pazienza.\x20«Ogni\x20simbolo\x20è\x20una\x20lettera.\x20'+toUnown(UNOWN_WORD)+'\x20—\x20conta\x20i\x20segni,\x20ascolta\x20cosa\x20sussurrano.»','choices':[{'label':'Riprova','action':'goto:enigma_unown'},{'label':'Osserva\x20meglio\x20i\x20simboli','action':'goto:enigma_aiuto'}]},'enigma_aiuto':{'chapter':0x3,'location':'Porta\x20degli\x20Unown','title':'Un\x20indizio','text':()=>'Sila\x20traccia\x20i\x20primi\x20segni\x20con\x20il\x20dito.\x0a\x0a«'+UNOWN_GLYPHS['D']+'\x20è\x20la\x20\x22D\x22.\x20'+UNOWN_GLYPHS['E']+'\x20è\x20la\x20\x22E\x22.\x20'+UNOWN_GLYPHS['S']+'\x20è\x20la\x20\x22S\x22...»\x0a\x0aNove\x20lettere.\x20Ciò\x20che\x20ognuno\x20brama\x20davanti\x20a\x20Jirachi.','choices':[{'label':'Ho\x20capito:\x20DESIDERIO','action':'flag:solved_unown;goto:enigma_giusto'},{'label':'Torna\x20ai\x20simboli','action':'goto:enigma_unown'}]},'enigma_giusto':{'chapter':0x3,'location':'Porta\x20degli\x20Unown','title':'La\x20porta\x20si\x20apre','text':()=>'I\x20simboli\x20si\x20accendono\x20d\x27oro.\x20\x22DESIDERIO\x22.\x20La\x20parola\x20che\x20ha\x20mosso\x20eroi\x20e\x20tiranni.\x0a\x0aLa\x20porta\x20di\x20pietra\x20si\x20apre\x20con\x20un\x20boato\x20profondo.\x20Oltre,\x20una\x20scalinata\x20scende\x20nel\x20buio,\x20verso\x20il\x20Cuore\x20della\x20Cometa.\x0a\x0a«Va\x27»\x20dice\x20Sila.\x20«Io\x20non\x20posso\x20seguirti\x20laggiù.\x20Ma\x20ricorda:\x20il\x20vero\x20potere\x20non\x20è\x20ottenere\x20'+STORY_LEGENDARY_NAME+'.\x20È\x20sapere\x20cosa\x20NON\x20desiderare.»\x0a\x0aNel\x20cielo,\x20la\x20Cometa\x20raggiunge\x20il\x20suo\x20apice.\x20Il\x20Risveglio\x20è\x20iniziato.','choices':[{'label':'Scendi\x20verso\x20il\x20Cuore\x20→','action':'act2start;goto:act2_discesa'}]},'act2_discesa':{'chapter':0x4,'location':'Scalinata\x20Antica','title':'I\x20Sette\x20Giorni','text':()=>'La\x20leggenda\x20dice\x20che,\x20una\x20volta\x20sveglio,\x20'+STORY_LEGENDARY_NAME+'\x20resta\x20desto\x20per\x20sette\x20giorni\x20soltanto.\x20Poi\x20torna\x20a\x20dormire\x20per\x20mille\x20anni.\x0a\x0aSette\x20giorni\x20per\x20fermare\x20l\x27Ordine.\x20Sette\x20giorni\x20per\x20fare\x20la\x20scelta\x20giusta.\x0a\x0a'+(story['flags']['elara_joined']?'Elara\x20scende\x20al\x20tuo\x20fianco.\x20«Qualunque\x20cosa\x20troviamo\x20laggiù,\x20l\x27affrontiamo\x20insieme.»':'Scendi\x20da\x20solo\x20nel\x20buio.'),'choices':[{'label':'Avanza\x20nelle\x20profondità\x20→','action':'day:1;goto:act2_kael_intro'}]},'act2_kael_intro':{'chapter':0x4,'location':'Cripta\x20del\x20Sigillo','title':'Vecchi\x20amici','text':()=>'In\x20fondo\x20alla\x20cripta,\x20una\x20figura\x20familiare\x20ti\x20blocca\x20la\x20strada.\x20Kael.\x0a\x0a«Lo\x20sapevo\x20che\x20saresti\x20arrivato\x20fin\x20qui»\x20dice.\x20«Ma\x20'+STORY_LEGENDARY_NAME+'\x20è\x20mio.\x20L\x27Ordine\x20mi\x20ha\x20promesso\x20il\x20primo\x20desiderio.»\x20La\x20sua\x20voce\x20trema\x20appena.\x20«Non\x20costringermi\x20a\x20fermarti.»','choices':[{'label':'«Kael,\x20ti\x20stanno\x20usando.\x20Svegliati.»','cond':'rivalPos','action':'goto:act2_kael_dubbio'},{'label':'«Allora\x20dovrò\x20fermarti\x20io.»','action':'goto:act2_kael_battle'}]},'act2_kael_dubbio':{'chapter':0x4,'location':'Cripta\x20del\x20Sigillo','title':'Un\x20seme\x20di\x20dubbio','text':()=>'Kael\x20esita.\x20«Usarmi?\x20No,\x20io...»\x20Per\x20un\x20attimo,\x20il\x20ragazzo\x20che\x20conoscevi\x20riaffiora.\x20«...e\x20se\x20avessi\x20ragione?»\x0a\x0aScuote\x20la\x20testa.\x20«No.\x20Sono\x20arrivato\x20troppo\x20lontano.\x20Mostrami\x20quanto\x20vali\x20—\x20e\x20se\x20vinci,\x20ti\x20ascolterò.»','choices':[{'label':'Affronta\x20Kael','action':'goto:act2_kael_battle'}]},'act2_kael_battle':{'chapter':0x4,'location':'Cripta\x20del\x20Sigillo','title':'Scontro\x20col\x20rivale','text':()=>'Kael\x20stringe\x20la\x20sua\x20Poké\x20Ball.\x20«Vediamo\x20chi\x20merita\x20davvero\x20il\x20desiderio!»','choices':[{'label':'⚔️\x20Combatti\x20Kael','action':'day:1;battle:rival:kael;goto:act2_dopo_kael'}]},'act2_dopo_kael':{'chapter':0x5,'location':'Cripta\x20del\x20Sigillo','title':'Dopo\x20lo\x20scontro','text':()=>'Kael\x20cade\x20in\x20ginocchio.\x20Stavolta\x20non\x20c\x27è\x20rabbia\x20—\x20solo\x20stanchezza.\x0a\x0a«Hai...\x20hai\x20ragione.\x20Vael\x20non\x20vuole\x20condividere\x20niente.\x20Mi\x20ha\x20mentito.»\x20Ti\x20guarda.\x20«Vai.\x20Ferma\x20Vael\x20prima\x20che\x20esprima\x20il\x20suo\x20desiderio.\x20Io...\x20io\x20ti\x20copro\x20le\x20spalle.»','choices':[{'label':'«Vieni\x20con\x20me,\x20allora.»','cond':'rivalPos','action':'flag:kael_redeemed;rival:+2;goto:act2_pausa'},{'label':'«Resta\x20qui.\x20Hai\x20già\x20fatto\x20abbastanza\x20danni.»','action':'goto:act2_pausa'}]},'act2_pausa':{'chapter':0x5,'location':'Cripta\x20del\x20Sigillo','title':'Quiete\x20prima\x20della\x20fine','text':()=>''+(story['flags']['elara_joined']?'Vi\x20fermate\x20un\x20attimo\x20a\x20riprendere\x20fiato.\x20La\x20Cometa\x20filtra\x20attraverso\x20una\x20crepa\x20nella\x20roccia.':'Ti\x20fermi\x20un\x20attimo\x20nel\x20silenzio\x20della\x20cripta.'),'choices':[{'label':story['flags']['elara_joined']?'Parla\x20con\x20Elara':'Prosegui','action':story['flags']['elara_joined']?'goto:cap4_elara_notte':'goto:cap4_intento'}]},'act2_vael_intro':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Il\x20Cuore\x20della\x20Cometa','text':()=>'Una\x20caverna\x20immensa,\x20illuminata\x20da\x20una\x20luce\x20dorata\x20che\x20pulsa\x20come\x20un\x20battito.\x20Al\x20centro,\x20sospeso\x20a\x20mezz\x27aria,\x20'+STORY_LEGENDARY_NAME+'\x20—\x20piccolo,\x20luminoso.\x20I\x20suoi\x20occhi\x20tremano:\x20la\x20Cometa\x20lo\x20sta\x20già\x20risvegliando,\x20lentamente,\x20come\x20ogni\x20mille\x20anni.\x0a\x0aMa\x20attorno\x20a\x20lui,\x20tre\x20Sigilli\x20di\x20luce\x20lo\x20trattengono.\x20Vael,\x20capo\x20dell\x27Ordine,\x20sta\x20incidendo\x20simboli\x20per\x20spezzarli.\x20«Sei\x20arrivato\x20giusto\x20in\x20tempo.\x20Quando\x20i\x20Sigilli\x20cadranno,\x20'+STORY_LEGENDARY_NAME+'\x20sarà\x20legato\x20al\x20MIO\x20desiderio.\x20Niente\x20più\x20Guardiani,\x20niente\x20più\x20catene.\x20Solo\x20la\x20mia\x20volontà.»','choices':[{'label':'«Non\x20lascerò\x20che\x20tu\x20lo\x20usi.»','action':'goto:act2_vael_dialogo'}]},'act2_vael_dialogo':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Vael','text':()=>'Vael\x20ride.\x20«Usarlo?\x20Io\x20esprimerò\x20il\x20desiderio\x20perfetto.\x20Un\x20mondo\x20rifatto\x20a\x20mia\x20immagine.\x20Velmora\x20mi\x20ha\x20negato\x20tutto\x20—\x20ora\x20prenderò\x20tutto.»\x0a\x0a'+(story['flags']['kael_redeemed']?'«Il\x20cambiamento\x20non\x20si\x20impone\x20con\x20la\x20forza,\x20Vael.»\x20Kael\x20è\x20al\x20tuo\x20fianco,\x20stavolta.':'')+(story['flags']['elara_joined']?'\x0a\x0aElara\x20stringe\x20i\x20pugni.\x20«Non\x20oggi.\x20Non\x20lui.»':''),'choices':[{'label':'Affronta\x20Vael','action':'day:2;battle:boss:vael;goto:act2_dopo_vael'}]},'act2_dopo_vael':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Il\x20risveglio','text':()=>'Vael\x20cade,\x20incredulo.\x20«Impossibile...»\x20I\x20simboli\x20del\x20suo\x20rituale\x20si\x20spengono.\x20Il\x20vincolo\x20è\x20spezzato\x20—\x20ma\x20non\x20come\x20voleva\x20lui.\x0a\x0aLa\x20Cometa\x20raggiunge\x20l\x27apice.\x20'+STORY_LEGENDARY_NAME+'\x20apre\x20del\x20tutto\x20gli\x20occhi\x20—\x20tre\x20punti\x20di\x20luce\x20pura\x20—\x20e\x20i\x20tre\x20Sigilli\x20si\x20dissolvono\x20dolcemente.\x20È\x20sveglio.\x20È\x20libero.\x20Nessuno\x20lo\x20controlla.\x0a\x0aTi\x20fissa,\x20curioso.\x20Percepisce\x20che\x20potresti\x20chiedergli\x20qualcosa.\x20Ha\x20sette\x20giorni\x20di\x20veglia,\x20poi\x20tornerà\x20a\x20dormire.\x20Cosa\x20farai?','choices':[{'label':'Lascialo\x20libero,\x20senza\x20chiedere\x20nulla\x20(Gentilezza)','cond':'gentle_heart','action':'goto:cap5_finale_gentile'},{'label':'Sigilla\x20di\x20nuovo\x20il\x20suo\x20potere\x20per\x20sicurezza','action':'battle:legendary:dormiente;goto:cap5_finale_forza'},{'label':'Catturalo,\x20finché\x20è\x20sveglio','action':'battle:legendary_catch:dormiente;goto:cap5_finale_cattura'}]},'cap2_bosco':{'chapter':0x2,'location':'Bosco\x20dei\x20Sussurri','title':'Il\x20Bosco\x20dei\x20Sussurri','text':()=>'Gli\x20alberi\x20sono\x20così\x20fitti\x20che\x20la\x20luce\x20arriva\x20a\x20fatica.\x20Da\x20qualche\x20parte,\x20un\x20fruscio.\x0a\x0aIl\x20sentiero\x20si\x20divide:\x20a\x20sinistra\x20l\x27erba\x20alta\x20dove\x20si\x20muovono\x20ombre\x20di\x20Pokémon,\x20a\x20destra\x20un\x20viottolo\x20più\x20sicuro\x20ma\x20lungo.','choices':[{'label':'Attraversa\x20l\x27erba\x20alta\x20(incontri\x20probabili)','action':'explore:bosco_sussurri;goto:cap2_dopo_erba'},{'label':'Prendi\x20il\x20viottolo\x20sicuro','action':'goto:cap2_viottolo'}]},'cap2_viottolo':{'chapter':0x2,'location':'Bosco\x20dei\x20Sussurri','title':'Il\x20viottolo','text':()=>'Il\x20viottolo\x20costeggia\x20un\x20ruscello.\x20È\x20tranquillo\x20—\x20troppo.\x0a\x0aTrovi\x20un\x20Pokémon\x20ferito\x20accasciato\x20tra\x20le\x20radici.\x20Qualcuno\x20l\x27ha\x20abbandonato.','choices':[{'label':'Aiutalo\x20e\x20curalo','action':'flag:helped_wounded;morale:+1;item:pozione:-1;goto:cap2_dopo_erba'},{'label':'Lascialo\x20e\x20prosegui','action':'morale:-1;goto:cap2_dopo_erba'}]},'cap2_dopo_erba':{'chapter':0x2,'location':'Bosco\x20dei\x20Sussurri','title':'La\x20radura','text':()=>'Raggiungi\x20una\x20radura.\x20Al\x20centro,\x20una\x20figura\x20incappucciata\x20osserva\x20una\x20pietra\x20incisa\x20con\x20simboli\x20antichi\x20e\x20l\x27immagine\x20di\x20una\x20cometa.\x0a\x0aSi\x20volta:\x20è\x20una\x20donna\x20anziana\x20dagli\x20occhi\x20acuti.\x20«Un\x20altro\x20viaggiatore.\x20La\x20Cometa\x20attira\x20anche\x20voi\x20umani,\x20ormai.»\x0a\x0a«Sono\x20Sila,\x20la\x20Guardiana.\x20Cosa\x20cerchi?»','choices':[{'label':'«Voglio\x20sapere\x20cos\x27è\x20il\x20Risveglio.»','action':'goto:cap2_sila_disgelo'},{'label':'«Cerco\x20il\x20Pokémon\x20dormiente.»','action':'flag:asked_pokemon;goto:cap2_sila_pokemon'}]},'cap2_sila_disgelo':{'chapter':0x2,'location':'Radura\x20della\x20Guardiana','title':'La\x20verità\x20di\x20Sila','text':()=>'Sila\x20annuisce,\x20come\x20se\x20avesse\x20atteso\x20quella\x20domanda.\x0a\x0a«Mille\x20anni\x20fa,\x20'+STORY_LEGENDARY_NAME+',\x20il\x20Pokémon\x20dei\x20Desideri,\x20fu\x20addormentato\x20e\x20protetto\x20da\x20tre\x20Sigilli.\x20Perché\x20un\x20desiderio\x20espresso\x20da\x20un\x20cuore\x20avido\x20può\x20riscrivere\x20il\x20mondo\x20intero\x20—\x20e\x20distruggerlo.»\x0a\x0a«Ora\x20qualcuno\x20vuole\x20forzarne\x20il\x20Risveglio.\x20Un\x20gruppo\x20che\x20si\x20fa\x20chiamare\x20l\x27Ordine\x20del\x20Sigillo\x20—\x20un\x20nome\x20beffardo,\x20perché\x20vogliono\x20romperli,\x20non\x20custodirli.»','choices':[{'label':'«Come\x20li\x20fermo?»','action':'goto:cap2_sila_fermarli'},{'label':'«Perché\x20vogliono\x20liberarlo?»','action':'goto:cap2_sila_perche'}]},'cap2_sila_perche':{'chapter':0x2,'location':'Radura\x20della\x20Guardiana','title':'L\x27ambizione','text':()=>'«Potere»\x20dice\x20Sila\x20con\x20disprezzo.\x20«Credono\x20di\x20poterlo\x20controllare.\x20Tutti\x20lo\x20credono,\x20finché\x20non\x20è\x20troppo\x20tardi.»\x0a\x0a«Il\x20loro\x20capo,\x20Vael,\x20era\x20un\x20mio\x20allievo.\x20Conosce\x20gli\x20antichi\x20rituali.\x20È\x20l\x27unico\x20abbastanza\x20folle\x20da\x20provarci.»','choices':[{'label':'«Come\x20li\x20fermo?»','action':'goto:cap2_sila_fermarli'}]},'cap2_sila_pokemon':{'chapter':0x2,'location':'Radura\x20della\x20Guardiana','title':'Un\x20cuore\x20avido','text':()=>'Lo\x20sguardo\x20di\x20Sila\x20si\x20raffredda.\x20«Anche\x20tu?\x20Come\x20il\x20ragazzo\x20passato\x20di\x20qui\x20poco\x20fa.»\x0a\x0aKael.\x20«Cercate\x20tutti\x20la\x20stessa\x20cosa:\x20'+STORY_LEGENDARY_NAME+'\x20e\x20il\x20suo\x20desiderio.\x20Ma\x20il\x20Pokémon\x20dei\x20Desideri\x20non\x20è\x20un\x20trofeo.\x20È\x20una\x20tentazione\x20che\x20divora\x20chi\x20lo\x20brama.»\x0a\x0a«Se\x20vuoi\x20correre\x20verso\x20la\x20rovina,\x20almeno\x20sappi\x20cosa\x20stai\x20affrontando.»','choices':[{'label':'«Allora\x20spiegami.»','action':'goto:cap2_sila_fermarli'}]},'cap2_sila_fermarli':{'chapter':0x2,'location':'Radura\x20della\x20Guardiana','title':'Il\x20primo\x20Sigillo','text':()=>'«Ci\x20sono\x20tre\x20Sigilli\x20minori\x20che\x20alimentano\x20quello\x20centrale»\x20dice\x20Sila.\x20«L\x27Ordine\x20li\x20sta\x20distruggendo\x20uno\x20per\x20uno.\x20Il\x20primo\x20è\x20nelle\x20Miniere\x20del\x20Sigillo,\x20oltre\x20la\x20Palude\x20Nebbiosa.»\x0a\x0a«Vai.\x20E\x20se\x20incontri\x20l\x27Ordine...\x20non\x20sottovalutarli.»\x0a\x0aTi\x20consegna\x20un\x20amuleto.\x20«Questo\x20ti\x20aprirà\x20le\x20porte\x20antiche.»','choices':[{'label':'Prendi\x20l\x27amuleto\x20e\x20parti','action':'flag:has_amulet;chapter:3;goto:cap3_elara_incontro'}]},'cap3_elara_incontro':{'chapter':0x2,'location':'Sentiero\x20di\x20Velmora','title':'Un\x20incontro','text':()=>'Lungo\x20il\x20sentiero\x20verso\x20il\x20prossimo\x20Custode,\x20una\x20ragazza\x20è\x20inginocchiata\x20accanto\x20a\x20un\x20Pokémon\x20ferito,\x20le\x20mani\x20sicure\x20mentre\x20lo\x20fascia.\x20Alza\x20lo\x20sguardo\x20—\x20occhi\x20vivaci,\x20un\x20mezzo\x20sorriso.\x0a\x0a«Anche\x20tu\x20dai\x20la\x20caccia\x20all\x27Ordine\x20del\x20Sigillo?\x20Sono\x20Elara.\x20Li\x20seguo\x20da\x20settimane:\x20hanno\x20fatto\x20del\x20male\x20a\x20troppi\x20Pokémon,\x20e\x20ora\x20puntano\x20a\x20'+STORY_LEGENDARY_NAME+'.»\x0a\x0aSi\x20rialza.\x20«Anche\x20tu\x20raccogli\x20le\x20Medaglie\x20per\x20arrivare\x20al\x20Cuore,\x20vero?\x20Due\x20viaggiatori\x20vanno\x20più\x20lontano\x20di\x20uno.\x20Che\x20ne\x20dici?»','choices':[{'label':'«Volentieri.\x20Mi\x20farebbe\x20comodo\x20una\x20mano.»','action':'elara:+1;flag:elara_joined;goto:cap3_elara_dopo'},{'label':'«Lavoro\x20meglio\x20da\x20solo.»','action':'flag:elara_joined;goto:cap3_elara_dopo'}]},'cap3_elara_dopo':{'chapter':0x2,'location':'Sentiero\x20di\x20Velmora','title':'Compagni\x20di\x20strada','text':()=>(story['elara']>-0xfef*0x1+0xf76+0x79?'Elara\x20sorride\x20e\x20si\x20mette\x20al\x20passo\x20con\x20te.\x20«Allora\x20andiamo.\x20E...\x20grazie.\x20È\x20un\x20pezzo\x20che\x20non\x20viaggiavo\x20con\x20qualcuno\x20di\x20cui\x20fidarmi.»':'Elara\x20alza\x20le\x20spalle,\x20divertita.\x20«Come\x20vuoi.\x20Ma\x20ti\x20seguo\x20lo\x20stesso\x20—\x20abbiamo\x20lo\x20stesso\x20nemico.»')+'\x0a\x0aDa\x20qui\x20in\x20avanti,\x20ti\x20accompagnerà\x20nel\x20cammino\x20verso\x20le\x20Medaglie\x20e\x20oltre.','choices':[{'label':'Riprendi\x20il\x20cammino\x20dei\x20Custodi\x20→','action':'goto:hub_medaglie'}]},'elara_cameo_meta':{'chapter':0x2,'location':'Accampamento','title':'Una\x20sosta','text':()=>'La\x20sera,\x20attorno\x20al\x20fuoco,\x20Elara\x20osserva\x20le\x20tue\x20Medaglie\x20allineate.\x20«Quattro.\x20Sei\x20a\x20metà\x20strada.»\x0a\x0aGioca\x20con\x20una\x20scheggia\x20di\x20legno.\x20«Sai,\x20all\x27inizio\x20pensavo\x20viaggiassi\x20solo\x20per\x20'+STORY_LEGENDARY_NAME+',\x20come\x20tutti\x20gli\x20altri.\x20Ma\x20ti\x20ho\x20visto\x20con\x20i\x20tuoi\x20Pokémon.\x20Tu\x20li\x20ascolti\x20davvero.»\x0a\x0aFa\x20una\x20pausa.\x20«È\x20raro.\x20Mi\x20piace.»','choices':[{'label':'«Anche\x20viaggiare\x20con\x20te\x20non\x20è\x20male.»','action':'elara:+1;goto:hub_medaglie'},{'label':'«Sono\x20solo\x20Pokémon\x20forti,\x20niente\x20di\x20più.»','action':'goto:hub_medaglie'}]},'elara_cameo_ordine':{'chapter':0x2,'location':'Sentiero\x20di\x20Velmora','title':'Ombre\x20dell\x27Ordine','text':()=>'Trovate\x20un\x20villaggio\x20messo\x20a\x20soqquadro.\x20Una\x20donna\x20in\x20lacrime:\x20l\x27Ordine\x20del\x20Sigillo\x20ha\x20portato\x20via\x20i\x20Pokémon\x20di\x20tutti,\x20\x22per\x20il\x20bene\x20del\x20Risveglio\x22.\x0a\x0aElara\x20stringe\x20i\x20denti.\x20«Vedi\x20cosa\x20fanno?\x20E\x20Vael\x20chiama\x20tutto\x20questo\x20\x27un\x20mondo\x20migliore\x27.»\x20Si\x20volta\x20verso\x20di\x20te,\x20lo\x20sguardo\x20deciso.\x20«Quando\x20arriveremo\x20al\x20Cuore,\x20non\x20lasciamoglielo\x20avere.\x20Promettimelo.»','choices':[{'label':'«Te\x20lo\x20prometto.»','action':'elara:+1;flag:promise_village;goto:hub_medaglie'},{'label':'«Faremo\x20il\x20possibile.»','action':'goto:hub_medaglie'}]},'cap3_palude':{'chapter':0x3,'location':'Palude\x20Nebbiosa','title':'La\x20Palude\x20Nebbiosa','text':()=>'La\x20nebbia\x20ti\x20arriva\x20alle\x20ginocchia.\x20L\x27aria\x20sa\x20di\x20marcio\x20e\x20di\x20elettricità\x20statica.\x0a\x0aDavanti\x20a\x20te,\x20due\x20membri\x20dell\x27Ordine\x20del\x20Sigillo\x20stanno\x20trascinando\x20via\x20un\x20Pokémon\x20intrappolato\x20in\x20una\x20rete.\x20Non\x20ti\x20hanno\x20ancora\x20visto.','choices':[{'label':'Attaccali\x20apertamente','action':'flag:fought_grunts;morale:+1;battle:palude_nebbiosa:trainer;goto:cap3_dopo_grunt'},{'label':'Seguili\x20di\x20nascosto','action':'flag:stealth_grunts;goto:cap3_pedina'},{'label':'Aspetta\x20che\x20se\x20ne\x20vadano','action':'morale:-1;goto:cap3_miniere_ingresso'}]},'cap3_pedina':{'chapter':0x3,'location':'Palude\x20Nebbiosa','title':'Origliare','text':()=>'Resti\x20nell\x27ombra.\x20I\x20due\x20parlano:\x0a\x0a«...Vael\x20dice\x20che\x20il\x20secondo\x20Sigillo\x20cederà\x20stanotte.\x20Quel\x20ragazzino,\x20Kael,\x20ci\x20sta\x20aiutando\x20—\x20pensa\x20di\x20poter\x20prendere\x20il\x20Pokémon\x20prima\x20di\x20noi.\x20Illuso.»\x0a\x0aIl\x20sangue\x20ti\x20si\x20gela.\x20Kael\x20sta\x20collaborando\x20con\x20l\x27Ordine.','choices':[{'label':'Segui\x20verso\x20le\x20Miniere','action':'flag:knows_kael_betray;goto:cap3_miniere_ingresso'}]},'cap3_dopo_grunt':{'chapter':0x3,'location':'Palude\x20Nebbiosa','title':'Liberazione','text':()=>'I\x20due\x20fuggono.\x20Liberi\x20il\x20Pokémon\x20dalla\x20rete:\x20ti\x20fissa\x20per\x20un\x20istante\x20prima\x20di\x20sparire\x20nella\x20nebbia.\x0a\x0aTra\x20le\x20loro\x20cose\x20abbandonate\x20trovi\x20un\x20appunto:\x20\x22Secondo\x20Sigillo\x20—\x20stanotte.\x20Il\x20ragazzo\x20(K.)\x20ci\x20aprirà\x20la\x20via.\x22\x0a\x0aKael.\x20Cosa\x20hai\x20fatto.','choices':[{'label':'Corri\x20alle\x20Miniere','action':'flag:knows_kael_betray;goto:cap3_miniere_ingresso'}]},'cap3_miniere_ingresso':{'chapter':0x3,'location':'Miniere\x20del\x20Sigillo','title':'Le\x20Miniere\x20del\x20Sigillo','text':()=>'L\x27amuleto\x20di\x20Sila\x20brilla\x20quando\x20ti\x20avvicini\x20alla\x20porta\x20di\x20pietra.\x20Si\x20apre\x20con\x20un\x20boato.\x0a\x0aDentro,\x20il\x20primo\x20Sigillo:\x20un\x20cristallo\x20azzurro\x20pulsante.\x20Ma\x20c\x27è\x20già\x20qualcuno.\x20Kael.\x0a\x0a«Non\x20dovevi\x20venire»\x20dice,\x20senza\x20voltarsi.','choices':[{'label':'«So\x20cosa\x20stai\x20facendo.»','cond':'flag:knows_kael_betray','action':'goto:cap3_kael_confronto'},{'label':'«Kael,\x20allontanati\x20da\x20quel\x20cristallo.»','action':'goto:cap3_kael_confronto'}]},'cap3_kael_confronto':{'chapter':0x3,'location':'Miniere\x20del\x20Sigillo','title':'Il\x20rivale','text':()=>'Kael\x20finalmente\x20si\x20volta.\x20«L\x27Ordine\x20mi\x20ha\x20promesso\x20il\x20Pokémon\x20del\x20Cuore.\x20Capisci\x20cosa\x20significa?\x20Non\x20sarò\x20più\x20il\x20secondo.\x20Mai\x20più.»\x0a\x0a«Mi\x20dispiace.\x20Ma\x20non\x20ti\x20lascerò\x20passare.»\x0a\x0aManda\x20fuori\x20il\x20suo\x20Pokémon.','choices':[{'label':'Affrontalo\x20in\x20battaglia','action':'battle:rival:kael;goto:cap3_dopo_kael'}]},'cap3_dopo_kael':{'chapter':0x3,'location':'Miniere\x20del\x20Sigillo','title':'Dopo\x20lo\x20scontro','text':()=>'Kael\x20cade\x20in\x20ginocchio,\x20il\x20suo\x20Pokémon\x20esausto.\x20Ti\x20guarda\x20con\x20rabbia\x20e...\x20vergogna.\x0a\x0a«Vael\x20aveva\x20ragione\x20su\x20di\x20te.\x20Sei\x20più\x20forte\x20di\x20quanto\x20pensassi.»\x0a\x0aUn\x20boato.\x20Il\x20cristallo\x20del\x20Sigillo\x20si\x20incrina\x20da\x20solo\x20—\x20l\x27Ordine\x20lo\x20sta\x20distruggendo\x20da\x20remoto.','choices':[{'label':'«Vieni\x20con\x20me.\x20Possiamo\x20fermarli.»','cond':'rivalPos','action':'flag:kael_redeemed;rival:+2;goto:cap3_finale'},{'label':'«Resta\x20qui\x20con\x20i\x20tuoi\x20rimpianti.»','action':'rival:-1;goto:cap3_finale'}]},'cap3_finale':{'chapter':0x3,'location':'Miniere\x20del\x20Sigillo','title':'Il\x20primo\x20Sigillo\x20cade','text':()=>'Il\x20cristallo\x20esplode\x20in\x20mille\x20schegge\x20di\x20luce.\x20Il\x20primo\x20Sigillo\x20è\x20perduto.\x0a\x0aDa\x20qualche\x20parte,\x20lontano,\x20una\x20luce\x20dorata\x20pulsa\x20nel\x20cielo:\x20la\x20Cometa\x20è\x20al\x20suo\x20apice.\x20'+STORY_LEGENDARY_NAME+'\x20si\x20sta\x20svegliando.\x0a\x0aDevi\x20raggiungere\x20il\x20Cuore\x20della\x20Cometa\x20prima\x20che\x20l\x27Ordine\x20completi\x20il\x20rituale.\x20Ma\x20la\x20strada\x20passa\x20per\x20la\x20Vetta\x20Glaciale.','choices':[{'label':'Verso\x20la\x20Vetta\x20Glaciale\x20→','action':'chapter:4;goto:cap4_vetta'}]},'cap4_vetta':{'chapter':0x4,'location':'Vetta\x20Glaciale','title':'La\x20Vetta\x20Glaciale','text':()=>'Il\x20vento\x20taglia\x20come\x20lame.\x20Ogni\x20passo\x20sul\x20ghiaccio\x20è\x20una\x20scommessa.\x0a\x0aA\x20metà\x20salita,\x20una\x20bufera\x20ti\x20blocca.\x20Due\x20strade:\x20una\x20galleria\x20nel\x20ghiaccio\x20(buia,\x20sconosciuta)\x20o\x20la\x20cresta\x20esposta\x20(veloce\x20ma\x20pericolosa).','choices':[{'label':'La\x20galleria\x20nel\x20ghiaccio','action':'explore:vetta_glaciale;goto:cap4_galleria'},{'label':'La\x20cresta\x20esposta','action':'flag:risky_path;morale:+1;goto:cap4_cresta'}]},'cap4_galleria':{'chapter':0x4,'location':'Galleria\x20di\x20Ghiaccio','title':'Nella\x20galleria','text':()=>'Il\x20ghiaccio\x20riflette\x20la\x20tua\x20torcia\x20all\x27infinito.\x20In\x20una\x20nicchia,\x20scorgi\x20qualcosa\x20che\x20luccica:\x20un\x20uovo\x20Pokémon\x20abbandonato,\x20ancora\x20caldo.','choices':[{'label':'Prendi\x20l\x27uovo\x20con\x20te','action':'flag:has_egg;goto:cap4_rifugio'},{'label':'Lascialo\x20dov\x27è','action':'goto:cap4_rifugio'}]},'cap4_cresta':{'chapter':0x4,'location':'Cresta\x20della\x20Vetta','title':'La\x20cresta','text':()=>'Il\x20panorama\x20è\x20mozzafiato\x20e\x20terrificante.\x20Sotto\x20di\x20te,\x20tutta\x20Velmora.\x0a\x0aUn\x20membro\x20dell\x27Ordine\x20ti\x20aspetta\x20sulla\x20cresta,\x20bloccando\x20il\x20passaggio.\x20«Vael\x20sapeva\x20che\x20saresti\x20arrivato\x20fin\x20qui.\x20Non\x20andrai\x20oltre.»','choices':[{'label':'Combatti\x20sulla\x20cresta','action':'battle:vetta_glaciale:trainer;goto:cap4_rifugio'}]},'cap4_rifugio':{'chapter':0x4,'location':'Rifugio\x20della\x20Vetta','title':'Il\x20rifugio','text':()=>'Raggiungi\x20un\x20vecchio\x20rifugio.\x20Dentro,\x20contro\x20ogni\x20aspettativa,\x20c\x27è\x20Sila\x20—\x20ferita.\x0a\x0a«Vael...\x20mi\x20ha\x20preceduta.\x20Sta\x20già\x20al\x20Cuore.\x20Il\x20rituale\x20è\x20quasi\x20completo.»\x20Tossisce.\x20«Ascolta:\x20il\x20Pokémon\x20dormiente\x20non\x20è\x20un\x20nemico.\x20È\x20una\x20vittima.\x20Se\x20Vael\x20lo\x20sveglia\x20con\x20la\x20forza,\x20lo\x20trasformerà\x20in\x20un\x27arma.»','choices':[{'label':'«Allora\x20lo\x20sveglierò\x20io.\x20Con\x20gentilezza.»','action':'flag:gentle_path;morale:+2;goto:cap4_partenza'},{'label':'«Lo\x20fermerò,\x20a\x20qualunque\x20costo.»','action':'flag:force_path;goto:cap4_partenza'}]},'cap4_partenza':{'chapter':0x4,'location':'Rifugio\x20della\x20Vetta','title':'L\x27ultima\x20salita','text':()=>'Sila\x20ti\x20afferra\x20il\x20polso.\x20«Un\x27ultima\x20cosa.\x20Il\x20ragazzo,\x20Kael...»\x0a\x0a'+(story['flags']['kael_redeemed']?'«È\x20arrivato\x20prima\x20di\x20te.\x20Ha\x20detto\x20che\x20voleva\x20rimediare.\x20È\x20andato\x20al\x20Cuore\x20—\x20da\x20solo.»':'«L\x27ho\x20visto\x20salire.\x20Aveva\x20uno\x20sguardo\x20che\x20non\x20mi\x20è\x20piaciuto.\x20Sii\x20pronto\x20a\x20tutto.»')+'\x0a\x0aIl\x20Cuore\x20della\x20Cometa\x20ti\x20attende.','choices':[{'label':'Esci\x20dal\x20rifugio','action':'goto:cap4_elara_notte'}]},'cap4_elara_notte':{'chapter':0x5,'location':'Sotto\x20la\x20Cometa','title':'Prima\x20della\x20fine','text':()=>'La\x20luce\x20dorata\x20della\x20Cometa\x20filtra\x20attraverso\x20la\x20roccia.\x20Elara\x20è\x20appoggiata\x20alla\x20parete,\x20lo\x20sguardo\x20verso\x20l\x27alto.\x0a\x0a«Tra\x20poco\x20saremo\x20davanti\x20a\x20'+STORY_LEGENDARY_NAME+'»\x20dice\x20piano.\x20«Strano,\x20vero?\x20Tutta\x20questa\x20luce,\x20e\x20davanti\x20a\x20noi\x20solo\x20il\x20buio\x20del\x20Cuore.»\x0a\x0aSi\x20volta\x20verso\x20di\x20te.\x20«Posso\x20chiederti\x20una\x20cosa?\x20Perché\x20lo\x20fai\x20davvero.\x20Non\x20per\x20il\x20desiderio.\x20Per\x20cosa\x20combatti?»','choices':[{'label':'«Per\x20Velmora.\x20E\x20per\x20chi\x20ho\x20accanto.»','cond':'elaraMid','action':'elara:+2;goto:cap4_elara_vicini'},{'label':'«Perché\x20è\x20giusto.\x20Punto.»','action':'elara:+1;goto:cap4_intento'},{'label':'«Non\x20lo\x20so\x20più.\x20So\x20solo\x20che\x20non\x20posso\x20fermarmi.»','action':'goto:cap4_intento'}]},'cap4_elara_vicini':{'chapter':0x5,'location':'Sotto\x20la\x20Cometa','title':'Vicini','text':()=>'Elara\x20ti\x20guarda\x20a\x20lungo,\x20poi\x20sorride\x20—\x20un\x20sorriso\x20vero,\x20senza\x20maschere.\x0a\x0a«Sai,\x20quando\x20tutto\x20questo\x20sarà\x20finito...\x20mi\x20piacerebbe\x20vedere\x20com\x27è\x20Velmora\x20in\x20pace.\x20Con\x20te.»\x0a\x0aLa\x20Cometa\x20brilla.\x20Per\x20un\x20istante,\x20il\x20Cuore\x20e\x20l\x27Ordine\x20sembrano\x20lontanissimi.','choices':[{'label':'«Anche\x20a\x20me.\x20Promesso.»','action':'elara:+2;flag:elara_promise;goto:cap4_intento'},{'label':'«Prima\x20finiamo\x20questa\x20storia.»','action':'elara:+1;goto:cap4_intento'}]},'cap4_elara_dopo':{'chapter':0x5,'location':'Sotto\x20la\x20Cometa','title':'L\x27assalto','text':()=>(story['elara']>=0x6f2*-0x1+0x5*-0x332+-0x10*-0x16f?'Elara\x20ti\x20stringe\x20la\x20mano,\x20un\x20attimo\x20soltanto.\x20«Andiamo.\x20Insieme.»':'Elara\x20annuisce,\x20decisa.\x20«Andiamo.\x20Qualunque\x20cosa\x20ci\x20aspetti.»')+'\x0a\x0aDavanti\x20a\x20voi,\x20l\x27ultima\x20soglia:\x20il\x20Cuore\x20della\x20Cometa,\x20dove\x20Vael\x20attende.','choices':[{'label':'Decidi\x20come\x20affronterai\x20Jirachi','action':'goto:cap4_intento'}]},'cap4_intento':{'chapter':0x5,'location':'Soglia\x20del\x20Cuore','title':'L\x27intento','text':()=>'Prima\x20di\x20entrare,\x20ti\x20fermi\x20un\x20istante.\x20Qualunque\x20cosa\x20accada\x20con\x20Vael,\x20presto\x20sarai\x20davanti\x20a\x20'+STORY_LEGENDARY_NAME+'.\x20Che\x20intenzioni\x20hai,\x20nel\x20profondo?','choices':[{'label':'«Lo\x20sveglierò\x20con\x20gentilezza,\x20non\x20con\x20la\x20forza.»','action':'flag:gentle_path;morale:+2;goto:act2_vael_intro'},{'label':'«Farò\x20ciò\x20che\x20serve.\x20A\x20qualunque\x20costo.»','action':'flag:force_path;goto:act2_vael_intro'}]},'cap5_cuore':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Il\x20Cuore\x20della\x20Cometa','text':()=>'Una\x20caverna\x20immensa,\x20illuminata\x20da\x20una\x20luce\x20dorata\x20che\x20pulsa\x20come\x20un\x20battito.\x20Al\x20centro,\x20sospeso\x20a\x20mezz\x27aria,\x20'+STORY_LEGENDARY_NAME+'\x20—\x20piccolo,\x20luminoso,\x20avvolto\x20in\x20un\x20sonno\x20millenario.\x20Sui\x20cartigli\x20legati\x20al\x20suo\x20capo,\x20parole\x20in\x20una\x20lingua\x20dimenticata.\x0a\x0aDavanti\x20ad\x20esso,\x20Vael,\x20capo\x20dell\x27Ordine.\x20«Sei\x20arrivato.\x20Bene.\x20Voglio\x20che\x20tu\x20veda\x20il\x20momento\x20in\x20cui\x20Velmora\x20cambia\x20per\x20sempre.»','choices':[{'label':'«Non\x20lascerò\x20che\x20tu\x20lo\x20usi\x20come\x20arma.»','action':'goto:cap5_vael_dialogo'}]},'cap5_vael_dialogo':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Vael','text':()=>'Vael\x20ride.\x20«Usarlo?\x20Io\x20esprimerò\x20il\x20desiderio\x20perfetto.\x20Un\x20mondo\x20rifatto\x20a\x20mia\x20immagine.\x20Velmora\x20mi\x20ha\x20negato\x20tutto\x20—\x20ora\x20prenderò\x20tutto.»\x0a\x0a'+(story['flags']['kael_redeemed']?'Una\x20voce\x20dietro\x20di\x20te:\x20«Il\x20cambiamento\x20non\x20si\x20impone\x20con\x20la\x20forza,\x20Vael.»\x20È\x20Kael\x20—\x20al\x20tuo\x20fianco,\x20stavolta.':'Da\x20un\x20lato,\x20nell\x27ombra,\x20scorgi\x20Kael.\x20Osserva.\x20Non\x20hai\x20idea\x20da\x20che\x20parte\x20stia.'),'choices':[{'label':'Affronta\x20Vael','action':'battle:boss:vael;goto:cap5_dopo_vael'}]},'cap5_dopo_vael':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Il\x20risveglio','text':()=>'Vael\x20cade,\x20incredulo.\x20«Impossibile...»\x0a\x0aMa\x20è\x20troppo\x20tardi:\x20l\x27ultimo\x20Sigillo\x20si\x20spezza.\x20'+STORY_LEGENDARY_NAME+'\x20apre\x20gli\x20occhi\x20—\x20tre\x20occhi\x20di\x20luce\x20pura.\x20L\x27aria\x20vibra\x20di\x20possibilità.\x20Tutta\x20Velmora\x20trattiene\x20il\x20respiro.\x0a\x0a'+STORY_LEGENDARY_NAME+'\x20ti\x20fissa.\x20Percepisce\x20il\x20desiderio\x20nel\x20tuo\x20cuore.\x20Sta\x20decidendo\x20cosa\x20farne\x20—\x20e\x20cosa\x20fare\x20di\x20te.','choices':[{'label':'Avvicinati\x20con\x20calma\x20(Gentilezza)','cond':'flag:gentle_path','action':'goto:cap5_finale_gentile'},{'label':'Affrontalo\x20per\x20sigillarlo\x20di\x20nuovo','action':'battle:legendary:dormiente;goto:cap5_finale_forza'},{'label':'Tenta\x20di\x20catturarlo','action':'battle:legendary_catch:dormiente;goto:cap5_finale_cattura'}]},'cap5_finale_gentile':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Il\x20Custode','text':()=>'Abbassi\x20le\x20difese\x20e\x20tendi\x20la\x20mano.\x20'+STORY_LEGENDARY_NAME+'\x20esita,\x20gli\x20occhi\x20sul\x20tuo\x20ventre\x20che\x20brillano\x20di\x20una\x20luce\x20calda.\x0a\x0aNon\x20vede\x20in\x20te\x20un\x20cuore\x20avido,\x20solo\x20qualcuno\x20che\x20non\x20chiede\x20nulla.\x20Lentamente,\x20i\x20cartigli\x20sulla\x20sua\x20testa\x20si\x20placano.\x20Il\x20Risveglio\x20si\x20arresta.\x20'+STORY_LEGENDARY_NAME+'\x20torna\x20a\x20dormire\x20—\x20non\x20per\x20un\x20sigillo,\x20ma\x20per\x20sua\x20scelta,\x20in\x20pace.\x0a\x0aVelmora\x20è\x20salva.\x20Non\x20hai\x20espresso\x20alcun\x20desiderio:\x20gli\x20hai\x20dato\x20la\x20libertà\x20di\x20tornare\x20a\x20sognare.','choices':[{'label':'Ma\x20un\x20desiderio\x20puoi\x20ancora\x20esprimerlo...','action':'flag:ending_path:custode;goto:epilogo_scelta'}]},'cap5_finale_forza':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Il\x20Sigillatore','text':()=>'Con\x20l\x27ultimo\x20dei\x20tuoi\x20Pokémon\x20ancora\x20in\x20piedi,\x20costringi\x20'+STORY_LEGENDARY_NAME+'\x20a\x20fermarsi.\x20Usando\x20l\x27amuleto\x20di\x20Sila,\x20ristabilisci\x20i\x20Sigilli.\x0a\x0aMa\x20prima\x20che\x20il\x20sonno\x20lo\x20riprenda,\x20'+STORY_LEGENDARY_NAME+'\x20ti\x20guarda.\x20Per\x20un\x20istante,\x20percepisci\x20che\x20può\x20ancora\x20esaudire\x20un\x20ultimo\x20desiderio\x20—\x20il\x20tuo.\x0a\x0a'+(story['flags']['kael_redeemed']?'Kael,\x20accanto\x20a\x20te,\x20sussurra:\x20«Qualunque\x20cosa\x20tu\x20chieda...\x20falla\x20contare.»':''),'choices':[{'label':'Esprimi\x20il\x20tuo\x20desiderio\x20→','action':'flag:ending_path:sigillatore;goto:epilogo_scelta'}]},'cap5_finale_cattura':{'chapter':0x5,'location':'Cuore\x20della\x20Cometa','title':'Il\x20Domatore','text':()=>'La\x20Poké\x20Ball\x20trema\x20una\x20volta,\x20due,\x20tre...\x20clic.\x0a\x0aHai\x20catturato\x20'+STORY_LEGENDARY_NAME+',\x20il\x20Pokémon\x20dei\x20Desideri.\x20Il\x20potere\x20di\x20riscrivere\x20la\x20realtà\x20è\x20ora\x20racchiuso\x20nella\x20tua\x20Ball.\x0a\x0aLo\x20senti\x20pulsare\x20tra\x20le\x20dita.\x20Un\x20solo\x20desiderio,\x20e\x20Velmora\x20sarà\x20come\x20tu\x20vuoi.\x20'+(story['flags']['morale']>=0x1a3+0x11*-0xe9+0xdd8?'Ma\x20Sila\x20ti\x20ha\x20insegnato\x20il\x20prezzo\x20del\x20potere.':'Vael\x20è\x20caduto\x20inseguendo\x20questo\x20stesso\x20momento.'),'choices':[{'label':'È\x20il\x20momento\x20di\x20scegliere\x20→','action':'flag:ending_path:domatore;goto:epilogo_scelta'}]},'epilogo_scelta':{'chapter':0x5,'location':'Il\x20Desiderio','title':'L\x27ultimo\x20desiderio','text':()=>STORY_LEGENDARY_NAME+'\x20attende.\x20Comprendi\x20che\x20il\x20vero\x20potere\x20non\x20è\x20mai\x20stato\x20catturarlo\x20o\x20sconfiggerlo\x20—\x20è\x20la\x20scelta\x20che\x20fai\x20ora.\x0a\x0aIn\x20tutta\x20Velmora,\x20in\x20tutto\x20il\x20mondo,\x20ci\x20sono\x20innumerevoli\x20Pokémon\x20che\x20vivono\x20dentro\x20una\x20Poké\x20Ball.\x20Alcuni\x20per\x20amore,\x20molti\x20soltanto\x20perché\x20qualcuno\x20li\x20ha\x20catturati.\x0a\x0aPotresti\x20desiderare\x20la\x20loro\x20libertà.\x20Tutti,\x20ovunque.\x20Compresi\x20i\x20tuoi.\x20Oppure\x20no.','choices':[{'label':'🕊️\x20«Desidero\x20che\x20tutti\x20i\x20Pokémon\x20siano\x20liberi.»','action':'goto:epilogo_libera'},{'label':'⚪\x20«Alcuni\x20legami\x20valgono\x20più\x20della\x20libertà.»','action':'goto:epilogo_tieni'}]},'epilogo_libera':{'chapter':0x5,'location':'Il\x20Desiderio','ending':!![],'title':'Epilogo\x20·\x20Il\x20Desiderio\x20di\x20Libertà','text':()=>{let _0x1fba49=story['flags']['ending_path'],_0x4ceb9;if(_0x1fba49==='custode')_0x4ceb9='Avevi\x20già\x20scelto\x20di\x20non\x20chiedere\x20nulla\x20per\x20te.\x20Eppure\x20'+STORY_LEGENDARY_NAME+',\x20libero\x20e\x20grato,\x20ti\x20offre\x20un\x20ultimo\x20dono\x20prima\x20di\x20dormire.\x20E\x20tu\x20sai\x20esattamente\x20cosa\x20desiderare\x20—\x20non\x20per\x20te,\x20ma\x20per\x20tutti.';else{if(_0x1fba49==='sigillatore')_0x4ceb9='Avevi\x20sigillato\x20il\x20suo\x20potere\x20per\x20metterlo\x20al\x20sicuro.\x20Ma\x20'+STORY_LEGENDARY_NAME+'\x20ti\x20guarda\x20ancora,\x20e\x20capisci\x20che\x20la\x20vera\x20sicurezza\x20non\x20è\x20una\x20catena.\x20Spezzi\x20il\x20sigillo\x20che\x20hai\x20appena\x20creato\x20e\x20formuli\x20un\x20desiderio\x20diverso.';else _0x1fba49==='domatore'?_0x4ceb9=STORY_LEGENDARY_NAME+'\x20è\x20tuo,\x20ora,\x20nella\x20tua\x20Ball.\x20Potresti\x20tenerlo\x20per\x20sempre.\x20Invece\x20lo\x20liberi\x20—\x20e\x20con\x20lui,\x20esprimi\x20il\x20desiderio\x20più\x20grande\x20che\x20un\x20domatore\x20possa\x20fare:\x20rinunciare\x20al\x20dominio\x20stesso.':_0x4ceb9='Davanti\x20a\x20'+STORY_LEGENDARY_NAME+',\x20fai\x20la\x20tua\x20scelta.';}let _0x44ed66=null;story['team']['forEach'](_0x1796a5=>{if(!_0x44ed66||(_0x1796a5['bond']||-0x1*0x2db+0x727+-0x44c)>(_0x44ed66['bond']||0x1*0x1c1e+-0x1c53+0x1*0x35))_0x44ed66=_0x1796a5;});let _0x127088=_0x44ed66?capitalize(_0x44ed66['pokemon']['name']):null,_0x6b6b11=_0x4ceb9+'\x0a\x0a'+STORY_LEGENDARY_NAME+'\x20chiude\x20gli\x20occhi.\x20Una\x20luce\x20dorata\x20si\x20espande\x20da\x20Velmora\x20fino\x20ai\x20confini\x20del\x20mondo.\x0a\x0aIn\x20ogni\x20angolo,\x20le\x20Poké\x20Ball\x20si\x20aprono.\x20Milioni\x20di\x20Pokémon\x20—\x20i\x20selvatici\x20catturati,\x20quelli\x20dimenticati\x20nei\x20box,\x20e\x20anche\x20i\x20tuoi\x20compagni\x20di\x20viaggio\x20—\x20tornano\x20liberi.\x20L\x27era\x20degli\x20allenatori\x20finisce\x20in\x20un\x20battito\x20di\x20ciglia.\x0a\x0aResti\x20solo,\x20le\x20mani\x20vuote,\x20il\x20cielo\x20pieno\x20di\x20ali.';_0x44ed66&&(_0x44ed66['bond']||-0x1286+-0xeb1+0x305*0xb)>=-0x1365+0x151*-0xa+0x1b*0x135?_0x6b6b11+='\x0a\x0aMa\x20poi\x20senti\x20un\x20rumore\x20familiare.\x20'+_0x127088+'\x20è\x20tornato.\x20Non\x20perché\x20una\x20Ball\x20lo\x20trattiene\x20—\x20quella\x20scelta\x20non\x20esiste\x20più\x20—\x20ma\x20perché\x20ha\x20scelto\x20te.\x0a\x0aNon\x20sei\x20più\x20un\x20allenatore.\x20Sei\x20qualcosa\x20di\x20più\x20raro:\x20un\x20amico.':_0x6b6b11+='\x0a\x0aNessuno\x20torna\x20indietro.\x20Forse\x20è\x20giusto\x20così:\x20la\x20libertà\x20non\x20chiede\x20ricompense.\x0a\x0aGuardi\x20l\x27orizzonte,\x20e\x20per\x20la\x20prima\x20volta\x20Velmora\x20ti\x20sembra\x20davvero\x20libera.';if(story['flags']['elara_joined']){if(story['elara']>=0x672+0x1826+-0x67*0x4c)_0x6b6b11+='\x0a\x0aElara\x20ti\x20raggiunge\x20e\x20intreccia\x20le\x20sue\x20dita\x20alle\x20tue.\x20«Hai\x20liberato\x20il\x20mondo\x20intero»\x20mormora.\x20«E\x20io\x20non\x20vado\x20da\x20nessuna\x20parte.»\x0a\x0aQualunque\x20cosa\x20venga\x20ora,\x20non\x20la\x20affronterai\x20da\x20solo.';else story['elara']>=-0x109b+0x1*-0x122b+0x22c7&&(_0x6b6b11+='\x0a\x0aPoco\x20distante,\x20Elara\x20sorride.\x20«Hai\x20fatto\x20la\x20cosa\x20giusta»\x20dice.\x20«Ci\x20vediamo\x20in\x20giro,\x20eroe.»\x20E\x20si\x20incammina\x20verso\x20il\x20suo\x20prossimo\x20viaggio.');}if(_0x1fba49==='domatore')_0x6b6b11+='\x0a\x0aVael\x20inseguì\x20il\x20possesso\x20e\x20si\x20perse.\x20Tu\x20hai\x20posseduto,\x20e\x20hai\x20lasciato\x20andare.\x20Questa\x20è\x20la\x20differenza.';else{if(_0x1fba49==='sigillatore')_0x6b6b11+='\x0a\x0aI\x20Sigilli\x20non\x20servono\x20più.\x20Hai\x20imparato\x20che\x20proteggere\x20non\x20significa\x20imprigionare.';else{if(_0x1fba49==='custode')_0x6b6b11+='\x0a\x0aSila\x20sorriderebbe.\x20Hai\x20capito\x20fin\x20dall\x27inizio\x20cosa\x20significa\x20custodire.';}}return _0x6b6b11+='\x0a\x0a—\x20FINE\x20·\x20IL\x20DESIDERIO\x20DI\x20LIBERTÀ\x20—',_0x6b6b11;},'choices':[{'label':'Ricomincia\x20l\x27avventura','action':'restart'}]},'epilogo_tieni':{'chapter':0x5,'location':'Il\x20Desiderio','ending':!![],'title':'Epilogo\x20·\x20I\x20Legami\x20Scelti','text':()=>{let _0x42e288=story['flags']['ending_path'],_0x4ff25d=story['team']['length'],_0x1589cc=story['morale']>=-0x3f7+0x1*0x174d+-0x4*0x4d5,_0x48a288;if(_0x42e288==='custode')_0x48a288='Hai\x20lasciato\x20'+STORY_LEGENDARY_NAME+'\x20libero\x20di\x20tornare\x20a\x20sognare.\x20Non\x20hai\x20chiesto\x20un\x20mondo\x20diverso\x20—\x20perché\x20il\x20tuo,\x20con\x20la\x20tua\x20squadra\x20accanto,\x20ti\x20basta.';else{if(_0x42e288==='sigillatore')_0x48a288='Hai\x20risigillato\x20il\x20potere\x20di\x20'+STORY_LEGENDARY_NAME+'.\x20Velmora\x20è\x20di\x20nuovo\x20al\x20sicuro,\x20e\x20tu\x20torni\x20a\x20casa\x20con\x20chi\x20ti\x20è\x20stato\x20accanto\x20in\x20ogni\x20battaglia.';else _0x42e288==='domatore'?_0x48a288='Hai\x20catturato\x20'+STORY_LEGENDARY_NAME+'.\x20Avresti\x20il\x20potere\x20di\x20riscrivere\x20ogni\x20cosa...\x20e\x20invece\x20scegli\x20di\x20non\x20usarlo.\x20Lo\x20custodirai,\x20come\x20custodisci\x20la\x20tua\x20squadra.':_0x48a288='Fai\x20la\x20tua\x20scelta,\x20davanti\x20a\x20'+STORY_LEGENDARY_NAME+'.';}let _0x259a59=_0x48a288+'\x0a\x0aStringi\x20le\x20Poké\x20Ball\x20della\x20tua\x20squadra.\x20'+STORY_LEGENDARY_NAME+'\x20ti\x20osserva,\x20poi\x20annuisce\x20—\x20nessun\x20giudizio,\x20solo\x20comprensione.\x0a\x0aI\x20'+_0x4ff25d+'\x20Pokémon\x20che\x20hanno\x20camminato\x20con\x20te\x20restano\x20al\x20tuo\x20fianco.\x20Il\x20mondo\x20non\x20cambia\x20stanotte.';_0x1589cc?_0x259a59+='\x0a\x0aMa\x20tu\x20sei\x20cambiato.\x20Sai\x20che\x20ogni\x20Ball\x20che\x20porti\x20è\x20una\x20promessa,\x20non\x20una\x20catena.\x20Tornerai\x20a\x20casa\x20e\x20te\x20ne\x20prenderai\x20cura\x20per\x20tutta\x20la\x20vita.\x0a\x0aVelmora\x20continua\x20a\x20girare.\x20E\x20tu\x20cammini,\x20con\x20i\x20tuoi\x20amici\x20accanto.':_0x259a59+='\x0a\x0aIl\x20potere\x20di\x20'+STORY_LEGENDARY_NAME+'\x20resta\x20inespresso.\x20Forse\x20un\x20giorno\x20ti\x20chiederai\x20cosa\x20sarebbe\x20successo\x20se\x20avessi\x20desiderato\x20qualcosa\x20di\x20più\x20grande\x20di\x20te\x20stesso.\x0a\x0aMa\x20per\x20ora,\x20ti\x20basta\x20ciò\x20che\x20hai.';_0x42e288==='domatore'&&!_0x1589cc&&(_0x259a59+='\x0a\x0aLa\x20Ball\x20che\x20contiene\x20'+STORY_LEGENDARY_NAME+'\x20pesa\x20più\x20di\x20tutte\x20le\x20altre.\x20Speri\x20che\x20il\x20potere\x20che\x20custodisci\x20non\x20finisca\x20per\x20custodire\x20te.');if(story['flags']['elara_joined']){if(story['elara']>=-0x9e*-0x14+-0x22+0x619*-0x2)_0x259a59+='\x0a\x0aElara\x20ti\x20prende\x20per\x20mano.\x20«I\x20legami\x20valgono\x20più\x20di\x20tutto,\x20hai\x20detto.»\x20Sorride.\x20«Allora\x20teniamoci\x20stretti\x20anche\x20noi.»\x0a\x0a'+(story['flags']['elara_promise']?'La\x20promessa\x20fatta\x20sotto\x20la\x20cometa\x20non\x20era\x20parole\x20al\x20vento.':'C\x27è\x20tutto\x20il\x20tempo,\x20ora,\x20per\x20scoprire\x20cosa\x20siete\x20l\x27uno\x20per\x20l\x27altra.');else story['elara']>=0xc9e+-0x21e2+0x1ef*0xb&&(_0x259a59+='\x0a\x0aElara\x20ti\x20dà\x20una\x20pacca\x20sulla\x20spalla.\x20«Bella\x20scelta.\x20Abbi\x20cura\x20di\x20loro.»\x20E\x20con\x20un\x20cenno,\x20riparte\x20verso\x20nuove\x20avventure.');}return _0x259a59+='\x0a\x0a—\x20FINE\x20·\x20I\x20LEGAMI\x20SCELTI\x20—',_0x259a59;},'choices':[{'label':'Ricomincia\x20l\x27avventura','action':'restart'}]}},STORY_STARTERS={'grass':0x1,'fire':0x4,'water':0x7},STORY_LEGENDARY_ID=0x2550+0x185b+-0x3c2a,STORY_LEGENDARY_NAME='Jirachi';function storyMakeMember(_0x563484,_0x5a4f5c){let _0x22753e=generateIVs(),_0x4d86fc=calcHp(_0x563484,_0x5a4f5c,_0x22753e['hp']);return{'pokemon':_0x563484,'level':_0x5a4f5c,'hp':_0x4d86fc,'maxHp':_0x4d86fc,'ivs':_0x22753e,'moves':getPokemonMoves(_0x563484,_0x5a4f5c),'status':null,'statusTurns':0x0,'xp':0x0,'bond':0x0};}function storyActiveMember(){return story['team'][story['activeSlot']]||story['team'][0x67d*-0x3+0x2167+0x2*-0x6f8];}function runActions(_0x52d21e,_0x11af97){let _0x46c6fb=_0x52d21e['split'](';')['map'](_0x140682=>_0x140682['trim']())['filter'](Boolean),_0xd9b90d=null,_0x491a4b=null;_0x46c6fb['forEach'](_0x5036e0=>{let [_0x44b4d6,_0x568f5a,_0xe1ac2f]=_0x5036e0['split'](':');switch(_0x44b4d6){case'goto':_0xd9b90d=_0x568f5a;break;case'chapter':story['chapter']=parseInt(_0x568f5a);break;case'flag':story['flags'][_0x568f5a]=_0xe1ac2f!==undefined?_0xe1ac2f:!![];break;case'rival':story['rivalRelation']+=parseInt(_0x568f5a);break;case'elara':story['elara']=Math['max'](-0x20d+0x106*-0x20+0x22cd,story['elara']+parseInt(_0x568f5a));break;case'morale':story['morale']+=parseInt(_0x568f5a);break;case'monete':story['monete']=Math['max'](0x138d+0x2639+-0x39c6,story['monete']+parseInt(_0x568f5a));break;case'item':{let _0x4416de=parseInt(_0xe1ac2f);if(story['bag'][_0x568f5a]!==undefined)story['bag'][_0x568f5a]=Math['max'](-0x166*0x13+0x1e0*0x9+0x9b2,(story['bag'][_0x568f5a]||0x5bf*-0x3+0x12d0+-0x193)+_0x4416de);else{if(story['balls'][_0x568f5a]!==undefined)story['balls'][_0x568f5a]=Math['max'](0xda*-0x3+0xf68+-0xcda,(story['balls'][_0x568f5a]||0x1b28+0x1625+-0x70b*0x7)+_0x4416de);}break;}case'starter':{let _0x256575=STORY_STARTERS[_0x568f5a]||-0x2f*-0x38+0x21b5+-0x2bfc,_0x56241d=allPokemon['find'](_0x370bc6=>_0x370bc6['id']===_0x256575);if(_0x56241d)story['team']['push'](storyMakeMember(_0x56241d,-0x1b79+0x1*0x15b+0x1a23)),story['activeSlot']=0x525*-0x7+-0x1bb9*-0x1+0x84a;else _0x491a4b={'kind':'loadStarter','id':_0x256575,'then':_0xd9b90d};break;}case'explore':_0x491a4b={'kind':'explore','zone':_0x568f5a,'then':null};break;case'battle':_0x491a4b={'kind':'battle','btype':_0x568f5a,'sub':_0xe1ac2f};break;case'gymbattle':_0x491a4b={'kind':'gymbattle','gymKey':_0x568f5a};break;case'restart':_0x491a4b={'kind':'restart'};break;case'day':story['daysLeft']=Math['max'](0x1408+0x1f7*0x5+-0x1ddb,story['daysLeft']-(parseInt(_0x568f5a)||0x35*0x1a+0x80a*0x3+-0x1d7f));break;case'act2start':story['act']=-0x1803+0x3*0x65+0x16d6,story['daysLeft']=-0xae7+0x980+0x16e*0x1;break;case'noop':break;}}),saveStory();if(_0x491a4b){if(_0x491a4b['kind']==='restart'){storyRestart();return;}if(_0x491a4b['kind']==='loadStarter'){fetchJSON(BASE_URL+'pokemon/'+_0x491a4b['id'])['then'](_0x40c8ee=>{if(!allPokemon['find'](_0x526d12=>_0x526d12['id']===_0x40c8ee['id']))allPokemon['push'](_0x40c8ee);story['team']['push'](storyMakeMember(_0x40c8ee,-0xdf0+-0x22+0xe17)),story['activeSlot']=0x522+0x19f7+-0x1f19,saveStory(),_0xd9b90d&&(story['nodeId']=_0xd9b90d,saveStory()),renderStory();})['catch'](()=>{_0xd9b90d&&(story['nodeId']=_0xd9b90d,saveStory()),renderStory();});return;}if(_0x491a4b['kind']==='explore'){storyStartExplore(_0x491a4b['zone'],_0xd9b90d);return;}if(_0x491a4b['kind']==='battle'){storyStartBattle(_0x491a4b['btype'],_0x491a4b['sub'],_0xd9b90d);return;}if(_0x491a4b['kind']==='gymbattle'){startGymBattle(_0x491a4b['gymKey']);return;}}_0xd9b90d&&(story['nodeId']=_0xd9b90d,saveStory()),renderStory();}function choiceVisible(_0x1fc5cd){if(!_0x1fc5cd['cond'])return!![];let [_0x1765ad,_0x35e432]=_0x1fc5cd['cond']['split'](':');if(_0x1765ad==='flag')return!!story['flags'][_0x35e432];if(_0x1765ad==='rivalPos')return story['rivalRelation']>-0x1fbf+0xe91+-0x897*-0x2;if(_0x1765ad==='rivalNeg')return story['rivalRelation']<-0x1cc*-0xd+0x1c26+0x15b*-0x26;if(_0x1765ad==='elaraHigh')return story['elara']>=-0x3a3*0x3+-0x179c+0x2289;if(_0x1765ad==='elaraMid')return story['elara']>=0x53+0x168+-0x1b9;if(_0x1765ad==='gentle_heart')return story['morale']>=-0x10*0x33+0x13e7*-0x1+0x1719||story['flags']['gentle_path'];if(_0x1765ad==='moralePos')return story['morale']>-0xee+0x2227+0x1*-0x2139;return!![];}function storyRestart(){story=defaultStory(),saveStory(),renderStory();}let storyContainer=null;function renderStory(){storyContainer=document['getElementById']('adventureContainer');if(!storyContainer)return;storyContainer['innerHTML']='';if(story['_inBattle']){renderStoryBattle(storyContainer);return;}if(!story['started']){renderStoryIntro(storyContainer);return;}let _0xff9ad0=STORY_NODES[story['nodeId']];!_0xff9ad0&&(story['nodeId']='prologo_1',_0xff9ad0=STORY_NODES['prologo_1']),renderStoryNode(storyContainer,_0xff9ad0);}function renderStoryIntro(_0x372cb4){let _0x1e878a=el('div','story-intro');_0x1e878a['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22story-intro-title\x22>LE\x20CRONACHE\x20DI\x20VELMORA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22story-intro-sub\x22>Un\x27avventura\x20narrativa</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22story-intro-text\x22>Una\x20cometa\x20solca\x20il\x20cielo\x20dopo\x20mille\x20anni.\x20Con\x20essa,\x20un\x20antico\x20potere\x20si\x20risveglia.<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Le\x20tue\x20scelte\x20plasmeranno\x20il\x20destino\x20di\x20Velmora\x20—\x20e\x20il\x20tuo.</p>\x0a\x20\x20\x20\x20';let _0x52b3fd=el('div','story-btn-row'),_0x518603=el('button','story-btn\x20story-btn-primary');_0x518603['textContent']=story['started']?'▸\x20Ricomincia\x20da\x20capo':'▸\x20Inizia\x20l\x27avventura',_0x518603['addEventListener']('click',()=>{story=defaultStory(),story['started']=!![],saveStory(),renderStory();}),_0x52b3fd['appendChild'](_0x518603);let _0xf6ee8b=localStorage['getItem'](STORY_SAVE_KEY);if(_0xf6ee8b)try{let _0x33bd74=JSON['parse'](_0xf6ee8b);if(_0x33bd74['started']&&_0x33bd74['nodeId']){let _0x5060bd=el('button','story-btn');_0x5060bd['textContent']='▸\x20Riprendi\x20(Cap.\x20'+(_0x33bd74['chapter']||-0x1180+-0x393+0x1514)+')',_0x5060bd['addEventListener']('click',()=>{story=_0x33bd74,story['started']=!![],story['_inBattle']=![],saveStory(),renderStory();}),_0x52b3fd['insertBefore'](_0x5060bd,_0x518603),_0x518603['textContent']='▸\x20Ricomincia\x20da\x20capo';}}catch(_0x556496){}_0x1e878a['appendChild'](_0x52b3fd),_0x372cb4['appendChild'](_0x1e878a);}function renderStoryNode(_0x4c90e6,_0x3c271f){if(story['nodeId']==='hub_medaglie'){if(story['badges']['length']>=0x93e+-0x6a9+-0x293&&!story['flags']['elara_joined']&&!story['flags']['elara_seen'])story['flags']['elara_seen']=!![],saveStory(),story['nodeId']='cap3_elara_incontro',_0x3c271f=STORY_NODES['cap3_elara_incontro'];else{if(story['flags']['elara_joined']&&story['badges']['length']>=0x4*0x6b+-0x1*-0x7cc+0xdc*-0xb&&!story['flags']['elara_cameo1'])story['flags']['elara_cameo1']=!![],saveStory(),story['nodeId']='elara_cameo_meta',_0x3c271f=STORY_NODES['elara_cameo_meta'];else story['flags']['elara_joined']&&story['badges']['length']>=-0x73*0x46+-0x3f*0x18+0x2*0x12b0&&!story['flags']['elara_cameo2']&&(story['flags']['elara_cameo2']=!![],saveStory(),story['nodeId']='elara_cameo_ordine',_0x3c271f=STORY_NODES['elara_cameo_ordine']);}}let _0x2a7d78=el('div','story-node');_0x2a7d78['appendChild'](buildStoryHud());let _0x3cdf14=el('div','story-loc');_0x3cdf14['innerHTML']='<span\x20class=\x22story-chapter\x22>CAPITOLO\x20'+_0x3c271f['chapter']+'</span>\x20·\x20<span\x20class=\x22story-place\x22>'+(_0x3c271f['location']||'')+'</span>',_0x2a7d78['appendChild'](_0x3cdf14);let _0x4c6434=el('div','story-node-title');_0x4c6434['textContent']=_0x3c271f['title']||'',_0x2a7d78['appendChild'](_0x4c6434);let _0x442cc7=el('div','story-text'),_0x2d9e5d=typeof _0x3c271f['text']==='function'?_0x3c271f['text']():_0x3c271f['text']||'';_0x442cc7['innerHTML']=_0x2d9e5d['replace'](/\n/g,'<br>'),_0x2a7d78['appendChild'](_0x442cc7);let _0x274b91=el('div','story-choices');(_0x3c271f['choices']||[])['forEach'](_0x31c7e7=>{if(!choiceVisible(_0x31c7e7))return;if(_0x31c7e7['label']==='__GYM_CHOICES__'){buildGymChoices(_0x274b91);return;}let _0x41b84d=el('button','story-choice');_0x41b84d['textContent']=_0x31c7e7['label'],_0x41b84d['addEventListener']('click',()=>runActions(_0x31c7e7['action'])),_0x274b91['appendChild'](_0x41b84d);}),_0x2a7d78['appendChild'](_0x274b91);let _0x485207=el('div','story-util-row');if(story['team']['length']){let _0xa1bc5e=el('button','story-util-btn');_0xa1bc5e['textContent']='👥\x20Squadra\x20('+story['team']['length']+')',_0xa1bc5e['addEventListener']('click',()=>renderStoryTeam()),_0x485207['appendChild'](_0xa1bc5e);}let _0x3a90d9=el('button','story-util-btn');_0x3a90d9['textContent']='≡\x20Menu',_0x3a90d9['addEventListener']('click',()=>{story['_inBattle']=![],renderStoryIntro(document['getElementById']('adventureContainer'));}),_0x485207['appendChild'](_0x3a90d9),_0x2a7d78['appendChild'](_0x485207),_0x4c90e6['appendChild'](_0x2a7d78);}function buildStoryHud(){let _0x1b21e9=el('div','story-hud'),_0x2398c6=story['morale']>0x151*-0xe+-0xbc6+0x1e35?'😇':story['morale']<-(-0x217+0x769+-0x551*0x1)?'😈':'⚖️',_0x412629=story['rivalRelation']>-0x1819+-0x49*0x2e+0x18d*0x18?'🤝':story['rivalRelation']<-(0x1a5+0xb53*-0x3+0x2055)?'⚔️':'😐',_0x24e802=story['elara']>=0x14a5*0x1+0x1d*-0x8b+-0x4e2?'💖':story['elara']>=0x157f+-0x5c1+0x1*-0xfbc?'💗':story['elara']>=0x14*-0xc+-0x123*0x20+-0x29*-0xe9?'🤍':'',_0x31f1f9=story['act']===0x1f5*-0x11+0x1*-0x154d+0xe*0x3e6?'<span\x20class=\x22hud-item\x22\x20title=\x22Giorni\x20al\x20termine\x20del\x20Risveglio\x22>⏳\x20'+story['daysLeft']+'g</span>':'';return _0x1b21e9['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hud-item\x22\x20title=\x22Medaglie\x22>🏅\x20'+story['badges']['length']+'/8</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hud-item\x22\x20title=\x22Monete\x22>💰\x20'+story['monete']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hud-item\x22\x20title=\x22Poké\x20Ball\x22>⚽\x20'+((story['balls']['pokeball']||-0xabf+-0x1835*-0x1+0x6bb*-0x2)+(story['balls']['superball']||0x1c28+-0x63*0x4f+0x265)+(story['balls']['ultraball']||-0x1*-0x17e3+0x266b+-0x3e4e))+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hud-item\x22\x20title=\x22Catturati\x22>📕\x20'+story['caught']['length']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hud-item\x22\x20title=\x22Morale\x22>'+_0x2398c6+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hud-item\x22\x20title=\x22Rapporto\x20con\x20Kael\x22>'+_0x412629+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x24e802?'<span\x20class=\x22hud-item\x22\x20title=\x22Affinità\x20con\x20Elara\x22>'+_0x24e802+'</span>':'')+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+_0x31f1f9+'\x0a\x20\x20\x20\x20',_0x1b21e9;}function buildGymChoices(_0x58b6a6){let _0x4bc15b=story['badges']['length']>=0x1*0x2078+-0x2*0x411+-0x3d*0x66;GYMS['forEach']((_0x1f2699,_0x4831ef)=>{let _0x5d1e68=story['badges']['includes'](_0x1f2699['key']),_0x819a10=_0x4831ef===0x93b+0x71e*-0x2+0x501||story['badges']['includes'](GYMS[_0x4831ef-(0x1*-0xb51+-0x13b3+0x1f05)]['key'])||_0x5d1e68,_0xf5603c=el('button','story-choice');if(_0x5d1e68)_0xf5603c['classList']['add']('gym-done'),_0xf5603c['innerHTML']='✅\x20'+_0x1f2699['leader']+'\x20—\x20'+_0x1f2699['badge']+'\x20<span\x20style=\x22opacity:.6\x22>('+_0x1f2699['desc']+')</span>',_0xf5603c['disabled']=!![];else!_0x819a10?(_0xf5603c['classList']['add']('gym-locked'),_0xf5603c['innerHTML']='🔒\x20???\x20—\x20Custode\x20bloccato',_0xf5603c['disabled']=!![]):(_0xf5603c['innerHTML']='⚔️\x20Sfida\x20'+_0x1f2699['leader']+'\x20<span\x20style=\x22opacity:.6\x22>—\x20'+_0x1f2699['loc']+'\x20·\x20'+_0x1f2699['desc']+'\x20·\x20Lv'+_0x1f2699['lvl']+'</span>',_0xf5603c['addEventListener']('click',()=>runActions('goto:gym_'+_0x1f2699['key'])));_0x58b6a6['appendChild'](_0xf5603c);});let _0x2ac415=el('button','story-choice');_0x2ac415['innerHTML']='🌿\x20Esplora\x20e\x20allenati\x20<span\x20style=\x22opacity:.6\x22>(incontri\x20selvatici)</span>';let _0x565004=Object['keys'](ZONE_POOLS),_0x3fa605=_0x565004[Math['min'](_0x565004['length']-(0x1068+-0x17e6+0x1*0x77f),Math['floor'](story['badges']['length']))];_0x2ac415['addEventListener']('click',()=>runActions('explore:'+_0x3fa605+';goto:hub_medaglie')),_0x58b6a6['appendChild'](_0x2ac415);if(_0x4bc15b){let _0x10abb5=el('button','story-choice');_0x10abb5['style']['borderColor']='var(--gold)',_0x10abb5['innerHTML']='🌟\x20Cerca\x20Sila,\x20la\x20Guardiana\x20→',_0x10abb5['addEventListener']('click',()=>runActions('chapter:3;goto:sila_porta')),_0x58b6a6['appendChild'](_0x10abb5);}}GYMS['forEach'](_0x5a7f59=>{STORY_NODES['gym_'+_0x5a7f59['key']]={'chapter':0x2,'location':_0x5a7f59['loc'],'title':'Custode\x20'+_0x5a7f59['leader'],'text':()=>_0x5a7f59['loc']+'.\x20'+_0x5a7f59['leader']+',\x20'+_0x5a7f59['desc']+',\x20ti\x20attende.\x0a\x0a«Vuoi\x20la\x20'+_0x5a7f59['badge']+'?\x20Dovrai\x20guadagnartela.\x20Mostrami\x20la\x20forza\x20del\x20legame\x20con\x20i\x20tuoi\x20Pokémon!»\x0a\x0a'+(story['elara']>=0x1854+0xdd7*-0x1+-0xa7c&&story['flags']['elara_joined']?'Elara,\x20accanto\x20a\x20te:\x20«Posso\x20darti\x20una\x20mano,\x20se\x20serve.»':''),'choices':[{'label':'⚔️\x20Sfida\x20'+_0x5a7f59['leader'],'action':'gymbattle:'+_0x5a7f59['key']},{'label':'←\x20Torna\x20indietro','action':'goto:hub_medaglie'}]};});function buildThemedTeam(_0x432c47,_0x4a3f94,_0x74caeb){let _0x14e82e=allPokemon['filter'](_0x1244ad=>_0x1244ad['types']['some'](_0x52df93=>_0x52df93['type']['name']===_0x432c47));if(!_0x14e82e['length'])_0x14e82e=allPokemon['slice']();let _0xb6a9fe=[],_0x21b4ea=new Set();for(let _0x28d701=0x9*0x143+-0x1c75+0x111a;_0x28d701<_0x74caeb;_0x28d701++){let _0x391764,_0x3c3bb6=0x28*0x8c+0x240d+-0x39ed;do{_0x391764=_0x14e82e[Math['floor'](Math['random']()*_0x14e82e['length'])],_0x3c3bb6++;}while(_0x21b4ea['has'](_0x391764['id'])&&_0x3c3bb6<0x2093+0x1f19+-0x16*0x2e4);_0x21b4ea['add'](_0x391764['id']);let _0x27a981=_0x28d701===_0x74caeb-(-0x1380+0xbc*-0x1b+0x2755*0x1)?_0x4a3f94:Math['max'](0x17ca+0x1*0xf27+0x26ef*-0x1,_0x4a3f94-rand(0x1e26+0x1*-0xff4+-0xe30,0x1132+0xd9a+-0x1ec7)),_0x5d5a84=generateIVs(),_0x22c067=calcHp(_0x391764,_0x27a981,_0x5d5a84['hp']);_0xb6a9fe['push']({'pokemon':_0x391764,'level':_0x27a981,'hp':_0x22c067,'maxHp':_0x22c067,'ivs':_0x5d5a84,'moves':getPokemonMoves(_0x391764,_0x27a981),'status':null,'statusTurns':0x0,'captureRate':0x80,'isShiny':![]});}return _0xb6a9fe;}function startGymBattle(_0x17bd4c){let _0x31a87e=gymByKey(_0x17bd4c);if(!_0x31a87e)return;if(allPokemon['length']<-0x67+-0x1608+0x1706){storyContainer=document['getElementById']('adventureContainer'),storyContainer['innerHTML']='<div\x20class=\x22story-node\x22><div\x20class=\x22story-text\x22\x20style=\x22text-align:center;\x22>Preparazione\x20alla\x20sfida...<br><div\x20class=\x22pokeball-spin\x22\x20style=\x22margin:16px\x20auto;\x22></div></div></div>';let _0x133e2a=[];for(let _0x3d9a66=0x26fe+0x11ba+-0x38b7*0x1;_0x3d9a66<=0x15c4+0x762+-0x1c8f;_0x3d9a66++)_0x133e2a['push'](_0x3d9a66);Promise['all'](_0x133e2a['map'](_0x5b2586=>fetchJSON(BASE_URL+'pokemon/'+_0x5b2586)['then'](_0x50da51=>{if(!allPokemon['find'](_0x44b9f2=>_0x44b9f2['id']===_0x50da51['id']))allPokemon['push'](_0x50da51);})['catch'](()=>{})))['then'](()=>{allPokemon['sort']((_0x4bef2f,_0x23b1f1)=>_0x4bef2f['id']-_0x23b1f1['id']),startGymBattle(_0x17bd4c);});return;}story['_currentGym']=_0x17bd4c;let _0x45b2cb=buildThemedTeam(_0x31a87e['type'],_0x31a87e['lvl'],-0x218+-0x246+-0x2*-0x232);storySetupTeamBattle(_0x45b2cb,'gym_result_'+_0x17bd4c,'gym',{'trainerName':_0x31a87e['leader']});}GYMS['forEach'](_0xbe8795=>{STORY_NODES['gym_result_'+_0xbe8795['key']]={'chapter':0x2,'location':_0xbe8795['loc'],'title':_0xbe8795['badge']+'\x20ottenuta!','text':()=>_0xbe8795['leader']+'\x20sorride\x20e\x20ti\x20porge\x20la\x20'+_0xbe8795['badge']+'.\x0a\x0a«Te\x20la\x20sei\x20guadagnata.\x20Il\x20legame\x20con\x20i\x20tuoi\x20Pokémon\x20è\x20autentico.\x20Va\x27\x20—\x20e\x20che\x20la\x20Cometa\x20illumini\x20il\x20tuo\x20cammino.»\x0a\x0aHai\x20'+story['badges']['length']+'/8\x20Medaglie.','choices':[{'label':'Torna\x20al\x20cammino\x20→','action':'goto:hub_medaglie'}]};});function storyStartExplore(_0x144dfc,_0x2e5326){let _0x33f5f4=ZONE_POOLS[_0x144dfc]||ZONE_POOLS['bosco_sussurri'];if(allPokemon['length']<-0x23f0+-0x1*-0x423+-0xc*-0x2b3){storyContainer=document['getElementById']('adventureContainer'),storyContainer['innerHTML']='<div\x20class=\x22story-node\x22><div\x20class=\x22story-text\x22\x20style=\x22text-align:center;\x22>Caricamento\x20dei\x20Pokémon\x20di\x20Velmora...<br><div\x20class=\x22pokeball-spin\x22\x20style=\x22margin:16px\x20auto;\x22></div></div></div>';let _0x5bba04=[];for(let _0x589fbc=0x23e+-0x2*0x207+0x1d1;_0x589fbc<=-0x81f+0x432+0x11*0x44;_0x589fbc++)_0x5bba04['push'](_0x589fbc);Promise['all'](_0x5bba04['map'](_0x1e688c=>fetchJSON(BASE_URL+'pokemon/'+_0x1e688c)['then'](_0x37c74=>{if(!allPokemon['find'](_0x4ccc02=>_0x4ccc02['id']===_0x37c74['id']))allPokemon['push'](_0x37c74);})['catch'](()=>{})))['then'](()=>{allPokemon['sort']((_0x49723d,_0x5d1db9)=>_0x49723d['id']-_0x5d1db9['id']),storyStartExplore(_0x144dfc,_0x2e5326);});return;}let _0x4d6626=spawnFromZone(_0x144dfc),_0x14f056=rand(_0x33f5f4['levelRange'][-0x1*-0xfa1+0x5*-0x4ff+-0x13*-0x7e],_0x33f5f4['levelRange'][-0x1711+-0x64b*-0x3+0x25*0x1d]);storySetupWildBattle(_0x4d6626,_0x14f056,_0x2e5326,'wild');}function storySetupWildBattle(_0x50338d,_0x26d66f,_0xef7d61,_0x5aa9bc,_0x34caf5={}){let _0x4217e4=generateIVs(),_0x392167=calcHp(_0x50338d,_0x26d66f,_0x4217e4['hp']),_0x529de5=typeof rollShiny==='function'?rollShiny():![];story['wildPokemon']={'pokemon':_0x50338d,'level':_0x26d66f,'hp':_0x392167,'maxHp':_0x392167,'ivs':_0x4217e4,'moves':getPokemonMoves(_0x50338d,_0x26d66f),'status':null,'statusTurns':0x0,'captureRate':_0x34caf5['captureRate']||-0x139f+0x2616+-0x11f7,'isShiny':_0x529de5,'btype':_0x5aa9bc,'trainerName':_0x34caf5['trainerName']||''},story['battleReturnNode']=_0xef7d61,story['battlePhase']='player',story['_inBattle']=!![],story['_battleType']=_0x5aa9bc,story['_canCatch']=_0x5aa9bc==='wild'||_0x5aa9bc==='legendary_catch';let _0x13b369=_0x529de5?'\x20✨\x20SHINY!':'',_0x28ed78=_0x5aa9bc==='wild'?'Un\x20'+capitalize(_0x50338d['name'])+'\x20selvatico\x20appare!'+_0x13b369+'\x20(Lv'+_0x26d66f+')':_0x5aa9bc==='gym'?_0x34caf5['trainerName']+'\x20manda\x20in\x20campo\x20'+capitalize(_0x50338d['name'])+'!\x20(Lv'+_0x26d66f+')':_0x5aa9bc==='trainer'?(_0x34caf5['trainerName']||'L\x27Ordine\x20del\x20Sigillo')+'\x20manda\x20in\x20campo\x20'+capitalize(_0x50338d['name'])+'!':_0x5aa9bc==='rival'?'Kael\x20manda\x20in\x20campo\x20'+capitalize(_0x50338d['name'])+'!':_0x5aa9bc==='boss'?'Vael\x20manda\x20in\x20campo\x20'+capitalize(_0x50338d['name'])+'!':_0x5aa9bc==='guardiana'?'Sila,\x20la\x20Guardiana,\x20manda\x20in\x20campo\x20'+capitalize(_0x50338d['name'])+'!\x20(Lv'+_0x26d66f+')':STORY_LEGENDARY_NAME+',\x20il\x20Pokémon\x20Dormiente,\x20si\x20erge\x20davanti\x20a\x20te!\x20(Lv'+_0x26d66f+')';story['battleLog']=[_0x28ed78,'Vai,\x20'+capitalize(storyActiveMember()['pokemon']['name'])+'!'];if(typeof playCry==='function')playCry(_0x50338d);story['enemyTeam']=null,story['enemyActiveIdx']=-0xbb*-0x27+0x14b*-0x1+-0x1b32,saveStory(),renderStory();}function storySetupTeamBattle(_0x3fa09b,_0x4bbad2,_0x331bfa,_0x4e5c2d={}){if(!_0x3fa09b||!_0x3fa09b['length'])return;story['enemyTeam']=_0x3fa09b,story['enemyActiveIdx']=0x1339+0x1*-0xdc9+0x2*-0x2b8;let _0x219e27=_0x3fa09b[0x14f3+0x1*-0x1247+0xe4*-0x3];story['wildPokemon']=Object['assign']({},_0x219e27,{'btype':_0x331bfa,'captureRate':_0x219e27['captureRate']||-0x19*0x4f+-0xecb+0x1702,'trainerName':_0x4e5c2d['trainerName']||''}),story['battleReturnNode']=_0x4bbad2,story['battlePhase']='player',story['_inBattle']=!![],story['_battleType']=_0x331bfa,story['_canCatch']=![];let _0x13bfb9=_0x331bfa==='gym'?_0x4e5c2d['trainerName']:_0x331bfa==='boss'?'Vael':_0x331bfa==='rival'?'Kael':_0x331bfa==='guardiana'?'Sila':_0x4e5c2d['trainerName']||'L\x27avversario';story['battleLog']=[_0x13bfb9+'\x20sta\x20per\x20sfidarti\x20con\x20'+_0x3fa09b['length']+'\x20Pokémon!',_0x13bfb9+'\x20manda\x20in\x20campo\x20'+capitalize(_0x219e27['pokemon']['name'])+'!\x20(Lv'+_0x219e27['level']+')','Vai,\x20'+capitalize(storyActiveMember()['pokemon']['name'])+'!'];if(typeof playCry==='function')playCry(_0x219e27['pokemon']);saveStory(),renderStory();}function enemyTeamNext(){if(!story['enemyTeam'])return![];let _0x5e38fc=story['enemyActiveIdx']+(-0x1*0x1833+-0x935*-0x2+0x1*0x5ca);if(_0x5e38fc>=story['enemyTeam']['length'])return![];story['enemyActiveIdx']=_0x5e38fc;let _0x113046=story['enemyTeam'][_0x5e38fc];story['wildPokemon']=Object['assign']({},_0x113046,{'btype':story['_battleType'],'captureRate':_0x113046['captureRate']||0x22f5+0x264a+-0x48bf,'trainerName':story['wildPokemon']['trainerName']}),story['battleLog']['push']('L\x27avversario\x20manda\x20in\x20campo\x20'+capitalize(_0x113046['pokemon']['name'])+'!\x20(Lv'+_0x113046['level']+')');if(typeof playCry==='function')playCry(_0x113046['pokemon']);return!![];}function storyStartBattle(_0x344375,_0x11f005,_0x26e1c9){if(allPokemon['length']<0x1*-0x2316+0x1*-0x1990+0x3d3d){storyContainer=document['getElementById']('adventureContainer'),storyContainer['innerHTML']='<div\x20class=\x22story-node\x22><div\x20class=\x22story-text\x22\x20style=\x22text-align:center;\x22>Caricamento...<br><div\x20class=\x22pokeball-spin\x22\x20style=\x22margin:16px\x20auto;\x22></div></div></div>';let _0x61db6a=[];for(let _0x2348d8=0x2331+-0x1566+-0x1*0xdca;_0x2348d8<=-0xf3c+-0x7*0x4f2+-0x1*-0x3271;_0x2348d8++)_0x61db6a['push'](_0x2348d8);Promise['all'](_0x61db6a['map'](_0x1b34f3=>fetchJSON(BASE_URL+'pokemon/'+_0x1b34f3)['then'](_0x319d0c=>{if(!allPokemon['find'](_0x4428eb=>_0x4428eb['id']===_0x319d0c['id']))allPokemon['push'](_0x319d0c);})['catch'](()=>{})))['then'](()=>{allPokemon['sort']((_0x2c06cd,_0x493ac7)=>_0x2c06cd['id']-_0x493ac7['id']),storyStartBattle(_0x344375,_0x11f005,_0x26e1c9);});return;}let _0x4403f7=null,_0x130078=_0x344375;ZONE_POOLS[_0x344375]&&(_0x4403f7=_0x344375,_0x130078=_0x11f005||'trainer');let _0x780c1,_0x26f7ad,_0x42f565={};if(_0x130078==='rival'){let _0x4bccd6=0x320*-0x5+0xd48+0x266+story['chapter']*(-0x1b0b+0x178+-0x6f*-0x3b),_0x1170e0=[],_0x503294=[-0x897+0x1*-0x1a32+0x22cc,-0xe59+-0xfa9+0x1e08,0x926+-0x3e*-0x25+-0x1213],_0x12b595=_0x503294[Math['floor'](Math['random']()*_0x503294['length'])],_0x5a0166=allPokemon['find'](_0x2c8dd9=>_0x2c8dd9['id']===_0x12b595)||allPokemon[-0x3*0xcd4+-0x405*0x3+0x328b];for(let _0x56c482=-0xc2*0x4+-0x1aa6+-0x1d*-0x106;_0x56c482<-0x188d+-0x105e+0x28f0;_0x56c482++){let _0x18c560=allPokemon[Math['floor'](Math['random']()*allPokemon['length'])],_0x98f852=Math['max'](0x1353+0x1c9a+-0x2feb,_0x4bccd6-rand(0x455*0x5+0x1efd+0x1*-0x34a5,0x58f*0x7+0x11f*0x17+-0x40ae)),_0x4a0e5b=generateIVs(),_0x379af4=calcHp(_0x18c560,_0x98f852,_0x4a0e5b['hp']);_0x1170e0['push']({'pokemon':_0x18c560,'level':_0x98f852,'hp':_0x379af4,'maxHp':_0x379af4,'ivs':_0x4a0e5b,'moves':getPokemonMoves(_0x18c560,_0x98f852),'status':null,'statusTurns':0x0,'captureRate':0x80,'isShiny':![]});}let _0x541718=generateIVs(),_0x34d589=calcHp(_0x5a0166,_0x4bccd6,_0x541718['hp']);_0x1170e0['push']({'pokemon':_0x5a0166,'level':_0x4bccd6,'hp':_0x34d589,'maxHp':_0x34d589,'ivs':_0x541718,'moves':getPokemonMoves(_0x5a0166,_0x4bccd6),'status':null,'statusTurns':0x0,'captureRate':0x80,'isShiny':![]}),storySetupTeamBattle(_0x1170e0,_0x26e1c9,'rival',{'trainerName':'Kael'});return;}else{if(_0x130078==='boss'){let _0x5dff29=buildThemedTeam2(['dark','psychic','ghost'],0x1ac0+0x2*0x117d+-0x3d92,0x118c+-0x22cd*-0x1+-0x3453);storySetupTeamBattle(_0x5dff29,_0x26e1c9,'boss',{'trainerName':'Vael'});return;}else{if(_0x130078==='guardiana'){let _0x541af5=buildThemedTeam2(['fairy','psychic'],-0x2*0xa36+0x61*-0x3d+0x2bb8,-0xbe5+0x55e+0x68d);storySetupTeamBattle(_0x541af5,_0x26e1c9,'guardiana',{'trainerName':'Sila'});return;}else{if(_0x130078==='legendary'||_0x130078==='legendary_catch'){_0x780c1=allPokemon['find'](_0x475f33=>_0x475f33['id']===STORY_LEGENDARY_ID);if(!_0x780c1){storyContainer=document['getElementById']('adventureContainer'),storyContainer['innerHTML']='<div\x20class=\x22story-node\x22><div\x20class=\x22story-text\x22\x20style=\x22text-align:center;\x22>L\x27ultimo\x20Sigillo\x20si\x20spezza...<br><div\x20class=\x22pokeball-spin\x22\x20style=\x22margin:16px\x20auto;\x22></div></div></div>',fetchJSON(BASE_URL+'pokemon/'+STORY_LEGENDARY_ID)['then'](_0x25f9e9=>{if(!allPokemon['find'](_0x21da9b=>_0x21da9b['id']===_0x25f9e9['id']))allPokemon['push'](_0x25f9e9);allPokemon['sort']((_0x50092e,_0x37c4d5)=>_0x50092e['id']-_0x37c4d5['id']),storyStartBattle(_0x344375,_0x11f005,_0x26e1c9);})['catch'](()=>{let _0xbb6b2b=allPokemon['filter'](_0x3b9368=>typeof LEGENDARY!=='undefined'&&LEGENDARY['has'](_0x3b9368['id'])),_0x549b55=_0xbb6b2b['length']?_0xbb6b2b[0x30*-0xba+-0x13d5*-0x1+0xf0b]:allPokemon[allPokemon['length']-(-0xc1*0x1d+0x16ec+-0x1e*0x9)];storySetupWildBattle(_0x549b55,-0x606*0x6+0x17*0x2b+0x2079,_0x26e1c9,_0x130078,{'captureRate':0x3});});return;}_0x26f7ad=-0x1ad1+0x135c+0x7a7*0x1,_0x42f565['captureRate']=-0xb9d+-0xd76+0x1916,storySetupWildBattle(_0x780c1,_0x26f7ad,_0x26e1c9,_0x130078,_0x42f565);return;}else{_0x780c1=_0x4403f7?spawnFromZone(_0x4403f7):allPokemon[Math['floor'](Math['random']()*allPokemon['length'])],_0x26f7ad=_0x4403f7?rand(ZONE_POOLS[_0x4403f7]['levelRange'][0x1662*-0x1+0x1e3+0x147f],ZONE_POOLS[_0x4403f7]['levelRange'][-0x1e37+-0x10d*0xd+0x2be1])+(0xbc+-0x1471*-0x1+-0x152b):-0x1*0x2063+-0x13*-0xb5+0x26*0x80,_0x42f565['trainerName']='Recluta\x20dell\x27Ordine',storySetupWildBattle(_0x780c1,_0x26f7ad,_0x26e1c9,_0x130078,_0x42f565);return;}}}}}function buildThemedTeam2(_0x1af0c1,_0x14bed0,_0x3830cc){let _0x3ec52a=allPokemon['filter'](_0x1f0334=>_0x1f0334['types']['some'](_0x5993f9=>_0x1af0c1['includes'](_0x5993f9['type']['name'])));if(!_0x3ec52a['length'])_0x3ec52a=allPokemon['slice']();let _0x14a46b=[],_0x28d86e=new Set();for(let _0x5caf0d=-0x2293+-0x1ca7+0x1*0x3f3a;_0x5caf0d<_0x3830cc;_0x5caf0d++){let _0x4bb7f2,_0xde3178=-0x1*0x1645+-0x67*0x2b+0x13c9*0x2;do{_0x4bb7f2=_0x3ec52a[Math['floor'](Math['random']()*_0x3ec52a['length'])],_0xde3178++;}while(_0x28d86e['has'](_0x4bb7f2['id'])&&_0xde3178<-0x205a+-0x78f+0x1*0x27fd);_0x28d86e['add'](_0x4bb7f2['id']);let _0x465ffa=_0x5caf0d===_0x3830cc-(-0x1a12+-0x9*0x205+0x3*0xec0)?_0x14bed0:Math['max'](-0x563+-0x1*0x195a+-0x11*-0x1cf,_0x14bed0-rand(-0x67a+-0xc*-0x17f+0x1*-0xb78,0xa8*-0x20+-0x2*0x123+0x43*0x59)),_0x2c0ab5=generateIVs(),_0x51f89d=calcHp(_0x4bb7f2,_0x465ffa,_0x2c0ab5['hp']);_0x14a46b['push']({'pokemon':_0x4bb7f2,'level':_0x465ffa,'hp':_0x51f89d,'maxHp':_0x51f89d,'ivs':_0x2c0ab5,'moves':getPokemonMoves(_0x4bb7f2,_0x465ffa),'status':null,'statusTurns':0x0,'captureRate':0x80,'isShiny':![]});}return _0x14a46b;}function renderStoryBattle(_0x533271){let _0x59f335=story['wildPokemon'],_0x324d55=storyActiveMember();if(!_0x59f335||!_0x324d55){story['_inBattle']=![],renderStory();return;}let _0x59fee8=el('div','story-battle'),_0x26a474=el('div','sb-field'),_0x4bcbb2=el('div','sb-me'),_0xcdce5b=_0x324d55['pokemon']['sprites']?.['other']?.['official-artwork']?.['front_default']||_0x324d55['pokemon']['sprites']?.['front_default']||'';_0x4bcbb2['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22sb-sprite\x20sb-my-sprite\x22\x20src=\x22'+_0xcdce5b+'\x22\x20alt=\x22'+_0x324d55['pokemon']['name']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sb-name\x22>'+capitalize(_0x324d55['pokemon']['name'])+'\x20<span\x20class=\x22sb-lv\x22>Lv'+_0x324d55['level']+'</span>\x20'+(_0x324d55['status']?statusBadge(_0x324d55['status']):'')+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sb-hpbar\x22><div\x20class=\x22sb-hpfill\x22\x20style=\x22width:'+Math['max'](0x212a+-0x1c26+0xd6*-0x6,_0x324d55['hp']/_0x324d55['maxHp']*(0x44d+-0x301*0xc+-0x13*-0x1b1))+'%;background:'+hpColor(_0x324d55['hp']/_0x324d55['maxHp'])+'\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sb-hptext\x22>'+_0x324d55['hp']+'/'+_0x324d55['maxHp']+'\x20HP</div>\x0a\x20\x20\x20\x20',_0x26a474['appendChild'](_0x4bcbb2);let _0x1ae0cd=el('div','sb-enemy'),_0xb75aee=_0x59f335['isShiny']&&_0x59f335['pokemon']['sprites']?.['other']?.['official-artwork']?.['front_shiny']||_0x59f335['pokemon']['sprites']?.['other']?.['official-artwork']?.['front_default']||_0x59f335['pokemon']['sprites']?.['front_default']||'',_0xe76ba2='';if(story['enemyTeam']&&story['enemyTeam']['length']>-0x40f+-0x14*0x1f1+0x2ae4){let _0x512aee=story['enemyTeam']['length'],_0x5bbbe1=_0x512aee-story['enemyActiveIdx'];_0xe76ba2='<div\x20class=\x22sb-team-dots\x22>'+'●'['repeat'](_0x5bbbe1)+'○'['repeat'](_0x512aee-_0x5bbbe1)+'</div>';}let _0x2eb146=_0x59f335['trainerName']?'<div\x20style=\x22font-family:var(--pixel);font-size:6px;color:var(--accent);margin-bottom:3px;\x22>'+_0x59f335['trainerName']+'</div>':'';_0x1ae0cd['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+_0x2eb146+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sb-name\x22>'+capitalize(_0x59f335['pokemon']['name'])+'\x20<span\x20class=\x22sb-lv\x22>Lv'+_0x59f335['level']+'</span>\x20'+(_0x59f335['status']?statusBadge(_0x59f335['status']):'')+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sb-hpbar\x22><div\x20class=\x22sb-hpfill\x22\x20style=\x22width:'+Math['max'](-0x2d2*-0x5+-0x3*0x301+-0x517,_0x59f335['hp']/_0x59f335['maxHp']*(-0x1*-0x1459+-0x8c3+-0xb32))+'%;background:'+hpColor(_0x59f335['hp']/_0x59f335['maxHp'])+'\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+_0xe76ba2+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22sb-sprite\x20sb-enemy-sprite\x22\x20src=\x22'+_0xb75aee+'\x22\x20alt=\x22'+_0x59f335['pokemon']['name']+'\x22>\x0a\x20\x20\x20\x20',_0x26a474['appendChild'](_0x1ae0cd),_0x59fee8['appendChild'](_0x26a474);let _0x579b4c=el('div','sb-log');_0x579b4c['innerHTML']=story['battleLog']['slice'](-(0x3*-0x3+0x33e+-0x332))['map'](_0x1cd711=>'<div>'+_0x1cd711+'</div>')['join'](''),_0x59fee8['appendChild'](_0x579b4c);if(story['battlePhase']==='player'){let _0x45c3b5=el('div','sb-actions');_0x324d55['moves']['forEach']((_0x517ef2,_0x360247)=>{let _0x1e9fca=el('button','sb-move');_0x1e9fca['style']['borderColor']=getTypeColor(_0x517ef2['type']),_0x1e9fca['innerHTML']='<span\x20class=\x22sb-move-name\x22>'+_0x517ef2['name']+'</span><span\x20class=\x22sb-move-meta\x22>'+_0x517ef2['type']['toUpperCase']()+'\x20·\x20Pot.'+(_0x517ef2['power']||'-')+'\x20·\x20PP\x20'+_0x517ef2['pp']+'/'+_0x517ef2['maxPp']+'</span>',_0x1e9fca['disabled']=_0x517ef2['pp']<=0xe*0x85+-0x3*0xc5a+0x1dc8,_0x1e9fca['addEventListener']('click',()=>storyPlayerAttack(_0x517ef2,_0x360247)),_0x45c3b5['appendChild'](_0x1e9fca);}),_0x59fee8['appendChild'](_0x45c3b5);let _0x4ea2dc=el('div','sb-subactions');if(story['_canCatch']){let _0x5e138c=el('button','sb-subbtn');_0x5e138c['textContent']='🎯\x20Cattura',_0x5e138c['addEventListener']('click',()=>renderStoryCatchMenu(_0x59fee8)),_0x4ea2dc['appendChild'](_0x5e138c);}if(story['team']['length']>-0x566*0x7+-0x50f*-0x1+0x20bc){let _0x5a1031=el('button','sb-subbtn');_0x5a1031['textContent']='🔄\x20Cambia',_0x5a1031['addEventListener']('click',()=>renderStorySwitchMenu(_0x59fee8)),_0x4ea2dc['appendChild'](_0x5a1031);}let _0x110178=el('button','sb-subbtn');_0x110178['textContent']='🎒\x20Borsa',_0x110178['addEventListener']('click',()=>renderStoryBagMenu(_0x59fee8)),_0x4ea2dc['appendChild'](_0x110178);if(story['_battleType']==='wild'){let _0x1f0d71=el('button','sb-subbtn');_0x1f0d71['textContent']='🏃\x20Fuggi',_0x1f0d71['addEventListener']('click',()=>storyFlee()),_0x4ea2dc['appendChild'](_0x1f0d71);}_0x59fee8['appendChild'](_0x4ea2dc);}_0x533271['appendChild'](_0x59fee8);}function statusBadge(_0x4b0718){return'<span\x20class=\x22sb-status\x22\x20style=\x22background:'+(STATUS_COLORS[_0x4b0718]||'#888')+'\x22>'+(STATUS_LABELS[_0x4b0718]||_0x4b0718)['split']('\x20')[0x1414+-0x1f1+-0x1223]+'</span>';}function hpColor(_0x1ab72c){return _0x1ab72c>-0x2351*-0x1+0x23bf+-0x4710+0.5?'#66bb6a':_0x1ab72c>0x7f*-0xb+-0x2487+0x14fe*0x2+0.2?'#ffd54f':'#e94560';}function storyPlayerAttack(_0x4282c4,_0x261561){if(story['battlePhase']!=='player')return;let _0x5a424e=storyActiveMember(),_0x41e933=story['wildPokemon'];_0x5a424e['bond']=(_0x5a424e['bond']||-0x4c*0x10+0x17df+-0x131f)+(0x2556+-0x1908*0x1+-0xc4d),_0x5a424e['moves'][_0x261561]['pp']=Math['max'](-0x249+-0x15d6+0x181f,_0x5a424e['moves'][_0x261561]['pp']-(0x14b*0xd+0x2*-0xff4+0xf1a));if(checkStatusSkip(_0x5a424e,story['battleLog'],capitalize(_0x5a424e['pokemon']['name']))){story['battlePhase']='enemy',saveStory(),renderStory(),setTimeout(storyEnemyTurn,0xfa*-0xa+-0x2001+0x2d49);return;}let _0x22c45d=calcDamage(_0x5a424e['pokemon'],_0x5a424e['level'],_0x5a424e['ivs'],_0x4282c4,_0x41e933['pokemon'],_0x41e933['level'],_0x41e933['ivs']);if(_0x22c45d['missed'])story['battleLog']['push'](capitalize(_0x5a424e['pokemon']['name'])+'\x20usa\x20'+_0x4282c4['name']+'...\x20ma\x20manca!');else{_0x41e933['hp']=Math['max'](-0x1*0x167b+-0xb8*0x1+0x1733,_0x41e933['hp']-_0x22c45d['damage']);let _0x159401=_0x22c45d['multiplier']>-0x2194+0x87d+0x1918?'\x20È\x20superefficace!':_0x22c45d['multiplier']<-0xb8c*0x3+0x1e*-0x4a+0x2b51&&_0x22c45d['multiplier']>0x14f2+0x13b1+0x1*-0x28a3?'\x20Non\x20è\x20molto\x20efficace...':_0x22c45d['multiplier']===-0x1*0x2297+-0xb66*0x3+0x44c9?'\x20Non\x20ha\x20effetto...':'';story['battleLog']['push'](capitalize(_0x5a424e['pokemon']['name'])+'\x20usa\x20'+_0x4282c4['name']+'!'+_0x159401),_0x22c45d['appliedStatus']&&!_0x41e933['status']&&(_0x41e933['status']=_0x22c45d['appliedStatus'],_0x41e933['statusTurns']=rand(-0xcc1+0x200f+-0x26*0x82,0x132a+0x209d+-0x33c3),story['battleLog']['push'](capitalize(_0x41e933['pokemon']['name'])+'\x20è\x20ora\x20'+(STATUS_LABELS[_0x22c45d['appliedStatus']]||'')['toLowerCase']()+'!'));}if(_0x41e933['hp']<=0x1*-0x1799+0x30*0x73+0x209*0x1){storyBattleWon();return;}story['battlePhase']='enemy',saveStory(),renderStory(),setTimeout(storyEnemyTurn,0xd24+-0x53*-0x35+-0x1*0x1acf);}function storyEnemyTurn(){let _0x97e93f=storyActiveMember(),_0x536e7a=story['wildPokemon'];if(!_0x536e7a||_0x536e7a['hp']<=-0x1*-0x1c1+-0x223b+0x1*0x207a)return;applyStatusDamage(_0x536e7a,story['battleLog'],capitalize(_0x536e7a['pokemon']['name']));if(_0x536e7a['hp']<=0x4f*-0x49+-0x1*-0x16f5+0x6e*-0x1){storyBattleWon();return;}if(!checkStatusSkip(_0x536e7a,story['battleLog'],capitalize(_0x536e7a['pokemon']['name']))){let _0x23565f=_0x536e7a['moves'][Math['floor'](Math['random']()*_0x536e7a['moves']['length'])],_0x3ddf75=calcDamage(_0x536e7a['pokemon'],_0x536e7a['level'],_0x536e7a['ivs'],_0x23565f,_0x97e93f['pokemon'],_0x97e93f['level'],_0x97e93f['ivs']);if(_0x3ddf75['missed'])story['battleLog']['push'](capitalize(_0x536e7a['pokemon']['name'])+'\x20usa\x20'+_0x23565f['name']+'...\x20ma\x20manca!');else{_0x97e93f['hp']=Math['max'](-0x150b*0x1+-0x165e+0x2b69,_0x97e93f['hp']-_0x3ddf75['damage']);let _0x25f36e=_0x3ddf75['multiplier']>0x1*-0x2371+-0x1ff1+0x4363?'\x20È\x20superefficace!':_0x3ddf75['multiplier']<-0x1*0x663+0xa6*0x1f+0x249*-0x6&&_0x3ddf75['multiplier']>0xf4*0x8+0x16cd*-0x1+0x69*0x25?'\x20Non\x20è\x20molto\x20efficace...':'';story['battleLog']['push'](capitalize(_0x536e7a['pokemon']['name'])+'\x20usa\x20'+_0x23565f['name']+'!'+_0x25f36e),_0x3ddf75['appliedStatus']&&!_0x97e93f['status']&&(_0x97e93f['status']=_0x3ddf75['appliedStatus'],_0x97e93f['statusTurns']=rand(-0xb3*0x29+-0x6d5*-0x3+0x82e,0x471+-0x635+0x1c8),story['battleLog']['push'](capitalize(_0x97e93f['pokemon']['name'])+'\x20è\x20ora\x20'+(STATUS_LABELS[_0x3ddf75['appliedStatus']]||'')['toLowerCase']()+'!'));}}applyStatusDamage(_0x97e93f,story['battleLog'],capitalize(_0x97e93f['pokemon']['name']));if(story['flags']['elara_joined']&&_0x97e93f['hp']>-0x151e+0xc95+0x889&&_0x536e7a['hp']>-0x863+0x19f9+0x1*-0x1196){let _0x2bf1b7=-0x1*-0x2551+-0x1a7c+-0xad5+0.15+Math['min'](0x1*0x222b+0x23*-0x6d+-0x1344+0.2,story['elara']*(0x1683+-0x4f4+-0x118f+0.04));if(Math['random']()<_0x2bf1b7){if(_0x97e93f['hp']<_0x97e93f['maxHp']*(-0x1*-0x209+-0x6*0xfb+0x3d9*0x1+0.4)&&story['elara']>=0x7eb*0x4+0x2*-0x3d+-0x1f30){let _0xe46b23=Math['floor'](_0x97e93f['maxHp']*(0x1344+-0x182*-0x14+0x316c*-0x1+0.3));_0x97e93f['hp']=Math['min'](_0x97e93f['maxHp'],_0x97e93f['hp']+_0xe46b23),story['battleLog']['push']('💗\x20Elara\x20lancia\x20una\x20pozione\x20a\x20'+capitalize(_0x97e93f['pokemon']['name'])+'!');}else{let _0x628d5c=Math['floor'](_0x536e7a['maxHp']*(-0x2706+-0x1f11+0x4617+0.12))+rand(0x19eb+0x1*0x265a+0x497*-0xe,0x257a+0x20*-0x107+0x1e*-0x27);_0x536e7a['hp']=Math['max'](0x2*0x565+0xe9b+-0x24f*0xb,_0x536e7a['hp']-_0x628d5c),story['battleLog']['push']('✨\x20Il\x20Pokémon\x20di\x20Elara\x20colpisce\x20'+capitalize(_0x536e7a['pokemon']['name'])+'!');if(_0x536e7a['hp']<=0x7f*-0x22+-0xd3f+0x1e1d){saveStory(),storyBattleWon();return;}}}}if(_0x97e93f['hp']<=-0x49*0x47+-0x38c+0x17cb*0x1){story['battleLog']['push'](capitalize(_0x97e93f['pokemon']['name'])+'\x20è\x20esausto!');let _0x23b828=story['team']['findIndex']((_0x34ac27,_0x2d7818)=>_0x2d7818!==story['activeSlot']&&_0x34ac27['hp']>-0x11d*0xb+0x9cd*0x2+0x7*-0x10d);if(_0x23b828>=-0x18b6+-0x3cb*0x7+-0x4a9*-0xb){story['battlePhase']='player',saveStory(),renderStory(),setTimeout(()=>renderStorySwitchMenu(document['querySelector']('.story-battle'),!![]),0x2256+0x1a5*0x13+-0xb*0x5db);return;}else{storyBattleLost();return;}}story['battlePhase']='player',saveStory(),renderStory();}function renderStoryCatchMenu(_0x46d6e1){let _0x5d63b4=el('div','sb-menu');_0x5d63b4['innerHTML']='<div\x20class=\x22sb-menu-title\x22>Quale\x20Ball?</div>',Object['keys'](BALL_DATA)['forEach'](_0x594c60=>{let _0xffe671=story['balls'][_0x594c60]||0x11f2+0x2*-0x5c9+-0x660,_0x526f54=el('button','sb-menu-btn');_0x526f54['innerHTML']=BALL_DATA[_0x594c60]['emoji']+'\x20'+BALL_DATA[_0x594c60]['label']+'\x20<span\x20style=\x22opacity:.6\x22>×'+_0xffe671+'</span>',_0x526f54['disabled']=_0xffe671<=0x2290+-0x9f*0x11+0x4cd*-0x5,_0x526f54['addEventListener']('click',()=>storyAttemptCatch(_0x594c60)),_0x5d63b4['appendChild'](_0x526f54);});let _0xd3a420=el('button','sb-menu-back');_0xd3a420['textContent']='←\x20Indietro',_0xd3a420['addEventListener']('click',()=>renderStory()),_0x5d63b4['appendChild'](_0xd3a420),_0x46d6e1['appendChild'](_0x5d63b4);}function storyAttemptCatch(_0x34c3e4){if((story['balls'][_0x34c3e4]||0x2072*0x1+0x1310+-0x3382)<=-0x10a5+-0x179*0xb+-0x20d8*-0x1)return;story['balls'][_0x34c3e4]--;let _0x23c84d=story['wildPokemon'],_0x4a1658=BALL_DATA[_0x34c3e4]['bonus'],_0x5631b5=getStatusCatchBonus(_0x23c84d['status']),_0x159c83=((-0xd25*-0x1+-0xfd9*0x2+0x4*0x4a4)*_0x23c84d['maxHp']-(0x9b9*-0x1+0xc41*-0x3+0x2e7e)*_0x23c84d['hp'])/((0x14a3+0x1cb6+0x1072*-0x3)*_0x23c84d['maxHp']),_0x19a44c=_0x23c84d['captureRate']||0x18b9*-0x1+-0xac*-0x22+0x261,_0x219a30=_0x159c83*_0x19a44c*_0x4a1658*_0x5631b5,_0x26b0fb=_0x219a30>=-0x7*0x233+-0x72e*-0x5+-0x1382||Math['random']()*(0xe2c+-0x2362+-0xf*-0x17b)<_0x219a30,_0x29d73a=_0x26b0fb?0xa5d+0x1510+-0x1f6a:_0x219a30>=0x2321+-0x1284+-0x1039?0x1559+-0xfb9+-0x59e:_0x219a30>=-0x1989+-0x1cc7+0x2*0x1b41?-0x5bc+-0x1*-0x756+-0x199:0xb*0xe7+-0x55f*0x1+-0x247*0x2;story['battleLog']['push']('Lanci\x20una\x20'+BALL_DATA[_0x34c3e4]['label']+'...'),story['battlePhase']='enemy',saveStory(),renderStory(),setTimeout(()=>{if(_0x26b0fb){if(!story['caught']['includes'](_0x23c84d['pokemon']['id']))story['caught']['push'](_0x23c84d['pokemon']['id']);story['team']['length']<0xa34+-0x1195*0x1+-0x1*-0x767?(story['team']['push']({'pokemon':_0x23c84d['pokemon'],'level':_0x23c84d['level'],'hp':_0x23c84d['maxHp'],'maxHp':_0x23c84d['maxHp'],'ivs':_0x23c84d['ivs'],'moves':_0x23c84d['moves'],'status':null,'statusTurns':0x0,'xp':0x0}),story['battleLog']['push']('🎉\x20'+capitalize(_0x23c84d['pokemon']['name'])+'\x20catturato\x20e\x20aggiunto\x20alla\x20squadra!')):story['battleLog']['push']('🎉\x20'+capitalize(_0x23c84d['pokemon']['name'])+'\x20catturato!\x20(squadra\x20piena,\x20registrato)');if(typeof unlockTCGCard==='function')try{unlockTCGCard(_0x23c84d['pokemon']['id'],{'shiny':_0x23c84d['isShiny']});}catch(_0x4d996f){}storyEndBattle();}else story['battleLog']['push'](_0x29d73a>-0x1a99+-0x26*-0x50+0xeb9*0x1?'Si\x20dimena...\x20'+_0x29d73a+'\x20oscillazion'+(_0x29d73a>0x21a6+0x1*-0x1175+0x4*-0x40c?'i':'e')+'...\x20si\x20libera!':capitalize(_0x23c84d['pokemon']['name'])+'\x20si\x20libera\x20subito!'),story['battlePhase']='player',saveStory(),renderStory(),setTimeout(storyEnemyTurn,-0x4*0x15b+-0xeea+-0xb89*-0x2);},-0x1f5*-0x3+-0xe33+0xca0);}function renderStorySwitchMenu(_0x9d715,_0x57c455=![]){if(!_0x9d715)_0x9d715=document['querySelector']('.story-battle')||storyContainer;let _0x4e3660=el('div','sb-menu');_0x4e3660['innerHTML']='<div\x20class=\x22sb-menu-title\x22>'+(_0x57c455?'Scegli\x20il\x20prossimo\x20Pokémon':'Cambia\x20Pokémon')+'</div>',story['team']['forEach']((_0x230dfe,_0x26b5d6)=>{if(_0x26b5d6===story['activeSlot']&&!_0x57c455)return;let _0x1f2d93=el('button','sb-menu-btn');_0x1f2d93['innerHTML']=capitalize(_0x230dfe['pokemon']['name'])+'\x20Lv'+_0x230dfe['level']+'\x20·\x20'+_0x230dfe['hp']+'/'+_0x230dfe['maxHp']+'\x20HP',_0x1f2d93['disabled']=_0x230dfe['hp']<=-0x3d9+0x26ba+0x1*-0x22e1,_0x1f2d93['addEventListener']('click',()=>{story['activeSlot']=_0x26b5d6,story['battleLog']['push']('Vai,\x20'+capitalize(_0x230dfe['pokemon']['name'])+'!'),!_0x57c455?(story['battlePhase']='enemy',saveStory(),renderStory(),setTimeout(storyEnemyTurn,0x154+-0x1494+0x1660)):(story['battlePhase']='player',saveStory(),renderStory());}),_0x4e3660['appendChild'](_0x1f2d93);});if(!_0x57c455){let _0x5dbfaf=el('button','sb-menu-back');_0x5dbfaf['textContent']='←\x20Indietro',_0x5dbfaf['addEventListener']('click',()=>renderStory()),_0x4e3660['appendChild'](_0x5dbfaf);}_0x9d715['appendChild'](_0x4e3660);}function renderStoryBagMenu(_0x201e33){let _0xda5111=el('div','sb-menu');_0xda5111['innerHTML']='<div\x20class=\x22sb-menu-title\x22>Borsa</div>';const _0x350b8f={'pozione':0x14,'superpozione':0x32,'iperpozione':0x3e7};Object['keys'](_0x350b8f)['forEach'](_0x2364f3=>{let _0xc092c7=story['bag'][_0x2364f3]||-0x4c0+-0x25dd+0x1*0x2a9d,_0x32efd2=el('button','sb-menu-btn');_0x32efd2['innerHTML']='🧴\x20'+capitalize(_0x2364f3)+'\x20<span\x20style=\x22opacity:.6\x22>×'+_0xc092c7+'</span>',_0x32efd2['disabled']=_0xc092c7<=-0x592+-0xfb1+0x1543,_0x32efd2['addEventListener']('click',()=>{let _0x214dea=storyActiveMember();_0x214dea['hp']=Math['min'](_0x214dea['maxHp'],_0x214dea['hp']+_0x350b8f[_0x2364f3]),story['bag'][_0x2364f3]--,_0x214dea['bond']=(_0x214dea['bond']||-0x1016*0x1+-0xa03+0x1a19)+(-0x3b*-0x17+-0x2d4+-0x277),story['battleLog']['push'](capitalize(_0x214dea['pokemon']['name'])+'\x20recupera\x20energie!'),story['battlePhase']='enemy',saveStory(),renderStory(),setTimeout(storyEnemyTurn,-0xd*0x2b7+0x7b3+0x1eb8);}),_0xda5111['appendChild'](_0x32efd2);});let _0x1da3a4=el('button','sb-menu-btn'),_0x325fa3=story['bag']['antidoto']||0x112*0x1d+-0x129*-0x1a+0x1*-0x3d34;_0x1da3a4['innerHTML']='🟢\x20Antidoto\x20<span\x20style=\x22opacity:.6\x22>×'+_0x325fa3+'</span>',_0x1da3a4['disabled']=_0x325fa3<=-0x4*0x4e2+0x1*-0xba2+-0x2*-0xf95,_0x1da3a4['addEventListener']('click',()=>{let _0x4f23b=storyActiveMember();_0x4f23b['status']=null,story['bag']['antidoto']--,story['battleLog']['push'](capitalize(_0x4f23b['pokemon']['name'])+'\x20è\x20guarito\x20dallo\x20stato!'),story['battlePhase']='enemy',saveStory(),renderStory(),setTimeout(storyEnemyTurn,-0x12c5+0x1*-0x1cc3+0x32a8);}),_0xda5111['appendChild'](_0x1da3a4);let _0x61fca0=el('button','sb-menu-back');_0x61fca0['textContent']='←\x20Indietro',_0x61fca0['addEventListener']('click',()=>renderStory()),_0xda5111['appendChild'](_0x61fca0),_0x201e33['appendChild'](_0xda5111);}function storyFlee(){Math['random']()<0x1ac*0x10+0x25d4+-0x1*0x4094+0.85?(story['battleLog']['push']('Sei\x20fuggito!'),storyEndBattle()):(story['battleLog']['push']('Non\x20riesci\x20a\x20fuggire!'),story['battlePhase']='enemy',saveStory(),renderStory(),setTimeout(storyEnemyTurn,-0x1283+0x1c66+-0x727));}function storyBattleWon(){let _0x3ddc0d=story['wildPokemon'];story['battleLog']['push'](capitalize(_0x3ddc0d['pokemon']['name'])+'\x20è\x20stato\x20sconfitto!');let _0x181b92=storyActiveMember(),_0xe36bd4=Math['floor'](_0x3ddc0d['level']*(-0x1*0xac1+0xc5*0x2b+-0x1653+0.5));_0x181b92['xp']=(_0x181b92['xp']||0x1f5e+-0x1*0x1c55+0x7*-0x6f)+_0xe36bd4;let _0x1feac3=_0x181b92['level']*_0x181b92['level'];while(_0x181b92['xp']>=_0x1feac3&&_0x181b92['level']<-0x1*-0x1075+-0x267d+0xcd*0x1c){_0x181b92['xp']-=_0x1feac3,_0x181b92['level']++;let _0x558346=calcHp(_0x181b92['pokemon'],_0x181b92['level'],_0x181b92['ivs']['hp']);_0x181b92['hp']+=_0x558346-_0x181b92['maxHp'],_0x181b92['maxHp']=_0x558346,story['battleLog']['push']('⬆️\x20'+capitalize(_0x181b92['pokemon']['name'])+'\x20sale\x20al\x20Lv'+_0x181b92['level']+'!'),_0x1feac3=_0x181b92['level']*_0x181b92['level'];}if(story['enemyTeam']&&enemyTeamNext()){story['battlePhase']='player',saveStory(),renderStory();return;}if(['trainer','rival','boss','gym','guardiana']['includes'](story['_battleType'])){let _0x395ab1=story['_battleType']==='boss'?0x162a+-0x4*-0x5b3+-0x2526:story['_battleType']==='guardiana'?0x1efe*0x1+-0x153a*-0x1+0x3dd*-0xc:story['_battleType']==='rival'?0xa4*0x14+0x18ad*-0x1+-0x4ff*-0x3:story['_battleType']==='gym'?-0x2*0xef+0x25f7+-0x2225:-0x141*0x3+0x1*-0xb27+0x1016;story['monete']+=_0x395ab1,story['battleLog']['push']('Hai\x20ricevuto\x20'+_0x395ab1+'₽!');}if(story['_battleType']==='gym'&&story['_currentGym']){if(!story['badges']['includes'](story['_currentGym'])){story['badges']['push'](story['_currentGym']);let _0x24f758=gymByKey(story['_currentGym']);story['battleLog']['push']('🏅\x20Hai\x20ottenuto\x20la\x20'+(_0x24f758?_0x24f758['badge']:'Medaglia')+'!');}story['_currentGym']=null;}saveStory(),renderStoryBattleEnd('win');}function storyBattleLost(){story['battleLog']['push']('Tutta\x20la\x20tua\x20squadra\x20è\x20esausta...'),story['team']['forEach'](_0x1ca39b=>{_0x1ca39b['hp']=_0x1ca39b['maxHp'],_0x1ca39b['status']=null;}),saveStory(),renderStoryBattleEnd('lose');}function renderStoryBattleEnd(_0x32ff65){storyContainer=document['getElementById']('adventureContainer'),storyContainer['innerHTML']='';let _0x598219=el('div','story-node'),_0x1d3137=el('div','sb-log');_0x1d3137['style']['maxHeight']='none',_0x1d3137['innerHTML']=story['battleLog']['slice'](-(-0x2606+-0x761*-0x1+-0x311*-0xa))['map'](_0x5af24e=>'<div>'+_0x5af24e+'</div>')['join'](''),_0x598219['appendChild'](_0x1d3137);let _0xb094be=el('button','story-btn\x20story-btn-primary');_0xb094be['textContent']=_0x32ff65==='win'?'▸\x20Continua':'▸\x20Riprenditi\x20e\x20continua',_0xb094be['style']['marginTop']='20px',_0xb094be['addEventListener']('click',()=>storyEndBattle()),_0x598219['appendChild'](_0xb094be),storyContainer['appendChild'](_0x598219);}function storyEndBattle(){story['_inBattle']=![],story['wildPokemon']=null,story['enemyTeam']=null,story['enemyActiveIdx']=0x4*-0x50f+0x1f5*-0x1+0x17*0xf7;let _0x392b9c=story['battleReturnNode'];story['battleReturnNode']=null;if(_0x392b9c)story['nodeId']=_0x392b9c;saveStory(),renderStory();}function renderStoryTeam(){storyContainer=document['getElementById']('adventureContainer'),storyContainer['innerHTML']='';let _0x1105b6=el('div','story-node'),_0x3502c1=el('div','story-node-title');_0x3502c1['textContent']='👥\x20La\x20tua\x20squadra',_0x1105b6['appendChild'](_0x3502c1);if(!story['team']['length']){let _0x31e42b=el('div','story-text');_0x31e42b['textContent']='Non\x20hai\x20ancora\x20Pokémon.',_0x1105b6['appendChild'](_0x31e42b);}else{let _0x5b6760=el('div','story-team-grid');story['team']['forEach']((_0x5bf501,_0x5277c2)=>{let _0x12e674=el('div','story-team-card');if(_0x5277c2===story['activeSlot'])_0x12e674['classList']['add']('active');let _0x349377=_0x5bf501['pokemon']['sprites']?.['other']?.['official-artwork']?.['front_default']||_0x5bf501['pokemon']['sprites']?.['front_default']||'';_0x12e674['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22'+_0x349377+'\x22\x20alt=\x22'+_0x5bf501['pokemon']['name']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stc-name\x22>'+capitalize(_0x5bf501['pokemon']['name'])+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stc-lv\x22>Lv\x20'+_0x5bf501['level']+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sb-hpbar\x22><div\x20class=\x22sb-hpfill\x22\x20style=\x22width:'+Math['max'](-0x8d*0x20+0x1*0x1b73+0x9d3*-0x1,_0x5bf501['hp']/_0x5bf501['maxHp']*(-0x1eb2*0x1+-0x11*0x35+-0x3*-0xb89))+'%;background:'+hpColor(_0x5bf501['hp']/_0x5bf501['maxHp'])+'\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stc-hp\x22>'+_0x5bf501['hp']+'/'+_0x5bf501['maxHp']+'\x20HP</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stc-moves\x22>'+_0x5bf501['moves']['map'](_0x5b80ca=>'<span\x20style=\x22border-color:'+getTypeColor(_0x5b80ca['type'])+'\x22>'+_0x5b80ca['name']+'</span>')['join']('')+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x5b6760['appendChild'](_0x12e674);}),_0x1105b6['appendChild'](_0x5b6760);}let _0x4e9797=el('button','story-btn');_0x4e9797['textContent']='←\x20Torna\x20alla\x20storia',_0x4e9797['style']['marginTop']='16px',_0x4e9797['addEventListener']('click',()=>renderStory()),_0x1105b6['appendChild'](_0x4e9797),storyContainer['appendChild'](_0x1105b6);}(function patchAdventureRouting(){document['querySelectorAll']('.mode-btn[data-mode=\x22adventure\x22]')['forEach'](_0x7de1cb=>{let _0x2c7851=_0x7de1cb['cloneNode'](!![]);_0x7de1cb['parentNode']['replaceChild'](_0x2c7851,_0x7de1cb),_0x2c7851['addEventListener']('click',()=>{document['querySelectorAll']('.mode-btn')['forEach'](_0xc8812e=>_0xc8812e['classList']['remove']('active')),_0x2c7851['classList']['add']('active');if(typeof currentMode!=='undefined')currentMode='adventure';document['getElementById']('mainDex')?.['classList']['add']('hidden'),document['getElementById']('mainWho')?.['classList']['add']('hidden'),document['getElementById']('mainWeak')?.['classList']['add']('hidden'),mainAdventure['classList']['remove']('hidden'),renderStory();});});}());
// ===== PATCH: SELEZIONE GENERAZIONE STARTER =====
// Sostituisce prologo_2 con un flusso gen → tipo → starter

const STARTERS_BY_GEN = {
    1: {grass:1,  fire:4,  water:7},
    2: {grass:152, fire:155, water:158},
    3: {grass:252, fire:255, water:258},
    4: {grass:387, fire:390, water:393},
    5: {grass:495, fire:498, water:501},
    6: {grass:650, fire:653, water:656},
    7: {grass:722, fire:725, water:728},
    8: {grass:810, fire:813, water:816},
    9: {grass:906, fire:909, water:912},
};

const GEN_NAMES = {
    1:'Kanto', 2:'Johto', 3:'Hoenn', 4:'Sinnoh',
    5:'Unova', 6:'Kalos', 7:'Alola', 8:'Galar', 9:'Paldea'
};

// Sovrascrive prologo_2 con la selezione generazione
STORY_NODES['prologo_2'] = {
    chapter: 1,
    location: 'Laboratorio di Maren',
    title: 'La scelta del compagno',
    text: () => '«La Cometa non è solo uno spettacolo» dice Maren, grave. «Ogni mille anni risveglia ' + STORY_LEGENDARY_NAME + ', il Pokémon dei Desideri. È inevitabile, è la natura.»\n\n«Ma c\'è una leggenda più cupa: con un antico rituale, qualcuno potrebbe spezzare i Sigilli che proteggono Jirachi e legarlo a sé — costringerlo a esaudire un solo, terribile desiderio. E temo che l\'Ordine del Sigillo voglia fare proprio questo.»\n\nApre una custodia con tre Poké Ball. «Prima che tu parta, scegli il tuo primo compagno. Da quale regione viene?»',
    choices: [
        {label: '🌿 Kanto (Gen I)',   action: 'flag:starter_gen:1;goto:prologo_2b'},
        {label: '🌿 Johto (Gen II)',  action: 'flag:starter_gen:2;goto:prologo_2b'},
        {label: '🌿 Hoenn (Gen III)', action: 'flag:starter_gen:3;goto:prologo_2b'},
        {label: '🌿 Sinnoh (Gen IV)', action: 'flag:starter_gen:4;goto:prologo_2b'},
        {label: '🌿 Unova (Gen V)',   action: 'flag:starter_gen:5;goto:prologo_2b'},
        {label: '🌿 Kalos (Gen VI)',  action: 'flag:starter_gen:6;goto:prologo_2b'},
        {label: '🌿 Alola (Gen VII)', action: 'flag:starter_gen:7;goto:prologo_2b'},
        {label: '🌿 Galar (Gen VIII)',action: 'flag:starter_gen:8;goto:prologo_2b'},
        {label: '🌿 Paldea (Gen IX)', action: 'flag:starter_gen:9;goto:prologo_2b'},
    ]
};

STORY_NODES['prologo_2b'] = {
    chapter: 1,
    location: 'Laboratorio di Maren',
    title: 'Scegli il tuo starter',
    text: () => {
        const gen = parseInt(story.flags.starter_gen) || 1;
        return '«Ottima scelta» sorride Maren. «I Pokémon di ' + (GEN_NAMES[gen] || 'quella regione') + ' hanno carattere. Quale dei tre ti parla di più?»';
    },
    choices: [
        {label: '🌱 Compagno di indole gentile (Erba)',  action: 'starter:grass_gen;goto:prologo_3'},
        {label: '🔥 Compagno di indole ardente (Fuoco)', action: 'starter:fire_gen;goto:prologo_3'},
        {label: '💧 Compagno di indole calma (Acqua)',   action: 'starter:water_gen;goto:prologo_3'},
    ]
};

// Patch runActions per gestire starter:grass_gen / fire_gen / water_gen
const _origRunActions = runActions;
window._storyRunActionsPatched = true;

// Sovrascrive il case 'starter' nella logica delle azioni
// intercettando prima che arrivi a runActions originale
const _origRunActionsRef = runActions;
window.runActions = function(actionStr, extra) {
    // Intercetta starter:*_gen e sostituisce con l'id giusto
    const patched = actionStr.replace(/starter:(grass|fire|water)_gen/g, (match, tipo) => {
        const gen = parseInt(story.flags && story.flags.starter_gen) || 1;
        const map = STARTERS_BY_GEN[gen] || STARTERS_BY_GEN[1];
        const id = map[tipo];
        return 'starter_id:' + id;
    });

    // Gestisci starter_id: manualmente
    if (patched.includes('starter_id:')) {
        const parts = patched.split(';').map(s => s.trim()).filter(Boolean);
        let gotoNode = null;
        parts.forEach(part => {
            if (part.startsWith('starter_id:')) {
                const id = parseInt(part.split(':')[1]);
                const existing = allPokemon.find(p => p.id === id);
                if (existing) {
                    story.team.push(storyMakeMember(existing, 10));
                    story.activeSlot = 0;
                } else {
                    // Fetch e poi continua
                    fetchJSON(BASE_URL + 'pokemon/' + id).then(data => {
                        if (!allPokemon.find(p => p.id === data.id)) allPokemon.push(data);
                        story.team.push(storyMakeMember(data, 10));
                        story.activeSlot = 0;
                        if (gotoNode) { story.nodeId = gotoNode; }
                        saveStory();
                        renderStory();
                    }).catch(() => {
                        if (gotoNode) { story.nodeId = gotoNode; }
                        saveStory();
                        renderStory();
                    });
                    return;
                }
            } else if (part.startsWith('goto:')) {
                gotoNode = part.split(':')[1];
            } else if (part.startsWith('flag:')) {
                const [, key, val] = part.split(':');
                story.flags[key] = val !== undefined ? val : true;
            }
        });
        if (gotoNode) story.nodeId = gotoNode;
        saveStory();
        renderStory();
        return;
    }

    _origRunActionsRef(patched, extra);
};

// ===== PATCH: HUB INIZIALE AVVENTURA =====

function renderAdventureHub() {
    const container = document.getElementById('adventureContainer');
    if (!container) return;
    container.innerHTML = '';

    const wrap = el('div', '');
    wrap.style.cssText = 'max-width:700px;margin:0 auto;padding:20px 16px;';

    // Titolo
    const title = el('div', '');
    title.style.cssText = 'font-family:var(--pixel);font-size:18px;color:var(--white);text-align:center;margin-bottom:6px;text-shadow:0 0 30px rgba(255,255,255,0.2);';
    title.textContent = '⚔️ AVVENTURA';
    wrap.appendChild(title);

    const sub = el('div', '');
    sub.style.cssText = 'color:var(--gray);font-size:13px;font-weight:700;text-align:center;margin-bottom:36px;';
    sub.textContent = 'Scegli come vuoi giocare';
    wrap.appendChild(sub);

    // Griglia card
    const grid = el('div', '');
    grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;';

    // Card STORIA
    const cardStory = el('div', '');
    cardStory.style.cssText = [
        'background:linear-gradient(160deg,#1a1040 0%,#2a1a60 60%,#3d2080 100%)',
        'border:2px solid rgba(180,130,255,0.4)',
        'border-radius:18px',
        'padding:24px 18px',
        'cursor:pointer',
        'transition:transform 0.15s,border-color 0.15s',
        'text-align:center',
        'position:relative',
        'overflow:hidden'
    ].join(';');

    // Stato storia
    const storyStarted = story && story.started && story.nodeId;
    const storyChap = story && story.chapter ? story.chapter : 1;

    cardStory.innerHTML = `
        <div style="font-size:36px;margin-bottom:10px;">📖</div>
        <div style="font-family:var(--pixel);font-size:11px;color:#c8a0ff;margin-bottom:6px;letter-spacing:1px;">LE CRONACHE</div>
        <div style="font-family:var(--pixel);font-size:9px;color:#e8d0ff;margin-bottom:10px;">DI VELMORA</div>
        <div style="font-size:12px;color:rgba(220,200,255,0.7);font-weight:700;line-height:1.5;">Un'avventura narrativa con scelte morali e un leggendario da fermare.</div>
        ${storyStarted ? `<div style="margin-top:12px;font-family:var(--pixel);font-size:7px;color:#c8a0ff;background:rgba(180,130,255,0.15);border-radius:8px;padding:6px 10px;">▸ Riprendi · Cap.${storyChap}</div>` : '<div style="margin-top:12px;font-family:var(--pixel);font-size:7px;color:rgba(200,160,255,0.5);">Nuova storia</div>'}
    `;
    cardStory.addEventListener('mouseenter', () => { cardStory.style.transform = 'translateY(-3px)'; cardStory.style.borderColor = 'rgba(180,130,255,0.8)'; });
    cardStory.addEventListener('mouseleave', () => { cardStory.style.transform = ''; cardStory.style.borderColor = 'rgba(180,130,255,0.4)'; });
    cardStory.addEventListener('click', () => renderStory());
    grid.appendChild(cardStory);

    // Card AVVENTURA LIBERA
    const cardAdv = el('div', '');
    const advRegion = typeof REGIONI !== 'undefined' && game && game.regionId
        ? (REGIONI.find(r => r.id === game.regionId) || null)
        : null;
    const advStarted = game && game.started && game.team && game.team.length > 0;

    cardAdv.style.cssText = [
        'background:linear-gradient(160deg,#0a2010 0%,#1a4020 60%,#2a6030 100%)',
        'border:2px solid rgba(100,200,100,0.4)',
        'border-radius:18px',
        'padding:24px 18px',
        'cursor:pointer',
        'transition:transform 0.15s,border-color 0.15s',
        'text-align:center',
        'position:relative',
        'overflow:hidden'
    ].join(';');

    cardAdv.innerHTML = `
        <div style="font-size:36px;margin-bottom:10px;">🌍</div>
        <div style="font-family:var(--pixel);font-size:11px;color:#80e880;margin-bottom:6px;letter-spacing:1px;">AVVENTURA</div>
        <div style="font-family:var(--pixel);font-size:9px;color:#a0f0a0;margin-bottom:10px;">LIBERA</div>
        <div style="font-size:12px;color:rgba(160,240,160,0.7);font-weight:700;line-height:1.5;">9 regioni, palestre da sfidare, leggendari da catturare. Scegli il tuo percorso.</div>
        ${advStarted && advRegion ? `<div style="margin-top:12px;font-family:var(--pixel);font-size:7px;color:#80e880;background:rgba(100,200,100,0.15);border-radius:8px;padding:6px 10px;">▸ Riprendi · ${advRegion.emoji} ${advRegion.name}</div>` : '<div style="margin-top:12px;font-family:var(--pixel);font-size:7px;color:rgba(120,220,120,0.5);">Nuova campagna</div>'}
    `;
    cardAdv.addEventListener('mouseenter', () => { cardAdv.style.transform = 'translateY(-3px)'; cardAdv.style.borderColor = 'rgba(100,200,100,0.8)'; });
    cardAdv.addEventListener('mouseleave', () => { cardAdv.style.transform = ''; cardAdv.style.borderColor = 'rgba(100,200,100,0.4)'; });
    cardAdv.addEventListener('click', () => renderAdventure());
    grid.appendChild(cardAdv);

    wrap.appendChild(grid);
    container.appendChild(wrap);
}

// Re-patcha il routing per passare per l'hub
(function repatchAdventureRouting() {
    document.querySelectorAll('.mode-btn[data-mode="adventure"]').forEach(btn => {
        const fresh = btn.cloneNode(true);
        btn.parentNode.replaceChild(fresh, btn);
        fresh.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            fresh.classList.add('active');
            if (typeof currentMode !== 'undefined') currentMode = 'adventure';
            document.getElementById('mainDex')?.classList.add('hidden');
            document.getElementById('mainWho')?.classList.add('hidden');
            document.getElementById('mainWeak')?.classList.add('hidden');
            mainAdventure.classList.remove('hidden');
            renderAdventureHub();
        });
    });
}());

// ===== FIX: Switch forzato quando Pokémon muore + Centro Pokémon hub =====

// FIX 1: Sovrascrive storyEnemyTurn per gestire correttamente la morte del Pokémon
// Il bug: quando il Pokémon del giocatore muore, il gioco non forza lo switch
// ma lascia il Pokémon a 0 HP in campo come se potesse ancora agire.
const _origStoryEnemyTurn = storyEnemyTurn;
window.storyEnemyTurn = function() {
    const active = storyActiveMember();
    const enemy = story.wildPokemon;
    if (!enemy || !active) return;

    // Se il Pokémon attivo è già a 0 HP prima che il nemico attacchi,
    // forza subito lo switch invece di continuare
    if (active.hp <= 0) {
        story.battleLog.push(capitalize(active.pokemon.name) + ' è esausto!');
        const nextAlive = story.team.findIndex((m, i) => i !== story.activeSlot && m.hp > 0);
        if (nextAlive >= 0) {
            story.battlePhase = 'switch';
            saveStory();
            renderStory();
            setTimeout(() => renderStorySwitchMenu(document.querySelector('.story-battle'), true), 300);
        } else {
            storyBattleLost();
        }
        return;
    }

    _origStoryEnemyTurn();
};

// FIX 2: Aggiunge Centro Pokémon gratuito all'hub medaglie
// Patch buildGymChoices per inserire il Centro dopo le palestre
const _origBuildGymChoices = buildGymChoices;
window.buildGymChoices = function(container) {
    _origBuildGymChoices(container);

    // Aggiungi Centro Pokémon se qualcuno è ferito
    const hasInjured = story.team.some(m => m.hp > 0 && m.hp < m.maxHp);
    const hasKO = story.team.some(m => m.hp <= 0);
    const needsPP = story.team.some(m => m.hp > 0 && (m.moves || []).some(mv => mv.maxPp != null && mv.pp < mv.maxPp));
    if (!hasInjured && !hasKO && !needsPP) return;

    const btn = el('button', 'story-choice');
    btn.style.borderColor = '#66bb6a';
    btn.style.opacity = '0.9';
    btn.innerHTML = '🏥 Centro Pokémon <span style="opacity:.6">(cura gratuita la squadra)</span>';
    btn.addEventListener('click', () => {
        story.team.forEach(m => {
            if (m.hp > 0) { // non cura i KO — devono esplorare per riprendersi
                m.hp = m.maxHp;
                m.status = null;
                (m.moves || []).forEach(mv => { if (mv.maxPp != null) mv.pp = mv.maxPp; });
            }
        });
        story.battleLog = [];
        saveStory();
        renderStory();
    });
    container.appendChild(btn);
};

// ===== PATCH: BARRA XP + MOSSE LEVEL-UP + EVOLUZIONI (STORIA) =====

// --- Utilità XP ---
function storyXpForNext(lv) {
    return Math.floor(Math.pow(lv + 1, 2.1) * 1.4) - Math.floor(Math.pow(lv, 2.1) * 1.4);
}

// --- Barra XP inline usata nella schermata battaglia e squadra ---
function renderXpBar(member, extraStyle = '') {
    const needed = storyXpForNext(member.level);
    const pct = Math.min(100, Math.floor(((member.xp || 0) / needed) * 100));
    return `<div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;margin-top:3px;${extraStyle}">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#7c4dff,#b388ff);border-radius:2px;transition:width 0.4s ease;"></div>
    </div>
    <div style="font-family:var(--pixel);font-size:5px;color:rgba(180,140,255,0.7);margin-top:1px;">EXP ${member.xp || 0}/${needed}</div>`;
}

// --- Patch renderStoryBattle per aggiungere barra XP sotto HP del giocatore ---
const _origRenderStoryBattle = renderStoryBattle;
window.renderStoryBattle = function(container) {
    _origRenderStoryBattle(container);
    // Trova il pannello HP del giocatore e inietta la barra XP dopo
    const battle = container.querySelector('.story-battle');
    if (!battle) return;
    const hpText = battle.querySelector('.sb-hptext');
    if (!hpText) return;
    const member = storyActiveMember();
    if (!member) return;
    const xpDiv = document.createElement('div');
    xpDiv.innerHTML = renderXpBar(member);
    hpText.parentNode.insertBefore(xpDiv, hpText.nextSibling);
};

// --- Patch renderStoryTeam per mostrare barra XP in ogni card ---
const _origRenderStoryTeam = renderStoryTeam;
window.renderStoryTeam = function() {
    _origRenderStoryTeam();
    // Inietta barra XP in ogni stc-hp della squadra
    const cards = document.querySelectorAll('.story-team-card');
    story.team.forEach((m, i) => {
        const card = cards[i];
        if (!card) return;
        const hpDiv = card.querySelector('.stc-hp');
        if (!hpDiv) return;
        const xpDiv = document.createElement('div');
        xpDiv.style.cssText = 'padding:0 4px;margin-top:4px;';
        xpDiv.innerHTML = renderXpBar(m);
        hpDiv.parentNode.insertBefore(xpDiv, hpDiv.nextSibling);
    });
};

// --- Level-up moves: fetch da PokéAPI e restituisce mosse apprese fino al livello dato ---
function fetchLevelUpMoves(pokemonData, level) {
    return fetchJSON(pokemonData.species.url)
        .then(species => fetchJSON(species.evolution_chain.url))
        .catch(() => null)
        .then(() => {
            // Mosse apprese per level-up da pokemonData.moves
            const learnset = (pokemonData.moves || [])
                .filter(m => m.version_group_details.some(
                    vgd => vgd.move_learn_method.name === 'level-up' && vgd.level_learned_at === level
                ))
                .map(m => m.move.name);
            return learnset;
        })
        .catch(() => []);
}

// Costruisce un oggetto mossa da nome (cerca in TYPE_MOVES o usa fallback)
function storyBuildMove(moveName, type) {
    // Cerca la mossa nei pool TYPE_MOVES
    for (const [t, moves] of Object.entries(TYPE_MOVES || {})) {
        const found = moves.find(m => m.name.toLowerCase() === moveName.replace(/-/g, ' ').toLowerCase());
        if (found) return { ...found, type: t, pp: found.maxPp || 15, maxPp: found.maxPp || 15 };
    }
    // Fallback generico
    return { name: moveName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), power: 40, acc: 90, type: type || 'normal', pp: 15, maxPp: 15 };
}

// --- Mostra overlay level-up con eventuale nuova mossa ---
function showStoryLevelUpOverlay(member, newLevel, newMoveName, callback) {
    const overlay = el('div', 'catch-result-overlay');
    overlay.style.zIndex = '9995';
    const card = el('div', 'catch-result-card');

    const typeColor = getTypeColor ? getTypeColor(member.pokemon.types[0].type.name) : '#7c4dff';

    let html = `
        <div style="font-size:28px;margin-bottom:8px;">⬆️</div>
        <div style="font-family:var(--pixel);font-size:13px;color:var(--gold);margin-bottom:6px;">LEVEL UP!</div>
        <div style="font-size:15px;font-weight:800;color:var(--white);margin-bottom:4px;">${capitalize(member.pokemon.name)}</div>
        <div style="font-family:var(--pixel);font-size:9px;color:var(--gold);">Lv ${newLevel - 1} → Lv ${newLevel}</div>
    `;

    const finish = () => { overlay.remove(); callback(); };

    // Riga descrittiva di una mossa (tipo · potenza · PP)
    const moveMeta = (mv) => {
        const t = mv.type || 'normal';
        const pp = (mv.pp != null) ? mv.pp : ((mv.maxPp != null) ? mv.maxPp : '—');
        return `${String(t).toUpperCase()} · Pot.${mv.power || '—'} · PP ${pp}`;
    };

    // Aggiunge alla card un bottone primario "Continua →"
    const addContinue = () => {
        const btn = el('button', 'who-next-btn');
        btn.textContent = 'Continua →';
        btn.addEventListener('click', finish);
        card.appendChild(btn);
    };

    // Nessuna nuova mossa: comportamento classico
    if (!newMoveName) {
        card.innerHTML = html;
        addContinue();
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        return;
    }

    const move = storyBuildMove(newMoveName, member.pokemon.types[0].type.name);
    member.moves = member.moves || [];

    // Mossa già conosciuta: niente da fare
    const alreadyKnown = member.moves.some(m => (m.name || '').toLowerCase() === (move.name || '').toLowerCase());
    if (alreadyKnown) {
        card.innerHTML = html + `
            <div style="margin-top:14px;font-size:12px;color:var(--gray);font-weight:700;">
                ${capitalize(member.pokemon.name)} conosce già <b style="color:var(--white)">${move.name}</b>.
            </div>`;
        addContinue();
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        return;
    }

    const newMoveBox = `
        <div style="margin-top:14px;padding:10px 14px;background:rgba(255,255,255,0.05);border-radius:10px;border:1px solid ${typeColor}40;">
            <div style="font-family:var(--pixel);font-size:7px;color:${typeColor};margin-bottom:4px;">NUOVA MOSSA</div>
            <div style="font-weight:800;color:var(--white);font-size:13px;">${move.name}</div>
            <div style="font-size:11px;color:var(--gray);font-weight:700;margin-top:2px;">${moveMeta(move)}</div>
        </div>`;

    // CASO A — c'è ancora spazio (< 4 mosse): chiedi se impararla
    if (member.moves.length < 4) {
        card.innerHTML = html + newMoveBox + `
            <div style="margin-top:12px;font-size:12px;color:var(--gray);font-weight:700;">
                Vuoi insegnare <b style="color:var(--white)">${move.name}</b> a ${capitalize(member.pokemon.name)}?
            </div>`;

        const row = el('div');
        row.style.cssText = 'display:flex;gap:8px;margin-top:14px;justify-content:center;flex-wrap:wrap;';

        const learnBtn = el('button', 'who-next-btn');
        learnBtn.textContent = '📘 Impara';
        learnBtn.addEventListener('click', () => {
            member.moves.push(move);
            if (typeof saveStory === 'function') saveStory();
            finish();
        });

        const skipBtn = el('button', 'who-next-btn');
        skipBtn.style.opacity = '0.7';
        skipBtn.textContent = '✋ Salta';
        skipBtn.addEventListener('click', finish);

        row.appendChild(learnBtn);
        row.appendChild(skipBtn);
        card.appendChild(row);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        return;
    }

    // CASO B — moveset pieno (4 mosse): scegli quale dimenticare, oppure salta
    card.innerHTML = html + newMoveBox + `
        <div style="margin-top:12px;font-size:12px;color:var(--gray);font-weight:700;">
            ${capitalize(member.pokemon.name)} conosce già 4 mosse.<br>
            Quale vuoi dimenticare per imparare <b style="color:var(--white)">${move.name}</b>?
        </div>`;

    const list = el('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:6px;margin-top:12px;';

    member.moves.forEach((mv, idx) => {
        const mvColor = getTypeColor ? getTypeColor(mv.type || 'normal') : '#888';
        const b = el('button');
        b.style.cssText = `display:flex;flex-direction:column;align-items:flex-start;gap:2px;width:100%;padding:8px 12px;border:1px solid ${mvColor}55;border-radius:10px;background:rgba(255,255,255,0.04);color:var(--white);cursor:pointer;text-align:left;transition:background .15s;`;
        b.innerHTML = `
            <span style="font-weight:800;font-size:12px;">${mv.name}</span>
            <span style="font-size:10px;color:var(--gray);font-weight:700;">${moveMeta(mv)}</span>`;
        b.addEventListener('mouseenter', () => { b.style.background = mvColor + '22'; });
        b.addEventListener('mouseleave', () => { b.style.background = 'rgba(255,255,255,0.04)'; });
        b.addEventListener('click', () => {
            member.moves[idx] = move;
            if (typeof saveStory === 'function') saveStory();
            finish();
        });
        list.appendChild(b);
    });
    card.appendChild(list);

    const skipBtn = el('button', 'who-next-btn');
    skipBtn.style.marginTop = '10px';
    skipBtn.style.opacity = '0.8';
    skipBtn.textContent = `✋ Non imparare ${move.name}`;
    skipBtn.addEventListener('click', finish);
    card.appendChild(skipBtn);

    overlay.appendChild(card);
    document.body.appendChild(overlay);
}

// --- Evoluzioni nella storia ---
function storyCheckEvolution(member, callback) {
    if (!member || !member.pokemon || !member.pokemon.species) { callback(); return; }

    fetchJSON(member.pokemon.species.url)
        .then(species => fetchJSON(species.evolution_chain.url))
        .then(chain => {
            // Trova il target evoluzione per level-up
            function findEvoChain(node, targetId) {
                if (!node) return null;
                const nodeId = parseInt(node.species.url.split('/').filter(Boolean).pop());
                if (nodeId === targetId) {
                    // Cerca evoluzione per level-up
                    for (const next of (node.evolves_to || [])) {
                        for (const detail of (next.evolution_details || [])) {
                            if (detail.trigger?.name === 'level-up' && detail.min_level && member.level >= detail.min_level) {
                                return parseInt(next.species.url.split('/').filter(Boolean).pop());
                            }
                        }
                    }
                    return null;
                }
                for (const next of (node.evolves_to || [])) {
                    const result = findEvoChain(next, targetId);
                    if (result !== null) return result;
                }
                return null;
            }

            const evoId = findEvoChain(chain.chain, member.pokemon.id);
            if (!evoId) { callback(); return; }

            // Fetch Pokémon evoluto
            const existing = allPokemon.find(p => p.id === evoId);
            const doEvolve = (evoData) => {
                if (!allPokemon.find(p => p.id === evoData.id)) allPokemon.push(evoData);
                showStoryEvoOverlay(member, evoData, callback);
            };
            if (existing) doEvolve(existing);
            else fetchJSON(BASE_URL + 'pokemon/' + evoId).then(doEvolve).catch(callback);
        })
        .catch(callback);
}

function showStoryEvoOverlay(member, evoData, callback) {
    const overlay = el('div', 'catch-result-overlay');
    overlay.style.zIndex = '9994';

    const card = el('div', 'catch-result-card');
    const oldName = capitalize(member.pokemon.name);
    const newName = capitalize(evoData.name);
    const sprite = evoData.sprites?.other?.['official-artwork']?.front_default || evoData.sprites?.front_default || '';

    card.innerHTML = `
        <div style="font-family:var(--pixel);font-size:10px;color:var(--gold);margin-bottom:10px;">EVOLUZIONE!</div>
        <img src="${sprite}" style="width:100px;height:100px;object-fit:contain;image-rendering:pixelated;margin-bottom:10px;animation:floatPoke 2s ease-in-out infinite;">
        <div style="font-size:16px;font-weight:800;color:var(--white);">⭐ ${newName}!</div>
        <div style="font-size:12px;color:var(--gray);font-weight:700;margin-top:4px;">${oldName} → ${newName} · Lv${member.level}</div>
    `;

    // Aggiorna il membro
    const oldHp = member.maxHp;
    member.pokemon = evoData;
    member.maxHp = calcHp(evoData, member.level, member.ivs?.hp || 0);
    member.hp = Math.min(member.hp + (member.maxHp - oldHp), member.maxHp);
    member.moves = getPokemonMoves(evoData, member.level);
    if (typeof unlockTCGCard === 'function') unlockTCGCard(evoData.id, { holo: false, source: 'evolution' });
    saveStory();

    const btn = el('button', 'who-next-btn');
    btn.textContent = 'Fantastico! →';
    btn.addEventListener('click', () => { overlay.remove(); callback(); });
    card.appendChild(btn);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
}

// --- Sovrascrive storyBattleWon per gestire level-up con mosse + evoluzioni ---
const _origStoryBattleWon = storyBattleWon;
window.storyBattleWon = function() {
    const enemy = story.wildPokemon;
    if (!enemy) { _origStoryBattleWon(); return; }

    // Calcola XP da guadagnare
    const member = storyActiveMember();
    if (!member) { _origStoryBattleWon(); return; }

    const xpGain = Math.floor(enemy.level * 1.5) + 5;
    member.xp = (member.xp || 0) + xpGain;
    story.battleLog.push(capitalize(enemy.pokemon.name) + ' è stato sconfitto! +' + xpGain + ' EXP');

    // Level-up loop
    const levelUps = [];
    let needed = storyXpForNext(member.level);
    while (member.xp >= needed && member.level < 100) {
        member.xp -= needed;
        member.level++;
        const hpGain = calcHp(member.pokemon, member.level, member.ivs?.hp || 0) - member.maxHp;
        member.maxHp = calcHp(member.pokemon, member.level, member.ivs?.hp || 0);
        member.hp = Math.min(member.hp + hpGain, member.maxHp);
        levelUps.push(member.level);
        story.battleLog.push('⬆️ ' + capitalize(member.pokemon.name) + ' sale al Lv' + member.level + '!');
        needed = storyXpForNext(member.level);
    }

    // Gestisci team battle enemy next
    if (story.enemyTeam && enemyTeamNext()) {
        story.battlePhase = 'player';
        saveStory();
        renderStory();
        return;
    }

    // Premi monete per trainer battle
    if (['trainer','rival','boss','gym','guardiana'].includes(story._battleType)) {
        const reward = story._battleType === 'boss' ? 500 : story._battleType === 'guardiana' ? 400 : story._battleType === 'rival' ? 200 : story._battleType === 'gym' ? 150 : 80;
        story.monete += reward;
        story.battleLog.push('Hai ricevuto ' + reward + '₽!');
    }
    if (story._battleType === 'gym' && story._currentGym) {
        if (!story.badges.includes(story._currentGym)) {
            story.badges.push(story._currentGym);
            const gym = gymByKey(story._currentGym);
            story.battleLog.push('🏅 Hai ottenuto la ' + (gym ? gym.badge : 'Medaglia') + '!');
        }
        story._currentGym = null;
    }

    saveStory();

    // Catena: level-up overlay → mosse → evoluzione → fine battaglia
    function processLevelUps(idx, done) {
        if (idx >= levelUps.length) { done(); return; }
        const lv = levelUps[idx];
        // Cerca nuove mosse per questo livello
        fetchLevelUpMoves(member.pokemon, lv)
            .then(moves => {
                const newMove = moves[0] || null;
                if (newMove) {
                    showStoryLevelUpOverlay(member, lv, newMove, () => processLevelUps(idx + 1, done));
                } else {
                    showStoryLevelUpOverlay(member, lv, null, () => processLevelUps(idx + 1, done));
                }
            })
            .catch(() => {
                showStoryLevelUpOverlay(member, lv, null, () => processLevelUps(idx + 1, done));
            });
    }

    function afterLevelUps() {
        storyCheckEvolution(member, () => {
            renderStoryBattleEnd('win');
        });
    }

    if (levelUps.length > 0) {
        processLevelUps(0, afterLevelUps);
    } else {
        afterLevelUps();
    }
};

/* =====================================================================
 * PATCH: BATTAGLIA FLUIDA (smooth combat)
 * ---------------------------------------------------------------------
 * Riscrive SOLO il rendering della battaglia: aggiorna il DOM in-place a
 * ogni azione invece di ricostruirlo da zero. Nessuna logica di gioco
 * cambia. Vengono intercettati due punti:
 *   - renderStory()       -> durante la battaglia fa un update diff invece
 *                            di azzerare il container e ridisegnare tutto;
 *   - renderStoryBattle() -> costruisce una volta lo scenario "transition
 *                            ready" (barre HP che animano, log scrollabile,
 *                            pannelli flashabili, sprite animabili).
 *
 * Requisiti coperti:
 *   1) barre HP animate in-place (la CSS transition esistente ora "vede"
 *      lo stesso elemento e interpola la larghezza)
 *   2) sprite: lunge di chi attacca + shake di chi subisce il colpo
 *   3) log scrollabile, fade-in solo sulle righe NUOVE (non tutte)
 *   4) flash sul pannello colpito: rosso per danno, oro se superefficace
 *   5) mosse/azioni DISABILITATE (non rimosse) durante il turno nemico
 * ===================================================================== */
(function () {
    'use strict';

    // riferimenti agli originali catturati prima dell'override
    const _origRenderStory = renderStory;

    // ---- stile iniettato una sola volta (no dipendenze da Style.css) ----
    if (!document.getElementById('sb-smooth-styles')) {
        const css = document.createElement('style');
        css.id = 'sb-smooth-styles';
        css.textContent = `
            .story-battle .sb-log { max-height: 96px; overflow-y: auto; scroll-behavior: smooth; }
            .story-battle .sb-log div { animation: fadeInUp 0.28s ease both; }
            .sb-actions.is-locked .sb-move,
            .sb-subactions.is-locked .sb-subbtn { opacity: 0.4; cursor: default; pointer-events: none; }
            .sb-enemy, .sb-me { border-radius: 6px; }
            @keyframes sbLungeMe {
                0%   { transform: translateX(0)   scale(1); }
                40%  { transform: translateX(26px) scale(1.08); }
                100% { transform: translateX(0)   scale(1); }
            }
            @keyframes sbLungeEnemy {
                0%   { transform: translateX(0)    scale(1); }
                40%  { transform: translateX(-26px) scale(1.08); }
                100% { transform: translateX(0)    scale(1); }
            }
            @keyframes sbHitShake {
                0%,100% { transform: translateX(0); }
                15% { transform: translateX(-8px); }
                30% { transform: translateX(8px); }
                45% { transform: translateX(-6px); }
                60% { transform: translateX(6px); }
                75% { transform: translateX(-3px); }
            }
            @keyframes sbFaint {
                0%   { transform: translateY(0) scale(1);    opacity: 1; }
                100% { transform: translateY(70px) scale(0.6); opacity: 0; }
            }
            @keyframes sbPanelFlash {
                0%   { box-shadow: inset 0 0 0 9999px rgba(233,69,96,0); }
                30%  { box-shadow: inset 0 0 0 9999px rgba(233,69,96,0.30); }
                100% { box-shadow: inset 0 0 0 9999px rgba(233,69,96,0); }
            }
            @keyframes sbPanelFlashSuper {
                0%   { box-shadow: inset 0 0 0 9999px rgba(245,197,66,0); }
                25%  { box-shadow: inset 0 0 0 9999px rgba(245,197,66,0.45); }
                100% { box-shadow: inset 0 0 0 9999px rgba(245,197,66,0); }
            }
        `;
        document.head.appendChild(css);
    }

    // stringhe animazione "a riposo" degli sprite (per ripristinarle dopo un one-shot)
    const FLOAT_ENEMY = 'floatBob 3s ease-in-out infinite';
    const FLOAT_ME    = 'floatBob 3s ease-in-out infinite 0.8s';

    // snapshot dello stato precedente, usato per il diffing
    let prev = null;

    // ---------------------------------------------------------------- utils
    function artwork(member) {
        return member.pokemon.sprites?.other?.['official-artwork']?.front_default
            || member.pokemon.sprites?.front_default || '';
    }
    function enemyArtwork(enemy) {
        return (enemy.isShiny && enemy.pokemon.sprites?.other?.['official-artwork']?.front_shiny)
            || enemy.pokemon.sprites?.other?.['official-artwork']?.front_default
            || enemy.pokemon.sprites?.front_default || '';
    }
    function hpPct(m) { return Math.max(0, Math.round((m.hp / m.maxHp) * 1000) / 10); }

    function nameLine(unit) {
        return capitalize(unit.pokemon.name)
            + ' <span class="sb-lv">Lv' + unit.level + '</span> '
            + (unit.status ? statusBadge(unit.status) : '');
    }

    function snapshot() {
        const me = storyActiveMember();
        const en = story.wildPokemon;
        return {
            myId: me ? me.pokemon.id : null,
            mySlot: story.activeSlot,
            myHp: me ? me.hp : 0,
            enId: en ? en.pokemon.id : null,
            enHp: en ? en.hp : 0,
            logLen: story.battleLog.length,
            phase: story.battlePhase
        };
    }

    // anima un elemento una sola volta, poi ripristina l'animazione "a riposo"
    function oneShot(elm, anim, restore) {
        if (!elm) return;
        elm.style.animation = 'none';
        void elm.offsetWidth; // forza il reflow così l'animazione riparte
        elm.style.animation = anim;
        elm.addEventListener('animationend', function h() {
            elm.style.animation = restore || '';
            elm.removeEventListener('animationend', h);
        }, { once: true });
    }

    function flashPanel(panel, isSuper) {
        if (!panel) return;
        panel.style.animation = 'none';
        void panel.offsetWidth;
        panel.style.animation = (isSuper ? 'sbPanelFlashSuper' : 'sbPanelFlash') + ' 0.5s ease';
        panel.addEventListener('animationend', function h() {
            panel.style.animation = '';
            panel.removeEventListener('animationend', h);
        }, { once: true });
    }

    // markup interno del pannello nemico (riusato a creazione e a swap di squadra)
    function enemyInnerHTML(enemy) {
        let dots = '';
        if (story.enemyTeam && story.enemyTeam.length > 1) {
            const total = story.enemyTeam.length;
            const alive = total - story.enemyActiveIdx;
            dots = '<div class="sb-team-dots">' + '\u25cf'.repeat(alive) + '\u25cb'.repeat(total - alive) + '</div>';
        }
        const trainer = enemy.trainerName
            ? '<div style="font-family:var(--pixel);font-size:6px;color:var(--accent);margin-bottom:3px;">' + enemy.trainerName + '</div>'
            : '';
        return trainer
            + '<div class="sb-name">' + nameLine(enemy) + '</div>'
            + '<div class="sb-hpbar"><div class="sb-hpfill" style="width:' + hpPct(enemy) + '%;background:' + hpColor(enemy.hp / enemy.maxHp) + '"></div></div>'
            + dots
            + '<img class="sb-sprite sb-enemy-sprite" src="' + enemyArtwork(enemy) + '" alt="' + enemy.pokemon.name + '">';
    }

    // area azioni: SEMPRE presente; disabilitata quando non è il turno del giocatore
    function buildActionArea(battleEl) {
        const member = storyActiveMember();
        const locked = story.battlePhase !== 'player';

        const actions = el('div', 'sb-actions');
        if (locked) actions.classList.add('is-locked');
        member.moves.forEach((mv, i) => {
            const b = el('button', 'sb-move');
            b.style.borderColor = getTypeColor(mv.type);
            b.innerHTML = '<span class="sb-move-name">' + mv.name + '</span>'
                + '<span class="sb-move-meta">' + mv.type.toUpperCase() + ' \u00b7 Pot.' + (mv.power || '-')
                + ' \u00b7 PP ' + mv.pp + '/' + mv.maxPp + '</span>';
            b.disabled = locked || mv.pp <= 0;
            if (!locked) b.addEventListener('click', () => storyPlayerAttack(mv, i));
            actions.appendChild(b);
        });

        const subs = el('div', 'sb-subactions');
        if (locked) subs.classList.add('is-locked');
        const addSub = (label, handler) => {
            const b = el('button', 'sb-subbtn');
            b.textContent = label;
            b.disabled = locked;
            if (!locked) b.addEventListener('click', handler);
            subs.appendChild(b);
        };
        if (story._canCatch) addSub('\ud83c\udfaf Cattura', () => renderStoryCatchMenu(battleEl));
        if (story.team.length > 1) addSub('\ud83d\udd04 Cambia', () => renderStorySwitchMenu(battleEl));
        addSub('\ud83c\udf92 Borsa', () => renderStoryBagMenu(battleEl));
        if (story._battleType === 'wild') addSub('\ud83c\udfc3 Fuggi', () => storyFlee());

        return { actions, subs };
    }

    // ------------------------------------------------ costruzione iniziale
    function buildBattle(container) {
        const enemy = story.wildPokemon;
        const member = storyActiveMember();
        if (!enemy || !member) { story._inBattle = false; _origRenderStory(); return; }

        const battle = el('div', 'story-battle');
        const field = el('div', 'sb-field');

        const me = el('div', 'sb-me');
        me.innerHTML =
            '<img class="sb-sprite sb-my-sprite" src="' + artwork(member) + '" alt="' + member.pokemon.name + '">'
            + '<div class="sb-name">' + nameLine(member) + '</div>'
            + '<div class="sb-hpbar"><div class="sb-hpfill" style="width:' + hpPct(member) + '%;background:' + hpColor(member.hp / member.maxHp) + '"></div></div>'
            + '<div class="sb-hptext">' + member.hp + '/' + member.maxHp + ' HP</div>'
            + '<div class="sb-xp"></div>';
        field.appendChild(me);

        const en = el('div', 'sb-enemy');
        en.innerHTML = enemyInnerHTML(enemy);
        field.appendChild(en);

        battle.appendChild(field);

        const log = el('div', 'sb-log');
        log.innerHTML = story.battleLog.slice(-8).map(l => '<div>' + l + '</div>').join('');
        battle.appendChild(log);

        const xp = me.querySelector('.sb-xp');
        if (xp && typeof renderXpBar === 'function') xp.innerHTML = renderXpBar(member);

        const { actions, subs } = buildActionArea(battle);
        battle.appendChild(actions);
        battle.appendChild(subs);

        container.appendChild(battle);
        log.scrollTop = log.scrollHeight;
        prev = snapshot();
    }

    // ------------------------------------------------- update incrementale
    function updateBattle(battle) {
        const member = storyActiveMember();
        const enemy = story.wildPokemon;
        if (!member || !enemy) return;

        // un'azione è avvenuta: chiudi eventuali menu aperti (cattura/cambio/borsa)
        battle.querySelectorAll('.sb-menu').forEach(m => m.remove());

        const meEl   = battle.querySelector('.sb-me');
        const enEl   = battle.querySelector('.sb-enemy');
        const log    = battle.querySelector('.sb-log');
        const mySprite = meEl.querySelector('.sb-my-sprite');
        const enSprite = enEl.querySelector('.sb-enemy-sprite');

        const p = prev || snapshot();
        const wasPlayerTurn = p.phase === 'player';
        const wasEnemyTurn  = p.phase === 'enemy';

        // ---- log: aggiungi solo le righe nuove (fade-in via CSS) ----
        let newLines = [];
        if (story.battleLog.length < p.logLen) {
            log.innerHTML = story.battleLog.slice(-8).map(l => '<div>' + l + '</div>').join('');
        } else {
            newLines = story.battleLog.slice(p.logLen);
            newLines.forEach(line => {
                const d = document.createElement('div');
                d.innerHTML = line;
                log.appendChild(d);
            });
            while (log.children.length > 30) log.removeChild(log.firstChild);
        }
        const superHit = newLines.some(l => /superefficace/i.test(l));

        // ---- lato nemico ----
        if (enemy.pokemon.id !== p.enId) {
            // nuovo Pokémon avversario (squadra): ridisegna il pannello
            enEl.innerHTML = enemyInnerHTML(enemy);
            const fresh = enEl.querySelector('.sb-enemy-sprite');
            oneShot(fresh, 'sbLungeEnemy 0.4s ease', FLOAT_ENEMY);
        } else {
            const fill = enEl.querySelector('.sb-hpfill');
            const text = enEl.querySelector('.sb-hptext'); // il nemico potrebbe non avere hptext
            const nm   = enEl.querySelector('.sb-name');
            if (fill) { fill.style.width = hpPct(enemy) + '%'; fill.style.background = hpColor(enemy.hp / enemy.maxHp); }
            if (text) text.textContent = enemy.hp + '/' + enemy.maxHp + ' HP';
            if (nm) nm.innerHTML = nameLine(enemy);
            if (enemy.hp < p.enHp) {
                oneShot(enSprite, 'sbHitShake 0.45s ease', FLOAT_ENEMY);
                flashPanel(enEl, superHit);
                if (wasPlayerTurn) oneShot(mySprite, 'sbLungeMe 0.4s ease', FLOAT_ME);
            }
            if (enemy.hp <= 0) oneShot(enSprite, 'sbFaint 0.6s ease forwards', FLOAT_ENEMY);
        }

        // ---- lato giocatore ----
        const myFill = meEl.querySelector('.sb-hpfill');
        const myText = meEl.querySelector('.sb-hptext');
        const myName = meEl.querySelector('.sb-name');
        const playerChanged = (member.pokemon.id !== p.myId) || (story.activeSlot !== p.mySlot);

        if (playerChanged) {
            // cambio Pokémon: aggiorna senza animazione di danno, salta la transition HP
            mySprite.src = artwork(member);
            mySprite.alt = member.pokemon.name;
            myName.innerHTML = nameLine(member);
            myFill.style.transition = 'none';
            myFill.style.width = hpPct(member) + '%';
            myFill.style.background = hpColor(member.hp / member.maxHp);
            void myFill.offsetWidth;
            myFill.style.transition = '';
            myText.textContent = member.hp + '/' + member.maxHp + ' HP';
            oneShot(mySprite, 'sbLungeMe 0.45s ease', FLOAT_ME);
        } else {
            myFill.style.width = hpPct(member) + '%';
            myFill.style.background = hpColor(member.hp / member.maxHp);
            myText.textContent = member.hp + '/' + member.maxHp + ' HP';
            myName.innerHTML = nameLine(member);
            if (member.hp < p.myHp) {
                oneShot(mySprite, 'sbHitShake 0.45s ease', FLOAT_ME);
                flashPanel(meEl, superHit);
                if (wasEnemyTurn) oneShot(enSprite, 'sbLungeEnemy 0.4s ease', FLOAT_ENEMY);
            }
            if (member.hp <= 0) oneShot(mySprite, 'sbFaint 0.6s ease forwards', FLOAT_ME);
        }

        // ---- barra XP ----
        const xp = meEl.querySelector('.sb-xp');
        if (xp && typeof renderXpBar === 'function') xp.innerHTML = renderXpBar(member);

        // ---- area azioni (sempre presente, disabilitata fuori turno) ----
        const oldActions = battle.querySelector('.sb-actions');
        const oldSubs = battle.querySelector('.sb-subactions');
        const { actions, subs } = buildActionArea(battle);
        if (oldActions) battle.replaceChild(actions, oldActions); else battle.appendChild(actions);
        if (oldSubs) battle.replaceChild(subs, oldSubs); else battle.appendChild(subs);

        log.scrollTop = log.scrollHeight;
        prev = snapshot();
    }

    // -------------------------------------------------------- override API
    window.renderStoryBattle = function (container) {
        buildBattle(container);
    };

    window.renderStory = function () {
        const container = document.getElementById('adventureContainer');
        if (story._inBattle && container) {
            const battle = container.querySelector('.story-battle');
            const member = storyActiveMember();
            const enemy = story.wildPokemon;
            if (battle && member && enemy) {   // battaglia già a schermo -> update fluido
                updateBattle(battle);
                return;
            }
        }
        prev = null;            // uscita/ingresso battaglia: reset del diff
        _origRenderStory();     // percorso originale (intro / nodo / build battaglia)
    };
})();
