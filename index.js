console.log("connected");
// console.log(" ")

// const books = [
//   {
//     name: "To Kill a Mockingbird",
//     authorFirst: "Harper",
//     authorLast: "Lee",
//     publishDate: 1960,
//     genre: ["mystery", "historical", "fiction"],
//   },
//   {
//     name: "The Great Gatsby",
//     authorFirst: "F. Scott",
//     authorLast: "Fitzgerald",
//     publishDate: 1925,
//     genre: ["mystery", "historical", "fiction"],
//   },
//   {
//     name: "The Hobbit",
//     authorFirst: "JRR",
//     authorLast: "Tolkien",
//     publishDate: 1937,
//     genre: ["fantasy", "fiction"],
//   },
//   {
//     name: "Harry Potter and the Deathly Hallows",
//     authorFirst: "JK",
//     authorLast: "Rowling",
//     publishDate: 1997,
//     genre: ["fantasy", , "fiction"],
//   },
//   {
//     name: "Ulysses",
//     authorFirst: "James",
//     authorLast: "Joyce",
//     publishDate: 1918,
//     genre: ["historical", "non-fiction"],
//   },
//   {
//     name: "War and Peace",
//     authorFirst: "Leo",
//     authorLast: "Tolstoy",
//     publishDate: 1867,
//     genre: ["historical", "fiction"],
//   },
//   {
//     name: "Pride and Prejudice",
//     authorFirst: "Jane",
//     authorLast: "Austen",
//     publishDate: 1813,
//     genre: ["fiction"],
//   },
//   {
//     name: "The Catcher in the Rye",
//     authorFirst: "JD",
//     authorLast: "Salinger",
//     publishDate: 1951,
//     genre: ["fiction"],
//   },
//   {
//     name: "Great Expectations",
//     authorFirst: "Charles",
//     authorLast: "Dickens",
//     publishDate: 1861,
//     genre: ["historical", "fiction"],
//   },
//   {
//     name: "Little Women",
//     authorFirst: "Lousia May",
//     authorLast: "Alcott",
//     publishDate: 1868,
//     genre: ["womens", "historical", "fiction"],
//   },
// ];

// const titles = [
//   "To Kill a Mockingbird",
//   "The Great Gatsby",
//   "The Hobbit",
//   "Harry Potter and the Deathly Hallows",
//   "Ulysses",
//   "War and Peace",
//   "Pride and Prejudice",
//   "The Catcher in the Rye",
//   "Great Expectations",
//   "Little Women",
// ];

// //Array of authors and the book they wrote
// //"--- wrote --- in ---"
// books.forEach(book => {
//   console.log(book.authorFirst + " " + book.authorLast + " wrote " + book.name + " in " + book.publishDate);
// });
  
// //Sort books from oldest to most recent
// books.sort((a, b) => a.publishDate - b.publishDate);
// for (const book of books) {
//   console.log(book.name + " by " + book.authorFirst + " " + book.authorLast + " (" + book.publishDate + ")");
// }

// //sort books alphabetically
// titles.sort();
//   console.log(titles);

// //Find who wrote War and Peace
// const warAndPeace = books.filter(book => book.name === "War and Peace");
// if (warAndPeace) {
//   console.log("The author of War and Peace is " + warAndPeace.authorFirst + " " + warAndPeace.authorLast);
// } else {
//   console.log("War and Peace not found in the list of books.");
// }

// //how many books were written before 1900?
// const before1900 = books.reduce((count, book) => {
//   if (book.publishDate < 1900) {
//     return count + 1;
//   }
//   return count;
// }, 0);
// console.log("There are " + before1900 + " books written before 1900.");

// //was there at least one book published within the last 100 years?
// const currentYear = new Date().getFullYear();
// const notCenturyOld = books.some(book => currentYear - book.publishDate <= 100);
// if (notCenturyOld) {
//   console.log("At least one book on the list was published within the last century.");
// } else {
//   console.log("All books on the list are older than 100 years.");
// }

// //was every book published within the last 100 years?
// const allBooksWithinLastCentury = books.filter(book => currentYear - book.publishDate <= 100);
// if (allBooksWithinLastCentury) {
//   console.log("Every book in the list was published within the last century.");
// } else {
//   console.log("The list contains books that are at least a century old.");
// }

// //print a list of books that "includes" the genre historical
// const historicalBooks = books.filter(book => book.genre.includes("historical"));
// if (historicalBooks.length > 0) {
//   historicalBooks.forEach(book => {
//     console.log(book.name + " by " + book.authorFirst + " " + book.authorLast);
//   });
// } else {
//   console.log("There are no books with the 'historical' genre in this list.");
// }

//------------------------------------------------------------------------------------------------

// const data = [
//   {
//     score: 9.04,
//     scored_by: 151147,
//     rank: 9,
//     popularity: 705,
//     members: 294168,
//     favorites: 2881,
//     synopsis:
//       "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character? In addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls. Gintama': Enchousen includes moments of action-packed intensity along with their usual lighthearted, slapstick humor for Gintoki and his friends. [Written by MAL Rewrite]",
//     background:
//       "This is a third season of Gintama. In the episode continuity corresponds to episodes 253-265 of Gintama.",
//     season: "fall",
//     year: 2012,
//     broadcast: {
//       day: "Thursdays",
//       time: "18:00",
//       timezone: "Asia/Tokyo",
//       string: "Thursdays at 18:00 (JST)",
//     },
//     producers: [[Object], [Object], [Object], [Object], [Object]],
//     licensors: [],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object], [Object]],
//     demographics: [[Object]],
//     stringGenres: ["action", "fantasy"],
//   },
//   {
//     mal_id: 11061,
//     url: "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "D9iTQRB4XRk",
//       url: "https://www.youtube.com/watch?v=D9iTQRB4XRk",
//       embed_url:
//         "https://www.youtube.com/embed/D9iTQRB4XRk?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     title: "Hunter x Hunter (2011)",
//     title_english: "Hunter x Hunter",
//     title_japanese: "HUNTER×HUNTER（ハンター×ハンター）",
//     title_synonyms: ["HxH (2011)"],
//     type: "TV",
//     source: "Manga",
//     episodes: 148,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2011-10-02T00:00:00+00:00",
//       to: "2014-09-24T00:00:00+00:00",
//       prop: [Object],
//       string: "Oct 2, 2011 to Sep 24, 2014",
//     },
//     duration: "23 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 9.04,
//     scored_by: 1558456,
//     rank: 10,
//     popularity: 10,
//     members: 2495659,
//     favorites: 190751,
//     synopsis:
//       "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased. Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path. During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight,",
//     background: null,
//     season: "fall",
//     year: 2011,
//     broadcast: {
//       day: "Sundays",
//       time: "10:55",
//       timezone: "Asia/Tokyo",
//       string: "Sundays at 10:55 (JST)",
//     },
//     producers: [[Object], [Object], [Object]],
//     licensors: [[Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [],
//     demographics: [[Object]],
//     stringGenres: ["drama"],
//   },
//   {
//     mal_id: 820,
//     url: "https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "Ou37P25tjJY",
//       url: "https://www.youtube.com/watch?v=Ou37P25tjJY",
//       embed_url:
//         "https://www.youtube.com/embed/Ou37P25tjJY?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     title: "Ginga Eiyuu Densetsu",
//     title_english: "Legend of the Galactic Heroes",
//     title_japanese: "銀河英雄伝説",
//     title_synonyms: [
//       "LoGH",
//       "LotGH",
//       "Gin'eiden",
//       "GinEiDen",
//       "Heldensagen Vom Kosmosinsel",
//     ],
//     type: "OVA",
//     source: "Novel",
//     episodes: 110,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "1988-01-08T00:00:00+00:00",
//       to: "1997-03-17T00:00:00+00:00",
//       prop: [Object],
//       string: "Jan 8, 1988 to Mar 17, 1997",
//     },
//     duration: "26 min per ep",
//     rating: "R - 17+ (violence & profanity)",
//     score: 9.03,
//     scored_by: 72590,
//     rank: 11,
//     popularity: 712,
//     members: 291272,
//     favorites: 15088,
//     synopsis:
//       "The 150-year-long stalemate between the two interstellar superpowers, the Galactic Empire and the Free Planets Alliance, comes to an end when a new generation of leaders arises: the idealistic military genius Reinhard von Lohengramm, and the FPA's reserved historian, Yang Wenli. While Reinhard climbs the ranks of the Empire with the aid of his childhood friend, Siegfried Kircheis, he must fight not only the war, but also the remnants of the crumbling Goldenbaum Dynasty in order to free his sister from the Kaiser and unify humanity under one genuine ruler. Meanwhile, on the other side of the galaxy, Yang—a strong supporter of democratic ideals—has to stand firm",
//     background:
//       "Legend of the Galactic Heroes was adapted from a series of ten novels, published 1982–87, by Yoshiki Tanaka. The novels won the Seiun Award for the best long-form Japanese science fiction in 1988. At the start of its production the anime was distributed through a subscription system in which episodes were mailed to existing fans of the novels. It was made in four separate tranches over nearly a decade, with the production of side-stories continuing for several further years. The main series",
//     season: null,
//     year: null,
//     broadcast: { day: null, time: null, timezone: null, string: null },
//     producers: [[Object], [Object], [Object], [Object], [Object]],
//     licensors: [[Object]],
//     studios: [[Object], [Object]],
//     genres: [[Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object]],
//     demographics: [],
//     stringGenres: ["sci-fi"],
//   },
//   {
//     mal_id: 42938,
//     url: "https://myanimelist.net/anime/42938/Fruits_Basket__The_Final",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "Ip8Btv2t_6c",
//       url: "https://www.youtube.com/watch?v=Ip8Btv2t_6c",
//       embed_url:
//         "https://www.youtube.com/embed/Ip8Btv2t_6c?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     title: "Fruits Basket: The Final",
//     title_english: "Fruits Basket: The Final Season",
//     title_japanese: "フルーツバスケット The Final",
//     title_synonyms: [
//       "Fruits Basket 3rd Season",
//       "Fruits Basket (2019) 3rd Season",
//       "Furuba",
//     ],
//     type: "TV",
//     source: "Manga",
//     episodes: 13,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2021-04-06T00:00:00+00:00",
//       to: "2021-06-29T00:00:00+00:00",
//       prop: [Object],
//       string: "Apr 6, 2021 to Jun 29, 2021",
//     },
//     duration: "23 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 9.02,
//     scored_by: 187432,
//     rank: 12,
//     popularity: 508,
//     members: 383270,
//     favorites: 17562,
//     synopsis:
//       "Hundreds of years ago, the Chinese Zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated",
//     background: null,
//     season: "spring",
//     year: 2021,
//     broadcast: {
//       day: "Tuesdays",
//       time: "01:30",
//       timezone: "Asia/Tokyo",
//       string: "Tuesdays at 01:30 (JST)",
//     },
//     producers: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     licensors: [[Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object]],
//     demographics: [[Object]],
//     stringGenres: ["action", "comedy"],
//   },
//   {
//     mal_id: 34096,
//     url: "https://myanimelist.net/anime/34096/Gintama",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "LOdAAEJiebM",
//       url: "https://www.youtube.com/watch?v=LOdAAEJiebM",
//       embed_url:
//         "https://www.youtube.com/embed/LOdAAEJiebM?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object]],
//     title: "Gintama.",
//     title_english: "Gintama Season 5",
//     title_japanese: "銀魂。",
//     title_synonyms: ["Gintama (2017)"],
//     type: "TV",
//     source: "Manga",
//     episodes: 12,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2017-01-09T00:00:00+00:00",
//       to: "2017-03-27T00:00:00+00:00",
//       prop: [Object],
//       string: "Jan 9, 2017 to Mar 27, 2017",
//     },
//     duration: "24 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.99,
//     scored_by: 131527,
//     rank: 13,
//     popularity: 744,
//     members: 281148,
//     favorites: 2566,
//     synopsis:
//       "After joining the resistance against the bakufu, Gintoki and the gang are in hiding, along with Katsura and his Joui rebels. The Yorozuya is soon approached by Nobume Imai and two members of the Kiheitai, who explain that the Harusame pirates have turned against 7th Division Captain Kamui and their former ally Takasugi. The Kiheitai present Gintoki with a job: find Takasugi, who has been missing since his ship was ambushed in a Harusame raid. Nobume also makes a stunning revelation regarding the Tendoushuu, a secret organization pulling the strings of numerous factions, and their leader Utsuro, the shadowy figure with an uncanny resemblance to Gintoki's former",
//     season: "winter",
//     year: 2017,
//     broadcast: {
//       day: "Mondays",
//       time: "01:35",
//       timezone: "Asia/Tokyo",
//       string: "Mondays at 01:35 (JST)",
//     },
//     producers: [[Object], [Object], [Object], [Object]],
//     licensors: [],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object], [Object]],
//     demographics: [[Object]],
//     stringGenres: ["romance"],
//   },
//   {
//     mal_id: 35180,
//     url: "https://myanimelist.net/anime/35180/3-gatsu_no_Lion_2nd_Season",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "OfSaJb5OOPA",
//       url: "https://www.youtube.com/watch?v=OfSaJb5OOPA",
//       embed_url:
//         "https://www.youtube.com/embed/OfSaJb5OOPA?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     title: "3-gatsu no Lion 2nd Season",
//     title_english: "March Comes In Like A Lion 2nd Season",
//     title_japanese: "3月のライオン 第2シリーズ",
//     title_synonyms: ["Sangatsu no Lion Second Season"],
//     type: "TV",
//     source: "Manga",
//     episodes: 22,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2017-10-14T00:00:00+00:00",
//       to: "2018-03-31T00:00:00+00:00",
//       prop: [Object],
//       string: "Oct 14, 2017 to Mar 31, 2018",
//     },
//     duration: "25 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.95,
//     scored_by: 182972,
//     rank: 14,
//     popularity: 537,
//     members: 365549,
//     favorites: 14513,
//     synopsis:
//       "Now in his second year of high school, Rei Kiriyama continues pushing through his struggles in the professional shogi world as well as his personal life. Surrounded by vibrant personalities at the shogi hall, the school club, and in the local community, his solitary shell slowly begins to crack. Among them are the three Kawamoto sisters—Akari, Hinata, and Momo—who forge an affectionate and familial bond with Rei. Through these ties, he realizes that everyone is burdened by their own emotional",
//     background: null,
//     season: "fall",
//     year: 2017,
//     broadcast: {
//       day: "Saturdays",
//       time: "23:00",
//       timezone: "Asia/Tokyo",
//       string: "Saturdays at 23:00 (JST)",
//     },
//     producers: [[Object], [Object], [Object], [Object], [Object], [Object]],
//     licensors: [[Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object]],
//     demographics: [[Object]],
//     stringGenres: ["test"],
//   },
//   {
//     mal_id: 28851,
//     url: "https://myanimelist.net/anime/28851/Koe_no_Katachi",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "XBNWo25izJ8",
//       url: "https://www.youtube.com/watch?v=XBNWo25izJ8",
//       embed_url:
//         "https://www.youtube.com/embed/XBNWo25izJ8?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     title: "Koe no Katachi",
//     title_english: "A Silent Voice",
//     title_japanese: "聲の形",
//     title_synonyms: ["The Shape of Voice"],
//     type: "Movie",
//     source: "Manga",
//     episodes: 1,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2016-09-17T00:00:00+00:00",
//       to: null,
//       prop: [Object],
//       string: "Sep 17, 2016",
//     },
//     duration: "2 hr 10 min",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.95,
//     scored_by: 1439704,
//     rank: 15,
//     popularity: 18,
//     members: 2060685,
//     favorites: 79498,
//     synopsis:
//       "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past. [Written by MAL Rewrite]",
//     background:
//       "Winner of the Excellence Award at the 20th Japan Media Arts Festival.",
//     season: null,
//     year: null,
//     broadcast: { day: null, time: null, timezone: null, string: null },
//     producers: [[Object], [Object], [Object], [Object], [Object]],
//     licensors: [[Object], [Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object]],
//     demographics: [[Object]],
//     stringGenres: ["action"],
//   },
//   {
//     mal_id: 4181,
//     url: "https://myanimelist.net/anime/4181/Clannad__After_Story",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "WiTwXIAcm5Q",
//       url: "https://www.youtube.com/watch?v=WiTwXIAcm5Q",
//       embed_url:
//         "https://www.youtube.com/embed/WiTwXIAcm5Q?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object], [Object], [Object]],
//     title: "Clannad: After Story",
//     title_english: "Clannad: After Story",
//     title_japanese: "CLANNAD〜AFTER STORY〜 クラナド アフターストーリー",
//     title_synonyms: [],
//     type: "TV",
//     source: "Visual novel",
//     episodes: 24,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2008-10-03T00:00:00+00:00",
//       to: "2009-03-27T00:00:00+00:00",
//       prop: [Object],
//       string: "Oct 3, 2008 to Mar 27, 2009",
//     },
//     duration: "24 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.94,
//     scored_by: 622244,
//     rank: 16,
//     popularity: 107,
//     members: 1109332,
//     favorites: 67558,
//     synopsis:
//       "Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. Together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic",
//     background: null,
//     season: "fall",
//     year: 2008,
//     broadcast: {
//       day: "Fridays",
//       time: "01:59",
//       timezone: "Asia/Tokyo",
//       string: "Fridays at 01:59 (JST)",
//     },
//     producers: [[Object], [Object], [Object], [Object]],
//     licensors: [[Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [],
//     demographics: [],
//     stringGenres: ["action", "drama"],
//   },
//   {
//     mal_id: 918,
//     url: "https://myanimelist.net/anime/918/Gintama",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: { youtube_id: null, url: null, embed_url: null, images: [Object] },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object], [Object], [Object]],
//     title: "Gintama",
//     title_english: "Gintama",
//     title_japanese: "銀魂",
//     title_synonyms: ["Gin Tama", "Silver Soul", "Yorinuki Gintama-san"],
//     type: "TV",
//     source: "Manga",
//     episodes: 201,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2006-04-04T00:00:00+00:00",
//       to: "2010-03-25T00:00:00+00:00",
//       prop: [Object],
//       string: "Apr 4, 2006 to Mar 25, 2010",
//     },
//     duration: "24 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.94,
//     scored_by: 367963,
//     rank: 17,
//     popularity: 137,
//     members: 974154,
//     favorites: 56007,
//     synopsis: `Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan's surrender to powerful aliens known as the "Amanto," those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. Enter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. Assisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people's heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world 
// of Edo. [Written by MAL Rewrite]`,
//     background:
//       "Several games based on Gintama have been released on a variety of platforms, such as the PlayStation 2, PlayStation Portable, and Nintendo DS. Characters",
//     season: "spring",
//     year: 2006,
//     broadcast: {
//       day: "Thursdays",
//       time: "18:00",
//       timezone: "Asia/Tokyo",
//       string: "Thursdays at 18:00 (JST)",
//     },
//     producers: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     licensors: [[Object], [Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object], [Object]],
//     demographics: [[Object]],
//     stringGenres: ["action"],
//   },
//   {
//     mal_id: 37987,
//     url: "https://myanimelist.net/anime/37987/Violet_Evergarden_Movie",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "NSIzsFOfd8M",
//       url: "https://www.youtube.com/watch?v=NSIzsFOfd8M",
//       embed_url:
//         "https://www.youtube.com/embed/NSIzsFOfd8M?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object], [Object], [Object]],
//     title: "Violet Evergarden Movie",
//     title_english: "Violet Evergarden the Movie",
//     title_japanese: "劇場版 ヴァイオレット・エヴァーガーデン",
//     title_synonyms: ["Gekijouban Violet Evergarden"],
//     type: "Movie",
//     source: "Light novel",
//     episodes: 1,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2020-09-18T00:00:00+00:00",
//       to: null,
//       prop: [Object],
//       string: "Sep 18, 2020",
//     },
//     duration: "2 hr 20 min",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.93,
//     scored_by: 205091,
//     rank: 18,
//     popularity: 392,
//     members: 485340,
//     favorites: 7441,
//     synopsis:
//       'Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for "Auto Memory Dolls." Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear. Violet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, "I love you," may still be alive even after the many years that have passed. [Written by MAL Rewrite]',
//     background:
//       "Winner of the Excellence Award at the 24th Japan Media Arts Festival. It also won the Animation of the Year award in the Film category at the Tokyo Anime",
//     season: null,
//     year: null,
//     broadcast: { day: null, time: null, timezone: null, string: null },
//     producers: [[Object]],
//     licensors: [[Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [],
//     demographics: [],
//     stringGenres: ["comedy"],
//   },
//   {
//     mal_id: 15335,
//     url: "https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "UhJM5rVqaF8",
//       url: "https://www.youtube.com/watch?v=UhJM5rVqaF8",
//       embed_url:
//         "https://www.youtube.com/embed/UhJM5rVqaF8?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object], [Object]],
//     title: "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
//     title_english: null,
//     title_japanese: "劇場版 銀魂 完結篇 万事屋よ永遠なれ",
//     title_synonyms: [
//       "Gintama: The Final Chapter - Be Forever Yorozuya",
//       "Gintama Movie 2",
//     ],
//     type: "Movie",
//     source: "Manga",
//     episodes: 1,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2013-07-06T00:00:00+00:00",
//       to: null,
//       prop: [Object],
//       string: "Jul 6, 2013",
//     },
//     duration: "1 hr 50 min",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.92,
//     scored_by: 124909,
//     rank: 19,
//     popularity: 943,
//     members: 218475,
//     favorites: 2037,
//     synopsis: `When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the "White Plague" has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal. Setting out in the disguise given 
// to him by the android time machine, Gintoki haphazardly reunites the Yorozuya team to investigate the White Plague, and soon discovers that the key to saving the future lies in the darkness of his own past. Determined to confront a powerful foe, he makes an important discovery—with a ragtag band of friends and allies at his side, he doesn't have to fight alone. [Written by MAL Rewrite]`,
//     background: null,
//     season: null,
//     year: null,
//     broadcast: { day: null, time: null, timezone: null, string: null },
//     producers: [[Object], [Object], [Object], [Object], [Object], [Object]],
//     licensors: [],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object], [Object], [Object]],
//     demographics: [[Object]],
//     stringGenres: ["sci-fi"],
//   },
//   {
//     mal_id: 44511,
//     url: "https://myanimelist.net/anime/44511/Chainsaw_Man",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "q15CRdE5Bv0",
//       url: "https://www.youtube.com/watch?v=q15CRdE5Bv0",
//       embed_url:
//         "https://www.youtube.com/embed/q15CRdE5Bv0?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object]],
//     title: "Chainsaw Man",
//     title_english: "Chainsaw Man",
//     title_japanese: "チェンソーマン",
//     title_synonyms: [],
//     type: "TV",
//     source: "Manga",
//     episodes: 12,
//     status: "Currently Airing",
//     airing: true,
//     aired: {
//       from: "2022-10-12T00:00:00+00:00",
//       to: null,
//       prop: [Object],
//       string: "Oct 12, 2022 to ?",
//     },
//     duration: "24 min per ep",
//     rating: "R - 17+ (violence & profanity)",
//     score: 8.91,
//     scored_by: 119799,
//     rank: 20,
//     popularity: 200,
//     members: 771772,
//     favorites: 22826,
//     synopsis:
//       "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and'",
//     season: "fall",
//     year: 2022,
//     broadcast: {
//       day: "Wednesdays",
//       time: "00:00",
//       timezone: "Asia/Tokyo",
//       string: "Wednesdays at 00:00 (JST)",
//     },
//     producers: [],
//     licensors: [],
//     studios: [[Object]],
//     genres: [[Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object]],
//     demographics: [[Object]],
//     stringGenres: ["fantasy"],
//   },
//   {
//     mal_id: 2904,
//     url: "https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: { youtube_id: null, url: null, embed_url: null, images: [Object] },
//     approved: true,
//     titles: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     title: "Code Geass: Hangyaku no Lelouch R2",
//     title_english: "Code Geass: Lelouch of the Rebellion R2",
//     title_japanese: "コードギアス 反逆のルルーシュ 続編",
//     title_synonyms: [
//       "Code Geass: Hangyaku no Lelouch 2nd Season",
//       "Code Geass: Hangyaku no Lelouch Second Season",
//     ],
//     type: "TV",
//     source: "Original",
//     episodes: 25,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2008-04-06T00:00:00+00:00",
//       to: "2008-09-28T00:00:00+00:00",
//       prop: [Object],
//       string: "Apr 6, 2008 to Sep 28, 2008",
//     },
//     duration: "24 min per ep",
//     rating: "R - 17+ (violence & profanity)",
//     score: 8.91,
//     scored_by: 1102563,
//     rank: 21,
//     popularity: 46,
//     members: 1624369,
//     favorites: 72587,
//     synopsis:
//       "One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. At a loss without their revolutionary leader, Area 11's resistance group—the Black Knights—find themselves too powerless to combat the brutality inflicted upon the Elevens by Britannia, which has increased significantly in order to crush any hope of a future revolt. Lelouch Lamperouge, having lost all memory of his double life, is living peacefully alongside his friends as a high school student at Ashford Academy. His former partner C.C., unable to accept this turn of events, takes it upon herself to remind him of his past purpose, hoping that the mastermind Zero will rise once again to finish what he started, in this thrilling conclusion to the series. [Written by MAL Rewrite]",
//     background: `Code Geass: Hangyaku no Lelouch R2 is an original anime series by Sunrise animation studio with original character designs by the all-female Japanese manga artist group CLAMP. Manga and light novels based off the show have been published by Kadokawa Shoten. The show has sold millions of DVDs and Blu-ray volumes and is extremely popular in both Japan and North America. The show is known for its multi-genre appeal and for its diverse cast of characters who face many moral dilemmas over the course of the series. The series won: "The Best TV Animation" award at the thirteenth Animation Kobe event in 2008, and "The Most Popular Anime" award at the Animage 's 30th 
// Annual Anime Grand Prix.`,
//     season: "spring",
//     year: 2008,
//     broadcast: {
//       day: "Sundays",
//       time: "17:00",
//       timezone: "Asia/Tokyo",
//       string: "Sundays at 17:00 (JST)",
//     },
//     producers: [[Object], [Object], [Object], [Object], [Object]],
//     licensors: [[Object], [Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object]],
//     demographics: [],
//     stringGenres: ["action", "drama"],
//   },
//   {
//     mal_id: 35247,
//     url: "https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "7WdyIcDlK2o",
//       url: "https://www.youtube.com/watch?v=7WdyIcDlK2o",
//       embed_url:
//         "https://www.youtube.com/embed/7WdyIcDlK2o?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object], [Object]],
//     title: "Owarimonogatari 2nd Season",
//     title_english: "Owarimonogatari Second Season",
//     title_japanese: "終物語",
//     title_synonyms: ["End Story 2nd Season"],
//     type: "TV",
//     source: "Light novel",
//     episodes: 7,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2017-08-12T00:00:00+00:00",
//       to: "2017-08-13T00:00:00+00:00",
//       prop: [Object],
//       string: "Aug 12, 2017 to Aug 13, 2017",
//     },
//     duration: "22 min per ep",
//     rating: "R - 17+ (violence & profanity)",
//     score: 8.89,
//     scored_by: 175382,
//     rank: 22,
//     popularity: 545,
//     members: 362521,
//     favorites: 8242,
//     synopsis:
//       "Following an encounter with oddity specialist Izuko Gaen, third-year high school student Koyomi Araragi wakes up in a strange, deserted void only to be greeted by a joyfully familiar face in an alarmingly unfamiliar place. Araragi, with the help of his girlfriend Hitagi Senjougahara, maneuvers through the webs of his past and the perplexities of the present in search of answers. However, fate once again delivers him to the eccentric transfer student Ougi Oshino, who brings forth an unexpected",
//     background:
//       "Owarimonogatari 2nd Season adapts the fifth volume of NisiOisiN's Monogatari Series: Final Season.",
//     season: "summer",
//     year: 2017,
//     broadcast: {
//       day: null,
//       time: null,
//       timezone: null,
//       string: "Not scheduled once per week",
//     },
//     producers: [[Object], [Object]],
//     licensors: [[Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object]],
//     demographics: [],
//     stringGenres: ["drama"],
//   },
//   {
//     mal_id: 37491,
//     url: "https://myanimelist.net/anime/37491/Gintama__Shirogane_no_Tamashii-hen_-_Kouhan-sen",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "E2rzD37MCSg",
//       url: "https://www.youtube.com/watch?v=E2rzD37MCSg",
//       embed_url:
//         "https://www.youtube.com/embed/E2rzD37MCSg?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object]],
//     title: "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
//     title_english: "Gintama.: Silver Soul Arc - Second Half War",
//     title_japanese: "銀魂. 銀ノ魂篇 後半戦",
//     title_synonyms: ["Gintama.: Silver Soul Arc 2"],
//     type: "TV",
//     source: "Manga",
//     episodes: 14,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2018-07-09T00:00:00+00:00",
//       to: "2018-10-08T00:00:00+00:00",
//       prop: [Object],
//       string: "Jul 9, 2018 to Oct 8, 2018",
//     },
//     duration: "24 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.88,
//     scored_by: 84074,
//     rank: 23,
//     popularity: 1185,
//     members: 173368,
//     favorites: 986,
//     synopsis:
//       "Following the temporary retreat of the Altana Liberation Army from the Kabuki District, the state of the war has seemingly improved. However, as the Oniwaban, Shinsengumi, and residents of the district combat the army's remnants, Edo's greatest inventor Gengai Hiraga is abducted. Responsible for causing the enemy's withdrawal by rendering their weapons useless, Gengai's nanomachine virus is now at risk of being shut down. Meanwhile, a laser capable of obliterating a planet is activated in Earth's orbit on the Liberation Army's mother ship. Another battle ensues when Shinsuke Takasugi and the rest of the Kiheitai arrive on the vessel to stop the weapon from firing. Forced to fight a war on two fronts, the Yorozuya and their allies must prevail on both sides to save Edo and the rest of the world. [Written by MAL Rewrite]",
//     background:
//       "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen is the second season of Gintama's final arc and the eighth season of Gintama's continuity. In the episode continuity, this corresponds to episodes 354-367 of Gintama. The anime was released on Blu-ray and DVD from October 24, 2018 to February 27, 2019 in Japan.",
//     season: "summer",
//     year: 2018,
//     broadcast: {
//       day: "Mondays",
//       time: "01:35",
//       timezone: "Asia/Tokyo",
//       string: "Mondays at 01:35 (JST)",
//     },
//     producers: [[Object], [Object], [Object], [Object]],
//     licensors: [],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object], [Object], [Object]],
//     demographics: [[Object]],
//     stringGenres: ["family"],
//   },
//   {
//     mal_id: 32281,
//     url: "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: {
//       youtube_id: "3KR8_igDs1Y",
//       url: "https://www.youtube.com/watch?v=3KR8_igDs1Y",
//       embed_url:
//         "https://www.youtube.com/embed/3KR8_igDs1Y?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: [Object],
//     },
//     approved: true,
//     titles: [[Object], [Object], [Object], [Object], [Object], [Object]],
//     title: "Kimi no Na wa.",
//     title_english: "Your Name.",
//     title_japanese: "君の名は。",
//     title_synonyms: [],
//     type: "Movie",
//     source: "Original",
//     episodes: 1,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2016-08-26T00:00:00+00:00",
//       to: null,
//       prop: [Object],
//       string: "Aug 26, 2016",
//     },
//     duration: "1 hr 46 min",
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.86,
//     scored_by: 1718518,
//     rank: 24,
//     popularity: 11,
//     members: 2455219,
//     favorites: 84064,
//     synopsis:
//       "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture. One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another. Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance. [Written by MAL Rewrite]",
//     background:
//       "Kimi no Na wa. won the LAFCA Animation Award in 2016 and the Best Animated Film in 2017 by Mainichi Film Awards. It also won the Grand Prize Award on the",
//     season: null,
//     year: null,
//     broadcast: { day: null, time: null, timezone: null, string: null },
//     producers: [[Object], [Object], [Object], [Object], [Object], [Object]],
//     licensors: [[Object], [Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object]],
//     demographics: [],
//     stringGenres: ["action"],
//   },
//   {
//     mal_id: 19,
//     url: "https://myanimelist.net/anime/19/Monster",
//     images: { jpg: [Object], webp: [Object] },
//     trailer: { youtube_id: null, url: null, embed_url: null, images: [Object] },
//     approved: true,
//     titles: [[Object], [Object], [Object]],
//     title: "Monster",
//     title_english: "Monster",
//     title_japanese: "モンスター",
//     title_synonyms: [],
//     type: "TV",
//     source: "Manga",
//     episodes: 74,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2004-04-07T00:00:00+00:00",
//       to: "2005-09-28T00:00:00+00:00",
//       prop: [Object],
//       string: "Apr 7, 2004 to Sep 28, 2005",
//     },
//     duration: "24 min per ep",
//     rating: "R+ - Mild Nudity",
//     score: 8.85,
//     scored_by: 327135,
//     rank: 25,
//     popularity: 150,
//     members: 911028,
//     favorites: 41911,
//     synopsis:
//       "Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience. So when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. With no evidence to convict him, he is released and goes on to attain the position of hospital director. Nine years later when Dr. Tenma saves the life of a criminal, his past comes back to haunt him—once again, he comes face to face with the monster he operated on. He must now embark on a quest of pursuit to make amends for the havoc spread by the one he saved. [Written by MAL Rewrite]",
//     background: null,
//     season: "spring",
//     year: 2004,
//     broadcast: {
//       day: "Wednesdays",
//       time: "00:40",
//       timezone: "Asia/Tokyo",
//       string: "Wednesdays at 00:40 (JST)",
//     },
//     producers: [[Object], [Object], [Object]],
//     licensors: [[Object]],
//     studios: [[Object]],
//     genres: [[Object], [Object], [Object]],
//     explicit_genres: [],
//     themes: [[Object], [Object]],
//     demographics: [[Object]],
//     stringGenres: ["action"],
//   },
// ];
// // 1)While chaining array methods, print the name of each movie that has a score above 8.0
// data.forEach(anime => {
//   if (anime.score >= 8) {
//     console.log(anime.title);
//   }
// });

// // 2) While chaining array methods, print the name of each anime that "includes" the stringGenre action
// data.forEach(anime => {
//   if (anime.stringGenres.includes("action")) {
//     console.log(`Anime Name: ${anime.title}`);
//   }
// });

//----------------------------------------------------------------------------------------------------------

// const pokemons = [
//   {
//     id: 344,
//     name: {
//       english: "Claydol",
//       japanese: "ネンドール",
//       chinese: "念力土偶",
//       french: "Kaorine",
//     },
//     type: ["Ground", "Psychic"],
//     base: {
//       HP: 60,
//       Attack: 70,
//       Defense: 105,
//       "Sp. Attack": 70,
//       "Sp. Defense": 120,
//       Speed: 75,
//     },
//   },
//   {
//     id: 345,
//     name: {
//       english: "Lileep",
//       japanese: "リリーラ",
//       chinese: "触手百合",
//       french: "Lilia",
//     },
//     type: ["Rock", "Grass"],
//     base: {
//       HP: 66,
//       Attack: 41,
//       Defense: 77,
//       "Sp. Attack": 61,
//       "Sp. Defense": 87,
//       Speed: 23,
//     },
//   },
//   {
//     id: 346,
//     name: {
//       english: "Cradily",
//       japanese: "ユレイドル",
//       chinese: "摇篮百合",
//       french: "Vacilys",
//     },
//     type: ["Rock", "Grass"],
//     base: {
//       HP: 86,
//       Attack: 81,
//       Defense: 97,
//       "Sp. Attack": 81,
//       "Sp. Defense": 107,
//       Speed: 43,
//     },
//   },
//   {
//     id: 347,
//     name: {
//       english: "Anorith",
//       japanese: "アノプス",
//       chinese: "太古羽虫",
//       french: "Anorith",
//     },
//     type: ["Rock", "Bug"],
//     base: {
//       HP: 45,
//       Attack: 95,
//       Defense: 50,
//       "Sp. Attack": 40,
//       "Sp. Defense": 50,
//       Speed: 75,
//     },
//   },
//   {
//     id: 348,
//     name: {
//       english: "Armaldo",
//       japanese: "アーマルド",
//       chinese: "太古盔甲",
//       french: "Armaldo",
//     },
//     type: ["Rock", "Bug"],
//     base: {
//       HP: 75,
//       Attack: 125,
//       Defense: 100,
//       "Sp. Attack": 70,
//       "Sp. Defense": 80,
//       Speed: 45,
//     },
//   },
//   {
//     id: 349,
//     name: {
//       english: "Feebas",
//       japanese: "ヒンバス",
//       chinese: "丑丑鱼",
//       french: "Barpau",
//     },
//     type: ["Water"],
//     base: {
//       HP: 20,
//       Attack: 15,
//       Defense: 20,
//       "Sp. Attack": 10,
//       "Sp. Defense": 55,
//       Speed: 80,
//     },
//   },
//   {
//     id: 350,
//     name: {
//       english: "Milotic",
//       japanese: "ミロカロス",
//       chinese: "美纳斯",
//       french: "Milobellus",
//     },
//     type: ["Water"],
//     base: {
//       HP: 95,
//       Attack: 60,
//       Defense: 79,
//       "Sp. Attack": 100,
//       "Sp. Defense": 125,
//       Speed: 81,
//     },
//   },
//   {
//     id: 351,
//     name: {
//       english: "Castform",
//       japanese: "ポワルン",
//       chinese: "飘浮泡泡",
//       french: "Morphéo",
//     },
//     type: ["Normal"],
//     base: {
//       HP: 70,
//       Attack: 70,
//       Defense: 70,
//       "Sp. Attack": 70,
//       "Sp. Defense": 70,
//       Speed: 70,
//     },
//   },
//   {
//     id: 352,
//     name: {
//       english: "Kecleon",
//       japanese: "カクレオン",
//       chinese: "变隐龙",
//       french: "Kecleon",
//     },
//     type: ["Normal"],
//     base: {
//       HP: 60,
//       Attack: 90,
//       Defense: 70,
//       "Sp. Attack": 60,
//       "Sp. Defense": 120,
//       Speed: 40,
//     },
//   },
//   {
//     id: 353,
//     name: {
//       english: "Shuppet",
//       japanese: "カゲボウズ",
//       chinese: "怨影娃娃",
//       french: "Polichombr",
//     },
//     type: ["Ghost"],
//     base: {
//       HP: 44,
//       Attack: 75,
//       Defense: 35,
//       "Sp. Attack": 63,
//       "Sp. Defense": 33,
//       Speed: 45,
//     },
//   },
//   {
//     id: 354,
//     name: {
//       english: "Banette",
//       japanese: "ジュペッタ",
//       chinese: "诅咒娃娃",
//       french: "Branette",
//     },
//     type: ["Ghost"],
//     base: {
//       HP: 64,
//       Attack: 115,
//       Defense: 65,
//       "Sp. Attack": 83,
//       "Sp. Defense": 63,
//       Speed: 65,
//     },
//   },
//   {
//     id: 355,
//     name: {
//       english: "Duskull",
//       japanese: "ヨマワル",
//       chinese: "夜巡灵",
//       french: "Skelénox",
//     },
//     type: ["Ghost"],
//     base: {
//       HP: 20,
//       Attack: 40,
//       Defense: 90,
//       "Sp. Attack": 30,
//       "Sp. Defense": 90,
//       Speed: 25,
//     },
//   },
//   {
//     id: 356,
//     name: {
//       english: "Dusclops",
//       japanese: "サマヨール",
//       chinese: "彷徨夜灵",
//       french: "Téraclope",
//     },
//     type: ["Ghost"],
//     base: {
//       HP: 40,
//       Attack: 70,
//       Defense: 130,
//       "Sp. Attack": 60,
//       "Sp. Defense": 130,
//       Speed: 25,
//     },
//   },
//   {
//     id: 357,
//     name: {
//       english: "Tropius",
//       japanese: "トロピウス",
//       chinese: "热带龙",
//       french: "Tropius",
//     },
//     type: ["Grass", "Flying"],
//     base: {
//       HP: 99,
//       Attack: 68,
//       Defense: 83,
//       "Sp. Attack": 72,
//       "Sp. Defense": 87,
//       Speed: 51,
//     },
//   },
//   {
//     id: 358,
//     name: {
//       english: "Chimecho",
//       japanese: "チリーン",
//       chinese: "风铃铃",
//       french: "Éoko",
//     },
//     type: ["Psychic"],
//     base: {
//       HP: 75,
//       Attack: 50,
//       Defense: 80,
//       "Sp. Attack": 95,
//       "Sp. Defense": 90,
//       Speed: 65,
//     },
//   },
//   {
//     id: 359,
//     name: {
//       english: "Absol",
//       japanese: "アブソル",
//       chinese: "阿勃梭鲁",
//       french: "Absol",
//     },
//     type: ["Dark"],
//     base: {
//       HP: 65,
//       Attack: 130,
//       Defense: 60,
//       "Sp. Attack": 75,
//       "Sp. Defense": 60,
//       Speed: 75,
//     },
//   },
//   {
//     id: 360,
//     name: {
//       english: "Wynaut",
//       japanese: "ソーナノ",
//       chinese: "小果然",
//       french: "Okéoké",
//     },
//     type: ["Psychic"],
//     base: {
//       HP: 95,
//       Attack: 23,
//       Defense: 48,
//       "Sp. Attack": 23,
//       "Sp. Defense": 48,
//       Speed: 23,
//     },
//   },
//   {
//     id: 361,
//     name: {
//       english: "Snorunt",
//       japanese: "ユキワラシ",
//       chinese: "雪童子",
//       french: "Stalgamin",
//     },
//     type: ["Ice"],
//     base: {
//       HP: 50,
//       Attack: 50,
//       Defense: 50,
//       "Sp. Attack": 50,
//       "Sp. Defense": 50,
//       Speed: 50,
//     },
//   },
// ];

// // 1) While chaining array methods, print the name of each pokemon with a base HP stat 75 or higher
// pokemons.forEach(pokemon => {
//    if (pokemon.base.HP >= 75) {
//      console.log(pokemon.name.english);
//    }
// });

// // 2) While Chaining Array methods print the name of each pokemon who's type includes Rock
// pokemons.forEach(pokemon => {
//   if (pokemon.type.includes("Rock")) {
//     console.log(pokemon.name.english);
//   }
// });

//--------------------------------------------------------------------------------------------------

// const data = {
//   page: 1,
//   results: [
//     {
//       adult: false,
//       backdrop_path: "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
//       genre_ids: [27, 53],
//       id: 663712,
//       original_language: "en",
//       original_title: "Terrifier 2",
//       overview:
//         "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
//       popularity: 7117.087,
//       poster_path: "/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
//       release_date: "2022-10-06",
//       title: "Terrifier 2",
//       video: false,
//       vote_average: 7.2,
//       vote_count: 305,
//     },
//     {
//       adult: false,
//       backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
//       genre_ids: [28, 14, 878],
//       id: 436270,
//       original_language: "en",
//       original_title: "Black Adam",
//       overview:
//         "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
//       popularity: 4311.924,
//       poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
//       release_date: "2022-10-19",
//       title: "Black Adam",
//       video: false,
//       vote_average: 7,
//       vote_count: 742,
//     },
//     {
//       adult: false,
//       backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
//       genre_ids: [27, 53, 9648],
//       id: 717728,
//       original_language: "en",
//       original_title: "Jeepers Creepers: Reborn",
//       overview:
//         "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
//       popularity: 2320.615,
//       poster_path: "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
//       release_date: "2022-09-15",
//       title: "Jeepers Creepers: Reborn",
//       video: false,
//       vote_average: 5.8,
//       vote_count: 404,
//     },
//     {
//       adult: false,
//       backdrop_path: "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
//       genre_ids: [27, 53],
//       id: 760161,
//       original_language: "en",
//       original_title: "Orphan: First Kill",
//       overview:
//         "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
//       popularity: 1964.552,
//       poster_path: "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
//       release_date: "2022-07-27",
//       title: "Orphan: First Kill",
//       video: false,
//       vote_average: 6.8,
//       vote_count: 1195,
//     },
//     {
//       adult: false,
//       backdrop_path: "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
//       genre_ids: [28, 12, 14],
//       id: 960704,
//       original_language: "ja",
//       original_title: "鋼の錬金術師 完結編 最後の錬成",
//       overview:
//         "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
//       popularity: 1965.426,
//       poster_path: "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
//       release_date: "2022-06-24",
//       title: "Fullmetal Alchemist: The Final Alchemy",
//       video: false,
//       vote_average: 6.3,
//       vote_count: 109,
//     },
//     {
//       adult: false,
//       backdrop_path: "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg",
//       genre_ids: [27, 53],
//       id: 616820,
//       original_language: "en",
//       original_title: "Halloween Ends",
//       overview:
//         "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
//       popularity: 2089.938,
//       poster_path: "/kFMntvUmKhvw1uAHXecqqNSFXt.jpg",
//       release_date: "2022-10-12",
//       title: "Halloween Ends",
//       video: false,
//       vote_average: 6.6,
//       vote_count: 805,
//     },
//     {
//       adult: false,
//       backdrop_path: "/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg",
//       genre_ids: [878],
//       id: 575322,
//       original_language: "en",
//       original_title: "Звёздный разум",
//       overview:
//         "After depleting Earth's resources for centuries, humankind's survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.",
//       popularity: 1918.428,
//       poster_path: "/rFljUdOozFEv6HDHIFpFvcYW0ec.jpg",
//       release_date: "2022-01-06",
//       title: "Project Gemini",
//       video: false,
//       vote_average: 5.6,
//       vote_count: 144,
//     },
//     {
//       adult: false,
//       backdrop_path: "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
//       genre_ids: [14, 35, 10751],
//       id: 642885,
//       original_language: "en",
//       original_title: "Hocus Pocus 2",
//       overview:
//         "29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it's up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
//       popularity: 2042.248,
//       poster_path: "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
//       release_date: "2022-09-27",
//       title: "Hocus Pocus 2",
//       video: false,
//       vote_average: 7.6,
//       vote_count: 985,
//     },
//     {
//       adult: false,
//       backdrop_path: "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg",
//       genre_ids: [27, 53],
//       id: 420634,
//       original_language: "en",
//       original_title: "Terrifier",
//       overview:
//         "On Halloween night, a young woman finds herself as the obsession of a sadistic murderer known as Art the Clown.",
//       popularity: 2137.76,
//       poster_path: "/nfRlQCl590F30L37aihuqBGBvaO.jpg",
//       release_date: "2016-10-15",
//       title: "Terrifier",
//       video: false,
//       vote_average: 6.5,
//       vote_count: 796,
//     },
//     {
//       adult: false,
//       backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
//       genre_ids: [10751, 16, 14, 10402, 35, 12],
//       id: 354912,
//       original_language: "en",
//       original_title: "Coco",
//       overview:
//         "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
//       popularity: 2732.01,
//       poster_path: "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
//       release_date: "2017-10-27",
//       title: "Coco",
//       video: false,
//       vote_average: 8.2,
//       vote_count: 16362,
//     },
//     {
//       adult: false,
//       backdrop_path: "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
//       genre_ids: [53],
//       id: 985939,
//       original_language: "en",
//       original_title: "Fall",
//       overview:
//         "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
//       popularity: 1957.029,
//       poster_path: "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
//       release_date: "2022-08-11",
//       title: "Fall",
//       video: false,
//       vote_average: 7.3,
//       vote_count: 1609,
//     },
//     {
//       adult: false,
//       backdrop_path: "/mMA2YNddowV8MZtxpbn0a7Yilum.jpg",
//       genre_ids: [10752, 36, 28, 18],
//       id: 928123,
//       original_language: "zh",
//       original_title: "长津湖之水门桥",
//       overview:
//         "In the follow-up to \"The Battle At Lake Changjin\", brothers Wu Qianli and Wu Wanli undertake a new task for the People's Volunteer Army, defending a bridge part of the American troops' escape route from the advancing Chinese.",
//       popularity: 1673.071,
//       poster_path: "/ugiL6wIhl1OfPyv1gqLkTe45jLl.jpg",
//       release_date: "2022-02-01",
//       title: "The Battle at Lake Changjin: Water Gate Bridge",
//       video: false,
//       vote_average: 6.4,
//       vote_count: 23,
//     },
//     {
//       adult: false,
//       backdrop_path: "/2iGUavwv86Hubv3V5Iq4qEQXDfE.jpg",
//       genre_ids: [18, 53, 27],
//       id: 848058,
//       original_language: "es",
//       original_title: "Cerdita",
//       overview:
//         "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
//       popularity: 1626.103,
//       poster_path: "/8EIQAvJjXdbNDMmBtHtgGqbc09V.jpg",
//       release_date: "2022-10-07",
//       title: "Piggy",
//       video: false,
//       vote_average: 6.8,
//       vote_count: 148,
//     },
//     {
//       adult: false,
//       backdrop_path: "/pGx6O6IwqADOsgmqWzPysmWnOyr.jpg",
//       genre_ids: [28, 14],
//       id: 732459,
//       original_language: "en",
//       original_title: "Blade of the 47 Ronin",
//       overview:
//         'In this sequel to "47 Ronin," a new class of warriors emerges among the Samurai clans to keep a sought-after sword from falling into the wrong hands.',
//       popularity: 1711.836,
//       poster_path: "/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg",
//       release_date: "2022-10-25",
//       title: "Blade of the 47 Ronin",
//       video: false,
//       vote_average: 7.2,
//       vote_count: 29,
//     },
//     {
//       adult: false,
//       backdrop_path: "/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg",
//       genre_ids: [28, 35, 53],
//       id: 718930,
//       original_language: "en",
//       original_title: "Bullet Train",
//       overview:
//         "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//       popularity: 1694.28,
//       poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
//       release_date: "2022-07-03",
//       title: "Bullet Train",
//       video: false,
//       vote_average: 7.5,
//       vote_count: 2117,
//     },
//     {
//       adult: false,
//       backdrop_path: "/60UN7vvcWWggLe0Uz9EFZJx718P.jpg",
//       genre_ids: [53],
//       id: 879538,
//       original_language: "en",
//       original_title: "Crawlspace",
//       overview:
//         "After witnessing a brutal murder in a cabin, a man hides in a crawlspace while the killers scour the property for a hidden fortune. As they draw nearer, he must decide if the crawlspace will be his tomb or the battleground in his fight for survival.",
//       popularity: 1534.744,
//       poster_path: "/qEu6qI5sVoIe10gD1BQBqxcNIW2.jpg",
//       release_date: "2022-03-31",
//       title: "Crawlspace",
//       video: false,
//       vote_average: 7.1,
//       vote_count: 61,
//     },
//     {
//       adult: false,
//       backdrop_path: "/ttkibtcAjoilW1PbTIFy9U9YOdB.jpg",
//       genre_ids: [53, 28],
//       id: 916719,
//       original_language: "en",
//       original_title: "Code Name Banshee",
//       overview:
//         "Caleb, a former government assassin in hiding, who resurfaces when his protégé, the equally deadly killer known as Banshee, discovers a bounty has been placed on Caleb's head.",
//       popularity: 1503.797,
//       poster_path: "/g29dShv0wHJUvif2KPq039imds5.jpg",
//       release_date: "2022-07-01",
//       title: "Code Name Banshee",
//       video: false,
//       vote_average: 4.8,
//       vote_count: 38,
//     },
//     {
//       adult: false,
//       backdrop_path: "/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
//       genre_ids: [53, 9648],
//       id: 916605,
//       original_language: "en",
//       original_title: "The Infernal Machine",
//       overview:
//         "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
//       popularity: 1348.306,
//       poster_path: "/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
//       release_date: "2022-09-23",
//       title: "The Infernal Machine",
//       video: false,
//       vote_average: 6.9,
//       vote_count: 112,
//     },
//     {
//       adult: false,
//       backdrop_path: "/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg",
//       genre_ids: [14, 28, 18],
//       id: 779782,
//       original_language: "en",
//       original_title: "The School for Good and Evil",
//       overview:
//         "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
//       popularity: 1506.508,
//       poster_path: "/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
//       release_date: "2022-10-19",
//       title: "The School for Good and Evil",
//       video: false,
//       vote_average: 7.3,
//       vote_count: 431,
//     },
//     {
//       adult: false,
//       backdrop_path: "/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg",
//       genre_ids: [878, 12, 28],
//       id: 791155,
//       original_language: "en",
//       original_title: "Secret Headquarters",
//       overview:
//         "While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.",
//       popularity: 1373.174,
//       poster_path: "/8PsHogUfvjWPGdWAI5uslDhHDx7.jpg",
//       release_date: "2022-08-12",
//       title: "Secret Headquarters",
//       video: false,
//       vote_average: 6.9,
//       vote_count: 140,
//     },
//   ],
//   total_pages: 35720,
//   total_results: 714388,
// };

// 1) While chaining array methods, print the name of each movie that has a vote_average above 7.5
// data.results.forEach(vote => {
//   if (vote.vote_average > 7.5) {
//     console.log(vote.title);
//   }
// });

// // 2) While chaining array methods, print the name of each movie that has a genre id that includes 878
// data.results.forEach(id => {
//   if (id.genre_ids.includes(878)) {
//     console.log(id.title);
//   }
// });

//------------------------------------------------------------------------------------------------------

// let data = [
//   {
//     uuid: "dade69b4-4f5a-8528-247b-219e5a1facd6",
//     displayName: "Fade",
//     description:
//       "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
//     developerName: "BountyHunter",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/background.png",
//     backgroundGradientColors: ["b1414cff", "5589bdff", "18344cff", "66376cff"],
//     assetPath:
//       "ShooterGame/Content/Characters/BountyHunter/BountyHunter_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
//       displayName: "Initiator",
//       description:
//         "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Seize",
//         description:
//           "EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Haunt",
//         description:
//           "EQUIP a haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Prowler",
//         description:
//           "EQUIP a prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and nearsight the enemy on impact.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Nightfall",
//         description:
//           "EQUIP the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are marked by terror trails, deafened, and decayed.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.578,
//       maxDuration: 2.578,
//       mediaList: [
//         {
//           id: 963067082,
//           wwise: "https://media.valorant-api.com/sounds/963067082.wem",
//           wave: "https://media.valorant-api.com/sounds/963067082.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "5f8d3a7f-467b-97f3-062c-13acf203c006",
//     displayName: "Breach",
//     description:
//       "The bionic Swede Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
//     developerName: "Breach",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/background.png",
//     backgroundGradientColors: ["ff9c33ff", "b04621ff", "523a23ff", "44412eff"],
//     assetPath: "ShooterGame/Content/Characters/Breach/Breach_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
//       displayName: "Initiator",
//       description:
//         "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Flashpoint",
//         description:
//           "EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Fault Line",
//         description:
//           "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Aftershock",
//         description:
//           "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Rolling Thunder",
//         description:
//           "EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.456469,
//       maxDuration: 2.456469,
//       mediaList: [
//         {
//           id: 802792402,
//           wwise: "https://media.valorant-api.com/sounds/802792402.wem",
//           wave: "https://media.valorant-api.com/sounds/802792402.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "f94c3b30-42be-e959-889c-5aa313dba261",
//     displayName: "Raze",
//     description:
//       'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of "boom".',
//     developerName: "Clay",
//     characterTags: ["Area Damage Specialist"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/background.png",
//     backgroundGradientColors: ["feac45ff", "d64f35ff", "2c5942ff", "2b474bff"],
//     assetPath: "ShooterGame/Content/Characters/Clay/Clay_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
//       displayName: "Duelist",
//       description:
//         "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Blast Pack",
//         description:
//           "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Paint Shells",
//         description:
//           "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Boom Bot",
//         description:
//           "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Showstopper",
//         description:
//           "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 1.541198,
//       maxDuration: 1.541198,
//       mediaList: [
//         {
//           id: 632864455,
//           wwise: "https://media.valorant-api.com/sounds/632864455.wem",
//           wave: "https://media.valorant-api.com/sounds/632864455.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
//     displayName: "Chamber",
//     description:
//       "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
//     developerName: "Deadeye",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/background.png",
//     backgroundGradientColors: ["ffce6fff", "7b4d21ff", "372d2bff", "66376cff"],
//     assetPath: "ShooterGame/Content/Characters/Deadeye/Deadeye_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
//       displayName: "Sentinel",
//       description:
//         "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability2",
//         displayName: "Rendezvous",
//         description:
//           "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor.  Anchors can be picked up to be REDEPLOYED.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Trademark",
//         description:
//           "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them , creating a lingering field that slows players caught inside of it.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ability1",
//         displayName: "Headhunter",
//         description:
//           "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Tour De Force",
//         description:
//           "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body.  Killing an enemy creates a lingering field that slows players caught inside of it.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 1.939385,
//       maxDuration: 1.939385,
//       mediaList: [
//         {
//           id: 765052468,
//           wwise: "https://media.valorant-api.com/sounds/765052468.wem",
//           wave: "https://media.valorant-api.com/sounds/765052468.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "601dbbe7-43ce-be57-2a40-4abd24953621",
//     displayName: "KAY/O",
//     description:
//       "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
//     developerName: "Grenadier",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/background.png",
//     backgroundGradientColors: ["4afaffff", "4da6e1ff", "1a1e4bff", "391a61ff"],
//     assetPath:
//       "ShooterGame/Content/Characters/Grenadier/Grenadier_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
//       displayName: "Initiator",
//       description:
//         "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Grenade",
//         displayName: "FRAG/ment",
//         description:
//           "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ability1",
//         displayName: "FLASH/drive",
//         description:
//           "EQUIP a flash grenade. FIRE to overhand throw. ALT FIRE to underhand throw a weaker version that explodes quickly. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "ZERO/point",
//         description:
//           "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "NULL/cmd",
//         description:
//           "INSTANTLY overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are suppressed for a short duration. While overloaded, KAY/O gains combat stim and can be re-stabilized if downed.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 1.034417,
//       maxDuration: 1.034417,
//       mediaList: [
//         {
//           id: 170847866,
//           wwise: "https://media.valorant-api.com/sounds/170847866.wem",
//           wave: "https://media.valorant-api.com/sounds/170847866.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "6f2a04ca-43e0-be17-7f36-b3908627744d",
//     displayName: "Skye",
//     description:
//       "Hailing from Australia, Skye and her band of beasts trailblaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
//     developerName: "Guide",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/background.png",
//     backgroundGradientColors: ["94e789ff", "aa8a49ff", "4f1413ff", "314d48ff"],
//     assetPath: "ShooterGame/Content/Characters/Guide/Guide_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
//       displayName: "Initiator",
//       description:
//         "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Trailblazer",
//         description:
//           "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator.  While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Guiding Light",
//         description:
//           "EQUIP a hawk trinket.  FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Regrowth",
//         description:
//           "EQUIP a healing trinket.  HOLD FIRE to channel, healing allies in range and line of sight.  Can be reused until her healing pool is depleted.  Skye cannot heal herself.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Seekers",
//         description:
//           "EQUIP a Seeker trinket.  FIRE to send out three Seekers to track down the three closest enemies.  If a Seeker reaches its target, it nearsights them.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 1.807344,
//       maxDuration: 1.807344,
//       mediaList: [
//         {
//           id: 452875258,
//           wwise: "https://media.valorant-api.com/sounds/452875258.wem",
//           wave: "https://media.valorant-api.com/sounds/452875258.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
//     displayName: "Cypher",
//     description:
//       "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
//     developerName: "Gumshoe",
//     characterTags: ["Detection", "Defensive Lockdown"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/background.png",
//     backgroundGradientColors: ["db9b75ff", "4268b3ff", "3f3f6cff", "2b527cff"],
//     assetPath: "ShooterGame/Content/Characters/Gumshoe/Gumshoe_PrimaryAsset",
//     isFullPortraitRightFacing: true,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
//       displayName: "Sentinel",
//       description:
//         "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Cyber Cage",
//         description:
//           "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it",
//         displayIcon:
//           "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Spycam",
//         description:
//           "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Trapwire",
//         description:
//           "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Neural Theft",
//         description:
//           "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.807927,
//       maxDuration: 2.807927,
//       mediaList: [
//         {
//           id: 246514732,
//           wwise: "https://media.valorant-api.com/sounds/246514732.wem",
//           wave: "https://media.valorant-api.com/sounds/246514732.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "ded3520f-4264-bfed-162d-b080e2abccf9",
//     displayName: "Sova",
//     description:
//       "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide. ",
//     developerName: "Hunter_NPE",
//     characterTags: ["Detection", "Area Damage"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/displayiconsmall.png",
//     bustPortrait: null,
//     fullPortrait: null,
//     fullPortraitV2: null,
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/killfeedportrait.png",
//     background: null,
//     backgroundGradientColors: ["f7c7a5ff", "392931ff", "101c47ff", "082652ff"],
//     assetPath: "ShooterGame/Content/Characters/Hunter/Hunter_NPE_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: false,
//     isAvailableForTest: false,
//     isBaseContent: false,
//     role: {
//       displayName: null,
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Shock Bolt",
//         description:
//           "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Recon Bolt",
//         description:
//           "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow. ",
//         displayIcon:
//           "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Owl Drone",
//         description:
//           "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Hunter's Fury",
//         description:
//           "EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/abilities/ultimate/displayicon.png",
//       },
//       {
//         slot: "Passive",
//         displayName: "Uncanny Marksman",
//         description:
//           "Sova's custom bow can fire his arrows and bounce them off terrain. Holding fire charges the bow's power, and the bolt is loosed when released. Press alt fire to change the number of bounces.Your arrows can bounce off terrain. Holding left click increases the bow's range trajectory. Right clicking Toggle through the desired number of terrain bounces by right clicking. The arrow is loosed when left click is released.",
//         displayIcon: null,
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.021729,
//       maxDuration: 2.021729,
//       mediaList: [
//         {
//           id: 130865070,
//           wwise: "https://media.valorant-api.com/sounds/130865070.wem",
//           wave: "https://media.valorant-api.com/sounds/130865070.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
//     displayName: "Sova",
//     description:
//       "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide. ",
//     developerName: "Hunter",
//     characterTags: ["Detection", "Area Damage"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/background.png",
//     backgroundGradientColors: ["f7c7a5ff", "392931ff", "101c47ff", "082652ff"],
//     assetPath: "ShooterGame/Content/Characters/Hunter/Hunter_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: true,
//     role: {
//       uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
//       displayName: "Initiator",
//       description:
//         "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Shock Bolt",
//         description:
//           "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Recon Bolt",
//         description:
//           "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow. ",
//         displayIcon:
//           "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Owl Drone",
//         description:
//           "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Hunter's Fury",
//         description:
//           "EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ultimate/displayicon.png",
//       },
//       {
//         slot: "Passive",
//         displayName: "Uncanny Marksman",
//         description:
//           "Sova's custom bow can fire his arrows and bounce them off terrain. Holding fire charges the bow's power, and the bolt is loosed when released. Press alt fire to change the number of bounces.Your arrows can bounce off terrain. Holding left click increases the bow's range trajectory. Right clicking Toggle through the desired number of terrain bounces by right clicking. The arrow is loosed when left click is released.",
//         displayIcon: null,
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.021729,
//       maxDuration: 2.021729,
//       mediaList: [
//         {
//           id: 130865070,
//           wwise: "https://media.valorant-api.com/sounds/130865070.wem",
//           wave: "https://media.valorant-api.com/sounds/130865070.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "1e58de9c-4950-5125-93e9-a0aee9f98746",
//     displayName: "Killjoy",
//     description:
//       "The genius of Germany, Killjoy secures and defends key battlefield positions with a collection of traps, turrets, and mines. Each invention is primed to punish any assailant too dumb to back down.",
//     developerName: "Killjoy",
//     characterTags: ["Defensive Lockdown", "Area Damage"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/background.png",
//     backgroundGradientColors: ["ffc300ff", "b87b00ff", "413950ff", "614414ff"],
//     assetPath: "ShooterGame/Content/Characters/Killjoy/Killjoy_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
//       displayName: "Sentinel",
//       description:
//         "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Grenade",
//         displayName: "Nanoswarm",
//         description:
//           "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ALT FIRE to lob. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.  ",
//         displayIcon:
//           "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ability1",
//         displayName: "ALARMBOT",
//         description:
//           "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range.  After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "TURRET",
//         description:
//           "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. ALT FIRE to swap turret direction. HOLD EQUIP to recall the deployed turret. ",
//         displayIcon:
//           "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Lockdown",
//         description:
//           "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.689708,
//       maxDuration: 2.689708,
//       mediaList: [
//         {
//           id: 1062625853,
//           wwise: "https://media.valorant-api.com/sounds/1062625853.wem",
//           wave: "https://media.valorant-api.com/sounds/1062625853.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "95b78ed7-4637-86d9-7e41-71ba8c293152",
//     displayName: "Harbor",
//     description:
//       "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies and to pummel those that oppose him.",
//     developerName: "Mage",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/background.png",
//     backgroundGradientColors: ["f2d6a3ff", "136c6bff", "11434eff", "0c262cff"],
//     assetPath: "ShooterGame/Content/Characters/Mage/Mage_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
//       displayName: "Controller",
//       description:
//         "Controllers are experts in slicing up dangerous territory to set their team up for success.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Cove",
//         description:
//           "EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to underhand throw. Upon impacting the ground, spawn a destructible water shield that blocks bullets.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Cascade",
//         description:
//           "EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE-USE to stop the wave. Players hit are SLOWED.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "High Tide",
//         description:
//           "EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water’s path. ALT FIRE while bending to stop the water early. Players hit are SLOWED.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Reckoning",
//         description:
//           "EQUIP the full power of your Artifact. FIRE to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes. Players caught within a strike are CONCUSSED.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 1.554083,
//       maxDuration: 1.554083,
//       mediaList: [
//         {
//           id: 409447225,
//           wwise: "https://media.valorant-api.com/sounds/409447225.wem",
//           wave: "https://media.valorant-api.com/sounds/409447225.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "707eab51-4836-f488-046a-cda6bf494859",
//     displayName: "Viper",
//     description:
//       "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
//     developerName: "Pandemic",
//     characterTags: ["Vision Control Specialist"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/background.png",
//     backgroundGradientColors: ["89f476ff", "347334ff", "2c4f5eff", "493a7cff"],
//     assetPath: "ShooterGame/Content/Characters/Pandemic/Pandemic_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
//       displayName: "Controller",
//       description:
//         "Controllers are experts in slicing up dangerous territory to set their team up for success.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Poison Cloud",
//         description:
//           "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. ALT FIRE to lob. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Toxic Screen",
//         description:
//           "EQUIP a gas emitter launcher that penetrates terrain. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Snake Bite",
//         description:
//           "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and applies Vulnerable.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Viper's Pit",
//         description:
//           "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range of players and maximum health of enemies inside of it. HOLD the ability key to disperse the cloud early.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ultimate/displayicon.png",
//       },
//       {
//         slot: "Passive",
//         displayName: "Toxic",
//         description:
//           "You gradually generate and replenish the toxin that fuels your abilities.  Enemies that cross through Viper's Poison Cloud, Toxic Screen, or Viper's Pit are instantly inflicted with at least 50 decay. Their decay level increases the longer they remain in contact with it.",
//         displayIcon: null,
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.445958,
//       maxDuration: 2.445958,
//       mediaList: [
//         {
//           id: 204662687,
//           wwise: "https://media.valorant-api.com/sounds/204662687.wem",
//           wave: "https://media.valorant-api.com/sounds/204662687.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "eb93336a-449b-9c1b-0a54-a891f7921d69",
//     displayName: "Phoenix",
//     description:
//       "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he's rushing in to fight on his own terms.",
//     developerName: "Phoenix",
//     characterTags: ["Flexibility", "Self-Sustain"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/background.png",
//     backgroundGradientColors: ["f7bf60ff", "ea6d4eff", "262423ff", "66376cff"],
//     assetPath: "ShooterGame/Content/Characters/Phoenix/Phoenix_PrimaryAsset",
//     isFullPortraitRightFacing: true,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: true,
//     role: {
//       uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
//       displayName: "Duelist",
//       description:
//         "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Grenade",
//         displayName: "Blaze",
//         description:
//           "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ability1",
//         displayName: "Curveball",
//         description:
//           "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALT FIRE to curve the flare orb to the right.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Hot Hands",
//         description:
//           "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies. ALT FIRE to lob.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Run it Back",
//         description:
//           "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health and the amount of armor he had when the ability was cast.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ultimate/displayicon.png",
//       },
//       {
//         slot: "Passive",
//         displayName: "Heating Up",
//         description:
//           "PASSIVELY heal Phoenix instead of taking damage when standing in Phoenix's own fire",
//         displayIcon: null,
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.258333,
//       maxDuration: 2.258333,
//       mediaList: [
//         {
//           id: 384959611,
//           wwise: "https://media.valorant-api.com/sounds/384959611.wem",
//           wave: "https://media.valorant-api.com/sounds/384959611.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
//     displayName: "Astra",
//     description:
//       "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
//     developerName: "Rift",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/background.png",
//     backgroundGradientColors: ["f47dc9ff", "a54498ff", "5210c6ff", "372518ff"],
//     assetPath: "ShooterGame/Content/Characters/Rift/Rift_PrimaryAsset",
//     isFullPortraitRightFacing: true,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
//       displayName: "Controller",
//       description:
//         "Controllers are experts in slicing up dangerous territory to set their team up for success.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Nova Pulse",
//         description:
//           "Place Stars in Astral Form (Ultimate Key).\r\n\r\nACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Nebula  / Dissipate",
//         description:
//           "Place Stars in Astral Form (Ultimate Key). \r\n\r\nACTIVATE a Star to transform it into a Nebula (smoke).\r\n\r\nUSE a Star to Dissipate it, returning the star to be placed in a new location after a delay.\r\n\r\nDissipate briefly forms a fake Nebula at the Star's location before returning.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Gravity Well",
//         description:
//           "Place Stars in Astral Form (Ultimate Key).\r\n\r\nACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside vulnerable.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Astral Form / Cosmic Divide",
//         description:
//           "ACTIVATE to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well.\r\n\r\nWhen Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ultimate/displayicon.png",
//       },
//       {
//         slot: "Passive",
//         displayName: "Astral Form",
//         description:
//           "ACTIVATE Ultimate to enter Astral Form and PRIMARY FIRE to place Stars. Target Stars with your Nova Pulse, Nebula, or Gravity Well to use those abilities.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/passive/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 3.18301,
//       maxDuration: 3.18301,
//       mediaList: [
//         {
//           id: 594322343,
//           wwise: "https://media.valorant-api.com/sounds/594322343.wem",
//           wave: "https://media.valorant-api.com/sounds/594322343.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
//     displayName: "Brimstone",
//     description:
//       "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.  ",
//     developerName: "Sarge",
//     characterTags: ["Vision Control", "Area Damage"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/background.png",
//     backgroundGradientColors: ["eb953fff", "892c1bff", "211d21ff", "282b38ff"],
//     assetPath: "ShooterGame/Content/Characters/Sarge/Sarge_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: true,
//     role: {
//       uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
//       displayName: "Controller",
//       description:
//         "Controllers are experts in slicing up dangerous territory to set their team up for success.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Grenade",
//         displayName: "Stim Beacon",
//         description:
//           "INSTANTLY toss down a stim beacon. Upon landing, it creates a field that grants players RapidFire and a speed boost.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ability1",
//         displayName: "Incendiary",
//         description:
//           "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Sky Smoke",
//         description:
//           "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Orbital Strike",
//         description:
//           "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 4.969511,
//       maxDuration: 4.969511,
//       mediaList: [
//         {
//           id: 421554800,
//           wwise: "https://media.valorant-api.com/sounds/421554800.wem",
//           wave: "https://media.valorant-api.com/sounds/421554800.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "bb2a4828-46eb-8cd1-e765-15848195d751",
//     displayName: "Neon",
//     description:
//       "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard then strikes them down quicker than lightning.",
//     developerName: "Sprinter",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/background.png",
//     backgroundGradientColors: ["ba89ffff", "6241ccff", "38328eff", "2c4799ff"],
//     assetPath: "ShooterGame/Content/Characters/Sprinter/Sprinter_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
//       displayName: "Duelist",
//       description:
//         "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability2",
//         displayName: "High Gear",
//         description:
//           "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Ability1",
//         displayName: "Relay Bolt",
//         description:
//           "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Fast Lane",
//         description:
//           "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Overdrive",
//         description:
//           "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 1.26851,
//       maxDuration: 1.26851,
//       mediaList: [
//         {
//           id: 5690468,
//           wwise: "https://media.valorant-api.com/sounds/5690468.wem",
//           wave: "https://media.valorant-api.com/sounds/5690468.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
//     displayName: "Yoru",
//     description:
//       "Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
//     developerName: "Stealth",
//     characterTags: null,
//     displayIcon:
//       "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/background.png",
//     backgroundGradientColors: ["66a8ffff", "3b37a7ff", "261e4fff", "101042ff"],
//     assetPath: "ShooterGame/Content/Characters/Stealth/Stealth_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
//       displayName: "Duelist",
//       description:
//         "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Grenade",
//         displayName: "FAKEOUT",
//         description:
//           "EQUIP an echo that transforms into a mirror image of Yoru when activated. FIRE to instantly activate the mirror image and send it forward. ALT FIRE to place an inactive echo. USE to transform an inactive echo into a mirror image and send it forward.  Mirror images explode in a blinding flash when destroyed by enemies.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ability1",
//         displayName: "BLINDSIDE",
//         description:
//           "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "GATECRASH",
//         description:
//           "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "DIMENSIONAL DRIFT",
//         description:
//           "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 4.105177,
//       maxDuration: 4.105177,
//       mediaList: [
//         {
//           id: 107320642,
//           wwise: "https://media.valorant-api.com/sounds/107320642.wem",
//           wave: "https://media.valorant-api.com/sounds/107320642.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "569fdd95-4d10-43ab-ca70-79becc718b46",
//     displayName: "Sage",
//     description:
//       "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm center to a hellish battlefield.",
//     developerName: "Thorne",
//     characterTags: ["Recovery", "Stalling"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/background.png",
//     backgroundGradientColors: ["7bfedeff", "41819aff", "102d23ff", "226071ff"],
//     assetPath: "ShooterGame/Content/Characters/Thorne/Thorne_PrimaryAsset",
//     isFullPortraitRightFacing: true,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: true,
//     role: {
//       uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
//       displayName: "Sentinel",
//       description:
//         "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Slow Orb",
//         description:
//           "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Healing Orb",
//         description:
//           "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Barrier Orb",
//         description:
//           "EQUIP a barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Resurrection",
//         description:
//           "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 2.07,
//       maxDuration: 2.07,
//       mediaList: [
//         {
//           id: 119342169,
//           wwise: "https://media.valorant-api.com/sounds/119342169.wem",
//           wave: "https://media.valorant-api.com/sounds/119342169.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
//     displayName: "Reyna",
//     description:
//       "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her sharply dependant on performance. ",
//     developerName: "Vampire",
//     characterTags: ["Evasion", "Self-Sustain"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/background.png",
//     backgroundGradientColors: ["e46e77ff", "c44d9fff", "2f2664ff", "2f203fff"],
//     assetPath: "ShooterGame/Content/Characters/Vampire/Vampire_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
//       displayName: "Duelist",
//       description:
//         "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Devour",
//         description:
//           "Soul Harvest: Enemies that die to Reyna, or die within 3 seconds of taking damage from Reyna, leave behind Soul Orbs that last 3 seconds.\r\nDevour: INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the Soul Orb.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Dismiss",
//         description:
//           "INSTANTLY consume a nearby Soul Orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Leer",
//         description:
//           "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Empress",
//         description:
//           "INSTANTLY enter a frenzy, increasing firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities. When an enemy dies to Reyna, or dies within 3 seconds of taking damage from Reyna, the duration is renewed.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 3.430208,
//       maxDuration: 3.430208,
//       mediaList: [
//         {
//           id: 847719523,
//           wwise: "https://media.valorant-api.com/sounds/847719523.wem",
//           wave: "https://media.valorant-api.com/sounds/847719523.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "8e253930-4c05-31dd-1b6c-968525494517",
//     displayName: "Omen",
//     description:
//       "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to uncover where he might strike next.",
//     developerName: "Wraith",
//     characterTags: ["Mobility", "Vision Control"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/background.png",
//     backgroundGradientColors: ["2fdddeff", "4f53afff", "344673ff", "193b3dff"],
//     assetPath: "ShooterGame/Content/Characters/Wraith/Wraith_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: false,
//     role: {
//       uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
//       displayName: "Controller",
//       description:
//         "Controllers are experts in slicing up dangerous territory to set their team up for success.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Paranoia",
//         description:
//           "EQUIP a blinding orb.  FIRE to throw it forward, briefly reducing the vision range and deafening all players it touches. This projectile can pass straight through walls.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Dark Cover",
//         description:
//           "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD SECONDARY FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Shrouded Step",
//         description:
//           "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "From the Shadows",
//         description:
//           "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport, or PRESS EQUIP for Omen to cancel his teleport.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ultimate/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 3.758667,
//       maxDuration: 3.758667,
//       mediaList: [
//         {
//           id: 717842149,
//           wwise: "https://media.valorant-api.com/sounds/717842149.wem",
//           wave: "https://media.valorant-api.com/sounds/717842149.wav",
//         },
//       ],
//     },
//   },
//   {
//     uuid: "add6443a-41bd-e414-f6ad-e58d267f4e95",
//     displayName: "Jett",
//     description:
//       "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
//     developerName: "Wushu",
//     characterTags: ["Evasion", "Mobility"],
//     displayIcon:
//       "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
//     displayIconSmall:
//       "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png",
//     bustPortrait:
//       "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
//     fullPortrait:
//       "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
//     fullPortraitV2:
//       "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
//     killfeedPortrait:
//       "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/killfeedportrait.png",
//     background:
//       "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png",
//     backgroundGradientColors: ["90e3fdff", "557f8cff", "2b4e7cff", "1e3344ff"],
//     assetPath: "ShooterGame/Content/Characters/Wushu/Wushu_PrimaryAsset",
//     isFullPortraitRightFacing: false,
//     isPlayableCharacter: true,
//     isAvailableForTest: true,
//     isBaseContent: true,
//     role: {
//       uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
//       displayName: "Duelist",
//       description:
//         "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
//       displayIcon:
//         "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
//       assetPath:
//         "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
//     },
//     abilities: [
//       {
//         slot: "Ability1",
//         displayName: "Updraft",
//         description: "INSTANTLY propel Jett high into the air.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
//       },
//       {
//         slot: "Ability2",
//         displayName: "Tailwind",
//         description:
//           "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
//       },
//       {
//         slot: "Grenade",
//         displayName: "Cloudburst",
//         description:
//           "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
//       },
//       {
//         slot: "Ultimate",
//         displayName: "Blade Storm",
//         description:
//           "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALTERNATE FIRE to throw all remaining daggers but does not recharge on a kill.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
//       },
//       {
//         slot: "Passive",
//         displayName: "Drift",
//         description:
//           "Holding the jump button while falling allows you to glide through the air.",
//         displayIcon:
//           "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
//       },
//     ],
//     voiceLine: {
//       minDuration: 1.048729,
//       maxDuration: 1.048729,
//       mediaList: [
//         {
//           id: 878055936,
//           wwise: "https://media.valorant-api.com/sounds/878055936.wem",
//           wave: "https://media.valorant-api.com/sounds/878055936.wav",
//         },
//       ],
//     },
//   },
// ];

// // 1) Using forEach, print the name of each agent who's role is Sentinel
// data.forEach(agent => {
//   if (agent.role.displayName === "Sentinel") {
//     console.log(agent.displayName);
//   }
// });

// // 2) Using forEach, print the name of each agent who's backgroundGradientColors include "66376cff"
// data.forEach(agent => {
//   if (agent.backgroundGradientColors.includes("66376cff")) {
//     console.log(agent.displayName);
//   }
// });

//-------------------------------------------------------------------------------------------------

const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerald Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
presidents.forEach(presidents => {
  if (presidents.party === "D")  {
    console.log(presidents.name)
  }
});

console.log("")
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
presidents.forEach(presidents => {
  if (presidents.terms === 1 && presidents.party === "R")  {
    console.log(presidents.name)
  }
});

console.log("")
//3) return only the last three presidents
const lastThreePresidents = presidents.slice(0, -9);

lastThreePresidents.forEach(president => {
  console.log(president.name);
});

console.log("")
//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
presidents.forEach(presidents => {
  if (presidents.terms === 2 && presidents.party === "D")  {
    console.log(presidents.name)
  }
});

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"