export interface InstagramPost {
  shortcode: string;
  permalink: string;
  imageUrl: string;
  caption: string;
  likes: number;
}

export const INSTAGRAM_USERNAME = 'aartiofficialcenter';
export const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

/** Recent post shortcodes — used for client-side embeds when server fetch is blocked. */
export const fallbackInstagramPosts: InstagramPost[] = [
  {
    shortcode: 'DadD1gGk2uZ',
    permalink: 'https://www.instagram.com/p/DadD1gGk2uZ/',
    imageUrl: '',
    caption:
      'यशस्वी उद्योगपती स्किल्सबद्दल काय म्हणतात? #SkillDevelopment #JobReady #YouthEmpowerment',
    likes: 2,
  },
  {
    shortcode: 'DaXO6qgzyUW',
    permalink: 'https://www.instagram.com/p/DaXO6qgzyUW/',
    imageUrl: '',
    caption: 'डिग्री मिळाली…पण नोकरी का मिळत नाही? #SkillDevelopment #JobReady #Employability',
    likes: 1,
  },
  {
    shortcode: 'DaPfl_hE8pE',
    permalink: 'https://www.instagram.com/p/DaPfl_hE8pE/',
    imageUrl: '',
    caption: 'तुमच्याकडे डिग्री आहे, पण नोकरी का नाही? #SkillDevelopment #FutureSkills',
    likes: 9,
  },
];
