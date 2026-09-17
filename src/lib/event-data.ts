// Shared PinkWalk event data — used across routes.
import issLogo from "@/assets/iss-logo.png";
import infiniteLogo from "@/assets/infinite-logo.jpg";
import cancercareLogo from "@/assets/cancercare-logo.jpg";
import pathaoLogo from "@/assets/pathao-logo.png";
import jeeveeLogo from "@/assets/jeevee-logo.svg";
import h2oLogo from "@/assets/h2o-logo.png";
import realLogo from "@/assets/real-logo.png";
import wowLogo from "@/assets/wow-logo.png";
import necassLogo from "@/assets/necass-logo.png";
import novalaLogo from "@/assets/novala-logo.svg";
import esewaLogo from "@/assets/esewa-logo.png";
import kathmanduLogo from "@/assets/kmc-logo.png";
import lalitpurLogo from "@/assets/lalitpur-logo.jpg";
import tkpLogo from "@/assets/tkp-logo.png";
import happymindsLogo from "@/assets/happyminds-logo.jpg";

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
  dateNote: "शनिवार, आश्विन १९, २०८३",
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

export const organizersList: LinkItem[] = [
  {
    label: "Infinite Software Services Nepal Pvt. Ltd.",
    logo: infiniteLogo,
  },
  {
    label: "Cancer Care Nepal",
    logo: cancercareLogo,
  },
];

export const partners: LinkItem[] = [

  {
    label: "National Hospital & Cancer Research Center",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuhOx10oq8gPP0T7cRzQZsnS0z_XrPXkJdu6T-ayDkTWDhn2o7pFGomXe&s=10",
  },
  {
    label: "ISS Pvt. Ltd.",
    logo: issLogo,
  },
  {
    label: "Novala Biotech",
    logo: novalaLogo,
  },
  {
    label: "The Kathmandu Post",
    logo: tkpLogo,
  },
  // {
  //   label: "Dabur Real",
  //   logo: realLogo,
  // },
  {
    label: "Pathao Nepal",
    logo: pathaoLogo,
  },
  {
    label: "World of Women Magazine",
    logo: wowLogo,
  },
  {
    label: "Esewa",
    logo: esewaLogo,
  },
  {
    label: "Happy Minds",
    logo: happymindsLogo,
  },
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
    label: "Kathmandu Metropolitan City",
    logo: kathmanduLogo,
  },
  {
    label: "Lalitpur Metropolitan City",
    logo: lalitpurLogo,
  },
  {
    label: "Nepal Cancer Survivor's Society",
    logo: necassLogo,
  },
];

export const newsCoverage2026: LinkItem[] = [
  {
    label: "PinkWalk 2026 being organized for breast cancer awareness",
    href: "https://www.onlinekhabar.com/2026/09/2018207/pink-walk-2026-being-organized-for-breast-cancer-awareness",
    note: "Online Khabar",
  },
  {
    label: "PinkWalk 2026 to bring community together for breast cancer awareness & support",
    href: "https://english.makalukhabar.com/pinkwalk-2026-to-bring-community-together-for-breast-cancer-awareness-support/",
    note: "Makalu Khabar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://kendrabindu.com/health/555687/",
    note: "Kendrabindu",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक-२०२६’ आयोजना हुँदै",
    href: "https://www.kathmandupati.com/news/brest-cancer-2/429280/",
    note: "Kathmandu Pati",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://biznessnews.com/posts/56365",
    note: "Bizness News",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://equitynepal.com/2026/09/16/101871/",
    note: "Equity Nepal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://newsinnepal.com/2026/09/16/12/33912/",
    note: "News In Nepal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://corporatesamachar.com/2026/09/85363/",
    note: "Corporate Samachar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.corporatenepal.com/story/286678",
    note: "Corporate Nepal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.prabhabonline.com/detail/106269",
    note: "Prabhab Online",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://corporatekhabar.com/breast-cancer-awareness/",
    note: "Corporate Khabar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.souryaonline.com/2026/09/732618.html",
    note: "Sourya Online",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://aarthiknews.com/news/127406/-pinkwalk-2026--is-being-organized-on-october/",
    note: "Aarthik News",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://kharibot.com/news-details/200994/2026-09-16",
    note: "Kharibot",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.deshkonews.com/archives/275301",
    note: "Deshko News",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.ktmvoice.com/news/118240.html/",
    note: "KTM Voice",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.arthatantra.com/2026/09/16/231849/",
    note: "Arthatantra",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://nayasadak.com/details/70567",
    note: "Naya Sadak",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://kalikakhabar.com/s-tn-k-yan-sr-schetnaka-lagi-pinkwak-2026-aayojna-hundai/",
    note: "Kalika Khabar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.hulaksanchar.com/2026/09/16/11/121012/",
    note: "Hulak Sanchar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://bizpati.com/2026/09/219338/",
    note: "Bizpati",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.madhyantar.com/samachar/165350",
    note: "Madhyantar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.news24nepal.com/detail/13734",
    note: "News24 Nepal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://np.ictframe.com/pink-walk-breast-cancer-awareness/",
    note: "ICT Frame",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.diyopost.com/09/167221/",
    note: "Diyo Post",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://arthakagaj.com/news/52512638",
    note: "Artha Kagaj",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://nagariknews.nagariknetwork.com/health/pink-walk-2026-being-organized-for-breast-cancer-awareness-28-24.html",
    note: "Nagarik News",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://annapurnapost.com/story/507679/",
    note: "Annapurna Post",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://deshsanchar.com/2026/09/16/1228539/",
    note: "Desh Sanchar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://arthasanjal.com/192762",
    note: "Artha Sanjal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.nayapatrikadaily.com/news-details/204784/2026-09-16",
    note: "Nayapatrika Daily",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://aarthikvoice.com/health/pink-walk",
    note: "Aarthik Voice",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://dainiki.com/421077/",
    note: "Dainiki",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.samadhannews.com/2026/09/16/151504/",
    note: "Samadhan News",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://notebazar.com/news/2026/09/16/167805/",
    note: "NoteBazar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.eaarthik.com/2026/09/161418/",
    note: "Eaarthik",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://nepalraibar.com/posts/298882",
    note: "Nepal Raibar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://arthabazar.com/133738",
    note: "Arthabazar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.thahakhabar.com/detail/308788",
    note: "Thaha Khabar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://insurancekhabar.com/pinkwalk-2026-to-raise-awareness-about-breast-cancer/",
    note: "Insurance Khabar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://clickmandu.com/2026/09/491857.html",
    note: "Clickmandu",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.reportersnepal.com/2026/09/1248060/",
    note: "Reporters Nepal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://instakhabar.com/news/73215/",
    note: "Insta Khabar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://bizkhabar.com/263633",
    note: "Bizkhabar",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://arthapranali.com/2026/09/35224/",
    note: "Artha Pranali",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://baahrakhari.com/detail/501546",
    note: "Baahrakhari",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://aarthikplus.com/2026/09/16/138054/",
    note: "Aarthik Plus",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.samajikweekly.com/health/74921/",
    note: "Samajik Weekly",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://healthbani.com/2026/09/13224/news/",
    note: "Health Bani",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.samacharpati.com/samaj/487334.html",
    note: "Samacharpati",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://lokaantar.com/story/328975/2026/9/16/market/pinkwalk-",
    note: "Lokaantar",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://abcnews.com.np/%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%A8-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%B8%E0%A4%B0-%E0%A4%B8%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%E0%A4%95%E0%A4%BE-%E0%A4%B2/",
    note: "ABC News",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://hamroartha.com/news/135799",
    note: "Hamro Artha",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.lokpath.com/story/906142/",
    note: "Lokpath",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.capitalnepal.com/detail/85595",
    note: "Capital Nepal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://sunaulonepal.com/content/420052",
    note: "Sunaulo Nepal",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://khabarhub.com/2026/16/1025012/",
    note: "Khabarhub",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://shilapatra.com/detail/194974",
    note: "Shilapatra",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://english.himalayapost.com/archives/12619",
    note: "Himalaya Post",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://bizmandu.com/content/20260917161745.html",
    note: "Bizmandu",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://www.ukeraa.com/news/detail/179984/",
    note: "Ukeraa",
  },
];

export const newsCoverage2023: LinkItem[] = [
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

export const newsCoverage: LinkItem[] = newsCoverage2026;

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
