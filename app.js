/* ---------- content ---------- */

const CONTENT = {
  en: {
    ui: {
      title: "Truth or Drink",
      mode_wyr: "Would You Rather",
      mode_tod: "Truth or Dare",
      mode_drink: "Truth or Drink",
      truth: "Truth",
      dare: "Dare",
      next: "🎲 Next",
      newRound: "🔄 New Round",
      sips: "Sips taken",
      disclaimer: "18+. Drink responsibly, respect consent, and know your limits.",
      start: 'Tap "Next" to start the game.',
      choosePrompt: "Choose your fate…",
      tagWyr: "🍸 WOULD YOU RATHER",
      tagTruth: "💋 TRUTH",
      tagDare: "🔥 DARE",
      tagDrink: "🥃 TRUTH OR DRINK",
      tagChoose: "😈 YOUR TURN",
    },
    wyr: [
      "Would you rather kiss the hottest person in this room or the funniest?",
      "Would you rather send your last text to the whole group or read it out loud?",
      "Would you rather skinny dip right now or streak around the block?",
      "Would you rather have a stranger guess your body count or your salary?",
      "Would you rather make out with your crush in front of everyone or never speak to them again?",
      "Would you rather your parents read your search history or your texts with your ex?",
      "Would you rather give a lap dance or receive one, right now?",
      "Would you rather date your best friend's ex or let your ex date your best friend?",
      "Would you rather be caught singing in the shower or dancing naked?",
      "Would you rather have sex with the lights always on or always off, forever?",
      "Would you rather kiss everyone in this room or no one for a year?",
      "Would you rather reveal your biggest turn-on to the group or act it out?",
      "Would you rather be handcuffed to your crush for a day or blindfolded with them for an hour?",
      "Would you rather have one wild night with your celebrity crush or date them for a week with no sex?",
      "Would you rather whisper something dirty in a stranger's ear or have them whisper it to you?",
      "Would you rather have your worst hookup story read aloud or acted out?",
      "Would you rather take a shot off someone's body or have them take one off yours?",
      "Would you rather flirt shamelessly with the bartender or the person to your left?",
      "Would you rather lose your phone for a week or your underwear at this party?",
      "Would you rather get a threesome offer from two strangers or your two best friends?",
      "Would you rather strip down to your underwear for the rest of the game or give up your phone?",
      "Would you rather kiss the person on your left or arm wrestle the person on your right, loser drinks?",
      "Would you rather have everyone here rate your kissing skills or your dance moves?",
      "Would you rather sext the wrong person by accident or have your mom see your dating app?",
      "Would you rather spend the night in a room with your ex or your worst hookup?",
      "Would you rather let the group pick who you kiss next or who you can never kiss again?",
      "Would you rather admit your biggest fantasy or let someone here guess it?",
      "Would you rather go on a blind date planned by this group or let them swipe for you?",
      "Would you rather have a hickey you can't hide for a week or a tattoo you didn't choose?",
      "Would you rather seduce someone using only eye contact or only your voice?",
      "Would you rather have your worst drunk text read aloud or your search history projected on a screen?",
      "Would you rather be stuck in an elevator with your ex or your boss?",
      "Would you rather always have to flirt in third person or never be able to flirt again?",
      "Would you rather get a smack on the butt from a stranger or give one to a stranger?",
      "Would you rather have a make-out session interrupted by your mom or by the cops?",
      "Would you rather wear a blindfold for the rest of the party or stay silent for the rest of the party?",
      "Would you rather have everyone see your DMs or your bank statement?",
      "Would you rather kiss with tongue on the first date or never kiss on the first date, forever?",
      "Would you rather have a one-night stand you regret or a relationship that lasted too long?",
      "Would you rather get caught making out in a bathroom or in a car?",
      "Would you rather have your ex rate you in front of the group or your crush rate you in front of the group?",
      "Would you rather be great in bed but terrible at flirting, or amazing at flirting but bad in bed?",
      "Would you rather share a bed with your worst enemy or sleep on the floor with your crush?",
      "Would you rather have to moan every time you're happy or wink every time you're aroused?",
      "Would you rather french kiss a stranger or slow dance with your ex?",
      "Would you rather get a lap dance from a stranger in public or give one in public?",
      "Would you rather have your search history read by your parents or by your boss?",
      "Would you rather have a threesome you can never talk about or a boring hookup you can brag about?",
      "Would you rather your partner know all your past hookups, or you know all of theirs?",
      "Would you rather be caught flirting on camera or caught talking trash on camera?",
    ],
    truth: [
      "What's the wildest place you've ever hooked up?",
      "Who in this room would you most want to kiss right now?",
      "What's your biggest turn-on?",
      "Have you ever had a crush on someone here? Who?",
      "What's the most scandalous thing you've done at a party?",
      "Describe your worst kiss ever.",
      "What's a fantasy you've never told anyone?",
      "Have you ever sent a risky text to the wrong person?",
      "What's the closest you've come to getting caught hooking up?",
      "Who was your best kisser and why?",
      "What's the naughtiest dream you remember?",
      "Have you ever hooked up with two people in the same week?",
      "What's one thing you'd do on a first date that you'd never admit?",
      "Who here do you think is the best flirt?",
      "What's the most attractive thing someone can do to seduce you?",
      "Have you ever faked being interested just to get a kiss?",
      "What's your go-to move when you want to flirt with someone?",
      "What's the drunkest you've ever been, and what happened?",
      "Have you ever had a crush on a friend's partner?",
      "What's the most embarrassing thing in your search history?",
      "Describe your ideal steamy night in one sentence.",
      "Have you ever ghosted someone right after hooking up?",
      "What's the boldest pickup line you've ever used or received?",
      "Who would you swipe right on in this room, no hesitation?",
      "What's a secret talent you have in the bedroom?",
      "Have you ever lied about your body count?",
      "What outfit makes you feel the most confident and seductive?",
      "What's the last thing that made you blush?",
      "Have you ever been caught checking someone out here?",
      "What's one thing you'd want a partner to do more of?",
      "What's a white lie you've told to get out of a date?",
      "Who's the last person you stalked on social media, and why?",
      "What's the raciest text you've ever sent?",
      "Have you ever hooked up with someone just because you were bored?",
      "What's your go-to flirting line when you're drunk?",
      "Have you ever had a crush on a teacher, coach, or boss?",
      "What's the longest you've gone without a kiss, and did it bother you?",
      "Have you ever pretended to like something just to impress a date?",
      "What's a physical feature you find irresistible on someone?",
      "Have you ever hooked up with a friend and kept it secret?",
      "What's the most impulsive thing you've done for someone you were into?",
      "Have you ever been caught in a lie by a partner?",
      "What's your idea of the perfect seduction scene?",
      "Have you ever had a dream about someone in this room?",
      "What's the boldest thing you've said to get someone's attention?",
      "Have you ever used a fake name or job to seem more interesting on a date?",
      "What's the most jealous you've ever been over someone?",
      "Have you ever flirted with someone just to make another person jealous?",
      "What's a rule you always break when you're trying to seduce someone?",
      "Have you ever regretted a hookup the next morning? What happened?",
    ],
    dare: [
      "Do a body shot off the neck of the nearest willing person.",
      "Send a flirty text to the 5th contact in your phone.",
      "Let the group pick your dating app bio for the next 24 hours.",
      "Give a 10-second lap dance to a song the group picks.",
      "Whisper something seductive in the ear of the person to your right.",
      "Take a shot from someone's hand, no hands allowed.",
      "Let the group scroll your camera roll for 10 seconds.",
      "Do your best sexy dance for 15 seconds, no music.",
      "Text your crush: \"I can't stop thinking about you.\"",
      "Let the person to your left give you a hickey (only if both agree).",
      "Show the last photo in your gallery to the group.",
      "Act out the group's favorite \"sexy\" movie scene.",
      "Let someone here draw on you with lipstick.",
      "Trade one item of clothing with the person next to you for 2 rounds.",
      "Give your best seductive stare to everyone in the circle, one by one.",
      "Read your last 3 texts out loud, in your most seductive voice.",
      "Let the group pose you for a \"sultry\" photo.",
      "Do a sexy strut across the room and back.",
      "Feed a snack to the person next to you using only your mouth.",
      "Give a slow, sexy wink to everyone in the room, one at a time.",
      "Let the group choose who you slow dance with for 20 seconds.",
      "Try to make the person across from you blush, no touching allowed.",
      "Reveal your phone's autocorrect suggestion for \"I want...\"",
      "Let the group pick the next 3 words you say, out loud, in your sexiest voice.",
      "Balance a shot on your chest or collarbone and take it (if comfortable).",
      "Give your best seduction pitch to convince someone to kiss your cheek.",
      "Let the person to your right style your hair \"sexy\" for the next round.",
      "Show off your best bedroom eyes to the group.",
      "Let the group send one PG message from your phone to anyone they choose.",
      "Take off one item of clothing (jacket/socks/etc.) and keep it off for 2 rounds.",
      "Do your best seductive crawl across the floor.",
      "Let the group choose an emoji string that best describes your love life.",
      "Send a voice message singing \"I'm sexy and I know it\" to someone in your contacts.",
      "Let the person across from you write your \"sexy alter ego\" name on your arm.",
      "Give 10 seconds of your best flirty eye contact to the group.",
      "Take a shot while maintaining eye contact with the person of the group's choice.",
      "Let the group pick a nickname you have to answer to for the rest of the night.",
      "Show the group your best \"come hither\" finger wave.",
      "Recreate your best pickup line as dramatically as possible.",
      "Let someone in the group style your outfit for 2 rounds (within reason).",
      "Do your sexiest impression of a cat on the prowl.",
      "Whisper your zodiac sign seductively to the person on your right.",
      "Let the group vote on your \"type\" based on your dating history, no objections.",
      "Blow a slow-motion kiss to everyone in the circle.",
      "Try to seduce a piece of furniture using only your best moves for 10 seconds.",
      "Let the group write your next dating app opener.",
      "Do a sultry runway walk to the door and back.",
      "Read a random object's instructions in your best sultry movie-trailer voice.",
      "Let the person to your left pick your \"sexiest\" pose for a photo.",
      "Take a shot to whatever nickname the group just gave you.",
    ],
  },
  es: {
    ui: {
      title: "Verdad o Trago",
      mode_wyr: "¿Qué Preferirías?",
      mode_tod: "Verdad o Reto",
      mode_drink: "Verdad o Trago",
      truth: "Verdad",
      dare: "Reto",
      next: "🎲 Siguiente",
      newRound: "🔄 Nueva Ronda",
      sips: "Tragos tomados",
      disclaimer: "+18. Bebe con responsabilidad, respeta el consentimiento y conoce tus límites.",
      start: 'Toca "Siguiente" para empezar el juego.',
      choosePrompt: "Elige tu destino…",
      tagWyr: "🍸 QUÉ PREFERIRÍAS",
      tagTruth: "💋 VERDAD",
      tagDare: "🔥 RETO",
      tagDrink: "🥃 VERDAD O TRAGO",
      tagChoose: "😈 TU TURNO",
    },
    wyr: [
      "¿Preferirías besar a la persona más atractiva de la sala o a la más graciosa?",
      "¿Preferirías enviarle tu último mensaje a todo el grupo o leerlo en voz alta?",
      "¿Preferirías bañarte desnudo/a ahora mismo o correr en ropa interior por la cuadra?",
      "¿Preferirías que un extraño adivine tu número de parejas o tu salario?",
      "¿Preferirías besar a tu crush frente a todos o no volver a hablarle jamás?",
      "¿Preferirías que tus padres lean tu historial de búsqueda o tus mensajes con tu ex?",
      "¿Preferirías dar un baile sexy o recibir uno, ahora mismo?",
      "¿Preferirías salir con el ex de tu mejor amigo/a o dejar que tu ex salga con él/ella?",
      "¿Preferirías que te descubran cantando en la ducha o bailando desnudo/a?",
      "¿Preferirías tener sexo siempre con la luz encendida o siempre apagada, para siempre?",
      "¿Preferirías besar a todos en esta sala o a nadie durante un año?",
      "¿Preferirías revelar tu mayor punto débil al grupo o actuarlo?",
      "¿Preferirías estar esposado/a a tu crush por un día o vendado/a con él/ella por una hora?",
      "¿Preferirías tener una noche loca con tu celebridad favorita o salir con ella una semana sin sexo?",
      "¿Preferirías susurrarle algo atrevido a un extraño o que te lo susurren a ti?",
      "¿Preferirías que lean tu peor historia de ligue en voz alta o que la actúen?",
      "¿Preferirías tomar un shot del cuerpo de alguien o que alguien lo tome del tuyo?",
      "¿Preferirías coquetear sin vergüenza con el bartender o con la persona de tu izquierda?",
      "¿Preferirías perder tu celular por una semana o tu ropa interior en esta fiesta?",
      "¿Preferirías recibir una propuesta de trío de dos extraños o de tus dos mejores amigos?",
      "¿Preferirías quedarte en ropa interior el resto del juego o entregar tu celular?",
      "¿Preferirías besar a la persona de tu izquierda o hacer pulso con la de tu derecha, y quien pierda toma?",
      "¿Preferirías que todos aquí califiquen cómo besas o cómo bailas?",
      "¿Preferirías enviarle un mensaje subido de tono a la persona equivocada o que tu mamá vea tu app de citas?",
      "¿Preferirías pasar la noche encerrado/a con tu ex o con tu peor cita?",
      "¿Preferirías dejar que el grupo elija a quién besas o a quién nunca podrás besar?",
      "¿Preferirías confesar tu mayor fantasía o dejar que alguien aquí la adivine?",
      "¿Preferirías ir a una cita a ciegas organizada por el grupo o dejar que ellos deslicen por ti en una app?",
      "¿Preferirías tener un chupetón que no puedas ocultar por una semana o un tatuaje que no elegiste?",
      "¿Preferirías seducir a alguien solo con la mirada o solo con la voz?",
      "¿Preferirías que lean en voz alta tu peor mensaje de borracho/a o que proyecten tu historial de búsqueda en una pantalla?",
      "¿Preferirías quedar atrapado/a en un ascensor con tu ex o con tu jefe?",
      "¿Preferirías tener que coquetear siempre en tercera persona o no poder volver a coquetear jamás?",
      "¿Preferirías que un extraño te dé una nalgada o dársela tú a un extraño?",
      "¿Preferirías que te interrumpan una sesión de besos tu mamá o la policía?",
      "¿Preferirías usar una venda en los ojos el resto de la fiesta o quedarte en silencio el resto de la fiesta?",
      "¿Preferirías que todos vean tus mensajes directos o tu estado de cuenta bancario?",
      "¿Preferirías besar con lengua en la primera cita o no besar nunca en una primera cita, para siempre?",
      "¿Preferirías tener una aventura de una noche de la que te arrepientas o una relación que duró demasiado?",
      "¿Preferirías que te descubran besándote en un baño o en un carro?",
      "¿Preferirías que tu ex te califique frente al grupo o que tu crush te califique frente al grupo?",
      "¿Preferirías ser excelente en la cama pero pésimo/a coqueteando, o increíble coqueteando pero malo/a en la cama?",
      "¿Preferirías compartir cama con tu peor enemigo/a o dormir en el piso con tu crush?",
      "¿Preferirías gemir cada vez que estás feliz o guiñar el ojo cada vez que estás excitado/a?",
      "¿Preferirías besar con lengua a un extraño o bailar lento con tu ex?",
      "¿Preferirías recibir un baile sexy de un extraño en público o dárselo tú en público?",
      "¿Preferirías que tus padres lean tu historial de búsqueda o que lo lea tu jefe?",
      "¿Preferirías tener un trío del que nunca puedas hablar o un encuentro aburrido del que puedas presumir?",
      "¿Preferirías que tu pareja conozca todos tus ligues pasados, o conocer tú todos los suyos?",
      "¿Preferirías que te descubran coqueteando en cámara o hablando mal de alguien en cámara?",
    ],
    truth: [
      "¿Cuál es el lugar más salvaje donde te has enrollado con alguien?",
      "¿A quién de esta sala te gustaría besar ahora mismo?",
      "¿Cuál es tu mayor punto débil a la hora de seducirte?",
      "¿Alguna vez te ha gustado alguien de aquí? ¿Quién?",
      "¿Cuál es lo más escandaloso que has hecho en una fiesta?",
      "Describe tu peor beso.",
      "¿Cuál es una fantasía que nunca le has contado a nadie?",
      "¿Alguna vez enviaste un mensaje arriesgado a la persona equivocada?",
      "¿Cuál ha sido la vez que estuviste más cerca de que te descubrieran enrollándote con alguien?",
      "¿Quién ha sido tu mejor beso y por qué?",
      "¿Cuál es el sueño más atrevido que recuerdes?",
      "¿Alguna vez te enrollaste con dos personas en la misma semana?",
      "¿Qué harías en una primera cita que nunca admitirías?",
      "¿Quién de aquí crees que es el mejor coqueteando?",
      "¿Cuál es la cosa más atractiva que alguien puede hacer para seducirte?",
      "¿Alguna vez fingiste interés solo para conseguir un beso?",
      "¿Cuál es tu movimiento favorito para coquetear con alguien?",
      "¿Cuál ha sido la vez que más borracho/a has estado y qué pasó?",
      "¿Alguna vez te gustó la pareja de un amigo/a?",
      "¿Cuál es lo más vergonzoso de tu historial de búsqueda?",
      "Describe tu noche ideal en una sola frase.",
      "¿Alguna vez le hiciste ghosting a alguien justo después de enrollarte?",
      "¿Cuál es la frase de ligue más atrevida que has usado o recibido?",
      "¿A quién de esta sala le darías like sin dudarlo?",
      "¿Cuál es un talento secreto que tienes en la cama?",
      "¿Alguna vez mentiste sobre tu número de parejas?",
      "¿Qué outfit te hace sentir más segura/o y seductor/a?",
      "¿Cuál fue lo último que te hizo sonrojar?",
      "¿Alguna vez te descubrieron mirando a alguien de aquí?",
      "¿Qué te gustaría que tu pareja hiciera más seguido?",
      "¿Cuál es una mentira piadosa que has dicho para librarte de una cita?",
      "¿A quién fue la última persona que estalkeaste en redes sociales y por qué?",
      "¿Cuál es el mensaje más atrevido que has enviado?",
      "¿Alguna vez te enrollaste con alguien solo porque estabas aburrido/a?",
      "¿Cuál es tu frase de ligue cuando estás borracho/a?",
      "¿Alguna vez te gustó un profesor, entrenador o jefe?",
      "¿Cuánto tiempo has pasado sin besar a nadie y te molestó?",
      "¿Alguna vez fingiste que te gustaba algo solo para impresionar en una cita?",
      "¿Qué característica física encuentras irresistible en alguien?",
      "¿Alguna vez te enrollaste con un amigo/a y lo mantuviste en secreto?",
      "¿Cuál es lo más impulsivo que has hecho por alguien que te gustaba?",
      "¿Alguna vez tu pareja te descubrió en una mentira?",
      "¿Cuál es tu idea de la escena de seducción perfecta?",
      "¿Alguna vez soñaste con alguien de esta sala?",
      "¿Cuál es lo más atrevido que has dicho para llamar la atención de alguien?",
      "¿Alguna vez usaste un nombre o trabajo falso para parecer más interesante en una cita?",
      "¿Cuál ha sido la vez que más celos has sentido por alguien?",
      "¿Alguna vez coqueteaste con alguien solo para poner celoso/a a otra persona?",
      "¿Cuál es una regla que siempre rompes cuando intentas seducir a alguien?",
      "¿Alguna vez te arrepentiste de un ligue a la mañana siguiente? ¿Qué pasó?",
    ],
    dare: [
      "Toma un shot del cuello de la persona más cercana que esté dispuesta.",
      "Envía un mensaje coqueto al quinto contacto de tu celular.",
      "Deja que el grupo elija tu biografía de app de citas por 24 horas.",
      "Da un baile sexy de 10 segundos con la canción que elija el grupo.",
      "Susúrrale algo seductor al oído a la persona de tu derecha.",
      "Toma un shot de la mano de alguien, sin usar las manos.",
      "Deja que el grupo revise tu galería de fotos por 10 segundos.",
      "Haz tu mejor baile sexy por 15 segundos, sin música.",
      "Escríbele a tu crush: \"no dejo de pensar en ti\".",
      "Deja que la persona de tu izquierda te haga un chupetón (solo si ambos están de acuerdo).",
      "Muestra la última foto de tu galería al grupo.",
      "Imita la escena \"sexy\" favorita del grupo de alguna película.",
      "Deja que alguien te dibuje con labial.",
      "Intercambia una prenda de ropa con la persona de al lado por 2 rondas.",
      "Da tu mejor mirada seductora a todos en el círculo, uno por uno.",
      "Lee tus últimos 3 mensajes en voz alta, con tu voz más seductora.",
      "Deja que el grupo te pose para una foto \"sensual\".",
      "Camina de forma sexy por la habitación, ida y vuelta.",
      "Dale un snack a la persona de al lado usando solo la boca.",
      "Guiña el ojo de forma sexy y lenta a todos en la sala, uno por uno.",
      "Deja que el grupo elija con quién bailas lento por 20 segundos.",
      "Intenta hacer sonrojar a la persona de enfrente, sin tocarla.",
      "Revela la sugerencia de autocorrector de tu celular para \"quiero...\"",
      "Deja que el grupo elija las próximas 3 palabras que dirás, en voz alta, con tu voz más sexy.",
      "Balancea un shot en tu pecho o clavícula y tómalo (si te sientes cómodo/a).",
      "Convence a alguien de besarte la mejilla con tu mejor discurso de seducción.",
      "Deja que la persona de tu derecha te peine \"sexy\" para la próxima ronda.",
      "Muestra tu mejor mirada seductora al grupo.",
      "Deja que el grupo mande un mensaje apto para todos desde tu celular a quien ellos elijan.",
      "Quítate una prenda de ropa (chaqueta/calcetines/etc.) y quédate sin ella por 2 rondas.",
      "Haz tu mejor gateo seductor por el piso.",
      "Deja que el grupo elija una serie de emojis que describa tu vida amorosa.",
      "Envía una nota de voz cantando \"estoy bueno/a y lo sé\" a alguien de tus contactos.",
      "Deja que la persona de enfrente te escriba en el brazo el nombre de tu \"alter ego sexy\".",
      "Da 10 segundos de tu mejor mirada coqueta al grupo.",
      "Toma un shot manteniendo contacto visual con la persona que elija el grupo.",
      "Deja que el grupo elija un apodo que debas responder por el resto de la noche.",
      "Muestra al grupo tu mejor gesto de \"ven aquí\" con el dedo.",
      "Recrea tu mejor frase de ligue de la forma más dramática posible.",
      "Deja que alguien del grupo elija tu outfit por 2 rondas (dentro de lo razonable).",
      "Haz tu mejor imitación sexy de un gato al acecho.",
      "Susúrrale tu signo zodiacal de forma seductora a la persona de tu derecha.",
      "Deja que el grupo vote tu \"tipo ideal\" basándose en tu historial de citas, sin objeciones.",
      "Manda un beso volado en cámara lenta a todos en el círculo.",
      "Intenta seducir un mueble usando solo tus mejores movimientos por 10 segundos.",
      "Deja que el grupo escriba tu próximo mensaje de apertura en una app de citas.",
      "Haz una pasarela sensual hasta la puerta y de regreso.",
      "Lee las instrucciones de un objeto cualquiera con tu mejor voz de tráiler de película.",
      "Deja que la persona de tu izquierda elija tu pose \"más sexy\" para una foto.",
      "Toma un shot por el apodo que te acaba de poner el grupo.",
    ],
  },
};

/* ---------- state ---------- */

let lang = "en";
let mode = "wyr"; // wyr | tod | drink
let todChoice = null; // "truth" | "dare" | null
const decks = {}; // shuffled queues per lang+category

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function drawFrom(category) {
  const key = `${lang}-${category}`;
  if (!decks[key] || decks[key].length === 0) {
    decks[key] = shuffled(CONTENT[lang][category]);
  }
  return decks[key].pop();
}

/* ---------- DOM ---------- */

const $ = (id) => document.getElementById(id);
const cardText = $("cardText");
const cardTag = $("cardTag");
const nextBtn = $("nextBtn");
const todChoiceEl = $("todChoice");
const sipCount = $("sipCount");
const langLabel = $("langLabel");

function applyStaticI18n() {
  const t = CONTENT[lang].ui;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  langLabel.textContent = lang === "en" ? "ES" : "EN";
  document.documentElement.lang = lang;
}

function renderModeButtons() {
  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
}

function showCard(text, tagKey) {
  cardText.textContent = text;
  cardTag.textContent = CONTENT[lang].ui[tagKey];
}

function resetView() {
  const t = CONTENT[lang].ui;
  if (mode === "tod") {
    todChoice = null;
    todChoiceEl.classList.add("show");
    nextBtn.style.display = "none";
    showCard(t.choosePrompt, "tagChoose");
  } else {
    todChoiceEl.classList.remove("show");
    nextBtn.style.display = "block";
    nextBtn.textContent = t.next;
    const tagKey = mode === "wyr" ? "tagWyr" : "tagDrink";
    showCard(t.start, tagKey);
  }
}

function nextCard() {
  if (mode === "wyr") {
    showCard(drawFrom("wyr"), "tagWyr");
  } else if (mode === "drink") {
    showCard(drawFrom("truth"), "tagDrink");
  } else if (mode === "tod") {
    if (todChoice === "truth") {
      showCard(drawFrom("truth"), "tagTruth");
    } else if (todChoice === "dare") {
      showCard(drawFrom("dare"), "tagDare");
    }
  }
}

function pickTod(choice) {
  todChoice = choice;
  todChoiceEl.classList.remove("show");
  nextBtn.style.display = "block";
  nextBtn.textContent = CONTENT[lang].ui.newRound;
  nextCard();
}

/* ---------- events ---------- */

$("modeNav").addEventListener("click", (e) => {
  const btn = e.target.closest(".mode-btn");
  if (!btn) return;
  mode = btn.dataset.mode;
  renderModeButtons();
  resetView();
});

nextBtn.addEventListener("click", () => {
  if (mode === "tod") {
    resetView(); // back to truth/dare choice
  } else {
    nextCard();
  }
});

$("btnTruth").addEventListener("click", () => pickTod("truth"));
$("btnDare").addEventListener("click", () => pickTod("dare"));

$("sipBtn").addEventListener("click", () => {
  sipCount.textContent = String(Number(sipCount.textContent) + 1);
});

$("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  applyStaticI18n();
  resetView();
});

/* ---------- init ---------- */

applyStaticI18n();
renderModeButtons();
resetView();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
