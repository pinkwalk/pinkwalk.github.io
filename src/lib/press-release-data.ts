export type PressReleaseContent = {
  lead: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
  quote?: {
    text: string;
    author: string;
    title: string;
  };
  highlights?: string[];
};

export type PressRelease = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  isoDate: string;
  location: string;
  author: string;
  category: "Announcement" | "Partnership" | "Event Report";
  summary: string;
  content: PressReleaseContent;
  nepaliContent?: {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    author: string;
    summary: string;
    content: PressReleaseContent;
  };
  mediaContact: {
    name: string;
    organization: string;
    email: string;
    location: string;
  };
};

export const pressReleases: PressRelease[] = [
  {
    id: "pinkwalk-2026-official-announcement",
    title:
      "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    subtitle:
      "Organized by Infinite Cares in collaboration with Cancer Care Nepal, taking place on October 3, 2026 (Ashoj 17, 2083) at 6:00 AM from Basantapur to Mangal Bazaar, Lalitpur.",
    date: "September 15, 2026",
    isoDate: "2026-09-15",
    location: "Kathmandu, Nepal",
    author: "Infinite Cares & PinkWalk 2026 Committee",
    category: "Announcement",
    summary:
      "PinkWalk 2026, organized by Infinite Cares in collaboration with Cancer Care Nepal, takes place on October 3, 2026 (Ashoj 17, 2083) from Kathmandu Durbar Square (Basantapur) to Patan Durbar Square (Mangal Bazaar).",
    content: {
      lead: "KATHMANDU, NEPAL — September 15, 2026 — PinkWalk 2026, a community awareness initiative aimed at raising awareness about breast cancer, highlighting the importance of early detection, and expressing solidarity with individuals and families affected by cancer, is set to take place on Ashoj 17, 2083 (October 3, 2026) at 6:00 AM in Kathmandu.",
      sections: [
        {
          heading: "Route and Participants",
          paragraphs: [
            "Organized by Infinite Cares in collaboration with Cancer Care Nepal, PinkWalk 2026 will begin at Kathmandu Durbar Square in Basantapur and conclude at Patan Durbar Square in Mangal Bazaar, Lalitpur.",
            "The event is expected to bring together healthcare professionals, cancer survivors and affected families, representatives from various organizations and partner institutions, press as well as members of the general public.",
          ],
        },
        {
          heading: "Promoting Early Detection and Social Support",
          paragraphs: [
            "Breast cancer can be treated more effectively when detected at an early stage. PinkWalk 2026 aims to encourage regular health checkups, early detection, timely treatment, and greater awareness within the community. The initiative will also highlight the importance of social and emotional support for individuals and families going through cancer treatment and recovery.",
            "Speaking on behalf of Infinite Cares, Dijup Tuladhar who leads the unit, informed that PinkWalk is intended to be more than just a walk, describing it as a collective campaign of awareness, hope, courage, and solidarity.",
          ],
        },
        {
          heading: "Organizing Partners and Sponsors",
          paragraphs: [
            "PinkWalk 2026 is being organized by Infinite Cares in partnership with Cancer Care Nepal, National Hospital and Cancer Center, ISS Sound, Novala Biotech, Pathao Nepal, Esewa, Happy minds and WOW (World of Women), with support from the Nepal Cancer Survivors Society, Kathmandu Metropolitan City and Lalitpur Metropolitan City.",
            "Owing to tremendous success of the first Pinkwalk in 2023, with over 600 participants having completed walk from Naraynchaur, Naxal to Swayambhu, the initiative continues its commitment to promoting breast cancer awareness, early detection, community participation, and support for people affected by cancer.",
          ],
        },
        {
          heading: "About Infinite Cares & Cancer Care Nepal",
          paragraphs: [
            "Infinite Cares is a community initiative under the Corporate Social Responsibility (CSR) efforts of Infinite Software Services Nepal Pvt. Ltd., the Nepal-based software IT services center of Infinite Computer Solutions, a multinational technology services and digital engineering company, with more than 600 professionals in Nepal. Beyond technology and business, Infinite is committed to creating a positive impact in society through various CSR and community initiatives. PinkWalk 2026 is one such initiative, reflecting Infinite’s commitment to building a healthier, more inclusive, and sustainable society while raising awareness and supporting important social causes.",
            "Cancer Care Nepal is a non-profit organization dedicated to cancer awareness, prevention, early detection, and patient support across Nepal. We work alongside hospitals, health professionals, communities, and donors so that no one is denied information, screening, or care because of where they live or what they can afford.",
          ],
        },
      ],
      quote: {
        text: "PinkWalk is not just a walk; it is a collective expression of awareness, hope, courage, and solidarity. Our goal is to create an environment where people can talk openly about breast cancer, understand the importance of early detection, and encourage the community to stand beside individuals and families affected by cancer. We invite everyone to participate in PinkWalk 2026 and help make this campaign a meaningful success.",
        author: "Dijup Tuladhar",
        title: "Lead, Infinite Cares",
      },
      highlights: [
        "Event Date: Ashoj 17, 2083 (October 3, 2026)",
        "Time: 6:00 AM",
        "Route: Kathmandu Durbar Square (Basantapur) → Patan Durbar Square (Mangal Bazaar, Lalitpur)",
        "Organizers: Infinite Cares in collaboration with Cancer Care Nepal",
        "Official Website: https://pinkwalk.github.io/",
      ],
    },
    nepaliContent: {
      title: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
      subtitle:
        "असोज १७ गते शनिवार (अक्टोबर ३, २०२६) बिहान ६ बजे बसन्तपुरदेखि मंगलबजारसम्म पदयात्रा हुने",
      date: "३० भदौ २०८३",
      location: "काठमाडौं, नेपाल",
      author: "इन्फिनिट केयर्स तथा पिंकवाक २०२६ समिति",
      summary:
        "स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि, प्रारम्भिक पहिचानको महत्वबारे जानकारी फैलाउने तथा क्यान्सर प्रभावित व्यक्ति र परिवारप्रति ऐक्यबद्धता जनाउने उद्देश्यले ‘पिंकवाक २०२६’ आयोजना हुने भएको छ।",
      content: {
        lead: "काठमाडौं, ३० भदौ २०८३ — स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि, प्रारम्भिक पहिचानको महत्वबारे जानकारी फैलाउने तथा क्यान्सर प्रभावित व्यक्ति र परिवारप्रति ऐक्यबद्धता जनाउने उद्देश्यले ‘पिंकवाक २०२६’ आयोजना हुने भएको छ।",
        sections: [
          {
            heading: "पदयात्रा मार्ग र सहभागीहरू",
            paragraphs: [
              "इन्फिनिट केयर्सले क्यान्सर केयर नेपालसँगको सहकार्यमा आयोजना गर्न गइरहेको पिंकवाक आगामी असोज १७ गते शनिवार (अक्टोबर ३, २०२६), बिहान ६ बजे शुरु हुनेछ। यस अन्तर्गत सहभागीहरूले बसन्तपुरस्थित काठमाडौं दरबार स्क्वायरदेखि ललितपुरको मंगलबजारस्थित पाटन दरबार स्क्वायरसम्म पदयात्रा गर्नु हुनेछ।",
              "पिंकवाकमा स्वास्थ्यकर्मी, क्यान्सरबाट निको भएका व्यक्ति तथा प्रभावित परिवार, विभिन्न संघसंस्था, साझेदार संस्था, सञ्चारकर्मी तथा सर्वसाधारणको सहभागिता रहने आयोजकले जनाएको छ।",
            ],
          },
          {
            heading: "प्रारम्भिक पहिचान र सामाजिक सहयोग",
            paragraphs: [
              "स्तन क्यान्सर समयमै पहिचान गर्न सके उपचार प्रभावकारी हुने भएकाले नियमित स्वास्थ्य परीक्षण, प्रारम्भिक पहिचान र समयमै उपचारका विषयमा समुदायमा सचेतना फैलाउनु कार्यक्रमको प्रमुख उद्देश्य रहेको आयोजकको भनाइ छ। साथै, क्यान्सर उपचार तथा पुनःस्थापनाको क्रममा रहेका व्यक्ति र परिवारलाई सामाजिक तथा भावनात्मक सहयोग आवश्यक रहेको सन्देश पनि कार्यक्रममार्फत प्रवाह गरिनेछ।",
              "इन्फिनिट केयर्सका तर्फबाट दिजुप तुलाधर इकाई प्रमुखले पिंकवाकलाई केवल पदयात्रामा सीमित नभई सचेतना, आशा, साहस र ऐक्यबद्धताको सामूहिक अभियानका रूपमा अघि बढाउन खोजिएको बताउनुभयो।",
            ],
          },
          {
            heading: "आयोजक, साझेदार तथा विगतको अनुभव",
            paragraphs: [
              "पिंकवाक २०२६ क्यान्सर केयर नेपाल, नेशनल अस्पताल तथा क्यान्सर सेन्टर, आईएसएस साउन्ड, नोभाला बायोटेक, पठाओ नेपाल, इसेवा, ह्याप्पी माइन्डस्, WOW (World of Women), साझेदारीमा आयोजना हुँदैछ भने नेपाल क्यान्सर सर्भाइभर्स सोसाइटी, काठमाडौँ महानगरपालिका तथा ललितपुर महानगरपालिकाको सहयोग रहेको छ।",
              "पिंकवाकको पहिलो संस्करण २०८० असोजमा सम्पन्न भएको थियो जसमा ६०० भन्दा बढी सहभागीहरूले स्तन क्यान्सर सम्बन्धी जानकारी दिने सामाग्रीका साथ नारायण चौर नक्सालदेखि स्वयम्भुसम्मको पदयात्रा सम्पन्न गरेर भव्यरुपमा सफल बनाउनु भएको थियो । यस अभियानको दोस्रो संस्करणले पनि स्तन क्यान्सरसम्बन्धी सचेतना, प्रारम्भिक पहिचान, सामुदायिक सहभागिता तथा क्यान्सर प्रभावित व्यक्तिहरूलाई सहयोग गर्ने उद्देश्यलाई निरन्तरता दिएको आयोजकले जनाएको छ।",
            ],
          },
          {
            heading: "इन्फिनिट केयर्स र क्यान्सर केयर नेपालबारे",
            paragraphs: [
              "इन्फिनिट केयर्स इन्फिनिट सफ्टवेयर सर्भिसेज नेपाल प्रा.लि.को सामाजिक उत्तरदायित्व (CSR) सामुदायिक पहलहरूमध्येको अन्तर्गत गरिने एक कार्यक्रम हो । इन्फिनिट सफ्टवेयर सर्भिसेज नेपाल प्रा.लि. बहुराष्ट्रिय आईटी सेवा तथा डिजिटल इन्जिनियरिङ क्षेत्रमा कार्यरत कम्पनी इन्फिनिट कम्प्युटर सोलुसन्सको नेपालस्थित सफ्टवेयर विकास तथा आईटी सेवा केन्द्र हो, जहाँ ६०० भन्दा बढी जनशक्ति कार्यरत छन्। नेपालमा इन्फिनिटले व्यवसाय र प्रविधिसँगै विभिन्न सामाजिक उत्तरदायित्व (CSR) तथा सामुदायिक पहलहरूमार्फत समाजमा सकारात्मक प्रभाव सिर्जना गर्ने उद्देश्यका साथ काम गर्दै आएको छ। पिंकवाक पनि स्वस्थ, समावेशी र दिगो समाज निर्माणमा योगदान पुऱ्याउने यस्तै सामाजिक पहलको एक अभियान हो।",
              "क्यान्सर केयर नेपाल नेपालभर क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि, रोकथाम, प्रारम्भिक पहिचान तथा क्यान्सर प्रभावित बिरामीलाई आवश्यक सहयोग प्रदान गर्ने उद्देश्यले समर्पित गैरनाफामूलक संस्था हो। संस्थाले अस्पताल, स्वास्थ्यकर्मी, समुदाय तथा दातृ निकायहरूसँग सहकार्य गर्दै व्यक्तिको बसोबास गर्ने स्थान वा आर्थिक अवस्थाका कारण क्यान्सरसम्बन्धी आवश्यक जानकारी, स्वास्थ्य परीक्षण तथा उपचारबाट कोही पनि वञ्चित नहोस् भन्ने उद्देश्यका साथ काम गर्दै आएको छ।",
            ],
          },
        ],
        quote: {
          text: "पिंकवाक केवल एउटा पदयात्रा होइन, यो सचेतना, आशा, साहस र ऐक्यबद्धताको सामूहिक अभिव्यक्ति हो। स्तन क्यान्सरका बारेमा खुलेर कुरा गर्ने वातावरण निर्माण गर्नु, प्रारम्भिक पहिचानको महत्व बुझाउनु र क्यान्सरबाट प्रभावित व्यक्ति तथा परिवारको साथमा समुदायलाई उभ्याउनु हाम्रो मुख्य उद्देश्य हो। सबैलाई पिंकवाक २०२६ मा सहभागी भई यस अभियानलाई सफल बनाउन सहयोग गर्न आग्रह गर्दछौं",
          author: "दिजुप तुलाधर",
          title: "इकाई प्रमुख, इन्फिनिट केयर्स",
        },
        highlights: [
          "कार्यक्रम मिति: असोज १७, २०८३ शनिवार (अक्टोबर ३, २०२६)",
          "समय: बिहान ६:०० बजे",
          "पदयात्रा मार्ग: काठमाडौं दरबार स्क्वायर (बसन्तपुर) → पाटन दरबार स्क्वायर (मंगलबजार, ललितपुर)",
          "आयोजक: इन्फिनिट केयर्स (क्यान्सर केयर नेपालसँगको सहकार्यमा)",
          "आधिकारिक वेबसाइट: https://pinkwalk.github.io/",
        ],
      },
    },
    mediaContact: {
      name: "Organizing Committee",
      organization: "PinkWalk Media Desk",
      email: "pinkwalknepal@gmail.com",
      location: "Kathmandu, Nepal",
    },
  },
  // {
  //   id: "cotiviti-pinkwalk-2023-press-release",
  //   title:
  //     "Cotiviti Takes Steps Towards a Healthier Tomorrow: Join the Walkathon for Breast Cancer Awareness",
  //   subtitle:
  //     "Cotiviti Cares (Cotiviti Nepal's CSR Team) announces its inaugural PINKWalk, a walkathon to raise breast cancer awareness and gather funds for Cancer Care Nepal Society.",
  //   date: "September 26, 2023",
  //   isoDate: "2023-09-26",
  //   location: "Kathmandu, Nepal",
  //   author: "Cotiviti Cares (Cotiviti Nepal CSR Team)",
  //   category: "Announcement",
  //   summary:
  //     "Cotiviti Cares announces its inaugural PINKWalk to raise breast cancer awareness and collect funds for Cancer Care Nepal Society. The walkathon takes place on September 30, 2023, from Narayan Chaur to Swayambhu.",
  //   content: {
  //     lead: "KATHMANDU, NEPAL — September 26, 2023 — Cotiviti Cares (Cotiviti Nepal's CSR Team) announces its inaugural PINKWalk, a walkathon to raise breast cancer awareness and gather funds for this significant cause.",
  //     sections: [
  //       {
  //         heading: "Global Context & Urgent Need for Awareness",
  //         paragraphs: [
  //           "Breast cancer is a pressing health concern. 1 out of 8 cancer diagnoses worldwide is breast cancer. As per 2020 data, there were about 2.3 million new cases of breast cancer globally and has resulted in 685,000 deaths. A study by International Agency for Research on Cancer (IARC) has indicated that by 2040 this number will increase by 40% and the death number shall rise up to 50%.",
  //           "Cotiviti Nepal Pvt. Ltd. is a prominent player in the healthcare informatics sector headquartered in the USA and a leading IT company in Nepal. The company's CSR initiatives primarily focus on supporting the community in areas such as health, education, and the environment. Cotiviti is therefore pleased to announce its first-ever walkathon event to promote awareness on breast cancer, a serious health concern.",
  //         ],
  //       },
  //       {
  //         heading: "Community Objectives & Partner Support",
  //         paragraphs: [
  //           "The primary objective of this walkathon, is to enhance awareness of the disease, encourage early detection, provide solidarity to those affected, and raise funds for research, treatment, and support. The donations collected during the walkathon will be directed to the Cancer Care Nepal Society, an associated partner of this event, furthering its efforts to combat this disease and support affected individuals and their families.",
  //           "Participants can register for the event via IMEPay, making it convenient for all to join. Additionally, on-the-spot registration will also be available on the day of the event.",
  //         ],
  //       },
  //       {
  //         heading: "Walkathon Route & Concluding Event",
  //         paragraphs: [
  //           "PinkWalk is set to take place on September 30, 2023, starting at 6:00 AM, and will wind through some of Kathmandu's major landmarks, including Narayan Chaur, Nagpokhari, Kantipath, Sohrakhutte, Shovabhagwati, and Swayambhu. Swayambhu is where the concluding event will take place, featuring several activities planned by Cotiviti Nepal.",
  //           "Cotiviti is committed to making a positive impact on the communities it serves. We are happy to organize this PinkWalk with many partners and sponsors and feel proud to come together as a community for a novel cause. This walkathon welcomes participants from all age groups and walks of life.",
  //         ],
  //       },
  //     ],
  //     highlights: [
  //       "Event Date: September 30, 2023",
  //       "Time: 6:00 a.m. – 10:00 a.m.",
  //       "Location: Starting at Narayan Chaur, Kathmandu",
  //       "Associated Partner: Cancer Care Nepal Society",
  //       "Official Site: https://pinkwalk.github.io/",
  //     ],
  //   },
  //   mediaContact: {
  //     name: "Organizing Committee",
  //     organization: "PinkWalk Media Desk",
  //     email: "pinkwalknepal@gmail.com",
  //     location: "Kathmandu, Nepal",
  //   },
  // },
];
