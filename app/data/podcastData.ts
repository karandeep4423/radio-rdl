// TypeScript Interfaces
export interface PodcastThumbnails {
  "32"?: string;
  "64"?: string;
  "80"?: string;
  "90"?: string;
  "128"?: string;
  "144"?: string;
  "152"?: string;
  "192"?: string;
  "256"?: string;
  "350"?: string;
  "600"?: string;
  "1200"?: string;
  "1500"?: string;
}

export interface Podcast {
  id: string;
  name: string;
  title: string;
  language: string;
  episodeCounter: number;
  lastPublishedAt: string;
  path: string;
  thumbnails: PodcastThumbnails;
  author?: string;
  copyright?: string;
}

export interface Episode {
  id: string;
  title: string;
  publishedAt: string;
  duration: string;
  description: string;
  audioUrl: string;
}

export interface PodcastData {
  [category: string]: Podcast[];
}

export const podcastData: PodcastData = {
  "Nos podcasts du moment": [
    {
      "id": "51bfa1aeb79c6afe6c53540de7f5bdd182e811c5",
      "name": "La dernière",
      "title": "Rendez-vous le dimanche en direct pour une analyse pointue, objective et impartiale de l'actualité.",
      "language": "fr",
      "episodeCounter": 461,
      "lastPublishedAt": "2025-11-17 08:52:00",
      "path": "radio-nova-la-derniere",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/51bfa1aeb79c6afe6c53540de7f5bdd182e811c5/086b9e34.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/51bfa1aeb79c6afe6c53540de7f5bdd182e811c5/086b9e34.png"
      }
    },
    {
      "id": "539f246c262cd4b905a154fe2b1038c8908e8291",
      "name": "Nova le matin",
      "title": "La matinale culturelle et musicale de Radio Nova.",
      "language": "fr",
      "episodeCounter": 2294,
      "lastPublishedAt": "2025-11-21 08:18:54",
      "path": "radio-nova-t-vu-lheure",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/539f246c262cd4b905a154fe2b1038c8908e8291/ef1690e3.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/539f246c262cd4b905a154fe2b1038c8908e8291/ef1690e3.png"
      }
    },
    {
      "id": "eda8f6e04985747c5798f9edaea76d7a9bb4e889",
      "name": "La matinale de la nuit",
      "title": "Qui a dit qu'une matinale devait forcément avoir lieu… le matin ?",
      "language": "fr",
      "episodeCounter": 18,
      "lastPublishedAt": "2025-11-18 23:57:27",
      "path": "radio-nova-la-matinale-de-la-nuit",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/eda8f6e04985747c5798f9edaea76d7a9bb4e889/8113aca1.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/eda8f6e04985747c5798f9edaea76d7a9bb4e889/8113aca1.png"
      }
    },
    {
      "id": "5f7815e2c0f951b15aec77cfd9a91e5e35ac3af6",
      "name": "La riposte",
      "title": "Sarcasmes, démontages en règle, baffes médiatiques gratuites… dans La riposte, Akim Omiri et sa bande décryptent et démontent l'actualité.",
      "language": "fr",
      "episodeCounter": 169,
      "lastPublishedAt": "2025-11-18 16:43:39",
      "path": "radio-nova-la-riposte",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/5f7815e2c0f951b15aec77cfd9a91e5e35ac3af6/13f18d40.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/5f7815e2c0f951b15aec77cfd9a91e5e35ac3af6/13f18d40.png"
      }
    },
    {
      "id": "82b4e1fb2127587dea1282e6dbb6e8ed14970ecb",
      "name": "Le Score",
      "title": "Un.e invité.e. De la musique. Une heure d'entretien pour raconter son rapport au travail, à l'art, l'humour, au quotidien, rythmée par une B.O. concoctée par nos soins…",
      "language": "fr",
      "episodeCounter": 245,
      "lastPublishedAt": "2025-11-21 19:00:00",
      "path": "radio-nova-le-score",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/82b4e1fb2127587dea1282e6dbb6e8ed14970ecb/9d62e4be.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/82b4e1fb2127587dea1282e6dbb6e8ed14970ecb/9d62e4be.png"
      }
    },
    {
      "id": "97fc6857072b59da3058f34125f5daea0373f28a",
      "name": "Nova Club",
      "title": "Le salon musical de Radio Nova.",
      "language": "fr",
      "episodeCounter": 1186,
      "lastPublishedAt": "2025-11-20 21:00:00",
      "path": "radio-nova-nova-club",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/97fc6857072b59da3058f34125f5daea0373f28a/dda76e78.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/97fc6857072b59da3058f34125f5daea0373f28a/dda76e78.png"
      }
    }
  ],
  "Nos podcasts originaux": [
    {
      "id": "c48d7ddf9cf8cbe59e5bec18d9ebeca2040a0c32",
      "name": "Cap sur l'Amapiano",
      "title": "L'Afrique du Sud sur le dancefloor.",
      "language": "fr",
      "episodeCounter": 1,
      "lastPublishedAt": "2024-03-05 17:00:37",
      "path": "radio-nova-cap-sur-lamapiano",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/c48d7ddf9cf8cbe59e5bec18d9ebeca2040a0c32/c0d5ecfc.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/c48d7ddf9cf8cbe59e5bec18d9ebeca2040a0c32/c0d5ecfc.png"
      }
    },
    {
      "id": "3d7fd72d89820ade2afb5ff95fad4e142a852e42",
      "name": "One Bob",
      "title": "Né en homme, mort en icône, comment la figure la plus célèbre de la musique reggae, prophète en son pays et en dehors, est-il entré dans la légende ?",
      "language": "fr",
      "episodeCounter": 6,
      "lastPublishedAt": "2024-02-05 23:10:00",
      "path": "radio-nova-one-bob",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/3d7fd72d89820ade2afb5ff95fad4e142a852e42/227828e6.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/3d7fd72d89820ade2afb5ff95fad4e142a852e42/227828e6.png"
      }
    },
    {
      "id": "d0648c106ab8e0f29c8c30839750a376b33be106",
      "name": "Dans ma Benz",
      "title": "Une fiction musicale animée par Prince Waly, et des chroniques imaginées et pensées par Radio Nova, en partenariat avec Mercedes-Benz.",
      "language": "fr",
      "episodeCounter": 17,
      "lastPublishedAt": "2023-11-09 15:11:11",
      "path": "radio-nova-dans-ma-benz",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/d0648c106ab8e0f29c8c30839750a376b33be106/6f147efa.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/d0648c106ab8e0f29c8c30839750a376b33be106/6f147efa.png"
      }
    },
    {
      "id": "432a09c85037ae56e11f53f9ade5bd61377f2537",
      "name": "Sakamoto-sama : hommage à Ryūichi Sakamoto",
      "title": "Sakamoto-sama : un podcast de Sophie Marchand, réalisé par Malo Williams avec des archives de Radio Nova.",
      "language": "fr",
      "episodeCounter": 1,
      "lastPublishedAt": "2023-04-24 13:47:11",
      "path": "radio-nova-sakamoto-sama-hommage-ryuichi-sakamoto",
      "thumbnails": {
        "350": "https://assets.voxeus.com/podcasts/assets/images/rs/program/350/432a09c85037ae56e11f53f9ade5bd61377f2537/a2a3808c.png",
        "600": "https://assets.voxeus.com/podcasts/assets/images/rs/program/600/432a09c85037ae56e11f53f9ade5bd61377f2537/a2a3808c.png"
      }
    }
  ]
};

// Real episode data for "La dernière" podcast
export const mockEpisodes: Record<string, Episode[]> = {
  "51bfa1aeb79c6afe6c53540de7f5bdd182e811c5": [
    {
      "id": "202511162045-lintegrale-la-derniere-du-16-novembre-2025-avec-emma-oudiou",
      "title": "L'intégrale : La dernière du 16 novembre 2025 avec Emma Oudiou",
      "publishedAt": "2025-11-17 08:52:00",
      "duration": "01:32:04",
      "description": "Sur Radio Nova ce dimanche : Emma Oudiou (athlète), Audrey Vernon, Florian Gouthière et Florence Mendez. La dernière, le dimanche à 18h en direct sur Radio Nova et à tout moment en podcast et en vidéo.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/f439c8ad-4219-40b0-8d9a-add5813a4564.mp3?_=1763326645&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511170848-le-cancer-du-cancer-la-chronique-de-florian-gouthiere-dans-l",
      "title": "Le cancer du cancer - La chronique de Florian Gouthière dans La dernière",
      "publishedAt": "2025-11-17 08:48:06",
      "duration": "05:55",
      "description": "Nouvel opus de notre série de chroniques sur les \"médecines louches\" avec l'une des plus criminelles du catalogue : la \"biologie totale\" (a.k.a \"nouvelle médecine germanique\"...) promue jusqu'à sa mort par le tristement célèbre Ryke Geerd Hamer... et, encore aujourd'hui, par nombre de ses émules.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/1c64291c-00e4-4c7c-8a6a-494369653c04.mp3?_=1763369504&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511170846-debarassez-vous-de-vos-smartphones-la-chronique-daudrey-vern",
      "title": "Débarrassez-vous de vos smartphones - La chronique d'Audrey Vernon dans La dernière",
      "publishedAt": "2025-11-17 08:46:43",
      "duration": "05:18",
      "description": "La chronique d'Audrey Vernon dans La dernière du dimanche 16 novembre 2025 sur Radio Nova. La dernière, le dimanche à 18h en direct sur Radio Nova et à tout moment en podcast et en vidéo.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/6f9aab68-7a26-409b-9804-8ebfdd0718f4.mp3?_=1763369282&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511170845-je-taime-gerald-darmanin-la-chronique-de-florence-mendez-dan",
      "title": "Je t'aime Gérald Darmanin - La chronique de Florence Mendez dans La dernière",
      "publishedAt": "2025-11-17 08:45:40",
      "duration": "04:07",
      "description": "Florence déclare sa flamme à Gérald Darmanin. La chronique de Florence Mendez dans La dernière du dimanche 16 novembre 2025 sur Radio Nova.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/401a960b-3702-4a07-aa6a-af677c0a700b.mp3?_=1763369198&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511170829-la-chasse-la-chronique-de-pierre-emmanuel-barre",
      "title": "La chasse - La chronique de Pierre-Emmanuel Barré",
      "publishedAt": "2025-11-17 08:29:08",
      "duration": "04:27",
      "description": "Les armureries, ça ne devrait pas être dans les centres commerciaux, ça devrait être dans les hôpitaux. La chronique de Pierre-Emmanuel Barré dans La dernière du dimanche 16 novembre 2025 sur Radio Nova.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/17d024f7-6055-4edb-bee5-5f30c1ba5c0f.mp3?_=1763368242&ps=2654307c-90d2-4394-a438-90c92ef369e9"
    },
    {
      "id": "202511162143-les-politiques-sont-fatigues-la-chronique-daymeric-lompret",
      "title": "Les politiques sont fatigués - La chronique d'Aymeric Lompret",
      "publishedAt": "2025-11-16 21:43:48",
      "duration": "05:34",
      "description": "C'est l'histoire de Jhonny l'égo. Jhonny l'égo avait tellement d'égo qu'il voulait devenir député de la france. Et apres il était triste parce que il devait travailler le samedi et le dimanche.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/729a80e0-2d0f-4ee1-b833-e766d4a5b8ec.mp3?_=1763329515&ps=d76ed85b-40cf-4634-998e-842f9cce9453"
    },
    {
      "id": "202511162117-ceux-qui-ont-des-muscles-mais-cest-pas-les-muscles-la-chroni",
      "title": "Ceux qui ont des muscles (mais c'est pas Les Musclés) - La chronique de Juliette Arnaud",
      "publishedAt": "2025-11-16 21:17:28",
      "duration": "04:59",
      "description": "La chronique de Juliette Arnaud dans La dernière du dimanche 16 novembre 2025 sur Radio Nova. Références : American Psycho (Brett Easton Ellis) - Parthenia (Pauline Gonthier)",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/505692ce-6271-4a67-950c-8d77cd925297.mp3?_=1763327933&ps=f8c537d1-de01-460e-9cbb-423a398419ba"
    },
    {
      "id": "202511161919-ce-que-l-ne-sait-pas-sur-linvitee-emma-oudiou-et-elle-non-pl",
      "title": "Ce que l'on ne sait pas sur l'invitée Emma Oudiou et elle non plus par Aymeric Lompret",
      "publishedAt": "2025-11-16 19:19:49",
      "duration": "04:21",
      "description": "Aymeric Lompret nous présente ce que l'on ne sait pas sur Emma Oudiou et elle non plus. La dernière, le dimanche à 18h en direct sur Radio Nova et à tout moment en podcast et en vidéo.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/44311926-10f5-4298-95e0-03d8724ac4d7.mp3?_=1763320904&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511161834-y-pas-que-lislam-dans-la-vie-la-chronique-de-guillaume-meuri",
      "title": "Y'a pas que l'Islam dans la vie ! - La chronique de Guillaume Meurice",
      "publishedAt": "2025-11-16 18:34:26",
      "duration": "04:01",
      "description": "Par manque de travail Aymeric ressort une chronique de ses débuts. La chronique de Guillaume Meurice dans La dernière du dimanche 16 novembre 2025 sur Radio Nova.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/d9e23b3e-6ffc-4dbc-9ebc-f7926ff50bac.mp3?_=1763318222&ps=c93fc680-2aac-4c87-880b-611da0d643f4"
    },
    {
      "id": "202511161803-un-humoriste-t-il-rate-sa-vie-sil-n-pas-eu-de-plainte-enfin",
      "title": "\"Un humoriste a-t-il raté sa vie s'il n'a pas eu de plainte ?\" - Enfin les questions des VRAIS auditeurs",
      "publishedAt": "2025-11-16 18:03:19",
      "duration": "06:49",
      "description": "Cette année, Juliette Arnaud, Guillaume Meurice, Aymeric Lompret et Pierre-Emmanuel Barré répondent aux vraies questions des vrai.e.s auditeur.ices. Envoyez toutes vos questions sur : laderniere@radionova.com !",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/7bbb2950-9783-4cbc-8a4e-5d0a6129a55f.mp3?_=1763316278&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511092123-lintegrale-la-derniere-du-9-novembre-2025-avec-audrey-dussut",
      "title": "L'intégrale : \"La dernière\" du 9 novembre 2025 avec Audrey Dussutour",
      "publishedAt": "2025-11-09 23:26:00",
      "duration": "01:40:42",
      "description": "Sur Radio Nova ce dimanche : Audrey Dussutour (biologiste), Doully, Florence Mendez et Tania Louis. La dernière, le dimanche à 18h en direct sur Radio Nova et à tout moment en podcast et en vidéo.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/eb3ddd48-d53a-45e6-9eef-dc55973c9752.mp3?_=1762723690&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511092315-le-beurre-largent-du-beurre-et-le-cl-des-chercheurs-la-chron",
      "title": "Le beurre, l'argent du beurre et le c*l des chercheurs - La chronique de Tania Louis",
      "publishedAt": "2025-11-09 23:15:35",
      "duration": "04:34",
      "description": "Chaque année des entreprises font des millions de bénéfices sur le dos des labos publics. Tania se penche sur leur audacieux modèle économique.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/f0dec22e-f203-4586-853b-3d77c14b0189.mp3?_=1762730245&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511092314-je-suis-lado-dans-les-repas-de-famille-la-chronique-de-doull",
      "title": "Je suis l'ado dans les repas de famille - La chronique de Doully",
      "publishedAt": "2025-11-09 23:14:53",
      "duration": "05:20",
      "description": "La chronique de Doully dans La dernière du dimanche 9 novembre 2025 sur Radio Nova. La dernière, le dimanche à 18h en direct sur Radio Nova et à tout moment en podcast et en vidéo.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/b80c949f-335e-4d00-80a4-036b89d9e3d2.mp3?_=1762730131&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511092223-littairrature-la-chronique-daymeric-lompret",
      "title": "Littairrature - La chronique d'Aymeric Lompret",
      "publishedAt": "2025-11-09 22:23:59",
      "duration": "05:11",
      "description": "Aymeric nous parle de la rentrée littairaire. La chronique d'Aymeric Lompret dans La dernière du dimanche 9 novembre 2025 sur Radio Nova.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/21118cf6-f83c-439f-9f3f-0d786ff1b816.mp3?_=1762727155&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    },
    {
      "id": "202511092203-journee-mondiale-de-lutte-contre-le-fascisme-et-lantisemitis",
      "title": "Journée mondiale de lutte contre le fascisme et l'antisémitisme - La chronique de Florence Mendez",
      "publishedAt": "2025-11-09 22:03:18",
      "duration": "06:21",
      "description": "Florence nous parle de l'antisémitisme et de son instrumentalisation. La chronique de Florence Mendez dans La dernière du dimanche 9 novembre 2025 sur Radio Nova.",
      "audioUrl": "https://audio.audiomeans.fr/file/KxuSEmOxMG/dda24ca9-c452-4bde-b068-fd5368d6ded7.mp3?_=1762725884&ps=9f8626d5-a57f-475d-8c0b-43c20fa2e696"
    }
  ]
};
