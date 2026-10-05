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
import qfxLogo from "@/assets/qfx-logo.png";
import camsLogo from "@/assets/cams-logo.png";
import nettvLogo from "@/assets/nettv-logo.png";
import neembuLogo from "@/assets/neembu-logo.png";
import taalLogo from "@/assets/taalnrityabhumi-logo.png";
import themaxLogo from "@/assets/themax-logo.jpg";
import bajraLogo from "@/assets/bajra-logo.png";
import jhiguLogo from "@/assets/jhigu-logo.png";
import smritiLogo from "@/assets/smritipatra-logo.jpg";
import onepasalLogo from "@/assets/onepasal-logo.svg";
import hakhaLogo from "@/assets/hakha-logo.jpg";
import mangalLogo from "@/assets/mangal-logo.jpg";
import unoLogo from "@/assets/uno-logo.png";
import lemonalLogo from "@/assets/lemonal-logo.jpg";
import javaLogo from "@/assets/java-logo.png";
import crayonsLogo from "@/assets/crayons-logo.png";

import anuradhaImg from "@/assets/guests/anuradha-koirala.jpg";
import manishaImg from "@/assets/guests/manisha-koirala.jpg";
import sumanaImg from "@/assets/guests/sumana-shrestha.jpg";
import sugarikaImg from "@/assets/guests/sugarika-kc.jpg";
import sunitaImg from "@/assets/guests/sunita-dangol.jpg";
import kaliImg from "@/assets/guests/kali-prasad-baskota.jpg";
import dipmalaImg from "@/assets/guests/deepmala-dhakal.jpg";
import kasishImg from "@/assets/guests/kasish-subba.jpg";
import ojashwiImg from "@/assets/guests/ojaswee-sherchan.jpg";
import subashImg from "@/assets/guests/subash-pyakurel.jpg";
import sunitagImg from "@/assets/guests/sunita-ghimire-gautam.jpg";

export type LinkItem = {
  label: string;
  type?: string;
  href?: string;
  note?: string;
  logo?: string;
  publish?: string;
};

export const contactEmail = "pinkwalknepal@gmail.com";

export type TshirtSizeInfo = {
  name: string;
  size: string;
  chestInches: number;
  lengthInches: number;
};

export const tshirtSizes = ["M", "L", "XL", "2XL", "3XL", "4XL"] as const;

export const tshirtSizeChart: TshirtSizeInfo[] = [
  { name: "XX-Small (XXS)", size: "XXS", chestInches: 32, lengthInches: 22 },
  { name: "X-Small (XS)", size: "XS", chestInches: 34, lengthInches: 24 },
  { name: "Small (S)", size: "S", chestInches: 36, lengthInches: 26 },
  { name: "Medium (M)", size: "M", chestInches: 38, lengthInches: 27 },
  { name: "Large (L)", size: "L", chestInches: 40, lengthInches: 28 },
  { name: "X-Large (XL)", size: "XL", chestInches: 42, lengthInches: 29 },
  { name: "XX-Large (2XL)", size: "2XL", chestInches: 44, lengthInches: 30 },
  { name: "XXXL-Large (3XL)", size: "3XL", chestInches: 46, lengthInches: 31 },
  { name: "XXXXL-Large (4XL)", size: "4XL", chestInches: 48, lengthInches: 31 },
];

export type GuestItem = {
  name: string;
  role?: string;
  bio: string;
  image?: string;
};

export const thisYearGuests: GuestItem[] = [
  {
    name: "Anuradha Koirala",
    role: "Founder & Director, Maiti Nepal / CNN Hero",
    bio: "Anuradha Koirala is a renowned social activist and the Founder and Chairperson of Maiti Nepal, an organization dedicated to combating human trafficking and supporting women and children. Named CNN Hero of the Year in 2010, she has dedicated decades to protecting vulnerable communities and advocating for a society free from trafficking and exploitation. She has been a valued part of PinkWalk since 2023, continuing to lend her presence and support to the cause.",
    image: anuradhaImg,
  },
  {
    name: "Hon. Dr. Ojashwi Sherchan",
    role: "Chairperson, Education, Health & Information Technology Committee, Federal Parliament of Nepal",
    bio: "Hon. Dr. Ojashwi Sherchan is a physician and Member of Parliament of Nepal, currently serving as Chairperson of the Education, Health and Information Technology Committee of the Federal Parliament. With her medical background and commitment to public health, she continues to advocate for stronger health awareness and accessible healthcare in Nepal.",
    image: ojashwiImg,
  },
  {
    name: "Sunita Dangol",
    role: "Acting Mayor, Kathmandu Metropolitan City",
    bio: "Sunita Dangol, Deputy Mayor of Kathmandu Metropolitan City, joined PinkWalk 2026 in support of breast cancer awareness and the importance of women’s health. As a public representative and advocate for inclusive community initiatives, her presence helped amplify the message of early awareness, prevention, and standing together with women and families affected by breast cancer. Her participation reflects the spirit of bringing communities together for a healthier and more supportive society.",
    image: sunitaImg,
  },
  {
    name: "Sumana Shrestha",
    role: "Former Education Minister",
    bio: "Sumana Shrestha is a former Member of Parliament and former Minister of Education, Science and Technology of Nepal. With a background in management, entrepreneurship, technology, and social initiatives, she has been actively engaged in advancing education, innovation, and meaningful social change. She has been a valued part of PinkWalk since 2023, continuing to support the event's mission of raising awareness and standing together against breast cancer.",
    image: sumanaImg,
  },
  {
    name: "Kali Prasad Baskota",
    role: "Musician & Singer-Songwriter",
    bio: "Kali Prasad Baskota is a celebrated Nepali singer, composer, lyricist, and musician, known for popular songs including Jaalma, Saili, Laija Re, and Thamel Bazaar. With a career spanning music, film, and talent development, he has made a lasting contribution to Nepal’s contemporary music scene. His presence at PinkWalk 2026 brought together the power of music and community in support of breast cancer awareness and women’s health.",
    image: kaliImg,
  },
  {
    name: "Sugarika KC",
    role: "Miss Nepal 2005 (Event Host)",
    bio: "Sugarika KC has been a dedicated part of the PinkWalk journey since 2023, lending her voice, energy, and presence to the cause of breast cancer awareness and women’s health. As the host of PinkWalk, she has helped bring the event to life, connecting with participants and helping amplify the message of awareness, early detection, and support for those affected by breast cancer. Her continued involvement reflects a genuine commitment to standing together for women’s health and a stronger, more supportive community.",
    image: sugarikaImg,
  },
  {
    name: "Dr. Subash Pyakurel",
    role: "President, Health Insurance Board",
    bio: "Dr. Subash Pyakurel is a physician and healthcare professional with extensive experience in public health, healthcare innovation, and community service. He is the Founder of Health Concern and currently serves as the Chairperson of Nepal’s Health Insurance Board. His commitment to strengthening healthcare and improving access to health services makes his presence at PinkWalk 2026 especially meaningful as we come together to raise awareness about breast cancer and the importance of accessible, timely healthcare.",
    image: subashImg,
  },
  {
    name: "Dr. Sunita Ghimire",
    role: "Scientist & Molecular Biologist",
    bio: "Dr. Sunita Ghimire is a molecular biologist, researcher, and biotechnology leader working to advance healthcare through science and innovation. She serves as a Principal Investigator at RIBB and Chairperson & CTO of Novala Biotech. Her work in biotechnology and healthcare innovation makes her a meaningful voice for health awareness and women’s health at PinkWalk 2026.",
    image: sunitagImg,
  },
  {
    name: "Dipmala Dahal",
    role: "Miss Nepal Earth 2026",
    bio: "Dipmala Dahal, Miss Nepal 2025, joined PinkWalk 2026 in support of breast cancer awareness and women’s health. As a young public figure and advocate for positive social change, her presence helped bring greater visibility to the importance of awareness, early detection, and supporting women affected by breast cancer. Her participation reflects the power of young voices in inspiring communities to come together for a healthier future.",
    image: dipmalaImg,
  },
  {
    name: "Kasish Subba",
    role: "Miss Nepal Cosmo 2026",
    bio: "Kashis Subba, Miss Nepal Cosmo 2026, is a fashion model and stylist with a Diploma in Fashion Design. With four years of experience in Nepal’s fashion industry, she has earned titles including Face of Nepal 2023 and Model of the Year 2025. Her journey reflects confidence, resilience, and the courage to embrace new challenges. As a young voice representing Nepal internationally, her presence at PinkWalk 2026 adds to the message of empowering women and inspiring communities to come together for greater awareness of breast cancer and women’s health.",
    image: kasishImg,
  },
];

export const thisYearEvent = {
  year: 2026,
  month: "October 2026",
  date: "October 3rd, 2026",
  dateNote: "शनिवार, आश्विन १७, २०८३",
  time: "6:00 AM (Assembly) / 6:15 AM (Flag-Off)",
  title: "PinkWalk 2026",
  tagline: "Basantapur → Mangal Bazar",
  isCompleted: true,
  participantsCount: "1,000+",
  statusText: "Successfully Concluded",
  proceedsNote: "All registration proceeds handed over to Cancer Care Nepal for patient treatment",
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
  startTime: "6:00 AM",
  highlights: [
    "Over 1,000 participants walked together in pink solidarity across Kathmandu & Lalitpur",
    "Historic heritage route connecting Kathmandu Durbar Square to Patan Durbar Square",
    "Addresses & insights by Anuradha Koirala, Sunita Dangol, Sumana Shrestha, Kali Prasad Baskota, & oncologists",
    "All registration proceeds handed over to Cancer Care Nepal to support patient treatment",
  ],
  guests: thisYearGuests,
  organizers: ["Infinite Cares"],
  contactPersons: ["Dijup Tuladhar", "Lijala Shrestha"],
};

export const getInviteMessage = (friendName?: string, currentUrl?: string) => {
  const friend = friendName?.trim() || "Friend";
  const url = currentUrl || "https://pinkwalk.github.io";
  return `Hi ${friend}! 🌸\n\nPinkWalk 2026 successfully concluded on ${thisYearEvent.dateNote} (${thisYearEvent.date}) with over 1,000 participants walking for breast cancer awareness!\n\n📍 Route: ${thisYearEvent.route.startLabel} to ${thisYearEvent.route.endLabel} (${thisYearEvent.distance})\n\nThank you for supporting breast cancer survivors and spreading awareness! 💕\n\nRead the press release & event summary: ${url}/press-release`;
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
    type: "Hospital",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuhOx10oq8gPP0T7cRzQZsnS0z_XrPXkJdu6T-ayDkTWDhn2o7pFGomXe&s=10",
  },
  {
    label: "ISS Pvt. Ltd.",
    type: "Audio/Visual",
    logo: issLogo,
    href: "https://www.isssoundz.com",
  },
  {
    label: "Novala Biotech",
    type: "Diagnostics",
    logo: novalaLogo,
    href: "https://www.novala.com.np",
  },
  {
    label: "The max Foundation",
    type: "Care",
    logo: themaxLogo,
    href: "https://www.themaxfoundation.org",
  },
  {
    label: "The Kathmandu Post",
    type: "Media",
    logo: tkpLogo,
    href: "https://kathmandupost.com",
  },
  {
    label: "Neembu Fizz",
    type: "Beverage",
    logo: neembuLogo,
  },
  {
    label: "Pathao Nepal",
    type: "Mobility",
    logo: pathaoLogo,
    href: "https://pathao.com/np/",
  },
  {
    label: "World of Women Magazine",
    type: "Magazine",
    logo: wowLogo,
    href: "https://wownepal.com.np",
  },
  {
    label: "Esewa",
    type: "Payment",
    logo: esewaLogo,
    href: "https://esewa.com.np",
  },
  {
    label: "Happy Minds",
    type: "Mental Health",
    logo: happymindsLogo,
    href: "https://www.facebook.com/happymind.health",
  },
  {
    label: "H2O Drinking Water",
    type: "Hydration",
    logo: h2oLogo,
  },
  {
    label: "QFX Cinemas",
    type: "Multiplex",
    logo: qfxLogo,
    href: "https://www.qfxcinemas.com",
  },
  {
    label: "One Pasal",
    type: "Ecommerce",
    logo: onepasalLogo,
    href: "https://onepasal.com",
  },
  {
    label: "CAMS",
    type: "Clinical",
    logo: camsLogo,
    href: "https://camsnepal.com",
  },
  {
    label: "NET TV",
    type: "Promotion",
    logo: nettvLogo,
    href: "https://nettv.com.np",
  },
  {
    label: "Taal Nrityabhumi",
    type: "Cultural",
    logo: taalLogo,
  },
  {
    label: "Bajra Nasah Khala",
    type: "Cultural",
    logo: bajraLogo,
  },
  {
    label: "Jhigu newa baajan Khala",
    type: "Cultural",
    logo: jhiguLogo,
  },
  {
    label: "Smriti",
    type: "Moment",
    logo: smritiLogo,
    href: "https://smritipatra.com",
  },
  {
    label: "Jeevee",
    type: "Shopping",
    logo: jeeveeLogo,
    href: "https://jeevee.com",
  },
  {
    label: "UNO",
    type: "Rewards",
    logo: unoLogo,
    href: "https://jeevee.com",
  },
  {
    label: "Le Monal",
    type: "Confectionery",
    logo: lemonalLogo,
    href: "https://lemonalchocolates.com",
  },
  {
    label: "Himalayan Java",
    type: "Caffeine",
    logo: javaLogo,
    href: "https://himalayanjava.com",
  },
  {
    label: "Crayons Corp",
    type: "Appreciation",
    logo: crayonsLogo,
    href: "https://www.crayonscorp.com",
  },
];

export const supporters: LinkItem[] = [
  // { label: "Miss Universe Nepal 2023" },
  // { label: "Center for American Medical Specialists" },
  // { label: "Ask Foundation" },
  {
    label: "Kathmandu Metropolitan City",
    logo: kathmanduLogo,
    href: "https://kathmandu.gov.np",
  },
  {
    label: "Lalitpur Metropolitan City",
    logo: lalitpurLogo,
    href: "https://lalitpurmun.gov.np",
  },
  {
    label: "Nepal Cancer Survivor's Society",
    logo: necassLogo,
    href: "https://www.necass.org.np",
  },
  {
    label: "Hakha Tole Samrakshan Samiti",
    logo: hakhaLogo,
  },
  {
    label: "Mangal Tol Sudhar Sangh",
    logo: mangalLogo,
  },
];

export const newsCoverage2026: LinkItem[] = [
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://sarokartvnews.com/?p=132123",
    note: "Sarakar TV News",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://www.kathmandupati.com/news/walk/430997/",
    note: "Kathmandu Pati",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://www.madhyantar.com/samachar/165350",
    note: "Madhyantar",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ का लागि दर्ता खुल्यो, असोज १७ गते काठमाडौं–ललितपुर पदयात्रा",
    href: "https://aarthikplus.com/2026/09/30/138653/",
    note: "Aarthik Plus",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ का लागि दर्ता खुल्यो, असोज १७ गते काठमाडौं–ललितपुर पदयात्रा",
    href: "https://corporatekhabar.com/pinkwalk/",
    note: "Corporate Khabar",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ का लागि दर्ता खुला",
    href: "https://arthasanjal.com/194726",
    note: "Artha Sanjal",
    publish: "9/30/2026",
  },
  {
    label: "स्तन क्यान्सरविरुद्ध पिंकवाक, सहभागिताका लागि दर्ता खुला",
    href: "https://arthadabali.com/2026/09/30/94412",
    note: "Artha Dabali",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://hamroartha.com/news/136209",
    note: "Hamro Artha",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://kendrabindu.com/health/560013/",
    note: "Kendrabindu",
    publish: "9/30/2026",
  },
  {
    label: "Registration Opens for PinkWalk 2026",
    href: "https://arthapranali.com/2026/09/36070/",
    note: "Artha Pranali",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ का लागि दर्ता खुल्यो",
    href: "https://www.deshkonews.com/archives/277316",
    note: "Deshko News",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ का लागि दर्ता खुल्यो",
    href: "https://www.hulaksanchar.com/2026/09/30/17/122420/",
    note: "Hulak Sanchar",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ का लागि दर्ता खुल्यो",
    href: "https://instakhabar.com/news/74384/",
    note: "Insta Khabar",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६",
    href: "https://www.arthaplus.com/posts/13210",
    note: "Artha Plus",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://sanchardabali.com/posts/33893",
    note: "Sanchar Dabali",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://equitynepal.com/2026/10/01/103833/",
    note: "Nepal Today",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://www.ajakoartha.com/story/145649",
    note: "Ajako Artha",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://dainiki.com/422712/",
    note: "Dainiki",
    publish: "9/30/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://www.lokpath.com/story/907996/",
    note: "Lok Path",
    publish: "9/30/2026",
  },
  {
    label: "स्तन क्यान्सरविरुद्धको ‘पिंकवाक २०२६’ मा दर्ता खुला",
    href: "https://www.diyopost.com/10/168346/",
    note: "Diyo Post",
    publish: "9/30/2026",
  },
  {
    label: "स्तन क्यान्सरविरुद्धको ‘पिंकवाक २०२६’ मा दर्ता खुला",
    href: "https://onlinetvnepal.com/2026/10/216197/",
    note: "Diyo Post",
    publish: "9/30/2026",
  },
  {
    label: "‘पिंकवाक २०२६’ का लागि दर्ता खुला, असोज १७ गते बसन्तपुरदेखि पाटनसम्म पदयात्रा हुने",
    href: "https://www.reportersnepal.com/2026/10/1254330/",
    note: "Diyo Post",
    publish: "9/30/2026",
  },
  {
    label: "PinkWalk 2026 being organized for breast cancer awareness",
    href: "https://www.onlinekhabar.com/2026/09/2018207/pink-walk-2026-being-organized-for-breast-cancer-awareness",
    note: "Online Khabar",
    publish: "9/15/2026",
  },
  {
    label: "PinkWalk 2026 to bring community together for breast cancer awareness & support",
    href: "https://english.makalukhabar.com/pinkwalk-2026-to-bring-community-together-for-breast-cancer-awareness-support/",
    note: "Makalu Khabar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://kendrabindu.com/health/555687/",
    note: "Kendrabindu",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक-२०२६’ आयोजना हुँदै",
    href: "https://www.kathmandupati.com/news/brest-cancer-2/429280/",
    note: "Kathmandu Pati",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://biznessnews.com/posts/56365",
    note: "Bizness News",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://equitynepal.com/2026/09/16/101871/",
    note: "Equity Nepal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://newsinnepal.com/2026/09/16/12/33912/",
    note: "News In Nepal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://corporatesamachar.com/2026/09/85363/",
    note: "Corporate Samachar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.corporatenepal.com/story/286678",
    note: "Corporate Nepal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.prabhabonline.com/detail/106269",
    note: "Prabhab Online",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://corporatekhabar.com/breast-cancer-awareness/",
    note: "Corporate Khabar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.souryaonline.com/2026/09/732618.html",
    note: "Sourya Online",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://aarthiknews.com/news/127406/-pinkwalk-2026--is-being-organized-on-october/",
    note: "Aarthik News",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://kharibot.com/news-details/200994/2026-09-16",
    note: "Kharibot",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.deshkonews.com/archives/275301",
    note: "Deshko News",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.ktmvoice.com/news/118240.html/",
    note: "KTM Voice",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.arthatantra.com/2026/09/16/231849/",
    note: "Arthatantra",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://nayasadak.com/details/70567",
    note: "Naya Sadak",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://kalikakhabar.com/s-tn-k-yan-sr-schetnaka-lagi-pinkwak-2026-aayojna-hundai/",
    note: "Kalika Khabar",
    publish: "9/15/2026",
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
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.madhyantar.com/samachar/165350",
    note: "Madhyantar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.news24nepal.com/detail/13734",
    note: "News24 Nepal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://np.ictframe.com/pink-walk-breast-cancer-awareness/",
    note: "ICT Frame",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.diyopost.com/09/167221/",
    note: "Diyo Post",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://arthakagaj.com/news/52512638",
    note: "Artha Kagaj",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://nagariknews.nagariknetwork.com/health/pink-walk-2026-being-organized-for-breast-cancer-awareness-28-24.html",
    note: "Nagarik News",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://annapurnapost.com/story/507679/",
    note: "Annapurna Post",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://deshsanchar.com/2026/09/16/1228539/",
    note: "Desh Sanchar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://arthasanjal.com/192762",
    note: "Artha Sanjal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.nayapatrikadaily.com/news-details/204784/2026-09-16",
    note: "Nayapatrika Daily",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://aarthikvoice.com/health/pink-walk",
    note: "Aarthik Voice",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://dainiki.com/421077/",
    note: "Dainiki",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.samadhannews.com/2026/09/16/151504/",
    note: "Samadhan News",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://notebazar.com/news/2026/09/16/167805/",
    note: "NoteBazar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.eaarthik.com/2026/09/161418/",
    note: "Eaarthik",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://nepalraibar.com/posts/298882",
    note: "Nepal Raibar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://arthabazar.com/133738",
    note: "Arthabazar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.thahakhabar.com/detail/308788",
    note: "Thaha Khabar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://insurancekhabar.com/pinkwalk-2026-to-raise-awareness-about-breast-cancer/",
    note: "Insurance Khabar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://clickmandu.com/2026/09/491857.html",
    note: "Clickmandu",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.reportersnepal.com/2026/09/1248060/",
    note: "Reporters Nepal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://instakhabar.com/news/73215/",
    note: "Insta Khabar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://bizkhabar.com/263633",
    note: "Bizkhabar",
    publish: "9/15/2026",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://arthapranali.com/2026/09/35224/",
    note: "Artha Pranali",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://baahrakhari.com/detail/501546",
    note: "Baahrakhari",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://aarthikplus.com/2026/09/16/138054/",
    note: "Aarthik Plus",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.samajikweekly.com/health/74921/",
    note: "Samajik Weekly",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://healthbani.com/2026/09/13224/news/",
    note: "Health Bani",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.samacharpati.com/samaj/487334.html",
    note: "Samacharpati",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://lokaantar.com/story/328975/2026/9/16/market/pinkwalk-",
    note: "Lokaantar",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://abcnews.com.np/%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%A8-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%B8%E0%A4%B0-%E0%A4%B8%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%E0%A4%95%E0%A4%BE-%E0%A4%B2/",
    note: "ABC News",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://hamroartha.com/news/135799",
    note: "Hamro Artha",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.lokpath.com/story/906142/",
    note: "Lokpath",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://www.capitalnepal.com/detail/85595",
    note: "Capital Nepal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://sunaulonepal.com/content/420052",
    note: "Sunaulo Nepal",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://khabarhub.com/2026/16/1025012/",
    note: "Khabarhub",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
    href: "https://shilapatra.com/detail/194974",
    note: "Shilapatra",
    publish: "9/15/2026",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://english.himalayapost.com/archives/12619",
    note: "Himalaya Post",
    publish: "9/15/2026",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://bizmandu.com/content/20260917161745.html",
    note: "Bizmandu",
    publish: "9/15/2026",
  },
  {
    label: "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    href: "https://www.ukeraa.com/news/detail/179984/",
    note: "Ukeraa",
    publish: "9/15/2026",
  },
  {
    label: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक’ आयोजना हुँदै",
    href: "https://nepalkhabar.com/economy/corporate/287361-2026-9-18-16-30-35",
    note: "Nepalkhabar",
    publish: "9/15/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://www.kathmandupati.com/news/walk/430997/",
    note: "Kathmandupati",
    publish: "9/31/2026",
  },
  {
    label: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
    href: "https://sarokartvnews.com/?p=132123",
    note: "Sarokar Online",
    publish: "9/31/2026",
  },
  {
    label: "एक हजारभन्दा बढीको सहभागितामा सम्पन्न भयो ‘पिंकवाक २०२६’",
    href: "https://corporatekhabar.com/pinkwalk-2026/",
    note: "Corporate Khabar",
    publish: "10/3/2026",
  },
  {
    label: "पिंकवाक २०२६ मा एक हजारभन्दा बढीले गरे सहभागिता",
    href: "https://www.lokpath.com/story/908357/",
    note: "Lokpath",
    publish: "10/3/2026",
  },
  {
    label: "पिंकवाक २०२६ भव्य रुपमा सम्पन्न",
    href: "https://sanchardabali.com/posts/33956",
    note: "Sanchar Dabali",
    publish: "10/3/2026",
  },
  {
    label: "पिंकवाक २०२६ भव्य रुपमा सम्पन्न",
    href: "https://www.arthaplus.com/posts/13239",
    note: "Arthaplus",
    publish: "10/3/2026",
  },
  {
    label: "पिंकवाक २०२६ भव्य रुपमा सम्पन्न",
    href: "https://www.ajakoartha.com/story/145725",
    note: "Ajako Artha",
    publish: "10/3/2026",
  },
  {
    label: "PinkWalk 2026 concludes with participation of over a thousand participants",
    href: "https://arthapranali.com/2026/10/36279/",
    note: "Arthapranali",
    publish: "10/3/2026",
  },
  {
    label: "पिंकवाक २०२६ भव्य रुपमा सम्पन्न",
    href: "https://www.arthikpati.com/content/2026/10/04/148208",
    note: "ArthikPati",
    publish: "10/3/2026",
  },
  {
    label: "एक हजारभन्दा बढीको सहभागितामा सम्पन्न भयो ‘पिंकवाक २०२६’",
    href: "https://equitynepal.com/2026/10/04/104158/",
    note: "Equity Nepal",
    publish: "10/4/2026",
  },
  {
    label: "एक हजारभन्दा बढीको सहभागितामा ‘पिंकवाक २०२६’ सम्पन्न",
    href: "https://dainiki.com/423018/",
    note: "Dainiki",
    publish: "10/4/2026",
  },
  {
    label: "पिंकवाक २०२६ भव्य रुपमा सम्पन्न, एक हजारभन्दा बढी सहभागी",
    href: "https://himalayapost.com/archives/749",
    note: "Himalaya Post",
    publish: "10/4/2026",
  },
  {
    label: "एक हजारभन्दा बढीको सहभागितामा सम्पन्न भयो ‘पिंकवाक २०२६’",
    href: "https://nepalraibar.com/posts/299614",
    note: "Nepal Raibar",
    publish: "10/4/2026",
  },
  {
    label: "एक हजारभन्दा बढीको सहभागितामा सम्पन्न भयो ‘पिंकवाक २०२६’",
    href: "https://www.sarokaronline.com/?p=134913",
    note: "Sarokar Online",
    publish: "10/4/2026",
  },
  {
    label: "‘पिंकवाक २०२६’ : एक हजारभन्दा बढी सहभागी, क्यान्सर राेगीले सामान्य जीवनयापन गर्न सम्भव !",
    href: "https://www.arthadabali.com/2026/10/04/94558",
    note: "Artha Dabali",
    publish: "10/4/2026",
  },
];

export const newsCoverage2023: LinkItem[] = [
  {
    label: "A walkathon for breast cancer awareness",
    href: "https://kathmandupost.com/art-culture/2023/09/28/a-walkathon-for-breast-cancer-awareness",
    note: "The Kathmandu Post",
    publish: "9/28/2023",
  },
  {
    label: "A walk for breast cancer support and awareness",
    href: "https://kathmandupost.com/art-culture/2023/10/01/a-walk-for-breast-cancer-support-and-awareness",
    note: "The Kathmandu Post",
    publish: "10/01/2023",
  },
  {
    label: "स्तन क्यान्सर जागरूकताका लागि शनिबार 'वाकाथन' हुने",
    href: "https://ekantipur.com/market/2023/09/27/a-walkathon-will-be-held-on-saturday-for-breast-cancer-awareness-41-35.html",
    note: "eKantipur",
    publish: "9/27/2023",
  },
  {
    label: "स्तन क्यान्सरबारे सचेतनाका लागि वाकाथुन — Good Morning Nepal",
    href: "https://www.youtube.com/watch?v=kE_rFTSKRQ0",
    note: "Kantipur TV",
    publish: "9/27/2023",
  },
  {
    label:
      "PINK WALK किन र के का लागि ? के Breast cancer पुरुषलाई पनि हुन सक्छ् त ?",
    href: "https://www.youtube.com/watch?v=jljr1gbr2v0",
    note: "Prime TV",
    publish: "10/10/2023",
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
