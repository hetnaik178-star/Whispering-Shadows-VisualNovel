const STORY_REALM = {
  id:'realm', title:'The Sunken Realm', genre:'High Fantasy', genreClass:'genre-fantasy',
  cover:'../../Assets/images/cover_fantasy_epic_1775157930197.png',
  desc:'An ancient kingdom slumbers beneath the waves. You must wake it before the dark tide rises.',
  synopsis:'A thousand years ago, the elven city of Aethelgard sank beneath the ocean to escape the Shadow King. You are a mapmaker who found the keystone that can raise it.',
  duration:'~90 min', endings:'7 Endings', choiceCount:'150+ Choices',
  startMusic:'bodleasons-alone-296348.mp3',
  stats:[
    {id:'magic',name:'Ancient Magic',color:'#10b981',max:100,start:10},
    {id:'courage',name:'Courage',color:'#d4a843',max:100,start:30},
    {id:'corruption',name:'Shadow',color:'#8a5cf5',max:100,start:5}
  ],
  scenes:{},
  episodes:[
    // ═══════ EPISODE 1: THE KEYSTONE ═══════
    {
      title:'The Keystone',
      desc:'A warm stone. A terrified sailor. Shadow Walkers in the tavern.',
      thumb:'../../Assets/images/Golden crystal atop elven temple.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'bodleasons-alone-296348.mp3',
      startNode:'rr1_1',
      nodes:{
        rr1_1:{bg:'MysteriousFoggyForest.png',video:'Realm1.mp4',mood:'mystery',ambience:'wind',milestone:{icon:'🗝️',title:'The Keystone',desc:'An ancient key to a sunken kingdom'},speaker:'narrator',text:'The Drowned Coast. Where the land meets the sea like an old wound that never healed. Fishing villages cling to the cliffs. Every grandmother tells stories of a city beneath the waves.',next:'rr1_2'},
        rr1_2:{speaker:'narrator',text:'{warm}Aethelgard{/warm} — the jewel of the elven world. Pearl spires, crystal bridges, libraries holding the mathematical secrets of creation. Swallowed by the ocean a thousand years ago.',next:'rr1_3'},
        rr1_3:{speaker:'inner',text:'Nobody believes the stories anymore. But three days ago, in a smuggler\'s market, a terrified sailor pressed a stone into my hand and {italic}ran{/italic}.',next:'rr1_4'},
        rr1_4:{bg:'Golden crystal atop elven temple.png',speaker:'narrator',text:'Smooth as river glass. {warm}Warm{/warm} to the touch even in freezing rain. Runes glow faintly along its surface — not carved, but {glow}alive{/glow}, pulsing with the tide.',next:'rr1_5'},
        rr1_5:{speaker:'third',text:'The Keystone of Aethelgard. Last held by an elven queen who pressed it into a servant\'s hands as the ocean swallowed her throne room. "Guard this. Until someone brave enough comes."',next:'rr1_6'},
        rr1_6:{bg:'ahmetyuksek-coffee-9380550.jpg',speaker:'narrator',text:'The Salt & Anchor tavern. Rain lashes the windows. The fire crackles. You should be planning. Instead, you\'re watching the stone\'s pulse.',next:'rr1_7'},
        rr1_7:{speaker:'ronan',speakerColor:'c-teal',text:'"You\'ve been staring at your pocket for twenty minutes. If that thing is real, you know what it means."',next:'rr1_8'},
        rr1_8:{speaker:'narrator',text:'"It means the stories are true. Aethelgard. The {glow}Wellspring of Magic{/glow}. All of it."',next:'rr1_9'},
        rr1_9:{speaker:'ronan',speakerColor:'c-teal',text:'"It also means the Shadow King is real. Aethelgard sank {italic}itself{/italic} to escape him. If you raise the city, you might raise the thing it was hiding from."',next:'rr1_10'},
        rr1_10:{speaker:'inner',text:'The Shadow King. A being of pure darkness who {blood}consumed{/blood} entire civilizations. The most powerful magic in existence could only {italic}hide{/italic} from it.',next:'rr1_11'},
        rr1_9b:{speaker:'ronan',speakerColor:'c-teal',text:'"The last person who held a Keystone was Queen Aelindra herself. Three thousand years ago. You know what happened to her?"',next:'rr1_9c'},
        rr1_9c:{speaker:'inner',text:'I know exactly what happened to her. Everyone does — it is the oldest ghost story in the known world. Queen Aelindra drowned with her city rather than surrender the Keystone to the Shadow King.',next:'rr1_9d'},
        rr1_9d:{speaker:'ronan',speakerColor:'c-teal',text:'"She drowned. With {italic}everything she loved{/italic}." He leans forward. "Is that the kind of adventure you are signing up for? Because I want to make sure we are both being honest about what this {blood}costs{/blood}."',next:'rr1_9e'},
        rr1_9e:{speaker:'kael',speakerColor:'c-gold',text:'"...Yes."',next:'rr1_9f'},
        rr1_9f:{speaker:'ronan',speakerColor:'c-teal',text:'A silence. Then he drains his cup, slams it down, and grins with the resigned joy of a man who has just decided to {warm}do something beautiful and stupid{/warm}. "Right then. I am in."',next:'rr1_10'},
        rr1_11:{fx:'shake',bg:'Eerie obsidian bridge over glowing abyss.png',speaker:'narrator',text:'The tavern door bursts open. Wind howls in carrying the smell of something {blood}rotten{/blood}. The fire dims. Every candle flickers simultaneously.',next:'rr1_12'},
        rr1_12:{speaker:'narrator',text:'Three figures. Cloaks the color of ash. They don\'t walk — they {glitch}glide{/glitch}. The barkeep\'s hand shakes too badly to grip his cudgel.',next:'rr1_13'},
        rr1_13:{speaker:'third',text:'Shadow Walkers. Servants of the Shadow King. Beings of hollow darkness — {blood}absence{/blood} given purpose.',next:'rr1_14'},
        rr1_14:{speaker:'narrator',text:'The lead Walker turns its faceless gaze across the tavern. Not darkness under the hood — {italic}nothing{/italic}. A void where a face should be.',next:'rr1_15'},
        rr1_15:{speaker:'narrator',text:'The stone pulses faster — a frightened heartbeat. It {italic}remembers{/italic} these things.',choices:[
          {text:'Grab Ronan and run. Out the back, into the storm.',hint:'Survive to fight another day',next:'rr1_16a',effects:{courage:-5}},
          {text:'Channel the stone\'s power. It\'s warming...',hint:'Use magic — risky but powerful',next:'rr1_16b',effects:{magic:20,corruption:10},fx:'flash'},
          {text:'Throw a chair at the lead Walker. Distract them.',hint:'Mortal defiance — no magic needed',next:'rr1_16d',effects:{courage:15}},
          {text:'Hide the stone. Pretend you don\'t have it.',hint:'Deception — deny everything',next:'rr1_16e',effects:{courage:5}},
          {text:'Speak the Old Tongue. The runes on the stone are a language.',hint:'✦ Unlock the keystone\'s own defense',premium:true,next:'rr1_16c',effects:{magic:25}}
        ]},
        rr1_16a:{speaker:'narrator',text:'"Ronan — MOVE!" You crash through the kitchen. Behind you, the Walkers flow through the {italic}wall{/italic} like smoke.',next:'rr1_17'},
        rr1_16b:{speaker:'narrator',text:'The stone {glow}ERUPTS{/glow}. Blinding turquoise. The Walkers {shake}shriek{/shake} and dissolve. But dark tendrils creep up your wrist.',next:'rr1_17'},
        rr1_16c:{speaker:'narrator',text:'The words feel impossible in your mouth: "{glow}Aethel\'garath vim{/glow}." The stone blazes. The Walkers recoil in {blood}agony{/blood}. They\'ve heard that voice before — a thousand years ago.',next:'rr1_17'},
        rr1_16d:{fx:'shake',speaker:'narrator',text:'Oak and iron crash into the Walker\'s form. It passes through like shadow, but the {italic}noise{/italic} distracts them. Two seconds of confusion. You grab Ronan and bolt for the kitchen.',next:'rr1_17'},
        rr1_16e:{speaker:'narrator',text:'You shove the stone under the table and raise your hands. "Just a mapmaker. No magic here." The lead Walker extends a void-hand, scanning. The stone pulses once — and the Walker\'s head snaps toward you. It {blood}knows{/blood}.',next:'rr1_17'},
        rr1_17:{bg:'Icemountain.png',video:'WaterflowinginForest(gracefulwithbeauty).mp4',transition:'VoidFlow.mp4',speaker:'narrator',text:'You scramble down the cliff path. The ocean churns below — and somewhere beneath the waves, a kingdom {italic}stirs{/italic}.',next:'rr1_ep_end'},
        rr1_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 2: The Descent',
          episodeSub:'The ocean calls. The shadows pursue. The city stirs.',
          bg:'Sleeping dragon amid treasure hoard.png',
          transition:'GoldenSparkleTunnelForward.mp4',
          speaker:'dramatic',
          text:'{glow}A stone that remembers. An ocean that waits. And a kingdom of impossibilities beneath the waves.{/glow}',
          next:'rr2_1'
        }
      }
    },
    // ═══════ EPISODE 2: THE DESCENT ═══════
    {
      title:'The Descent',
      desc:'Through the ocean\'s fury. Into the deep. Aethelgard dreams.',
      thumb:'../../Assets/images/realm_enchanted_library_1775246545630.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'paulyudin-piano-piano-music-508963.mp3',
      startNode:'rr2_1',
      nodes:{
        rr2_1:{bg:'Icemountain.png',video:'Realm2.mp4',mood:'action',ambience:'storm',milestone:{icon:'🌊',title:'The Descent',desc:'Into the depths of Aethelgard'},speaker:'narrator',text:'Dagger Point. Storm worsening. Walkers emerge from rain like nightmares. The stone {glow}blazes{/glow} turquoise.',next:'rr2_2'},
        rr2_2:{speaker:'ronan',speakerColor:'c-teal',text:'"Three Walkers behind, thousand-foot drop ahead! If that stone can do what the legends say — {shake}NOW WOULD BE THE TIME{/shake}!"',next:'rr2_3'},
        rr2_3:{speaker:'inner',text:'A thousand-foot drop into a freezing ocean during a storm, chased by shadow demons, holding a magic stone that might be eating my soul. Either the bravest or most spectacularly {italic}stupid{/italic} thing I\'ve ever done.',next:'rr2_4'},
        rr2_4:{speaker:'narrator',text:'The Walkers close in. Their void-faces directed at the stone with something like {blood}hunger{/blood}.',choices:[
          {text:'"TRUST ME!" Grab Ronan and LEAP.',hint:'🌊 Faith — jump and pray',next:'rr2_5a',effects:{courage:30}},
          {text:'Turn and fight. Use the stone as a shield.',hint:'Stand your ground',next:'rr2_5d',effects:{courage:20,magic:10,corruption:5},fx:'shake'},
          {text:'"Ronan, go! I\'ll hold them off!"',hint:'Self-sacrifice — buy him time',next:'rr2_5e',effects:{courage:25}},
          {text:'Press the stone to your heart. Ask Aethelgard for help.',hint:'✦ Communion — let the city answer',premium:true,next:'rr2_5c',effects:{magic:25}}
        ]},
        rr2_5a:{fx:'shake',speaker:'narrator',text:'"Damn you, map-maker." Ronan grabs your hand. And you {italic}jump{/italic}. The stone blazes.',next:'rr2_6'},
        rr2_5c:{fx:'flash',speaker:'narrator',text:'"I\'m here. I have the key. {whisper}Show me the way.{/whisper}" The ocean {glow}answers{/glow}. A column of ancient light erupts from the waves.',next:'rr2_6'},
        rr2_5d:{speaker:'narrator',text:'The stone flares. The lead Walker collapses into shadow-mist. The second hesitates. But the third — the strongest — passes {italic}through{/italic} the light and grabs your shoulder. Cold like death. Then Ronan\'s blade severs its arm. Mortal steel, mortal courage. "Jump NOW!"',next:'rr2_6'},
        rr2_5e:{speaker:'ronan',speakerColor:'c-teal',text:'"Not a chance, map-maker!" He grabs your collar. "We jump {italic}together{/italic} or not at all! That\'s how my grandmother raised me!"',next:'rr2_5a'},
        rr2_6:{video:'GrassCloseupSunshineGraceful.mp4',transition:'GoldenSparkleTunnelForward.mp4',speaker:'narrator',text:'The water parts. Not violently — {warm}gently{/warm}. Coral gives way to marble. Sand gives way to crystal. Spires, bridges, {glow}towers{/glow}.',next:'rr2_7'},
        rr2_7:{bg:'realm_enchanted_library_1775246545630.png',speaker:'narrator',text:'Steps materialize beneath your feet — carved from mother-of-pearl, each one warm despite the freezing water surrounding you.',next:'rr2_8'},
        rr2_8:{speaker:'ronan',speakerColor:'c-teal',text:'"It\'s... {glow}real{/glow}." Tears streaming. "Every story my grandmother told. Every legend. {warm}Real{/warm}."',next:'rr2_9'},
        rr2_9:{bg:'Sleeping dragon amid treasure hoard.png',speaker:'narrator',text:'Ancient elven guardians line the Wellspring chamber — translucent figures frozen in their final positions. Warriors, mothers holding children. A thousand people who chose to {italic}sleep{/italic}.',next:'rr2_10'},
        rr2_10:{speaker:'ronan',speakerColor:'c-teal',text:'"They\'re not dead. There\'s warmth. They\'re {italic}waiting{/italic} for the keystone."',next:'rr2_11'},
        rr2_11:{bg:'Twisted throne in a dark kingdom.png',fx:'shake',speaker:'narrator',text:'Above, the parted ocean {shake}trembles{/shake}. Something vast and {blood}cold{/blood} pressing against the barrier. The Shadow King. After a thousand years, it has found what it was looking for.',next:'rr2_12'},
        rr2_12:{bg:'realm_frozen_battlefield_1775279781761.png',video:'Realm3.mp4',transition:'RedFierybutinSyncSymbolic.mp4',speaker:'narrator',text:'An inscription on the Wellspring\'s rim: "{glow}The keystone gives what the bearer offers. Sacrifice fuels salvation. All magic has a price.{/glow}"',next:'rr2_13'},
        rr2_13:{speaker:'ronan',speakerColor:'c-teal',text:'"Sacrifice means... {italic}you{/italic}, doesn\'t it? The keystone takes from the bearer. Your memories. Your {italic}years{/italic}."',next:'rr2_ep_end'},
        rr2_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 3: The Rising',
          episodeSub:'Wake the guardians. Face the shadow. Sacrifice begins.',
          bg:'Eerie obsidian bridge over glowing abyss.png',
          transition:'GoldenSparkleTunnelForward.mp4',
          speaker:'dramatic',
          text:'{glow}A thousand sleeping guardians. A keystone pulsing with ancient fire. And above the waves, a darkness that waited a millennium.{/glow}',
          next:'rr3_1'
        }
      }
    },
    // ═══════ EPISODE 3: THE RISING ═══════
    {
      title:'The Rising',
      desc:'The guardians stir. The Shadow King descends. The battle for Aethelgard begins.',
      thumb:'../../Assets/images/realm_dark_armory_1775247037019.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'alexgrohl-energetic-action-sport-500409.mp3',
      startNode:'rr3_1',
      nodes:{
        rr3_1:{bg:'Twisted throne in a dark kingdom.png',video:'Realm3.mp4',mood:'dark',ambience:'heartbeat',milestone:{icon:'⚔️',title:'The Rising',desc:'A millennium of sleep ends now'},speaker:'narrator',text:'The barrier {shake}cracks{/shake}. Fissures of absolute darkness split across the dome that has protected Aethelgard for a millennium.',next:'rr3_2'},
        rr3_2:{speaker:'narrator',text:'Through the cracks: the Shadow King. Not a figure. A {blood}landscape{/blood} of living darkness. It fills the sky like a second night.',next:'rr3_3'},
        rr3_3:{speaker:'ronan',speakerColor:'c-teal',text:'"That thing is the size of a {italic}continent{/italic}. How do you fight a continent?"',next:'rr3_4'},
        rr3_4:{speaker:'inner',text:'You don\'t fight a force of nature. You either run, surrender, or find something so fundamentally {glow}powerful{/glow} that it changes the equation.',next:'rr3_5'},
        rr3_5:{bg:'realm_dark_armory_1775247037019.png',speaker:'narrator',text:'The keystone blazes with {warm}fury{/warm}. You press it to the Wellspring pedestal. Light erupts. The first guardian\'s eyes {glow}open{/glow}.',next:'rr3_6'},
        rr3_6:{speaker:'narrator',text:'She\'s elven — tall, silver-armored, eyes like liquid starlight. Queen Aelindra, the last sovereign of Aethelgard. A thousand years of sleep have not dulled her blade or her authority.',next:'rr3_7'},
        rr3_7:{speaker:'aelindra',speakerColor:'c-gold',text:'"A human holds my keystone." Not a question. Her voice resonates with ancient power. "We sank the world to escape the Darkness. You were not supposed to find us."',next:'rr3_8'},
        rr3_8:{speaker:'narrator',text:'"The Shadow King found you anyway, Your Majesty. He\'s above us right now, breaking through the barrier."',next:'rr3_9'},
        rr3_9:{speaker:'aelindra',speakerColor:'c-gold',text:'Her eyes close. When they open, a tear — silver, luminous — falls. "A thousand years. And he is still {italic}hungry{/italic}."',next:'rr3_10'},
        rr3_10:{speaker:'aelindra',speakerColor:'c-gold',text:'"The Wellspring can hold the barrier or raise the city. Not both. If we rise, the barrier fails. If we stay hidden, the Darkness erodes the walls until nothing remains."',next:'rr3_11'},
        rr3_11:{speaker:'inner',text:'Rise and face the Shadow King in the open. Or stay hidden and slowly suffocate. The elves\' impossible choice — and now it\'s mine.',choices:[
          {text:'"Wake the other guardians. Prepare for battle."',hint:'Fight — a thousand warriors against the dark',next:'rr3_12a',effects:{courage:20}},
          {text:'"Is there no weapon against the Shadow King?"',hint:'Knowledge — understand the enemy',next:'rr3_12b',effects:{magic:15}},
          {text:'"Can we negotiate? What does the Shadow King actually want?"',hint:'Diplomacy with darkness',next:'rr3_12d',effects:{magic:10,corruption:5}},
          {text:'"What happened to the other elven cities? Are we alone?"',hint:'Strategic intelligence',next:'rr3_12e',effects:{magic:10}},
          {text:'"The inscription says sacrifice fuels salvation. What exactly must be sacrificed?"',hint:'✦ Understand the true cost',premium:true,next:'rr3_12c',effects:{magic:20,courage:10}}
        ]},
        rr3_12a:{speaker:'aelindra',speakerColor:'c-gold',text:'"Warriors are arrows against a hurricane. But arrows can guide a storm." She draws her blade — it sings with {glow}ancient light{/glow}. "Wake my people."',next:'rr3_13'},
        rr3_12b:{speaker:'aelindra',speakerColor:'c-gold',text:'"The Shadow King was not always darkness. He was an elven lord — Morvain — who drank from the Wellspring without permission. The magic consumed him, and his hunger consumed {italic}everything{/italic}."',next:'rr3_13'},
        rr3_12c:{speaker:'aelindra',speakerColor:'c-gold',text:'"Light. Living light. Joy, memory, love — these are the fuel. The Wellspring converts what you cherish most into power. The more precious the sacrifice, the greater the magic."',next:'rr3_13'},
        rr3_12d:{speaker:'aelindra',speakerColor:'c-gold',text:'"Morvain wants what he had before the corruption — {warm}connection{/warm}. He was the greatest scholar of our age. The Wellspring showed him everything in the universe, and the loneliness of that knowledge drove him mad. He doesn\'t want to destroy. He wants to {italic}consume{/italic} until the loneliness stops."',next:'rr3_13'},
        rr3_12e:{speaker:'aelindra',speakerColor:'c-gold',text:'"Twelve cities fell before us. We were the last. The others chose to fight and were consumed." Her voice drops to a whisper. "Their light fuels his darkness now. Every civilization he devours makes him {blood}stronger{/blood}."',next:'rr3_13'},
        rr3_13:{speaker:'narrator',text:'More guardians wake. Fifty. A hundred. Five hundred. Ancient warriors stretching muscles that haven\'t moved in a millennium. Children open their eyes and ask for their mothers.',next:'rr3_14'},
        rr3_14:{speaker:'aelindra',speakerColor:'c-gold',text:'"The human brought us back. But raising Aethelgard requires more power than one human can provide. We need time to prepare. To find the {glow}Trident of Tides{/glow} — the weapon that wounded Morvain before."',next:'rr3_15'},
        rr3_15:{speaker:'ronan',speakerColor:'c-teal',text:'"The Trident? My grandmother said it was lost in the Deep Trench — the abyss beneath Aethelgard."',next:'rr3_ep_end'},
        rr3_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 4: The Drowned Court',
          episodeSub:'Into the abyss. The Trident. The frozen court.',
          bg:'realm_sunken_palace.png.png',
          transition:'LilStimulatingglowy.mp4',
          speaker:'dramatic',
          text:'{glow}A queen rises. A thousand guardians wake. But the weapon that can wound the Shadow King lies at the bottom of an abyss, guarded by the frozen dead.{/glow}',
          next:'rr4_1'
        }
      }
    },
    // ═══════ EPISODE 4: THE DROWNED COURT ═══════
    {
      title:'The Drowned Court',
      desc:'Into the abyss. The frozen palace. The weapon that can wound a god.',
      thumb:'../../Assets/images/realm_sunken_palace.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'vasilyatsevich-in-slow-motion-inspiring-ambient-lounge-219592.mp3',
      startNode:'rr4_1',
      nodes:{
        rr4_1:{bg:'realm_sunken_palace.png.png',video:'Realm4.mp4',mood:'mystery',ambience:'underwater',milestone:{icon:'🏛️',title:'The Drowned Court',desc:'Into the palace beneath the sea'},speaker:'narrator',text:'The Sunken Palace of Aethelgard. Enclosed in a magical air bubble, surrounded by dark ocean. Architecture of coral, pearl, and iridescent stone. Bioluminescent gardens cast blue and gold light on ancient walls.',next:'rr4_2'},
        rr4_2:{speaker:'narrator',text:'It is breathtaking. Heartbreaking. A civilization preserved in amber — dinner tables still set, libraries still lit, instruments still tuned. A thousand years of waiting.',next:'rr4_3'},
        rr4_3:{speaker:'ronan',speakerColor:'c-teal',text:'"This is... this is more beautiful than anything I ever imagined. My grandmother\'s stories didn\'t do it justice."',next:'rr4_4'},
        rr4_4:{speaker:'aelindra',speakerColor:'c-gold',text:'"The Trident lies in the Deep Court — the throne room at the lowest level. My husband, King Thalion, held it as the waters closed. He refused to sleep. He wanted to stand {warm}guard{/warm}."',next:'rr4_5'},
        rr4_5:{speaker:'inner',text:'A king who stood guard for a thousand years alone in a drowned throne room. The love behind that choice is staggering. The madness behind it is equally so.',next:'rr4_6'},
        rr4_6:{bg:'realm_frozen_throne_room.png.png',transition:'DottedlilcircletunnelLeadingToASmokyCloudyExploration.mp4',speaker:'narrator',text:'The throne room. King Thalion sits motionless on a throne of living water — frozen in time. His courtiers around him, crystallized mid-conversation. The Trident in his hand, gleaming with sea-light.',next:'rr4_7'},
        rr4_7:{speaker:'narrator',text:'But Thalion is not sleeping like the others. His eyes are {italic}open{/italic}. Watching. A thousand years of vigil have turned his gaze to diamond.',next:'rr4_8'},
        rr4_8:{speaker:'aelindra',speakerColor:'c-gold',text:'"Thalion." Her voice breaks. "My love. I\'m {warm}awake{/warm}."',next:'rr4_9'},
        rr4_9:{speaker:'narrator',text:'The king\'s eyes shift — slowly, like glaciers turning. His mouth opens. A voice like deep water:',next:'rr4_10'},
        rr4_10:{speaker:'thalion',speakerColor:'c-amber',text:'"Aelindra. You were supposed to sleep until it was {italic}safe{/italic}."',next:'rr4_11'},
        rr4_11:{speaker:'aelindra',speakerColor:'c-gold',text:'"It was never going to be safe, my love. The Darkness found us. But a human brought the keystone. We have a {warm}chance{/warm}."',next:'rr4_12'},
        rr4_12:{speaker:'thalion',speakerColor:'c-amber',text:'His eyes move to you. "A human. With elven magic burning in a mortal heart." A long pause. "Brave or foolish. Can never tell with your kind."',next:'rr4_13'},
        rr4_13:{speaker:'narrator',text:'"Probably both, Your Majesty. I need the Trident."',next:'rr4_14'},
        rr4_14:{speaker:'thalion',speakerColor:'c-amber',text:'"The Trident is not a weapon a human can wield. It channels the Wellspring — raw creation magic. It would {blood}unmake{/blood} your mind."',next:'rr4_15'},
        rr4_15:{bg:'realm_deep_trench_descent.png.png',speaker:'narrator',text:'Through the throne room\'s crystal floor, the abyss yawns. The Deep Trench — where something ancient and dark stirs. The Shadow King\'s first foothold.',choices:[
          {text:'"Then teach me. I\'ve already survived the keystone."',hint:'Brave — learn elven warfare',next:'rr4_16a',effects:{courage:20,magic:15}},
          {text:'"Can Aelindra wield it? She\'s your queen."',hint:'Practical — give the weapon to the warrior',next:'rr4_16b',effects:{courage:10}},
          {text:'"The inscription said sacrifice fuels salvation. What if the Trident and the keystone are TWO halves of the same weapon?"',hint:'✦ See the deeper pattern',premium:true,next:'rr4_16c',effects:{magic:30}}
        ]},
        rr4_16a:{speaker:'thalion',speakerColor:'c-amber',text:'"Survive is not the same as {italic}master{/italic}. But I see your grandmother\'s stubborn-" He stops. Looks at you strangely. "You have elven blood. Diluted across centuries, but... {warm}there{/warm}."',next:'rr4_17'},
        rr4_16b:{speaker:'thalion',speakerColor:'c-amber',text:'"The Trident is bonded to my bloodline. Only a Thalion may wield it." He looks at his frozen hands. "And I can barely move after a millennium of stone."',next:'rr4_17'},
        rr4_16c:{speaker:'thalion',speakerColor:'c-amber',text:'His diamond eyes widen. "The Dual Resonance. Keystone channels the Wellspring inward — defense. Trident channels it outward — attack. Together..." He rises from his throne for the first time in a thousand years. "{glow}Together they could wound a god.{/glow}"',next:'rr4_17'},
        rr4_17:{speaker:'narrator',text:'Thalion extends the Trident. Its light meets the keystone\'s glow. Two colors — turquoise and gold — braid together into pure {glow}white{/glow}.',next:'rr4_18'},
        rr4_18:{speaker:'aelindra',speakerColor:'c-gold',text:'"The Dual Resonance. It hasn\'t been activated since the founding of Aethelgard. The cost..." She looks at you with ancient, sorrowful eyes.',next:'rr4_19'},
        rr4_19:{speaker:'thalion',speakerColor:'c-amber',text:'"Two bearers. Two sacrifices. The keystone takes memories. The Trident takes {italic}years{/italic}. Together, the price is a lifetime of each."',next:'rr4_20'},
        rr4_20:{speaker:'inner',text:'A lifetime. My memories and my years. Everything that makes me {italic}me{/italic}. That\'s the price to wound a god and save a kingdom.',next:'rr4_ep_end'},
        rr4_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 5: The Rising Tide',
          episodeSub:'The city rises. The shadow falls. The final sacrifice.',
          bg:'realm_kingdom_rising.png.png',
          transition:'RedFierybutinSyncSymbolic.mp4',
          speaker:'dramatic',
          text:'{glow}Two weapons. Two bearers. One impossible price. Above the waves, the Shadow King descends. Beneath them, a kingdom prepares its final stand.{/glow}',
          next:'rr5_1'
        }
      }
    },
    // ═══════ EPISODE 5: THE RISING TIDE ═══════
    {
      title:'The Rising Tide',
      desc:'Aethelgard rises. The Shadow King falls. Or the world ends.',
      thumb:'../../Assets/images/realm_kingdom_rising.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'gvidon-spinning-head-271171.mp3',
      startNode:'rr5_1',
      nodes:{
        rr5_1:{bg:'realm_kingdom_rising.png.png',video:'Realm5.mp4',mood:'action',ambience:'storm',milestone:{icon:'🌊',title:'The Rising Tide',desc:'Aethelgard rises from the deep'},speaker:'narrator',text:'The ocean heaves. Aethelgard {glow}rises{/glow} — ancient spires breaking the surface as water cascades down pearl walls. A thousand years of sleep ending in a single, thunderous emergence.',next:'rr5_2'},
        rr5_2:{speaker:'narrator',text:'Above: the Shadow King. A continent of living darkness, blotting out the sun. Below: a city of light. Between them: you, holding a keystone and a trident, burning with ancient fire.',next:'rr5_3'},
        rr5_3:{speaker:'aelindra',speakerColor:'c-gold',text:'"Warriors of Aethelgard! A thousand years we slept! A thousand years the Darkness waited! {shake}TODAY WE ANSWER!{/shake}"',next:'rr5_4'},
        rr5_4:{speaker:'narrator',text:'A thousand guardians raise their blades. Light erupts from every spire. The city itself becomes a weapon — focusing the Wellspring\'s power through crystal towers like a prism.',next:'rr5_5'},
        rr5_5:{speaker:'narrator',text:'The Shadow King descends. Its voice is the absence of sound — a pressure in the skull, a weight on the soul:',next:'rr5_6'},
        rr5_6:{speaker:'shadow_king',speakerColor:'c-red',text:'{blood}"I HAVE WAITED ONE THOUSAND YEARS. I HAVE CONSUMED TWELVE CIVILIZATIONS. YOUR LIGHT IS A CANDLE AGAINST AN OCEAN OF DARK."{/blood}',fx:'shake',next:'rr5_7'},
        rr5_7:{speaker:'ronan',speakerColor:'c-teal',text:'"My grandmother said candles are what light in the storm." He draws a blade — a real one, mortal steel. "Not magical. But my arm is {italic}steady{/italic}."',next:'rr5_8'},
        rr5_8:{speaker:'inner',text:'Ronan. A fisherman\'s grandson with a steel blade and more courage than any legend ever described. Standing beside immortal warriors, refusing to be anywhere else.',next:'rr5_9'},
        rr5_9:{speaker:'thalion',speakerColor:'c-amber',text:'"It is time. The Dual Resonance." He looks at you with eyes that have watched an abyss for a millennium. "Hold the keystone. I will hold the Trident. Together, we channel everything."',next:'rr5_10'},
        rr5_10:{speaker:'aelindra',speakerColor:'c-gold',text:'"The cost will be—"',next:'rr5_11'},
        rr5_11:{speaker:'thalion',speakerColor:'c-amber',text:'"I know the cost. I have been paying it for a thousand years." A smile — the first in an age. "{warm}I\'m tired, my love. Let me do something beautiful with what\'s left.{/warm}"',next:'rr5_12'},
        rr5_12:{bg:'realm_two_kingdoms_view.png.png',speaker:'narrator',text:'The Shadow King crashes against the barrier. Guardians fall. Light flickers. The city groans under impossible pressure. Now or never.',next:'rr5_final'},
        rr5_final:{critical:true,timed:12,timedDefault:'rr5_end_awaken',speaker:'dramatic',text:'{glow}The shadow descends. The city trembles. Two weapons blaze with the light of creation itself. What future do you choose for the world?{/glow}',choices:[
          {text:'Dual Resonance. Give everything. Destroy the Shadow King forever.',hint:'🌊 AWAKENING — Total sacrifice. Total victory.',next:'rr5_end_awaken',effects:{courage:30,magic:30},critical:true},
          {text:'Shatter the keystone. Sink Aethelgard again. Seal the Shadow King for another millennium.',hint:'💥 SEAL — Buy time. Another thousand years of hiding.',next:'rr5_end_shatter',critical:true},
          {text:'Merge with the Wellspring. Become the new guardian of Aethelgard. Immortal sentinel.',hint:'🌟 GUARDIAN — Become the city\'s eternal protector.',next:'rr5_end_merge',effects:{magic:40},critical:true},
          {text:'Use the Trident to exile the Shadow King to another dimension. Not death — banishment.',hint:'🌀 EXILE — Remove the threat without destruction.',next:'rr5_end_exile',effects:{magic:20,courage:20},critical:true},
          {text:'"Ronan — take the keystone! Share the sacrifice!"',hint:'✦ 🤝 BOND — Split the cost. Survive together.',premium:true,next:'rr5_end_bond',effects:{courage:20,magic:20},critical:true},
          {text:'Surrender the keystone to the Shadow King. Buy survival with a kingdom\'s freedom.',hint:'🌑 DARKNESS — Some bargains haunt the world forever.',next:'rr5_end_dark',effects:{corruption:30},critical:true}
        ]},
        rr5_end_awaken:{bg:'BeautifulAutumnSeasonArea.png',transition:'GoldenSparkleTunnelForward.mp4',mood:'warm',milestone:{icon:'☀️',title:'Dawn of the New Age',desc:'The Shadow King falls forever'},speaker:'narrator',text:'Light {glow}erupts{/glow} from every spire. Thalion roars. The Trident blazes. The keystone answers. Together, a beam of pure creation punches through the Shadow King like dawn through night. It {shake}screams{/shake} across dimensions — and dissolves. Your hair turns white. Twenty years of memory dissolve like mist. Thalion crumbles to dust — smiling. Aelindra catches the breeze where he was. But {warm}Aethelgard lives{/warm}. The sun touches its spires for the first time in a millennium.',next:'_END',ending:'awaken'},
        rr5_end_shatter:{bg:'MysteriousMixPlaceWithPath.png',transition:'FlowGoesToCenterThenBlast.mp4',mood:'dark',fx:'shake',speaker:'narrator',text:'You shatter the keystone. The Wellspring implodes inward. Aethelgard sinks — guardians returning to sleep, the queen\'s scream swallowed by the waves. The Shadow King rages against a barrier that will hold for another thousand years. You stand on the cliff, drenched, holding fragments of a key that can never be rebuilt. Freedom or cowardice? You\'ll {italic}never{/italic} know.',next:'_END',ending:'shatter'},
        rr5_end_bond:{bg:'AuroraWithSnowmountain.jpg',transition:'GoldenSparkleTunnelForward.mp4',mood:'hopeful',milestone:{icon:'🤝',title:'Shared Sacrifice',desc:'Two friends, one destiny'},speaker:'narrator',text:'Ronan grasps the keystone. "Ten years each, you said?" His weathered hand covers yours. "My grandmother always said the best maps are drawn by {warm}two hands{/warm}." The Dual Resonance blooms — halved cost, halved pain. Thalion channels the Trident. The Shadow King shatters. You wake on the beach, white-haired, missing a decade. Ronan beside you, grinning. Aethelgard shimmers offshore — real, risen, {glow}alive{/glow}.',next:'_END',ending:'bond'},
        rr5_end_dark:{bg:'MysteriousVoid.png',mood:'dark',speaker:'narrator',text:'You drop the keystone. The Shadow King\'s void-hand closes around it. Aethelgard rises — but {blood}twisted{/blood}. Pearl spires blacken. Crystal bridges crack. The guardians wake to a kingdom already consumed. You bought your life with a civilization\'s {blood}freedom{/blood}. Ronan never speaks to you again. The ocean weeps.',next:'_END',ending:'dark'}
      }
    }
  ],
  endings:{
    awaken:{icon:'☀️',title:'Dawn of the New Age',text:'The Shadow King is destroyed forever. Thalion gave his last breath. You gave your memories. Aethelgard rises into a world that needs its light.',color:'#10b981'},
    shatter:{icon:'💥',title:'Lost Forever',text:'You sealed the darkness for another millennium. Whether that was wisdom or cowardice, only time will tell.',color:'#d4a843'},
    bond:{icon:'🤝',title:'Shared Sacrifice',text:'Two friends, one burden, never meant to be borne alone. The best maps are drawn by two hands.',color:'#4ac4b0'},
    dark:{icon:'🌑',title:'The Dark Tide',text:'The ocean remembers your cowardice. The kingdom weeps. The shadow smiles.',color:'#8a5cf5'},
    merge:{icon:'🌟',title:'The Eternal Sentinel',text:'You became the Wellspring\'s living guardian. Immortal, luminous, no longer fully human. Aethelgard has a new protector who will never sleep — and never be alone.',color:'#c4364a'},
    exile:{icon:'🌀',title:'The Exile',text:'The Shadow King howls in a dimension of nothing. Not dead — banished. Aethelgard rises in peace. But somewhere, beyond the walls of reality, Morvain waits. And remembers.',color:'#636e72'},
    crown:{icon:'👑',title:'The Crowned',text:'Aelindra placed the crown of Aethelgard on your head. A human ruler of an elven kingdom. The first in history. The bridge between two worlds.',color:'#e84393'}
  }
};
