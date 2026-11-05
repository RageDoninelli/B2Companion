/* CONTENIDO DEMOSTRATIVO ORIGINAL B2: no reproduce un libro de texto.
   Cuando se reciban las capturas del material B2, sustituir este módulo.
   Cada pregunta cuenta exactamente 1 punto. Permite varias respuestas
   con la propiedad answers (solo para input de texto). */
window.B2_MODULES = window.B2_MODULES || {};
window.B2_MODULES['01'] = {
  title: 'Narrative tenses & perfect aspect',
  subtitle: 'Past simple · Past continuous · Past perfect · Present perfect',
  badge: 'MÓDULO DEMOSTRATIVO',
  lesson: 'Choosing the right tense changes the sequence, duration and meaning of an action. Notice what happened first, what was in progress and what still affects the present.',
  lessons: [
    {term:'Past simple', description:'Completed events in the past: “She called yesterday.”'},
    {term:'Past continuous', description:'Background actions or interruptions: “I was reading when she called.”'},
    {term:'Past perfect', description:'An earlier past event: “They had left before we arrived.”'},
    {term:'Present perfect', description:'Past experiences or results connected to now: “I have lost my keys.”'}
  ],
  exercises: [
    {
      id:'e1', title:'Complete the sentences',
      instruction:'Escribe la forma verbal adecuada. Cuida el orden de los sucesos.',
      questions:[
        {id:'q1',type:'text',prompt:'By the time we got to the station, the train ______ (leave).',answers:['had left'],hint:'El tren partió antes de nuestra llegada.',explain:'Past perfect señala una acción anterior a otra acción pasada.'},
        {id:'q2',type:'text',prompt:'I ______ (work) on my presentation when the lights went out.',answers:['was working'],hint:'Una acción estaba en desarrollo cuando ocurrió otra.',explain:'Past continuous describe la acción en progreso interrumpida.'},
        {id:'q3',type:'text',prompt:'She ______ (never / visit) Canada before her trip last year.',answers:['had never visited'],hint:'La experiencia ausente ocurrió antes del viaje.',explain:'“Before her trip last year” establece un punto de referencia pasado.'},
        {id:'q4',type:'text',prompt:'We ______ (know) each other since primary school.',answers:['have known'],hint:'La relación comenzó en el pasado y continúa hoy.',explain:'Con “since” y una situación que continúa, usamos present perfect.'},
        {id:'q5',type:'text',prompt:'When I opened the door, the children ______ (play) in the garden.',answers:['were playing'],hint:'Describe la escena de fondo.',explain:'Past continuous ofrece contexto de una acción en curso.'}
      ]
    },
    {
      id:'e2', title:'Choose the best option',
      instruction:'Selecciona la opción que expresa el significado correcto.',
      questions:[
        {id:'q1',type:'choice',prompt:'I ______ that film twice, so I know the ending.',options:['saw','have seen','had seen'],correct:1,hint:'La experiencia pasada es relevante ahora.',explain:'Present perfect conecta la experiencia con el presente.'},
        {id:'q2',type:'choice',prompt:'While Omar ______ dinner, his phone rang.',options:['cooked','had cooked','was cooking'],correct:2,hint:'While suele introducir una acción en progreso.',explain:'“Was cooking” describe la acción interrumpida.'},
        {id:'q3',type:'choice',prompt:'They were exhausted because they ______ all night.',options:['had been studying','have been studying','study'],correct:0,hint:'La actividad se prolongó hasta un momento pasado.',explain:'Past perfect continuous enfatiza la duración anterior a un punto pasado.'},
        {id:'q4',type:'choice',prompt:'We ______ to Antigua last weekend.',options:['have gone','went','had gone'],correct:1,hint:'Hay una referencia a un tiempo pasado terminado.',explain:'“Last weekend” normalmente exige past simple.'},
        {id:'q5',type:'choice',prompt:'I ______ my wallet. I can’t pay for the ticket.',options:['lost yesterday','had lost','have lost'],correct:2,hint:'La pérdida tiene una consecuencia presente.',explain:'Present perfect destaca el resultado actual.'}
      ]
    },
    {
      id:'e3', title:'Correct the mistake',
      instruction:'Reescribe solamente la parte verbal incorrecta, no la oración completa.',
      questions:[
        {id:'q1',type:'text',prompt:'When I arrived, the meeting already started. → ______',answers:['had already started'],hint:'La reunión comenzó primero.',explain:'Se utiliza past perfect para la acción anterior.'},
        {id:'q2',type:'text',prompt:'I have visited London in 2022. → ______',answers:['visited'],hint:'“In 2022” indica un tiempo pasado terminado.',explain:'La referencia temporal cerrada requiere past simple.'},
        {id:'q3',type:'text',prompt:'They was watching TV when I called. → ______',answers:['were watching'],hint:'El sujeto es plural.',explain:'They + were + verb-ing.'},
        {id:'q4',type:'text',prompt:'She has been knowing him for years. → ______',answers:['has known'],hint:'Know es un verbo de estado.',explain:'Generalmente usamos present perfect simple con “know”.'},
        {id:'q5',type:'text',prompt:'After he had finished his homework, he has gone out. → ______',answers:['went out'],hint:'Ambos sucesos se narran en un tiempo pasado terminado.',explain:'La acción posterior se expresa en past simple.'}
      ]
    },
    {
      id:'e4', title:'Transform the sentences',
      instruction:'Completa la transformación sin cambiar el significado.',
      questions:[
        {id:'q1',type:'text',prompt:'First Mia sent the email. Then she turned off her laptop.\nMia turned off her laptop after she ______.',answers:['had sent the email','had sent her email'],hint:'Usa past perfect después de “after she”.',explain:'“Had sent” sitúa el envío antes de apagar la computadora.'},
        {id:'q2',type:'text',prompt:'He started learning English in 2020 and he still studies it.\nHe ______ English since 2020.',answers:['has been learning','has studied'],hint:'La actividad comenzó en 2020 y continúa.',explain:'Present perfect continuous enfatiza la actividad continua.'},
        {id:'q3',type:'text',prompt:'I was in the middle of a call. Then the doorbell rang.\nI ______ when the doorbell rang.',answers:['was talking on the phone','was making a phone call','was on a call'],hint:'Usa una expresión de actividad en desarrollo.',explain:'La forma “was + -ing” muestra una acción interrumpida.'},
        {id:'q4',type:'text',prompt:'It is the first time I have tried sushi.\nI ______ sushi before.',answers:['have never tried',"haven't tried",'have not tried'],hint:'Expresa una experiencia que nunca ocurrió antes.',explain:'Present perfect expresa experiencias hasta el momento actual.'}
      ]
    },
    {
      id:'e5', title:'A short story: missing verbs',
      instruction:'Lee la historia y elige el tiempo verbal adecuado para cada oración.',
      intro:'“Last Saturday, Elena arrived at the airport in a hurry. A storm had delayed her taxi, and people were waiting anxiously at the gates.”',
      questions:[
        {id:'q1',type:'choice',prompt:'The storm ______ the taxi before Elena reached the airport.',options:['had delayed','has delayed','was delaying now'],correct:0,hint:'La demora ocurrió antes de llegar al aeropuerto.',explain:'La narración mira hacia atrás desde otro momento pasado.'},
        {id:'q2',type:'choice',prompt:'When Elena entered the terminal, passengers ______ at the gates.',options:['waited yesterday','were waiting','have waited'],correct:1,hint:'Se trata del fondo narrativo.',explain:'Past continuous establece la escena.'},
        {id:'q3',type:'choice',prompt:'Elena ______ at the airport last Saturday.',options:['has arrived','had been arriving','arrived'],correct:2,hint:'Hay una fecha pasada terminada.',explain:'Past simple para el evento principal.'},
        {id:'q4',type:'choice',prompt:'Elena says, “I ______ such a stressful journey before!”',options:["haven't ever had", "didn't ever have", "hadn't ever having"],correct:0,hint:'Habla de su experiencia hasta ahora.',explain:'Present perfect expresa experiencia hasta el presente.'}
      ]
    },
    {
      id:'e6', title:'B2 grammar challenge',
      instruction:'Elige cuidadosamente entre estructuras similares.',
      questions:[
        {id:'q1',type:'choice',prompt:'By next Monday, we ______ this unit.',options:['will have completed','have completed','had been completing'],correct:0,hint:'La referencia es un punto futuro límite.',explain:'Future perfect muestra una acción completada antes de un momento futuro.'},
        {id:'q2',type:'choice',prompt:'She ______ for two hours when the teacher finally arrived.',options:['has waited','had been waiting','waits'],correct:1,hint:'Duración hasta otro punto pasado.',explain:'Past perfect continuous indica cuánto tiempo llevaba esperando.'},
        {id:'q3',type:'choice',prompt:'This is the third time he ______ late this month.',options:['has arrived','arrived','had arriving'],correct:0,hint:'“This month” aún puede incluir el presente.',explain:'Present perfect con “This is the third time…”.'},
        {id:'q4',type:'choice',prompt:'No sooner ______ down than the meeting began.',options:['we had sat','had we sat','we have sat'],correct:1,hint:'No sooner + auxiliar + sujeto + participio.',explain:'En esta estructura de énfasis se invierte el auxiliar: “had we sat”.'}
      ]
    }
  ]
};
