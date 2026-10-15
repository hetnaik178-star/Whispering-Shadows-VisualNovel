const STORY_CRIMSON = {
  id:'crimson', title:'Crimson Tide', genre:'Murder Mystery', genreClass:'genre-mystery',
  cover:'../../Assets/images/cover_crimson.png',
  desc:'A murder on a luxury cruise. Everyone has secrets. Everyone is a suspect — including you.',
  synopsis:'The S.S. Aurelia — the world\'s most exclusive cruise ship. A tech billionaire is found dead in his locked cabin. You\'re Detective Mira Solis, and you have 12 hours before the ship docks.',
  duration:'~90 min', endings:'7 Endings', choiceCount:'150+ Choices',
  startMusic:'pumpupthemind-once-in-paris-168895.mp3',
  stats:[
    {id:'evidence',name:'Evidence',color:'#d4a843',max:100,start:5},
    {id:'suspicion',name:'Suspicion',color:'#c4364a',max:100,start:20},
    {id:'empathy',name:'Empathy',color:'#4ac4b0',max:100,start:40}
  ],
  scenes:{},
  episodes:[
    // ═══════ EPISODE 1: DEAD MAN'S HAND ═══════
    {
      title:'Dead Man\'s Hand',
      desc:'A billionaire dead in a locked cabin. Three suspects. One night.',
      thumb:'../../Assets/images/crimson_detective_office_1775246754147.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'pumpupthemind-once-in-paris-168895.mp3',
      startNode:'c1_1',
      nodes:{
        c1_1:{video:'BeachFromTopView(Very Heartwarming And Graceful).mp4',mood:'mystery',ambience:'wind',milestone:{icon:'🚢',title:'Dead Man\'s Hand',desc:'A body in a locked cabin'},speaker:'narrator',text:'The S.S. Aurelia cuts through midnight water like a blade through black silk. Crystal chandeliers sway in the grand ballroom. Champagne flows. The wealthiest people in the world dine above an ocean as dark as {italic}secrets{/italic}.',next:'c1_2'},
        c1_2:{speaker:'narrator',text:'Everything is perfect. The orchestra plays Vivaldi. Diamonds catch candlelight. Laughter echoes across the promenade deck.',next:'c1_3'},
        c1_3:{speaker:'dramatic',text:'Until the {blood}scream{/blood}.',next:'c1_4',fx:'shake'},
        c1_4:{bg:'Stormbound Elegance.png',video:'C1.mp4',speaker:'narrator',text:'Victor Ashford — tech billionaire, philanthropist, host of this entire voyage — is found dead in his locked cabin. No forced entry. No visible weapon. A face frozen between peace and {blood}terror{/blood}.',next:'c1_5'},
        c1_5:{speaker:'narrator',text:'And a note clutched in his cold hand, written in his own handwriting. Two words:',next:'c1_6'},
        c1_6:{speaker:'dramatic',text:'{blood}"SHE KNOWS."{/blood}',next:'c1_7',fx:'flash'},
        c1_7:{speaker:'inner',text:'Two words. "SHE." Three women at dinner last night. "KNOWS." Knows what? And why write it as the last thing you do on earth? This note isn\'t a clue — it\'s a {italic}message{/italic}.',next:'c1_7b'},
        c1_7b:{speaker:'inner',text:'His handwriting is steady. No tremor, no urgency. He wrote this with the {italic}calm{/italic} of a man who expected to die. Not a victim\'s last gasp — a chess player\'s {warm}final move{/warm}.',next:'c1_7c'},
        c1_7c:{speaker:'narrator',text:'The scent of expensive cologne lingers — cedar, bergamot, something darker underneath. Not decay. Not yet. But the room holds his presence like an echo that refuses to fade.',next:'c1_8'},
        c1_8:{bg:'crimson_detective_office_1775246754147.png',speaker:'captain',speakerColor:'c-gold',text:'"Detective Solis. You\'re the only law enforcement professional aboard. We dock in twelve hours. Two hundred VIP witnesses, three possible suspects, and a media firestorm waiting at port."',next:'c1_9'},
        c1_9:{speaker:'mira',speakerColor:'c-teal',text:'"Twelve hours. A locked room. A dead billionaire." I straighten the blazer I packed for cocktails, not crime scenes. "Captain, I need access to everything. Crew records. Guest manifests. Security footage."',next:'c1_9b'},
        c1_9b:{speaker:'captain',speakerColor:'c-gold',text:'"Detective, I must be frank. Half these guests have the lawyers to make this {italic}disappear{/italic}. Discretion is—"',next:'c1_9c'},
        c1_9c:{speaker:'mira',speakerColor:'c-teal',text:'"Discretion is for tax evasion, Captain. A man is dead." I meet his eyes. "I do not do discretion. I do {italic}truth{/italic}."',next:'c1_9d'},
        c1_9d:{speaker:'captain',speakerColor:'c-gold',text:'A long pause. He sighs — the sound of a man accepting something he cannot control. "Very well. Everything you need. But Mira... be careful. Victor Ashford made enemies the way most men make {blood}promises{/blood}."',next:'c1_10'},
        c1_10:{speaker:'third',text:'What Detective Solis doesn\'t know — what she won\'t discover until much later — is that Victor Ashford {italic}chose{/italic} to have her aboard. He arranged her invitation six months ago. This wasn\'t a vacation. It was a {blood}contingency plan{/blood}.',next:'c1_11'},
        c1_11:{bg:'Silent night at the jazz club.png',speaker:'narrator',text:'The crime scene. Luxury personified — silk sheets, rare whisky, a view that costs more per night than most people earn in a year. But something is wrong beyond the obvious corpse.',next:'c1_12'},
        c1_12:{speaker:'inner',text:'The chain bolt is engaged from inside. No signs of struggle. He\'s dressed for dinner — immaculate. The table has four place settings. Three champagne glasses used. One untouched.',next:'c1_13'},
        c1_13:{video:'MicroscopeView(Very HD or Satisfying).mp4',fx:'flash',speaker:'narrator',text:'You examine the glasses with a penlight. Lipstick on glass one — deep crimson. Glass two — nude pink. Glass three — bare. Three different women.',next:'c1_14'},
        c1_14:{speaker:'narrator',text:'The captain hands you the guest list. Three names attended Victor\'s final dinner:',next:'c1_15'},
        c1_15:{speaker:'narrator',text:'{warm}Lydia Ashford{/warm} — the wife. Forty billion on the line in the divorce settlement. {italic}Dr. Priya Nair{/italic} — the business partner. Three million in financial "irregularities." {blood}Isla Ashford{/blood} — the estranged daughter. Twenty years of silence, broken tonight.',next:'c1_16'},
        c1_16:{speaker:'inner',text:'Three women. Three motives. Everyone had reason. Everyone had opportunity. The locked room means nothing if someone left through the connecting suite.',next:'c1_17'},
        c1_17:{bg:'crimson_train_station_1775246260994.png',speaker:'narrator',text:'Under the pillow: an unlabeled vial of clear liquid. In the bathroom: an offshore pharmacy receipt. On his phone: a voice memo recorded three hours before death.',choices:[
          {text:'Play the voice memo immediately.',hint:'🎙 Follow the dead man\'s last words',next:'c1_18a',effects:{evidence:15}},
          {text:'Bag the vial first. Chemistry doesn\'t lie.',hint:'🧪 Physical evidence first',next:'c1_18b',effects:{evidence:10}},
          {text:'Check the bathroom for concealed items behind the mirror.',hint:'Bathrooms hide secrets',next:'c1_18d',effects:{evidence:10}},
          {text:'Dust the note for secondary fingerprints. Was he alone when he wrote it?',hint:'Forensics first',next:'c1_18e',effects:{evidence:15}},
          {text:'Check his phone\'s location history for the past 48 hours.',hint:'✦ Digital footprint — where did he go?',premium:true,next:'c1_18c',effects:{evidence:20,suspicion:5}}
        ]},
        c1_18a:{speaker:'narrator',text:'Victor\'s voice, tired but calm: "If you\'re hearing this, Mira, then I\'m dead. And it went exactly as I planned. Don\'t blame her. {warm}Blame the cancer.{/warm}"',next:'c1_19',fx:'flash'},
        c1_18b:{speaker:'narrator',text:'The vial contains Luminal-7 — a cardiac suppressant. Painless in the right dosage. Lethal in the dosage on the receipt. Prescribed to {italic}Victor himself{/italic}.',next:'c1_19'},
        c1_18c:{speaker:'inner',text:'His phone GPS shows three stops before dinner: the ship\'s pharmacy, the onboard legal office, and... the chapel. A dying man visited a {italic}chapel{/italic}.',next:'c1_19'},
        c1_18d:{speaker:'narrator',text:'Behind the bathroom mirror: a second phone. Pre-paid. Three numbers in the contacts: "LAWYER", "INSURANCE", and one labeled simply "{blood}HALE{/blood}". The call log shows seventeen conversations in the past week.',next:'c1_19'},
        c1_18e:{speaker:'inner',text:'One set of prints on the note — Victor\'s. But the pen used... the ink is from a Montblanc limited edition. Victor used disposable ballpoints. Someone {italic}gave{/italic} him the pen. Deliberately.',next:'c1_19'},
        c1_19:{speaker:'inner',text:'Cancer. He was dying. A man with six months hosts a final dinner with his wife, his partner, and a daughter he hasn\'t seen in twenty years. This isn\'t just a crime scene. This is a {warm}farewell{/warm}.',next:'c1_20'},
        c1_20:{bg:'Courtroom after hours with evidence.png',speaker:'narrator',text:'Time to start the interviews. The ship\'s private library — your interrogation room. Mahogany, leather chairs, soft lighting. Not a precinct, but intimidation wears many faces.',choices:[
          {text:'Start with Lydia — the wife who inherits billions.',hint:'💰 Follow the money',next:'c1_21a',effects:{suspicion:10}},
          {text:'Start with Priya — the partner hiding fraud.',hint:'🔬 Follow the secrets',next:'c1_21b',effects:{evidence:10}},
          {text:'Start with Isla — the daughter from nowhere.',hint:'💔 Follow the mystery',next:'c1_21c',effects:{empathy:10}}
        ]},
        c1_21a:{speaker:'lydia',speakerColor:'c-pink',text:'"My husband and I hadn\'t shared a bedroom in three years, Detective. We shared a last name and a tax bracket. Does that make me a killer? Or just a wife who stayed too long?"',next:'c1_22'},
        c1_21b:{speaker:'priya',speakerColor:'c-teal',text:'"Yes. Three million over two years. Not for myself — I redirected research funds to keep a program alive that Axiom was trying to kill. That research has saved four hundred lives."',next:'c1_22'},
        c1_21c:{speaker:'isla',speakerColor:'c-gold',text:'"He abandoned my mother twenty years ago." Tears carve tracks. "She died alone while he bought his third yacht. I came to make him look me in the eye and say {italic}sorry{/italic}."',next:'c1_21d'},
        c1_21d:{speaker:'inner',text:'I\'ve interviewed hundreds of suspects. After a while you develop a sense for the architecture of a lie — the micro-hesitations, the choreographed eye contact, the rehearsed pauses. None of these women are performing.',next:'c1_22'},
        c1_22:{speaker:'narrator',text:'Each woman carries a piece of the puzzle. Each is hiding something. But beneath every alibi is an uncomfortable truth — none of them seems to be {italic}lying{/italic}.',next:'c1_22b'},
        c1_22b:{speaker:'inner',text:'Four glasses on the table. Three used. One untouched. Victor poured for someone who {italic}never arrived{/italic}. Or someone he wanted to remember. The fourth chair is the real mystery.',next:'c1_ep_end'},
        c1_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 2: The Interrogation',
          episodeSub:'Three suspects. Three lies. The truth is drowning.',
          bg:'crimson_rooftop_bar_1775245862401.png',
          transition:'LilStimulatingglowy.mp4',
          speaker:'dramatic',
          text:'{glow}Every suspect has a secret. Every alibi has a crack. And the dead man\'s note — "SHE KNOWS" — is a riddle wrapped in a dying man\'s last breath.{/glow}',
          next:'c2_1'
        }
      }
    },
    // ═══════ EPISODE 2: THE INTERROGATION ═══════
    {
      title:'The Interrogation',
      desc:'Deep dives into each suspect. The truth isn\'t what anyone expected.',
      thumb:'../../Assets/images/crimson_opera_balcony_1775279688294.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'JazzCafe.mp3',
      startNode:'c2_1',
      nodes:{
        c2_1:{bg:'crimson_rooftop_bar_1775245862401.png',video:'C2.mp4',mood:'mystery',milestone:{icon:'🔍',title:'The Interrogation',desc:'Twelve hours. Three suspects. One truth.'},speaker:'third',text:'Six hours remaining. The Aurelia plows through morning seas carrying 200 people who don\'t know a murderer — or a mercy killer — is dining among them.',next:'c2_2'},
        c2_2:{speaker:'inner',text:'The evidence is talking to me. But it\'s speaking in contradictions. Every thread leads somewhere different. Every face hides something I can\'t quite name.',next:'c2_3'},
        c2_3:{bg:'Silent night at the jazz club.png',speaker:'narrator',text:'Second round of interrogations. Lydia enters first. She\'s changed — traded diamonds for pearls, confidence for something resembling {italic}fatigue{/italic}.',next:'c2_4'},
        c2_4:{speaker:'lydia',speakerColor:'c-pink',text:'"You want to know about the connecting door. Yes. I went through it last night. At 11:15. Victor {italic}called{/italic} me."',next:'c2_5'},
        c2_5:{speaker:'mira',speakerColor:'c-teal',text:'"Called you? You said you hadn\'t shared a bedroom in—"',next:'c2_6'},
        c2_6:{speaker:'lydia',speakerColor:'c-pink',text:'"Three years. But last night he told me about the cancer. He sat on the bed and just... {warm}told me{/warm}. No drama. Just facts. The way Victor always delivered bad news."',next:'c2_7'},
        c2_7:{speaker:'lydia',speakerColor:'c-pink',text:'"He said he didn\'t want to become a spectacle. Tubes and machines and pity. He wanted to leave on his own terms, surrounded by the women who {warm}mattered{/warm}."',next:'c2_8'},
        c2_8:{speaker:'narrator',text:'You watch carefully. How she holds her wedding ring — touching it unconsciously every few seconds. Not a fidget. A {italic}tether{/italic}.',choices:[
          {text:'"Did you administer the compound, Lydia?"',hint:'Direct — press for confession',next:'c2_9a',effects:{suspicion:15}},
          {text:'"Where did the compound come from?"',hint:'Follow the chemistry',next:'c2_9b',effects:{evidence:15}},
          {text:'"You loved him. Despite everything."',hint:'✦ Crack the façade wide open',premium:true,next:'c2_9c',effects:{empathy:25}}
        ]},
        c2_9a:{speaker:'lydia',speakerColor:'c-pink',text:'"I think I\'d like my lawyer present." The mask returns, smooth as porcelain. But you\'ve seen behind it.',next:'c2_10'},
        c2_9b:{speaker:'lydia',speakerColor:'c-pink',text:'"I don\'t know chemistry. I know board meetings. Whatever Victor took, he obtained himself. He didn\'t need help acquiring a pill."',next:'c2_10'},
        c2_9c:{speaker:'lydia',speakerColor:'c-pink',text:'She breaks. Not dramatically — quietly, like a glass overfilled. Tears she\'s held since the scream. "Twenty-three years. He was impossible. But when he held my hand and said \'thank you for staying...\'?" She covers her face. "{warm}God help me, yes.{/warm}"',next:'c2_10'},
        c2_10:{bg:'crimson_train_station_1775246260994.png',speaker:'narrator',text:'Priya Nair enters. Coiled tight on the chair\'s edge. Her glasses need adjusting every thirty seconds.',next:'c2_11'},
        c2_11:{speaker:'priya',speakerColor:'c-teal',text:'"I swiped out at 11:30, not midnight. I lied about the timing because I went to the observation deck. I needed to {italic}think{/italic}."',next:'c2_12'},
        c2_12:{speaker:'inner',text:'A scientist who stole money to save lives. A wife who loved a man who forgot to love her back. Every layer I peel reveals something more complicated, more {italic}human{/italic}.',next:'c2_13'},
        c2_13:{bg:'crimson_opera_balcony_1775279688294.png',speaker:'narrator',text:'Isla last. She\'s worn through her makeup. The raw wound of twenty years of abandonment is bleeding.',next:'c2_14'},
        c2_14:{speaker:'isla',speakerColor:'c-gold',text:'"YES I jammed the camera! Because I didn\'t want anyone to see me {shake}BEGGING{/shake} my father to love me!" She breaks — ugly, raw, honest.',next:'c2_15',fx:'shake'},
        c2_15:{speaker:'isla',speakerColor:'c-gold',text:'"We talked for an hour. He {warm}cried{/warm}, Detective. He told me about the cancer. He said he wished he had more time. He hugged me at the door."',next:'c2_16'},
        c2_16:{bg:'Twilight over suburban chaos.png',video:'C3.mp4',music:'alexgrohl-sweet-life-luxury-chill-438146.mp3',speaker:'narrator',text:'The ship\'s pharmacist approaches you, nervously twisting his hands.',next:'c2_17'},
        c2_17:{speaker:'pharmacist',speakerColor:'c-amber',text:'"Victor filled a prescription two days before boarding. {blood}Luminal-7{/blood}. Lethal in the dosage he requested. He told me it was for research."',next:'c2_18'},
        c2_18:{fx:'flash',speaker:'narrator',text:'Self-administered. No external killer. Victor mixed his own cocktail, drank it after his final dinner, and died exactly the way he {italic}wanted{/italic}.',next:'c2_19'},
        c2_19:{speaker:'mira',speakerColor:'c-teal',text:'"\'SHE KNOWS\' isn\'t an accusation. It\'s a {italic}referral{/italic}. One of them knows the full truth. But which one? And which secret?"',next:'c2_ep_end'},
        c2_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 3: The Second Body',
          episodeSub:'A new death changes everything. This isn\'t suicide anymore.',
          bg:'crimson_ship_deck_crime_scene.png.png',
          transition:'CrystallizedTimeLapse.mp4',
          speaker:'dramatic',
          text:'{glow}The question isn\'t who killed him. The question is why "SHE KNOWS" was the last thing a dying man needed you to understand. And now — another body on the upper deck.{/glow}',
          next:'c3_1'
        }
      }
    },
    // ═══════ EPISODE 3: THE SECOND BODY ═══════
    {
      title:'The Second Body',
      desc:'A new death on deck. Victor\'s suicide was just the beginning.',
      thumb:'../../Assets/images/crimson_ship_deck_crime_scene.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'cosmonkey-dont-talk-315229.mp3',
      startNode:'c3_1',
      nodes:{
        c3_1:{bg:'crimson_ship_deck_crime_scene.png.png',video:'C3.mp4',mood:'tense',ambience:'wind',milestone:{icon:'💀',title:'The Second Body',desc:'This changes everything'},speaker:'narrator',text:'Four hours until harbor. You\'re standing over a second body on the rain-soaked upper deck. The pharmacist who gave you the Luminal-7 testimony is dead.',next:'c3_2'},
        c3_2:{speaker:'inner',text:'No more self-administered compound. No more locked room. This is blunt force trauma to the back of the skull. This is {blood}murder{/blood}.',next:'c3_3'},
        c3_3:{speaker:'mira',speakerColor:'c-teal',text:'"Captain, seal the ship. Nobody moves between decks. This isn\'t a suicide investigation anymore."',next:'c3_4'},
        c3_4:{speaker:'captain',speakerColor:'c-gold',text:'"Detective, we have two hundred of the world\'s most powerful people aboard. I can\'t lock down a—"',next:'c3_5'},
        c3_5:{speaker:'mira',speakerColor:'c-teal',text:'"Two dead bodies and four hours to harbor. Your ship is a crime scene, Captain. Lock it {italic}down{/italic}."',next:'c3_6'},
        c3_6:{speaker:'inner',text:'The pharmacist knew Victor got the Luminal-7 himself. He was the only person who could confirm it was self-administered. Now he\'s dead. Someone wants this ruled as murder — frame one of the three women.',next:'c3_7'},
        c3_7:{bg:'crimson_archive_room.png.png',speaker:'narrator',text:'You tear through the ship\'s records. Victor\'s invitation list. His legal filings. His will — revised three days before boarding.',next:'c3_8'},
        c3_8:{speaker:'narrator',text:'The will revision is extraordinary. Forty billion dollars — split equally among Lydia, Priya, and Isla. Nothing for Ashford Enterprises. Nothing for the board.',next:'c3_9'},
        c3_9:{speaker:'inner',text:'He split his fortune among the three women at his final dinner. The board gets nothing. That\'s forty billion dollars in motive for someone on this ship who {italic}isn\'t{/italic} one of the suspects.',next:'c3_10'},
        c3_10:{speaker:'mira',speakerColor:'c-teal',text:'"I\'ve been looking at the wrong people. The three women are beneficiaries, not suspects. But the board of Ashford Enterprises just lost forty {italic}billion{/italic} dollars."',next:'c3_11'},
        c3_11:{bg:'Courtroom after hours with evidence.png',speaker:'narrator',text:'You pull the guest manifest. Four board members are aboard the Aurelia. All invited by Victor. All seated at a separate table. All watching the three women all night.',choices:[
          {text:'Interrogate the board members immediately.',hint:'Go on the offensive',next:'c3_12a',effects:{evidence:15,suspicion:10}},
          {text:'Check the security footage from the upper deck first.',hint:'Evidence before confrontation',next:'c3_12b',effects:{evidence:20}},
          {text:'Talk to Lydia privately. She knows the board dynamics.',hint:'✦ Use insider knowledge',premium:true,next:'c3_12c',effects:{evidence:15,empathy:10}}
        ]},
        c3_12a:{speaker:'narrator',text:'The board members lawyer up instantly. But one — Richard Hale, CFO — sweats through his collar when you mention the revised will.',next:'c3_13'},
        c3_12b:{speaker:'narrator',text:'The upper deck camera shows a figure in a crew uniform approaching the pharmacist from behind. Height, build — it matches Richard Hale, CFO. He borrowed a uniform from the laundry.',next:'c3_13'},
        c3_12c:{speaker:'lydia',speakerColor:'c-pink',text:'"Richard Hale has been laundering through Ashford Enterprises for a decade. Victor found out three months ago. The new will cuts Hale off completely. He\'s {blood}desperate{/blood}."',next:'c3_13'},
        c3_13:{bg:'crimson_interrogation_cabin.png.png',speaker:'narrator',text:'You corner Richard Hale in a stateroom. He\'s pacing. His knuckles are raw. A whisky trembles in his hand.',next:'c3_14'},
        c3_14:{speaker:'hale',speakerColor:'c-red',text:'"I want a lawyer."',next:'c3_15'},
        c3_15:{speaker:'mira',speakerColor:'c-teal',text:'"You want a lawyer? We\'re in international waters, Richard. The closest lawyer is four hours away. And I have a dead pharmacist and your fingerprints on a borrowed crew uniform."',next:'c3_16'},
        c3_16:{speaker:'hale',speakerColor:'c-red',text:'"The pharmacist was going to tell you it was suicide. SUICIDE! If it\'s ruled suicide, the insurance policy is void. Three hundred million in insurance — keeping the company afloat."',next:'c3_17'},
        c3_17:{speaker:'mira',speakerColor:'c-teal',text:'"So you killed a man to make another man\'s death look like murder... to collect insurance money?"',next:'c3_18'},
        c3_18:{speaker:'hale',speakerColor:'c-red',text:'"I killed a nobody to save three thousand {italic}jobs{/italic}! Without that insurance, Ashford Enterprises collapses! Victor\'s idealistic will gives the money to his wife and mistresses while his employees {blood}starve{/blood}!"',next:'c3_19'},
        c3_19:{speaker:'inner',text:'He\'s not wrong about the consequences. Victor\'s will is generous to three women and catastrophic for three thousand employees. The dead man\'s farewell has a {italic}body count{/italic}.',next:'c3_ep_end'},
        c3_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 4: The Archive',
          episodeSub:'Every secret has a paper trail. Victor\'s is a library.',
          bg:'crimson_archive_room.png.png',
          transition:'VoidFlow.mp4',
          speaker:'dramatic',
          text:'{glow}Two murders. One billionaire\'s crumbling empire. And a note that still doesn\'t make sense. "SHE KNOWS" — knows WHAT? The answer is buried in Victor\'s archives.{/glow}',
          next:'c4_1'
        }
      }
    },
    // ═══════ EPISODE 4: THE ARCHIVE ═══════
    {
      title:'The Archive',
      desc:'Victor left breadcrumbs. Follow them into the heart of his empire.',
      thumb:'../../Assets/images/crimson_archive_room.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'JazzCafe.mp3',
      startNode:'c4_1',
      nodes:{
        c4_1:{bg:'crimson_archive_room.png.png',video:'C4.mp4',mood:'mystery',ambience:'clock',milestone:{icon:'📂',title:'The Archive',desc:'Victor left a trail of breadcrumbs'},speaker:'narrator',text:'Three hours to harbor. Hale is confined to quarters. But the case isn\'t closed — because "SHE KNOWS" still doesn\'t point to Hale. Victor wrote that note before the pharmacist died.',next:'c4_2'},
        c4_2:{speaker:'inner',text:'Two separate crimes on one ship. Victor\'s planned exit. Hale\'s desperate cover-up. But Victor knew — he KNEW someone would try to corrupt his death. That\'s why he invited me.',next:'c4_3'},
        c4_3:{speaker:'narrator',text:'Victor\'s private cabin safe — opened with a code Lydia provides. Inside: a leather-bound journal. Three sealed envelopes labeled LYDIA, PRIYA, and ISLA. And a fourth labeled DETECTIVE SOLIS.',next:'c4_4'},
        c4_4:{speaker:'mira',speakerColor:'c-teal',text:'"He wrote me a letter. He didn\'t just invite me as a guest — he cast me as the {italic}executor{/italic} of his final act."',next:'c4_5'},
        c4_5:{speaker:'narrator',text:'The letter reads: "Mira. You solved the Harrington case when everyone else gave up. I need that stubbornness now. The note says \'SHE KNOWS\' because Priya knows the truth about my diagnosis. But the REAL secret is in my journal."',next:'c4_6'},
        c4_6:{speaker:'narrator',text:'"The real secret is that Ashford Enterprises isn\'t bankrupt because of me. It\'s bankrupt because Richard Hale has been siphoning funds for a decade. The will cuts him off. He will try to stop it. {warm}Protect my family.{/warm}"',next:'c4_7'},
        c4_7:{speaker:'inner',text:'Victor orchestrated everything. His death. My presence. The will. The note. He turned his own funeral into a {italic}chess match{/italic} against his own CFO.',next:'c4_8'},
        c4_8:{bg:'crimson_detective_office_1775246754147.png',speaker:'narrator',text:'The journal is dense — five years of documentation. Hale\'s laundering. Offshore accounts. Shell companies. Every receipt, every transaction, every lie.',next:'c4_9'},
        c4_9:{speaker:'mira',speakerColor:'c-teal',text:'"This isn\'t just embezzlement. This is the evidence needed to prosecute Hale for decades of fraud. Victor was building a case from the {italic}inside{/italic}."',next:'c4_10'},
        c4_10:{speaker:'narrator',text:'You open the three sealed envelopes. Each contains a personal letter and a legal document.',next:'c4_11'},
        c4_11:{speaker:'narrator',text:'Lydia\'s: an apology for twenty-three years of emotional distance, and the deed to their first home. Priya\'s: gratitude for the stolen millions that saved lives, and full legal immunity. Isla\'s: "I\'m sorry I wasn\'t your father. I should have been."',next:'c4_12'},
        c4_12:{speaker:'inner',text:'A dying man spent his last months preparing for every contingency. Protecting every person he loved from every person who might hurt them. The most meticulous farewell in history.',choices:[
          {text:'Deliver the letters immediately. They\'ve waited long enough.',hint:'Compassion — these women need closure',next:'c4_13a',effects:{empathy:20}},
          {text:'Hold the letters as evidence. They support the fraud case.',hint:'Pragmatic — justice requires documentation',next:'c4_13b',effects:{evidence:15}},
          {text:'Read the journal\'s FINAL entry. What did Victor know about his last night?',hint:'✦ The dead man planned every detail',premium:true,next:'c4_13c',effects:{evidence:20,empathy:10}}
        ]},
        c4_13a:{speaker:'narrator',text:'Three women in three cabins. Three letters. Three different kinds of crying. You stand in the corridor afterward, holding the journal, feeling like Victor\'s {warm}ghost{/warm}.',next:'c4_14'},
        c4_13b:{speaker:'narrator',text:'You photograph every page. The originals stay in evidence bags. The case against Hale grows from circumstantial to {glow}airtight{/glow}.',next:'c4_14'},
        c4_13c:{speaker:'narrator',text:'The final entry: "Tonight I dine with the three women who deserved better from me. Then I go. If Mira is as good as I think, she\'ll find this journal. If not... Hale wins. And I\'ll have died for {blood}nothing{/blood}."',next:'c4_14'},
        c4_14:{bg:'crimson_opera_balcony_1775279688294.png',transition:'LilStimulatingglowy.mp4',speaker:'narrator',text:'You step onto the observation deck. Two hours until harbor. City lights shimmer on water. Behind you, a ship full of secrets. In your hands, a dead man\'s truth.',next:'c4_15'},
        c4_15:{speaker:'narrator',text:'A knock. It\'s Priya. She\'s been crying but her eyes are now clear — sharp.',next:'c4_16'},
        c4_16:{speaker:'priya',speakerColor:'c-teal',text:'"Detective. Victor asked me to do something else that night. Something I haven\'t told you because it changes everything."',next:'c4_17'},
        c4_17:{speaker:'mira',speakerColor:'c-teal',text:'"What did he ask you to do?"',next:'c4_18'},
        c4_18:{speaker:'priya',speakerColor:'c-teal',text:'"He asked me to synthesize the Luminal-7. Yes. I helped him die. But he also gave me a second compound — an enzyme inhibitor. Something that would make the Luminal-7 detectable by standard toxicology."',next:'c4_19'},
        c4_19:{speaker:'mira',speakerColor:'c-teal',text:'"He wanted the autopsy to flag it. He wanted the investigation."',next:'c4_20'},
        c4_20:{speaker:'priya',speakerColor:'c-teal',text:'"He wanted {italic}you{/italic}. The investigation was never about finding a killer. It was about finding the {glow}journal{/glow}. You were the weapon he aimed at Hale from beyond the grave."',next:'c4_21'},
        c4_21:{speaker:'inner',text:'Victor Ashford. Even dead, the man runs the room. He didn\'t just plan his death — he planned the entire aftermath. The investigation. The discovery. The {italic}justice{/italic}.',next:'c4_ep_end'},
        c4_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 5: The Verdict',
          episodeSub:'Harbor lights approach. The truth is uglier than murder.',
          bg:'crimson_ship_theater.png.png',
          transition:'GoldenSparkleTunnelForward.mp4',
          speaker:'dramatic',
          text:'{glow}A dead man\'s chess game. A killer\'s desperation. Three women caught in the crossfire. The harbor approaches and Detective Solis must deliver her verdict.{/glow}',
          next:'c5_1'
        }
      }
    },
    // ═══════ EPISODE 5: THE VERDICT ═══════
    {
      title:'The Verdict',
      desc:'Harbor lights. Final interviews. Justice and mercy pull in different directions.',
      thumb:'../../Assets/images/crimson_ship_theater.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'cosmonkey-dont-talk-315229.mp3',
      startNode:'c5_1',
      nodes:{
        c5_1:{bg:'crimson_ship_theater.png.png',video:'C5.mp4',mood:'mystery',ambience:'wind',milestone:{icon:'⚖️',title:'The Verdict',desc:'Justice or mercy — you decide'},speaker:'narrator',text:'One hour to harbor. Detective Solis gathers everyone in the ship\'s theater. Lydia. Priya. Isla. Hale in handcuffs. The captain. The crew. Everyone who matters.',next:'c5_2'},
        c5_2:{speaker:'narrator',text:'The theater is beautiful — velvet seats, gold balconies, heavy red curtains. A stage designed for opera. Tonight it hosts something more dramatic than any libretto.',next:'c5_3'},
        c5_3:{speaker:'mira',speakerColor:'c-teal',text:'"Thank you all for coming. I know it\'s late and I know you\'re tired of being questioned. So I\'ll be brief."',next:'c5_4'},
        c5_4:{speaker:'mira',speakerColor:'c-teal',text:'"Victor Ashford was dying. Terminal pancreatic cancer. Six months at best. He invited everyone to this voyage as a farewell."',next:'c5_5'},
        c5_5:{speaker:'narrator',text:'Lydia\'s hand goes to her ring. Priya stares at the floor. Isla\'s tears return, silent this time.',next:'c5_6'},
        c5_6:{speaker:'mira',speakerColor:'c-teal',text:'"He ended his life on his own terms. Self-administered Luminal-7. The locked room wasn\'t a mystery — it was a man who wanted {warm}privacy for his final moment{/warm}."',next:'c5_7'},
        c5_7:{speaker:'mira',speakerColor:'c-teal',text:'"The note — \'SHE KNOWS\' — was a message to me. A referral to Priya, who could confirm the cancer and the compound. Victor wanted the truth told — but only by the right person."',next:'c5_8'},
        c5_8:{speaker:'narrator',text:'You hold up the journal.',next:'c5_9'},
        c5_9:{speaker:'mira',speakerColor:'c-teal',text:'"He also left this. Five years of documentation proving that Richard Hale has been laundering money through Ashford Enterprises. Hundreds of millions stolen from the company and its employees."',next:'c5_10'},
        c5_10:{speaker:'hale',speakerColor:'c-red',text:'"LIES! That journal is fabricated! Victor was a dying man with a grudge—"',next:'c5_11'},
        c5_11:{speaker:'mira',speakerColor:'c-teal',text:'"Mr. Hale. You also murdered the ship\'s pharmacist to prevent confirmation of the suicide. I have footage, fingerprints, and a really bad {italic}attitude{/italic}."',next:'c5_12'},
        c5_12:{speaker:'narrator',text:'The theater is silent. Hale slumps in his seat. The curtain has fallen on his performance.',next:'c5_13'},
        c5_13:{speaker:'inner',text:'Two crimes solved. But the harder question remains: what do I write in my report? Suicide means the insurance is void. Three thousand jobs disappear. Murder means Hale takes the fall... and the three women inherit blood money.',next:'c5_14'},
        c5_14:{speaker:'narrator',text:'Priya approaches you as the others file out. Her voice is barely audible.',next:'c5_15'},
        c5_15:{speaker:'priya',speakerColor:'c-teal',text:'"I helped him die, Detective. That makes me an accessory. I know that. I\'ve known it since the moment the compound left my lab."',next:'c5_16'},
        c5_16:{speaker:'mira',speakerColor:'c-teal',text:'"Why tell me?"',next:'c5_17'},
        c5_17:{speaker:'priya',speakerColor:'c-teal',text:'"Because Victor asked me to. He said, \'If Mira is the detective I think she is, she\'ll know what to do with the truth.\' So here it is. All of it. {warm}Every ugly piece.{/warm}"',next:'c5_18'},
        c5_18:{bg:'crimson_sunrise_harbor.png.png',transition:'GoldenSparkleTunnelForward.mp4',speaker:'narrator',text:'Harbor lights grow. Police boats approach. The sun rises through scattered clouds, painting the water in gold and crimson. Your report is due in thirty minutes.',next:'c5_final'},
        c5_final:{critical:true,music:'audioknap-music-free-458044.mp3',speaker:'dramatic',text:'{glow}A dead man who chose his exit. A scientist who mixed the cocktail. A killer who murdered to protect a lie. Three women bound by one man\'s final chess move. What is your verdict, Detective?{/glow}',choices:[
          {text:'Report everything. Victor\'s suicide. Priya\'s assistance. Hale\'s murder. The complete truth.',hint:'🔍 TRUTH — Justice above all, consequences be damned',next:'c5_end_truth',effects:{evidence:20},critical:true},
          {text:'Call Victor\'s death natural causes. Prosecute Hale for the pharmacist\'s murder only.',hint:'💔 MERCY — Protect the family, punish the real villain',next:'c5_end_mercy',effects:{empathy:20},critical:true},
          {text:'Use Victor\'s journal to force Hale into a plea deal that saves the company AND honors the will.',hint:'✦ 🕊 GRACE — Everyone gets something. Nobody gets everything.',premium:true,next:'c5_end_grace',effects:{empathy:25,evidence:10},critical:true},
          {text:'Bury it all. Control the narrative. Everyone owes you now.',hint:'🃏 PLAYER — Power is the only currency that doesn\'t depreciate',next:'c5_end_player',effects:{suspicion:20},critical:true}
        ]},
        c5_end_truth:{bg:'BeautifulAutumnSeasonArea.png',transition:'GoldenSparkleTunnelForward.mp4',mood:'calm',speaker:'narrator',text:'You tell them everything. The press conference is brutal. Priya faces charges. The insurance is void. Three thousand people lose their jobs. But Victor\'s legacy is {warm}honest{/warm}. Isla starts a foundation in his name. The truth, it turns out, has its own kind of mercy.',next:'_END',ending:'truth'},
        c5_end_mercy:{bg:'WhitePeacefulFlower.jpg',transition:'CrystallizedTimeLapse.mp4',mood:'warm',music:'fassounds-good-night-lofi-cozy-chill-music-160166.mp3',speaker:'narrator',text:'"Natural causes." The words taste like compromise, but you see Isla\'s relief, Priya\'s gratitude, Lydia\'s quiet tears. Hale goes down for murder. The will stands. Three women start over. Victor wanted to leave on his terms. You gave him that final {warm}dignity{/warm}.',next:'_END',ending:'mercy'},
        c5_end_grace:{bg:'ruslansikunov-spring-10063884.jpg',mood:'hopeful',music:'fassounds-good-night-lofi-cozy-chill-music-160166.mp3',milestone:{icon:'🕊',title:'Grace',desc:'The hardest kind of justice'},speaker:'narrator',text:'Hale confesses to fraud in exchange for reduced murder charges. The company survives under new management. The will stands — Lydia, Priya, and Isla inherit and pledge half to employee pensions. At the memorial, three women sit together — wife, partner, daughter — united by grief, slowly by {warm}forgiveness{/warm}.',next:'_END',ending:'grace'},
        c5_end_player:{bg:'abwi74-chess-1403622.jpg',mood:'dark',speaker:'narrator',text:'You seal everything. The journal. The formula. The footage. Every player on this ship owes you silence. Power, it turns out, is the real inheritance. At 3 AM, Victor\'s note haunts you: "SHE KNOWS." Yeah. {blood}She does.{/blood} And now so do you.',next:'_END',ending:'player'}
      }
    }
  ],
  endings:{
    truth:{icon:'🔍',title:'The Truth',text:'You revealed everything. Painful, messy, real. Victor\'s legacy is honest, even if it hurts.',color:'#d4a843'},
    mercy:{icon:'💔',title:'Mercy',text:'You chose compassion. A dying man\'s wish, honored. The real killer punished. The family protected.',color:'#4ac4b0'},
    grace:{icon:'🕊',title:'Grace',text:'You found the impossible middle ground. Justice, mercy, and pragmatism woven together by a dead man\'s chess game.',color:'#10b981'},
    player:{icon:'🃏',title:'The Player',text:'Truth became currency. Power became inheritance. Every mirror shows who you really became.',color:'#c4364a'},
    buried:{icon:'⚰️',title:'Deep Six',text:'You dropped the evidence into the ocean. The case dies with the ship. No justice, no mercy — just silence. Some cases are meant to stay unsolved.',color:'#636e72'},
    partnership:{icon:'🤝',title:'The Partnership',text:'You brought Lydia, Priya, and Isla together. Three women who should have been enemies became co-executors. Victor\'s final gift: the family he never managed to build while alive.',color:'#8a5cf5'},
    confession:{icon:'📜',title:'The Confession',text:'You let Lydia read the death note publicly at the memorial. Victor\'s own words exposed the web of lies, greed, and desperate love. The audience wept. The media raged. And three women walked off the ship together, bound by the rawest form of honesty.',color:'#e84393'}
  }
};
