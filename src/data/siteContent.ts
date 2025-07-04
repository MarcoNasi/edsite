import { SiteContent } from '../types';

export const defaultSiteContent: SiteContent = {
  hero: {
    title: "Trasforma il tuo business con soluzioni digitali innovative",
    subtitle: "Sviluppiamo soluzioni web e mobile personalizzate per far crescere la tua azienda nel mondo digitale",
    ctaText: "Inizia il tuo progetto",
  },
  about: {
    title: "Chi Siamo",
    subtitle: "La nostra storia di innovazione",
    description: "EnderDevelopment è un'azienda leader nello sviluppo di soluzioni digitali innovative. Dal 2020, ci dedichiamo a trasformare le idee dei nostri clienti in realtà digitali di successo, combinando tecnologia all'avanguardia con un approccio creativo e orientato ai risultati.",
    missionTitle: "La nostra missione",
    missionDescription: "La nostra missione è guidare la trasformazione digitale delle aziende attraverso soluzioni tecnologiche innovative e personalizzate. Ci impegniamo a fornire servizi di alta qualità che non solo risolvono le sfide attuali dei nostri clienti, ma li preparano anche per il futuro digitale.",
  },
  services: {
    title: "I Nostri Servizi",
    subtitle: "Soluzioni complete per il tuo successo digitale",
    items: [
      {
        id: "service1",
        title: "Sviluppo Web Personalizzato",
        description: "Creiamo siti web e applicazioni web su misura, ottimizzati per le prestazioni e progettati per offrire un'esperienza utente eccezionale. Utilizziamo le tecnologie più moderne per garantire scalabilità e manutenibilità.",
        icon: "code",
      },
      {
        id: "service2",
        title: "Sviluppo App Mobile",
        description: "Sviluppiamo applicazioni mobile native e cross-platform che si distinguono per design, funzionalità e prestazioni. Dalla concezione al lancio, gestiamo l'intero ciclo di vita dell'app.",
        icon: "smartphone",
      },
      {
        id: "service3",
        title: "E-commerce Solutions",
        description: "Implementiamo piattaforme e-commerce complete e scalabili, integrate con i migliori sistemi di pagamento e gestione magazzino, per massimizzare le tue vendite online.",
        icon: "shopping-cart",
      },
      {
        id: "service4",
        title: "Digital Transformation",
        description: "Guidiamo la tua azienda nel processo di trasformazione digitale, implementando soluzioni innovative che ottimizzano i processi e migliorano l'efficienza operativa.",
        icon: "bar-chart",
      },
      {
        id: "service5",
        title: "Cloud Solutions",
        description: "Offriamo servizi cloud completi, dalla migrazione all'ottimizzazione delle infrastrutture, garantendo scalabilità, sicurezza e prestazioni ottimali.",
        icon: "cloud",
      },
      {
        id: "service6",
        title: "Consulenza IT",
        description: "Forniamo consulenza strategica per aiutarti a prendere decisioni informate sulla tecnologia e l'implementazione di soluzioni digitali per il tuo business.",
        icon: "database",
      },
    ],
  },
  projects: {
    title: "I Nostri Progetti",
    subtitle: "Storie di successo e innovazione",
    items: [
      {
        id: "project1",
        title: "Piattaforma E-learning Avanzata",
        description: "Sviluppo di una piattaforma di apprendimento online completa con funzionalità di video streaming, quiz interattivi e analisi delle prestazioni degli studenti.",
        category: "Web Application",
        imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        client: "EduTech Solutions",
        year: 2023,
      },
      {
        id: "project2",
        title: "App di Delivery Multiservizio",
        description: "Creazione di un'app mobile per la gestione delle consegne con tracking in tempo reale, gestione ordini e sistema di pagamento integrato.",
        category: "Mobile App",
        imageUrl: "https://images.pexels.com/photos/2882634/pexels-photo-2882634.jpeg",
        client: "FastDelivery",
        year: 2023,
      },
      {
        id: "project3",
        title: "Marketplace B2B",
        description: "Implementazione di una piattaforma B2B per la compravendita di prodotti industriali con gestione avanzata del catalogo e sistema di aste online.",
        category: "E-commerce",
        imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
        client: "IndustryConnect",
        year: 2023,
      },
      {
        id: "project4",
        title: "Sistema IoT per Smart Factory",
        description: "Sviluppo di una soluzione IoT per il monitoraggio in tempo reale della produzione industriale con dashboard analytics e alerting automatico.",
        category: "IoT",
        imageUrl: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
        client: "SmartFactory Solutions",
        year: 2022,
      },
      {
        id: "project5",
        title: "Piattaforma di Telemedicina",
        description: "Realizzazione di una piattaforma per consulti medici online con videoconferenze sicure e gestione delle cartelle cliniche digitali.",
        category: "Healthcare",
        imageUrl: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg",
        client: "HealthConnect",
        year: 2022,
      },
      {
        id: "project6",
        title: "App Fintech per Investimenti",
        description: "Sviluppo di un'applicazione mobile per investimenti con analisi in tempo reale dei mercati e gestione del portfolio automatizzata.",
        category: "Fintech",
        imageUrl: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg",
        client: "InvestSmart",
        year: 2022,
      },
    ],
  },
  team: {
    title: "Il Nostro Team",
    subtitle: "Esperti appassionati di tecnologia e innovazione",
    members: [
      {
        id: "member1",
        name: "Alessandro Rossi",
        role: "CEO & Founder",
        bio: "Con oltre 15 anni di esperienza nel settore IT e una passione per l'innovazione, Alessandro guida il team di EnderDevelopment verso nuove sfide e opportunità.",
        imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      },
      {
        id: "member2",
        name: "Elena Bianchi",
        role: "CTO",
        bio: "Esperta in architetture software scalabili e tecnologie cloud, Elena supervisiona tutti gli aspetti tecnici dei progetti garantendo qualità e innovazione.",
        imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      },
      {
        id: "member3",
        name: "Marco Verdi",
        role: "Lead Developer",
        bio: "Full-stack developer con una passione per le tecnologie emergenti e l'ottimizzazione delle prestazioni. Guida il team di sviluppo con competenza e creatività.",
        imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      },
      {
        id: "member4",
        name: "Sofia Marino",
        role: "UX/UI Designer",
        bio: "Designer creativa specializzata in user experience, Sofia crea interfacce intuitive e accattivanti che mettono l'utente al centro del design.",
        imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      },
      {
        id: "member5",
        name: "Luca Ferrari",
        role: "Project Manager",
        bio: "Esperto nella gestione di progetti complessi, Luca assicura che ogni progetto venga consegnato nei tempi e nel budget previsti.",
        imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      },
      {
        id: "member6",
        name: "Giulia Romano",
        role: "Digital Strategist",
        bio: "Specialista in strategie digitali, Giulia aiuta i clienti a definire la migliore roadmap per la loro trasformazione digitale.",
        imageUrl: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
      },
    ],
  },
  testimonials: {
    title: "Testimonianze",
    subtitle: "Cosa dicono i nostri clienti",
    items: [
      {
        id: "testimonial1",
        quote: "EnderDevelopment ha trasformato completamente la nostra presenza digitale. Il nuovo sistema ha aumentato l'efficienza operativa del 200% in soli sei mesi.",
        author: "Marco Colombo",
        company: "TechPro Solutions",
      },
      {
        id: "testimonial2",
        quote: "La professionalità e la competenza del team sono state fondamentali per il successo del nostro progetto. Hanno superato ogni nostra aspettativa.",
        author: "Laura Conti",
        company: "InnovateNow",
      },
      {
        id: "testimonial3",
        quote: "Grazie a EnderDevelopment, abbiamo lanciato la nostra app in tempi record. Il supporto continuo e la qualità del lavoro sono stati eccezionali.",
        author: "Giuseppe Moretti",
        company: "AppStart",
      },
      {
        id: "testimonial4",
        quote: "La loro expertise in digital transformation ci ha permesso di modernizzare i nostri processi e aumentare significativamente la produttività.",
        author: "Anna Ricci",
        company: "ModernTech",
      },
    ],
  },
  contact: {
    title: "Contattaci",
    subtitle: "Trasforma la tua idea in realtà",
    address: "Via dell'Innovazione 42, 20129 Milano",
    email: "info@enderdevelopment.com",
    phone: "+39 02 1234 5678",
  },
  blog: {
    title: "Blog & Insights",
    subtitle: "Le ultime novità dal mondo della tecnologia",
    posts: [
      {
        id: "post1",
        title: "Il Futuro del Web Development nel 2024",
        excerpt: "Esploriamo le tendenze emergenti nello sviluppo web e come stanno plasmando il futuro del digital business.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nisl.",
        imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
        date: "2024-03-15",
        author: "Elena Bianchi",
      },
      {
        id: "post2",
        title: "Intelligenza Artificiale nello Sviluppo Software",
        excerpt: "Come l'AI sta rivoluzionando il modo in cui progettiamo e sviluppiamo software.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nisl.",
        imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        date: "2024-03-10",
        author: "Marco Verdi",
      },
      {
        id: "post3",
        title: "Best Practices per la Sicurezza delle Applicazioni Web",
        excerpt: "Guide essenziali per proteggere le tue applicazioni web da minacce moderne.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nisl.",
        imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
        date: "2024-03-05",
        author: "Alessandro Rossi",
      },
      {
        id: "post4",
        title: "Cloud Native Development: Guida Completa",
        excerpt: "Tutto quello che devi sapere sullo sviluppo di applicazioni native per il cloud.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nisl.",
        imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        date: "2024-02-28",
        author: "Sofia Marino",
      },
      {
        id: "post5",
        title: "Microservizi vs Monoliti: Quale Scegliere?",
        excerpt: "Un'analisi approfondita dei pro e contro di diverse architetture software.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nisl.",
        imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        date: "2024-02-20",
        author: "Luca Ferrari",
      },
    ],
  },
};