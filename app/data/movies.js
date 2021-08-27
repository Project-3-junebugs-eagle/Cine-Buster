/* eslint-disable no-tabs */
const movies = [
  {
    id: '1234',
    title: 'Fast and Furious',
    description:
			'Media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and betrayal.',
    price: '4.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/274/611/598/2020-the-fast-and-the-furious-9-fast-and-furious-9-fast-and-furious-9-hd-wallpaper-preview.jpg'
  },
  {
    id: '6789',
    title: 'Fantastic Mr Fox',
    description:
			'After 12 years of bucolic bliss, Mr. Fox (George Clooney) breaks a promise to his wife (Meryl Streep) and raids the farms of their human neighbors, Boggis, Bunce and Bean.',
    price: '4.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/590/157/286/movie-fantastic-mr-fox-wallpaper-preview.jpg'
  },
  {
    id: '1011',
    title: 'Interstellar',
    description:
			"Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct.",
    price: '4.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/1023/915/631/nasa-space-suit-digital-art-space-wallpaper-preview.jpg'
  },
  {
    id: '1213',
    title: 'The Adventures of Robin Hood',
    description:
			"Arguably Flynn's greatest role, this is the classic, swashbuckling, adventure, costume epic spectacle about the infamous rebel outlaw and his band of merry men from Sherwood Forest who robbed from the rich and gave to the poor.",
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/761/793/95/action-adventure-archer-battle-wallpaper-preview.jpg'
  },
  {
    id: '1415',
    title: 'The Princess and the Frog',
    description:
			'A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/749/279/691/princess-and-the-frog-disney-s-princess-and-the-frog-illustration-wallpaper-preview.jpg'
  },
  {
    id: '1617',
    title: 'American Sniper',
    description:
			"Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home with his family after four tours of duty, however, Chris finds that it is the war he can't leave behind.",
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/96/366/422/american-sniper-bradley-cooper-movies-wallpaper-preview.jpg'
  },
  {
    id: '1920',
    title: 'Frozen',
    description:
			'The film depicts a princess who sets off on a journey alongside an iceman, his reindeer, and a snowman to find her estranged sister, whose icy powers have inadvertently trapped their kingdom in eternal winter.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/595/534/446/movie-frozen-2-anna-frozen-elsa-frozen-kristoff-frozen-hd-wallpaper-preview.jpg'
  },
  {
    id: '2021',
    title: 'The Little Mermaid',
    description:
			'The film tells the story of a mermaid princess named Ariel, who dreams of becoming human and falls in love with a human prince named Eric, which leads her to make a magic deal with the sea witch, Ursula, to become human and be with him.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/619/508/1017/1littlemermaid-adventure-animation-ariel-wallpaper-preview.jpg'
  },
  {
    id: '2122',
    title: 'Joker',
    description:
			'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/594/527/696/movies-joaquin-phoenix-joker-joker-2019-movie-men-hd-wallpaper-preview.jpg'
  },
  {
    id: '2223',
    title: 'Batman',
    description:
			'Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/173/832/870/movies-batman-the-dark-knight-batman-begins-wallpaper-preview.jpg'
  },
  {
    id: '2425',
    title: 'Tangled',
    description:
			'The film tells the story of Rapunzel, a lost, young princess with magical long blonde hair who yearns to leave her secluded tower. Against her foster mothers wishes, she accepts the aid of an intruder to take her out into the world which she has never seen.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/657/323/648/wave-the-sky-water-mountains-wallpaper-preview.jpg'
  },
  {
    id: '2526',
    title: 'The Imitation Game',
    description:
			'It is based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britains top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/71/306/375/benedict-cumberbatch-wallpaper-preview.jpg'
  },
  {
    id: '2627',
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    description:
			"Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name.",
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/12/480/915/movies-pirates-of-the-caribbean-the-curse-of-the-black-pearl-keira-knightley-johnny-depp-wallpaper-preview.jpg'
  },
  {
    id: '2728',
    title: 'Me Before You',
    description:
			'A girl in a small town forms an unlikely bond with a recently-paralyzed man she is taking care of.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/252/803/700/sam-claflin-me-before-you-emilia-clarke-4k-wallpaper-preview.jpg'
  },
  {
    id: '2829',
    title: 'Twilight',
    description:
			'This film focuses on the development of the relationship between Bella Swan (a teenage girl) and Edward Cullen (a vampire), and the subsequent efforts of Edward and his family to keep Bella safe from a coven of evil vampires.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/517/908/1007/actors-twilight-twilight-robert-wallpaper-preview.jpg'
  },
  {
    id: '3031',
    title: 'The Guernsey Literary and Potato Peel Pie Society',
    description:
			'In 1946 a London-based writer begins exchanging letters with residents on the island of Guernsey, which was German-occupied during WWII. Feeling compelled to visit the island, she starts to get a picture of what it was like during the occupation.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/205/520/61/lily-james-in-the-guernsey-literary-and-potato-peel-pie-society-wallpaper-preview.jpg'
  },
  {
    id: '3132',
    title: 'Avatar',
    description:
			'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/123/991/646/avatar-blue-skin-james-cameron-s-movie-avatar-movie-poster-wallpaper-preview.jpg'
  },
  {
    id: '3233',
    title: 'The Aristocats',
    description:
			'With the help of a smooth talking tomcat, a family of Parisian felines set to inherit a fortune from their owner try to make it back home after a jealous butler kidnaps them and leaves them in the country.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/145/745/130/movie-the-aristocats-wallpaper-preview.jpg'
  },
  {
    id: '3334',
    title: 'Casino Royale',
    description:
			'After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro. James Bond (Daniel Craig) goes on his first mission as a 00.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/81/961/318/movies-james-bond-casino-royale-daniel-craig-wallpaper-preview.jpg'
  },
  {
    id: '3536',
    title: 'Zero Dark Thirty',
    description:
			'Zero Dark Thirty is a 2012 American thriller film directed by Kathryn Bigelow and written by Mark Boal. The film dramatizes the nearly decade-long international manhunt for Osama bin Laden, leader of terrorist network Al-Qaeda, after the September 11 attacks.',
    price: '5.99',
    imgUrl:
			'https://c4.wallpaperflare.com/wallpaper/613/787/800/movie-zero-dark-thirty-jessica-chastain-wallpaper-preview.jpg'
  }
]
module.exports = movies
