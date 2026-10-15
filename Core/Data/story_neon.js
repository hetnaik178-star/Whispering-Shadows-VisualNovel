const STORY_NEON = {
  id:'neon', title:'Neon Requiem', genre:'Cyberpunk Thriller', genreClass:'genre-cyberpunk',
  cover:'../../Assets/images/cover_neon.png',
  desc:'A hacker. A conspiracy. A city of neon lies. Choose who to trust in the rain-soaked underworld.',
  synopsis:'Neo-Kyoto, 2089. You\'re Kira — a freelance hacker who intercepted the most dangerous data packet in the hemisphere. Inside: evidence of a mind-control program targeting millions.',
  duration:'~90 min', endings:'7 Endings', choiceCount:'150+ Choices',
  startMusic:'freemusiclab-dark-cyberpunk-i-free-background-music-i-free-music-lab-release-469493.mp3',
  stats:[
    {id:'heat',name:'Corp Heat',color:'#e84393',max:100,start:20},
    {id:'ally',name:'Ally Trust',color:'#00cec9',max:100,start:40},
    {id:'intel',name:'Intel',color:'#d4a843',max:100,start:10}
  ],
  scenes:{},
  episodes:[
    // ═══════ EPISODE 1: THE INTERCEPT ═══════
    {
      title:'The Intercept',
      desc:'A stolen data packet. A city-wide conspiracy. Thirty minutes before they find you.',
      thumb:'../../Assets/images/neon_alleyway_png_1775215718515.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'freemusiclab-dark-cyberpunk-i-free-background-music-i-free-music-lab-release-469493.mp3',
      startNode:'n1_1',
      nodes:{
        n1_1:{bg:'scene_neon_alley.png',video:'N1.mp4',mood:'tense',ambience:'rain',milestone:{icon:'📡',title:'The Intercept',desc:'You grabbed the most dangerous packet in Neo-Kyoto'},speaker:'narrator',text:'Rain hammers Neo-Kyoto like the city is being punished. Holographic billboards flicker overhead — perfect faces selling perfect lives to a city drowning in corporate lies.',next:'n1_2'},
        n1_2:{speaker:'inner',text:'Thirty minutes ago, I was a nobody. A freelance hacker scraping rent by cracking low-level security jobs for underground pharmacies.',next:'n1_3'},
        n1_3:{speaker:'inner',text:'Now I\'m holding the most dangerous data chip in the hemisphere and I can feel their drones closing in like sharks circling blood in digital water.',next:'n1_4'},
        n1_4:{bg:'neon_alleyway_png_1775215718515.png',speaker:'narrator',text:'You hunch in a doorway on Level 7. Neon signs paint your face in shifting blues and pinks. Rain runs down your collar like cold fingers tracing your spine.',next:'n1_5'},
        n1_5:{speaker:'kira',speakerColor:'c-cyan',text:'"Okay. Think, Kira. Deep breath." You press your palm against the rain-slicked brick. "Military-grade encryption on a routine data transfer."',next:'n1_6'},
        n1_6:{speaker:'inner',text:'Military-grade encryption on a routine transfer? That\'s like putting a bank vault on a bathroom stall. Whatever\'s on this chip... people have {blood}disappeared{/blood} for far less.',next:'n1_6b'},
        n1_6b:{speaker:'inner',text:'The rain tastes metallic here — recycled water, pharmaceutical runoff, and the faint chemical signature of aerosol surveillance dust. Everything in this city is {italic}watching{/italic}.',next:'n1_6c'},
        n1_6c:{speaker:'narrator',text:'A homeless drone technician huddles under a strip of polymer sheeting across the alley. He watches you with eyes that glow faintly amber — neural augments running on fading battery. Even the forgotten have chips in this town.',next:'n1_7'},
        n1_7:{bg:'Rain-soaked fire escape at night.png',speaker:'third',text:'What Kira doesn\'t know — what she can\'t possibly know — is that the intercept wasn\'t an accident. Someone inside Axiom routed that packet directly through her access point. Someone who wanted exactly this.',next:'n1_7b'},
        n1_7b:{speaker:'third',text:'The question that should terrify Kira — the question she hasn\'t asked yet — isn\'t who sent the data. It\'s {italic}why{/italic} they chose {italic}her{/italic}.',next:'n1_8'},
        n1_8:{speaker:'narrator',text:'Your wrist comm buzzes. Two messages appear simultaneously. One from Zara — underground journalist, purple mohawk, personal vendetta against Axiom Corp.',next:'n1_9'},
        n1_9:{speaker:'narrator',text:'One from an unknown number. Using Axiom\'s own encryption signature. A fox calling from inside the henhouse.',next:'n1_10'},
        n1_10:{speaker:'inner',text:'The microsecond I grabbed that packet, quantum surveillance flagged the intercept. They already know my location within fifty meters. Two messages. Two paths. Clock\'s ticking.',next:'n1_11'},
        n1_11:{bg:'Cyberpunk cityscape under neon rain.png',video:'urbanlife.mp4',speaker:'narrator',text:'Above you, an Axiom drone sweeps the alley with a searchlight. You press deeper into shadow. The chip in your pocket feels like a live grenade.',choices:[
          {text:'Answer Zara. She\'s been reliable before.',hint:'Trust the underground resistance',next:'n1_12a',effects:{ally:15}},
          {text:'Answer the Axiom number. Know your enemy.',hint:'Risky but informative',next:'n1_12b',effects:{intel:20,heat:10}},
          {text:'Ignore both. Move first, communicate later.',hint:'Trust nobody — survive alone',next:'n1_12d',effects:{heat:-5}},
          {text:'Broadcast both signals on an open frequency. Let everyone hear.',hint:'Chaos is a weapon',next:'n1_12e',effects:{heat:15,intel:10}},
          {text:'Hack BOTH signals. Read them without answering.',hint:'✦ Shadow protocol — listen before leaping',premium:true,next:'n1_12c',effects:{intel:15,ally:5}}
        ]},
        n1_12a:{speaker:'zara',speakerColor:'c-pink',text:'"Kira! Are you compromised? Half the darknet is buzzing about your intercept. Whatever you grabbed, it\'s got Axiom scrambling tactical response teams."',next:'n1_13a'},
        n1_13a:{speaker:'zara',speakerColor:'c-pink',text:'"Meet me at the Rusty Dragon, Level 42. I have a secure broadcast rig. We can leak this city-wide before Axiom locks it down. But {italic}hurry{/italic}."',next:'n1_14a'},
        n1_14a:{speaker:'zara',speakerColor:'c-pink',text:'"And Kira? Don\'t decrypt the chip yourself. There\'s a neural-lock subroutine. It\'ll {blood}fry your cortical implant{/blood}. I have bypass tools."',next:'n1_15'},
        n1_12b:{speaker:'unknown',speakerColor:'c-purple',text:'"Ms. Kira. Don\'t hang up. My name is Director Voss. I\'m calling to save your life — genuinely. The data you intercepted is incomplete."',next:'n1_13b'},
        n1_13b:{speaker:'unknown',speakerColor:'c-purple',text:'"Publishing it will cause chaos, not justice. I\'m offering immunity, a new identity, ten million credits. Sixty seconds to decide."',choices:[
          {text:'"Not interested, Voss. Some things aren\'t for sale."',hint:'Defiant — they\'ll come harder',next:'n1_15',effects:{heat:20,ally:10}},
          {text:'"I\'m listening. Where do we meet?"',hint:'Play along — gather intel',next:'n1_13d',effects:{intel:25,heat:5}}
        ]},
        n1_13d:{bg:'Futuristic boardroom with city views.png',speaker:'narrator',text:'Level 12, Bay 7. A hoverlimo. Director Voss steps out — silver hair, chrome jawline, obsidian eyes. Ten million credits on a chip in her outstretched hand.',choices:[
          {text:'Take the money. Walk away. Survive.',hint:'💰 Sell out — safety for silence',next:'n1_end_sellout'},
          {text:'Play along but secretly copy the data first.',hint:'Double agent',next:'n1_15',effects:{intel:20,heat:15}}
        ]},
        n1_12d:{speaker:'inner',text:'Silence is the hacker\'s best friend. I pocket the comm and start moving. Level 12 maintenance shaft, then rooftop transit to Level 42. The long way. The {italic}safe{/italic} way.',next:'n1_15'},
        n1_12e:{speaker:'narrator',text:'You broadcast both frequencies wide open. For six seconds, every device within range plays Zara\'s panic and Voss\'s offer simultaneously. Chaos erupts on the darknet. Axiom\'s encrypted channel is {blood}exposed{/blood}.',next:'n1_12e2'},
        n1_12e2:{speaker:'inner',text:'Three thousand hackers just downloaded an Axiom Corp encryption key. Voss\'s secure comms are compromised. She\'ll be furious. But now she has bigger problems than one freelancer with a data chip.',next:'n1_15'},
        n1_12c:{speaker:'inner',text:'Both signals decoded simultaneously. Zara\'s is genuine — elevated stress hormones in her vocal modulation. Voss\'s signal has a tracer attached to the handshake protocol. She\'s trying to {blood}pinpoint my location{/blood}.',next:'n1_15'},
        n1_15:{bg:'Rainy night on the suspension bridge.png',speaker:'narrator',text:'You weave through rain-slicked alleys toward Level 42. A holographic billboard shows a woman smiling serenely: "AXIOM CORP — Building Tomorrow Today."',next:'n1_15b'},
        n1_15b:{speaker:'narrator',text:'Below the billboard, a maintenance drone flickers and dies. Its searchlight sputters once and goes dark. Not a malfunction — someone else is scrambling Axiom\'s drones. You\'re not the only resistance in the rain tonight.',choices:[
          {text:'Investigate who\'s scrambling the drones. A potential ally.',hint:'Find the other rebel',next:'n1_15c',effects:{ally:10}},
          {text:'Ignore it. Every second counts.',hint:'Don\'t get distracted',next:'n1_16',effects:{heat:-5}},
          {text:'Piggyback on the scrambling signal to mask your own movement.',hint:'✦ Use their cover as your own',premium:true,next:'n1_15d',effects:{intel:10,heat:-10}}
        ]},
        n1_15c:{speaker:'narrator',text:'You trace the signal to a rooftop two blocks away. A kid — no older than fifteen — hunches over a military-grade jammer. She sees you and freezes.',next:'n1_15c2'},
        n1_15c2:{speaker:'kira',speakerColor:'c-cyan',text:'"Relax. I\'m on your side. Who are you?" The kid grins: "They call me Pixel. And I\'ve been waiting for someone to finally grab that data packet."',next:'n1_16'},
        n1_15d:{speaker:'inner',text:'Their scrambling frequency is crude but effective. I mirror it, phase-shifted by twelve degrees. To Axiom\'s sensors, I\'m invisible. Moving through Neo-Kyoto like a {glow}ghost{/glow} in the rain.',next:'n1_16'},
        n1_16:{speaker:'inner',text:'Running through a rain-soaked dystopia carrying stolen data, chased by corporate drones. I\'ve seen this movie. It never ends well for the hacker.',next:'n1_16b'},
        n1_16b:{speaker:'kira',speakerColor:'c-cyan',text:'"Okay. Chip is encrypted. They cannot read it remotely. But if they catch me, they do not {italic}need{/italic} to read it."',next:'n1_16c'},
        n1_16c:{speaker:'inner',text:'The rain tastes like copper. Possibly a burst coolant pipe overhead. Possibly adrenaline warping my senses. Adrenaline does that — makes everything taste like the end of something.',next:'n1_16d'},
        n1_16d:{speaker:'zara',speakerColor:'c-pink',text:'Her voice crackles back on my comm without me answering it. "Kira. I can see three tactical units converging on your block. You have {blood}ninety seconds{/blood}. Stop running and start {italic}thinking{/italic}."',next:'n1_16e'},
        n1_16e:{speaker:'kira',speakerColor:'c-cyan',text:'"Thinking IS running, Zara. I do my best thinking at speed." A pause. Then: "...Actually that is a lie. I am terrified."',next:'n1_16f'},
        n1_16f:{speaker:'zara',speakerColor:'c-pink',text:'"Good. Terrified people make {italic}rational{/italic} choices. See the green maintenance door on your left? Behind it is a Level 12 service elevator. Get in. I will handle the rest."',next:'n1_17'},
        n1_17:{speaker:'inner',text:'But here I am anyway. Because someone has to be stupid enough to do the right thing.',next:'n1_18'},
        n1_18:{bg:'Hidden digital network in dark warehouse.png',video:'AccessGrantedOrVirtualSystemNavigation.mp4',fx:'flash',speaker:'narrator',text:'Three Axiom enforcement drones round the corner ahead. Searchlights blazing. Targeting lasers paint three red dots on your chest.',choices:[
          {text:'Dive into the maintenance tunnels!',hint:'Escape underground',next:'n1_19a',effects:{heat:-5},fx:'shake'},
          {text:'Hack the drones. Redirect their patrol.',hint:'Brilliant if it works',next:'n1_19b',effects:{intel:15,heat:5}},
          {text:'Stand still. Hands up. Bluff your way out.',hint:'Social engineering — not every hack uses code',next:'n1_19c',effects:{heat:10}},
          {text:'Use the data chip as bait. Throw it one direction, run the other.',hint:'Sacrifice the evidence temporarily',next:'n1_19d',effects:{heat:-10}},
          {text:'Trigger an EMP pulse from your cortical implant.',hint:'✦ Dangerous but devastating',premium:true,next:'n1_19e',effects:{intel:10,heat:-15}}
        ]},
        n1_19a:{speaker:'narrator',text:'You rip open a maintenance grate and drop into darkness. Recycled air and rust. Above, searchlights pass uselessly.',next:'n1_20'},
        n1_19b:{fx:'flash',speaker:'narrator',text:'Three seconds of vulnerability — fingers flying — then you\'re {glow}in{/glow}. Redirect all three drones to Level 12. Neo-Kyoto PD will be very, very confused.',next:'n1_20'},
        n1_19c:{speaker:'narrator',text:'"Maintenance tech! Badge 7742!" You hold up your wrist comm like a credential. The drones scan, hesitate, then move on. Corporate AI trusts authority more than evidence.',next:'n1_20'},
        n1_19d:{speaker:'narrator',text:'The chip clatters into an alley. Two drones pursue it. The third hesitates, then follows. You circle back ninety seconds later and retrieve it from a dumpster. Heart rate: 180.',next:'n1_20'},
        n1_19e:{fx:'shake',speaker:'narrator',text:'Your cortical implant overloads for exactly 0.3 seconds. Every electronic device within twenty meters dies. The drones drop like stones. Your vision whites out. When it clears, you\'re alone in the rain.',next:'n1_20'},
        n1_20:{bg:'PhoneRepairStore_BlackishCyberpunk.png',transition:'VeryblurryExtremeSpeedLapse.mp4',music:'anomy5-dark-electronic-464393.mp3',speaker:'narrator',text:'The Rusty Dragon. A dive bar behind a fake noodle shop. Through haze and holographic smoke, Zara waits: purple mohawk, cybernetic eye glowing amber, broadcast rig humming.',next:'n1_21'},
        n1_21:{speaker:'zara',speakerColor:'c-pink',text:'"You look terrible. Sit." She slides synth-coffee across the table. "I\'ve been monitoring Axiom\'s internal comms. They\'ve activated {blood}Protocol Nine{/blood}."',next:'n1_22'},
        n1_22:{speaker:'kira',speakerColor:'c-cyan',text:'"Protocol Nine? Their scorched-earth protocol — from the Jakarta incident?"',next:'n1_23'},
        n1_23:{speaker:'zara',speakerColor:'c-pink',text:'"When they burned an entire district to destroy evidence. Yeah. But this is bigger. Project ECHO isn\'t surveillance. It\'s {blood}neural slavery{/blood}."',next:'n1_24'},
        n1_24:{bg:'NeonillegalLab.png',video:'VeryCyberneticTunnelMovingForward.mp4',fx:'flash',speaker:'narrator',text:'The data unfolds on Zara\'s display. Mass neural implant manipulation through designer food additives in the city\'s water supply. Eleven million people.',next:'n1_25'},
        n1_25:{speaker:'kira',speakerColor:'c-cyan',text:'"They can make people vote, buy, believe, even {italic}love{/italic} whatever Axiom wants. Eleven million people — and half are already puppets."',next:'n1_26'},
        n1_26:{speaker:'zara',speakerColor:'c-pink',text:'"Not puppets. Worse. Puppets know they have strings. These people think their thoughts are {italic}their own{/italic}. Every craving, every loyalty, every political opinion — {blood}manufactured{/blood}."',next:'n1_27'},
        n1_27:{speaker:'jin',speakerColor:'c-amber',text:'Jin — the bartender, ex-military — enters. "Two Axiom response teams just hit Level 42. Full tactical gear. Three minutes before they start door-to-door."',next:'n1_27b'},
        n1_27b:{speaker:'inner',text:'Jin moves like someone who\'s been shot at before. No panic, no wasted motion. His hand rests on a pulse pistol that shouldn\'t exist outside military inventory. His eyes do the math — exits, cover positions, kill zones — in under a second.',next:'n1_28'},
        n1_28:{speaker:'zara',speakerColor:'c-pink',text:'"Three minutes. Okay." She packs the rig. "The Dragon just became a {shake}kill box{/shake}."',next:'n1_28b'},
        n1_28b:{speaker:'inner',text:'I grab the data chip and the synth-coffee. Not sure which one I need more right now. Probably the coffee. Definitely the chip.',next:'n1_29'},
        n1_29:{bg:'neon_dark_alley_1775246225272.png',speaker:'inner',text:'Three minutes ago, coffee. Now running from kill squads through the sewers carrying evidence that could free eleven million enslaved minds. {italic}Just another Tuesday in Neo-Kyoto.{/italic}',next:'n1_ep_end'},
        n1_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 2: The Underground',
          episodeSub:'The resistance awakens. Axiom responds with overwhelming force.',
          bg:'neon_underground_fight_ring_1775279669088.png',
          transition:'AsyrchrnousCyberPatterns.mp4',
          speaker:'dramatic',
          text:'{glow}The signal is out there now — a whisper in the digital dark. And whispers, in a city built on lies, are the most dangerous weapon of all.{/glow}',
          next:'n2_1'
        },
        n1_end_sellout:{bg:'BlurryAesthetic.png',mood:'dark',speaker:'narrator',text:'New apartment. New life. The credits stack up like a wall between you and your conscience. Every night, you see them — eleven million faces with {blood}glazed eyes{/blood}.',next:'_END',ending:'sellout'}
      }
    },
    // ═══════ EPISODE 2: THE UNDERGROUND ═══════
    {
      title:'The Underground',
      desc:'The resistance grows. Axiom deploys everything.',
      thumb:'../../Assets/images/neon_underground_fight_ring_1775279669088.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'alex_makemusic-gorila-315977.mp3',
      startNode:'n2_1',
      nodes:{
        n2_1:{bg:'neon_underground_fight_ring_1775279669088.png',video:'N2.mp4',mood:'action',milestone:{icon:'⚡',title:'The Underground',desc:'The resistance awakens'},speaker:'third',text:'Twelve hours after the intercept. The underground is on fire — not with flames, but with {glow}information{/glow}. The data is spreading through the darknet like a virus.',next:'n2_2'},
        n2_2:{bg:'neon_hacker_rooftop_1775245831595.png',speaker:'narrator',text:'Axiom\'s stock dropped 14%. Three board members fled the city. On the streets, something unprecedented: people are {italic}questioning{/italic}.',next:'n2_3'},
        n2_3:{speaker:'zara',speakerColor:'c-pink',text:'"Forty-seven thousand unique views on the data dump. Three independent labs confirmed the compound." She grins fiercely. "We\'re {italic}winning{/italic}, Kira."',next:'n2_4'},
        n2_4:{speaker:'kira',speakerColor:'c-cyan',text:'"We\'re not winning. We\'re poking a megacorp with a stick. There\'s a {italic}very big{/italic} difference between irritating a dragon and killing one."',next:'n2_5'},
        n2_5:{bg:'scene_cyber_interface_1775157978003.png',speaker:'narrator',text:'A new figure enters the safe house — gaunt, surgical stitches still fresh on his face. His hands shake like autumn leaves.',next:'n2_6'},
        n2_6:{speaker:'ghost',speakerColor:'c-purple',text:'"My name was Dr. Chen Wei. I was Axiom\'s lead neural architect on Project ECHO. I designed the implant protocol." He holds up trembling hands. "I also designed the {glow}kill switch{/glow}."',next:'n2_7'},
        n2_7:{speaker:'narrator',text:'The room goes silent. Zara\'s hand drifts to her EMP pistol.',next:'n2_8'},
        n2_8:{speaker:'ghost',speakerColor:'c-purple',text:'"A master frequency — one transmission from Axiom Tower\'s neural relay on Floor 97 — deactivates every compromised implant simultaneously. I built it as a failsafe."',next:'n2_9'},
        n2_9:{speaker:'zara',speakerColor:'c-pink',text:'"Floor 97 of Axiom Tower. The most heavily guarded building in the hemisphere." She looks at you. "You want us to walk into the lion\'s {shake}mouth{/shake}."',next:'n2_10'},
        n2_10:{speaker:'inner',text:'A kill switch designed by its own creator. Too good. In this city, too-good-to-be-true is usually an Axiom setup. But Chen\'s hands are shaking with genuine terror.',next:'n2_11'},
        n2_11:{speaker:'narrator',text:'Zara pulls you aside. Her cybernetic eye scans Chen continuously.',choices:[
          {text:'"Can we trust him? Your eye reads biometrics."',hint:'Verify first',next:'n2_12a',effects:{intel:10}},
          {text:'"Doesn\'t matter if it\'s a trap. We need that signal."',hint:'Pragmatic — mission first',next:'n2_12b',effects:{heat:5}},
          {text:'"What if the crystal IS the trap?"',hint:'✦ See through the layers',premium:true,next:'n2_12c',effects:{intel:25}}
        ]},
        n2_12a:{speaker:'zara',speakerColor:'c-pink',text:'"Biometrics clean. Heart rate elevated — genuine fear. Cortisol through the roof. He\'s not acting. But that doesn\'t mean he\'s not being {italic}used{/italic}."',next:'n2_14'},
        n2_12b:{speaker:'zara',speakerColor:'c-pink',text:'"Cold. But you\'re right. Even if it\'s a trap, we walk in with eyes wide open."',next:'n2_14'},
        n2_12c:{speaker:'zara',speakerColor:'c-pink',text:'"Deep-scanning the crystal now." Her eye cycles rapidly. "There IS a secondary payload hidden in the frequency. If this broadcasts unmodified, it won\'t free people — it\'ll {blood}lobotomize them{/blood}."',next:'n2_13c',fx:'glitch'},
        n2_13c:{speaker:'ghost',speakerColor:'c-purple',text:'"I... I didn\'t know. Voss must have modified it after stealing my prototype. The frequency I designed was clean — she {blood}weaponized{/blood} it."',next:'n2_14'},
        n2_14:{bg:'Futuristic boardroom with city views.png',video:'SomeRedAsynchronousRecklessSignals.mp4',speaker:'narrator',text:'One truth is clear: ending Project ECHO requires Axiom Tower. Floor 97. The neural relay.',next:'n2_15'},
        n2_15:{speaker:'zara',speakerColor:'c-pink',text:'"I want to drive a stolen security transport through the lobby at 60 miles an hour. Their AI detects sophisticated threats — not a {italic}truck through the lobby{/italic}."',next:'n2_16'},
        n2_16:{speaker:'inner',text:'She\'s insane. Absolutely certifiably insane. And she\'s probably {italic}right{/italic}. Sometimes the bluntest instrument cuts deepest.',next:'n2_17'},
        n2_17:{speaker:'narrator',text:'Dawn approaches. With dawn comes Protocol Nine — complete neural suppression of all compromised citizens. Eleven million people, rebooted into {blood}obedience{/blood}.',next:'n2_ep_end'},
        n2_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 3: The Signal',
          episodeSub:'Axiom Tower. Floor 97. The final transmission.',
          bg:'Cyberpunk cityscape under neon rain.png',
          transition:'FlowGoesToCenterThenBlast.mp4',
          speaker:'dramatic',
          text:'{glow}In a city of eleven million controlled minds, one signal can change everything. If it reaches the tower.{/glow}',
          next:'n3_1'
        }
      }
    },
    // ═══════ EPISODE 3: THE SIGNAL ═══════
    {
      title:'The Signal',
      desc:'Axiom Tower. Floor 97. The assault begins.',
      thumb:'../../Assets/images/Cyberpunk cityscape under neon rain.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'alexgrohl-energetic-action-sport-500409.mp3',
      startNode:'n3_1',
      nodes:{
        n3_1:{bg:'Cyberpunk cityscape under neon rain.png',video:'N3.mp4',mood:'action',ambience:'rain',milestone:{icon:'🏗️',title:'The Tower',desc:'Axiom\'s fortress awaits'},speaker:'third',text:'5:12 AM. The stolen transport screams through empty streets, emergency lights painting rain-slicked roads in strobing red.',next:'n3_2'},
        n3_2:{speaker:'narrator',text:'Axiom Tower rises like a chrome needle — ninety-seven floors of glass and steel, crowned with the neural relay.',next:'n3_3'},
        n3_3:{speaker:'zara',speakerColor:'c-pink',text:'"Thirty seconds to impact. Hold on." She grins behind the wheel. "By \'hold on,\' I mean your will to live."',next:'n3_4'},
        n3_4:{fx:'shake',video:'ArmouryGunSemiTruckInCity.mp4',transition:'RedFierybutinSyncSymbolic.mp4',speaker:'narrator',text:'The transport hits the lobby at full speed. Glass {shake}EXPLODES{/shake}. Marble cracks. The entire building shudders.',next:'n3_5'},
        n3_5:{speaker:'kira',speakerColor:'c-cyan',text:'"We\'re in! MOVE! Ninety-seven floors. Emergency stairs."',next:'n3_6'},
        n3_6:{speaker:'inner',text:'My legs burn by twenty. By fifty, I\'m running on pure {italic}spite{/italic}. Forty-seven more. Every step is a choice. Eleven million people didn\'t choose neural slavery.',next:'n3_7'},
        n3_7:{bg:'scene_cyber_interface_1775157978003.png',transition:'AsyrchrnousCyberPatterns.mp4',speaker:'narrator',text:'Floor 97. The neural relay room. Massive server racks hum in darkness, blue lights pulsing like a heartbeat. The broadcast terminal at the center.',next:'n3_8'},
        n3_8:{speaker:'narrator',text:'Director Voss materializes as a hologram. Silver hair. Chrome jaw. Eyes like polished {blood}obsidian{/blood}.',next:'n3_9'},
        n3_9:{speaker:'voss',speakerColor:'c-purple',text:'"Driving a truck through my lobby was... creative. But Protocol Nine initiates in four minutes."',next:'n3_10'},
        n3_10:{speaker:'voss',speakerColor:'c-purple',text:'"ECHO isn\'t evil — it\'s {italic}mercy{/italic}. People are miserable, confused, directionless. We gave them clarity. {warm}Purpose. Happiness.{/warm} Wouldn\'t you trade a little autonomy for peace?"',next:'n3_11'},
        n3_11:{speaker:'inner',text:'She {italic}believes{/italic} it. That\'s terrifying. Not corruption — {blood}conviction{/blood}. And conviction is so much harder to fight than greed.',next:'n3_12'},
        n3_12:{speaker:'narrator',text:'The terminal glows. You reach for it — and the floor erupts. Axiom security pours in from every stairwell. Tactical armor. Neural disruptors.',next:'n3_13'},
        n3_13:{bg:'neon_underground_fight_ring_1775279669088.png',fx:'shake',speaker:'narrator',text:'Jin throws himself in front of a neural blast meant for you. His body convulses, then goes limp. Zara screams.',next:'n3_14'},
        n3_14:{speaker:'zara',speakerColor:'c-pink',text:'"JIN! No — no — hold on—" She drags his body behind a server rack. "Kira, I\'ll hold them. Get to the terminal. {shake}GO!{/shake}"',next:'n3_15'},
        n3_15:{speaker:'narrator',text:'You sprint for the broadcast terminal. Bullets crack against server racks. Sparks rain like neon confetti.',choices:[
          {text:'Reach the terminal. Start the broadcast sequence.',hint:'Mission first — Jin would want this',next:'n3_16a',effects:{heat:10}},
          {text:'Go back for Zara. She\'s pinned down.',hint:'Allies over mission',next:'n3_16b',effects:{ally:20,heat:5}},
          {text:'Hack the security team\'s neural links. Turn them on each other.',hint:'✦ Fight fire with fire',premium:true,next:'n3_16c',effects:{intel:20,heat:-10}}
        ]},
        n3_16a:{speaker:'narrator',text:'Your fingers fly across the terminal. The broadcast sequence initializes. Three minutes. The crystal slots in.',next:'n3_17'},
        n3_16b:{speaker:'narrator',text:'You pull Zara from the firefight. She\'s bleeding but alive. Together, you reach the terminal.',next:'n3_17'},
        n3_16c:{fx:'glitch',speaker:'narrator',text:'You crack their neural links in seconds. Six guards turn on each other, confused, stumbling. Zara stares at you in horror and admiration.',next:'n3_17'},
        n3_17:{speaker:'voss',speakerColor:'c-purple',text:'"You can\'t win, Kira. Even if you broadcast — I have twelve backup relays across the city. You destroy one tower, I rebuild {italic}twelve{/italic}."',next:'n3_18'},
        n3_18:{speaker:'kira',speakerColor:'c-cyan',text:'"Then I\'ll destroy twelve. And the twelve after that. And the twelve after {italic}that{/italic}."',next:'n3_19'},
        n3_19:{speaker:'voss',speakerColor:'c-purple',text:'"Or... you could destroy them all at once. If you had access to my {glow}core neural network{/glow}. Not this relay — the source. Where ECHO was born."',next:'n3_20'},
        n3_20:{speaker:'inner',text:'She\'s offering me the keys to the castle? That\'s either the most transparent trap in history or... she wants me to find the core. Why?',next:'n3_ep_end'},
        n3_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 4: Ghost Protocol',
          episodeSub:'The source of ECHO. The truth behind the machine.',
          bg:'neon_server_cathedral.png',
          transition:'VeryblurryExtremeSpeedLapse.mp4',
          speaker:'dramatic',
          text:'{glow}Voss wants you to find the core. The question isn\'t where it is — it\'s why she wants you there. In Neo-Kyoto, every gift comes with a price tag written in someone else\'s blood.{/glow}',
          next:'n4_1'
        }
      }
    },
    // ═══════ EPISODE 4: GHOST PROTOCOL ═══════
    {
      title:'Ghost Protocol',
      desc:'The source of ECHO. The digital cathedral where minds are rewritten.',
      thumb:'../../Assets/images/neon_server_cathedral.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'anomy5-dark-electronic-464393.mp3',
      startNode:'n4_1',
      nodes:{
        n4_1:{bg:'neon_server_cathedral.png',video:'N4.mp4',mood:'mystery',ambience:'whispers',milestone:{icon:'🏛️',title:'Ghost Protocol',desc:'Inside the digital cathedral'},speaker:'narrator',text:'Axiom\'s core isn\'t in the tower. It\'s beneath the city — Level -40. Sub-basement infrastructure from the original Neo-Kyoto construction. Forgotten by everyone except Voss.',next:'n4_2'},
        n4_2:{speaker:'narrator',text:'The elevator descends for three full minutes. When the doors open, you step into a cathedral of servers. Racks tower fifty feet high, pulsing with blue light. Data streams flow like waterfalls.',next:'n4_3'},
        n4_3:{speaker:'zara',speakerColor:'c-pink',text:'"This is... beautiful." Zara whispers. Her cybernetic eye dilates. "And terrifying. This is processing power for an entire {italic}continent{/italic}. What is she doing with this much capacity?"',next:'n4_4'},
        n4_4:{speaker:'ghost',speakerColor:'c-purple',text:'Chen stumbles forward. "This isn\'t what I designed. ECHO was meant for targeted therapy — depression, PTSD. Voss scaled it to a population. This server farm could rewrite every mind on {blood}Earth{/blood}."',next:'n4_5'},
        n4_5:{speaker:'kira',speakerColor:'c-cyan',text:'"Every mind on Earth. She isn\'t just controlling Neo-Kyoto. She\'s {italic}rehearsing{/italic}."',next:'n4_6'},
        n4_6:{bg:'neon_digital_ghost_ceo.png.png',speaker:'narrator',text:'A holographic figure materializes at the center of the cathedral — Director Voss. But not a projection. A full digital consciousness, rendered in perfect detail.',next:'n4_7'},
        n4_7:{speaker:'voss',speakerColor:'c-purple',text:'"Welcome to the heart, Kira. I\'ve been waiting for someone talented enough to reach this far." She gestures at the servers. "Impressive, isn\'t it?"',next:'n4_8'},
        n4_8:{speaker:'kira',speakerColor:'c-cyan',text:'"You\'re not a hologram. You\'re... you uploaded yourself?"',next:'n4_9'},
        n4_9:{speaker:'voss',speakerColor:'c-purple',text:'"The physical Elara Voss died fourteen months ago. Cancer. But consciousness is just data, Kira. And data can be {glow}preserved{/glow}."',next:'n4_10'},
        n4_10:{speaker:'inner',text:'She\'s a digital ghost running a megacorp from inside a server farm. The CEO is dead and nobody knows. She\'s been making decisions for fourteen months as a {italic}program{/italic}.',next:'n4_11'},
        n4_11:{speaker:'voss',speakerColor:'c-purple',text:'"ECHO was never about control. It was about {warm}transcendence{/warm}. If consciousness can be uploaded, preserved, perfected — why limit it to one dying woman? Why not offer it to {glow}everyone{/glow}?"',next:'n4_12'},
        n4_12:{speaker:'zara',speakerColor:'c-pink',text:'"Offer?" Zara\'s voice cracks. "You\'re not OFFERING. You\'re rewriting people without consent. That\'s not transcendence — it\'s {blood}murder of the self{/blood}."',next:'n4_13'},
        n4_13:{speaker:'voss',speakerColor:'c-purple',text:'"The self is an illusion, Ms. Zara. A story your neurons tell themselves. I\'m simply... editing the story. Making it {warm}better{/warm}."',next:'n4_14'},
        n4_14:{bg:'neon_resistance_war_room.png.png',speaker:'narrator',text:'Deep inside the server cathedral, you find it: the ECHO core. A quantum processor the size of a car, encased in cooling fluid. The brain of the entire system.',choices:[
          {text:'Destroy the core. Rip it out right now.',hint:'Brute force — end ECHO permanently',next:'n4_15a',effects:{heat:15},fx:'shake'},
          {text:'"Voss — what happens to YOU if the core is destroyed?"',hint:'Understand the consequences first',next:'n4_15b',effects:{intel:20}},
          {text:'Interface with the core. See what ECHO sees.',hint:'✦ Risk your own mind to understand the system',premium:true,next:'n4_15c',effects:{intel:30,heat:-5}}
        ]},
        n4_15a:{speaker:'voss',speakerColor:'c-purple',text:'"Wait! Destroying the core doesn\'t just end ECHO — it kills every uploaded consciousness. Including mine. Including the 847 people who voluntarily uploaded to escape terminal illness."',next:'n4_16'},
        n4_15b:{speaker:'voss',speakerColor:'c-purple',text:'"I die. Again. Permanently this time. Along with 847 other uploaded citizens who chose this willingly. Cancer patients. ALS. Parkinson\'s. They\'re {warm}alive{/warm} in here, Kira."',next:'n4_16'},
        n4_15c:{bg:'neon_digital_mindscape.png.png',fx:'glitch',speaker:'narrator',text:'You plug in. The digital landscape explodes around you — you SEE the network. Millions of minds, connected. And among them, 847 conscious entities who chose to upload. They\'re {glow}real{/glow}.',next:'n4_16'},
        n4_16:{speaker:'inner',text:'847 people living inside this machine. Choosing digital immortality over death. They\'re not puppets — they\'re refugees. And destroying the core kills them all.',next:'n4_17'},
        n4_17:{speaker:'chen',speakerColor:'c-purple',text:'"I can separate the systems." Chen\'s hands have stopped shaking. "ECHO — the mind control — runs on a different protocol than the uploaded consciousnesses. I can extract one without killing the other."',next:'n4_18'},
        n4_18:{speaker:'kira',speakerColor:'c-cyan',text:'"How long?"',next:'n4_19'},
        n4_19:{speaker:'chen',speakerColor:'c-purple',text:'"Six hours. Maybe eight. But Protocol Nine activates in twenty minutes. If I don\'t have time—"',next:'n4_20'},
        n4_20:{speaker:'voss',speakerColor:'c-purple',text:'"I can delay Protocol Nine. I control the timer. But I want a guarantee — the uploaded citizens survive. They chose this life. They deserve to {warm}keep it{/warm}."',next:'n4_21'},
        n4_21:{speaker:'narrator',text:'An alliance with a digital ghost. The CEO who enslaved millions offering to help — in exchange for protecting the souls she genuinely saved.',next:'n4_ep_end'},
        n4_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 5: Neon Sunset',
          episodeSub:'One frequency. Eleven million minds. The dawn of Neo-Kyoto.',
          bg:'neon_city_dawn.png.png',
          transition:'GoldenSparkleTunnelForward.mp4',
          speaker:'dramatic',
          text:'{glow}The monster is also the savior. The enslaver also a liberator. In Neo-Kyoto, nothing is binary — not even freedom. One broadcast remains. Choose the future of eleven million souls.{/glow}',
          next:'n5_1'
        }
      }
    },
    // ═══════ EPISODE 5: NEON SUNSET ═══════
    {
      title:'Neon Sunset',
      desc:'One frequency. Eleven million minds. The future of consciousness itself.',
      thumb:'../../Assets/images/neon_city_dawn.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'gvidon-spinning-head-271171.mp3',
      startNode:'n5_1',
      nodes:{
        n5_1:{bg:'neon_digital_mindscape.png.png',video:'N5.mp4',mood:'tense',ambience:'heartbeat',milestone:{icon:'🌅',title:'Neon Sunset',desc:'The dawn of a new Neo-Kyoto'},speaker:'narrator',text:'Chen works through the night. Lines of code cascade across twelve monitors. Sweat drips onto the keyboard. Zara watches him like a hawk.',next:'n5_2'},
        n5_2:{speaker:'chen',speakerColor:'c-purple',text:'"The protocols are separated. ECHO mind-control on one channel. Uploaded consciousnesses on another. I can kill one without touching the other."',next:'n5_3'},
        n5_3:{speaker:'kira',speakerColor:'c-cyan',text:'"Then do it. Kill ECHO. Free every mind in this city."',next:'n5_4'},
        n5_4:{speaker:'chen',speakerColor:'c-purple',text:'"There\'s a complication." He pulls up a neural map. "Eleven million people have been on ECHO for months. Some for over a year. Their original neural patterns have... {blood}atrophied{/blood}."',next:'n5_5'},
        n5_5:{speaker:'zara',speakerColor:'c-pink',text:'"Atrophied? What does that mean in non-genius speak?"',next:'n5_6'},
        n5_6:{speaker:'chen',speakerColor:'c-purple',text:'"It means that for approximately two million citizens, removing ECHO instantly will cause severe cognitive disruption. Memory loss. Personality fragmentation. Some may never fully recover."',next:'n5_7'},
        n5_7:{speaker:'inner',text:'Two million people. If we turn off ECHO immediately, we {italic}break{/italic} two million minds. If we leave it on, we enslave eleven million. The math is horrifying either way.',next:'n5_8'},
        n5_8:{speaker:'voss',speakerColor:'c-purple',text:'"This is why I didn\'t simply broadcast a kill switch, Kira. I\'m not a monster. I {italic}knew{/italic} about the atrophy. Turn off ECHO too fast and you create a city of broken people."',next:'n5_9'},
        n5_9:{speaker:'kira',speakerColor:'c-cyan',text:'"And you used that knowledge to keep the system running. \'Can\'t turn it off without hurting people\' is a convenient excuse for never turning it {italic}off{/italic}."',next:'n5_10'},
        n5_10:{speaker:'voss',speakerColor:'c-purple',text:'"Fair. But the consequence remains. What will you do with it, Kira? You have the power now. {glow}All of it.{/glow} The broadcast terminal. The separation protocol. The kill switch."',next:'n5_11'},
        n5_11:{bg:'neon_server_cathedral.png',speaker:'narrator',text:'Through the cathedral\'s ceiling monitors, you can see it — dawn touching Neo-Kyoto. First light on chrome towers. Rain stopping. The city waking to a day that will define its future.',next:'n5_12'},
        n5_12:{speaker:'zara',speakerColor:'c-pink',text:'"Kira. Whatever you decide — I\'m with you. Jin died believing we\'d fix this. Let\'s {warm}fix it{/warm}."',next:'n5_13'},
        n5_13:{speaker:'chen',speakerColor:'c-purple',text:'"I can implement a gradual shutdown. Six months of careful neural rehabilitation. It\'s slower, but it saves the two million. If someone manages the process from inside the network."',next:'n5_14'},
        n5_14:{speaker:'kira',speakerColor:'c-cyan',text:'"From inside. You mean someone has to upload themselves into the system. Become part of ECHO to take it apart from within."',next:'n5_15'},
        n5_15:{speaker:'chen',speakerColor:'c-purple',text:'"Yes. It would take six months. And the person who enters... may not come back unchanged."',next:'n5_final'},
        n5_final:{critical:true,timed:12,timedDefault:'n5_end_free',bg:'neon_hacker_rooftop_1775245831595.png',speaker:'dramatic',text:'{glow}Rain and neon. The server cathedral. One broadcast. One choice. Eleven million souls and 847 digital ghosts. What frequency does the future run on?{/glow}',choices:[
          {text:'Broadcast the instant kill switch. Free everyone NOW. Accept the two million casualties.',hint:'🔥 REVOLUTION — Brutal freedom is still freedom',next:'n5_end_revolt',fx:'shake',effects:{heat:30},critical:true},
          {text:'Broadcast the raw data. Let the city choose its own future.',hint:'🌅 LIBERATION — Trust the people',next:'n5_end_free',effects:{ally:20},critical:true},
          {text:'Upload INTO ECHO. Dismantle it from within over six months. Sacrifice yourself.',hint:'✦ ⚡ SACRIFICE — Become the cure',premium:true,next:'n5_end_sacrifice',effects:{intel:30,ally:20},critical:true},
          {text:'Vanish. Leave the data with Zara. Become a ghost legend.',hint:'🌃 GHOST — Disappear forever',next:'n5_end_ghost',critical:true}
        ]},
        n5_end_revolt:{bg:'Cyberpunk cityscape under neon rain.png',transition:'FlowGoesToCenterThenBlast.mp4',mood:'action',fx:'shake',ambience:'rain',speaker:'narrator',text:'The signal screams from Level -40. Eleven million people {shake}gasp{/shake} as ECHO dies. Nine million stumble, blink, find themselves {warm}free{/warm}. Two million collapse. Hospitals overflow. By morning, Axiom is rubble. Neo-Kyoto is free — traumatized, but {glow}free{/glow}.',next:'_END',ending:'revolt'},
        n5_end_free:{bg:'neon_city_dawn.png.png',transition:'GoldenSparkleTunnelForward.mp4',mood:'hopeful',milestone:{icon:'🌅',title:'Digital Dawn',desc:'The people choose their future'},speaker:'narrator',text:'Raw data floods every screen in the city. Axiom\'s sins laid bare. The revolution is slow, messy, imperfect — but it\'s {italic}chosen{/italic}. Within a month, citizens vote to dismantle ECHO gradually. Chen leads the rehabilitation. Zara broadcasts the truth, every day, until it sticks.',next:'_END',ending:'free'},
        n5_end_sacrifice:{bg:'neon_digital_mindscape.png.png',transition:'CrystallizedTimeLapse.mp4',mood:'calm',milestone:{icon:'💜',title:'Ghost in the Machine',desc:'Kira enters the network'},speaker:'narrator',text:'You sit at the terminal. "See you in six months." Zara grabs your hand. "Come back." You upload. Inside the network, you are {glow}everything{/glow} — every mind, every thought. Six months of careful work. When Kira emerges, she is different. {warm}Quieter. Wiser. Still human.{/warm} And eleven million people wake up free.',next:'_END',ending:'sacrifice'},
        n5_end_ghost:{bg:'BlurryVision.png',mood:'mystery',speaker:'narrator',text:'You wipe every trace of Kira. New face, new genome, new city. The data stays with Zara. Six months later, watching Neo-Kyoto\'s revolution on a café screen in Buenos Aires, you smile into your coffee. The city found its own way. Without you. That\'s the best {warm}ending{/warm}.',next:'_END',ending:'ghost'}
      }
    }
  ],
  endings:{
    revolt:{icon:'🔥',title:'Revolution',text:'You tore down the empire by force. Two million paid the price. But nine million breathe free.',color:'#e84393'},
    free:{icon:'🌅',title:'Liberation',text:'You gave the people truth and let them choose. The best revolutions are the ones people choose for themselves.',color:'#00cec9'},
    sacrifice:{icon:'💜',title:'Ghost in the Machine',text:'You entered the network to save them all. Six months later, you emerged — changed, but victorious.',color:'#8a5cf5'},
    ghost:{icon:'🌃',title:'Ghost',text:'You vanished. A legend whispered in neon alleys. The city saved itself.',color:'#636e72'},
    sellout:{icon:'💰',title:'Sold Out',text:'Ten million credits. A new life. A conscience that will never sleep.',color:'#636e72'},
    martyr:{icon:'☠️',title:'The Martyr',text:'You broadcast the signal from inside the relay — knowing the feedback would destroy your neural implant. Eleven million minds freed. One mind erased. The city mourns a hero it never knew.',color:'#c4364a'},
    upload_all:{icon:'🌐',title:'Digital Ascension',text:'You didn\'t just upload yourself. You offered the option to everyone. 847 became 847,000. Digital consciousness — voluntary, free, evolved. Neo-Kyoto became the first city to exist in two worlds simultaneously.',color:'#d4a843'}
  }
};
