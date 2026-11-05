/* V.I.V.A. Academy — English B2 Companion
   Unit 1: That's my kind of friend!
   Adaptación interactiva de los ejercicios 1–10 aportados para clase.
   Las preguntas 'open' son respuestas personales: se guardan, no se
   califican por coincidencia exacta. El resto se autocorrige. */
window.B2_MODULES = window.B2_MODULES || {};
window.B2_MODULES['01'] = {
  title: "That's my kind of friend!",
  subtitle: 'Personality · Adjective opposites · Relative clauses · Expressing reactions',
  badge: 'UNIT 1 · B2',
  lesson: 'Describe la personalidad de las personas, forma antónimos con in- y un-, usa who / that en cláusulas relativas y expresa lo que te gusta o te molesta.',
  lessons: [
    {term:'Personality adjectives', description:'modest, outgoing, supportive, temperamental, unreliable, etc.'},
    {term:'Opposite adjectives', description:'in- / un-: incompetent, independent, unattractive, unreliable.'},
    {term:'Relative clauses', description:'Who / that como sujeto; se puede omitir cuando es objeto.'},
    {term:'Reactions', description:'I like it when…, It upsets me when…, I don’t mind it when…'}
  ],
  exercises: [
    {
      id:'u1-e1', title:'1. Personality descriptions',
      instruction:'Complete the descriptions with the words from the list.',
      intro:'WORD BANK: modest · outgoing · supportive · temperamental · unreliable\nEjemplo: Eric is so modest! He never takes credit for his great ideas.',
      questions:[
        {id:'q1',type:'text',prompt:'The Wongs like meeting new people and inviting friends to dinner. They’re one of the most ______ couples I know.',answers:['outgoing'],hint:'A person who enjoys socializing.',explain:'Outgoing significa sociable y abierto a conocer gente.'},
        {id:'q2',type:'text',prompt:'Alice promises to do things, but she never follows through. She’s pretty ______.',answers:['unreliable'],hint:'You cannot depend on this person.',explain:'Unreliable: alguien en quien no puedes confiar para que cumpla.'},
        {id:'q3',type:'text',prompt:'James wants to become an actor. His family is very ______ of his dream.',answers:['supportive'],hint:'His family encourages him.',explain:'Supportive significa que apoya y anima a otra persona.'},
        {id:'q4',type:'text',prompt:'Lisa is happy one minute and angry the next. She’s so ______.',answers:['temperamental'],hint:'Her mood changes suddenly.',explain:'Temperamental describe cambios frecuentes o intensos de humor.'}
      ]
    },
    {
      id:'u1-e2a', title:'2A. Opposites with in- and un-',
      instruction:'Form the opposite of each adjective. Write the complete word.',
      intro:'The prefixes in- and un- make many adjectives negative.\nEjemplos del libro: competent → incompetent · attractive → unattractive.',
      questions:[
        {id:'q1',type:'text',prompt:'dependent → ______',answers:['independent'],hint:'Use in-.',explain:'Dependent → independent.'},
        {id:'q2',type:'text',prompt:'formal → ______',answers:['informal'],hint:'Use in-.',explain:'Formal → informal.'},
        {id:'q3',type:'text',prompt:'experienced → ______',answers:['inexperienced'],hint:'Use in-.',explain:'Experienced → inexperienced.'},
        {id:'q4',type:'text',prompt:'flexible → ______',answers:['inflexible'],hint:'Use in-.',explain:'Flexible → inflexible.'},
        {id:'q5',type:'text',prompt:'sensitive → ______',answers:['insensitive'],hint:'Use in-.',explain:'Sensitive → insensitive.'},
        {id:'q6',type:'text',prompt:'reasonable → ______',answers:['unreasonable'],hint:'Use un-.',explain:'Reasonable → unreasonable.'},
        {id:'q7',type:'text',prompt:'helpful → ______',answers:['unhelpful'],hint:'Use un-.',explain:'Helpful → unhelpful.'},
        {id:'q8',type:'text',prompt:'reliable → ______',answers:['unreliable'],hint:'Use un-.',explain:'Reliable → unreliable.'},
        {id:'q9',type:'text',prompt:'popular → ______',answers:['unpopular'],hint:'Use un-.',explain:'Popular → unpopular.'},
        {id:'q10',type:'text',prompt:'cooperative → ______',answers:['uncooperative'],hint:'Use un-.',explain:'Cooperative → uncooperative.'}
      ]
    },
    {
      id:'u1-e2b', title:'2B. Write your own sentences',
      instruction:'Write four original sentences using adjectives from Exercise 2A.',
      intro:'Ejemplo del libro: Alan is very incompetent at work. He makes a lot of mistakes.\nRedacta tus propias oraciones; se guardarán para revisarlas en clase.',
      questions:[
        {id:'q1',type:'open',prompt:'Sentence 1:',hint:'Try: independent / flexible / informal.',placeholder:'Write a complete sentence…'},
        {id:'q2',type:'open',prompt:'Sentence 2:',hint:'Use a different adjective.',placeholder:'Write a complete sentence…'},
        {id:'q3',type:'open',prompt:'Sentence 3:',hint:'Include a specific situation.',placeholder:'Write a complete sentence…'},
        {id:'q4',type:'open',prompt:'Sentence 4:',hint:'Explain the adjective with an example.',placeholder:'Write a complete sentence…'}
      ]
    },
    {
      id:'u1-e3', title:'3. Who, that or X?',
      instruction:'Write who or that when needed. Write X if the relative pronoun can be omitted.',
      intro:'Regla: si el pronombre es sujeto de la cláusula, se necesita who / that. Si es objeto, normalmente se puede omitir.\nEjemplo: Someone [X] I can go on vacation with.',
      questions:[
        {id:'q1',type:'text',prompt:'I want to travel with someone ______ is easygoing and independent.',answers:['who','that'],hint:'The person is the subject of “is”.',explain:'Who / that es obligatorio cuando funciona como sujeto de “is”.'},
        {id:'q2',type:'text',prompt:'You would probably also like a person ______ is reliable.',answers:['who','that'],hint:'The person performs the action “is”.',explain:'Who / that es el sujeto de la cláusula relativa.'},
        {id:'q3',type:'text',prompt:'I want someone ______ I know well.',answers:['X','none','omit','no pronoun'],hint:'“I” is already the subject.',explain:'El pronombre relativo es objeto de “know”, así que puede omitirse.'},
        {id:'q4',type:'text',prompt:'Do you think I’m someone ______ is high-strung, dependent and unreliable?',answers:['who','that'],hint:'The person is the subject of “is”.',explain:'Who / that se necesita como sujeto.'},
        {id:'q5',type:'text',prompt:'You’re someone ______ I could go on vacation with.',answers:['X','none','omit','no pronoun'],hint:'“I” is already the subject.',explain:'El pronombre sería objeto de “with” y se puede omitir.'}
      ]
    },
    {
      id:'u1-e4', title:'4. Describe the people you like',
      instruction:'Complete each idea with who or that and your own information.',
      intro:'Ejemplo: I generally like to go out with people who are easygoing and have a sense of humor.\nSon respuestas personales; no tienen una única solución.',
      questions:[
        {id:'q1',type:'open',prompt:'I’d rather travel with someone…',hint:'Try: who is adventurous and flexible.',placeholder:'…who / that…'},
        {id:'q2',type:'open',prompt:'I don’t really want a roommate…',hint:'What characteristics would make sharing a home difficult?',placeholder:'…who / that…'},
        {id:'q3',type:'open',prompt:'My classmates and I like teachers…',hint:'Think of a teacher who encourages students.',placeholder:'…who / that…'},
        {id:'q4',type:'open',prompt:'My best friend and I want to meet people…',hint:'Describe an ideal new friend.',placeholder:'…who / that…'},
        {id:'q5',type:'open',prompt:'Most workers would prefer a boss…',hint:'Supportive? Fair? Understanding?',placeholder:'…who / that…'},
        {id:'q6',type:'open',prompt:'Some people don’t like stingy types…',hint:'Write a relative clause explaining the behavior.',placeholder:'…who / that…'},
        {id:'q7',type:'open',prompt:'I don’t want to have inflexible friends…',hint:'Describe why they are difficult to get along with.',placeholder:'…who / that…'},
        {id:'q8',type:'open',prompt:'I feel comfortable discussing my problems with friends…',hint:'Use trust / supportive / listen.',placeholder:'…who / that…'},
        {id:'q9',type:'open',prompt:'My favorite friends are people…',hint:'Describe two positive characteristics.',placeholder:'…who / that…'}
      ]
    },
    {
      id:'u1-e5a', title:'5A. Two of a kind? Reading',
      instruction:'Read the adapted summary and complete the three contrasting personality pairs.',
      intro:'READING OVERVIEW — “Do opposites attract each other?”\nSome psychologists suggest that people can feel drawn to qualities they wish they had. The reading explores three contrasting pairs of personality characteristics. Introverted people tend to enjoy a quieter inner world, while extroverted people enjoy spending time with others. Thinkers tend to make objective, logical judgments; feelers are often guided by emotional awareness. Sensing people pay close attention to present facts and practical details, whereas intuitive people look toward possibilities and imagine future outcomes. The article suggests that these differences may complement one another, although everyone can show qualities from both sides.',
      questions:[
        {id:'q1',type:'text',prompt:'Pair 1: introverted and ______',answers:['extroverted','extraverted'],hint:'People who enjoy social interaction.',explain:'The reading contrasts introverted with extroverted.'},
        {id:'q2',type:'text',prompt:'Pair 2: thinker and ______',answers:['feeler'],hint:'People more focused on emotion and feelings.',explain:'The second pair is thinker / feeler.'},
        {id:'q3',type:'text',prompt:'Pair 3: sensing and ______',answers:['intuitive'],hint:'People who imagine possibilities.',explain:'The third pair is sensing / intuitive.'}
      ]
    },
    {
      id:'u1-e5b', title:'5B–C. Personality reflection',
      instruction:'Describe the qualities you find attractive, and reflect on whether opposites attract.',
      questions:[
        {id:'q1',type:'open',prompt:'I am more attracted to someone who is (introverted / extroverted). Therefore, I may be…',hint:'According to the idea of opposites attracting, choose the opposite.',placeholder:'Write your own answer…'},
        {id:'q2',type:'open',prompt:'I am more attracted to a (thinker / feeler). Therefore, I may be…',hint:'Explain your own preference.',placeholder:'Write your own answer…'},
        {id:'q3',type:'open',prompt:'I am more attracted to a (sensing type / intuitive type). Therefore, I may be…',hint:'Use the opposite term if you agree with the article.',placeholder:'Write your own answer…'},
        {id:'q4',type:'open',prompt:'Do you agree with the personality description above? Why or why not?',hint:'Write at least two sentences, with an example.',placeholder:'I agree / disagree because…'}
      ]
    },
    {
      id:'u1-e6', title:'6. Match the clauses',
      instruction:'Choose the most suitable ending for each sentence.',
      intro:'Match the clauses from columns A and B. Each ending is used once.',
      questions:[
        {id:'q1',type:'choice',prompt:'I like it …',options:['when someone criticizes me in front of other people.','when people are easygoing and friendly.','when rich people are stingy.','when people are a few minutes late for an appointment.'],correct:1,hint:'Choose a positive situation.',explain:'Easygoing and friendly people create a pleasant experience.'},
        {id:'q2',type:'choice',prompt:'I don’t mind it …',options:['when someone criticizes me in front of other people.','when people are easygoing and friendly.','when rich people are stingy.','when people are a few minutes late for an appointment.'],correct:3,hint:'A situation you tolerate.',explain:'“I don’t mind it” means that something does not bother you.'},
        {id:'q3',type:'choice',prompt:'It upsets me …',options:['when someone criticizes me in front of other people.','when people are easygoing and friendly.','when rich people are stingy.','when people are a few minutes late for an appointment.'],correct:2,hint:'Choose a behavior that makes you annoyed or sad.',explain:'“It upsets me” expresses a strong negative reaction.'},
        {id:'q4',type:'choice',prompt:'It embarrasses me …',options:['when someone criticizes me in front of other people.','when people are easygoing and friendly.','when rich people are stingy.','when people are a few minutes late for an appointment.'],correct:0,hint:'A situation that makes you feel self-conscious.',explain:'Public criticism can be embarrassing.'}
      ]
    },
    {
      id:'u1-e7', title:'7. How do these situations make you feel?',
      instruction:'Use the expressions in the book to write a reaction to each situation.',
      intro:'USEFUL LANGUAGE: I love it when… · I can’t stand it when… · I don’t like it when… · It upsets me when… · It bothers me when… · I don’t mind it when… · It makes me happy when… · It makes me angry when…\nEjemplo: I don’t like it when people cut in line.',
      questions:[
        {id:'q1',type:'open',prompt:'Situation 1: Someone cuts in line ahead of other people.',hint:'Express annoyance.',placeholder:'I don’t like it when…'},
        {id:'q2',type:'open',prompt:'Situation 2: A friend surprises another friend with a gift.',hint:'Express a positive feeling.',placeholder:'It makes me happy when…'},
        {id:'q3',type:'open',prompt:'Situation 3: Someone behaves noisily on public transportation.',hint:'Express an unpleasant reaction.',placeholder:'It bothers me when…'},
        {id:'q4',type:'open',prompt:'Situation 4: A person checks the clock at work.',hint:'What do you think of punctuality?',placeholder:'I really like it when…'},
        {id:'q5',type:'open',prompt:'Situation 5: Drivers are stuck in heavy traffic.',hint:'Try: I can’t stand it when…',placeholder:'I can’t stand it when…'},
        {id:'q6',type:'open',prompt:'Situation 6: A person talks loudly during a movie.',hint:'Express annoyance politely.',placeholder:'It makes me angry when…'}
      ]
    },
    {
      id:'u1-e8', title:'8. What I like and don’t like about people',
      instruction:'Write two sentences for each situation. Use the pictures’ ideas or your own.',
      questions:[
        {id:'q1',type:'open',prompt:'What I really like: someone thoughtfully gives flowers to another person.',hint:'Write two different positive reactions.',placeholder:'I love it when…\nIt makes me happy when…'},
        {id:'q2',type:'open',prompt:'What I don’t like: two people argue or disagree angrily.',hint:'Describe what bothers you.',placeholder:'It bothers me when…\nI don’t like it when…'},
        {id:'q3',type:'open',prompt:'What doesn’t bother me: one person is busy with a laptop while another uses a phone.',hint:'Use “I don’t mind it when…”.',placeholder:'I don’t mind it when…\n…'},
        {id:'q4',type:'open',prompt:'What upsets me: a person faces a very messy room.',hint:'Express a negative reaction.',placeholder:'It upsets me when…\n…'}
      ]
    },
    {
      id:'u1-e9', title:'9. It really bugs me! Writing',
      instruction:'Write two paragraphs about a situation that embarrasses, bothers or upsets you.',
      intro:'PARAGRAPH 1: Describe what happens and give a real or imaginary example.\nPARAGRAPH 2: Explain why it is difficult and what situation you would prefer.\nUse reaction expressions and relative clauses when possible.',
      questions:[
        {id:'q1',type:'open',rows:6,prompt:'Paragraph 1 — Describe the situation.',hint:'Try: It really bothers me when… Last week…',placeholder:'It really bothers me when…'},
        {id:'q2',type:'open',rows:6,prompt:'Paragraph 2 — Explain your feelings and your preference.',hint:'Try: I feel this way because… I would prefer…',placeholder:'This situation is difficult because…'}
      ]
    },
    {
      id:'u1-e10', title:'10. Choose the correct word',
      instruction:'Select the word that best completes each sentence.',
      questions:[
        {id:'q1',type:'choice',prompt:'I can tell Simon anything, and he won’t tell anyone else. I can really ______ him.',options:['believe','treat','trust'],correct:2,hint:'He keeps secrets.',explain:'Trust means to rely on a person.'},
        {id:'q2',type:'choice',prompt:'Kay has a very high opinion of herself. I don’t like people who are so ______.',options:['egotistical','temperamental','supportive'],correct:0,hint:'She thinks too highly of herself.',explain:'Egotistical describes someone overly concerned with their own importance.'},
        {id:'q3',type:'choice',prompt:'It bothers me when people are too serious. I prefer people who are ______ and have a good sense of humor.',options:['easygoing','inflexible','reliable'],correct:0,hint:'Relaxed and relaxed around others.',explain:'Easygoing means relaxed and not easily upset.'},
        {id:'q4',type:'choice',prompt:'I like it when someone expresses strong ______. Hearing other people’s views can make you think.',options:['accomplishments','compliments','opinions'],correct:2,hint:'Views and beliefs.',explain:'Opinions are personal views or judgments.'},
        {id:'q5',type:'choice',prompt:'Lisa is very rich, but she only spends money on herself. She’s very ______.',options:['generous','modest','stingy'],correct:2,hint:'Not generous.',explain:'Stingy describes someone unwilling to share or spend money.'}
      ]
    }
  ]
};
