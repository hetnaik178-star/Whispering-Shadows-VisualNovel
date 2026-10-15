const STORY_FRACTURED = {
  id:'fractured', title:'Fractured Minds', genre:'Psychological Thriller', genreClass:'genre-psychological',
  cover:'../../Assets/images/cover_fractured_minds.png',
  desc:'Therapy is going well. Until you realize you\'re not the patient. You\'re the disease.',
  synopsis:'You are Dr. Aris Thorne, treating a patient with severe DID. But the patient\'s "alters" know things about your life they shouldn\'t. And the tape in the drawer changes everything.',
  duration:'~90 min', endings:'7 Endings', choiceCount:'150+ Choices',
  startMusic:'cosmonkey-dont-talk-315229.mp3',
  stats:[
    {id:'insight',name:'Insight',color:'#00cec9',max:100,start:20},
    {id:'delusion',name:'Delusion',color:'#e84393',max:100,start:50},
    {id:'control',name:'Control',color:'#d4a843',max:100,start:60}
  ],
  scenes:{},
  episodes:[
    // ═══════ EPISODE 1: THE PATIENT ═══════
    {
      title:'The Patient',
      desc:'Session 404. The patient knows things he shouldn\'t. The tape changes everything.',
      thumb:'../../Assets/images/fractured_mirror_room_1775246560378.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'cosmonkey-dont-talk-315229.mp3',
      startNode:'f1_1',
      nodes:{
        f1_1:{bg:'ModernLivingRoom.png',video:'F1.mp4',mood:'mystery',ambience:'clock',milestone:{icon:'🧠',title:'Session 404',desc:'The patient knows too much'},speaker:'narrator',text:'The grandfather clock ticks with surgical precision. Tick. Tick. Tick. You\'ve sat in this leather chair for eleven years, listening to broken minds try to reassemble themselves.',next:'f1_2'},
        f1_2:{speaker:'inner',text:'I am Dr. Aris Thorne. Fourteen published papers on dissociative identity disorders. Thirty-seven patients successfully reintegrated. I am in {italic}control{/italic}. I am very, very good at my job.',next:'f1_3'},
        f1_3:{speaker:'narrator',text:'Patient 404 — Elias Marsh — sits across from you. Seven documented alter personalities. Your most fascinating case.',next:'f1_4'},
        f1_4:{speaker:'narrator',text:'Today, something is different. Elias is watching you with an intensity you haven\'t seen. His eyes — normally darting — are locked on your {italic}wedding band{/italic}.',next:'f1_5'},
        f1_5:{speaker:'third',text:'The gold ring Dr. Thorne has worn for eight years, even though Sarah died three years ago. He tells himself it\'s sentiment. What it really is: a {blood}shackle{/blood}.',next:'f1_6'},
        f1_6:{speaker:'elias',speakerColor:'c-teal',text:'"She didn\'t like yellow gold, Doc." His voice is quiet. Almost tender. "Sarah. She told you on your anniversary. The third one, at that Italian place on River Street."',next:'f1_7'},
        f1_7:{speaker:'elias',speakerColor:'c-teal',text:'"But you bought it anyway. Because {italic}you{/italic} liked it. You always did put yourself first." He smiles — not warmly. {italic}Diagnostically.{/italic}',next:'f1_7b'},
        f1_7b:{speaker:'inner',text:'I want to dismiss him. I want to write "delusional grandiosity" in my notes and move on. But my hand will not pick up the pen.',next:'f1_7c'},
        f1_7c:{speaker:'thorne',speakerColor:'c-teal',text:'His voice drops an octave. A different {italic}alter{/italic} surfaces — older, quieter. "She forgave you, you know. Before the accident. She told {italic}me{/italic} to tell you. She knew you would need to hear it from someone you could not argue with."',next:'f1_7d'},
        f1_7d:{speaker:'inner',text:'Sarah forgave me. The one thing I needed more than therapy, more than time, more than any of my own professional tools — and a {blood}fractured stranger{/blood} is the vessel delivering it. My hands are shaking.',next:'f1_8'},
        f1_8:{speaker:'inner',text:'The detail is correct. Sarah hated yellow gold. I bought the cheaper ring and told myself she wouldn\'t notice. She noticed. She {italic}always{/italic} noticed.',next:'f1_9'},
        f1_9:{speaker:'narrator',text:'But you\'ve never told anyone that story. Not colleagues. Not your own therapist. It died with Sarah on a rainy Tuesday night.',next:'f1_10'},
        f1_10:{fx:'glitch',speaker:'narrator',text:'Elias\'s voice shifts. The pitch rises. And suddenly, {shake}horribly{/shake}, it sounds exactly like Sarah. Not an imitation. A perfect {blood}replica{/blood}.',choices:[
          {text:'"Stop it. How do you know that, Elias?"',hint:'Confrontational',next:'f1_11a',effects:{insight:10,control:-10}},
          {text:'Say nothing. Observe. You\'re the doctor.',hint:'Professional detachment',next:'f1_11b',effects:{control:15}},
          {text:'Stand up. Leave the room. This session is over.',hint:'Flight response — protect the self',next:'f1_11d',effects:{delusion:15}},
          {text:'Write down exactly what he said. Verify later.',hint:'Clinical documentation',next:'f1_11e',effects:{control:10,insight:5}},
          {text:'Check the session recorder. Is it running?',hint:'✦ Something isn\'t right about this room',premium:true,next:'f1_11c',effects:{insight:20}}
        ]},
        f1_11a:{speaker:'elias',speakerColor:'c-teal',text:'"How do I know? Because I was there, Aris. In the car. In the rain. In the sound the windshield made when it {blood}shattered{/blood}."',next:'f1_12'},
        f1_11b:{speaker:'narrator',text:'You write: "Eighth alter. Undocumented. Knowledge of therapist — source unknown." Your hand is {italic}shaking{/italic}.',next:'f1_12'},
        f1_11c:{speaker:'inner',text:'The session recorder is off. It should be on. I always turn it on. Unless... I didn\'t. Unless someone {italic}else{/italic} turned it off.',next:'f1_12'},
        f1_11d:{speaker:'narrator',text:'You reach for the door handle. Locked. You always lock the door during sessions. Standard protocol. But now you realize: you\'re locked in with a patient who knows your {blood}deepest secrets{/blood}.',next:'f1_12'},
        f1_11e:{speaker:'inner',text:'I write it all down. River Street restaurant. Third anniversary. Yellow gold. Every detail is correct. 100% accuracy. No prior disclosure. No possible source. Unless he {italic}was{/italic} there.',next:'f1_12'},
        f1_12:{speaker:'elias',speakerColor:'c-teal',text:'"Check the bottom drawer, Doctor. Play the tape. Time to {glow}wake up{/glow}."',next:'f1_13'},
        f1_13:{bg:'Abandoned ward with a child\'s drawing.png',transition:'CirclicFormStackingAsycnchronouslyharmonyThenBlast.mp4',speaker:'narrator',text:'The bottom drawer. Locked — personal items. Sarah\'s photograph. Your medication. And something that {shake}shouldn\'t be here{/shake}.',next:'f1_14'},
        f1_14:{speaker:'narrator',text:'A micro-cassette recorder. Hand-labeled: "{blood}SESSION 405{/blood}." Today is Session 404. The handwriting is {italic}yours{/italic}.',next:'f1_15'},
        f1_15:{speaker:'inner',text:'There is no Session 405. But the handwriting — that shaky capital E, that precise A — that\'s {italic}my hand{/italic}. How did I write a label for a session that hasn\'t happened?',choices:[
          {text:'Play the tape.',hint:'Face it',next:'f1_16a',effects:{insight:15}},
          {text:'Ask Elias what\'s on it.',hint:'Let HIM reveal the pattern',next:'f1_16b',effects:{control:5}},
          {text:'Destroy the tape. This is manipulation.',hint:'Deny — protect the self',next:'f1_16c',effects:{delusion:20}}
        ]},
        f1_16a:{speaker:'narrator',text:'Static. Then your voice — not {italic}this{/italic} you. Panicked. Raw. {italic}Weeping{/italic}.',next:'f1_17'},
        f1_16b:{speaker:'elias',speakerColor:'c-teal',text:'"Play it yourself. Every time, you destroy the tape. Every time, I record a new one. This is Session 405. We\'ve been here {shake}before{/shake}."',next:'f1_17'},
        f1_16c:{speaker:'narrator',text:'You snap the tape. A fragment catches: your voice, {shake}screaming{/shake}: "He won\'t leave! The doctor persona won\'t leave!"',next:'f1_17',fx:'shake'},
        f1_17:{video:'BookRotatingByItself.mp4',fx:'glitch',speaker:'narrator',text:'The tape plays: "{blood}My name is Elias Marsh and Dr. Aris Thorne is not real. He\'s an alter. He\'s MY alter. And he\'s getting stronger.{/blood}"',next:'f1_18'},
        f1_18:{bg:'fractured_mirror_room_1775246560378.png',fx:'flash',speaker:'narrator',text:'The room {shake}spins{/shake}. You look at the leather chair across from you.',next:'f1_19'},
        f1_19:{speaker:'dramatic',text:'It\'s {blood}empty{/blood}.',next:'f1_20',fx:'flash'},
        f1_20:{speaker:'narrator',text:'Elias was never in THAT chair. You are sitting in the {italic}patient\'s{/italic} chair. You have {italic}always{/italic} been sitting in the patient\'s chair.',next:'f1_ep_end'},
        f1_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 2: The Mirror',
          episodeSub:'Who are you? The doctor? The patient? Or something else?',
          bg:'Melting memories in a dark room.png',
          transition:'CirclicFormStackingAsycnchronouslyharmonyThenBlast.mp4',
          speaker:'dramatic',
          text:'{glow}"Dr. Aris Thorne" is a construct. A personality built three years ago — the night Sarah died. The mirror shows a face you\'re not sure is yours.{/glow}',
          next:'f2_1'
        }
      }
    },
    // ═══════ EPISODE 2: THE MIRROR ═══════
    {
      title:'The Mirror',
      desc:'Two realities fight for dominance. The office dissolves.',
      thumb:'../../Assets/images/Melting memories in a dark room.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'gvidon-spinning-head-271171.mp3',
      startNode:'f2_1',
      nodes:{
        f2_1:{bg:'Melting memories in a dark room.png',video:'F2.mp4',mood:'dark',ambience:'heartbeat',milestone:{icon:'🪞',title:'The Mirror',desc:'Two realities fight for your mind'},speaker:'narrator',text:'The office is {glitch}dissolving{/glitch}. Desk flickers between mahogany and plastic. Chairs shift between therapy furniture and institutional seating. Two realities, {italic}fighting{/italic}.',next:'f2_2'},
        f2_2:{speaker:'inner',text:'I am Dr. Aris Thorne. I am in control. I am— No. {italic}Someone{/italic} is Dr. Aris Thorne. But is that me? Was it {italic}ever{/italic} me?',next:'f2_3'},
        f2_3:{bg:'fractured_mirror_room_1775246560378.png',speaker:'narrator',text:'In the mirror, your reflection watches with different eyes — younger, more frightened. Elias\'s eyes. {italic}Your{/italic} eyes.',next:'f2_4'},
        f2_4:{bg:'Impossible stairways in stark symmetry.png',transition:'LilStimulatingglowy.mp4',speaker:'narrator',text:'The office peels in layers — wallpaper flaking to institutional green. Bookshelves collapse into bare concrete.',next:'f2_5'},
        f2_5:{speaker:'narrator',text:'A woman appears. White coat. Kind eyes. Utterly {italic}real{/italic}.',next:'f2_6'},
        f2_6:{speaker:'lena',speakerColor:'c-gold',text:'"Elias? Can you hear me?" Dr. Lena Huang. The {italic}real{/italic} therapist. The one treating you in the psychiatric ward for three years while "Dr. Thorne" played pretend inside your head.',next:'f2_7'},
        f2_7:{speaker:'lena',speakerColor:'c-gold',text:'"You\'re in Whitmore Psychiatric Care Facility. Room 14. You created Dr. Thorne to cope with the trauma of Sarah\'s death."',next:'f2_8'},
        f2_8:{speaker:'inner',text:'Whitmore. Room 14. Three years building a fiction where I\'m the healer. Where I\'m in control. Where I didn\'t {blood}kill my wife{/blood}.',next:'f2_9'},
        f2_9:{bg:'Trapped in terror within a dollhouse.png',speaker:'lena',speakerColor:'c-gold',text:'"Thorne is the strongest alter I\'ve documented. He has his own memories, mannerisms, career. He\'s not a fragment. He\'s a fully formed person who doesn\'t want to leave."',next:'f2_10'},
        f2_10:{bg:'fractured_upside_down_room_1775247053639.png',video:'F3.mp4',speaker:'narrator',text:'The room splits in half. On one side: the warm fiction of Dr. Thorne\'s office — safe, orderly. On the other: Room 14. Padded walls. Fluorescent lights. A plastic bed bolted to the floor.',choices:[
          {text:'Step toward Room 14. Face the truth.',hint:'Truth — even if it destroys you',next:'f2_11a',effects:{insight:20,control:-15}},
          {text:'Step into the office. You ARE Dr. Thorne.',hint:'The lie is safer',next:'f2_11b',effects:{delusion:20,control:15}},
          {text:'Touch Dr. Huang\'s hand. Is she real?',hint:'Anchor to another person',next:'f2_11d',effects:{insight:10,control:5}},
          {text:'Look at the floor. Neither side. Just breathe.',hint:'Centering — refuse to choose yet',next:'f2_11e',effects:{control:10}},
          {text:'Sit between both. Refuse the binary.',hint:'✦ Find a third path',premium:true,next:'f2_11c',effects:{insight:15,control:5}}
        ]},
        f2_11a:{fx:'shake',speaker:'narrator',text:'The office {shake}screams{/shake} as the fiction rips apart. Thorne howls: "{blood}NO! I won\'t go back!{/blood}"',next:'f2_12'},
        f2_11b:{speaker:'narrator',text:'The office solidifies. Dr. Huang fades. Room 14 disappears.',next:'f2_12'},
        f2_11c:{speaker:'lena',speakerColor:'c-gold',text:'"You\'re... integrating them. An alter and a core personality negotiating in real-time. I\'ve never seen this."',next:'f2_12'},
        f2_11d:{speaker:'lena',speakerColor:'c-gold',text:'Her hand is warm. Solid. Real. "I\'m here, Elias." She squeezes. "Both rooms are real. The office is where Thorne hides. Room 14 is where you {warm}heal{/warm}. Choose when you\'re ready."',next:'f2_12'},
        f2_11e:{speaker:'inner',text:'Neither side. Just the floor, cold against my palms. My breathing. My heartbeat. The only things I know are real. I don\'t need to choose a room. I need to choose {italic}myself{/italic}.',next:'f2_12'},
        f2_12:{bg:'MountainHighway.jpg',speaker:'narrator',text:'The crash. The rain. The windshield. Sarah\'s last words — not anger: "{warm}Eli, slow down.{/warm}" Then glass. Then silence. Then a mind shattering into seven pieces plus one magnificent {blood}lie{/blood}.',next:'f2_ep_end'},
        f2_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 3: The Ward',
          episodeSub:'Room 14. The real world bleeds through. The alters revolt.',
          bg:'fractured_hospital_ward.png.png',
          transition:'DottedlilcircletunnelLeadingToASmokyCloudyExploration.mp4',
          speaker:'dramatic',
          text:'{glow}The office is gone. Room 14 is real. And inside your mind, seven personalities are fighting for control of a body that belongs to all of them — and none of them.{/glow}',
          next:'f3_1'
        }
      }
    },
    // ═══════ EPISODE 3: THE WARD ═══════
    {
      title:'The Ward',
      desc:'Room 14 is real. The alters revolt. Dr. Thorne fights for survival.',
      thumb:'../../Assets/images/fractured_coma_ward.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'denys_brodovskyi-tell-me-what-379638.mp3',
      startNode:'f3_1',
      nodes:{
        f3_1:{bg:'fractured_hospital_ward.png.png',video:'F3.mp4',mood:'dark',ambience:'whispers',milestone:{icon:'🏥',title:'The Ward',desc:'Room 14 is real'},speaker:'narrator',text:'Room 14. Whitmore Psychiatric Care Facility. The walls are green. The bed is plastic. The window is reinforced glass. This is {italic}real{/italic}.',next:'f3_2'},
        f3_2:{speaker:'inner',text:'I\'m sitting on the floor. My hands are covered in marker ink — I\'ve been writing on the walls. "DR. THORNE IS NOT REAL." "PLAY THE TAPE." "SESSION 405." Over and over. For {italic}months{/italic}.',next:'f3_3'},
        f3_3:{speaker:'lena',speakerColor:'c-gold',text:'"Good morning, Elias. You\'re coming through today. The real Elias." She sits in the plastic chair. Calm. Patient. "Can you stay with me this time?"',next:'f3_4'},
        f3_4:{speaker:'narrator',text:'But Thorne isn\'t gone. He\'s in the back of your mind — furious, terrified, clawing at the walls of consciousness. He doesn\'t want to be a {italic}symptom{/italic}.',next:'f3_5'},
        f3_5:{speaker:'thorne',speakerColor:'c-purple',text:'"This is a delusion, Elias. YOU\'RE the alter. I\'M the real one. I have a career. Publications. {italic}Patients{/italic}. What do you have? A padded room and marker ink."',next:'f3_6'},
        f3_6:{speaker:'inner',text:'He sounds so convincing. Because he was built to be convincing. A personality engineered to seem more real than reality. That\'s his entire {italic}purpose{/italic}.',next:'f3_7'},
        f3_7:{speaker:'lena',speakerColor:'c-gold',text:'"Elias, I need to tell you something. Your other alters — the Child, the Soldier, the Librarian — they\'ve been communicating with me. Through drawings. Through journal entries."',next:'f3_8'},
        f3_8:{speaker:'lena',speakerColor:'c-gold',text:'"They want to help you. All of them. They want to be {warm}integrated{/warm} — absorbed back into the core personality. But Thorne is blocking them."',next:'f3_9'},
        f3_9:{speaker:'thorne',speakerColor:'c-purple',text:'"BLOCKING them? I\'m {italic}protecting{/italic} them! Without me, Elias is a guilt-crippled wreck who can\'t function. I gave him competence. I gave him {warm}purpose{/warm}."',next:'f3_10'},
        f3_10:{speaker:'lena',speakerColor:'c-gold',text:'"He\'s not wrong about that. Thorne was built from your best qualities — intelligence, composure, authority. The problem is he also carries none of your empathy, your guilt, or your {warm}love{/warm}."',choices:[
          {text:'"Why would guilt be something I WANT back?"',hint:'Challenge the process',next:'f3_11a',effects:{delusion:10,control:10}},
          {text:'"Because guilt is how we know we care."',hint:'Accept the pain\'s purpose',next:'f3_11b',effects:{insight:20}},
          {text:'"Thorne — what do YOU remember about Sarah?"',hint:'✦ The alter\'s blind spot',premium:true,next:'f3_11c',effects:{insight:25}}
        ]},
        f3_11a:{speaker:'lena',speakerColor:'c-gold',text:'"Because without guilt, you can\'t grieve. Without grief, you can\'t heal. And without healing, you stay in Room 14 forever."',next:'f3_12'},
        f3_11b:{speaker:'lena',speakerColor:'c-gold',text:'She smiles — the first real warmth. "That\'s Elias talking. Thorne would never say that." She writes something in your file. "Progress. {warm}Real{/warm} progress."',next:'f3_12'},
        f3_11c:{speaker:'thorne',speakerColor:'c-purple',text:'"Sarah. Wife. Deceased. Three years. Car accident." Factual. Clinical. Empty.',next:'f3_11d'},
        f3_11d:{speaker:'inner',text:'He doesn\'t know her {italic}laugh{/italic}. Doesn\'t know how she hummed when she cooked. Doesn\'t know the way she said "Eli" like it was the only word that mattered. Thorne has my brain but not my {warm}heart{/warm}.',next:'f3_12'},
        f3_12:{bg:'fractured_therapy_session.png.png',speaker:'narrator',text:'Dr. Huang brings something into the room. A box. Inside: Sarah\'s belongings. The hospital stored them when you were admitted.',next:'f3_13'},
        f3_13:{speaker:'lena',speakerColor:'c-gold',text:'"Her sister brought these. She\'s been visiting every month. You never remember because Thorne takes over during visits."',next:'f3_14'},
        f3_14:{speaker:'narrator',text:'Inside the box: a worn cookbook with margin notes in Sarah\'s handwriting. A scarf that still holds traces of her perfume. And a letter — sealed, addressed to "Eli."',next:'f3_15'},
        f3_15:{speaker:'inner',text:'She wrote me a letter? When? The handwriting is shaky — she wrote this {italic}after{/italic} the diagnosis. After she knew she was dying. Before the crash.',next:'f3_16'},
        f3_16:{speaker:'narrator',text:'The letter reads: "Eli — if you\'re reading this, I\'m gone and you\'re probably falling apart. That\'s okay. Fall apart. But then put yourself back together. Not for me. For {warm}you{/warm}."',next:'f3_17'},
        f3_17:{speaker:'narrator',text:'"P.S. — The ring is ugly. I loved you anyway. I loved you {italic}because{/italic} of the ugly ring. Because it was so completely, stubbornly, beautifully {warm}you{/warm}."',next:'f3_18'},
        f3_18:{speaker:'thorne',speakerColor:'c-purple',text:'"Don\'t read that. It\'s emotional manipulation. She can\'t {italic}forgive{/italic} you — she\'s dead."',next:'f3_19'},
        f3_19:{speaker:'inner',text:'And there it is. The thing Thorne can never understand. The dead can forgive. Love doesn\'t need a pulse. And a letter written in shaky handwriting is more real than any {glow}fiction{/glow}.',next:'f3_ep_end'},
        f3_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 4: The Labyrinth',
          episodeSub:'Inside the mind. Every alter speaks. The architecture of a broken psyche.',
          bg:'fractured_mindscape_corridor.png.png',
          transition:'CirclicFormStackingAsycnchronouslyharmonyThenBlast.mp4',
          speaker:'dramatic',
          text:'{glow}Sarah\'s letter. Thorne\'s fury. Seven voices in one skull. To heal, you must walk into the labyrinth of your own mind — and face every version of yourself.{/glow}',
          next:'f4_1'
        }
      }
    },
    // ═══════ EPISODE 4: THE LABYRINTH ═══════
    {
      title:'The Labyrinth',
      desc:'Inside the mindscape. Face every alter. Understand why each exists.',
      thumb:'../../Assets/images/fractured_memory_corridor.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'anomy5-dark-electronic-464393.mp3',
      startNode:'f4_1',
      nodes:{
        f4_1:{bg:'fractured_mindscape_corridor.png.png',video:'F4.mp4',mood:'mystery',ambience:'whispers',milestone:{icon:'🧩',title:'The Labyrinth',desc:'Into the architecture of a broken mind'},speaker:'narrator',text:'Dr. Huang guides you into a meditative state. "I want you to go inside, Elias. Meet them. Understand why each alter exists. Integration requires {warm}consent{/warm} — theirs and yours."',next:'f4_2'},
        f4_2:{speaker:'narrator',text:'The mindscape. Your inner world. It looks like a sprawling building — corridors stretching in every direction. Each door leads to a different alter\'s domain. Seven doors. Seven selves.',next:'f4_3'},
        f4_3:{bg:'Impossible stairways in stark symmetry.png',speaker:'narrator',text:'The first door: The Child. Behind it, a sunlit bedroom from your childhood. Toys scattered. A window showing an endless summer day.',next:'f4_4'},
        f4_4:{speaker:'the_child',speakerColor:'c-cyan',text:'A boy of seven sits on the bed. Your face, thirty years younger. "Hi, Eli. I\'ve been waiting." He holds a stuffed rabbit. "I\'m the part of you that remembers how to be {warm}happy{/warm}."',next:'f4_5'},
        f4_5:{speaker:'the_child',speakerColor:'c-cyan',text:'"I was born the day Dad left. You needed someone to hold the good memories while the bad ones flooded in. I kept your joy {italic}safe{/italic}."',next:'f4_6'},
        f4_6:{speaker:'inner',text:'A seven-year-old holding the joy of a broken family together. He\'s been doing it for thirty years. He must be so {italic}tired{/italic}.',choices:[
          {text:'"You can rest now. I\'ll carry the joy myself."',hint:'Accept the Child',next:'f4_7a',effects:{insight:15}},
          {text:'"I\'m not ready to feel that much. Not yet."',hint:'Honest — pace the integration',next:'f4_7b',effects:{control:10}}
        ]},
        f4_7a:{speaker:'narrator',text:'The Child smiles. Dissolves into warm light. You feel a rush of forgotten joy — ice cream on a summer porch, Sarah\'s laughter, the smell of rain on hot asphalt.',next:'f4_8'},
        f4_7b:{speaker:'the_child',speakerColor:'c-cyan',text:'"That\'s okay. I\'m patient. I\'ve been patient for thirty years." He smiles. "I\'ll be here."',next:'f4_8'},
        f4_8:{bg:'Trapped in terror within a dollhouse.png',speaker:'narrator',text:'The second door: The Soldier. A military barracks. Clean, rigid, austere. A man in fatigues doing push-ups with mechanical precision.',next:'f4_9'},
        f4_9:{speaker:'soldier',speakerColor:'c-red',text:'"I\'m discipline. When your life fell apart, someone had to {italic}function{/italic}. Eat. Sleep. Move. I kept the body alive while the mind broke."',next:'f4_10'},
        f4_10:{speaker:'narrator',text:'The third door: The Librarian. An infinite library. Every book is a memory, organized by date.',next:'f4_11'},
        f4_11:{speaker:'librarian',speakerColor:'c-amber',text:'"I archive everything. Every memory Thorne tries to erase, I file. He\'s been deleting the crash for three years. I\'ve been saving copies." She hands you a book labeled "{warm}Sarah.{/warm}"',next:'f4_12'},
        f4_12:{bg:'Abandoned ward with a child\'s drawing.png',speaker:'narrator',text:'The fourth door: The Judge. A courtroom. You sit in the defendant\'s chair. The Judge is you — older, harsher, eyes like flint.',next:'f4_13'},
        f4_13:{speaker:'judge',speakerColor:'c-red',text:'"Guilty. You were driving too fast. You were arguing about the ring. You took your eyes off the road for {blood}three seconds{/blood}. Three seconds and she\'s gone."',next:'f4_14'},
        f4_14:{speaker:'inner',text:'The Judge carries every ounce of guilt I can\'t face. He\'s been prosecuting me inside my own skull for three years. No defense attorney. Just an endless {blood}verdict{/blood}.',next:'f4_15'},
        f4_15:{bg:'fractured_mirror_room_1775246560378.png',speaker:'narrator',text:'The fifth door: The Ghost. A kitchen. Sarah\'s kitchen. She\'s cooking pasta, humming that song she always hummed.',next:'f4_16'},
        f4_16:{speaker:'sarah_ghost',speakerColor:'c-gold',text:'"I\'m not really her. I\'m the echo. The impression she left on your neurons." She stirs the sauce. "But the love? That\'s {warm}real{/warm}. Love doesn\'t need a body to be real."',next:'f4_17'},
        f4_17:{speaker:'narrator',text:'Two more doors. The Protector — pure rage, chained in a dark room, keeping the worst memories locked away. And the last door...',next:'f4_18'},
        f4_18:{bg:'fractured_upside_down_room_1775247053639.png',speaker:'narrator',text:'Dr. Thorne\'s door. A perfect replica of the office. He sits behind the mahogany desk. Confident. Composed. And absolutely {blood}terrified{/blood}.',next:'f4_19'},
        f4_19:{speaker:'thorne',speakerColor:'c-purple',text:'"I know what you\'re doing. Integration. You\'re going to absorb them all back and then {italic}unmake{/italic} me." His hands — your hands — are shaking.',next:'f4_20'},
        f4_20:{speaker:'thorne',speakerColor:'c-purple',text:'"I\'m not just a defense mechanism, Elias. I have thoughts. Preferences. I like {italic}Earl Grey{/italic}. I prefer morning to evening. I have opinions about Dostoevsky." His voice cracks. "Am I not {warm}alive{/warm}?"',next:'f4_21'},
        f4_21:{speaker:'inner',text:'He\'s right. He IS alive, in his way. A personality with opinions and preferences and {italic}fear{/italic}. Unmaking him feels less like healing and more like {blood}murder{/blood}.',choices:[
          {text:'"You\'re alive. And I\'m sorry."',hint:'Acknowledge him — but integration continues',next:'f4_22a',effects:{insight:20}},
          {text:'"Maybe you don\'t have to die. Maybe you can become part of who I am."',hint:'Merge instead of erase',next:'f4_22b',effects:{insight:15,control:10}},
          {text:'"What are you most afraid of, Aris?"',hint:'✦ The alter\'s deepest fear',premium:true,next:'f4_22c',effects:{insight:30}}
        ]},
        f4_22a:{speaker:'thorne',speakerColor:'c-purple',text:'A long silence. "Then do it well. Don\'t waste what I built." He straightens his tie. One last act of {warm}composure{/warm}.',next:'f4_ep_end'},
        f4_22b:{speaker:'thorne',speakerColor:'c-purple',text:'"Part of...?" He considers. "I would retain my competence? My analytical framework?" A hesitant nod. "I can accept that. I can be a {warm}tool{/warm} instead of a tyrant."',next:'f4_ep_end'},
        f4_22c:{speaker:'thorne',speakerColor:'c-purple',text:'His composure shatters. "That I\'m nothing. That three years of being a person — of having a name and a voice and {italic}thoughts{/italic} — amounts to nothing. That I\'m just noise in a broken brain." He weeps. "I don\'t want to be {blood}nothing{/blood}."',next:'f4_ep_end'},
        f4_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 5: The Integration',
          episodeSub:'Seven voices. One choice. Who do you choose to be?',
          bg:'fractured_final_session.png.png',
          transition:'CrystallizedTimeLapse.mp4',
          speaker:'dramatic',
          text:'{glow}Seven alters. Seven fragments of a shattered mind. The labyrinth has been walked. Every voice heard. Now — in Room 14, with Dr. Huang, with Sarah\'s letter in your hand — choose who you become.{/glow}',
          next:'f5_1'
        }
      }
    },
    // ═══════ EPISODE 5: THE INTEGRATION ═══════
    {
      title:'The Integration',
      desc:'Every alter speaks. Every truth laid bare. Choose who you become.',
      thumb:'../../Assets/images/fractured_therapy_room_dark.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'paulyudin-piano-piano-music-508963.mp3',
      startNode:'f5_1',
      nodes:{
        f5_1:{bg:'fractured_final_session.png.png',video:'F5.mp4',mood:'dark',ambience:'clock',milestone:{icon:'💫',title:'The Integration',desc:'Who do you choose to be?'},speaker:'third',text:'Inside the mind of the person who might be Elias — or Aris — or neither — a final reckoning begins.',next:'f5_2'},
        f5_2:{bg:'Impossible stairways in stark symmetry.png',speaker:'narrator',text:'A white void — the innerscape at its core. Seven figures share this skull. The Child humming Sarah\'s song. The Soldier standing at attention. The Librarian organizing invisible files.',next:'f5_3'},
        f5_3:{speaker:'narrator',text:'The Ghost — Sarah\'s echo — watching with patient {warm}love{/warm}. The Judge radiating shame. The Protector, unshackled, standing guard. And Dr. Thorne — tall, composed, waiting for the {italic}verdict{/italic}.',next:'f5_4'},
        f5_4:{speaker:'the_child',speakerColor:'c-cyan',text:'"I\'m ready. I want to come home."',next:'f5_5'},
        f5_5:{speaker:'soldier',speakerColor:'c-red',text:'"The body needs one commander. I\'ll stand down."',next:'f5_6'},
        f5_6:{speaker:'librarian',speakerColor:'c-amber',text:'"I\'ll file myself under \'resolved.\' But I\'m keeping the Sarah folder {italic}permanently{/italic}."',next:'f5_7'},
        f5_7:{speaker:'judge',speakerColor:'c-red',text:'"I\'m... tired of prosecuting. If someone could just... {warm}forgive{/warm}... I could rest."',next:'f5_8'},
        f5_8:{speaker:'thorne',speakerColor:'c-purple',text:'"I won\'t go quietly. But I won\'t fight either. I am what I am — your best and worst defense mechanism. Use me or {blood}unmake me{/blood}. But at least {italic}remember{/italic} I existed."',next:'f5_9'},
        f5_9:{bg:'Melting memories in a dark room.png',video:'SandComingOutFromHand.mp4',speaker:'narrator',text:'The Ghost moves forward. Sarah\'s echo — the way she looked on your wedding day. White dress. That smile that could stop time.',next:'f5_10'},
        f5_10:{speaker:'sarah',speakerColor:'c-gold',text:'"Hey, you." She sits in white space. "Took you long enough."',next:'f5_11'},
        f5_11:{speaker:'narrator',text:'"I\'m sorry." Every version whispers it simultaneously. Seven voices, one word, three years overdue.',next:'f5_12'},
        f5_12:{speaker:'sarah',speakerColor:'c-gold',text:'"I know. And I {warm}forgive{/warm} you. I forgave you the {italic}moment{/italic} it happened. The only person who hasn\'t forgiven you is {italic}you{/italic}."',next:'f5_13'},
        f5_13:{speaker:'sarah',speakerColor:'c-gold',text:'"That\'s why you shattered. That\'s why you built Thorne. Because forgiving yourself feels like {italic}letting me go{/italic}."',next:'f5_14'},
        f5_14:{speaker:'sarah',speakerColor:'c-gold',text:'"But letting go doesn\'t mean forgetting. It means putting me where I belong — not in a drawer, not in an alter, but in your {warm}heart{/warm}. Where I always was."',next:'f5_15'},
        f5_15:{bg:'fractured_mirror_room_1775246560378.png',speaker:'narrator',text:'The innerscape stills. Seven alters. One echo. One man holding a letter that smells like the perfume of someone who died loving him.',next:'f5_final'},
        f5_final:{critical:true,speaker:'dramatic',text:'{glow}Seven voices. One truth. The mirror waits. Who do you choose to be?{/glow}',choices:[
          {text:'Shatter the mirror. Accept you are Elias. Face the raw truth.',hint:'🪞 REALITY — Painful. Brutal. The only way to {italic}heal{/italic}.',next:'f5_end_accept',effects:{insight:50},critical:true,fx:'shake'},
          {text:'Turn away. You ARE Dr. Thorne. Retreat into the fiction.',hint:'💊 DELUSION — The lie is safe. The lie is warm.',next:'f5_end_deny',effects:{delusion:50},critical:true},
          {text:'Let both exist. Elias and Aris, side by side. Permanent coexistence.',hint:'🧩 COEXIST — Two souls, one body, by mutual consent.',next:'f5_end_coexist',effects:{control:30},critical:true},
          {text:'Walk through the mirror. Find Sarah in the space between.',hint:'💔 SARAH — Follow your heart into the unknown.',next:'f5_end_sarah',effects:{insight:20},critical:true},
          {text:'Speak to Sarah one last time. Find forgiveness at the center.',hint:'💛 GRIEF — The hardest conversation you\'ll ever have.',next:'f5_end_forgive',effects:{insight:30},critical:true},
          {text:'Merge ALL of them. Elias. Aris. Child. Soldier. Ghost. Become someone new.',hint:'✦ 🧠 SYNTHESIS — Unprecedented. Terrifying. Beautiful.',premium:true,next:'f5_end_merge',effects:{control:30,insight:20},critical:true}
        ]},
        f5_end_accept:{bg:'BlurryAesthetic.png',transition:'RedFierybutinSyncSymbolic.mp4',mood:'dark',fx:'shake',speaker:'narrator',text:'You shatter the mirror. {shake}Permanently.{/shake} Thorne screams and dissolves. The alters collapse inward like a dying star. You fall on the cold floor of Room 14, gasping. Dr. Huang holds your hand. "{warm}Welcome back, Elias.{/warm}" You\'re broken. You\'re devastated. You\'re in a psychiatric ward in a hospital gown. And for the first time in three years, you are utterly, terrifyingly {italic}real{/italic}.',next:'_END',ending:'accept'},
        f5_end_deny:{bg:'ModernLivingRoom.png',mood:'calm',speaker:'narrator',text:'You straighten the tie. Eject the cassette. Cross your legs. "Next patient." In Room 14, Elias Marsh stares at the ceiling with {blood}glassy eyes{/blood}. Dr. Huang writes: "Subject retreated to primary alter. Prognosis: {blood}guarded{/blood}." She closes the file. The grandfather clock ticks. And ticks. And {italic}ticks{/italic}.',next:'_END',ending:'deny'},
        f5_end_merge:{bg:'CityMorningAesthectics.png',transition:'CrystallizedTimeLapse.mp4',mood:'mystery',fx:'flash',milestone:{icon:'🧠',title:'Synthesis',desc:'Something unprecedented is born'},speaker:'narrator',text:'You accept Elias\'s guilt. Retain Aris\'s intellect. The Child\'s joy. The Soldier\'s discipline. The Librarian\'s precision. The Judge\'s accountability. Sarah\'s {warm}warmth{/warm}. When you open your eyes in Room 14, you are someone {glow}new{/glow}. "I know who I am now," you say. "All of them. None of them. {italic}Me{/italic}." Dr. Huang watches with professional fascination and human {warm}awe{/warm}. "This has never happened before." You smile — and for the first time, every part of you smiles {italic}together{/italic}.',next:'_END',ending:'merge'},
        f5_end_forgive:{bg:'WhitePeacefulFlower.jpg',transition:'GoldenSparkleTunnelForward.mp4',mood:'warm',music:'fassounds-good-night-lofi-cozy-chill-music-160166.mp3',milestone:{icon:'💛',title:'Forgiveness',desc:'The hardest word. The only cure.'},speaker:'narrator',text:'Past Aris. Past Elias. Past every alter, every label, every diagnosis. Down to where Sarah waits. The rain is {warm}gentle{/warm} here and the glass isn\'t broken. She takes your hands. "I forgive you." And then, the word you\'ve been choking on for three years: "{warm}I forgive me.{/warm}" When you wake in Room 14, your face is swollen and wet and {italic}real{/italic}. The letter is pressed against your chest. "I\'m ready to talk, Dr. Huang. For {warm}real{/warm} this time." She smiles. The clock ticks. And for the first time, it sounds like a {italic}heartbeat{/italic}.',next:'_END',ending:'forgive'}
      }
    }
  ],
  endings:{
    accept:{icon:'🪞',title:'Shattered Truth',text:'You broke the illusion. The road back is brutal and long. But you are walking it — as yourself.',color:'#00cec9'},
    deny:{icon:'💊',title:'The Safe Delusion',text:'You retreated into the lie. Safe, quiet, permanent. The clock ticks forever.',color:'#e84393'},
    merge:{icon:'🧠',title:'Synthesis',text:'Doctor and patient, child and soldier, guilt and joy — merged into something unprecedented. Something the textbooks don\'t have a name for yet.',color:'#8a5cf5'},
    forgive:{icon:'💛',title:'Forgiveness',text:'You found Sarah at the center. You said the word. The clock ticks like a heartbeat now.',color:'#d4a843'},
    coexist:{icon:'🧩',title:'Coexistence',text:'Two minds in one body, by choice. Dr. Thorne handles Tuesdays and Thursdays. Elias gets the weekends. They share the tea.',color:'#10b981'},
    sarah:{icon:'💔',title:'Beyond the Mirror',text:'You walked through the glass and found Sarah waiting on the other side. Not death — transcendence. Room 14 holds an empty body. But somewhere, two souls dance in the rain.',color:'#636e72'},
    professional:{icon:'📝',title:'The Professional',text:'You chose to become a real therapist — using your experience as both doctor and patient. Dr. Elias Thorne. The first therapist who truly understands dissociation from the inside.',color:'#c4364a'}
  }
};
