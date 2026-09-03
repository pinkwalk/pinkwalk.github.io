// Shared PinkWalk event data — used across routes.
import issLogo from "@/assets/iss-logo.png";
import pathaoLogo from "@/assets/pathao-logo.png";
import jeeveeLogo from "@/assets/jeevee-logo.svg";
import h2oLogo from "@/assets/h2o-logo.png";
import realLogo from "@/assets/real-logo.png";
import wowLogo from "@/assets/wow-logo.png";
import necassLogo from "@/assets/necass-logo.png";

import anuradhaImg from "@/assets/guests/anuradha-koirala.jpg";
import manishaImg from "@/assets/guests/manisha-koirala.jpg";
import sumanaImg from "@/assets/guests/sumana-shrestha.jpg";
import sugarikaImg from "@/assets/guests/sugarika-kc.jpg";

export type LinkItem = {
  label: string;
  href?: string;
  note?: string;
  logo?: string;
};

export const contactEmail = "pinkwalknepal@gmail.com";

export const tshirtSizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export const thisYearEvent = {
  year: 2026,
  month: "October 2026",
  date: "October 3rd, 2026",
  dateNote: "Saturday, October 3rd 2026",
  title: "PinkWalk 2026",
  tagline: "Basantapur → Mangal Bazar",
  route: {
    startLabel: "Basantapur",
    startFull: "Basantapur (Kathmandu Durbar Square)",
    endLabel: "Mangal Bazar",
    endFull: "Mangal Bazar (Lalitpur Durbar Square)",
  },
  routeStops: [
    "Basantapur (Kathmandu Durbar Square)",
    "Dharahara",
    "Tripureshwor",
    "Thapathali",
    "Pulchowk",
    "Patan Dhoka",
    "Mangalbazar (Lalitpur Durbar Square)",
  ],
  duration: "around 1 hr",
  distance: "≈ 4.3 km",
  startTime: "Early morning (time TBA)",
  highlights: [
    "A heritage walk through the heart of the Kathmandu Valley",
    "From Kathmandu Durbar Square to Lalitpur Durbar Square",
    "Walk together for about an hour in solidarity",
    "Pink for breast cancer awareness",
  ],
  organizers: ["Infinite Care"],
  contactPersons: ["Dijup Tuladhar", "Lijala Shrestha"],
};

export type GuestItem = {
  name: string;
  role?: string;
  bio: string;
  image?: string;
};

export const lastEventGuests: GuestItem[] = [
  {
    name: "Anuradha Koirala",
    role: "Founder & Director, Maiti Nepal",
    bio: "Anuradha Koirala is the founder and director of the non-profit organization, Maiti Nepal, which advocates against human trafficking and protecting women in Nepal. In 2006, Koirala received the Courage of Conscience Award from The Peace Abbey in Massachusetts. In addition, in 2010, she was awarded CNN Hero of the Year.",
    image: anuradhaImg,
  },
  {
    name: "Manisha Koirala",
    role: "Nepalese Actress & Social Advocate",
    bio: "Nepalese actress who works in Indian films, predominantly in Hindi films and has also worked in Nepali and English films. In 2001, the Government of Nepal awarded her with the Order of Gorkha Dakshina Bahu.",
    image: manishaImg,
  },
  {
    name: "Sumana Shrestha",
    role: "Member of Parliament",
    bio: "Nepalese politician, belonging to the Rastriya Swatantra Party. She is currently serving as a member of the House of Representatives in the 2nd Federal Parliament of Nepal.",
    image: sumanaImg,
  },
  {
    name: "Sugarika KC",
    role: "Miss Nepal 2005 & Media Personality",
    bio: "Was crowned as Miss Nepal in 2005 and represented Nepal in Miss World that was held in China. She has worked with NCRS, WWF, Rotary Nepal, CGNN, BDJ and various other organizations.",
    image: sugarikaImg,
  },
];

export const lastEvent = {
  year: 2023,
  title: "PinkWalk 2023",
  date: "September 30th, 2023",
  venue: "Narayanchaur to Swayambhu",
  distance: "4 km",
  time: "6 AM – 10 AM",
  startTime: "6:00 AM from Narayanchaur",
  endTime: "10:00 AM at Swayambhu",
  routeStops: [
    "Narayanchaur",
    "Narayanhiti",
    "Lainchaur",
    "Sorhakhutte Chowk",
    "Bishnumati",
    "Swayambhu",
  ],
  about:
    "PinkWalk 2023 was a breast cancer awareness and fundraising walk organised by Cotiviti Nepal's CSR team in collaboration with Cancer Care Nepal. The walk moved through the heart of Kathmandu, raising awareness about breast cancer, promoting early detection, and raising funds to support individuals facing economic hardships in accessing treatment.",
  guests: lastEventGuests,
  objectives: [
    {
      title: "Raise Awareness",
      body: "Educate the community about breast cancer — its signs, symptoms, risk factors, and the importance of early detection through regular screenings and self-examinations.",
    },
    {
      title: "Promote Early Detection",
      body: "Emphasise the importance of early detection and regular screenings such as mammograms, motivating individuals to schedule screenings and adopt proactive breast-health practices.",
    },
    {
      title: "Community Engagement",
      body: "Encourage community participation and foster unity and solidarity among participants — families, friends, and local organisations coming together for the cause.",
    },
    {
      title: "Support Life After Cancer",
      body: "Work towards reducing the burden of breast cancer, improving outcomes, and supporting those affected — toward a future free from the disease.",
    },
  ],
};

export const partners: LinkItem[] = [
  {
    label: "National Hospital & Cancer Research Center",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuhOx10oq8gPP0T7cRzQZsnS0z_XrPXkJdu6T-ayDkTWDhn2o7pFGomXe&s=10",
  },
  {
    label: "ISS Pvt. Ltd.",
    logo: issLogo,
  },
  // { label: "The Kathmandu Post" },
  // {
  //   label: "Dabur Real",
  //   logo: realLogo,
  // },
  // {
  //   label: "Pathao Nepal",
  //   logo: pathaoLogo,
  // },
  // {
  //   label: "World of Women Magazine",
  //   logo: wowLogo,
  // },
  // {
  //   label: "H2O Drinking Water",
  //   logo: h2oLogo,
  // },
  // {
  //   label: "Jeevee Health Pvt. Ltd.",
  //   logo: jeeveeLogo,
  // },
];

export const supporters: LinkItem[] = [
  // { label: "Miss Universe Nepal 2023" },
  // { label: "Center for American Medical Specialists" },
  // { label: "Ask Foundation" },
  {
    label: "Nepal Cancer Survivor's Society",
    logo: necassLogo,
  },
];

export const newsCoverage: LinkItem[] = [
  {
    label: "A walkathon for breast cancer awareness",
    href: "https://kathmandupost.com/art-culture/2023/09/28/a-walkathon-for-breast-cancer-awareness",
    note: "The Kathmandu Post",
  },
  {
    label: "A walk for breast cancer support and awareness",
    href: "https://kathmandupost.com/art-culture/2023/10/01/a-walk-for-breast-cancer-support-and-awareness",
    note: "The Kathmandu Post",
  },
  {
    label: "स्तन क्यान्सर जागरूकताका लागि शनिबार 'वाकाथन' हुने",
    href: "https://ekantipur.com/market/2023/09/27/a-walkathon-will-be-held-on-saturday-for-breast-cancer-awareness-41-35.html",
    note: "eKantipur",
  },
  {
    label: "स्तन क्यान्सरबारे सचेतनाका लागि वाकाथुन — Good Morning Nepal",
    href: "https://www.youtube.com/watch?v=kE_rFTSKRQ0",
    note: "Kantipur TV",
  },
  {
    label:
      "PINK WALK किन र के का लागि ? के Breast cancer पुरुषलाई पनि हुन सक्छ् त ?",
    href: "https://www.youtube.com/watch?v=jljr1gbr2v0",
    note: "Prime TV",
  },
];

export const photos: LinkItem[] = [
  {
    label: "Photo 1 — Aviskar Basnet",
    href: "https://photos.app.goo.gl/U1hSNcBomkwVsUpW6",
  },
  {
    label: "Photo 2 — Narayan Thapa",
    href: "https://photos.app.goo.gl/iDMb431132WNLSZN9",
  },
  {
    label: "Photo 3 — Jitendra Bajracharya",
    href: "https://pinkwalk.github.io/photo/2023/photo3/",
  },
  {
    label: "Photo 4 — Sameer Tuladhar",
    href: "https://photos.app.goo.gl/tFQYHotPRqB42Yfd6",
  },
  {
    label: "Photo 5 — Sagar Chudali",
    href: "https://photos.app.goo.gl/hCAuUWh8d5sEX1f69",
  },
];

export const lastEventSiteUrl = "https://pinkwalk.github.io/";
