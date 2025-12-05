// Client directive removed to allow server-side usage in generateStaticParams

// Export the destinations data to be used across components
export const destinations = [
  {
    name: "Ubud",
    image: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6",
    description: "Cultural heart of Bali, known for its traditional arts and natural beauty.",
    longDescription: "Ubud is the cultural heart of Bali, nestled amidst lush rainforests and terraced rice paddies. It's a haven for artists, yogis, and spiritual seekers. The town is filled with art galleries, craft shops, and traditional markets. Surrounding Ubud, you'll find ancient temples, sacred monkey forests, and some of Bali's most iconic rice terraces.",
    category: "highlight",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39772.680116170624!2d115.2423661501326!3d-8.504273476931687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d739f22c9c3%3A0x54a38afd6b773d1c!2sUbud%2C%20Gianyar%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763642759628!5m2!1sen!2sid",
    attractions: [
      {
        name: "Yoga class",
        description: "Join world-class yoga sessions in serene studios surrounded by nature.",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80"
      },
      {
        name: "Tegalalang Rice Terrace",
        description: "Stunning terraced rice fields showcasing traditional Balinese irrigation system.",
        image: "https://images.unsplash.com/photo-1544644181-851cbc7532ff?"
      },
      {
        name: "Ubud Palace",
        description: "Historical royal palace with beautiful Balinese architecture and cultural performances.",
        image: "https://images.unsplash.com/photo-1708436137498-1b660e94c782?"
      },
      {
        name: "Ubud Market",
        description: "Vibrant traditional market selling local crafts, textiles, and souvenirs.",
        image: "https://images.unsplash.com/photo-1594041764323-023f0a9f367d?"
      },
      {
        name: "Monkey Forest",
        description: "Sacred sanctuary home to over 700 Balinese long-tailed macaques and ancient temples.",
        image: "https://images.unsplash.com/photo-1584695930340-36a30fff17e1?"
      }
    ]
  },
  {
    name: "Seminyak",
    image: "https://images.unsplash.com/photo-1571984405176-5958bd9ac31d?",
    description: "Upscale beach resort area with luxury accommodations, high-end shopping, and fine dining.",
    longDescription: "Seminyak is Bali's most stylish and upscale beach resort area, known for its world-class dining, high-end shopping, and luxury villas. The beach offers beautiful sunsets and a more relaxed atmosphere compared to nearby Kuta. It's the perfect destination for those seeking a sophisticated beach experience with plenty of trendy cafes, designer boutiques, and beach clubs.",
    category: "beach",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.069783910098!2d115.15510920316862!3d-8.689890150252667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246dfe07cc8ff%3A0x5030bfbca82fdd0!2sSeminyak%2C%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763643296941!5m2!1sen!2sid",
    attractions: [
      {
        name: "Restaurant",
        description: "Enjoy world-class dining at Seminyak's renowned restaurants and beach clubs.",
        image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80"
      },
      {
        name: "Sunset Beach (Double Six, Petitenget)",
        description: "Experience breathtaking sunsets at these popular beach spots with vibrant atmosphere.",
        image: "https://images.unsplash.com/photo-1616484093834-e9aa39f160f9?"
      }
    ]
  },
  {
    name: "Canggu",
    image: "https://images.unsplash.com/photo-1546484458-6904289cd4f0?",
    description: "Trendy coastal village with a strong surf culture and vibrant nightlife.",
    longDescription: "Canggu has rapidly transformed from a sleepy coastal village to one of Bali's trendiest destinations. Known for its excellent surf breaks, hipster cafes, and vibrant nightlife, it attracts digital nomads, surfers, and young travelers. The area offers a perfect blend of beach life, rice field views, and contemporary culture with a more laid-back vibe than neighboring Seminyak.",
    category: "beach",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31556.369886994733!2d115.11941637765052!3d-8.639484521124563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23861f4589665%3A0x5030bfbca82fd30!2sCanggu%2C%20Kuta%20Utara%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763643846272!5m2!1sen!2sid",
    attractions: [
      {
        name: "Fins",
        description: "Popular beach club offering great food, drinks, and ocean views in a stylish setting.",
        image: "https://images.unsplash.com/photo-1546484458-6904289cd4f0?"
      },
      {
        name: "Atlas",
        description: "The biggest club in Asia, featuring world-class DJs and an incredible atmosphere.",
        image: "https://images.unsplash.com/photo-1546484458-6904289cd4f0?"
      },
      {
        name: "Nuanu / Luna Beach",
        description: "Artificial beach club offering a unique swimming and relaxation experience.",
        image: "https://images.unsplash.com/photo-1546484458-6904289cd4f0?"
      }
    ]
  },
  {
    name: "Kuta",
    image: "https://images.unsplash.com/photo-1592193771842-4ba215221444?",
    description: "Famous for its long sandy beach, surf-friendly waves, and vibrant nightlife.",
    longDescription: "Kuta is one of Bali's most famous beach destinations, known for its long stretch of golden sand and consistent waves perfect for beginner surfers. As Bali's original tourist hub, it offers a wide range of accommodations, restaurants, and entertainment options. While busier than other areas, Kuta remains popular for its accessibility, affordability, and spectacular sunsets.",
    category: "beach",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63098.14799039508!2d115.13033323972653!3d-8.72623688942257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24699ccf67337%3A0x4030bfbca7d2c00!2sKuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763644139535!5m2!1sen!2sid",
    attractions: [
      {
        name: "The most Beautiful sunset in Bali",
        description: "Experience the legendary Kuta sunset, widely regarded as one of the most spectacular in Bali.",
        image: "https://images.unsplash.com/photo-1592193771842-4ba215221444?"
      }
    ]
  },
  {
    name: "Uluwatu",
    image: "https://images.unsplash.com/photo-1604842937136-1648761a6256?",
    description: "Famous for its stunning cliff-top temple and world-class surf breaks.",
    longDescription: "Perched on Bali's southwestern tip, Uluwatu is renowned for its dramatic clifftop temple, world-class surf breaks, and luxury resorts. The area offers breathtaking ocean views from limestone cliffs that drop straight into the Indian Ocean. Beyond the iconic temple and surfing, Uluwatu has developed into a sophisticated destination with high-end beach clubs, fine dining, and boutique accommodations.",
    category: "highlight",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31540.404802139325!2d115.04894091655977!3d-8.82821888143357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2500429016eff%3A0x77ba338e204b8072!2sUluwatu%2C%20Pecatu%2C%20South%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763644722488!5m2!1sen!2sid",
    attractions: [
      {
        name: "Uluwatu Temple",
        description: "Ancient sea temple perched dramatically on a steep cliff with stunning ocean views.",
        image: "https://images.unsplash.com/photo-1604842937136-1648761a6256?"
      },
      {
        name: "Kecak Dance",
        description: "Traditional Balinese dance performance held at sunset with the ocean as backdrop.",
        image: "https://images.unsplash.com/photo-1720518816836-e351848c5357?"
      },
      {
        name: "Pandawa Beach",
        description: "Hidden white sand beach accessed through impressive limestone cliffs.",
        image: "https://images.unsplash.com/photo-1583402435083-5fff7cbf1c34?"
      },
      {
        name: "Sunday Beach Club",
        description: "Exclusive beach club offering panoramic views, infinity pool, and fine dining.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
      },
      {
        name: "Bingin Beach",
        description: "Secluded beach with crystal clear waters and excellent surfing conditions.",
        image: "https://images.unsplash.com/photo-1518731683836-4e9cce00ba49?"
      }
    ]
  },
  {
    name: "Nusa Dua",
    image: "https://images.unsplash.com/photo-1646715589840-8d33f1e421e7?",
    description: "Upscale enclave known for pristine beaches and luxury resorts.",
    longDescription: "Nusa Dua is Bali's most exclusive and polished resort enclave, home to numerous five-star hotels and pristine beaches. The area features manicured gardens, upscale shopping complexes, and a calm lagoon protected by an offshore reef. Perfect for families and those seeking a more controlled environment, Nusa Dua offers water sports, golf courses, and spa facilities in a secure, gated tourism complex.",
    category: "beach",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44608.669066401715!2d115.1638140381008!3d-8.796728223556787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd242d6feba16fd%3A0x84a7328be1e50953!2sNusa%20Dua%20Beach!5e0!3m2!1sen!2sid!4v1763645241263!5m2!1sen!2sid",
    attractions: [
      {
        name: "Pristine Beaches",
        description: "Enjoy the immaculately maintained white sand beaches with crystal clear waters.",
        image: "https://images.unsplash.com/photo-1609391061565-622f94e736e9?"
      },
      {
        name: "Water Sports Center",
        description: "Try various water activities from jet skiing to parasailing in safe, controlled environments.",
        image: "https://images.unsplash.com/photo-1503856348302-6829f18073f9?"
      }
    ]
  },
  {
    name: "Candidasa",
    image: "https://images.unsplash.com/photo-1604394089644-71c907abe8a2?",
    description: "Quiet coastal town with black sand beaches and traditional Balinese culture.",
    longDescription: "Candidasa offers a tranquil escape on Bali's eastern coast, away from the island's more developed areas. This seaside town is characterized by its laid-back atmosphere, black sand beaches, and proximity to traditional Balinese villages. It serves as an excellent base for exploring eastern Bali's cultural and natural attractions, including ancient temples, water palaces, and traditional villages where time-honored crafts are still practiced.",
    category: "culture",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31567.843577747568!2d115.54124277751856!3d-8.501278814233078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd20f2c802fb12d%3A0x1eb0ffc994219401!2sCandi%20Dasa%2C%20Nyuh%20Tebel%2C%20Manggis%2C%20Karangasem%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763645817311!5m2!1sen!2sid",
    attractions: [
      {
        name: "Goalawah Temple",
        description: "Ancient temple known for its bat cave and spiritual significance to local Balinese.",
        image: "https://images.unsplash.com/photo-1559998560-deb30d24ea50?"
      },
      {
        name: "Black Sand Beach",
        description: "Distinctive volcanic black sand beaches offering unique coastal landscapes.",
        image: "https://images.unsplash.com/photo-1604394089644-71c907abe8a2?"
      },
      {
        name: "Tenganan Village",
        description: "One of Bali's oldest and most preserved traditional villages known for unique crafts.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Lahangan",
    image: "https://images.unsplash.com/photo-1671811805878-a587da969fa7?",
    description: "Home to some of Bali's most iconic temples and breathtaking views.",
    longDescription: "Lahangan is located in eastern Bali and is becoming increasingly popular for its spectacular viewpoints and cultural attractions. The area is home to the famous Lempuyang Temple with its iconic 'Gates of Heaven' that frame Mount Agung perfectly. The surrounding region offers lush landscapes, traditional villages, and some of the most Instagram-worthy photo opportunities in Bali.",
    category: "highlight",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.3025412101547!2d115.63600767532996!3d-8.371871484402849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2017806b570ad%3A0x3b06c78dc76ca3a2!2sLAHANGAN%20SWEET!5e0!3m2!1sen!2sid!4v1763646085155!5m2!1sen!2sid",
    attractions: [
      {
        name: "Lempuyang Temple",
        description: "Ancient temple complex featuring the famous 'Gates of Heaven' with Mount Agung views.",
        image: "https://images.unsplash.com/photo-1671811805878-a587da969fa7?"
      },
      {
        name: "Lahangan Sweet",
        description: "Scenic viewpoint offering panoramic views of Mount Agung and the eastern coastline.",
        image: "https://images.unsplash.com/photo-1657076472431-ae2bf65b2360?"
      },
      {
        name: "Tirta Gangga Temple",
        description: "Beautiful water palace with ornate fountains, gardens, and stone sculptures.",
        image: "https://images.unsplash.com/photo-1655289112327-5b9c0fcd1995?"
      }
    ]
  },
  {
    name: "Amed",
    image: "https://images.unsplash.com/photo-1643706914323-12e73d33ed43?",
    description: "Peaceful fishing village known for excellent snorkeling and diving spots.",
    longDescription: "Amed is a string of traditional fishing villages along Bali's northeastern coast, known for its black sand beaches, excellent snorkeling, and world-class diving sites. The area offers a glimpse into traditional Balinese coastal life, with colorful jukung fishing boats lining the shore. With Mount Agung as a backdrop and the calm waters of the Bali Sea in front, Amed is famous for its spectacular sunrises and relaxed atmosphere.",
    category: "beach",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75109.96739818432!2d115.61429515126522!3d-8.354212265009302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdff7c26aea48b%3A0xe814e752fd17550!2sAmed%20St%2C%20Bunutan%2C%20Abang%2C%20Karangasem%20Regency%2C%20Bali%2080852!5e0!3m2!1sen!2sid!4v1763646162986!5m2!1sen!2sid",
    attractions: [
      {
        name: "The most beautiful sunrise in beaches",
        description: "Experience breathtaking sunrises over the ocean with Mount Agung in the background.",
        image: "https://images.unsplash.com/photo-1726460051574-2ff1bec67b91?"
      },
      {
        name: "Snorkeling and Diving Sites",
        description: "Explore vibrant coral reefs and the famous USS Liberty shipwreck just offshore.",
        image: "https://images.unsplash.com/photo-1516169466977-36c39efd2fd8?"
      }
    ]
  },
  {
    name: "Kintamani",
    image: "https://images.unsplash.com/photo-1623042392888-1f87e36a5b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Volcanic region with stunning mountain views and natural hot springs.",
    longDescription: "Kintamani is a highland area in northeastern Bali dominated by the magnificent Mount Batur and its caldera lake. The region offers some of Bali's most spectacular natural scenery, with panoramic views of the active volcano and the large crescent-shaped lake that fills part of the caldera. Visitors can enjoy cool mountain air, natural hot springs, coffee plantations, and traditional villages that showcase a different side of Balinese culture away from the coastal areas.",
    category: "highlight",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126352.99105882301!2d115.26259234903068!3d-8.24982619197951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1f46fa4effc21%3A0x4030bfbca7d2c20!2sKintamani%2C%20Bangli%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763646399661!5m2!1sen!2sid",
    attractions: [
      {
        name: "Pinggan Village",
        description: "Traditional village offering spectacular views of Mount Batur and morning mist.",
        image: "https://images.unsplash.com/photo-1623042392888-1f87e36a5b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Mount Batur",
        description: "Active volcano offering popular sunrise trekking experiences and stunning views.",
        image: "https://images.unsplash.com/photo-1623042392888-1f87e36a5b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Hot Spring",
        description: "Natural hot springs with therapeutic mineral water heated by volcanic activity.",
        image: "https://images.unsplash.com/photo-1623042392888-1f87e36a5b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Batur Lake",
        description: "Scenic crater lake formed in the caldera of Mount Batur with fishing and water activities.",
        image: "https://images.unsplash.com/photo-1730185716885-55f73ec9af6e?"
      },
      {
        name: "The Most beautiful sunrise in the mountains",
        description: "Witness spectacular sunrise views from the summit of Mount Batur over the entire region.",
        image: "https://images.unsplash.com/photo-1658923951577-6baadafc60c9?"
      }
    ]
  },
  {
    name: "Sanur",
    image: "https://images.unsplash.com/photo-1621148998937-41b84f71826d?",
    description: "Relaxed beach town with a mix of traditional and modern attractions.",
    longDescription: "Sanur is one of Bali's original beach resorts, offering a perfect blend of traditional charm and modern amenities. Unlike the west coast beaches, Sanur faces east, providing beautiful sunrise views over the gentle waters protected by a reef. The beach is lined with a paved promenade perfect for walking or cycling, while the town itself maintains a relaxed, family-friendly atmosphere with a good selection of restaurants, shops, and cultural attractions.",
    category: "beach",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22310.32653300266!2d115.25053603603538!3d-8.69669775769209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b7d35f0b21%3A0x5030bfbca830e40!2sSanur%2C%20Denpasar%20Selatan%2C%20Denpasar%20City%2C%20Bali!5e0!3m2!1sen!2sid!4v1763646852138!5m2!1sen!2sid",
    attractions: [
      {
        name: "Beach",
        description: "Long stretch of calm, shallow water perfect for families and morning strolls.",
        image: "https://images.unsplash.com/photo-1621148998937-41b84f71826d?"
      },
      {
        name: "Icon Mall",
        description: "Modern shopping center with distinctive architecture and various retail options.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Jimbaran",
    image: "https://images.unsplash.com/photo-1677380609643-332961a38bce?",
    description: "Famous for its seafood restaurants on the beach and luxury resorts.",
    longDescription: "Jimbaran is a fishing village and coastal resort area just south of Bali's international airport. The area is renowned for its fresh seafood restaurants that line the beach, where diners can enjoy freshly caught fish with their feet in the sand as the sun sets. Beyond its culinary fame, Jimbaran Bay features a beautiful curved white sand beach, luxury resorts, and a more laid-back atmosphere compared to nearby Kuta and Seminyak.",
    category: "beach",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31543.7398733267!2d115.13937842779507!3d-8.789124978879036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24461fad25023%3A0x111cd5f0bda645dc!2sJimbaran%2C%20South%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763647029222!5m2!1sen!2sid",
    attractions: [
      {
        name: "Beach dinner",
        description: "Enjoy fresh seafood at beachfront restaurants with tables set directly on the sand.",
        image: "https://images.unsplash.com/photo-1628671708587-03934c4cab94?"
      },
      {
        name: "Jimbaran Bay",
        description: "Curved white sand beach with calm waters perfect for swimming and sunbathing.",
        image: "https://images.unsplash.com/photo-1677380609643-332961a38bce?"
      }
    ]
  },
  {
    name: "Bedugul",
    image: "https://images.unsplash.com/photo-1657788781951-d6beac09d66c?",
    description: "Highland region with cool climate, lakes, and botanical gardens.",
    longDescription: "Bedugul is a mountain lake resort area in Bali's central highlands, known for its cool climate and three crater lakes. The region is home to the iconic Ulun Danu Beratan Temple that appears to float on the lake, extensive botanical gardens, and strawberry farms. With its misty mountains, lush forests, and agricultural landscapes, Bedugul offers a refreshing contrast to Bali's tropical beaches and a glimpse into the island's diverse ecosystems.",
    category: "nature",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d150242.17101436114!2d115.04595872902809!3d-8.296258940375601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbedugul!5e0!3m2!1sen!2sid!4v1763647464466!5m2!1sen!2sid",
    attractions: [
      {
        name: "Ulundanu Beratan",
        description: "Iconic water temple that appears to float on Lake Beratan, one of Bali's most photographed sites.",
        image: "https://images.unsplash.com/photo-1657788781951-d6beac09d66c?"
      },
      {
        name: "Wanagiri Hidden Hill",
        description: "Scenic viewpoint with creative photo platforms overlooking twin lakes and mountains.",
        image: "https://images.unsplash.com/photo-1657788781951-d6beac09d66c?"
      },
      {
        name: "Sekumpul Waterfall",
        description: "Magnificent cluster of seven waterfalls surrounded by lush tropical vegetation.",
        image: "https://images.unsplash.com/photo-1556292990-e4f4a36222e5?"
      },
      {
        name: "Banyummala Waterfall",
        description: "Hidden gem waterfall with crystal clear natural pool perfect for swimming.",
        image: "https://images.unsplash.com/photo-1663807612311-868b8cb1be3a?"
      },
      {
        name: "Handara Gate",
        description: "Traditional Balinese gate that has become a popular photo spot for visitors.",
        image: "https://images.unsplash.com/photo-1642990235036-cc5e4c5aa85b?"
      },
      {
        name: "Gitgit Waterfall",
        description: "Easily accessible multi-tiered waterfall surrounded by tropical forest.",
        image: "https://images.unsplash.com/photo-1657788781951-d6beac09d66c"
      },
      {
        name: "Leke-leke Waterfall",
        description: "Secluded waterfall requiring a scenic trek through bamboo forests and rice fields.",
        image: "https://images.unsplash.com/photo-1657788781951-d6beac09d66c"
      }
    ]
  },
  {
    name: "Tabanan",
    image: "https://images.unsplash.com/photo-1584774148943-0116b853332a?",
    description: "Known for its iconic sea temple and beautiful rice terraces.",
    longDescription: "Tabanan regency in southwest Bali is home to some of the island's most iconic cultural and natural attractions. The region is known for the famous Tanah Lot sea temple perched on a rocky outcrop, the UNESCO-listed Jatiluwih rice terraces, and the royal temple of Taman Ayun. Less developed than southern Bali, Tabanan offers visitors a chance to experience traditional rural life, verdant landscapes, and significant cultural sites without the crowds found in more touristy areas.",
    category: "culture",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57886.52407622072!2d115.11297701304356!3d-8.561688029434261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23a5be9804c43%3A0xb7d0c1d30d7b6159!2sTabanan%2C%20Tabanan%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1763647526757!5m2!1sen!2sid",
    attractions: [
      {
        name: "Tanah Lot Temple",
        description: "Iconic sea temple perched on a rock formation, especially beautiful at sunset.",
        image: "https://images.unsplash.com/photo-1553902000-e036b7d05af5?"
      },
      {
        name: "Jatiluwih Rice Terrace",
        description: "UNESCO World Heritage site featuring spectacular terraced rice fields using traditional irrigation.",
        image: "https://images.unsplash.com/photo-1730697897470-0efaee4922de?"
      },
      {
        name: "Taman Ayun",
        description: "Royal water temple with beautiful gardens, moats, and traditional Balinese architecture.",
        image: "https://images.unsplash.com/photo-1584774148943-0116b853332a?"
      }
    ]
  }
];

// Helper function to get a destination by slug (formatted name)
export function getDestinationBySlug(slug) {
  const destinationName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return destinations.find(d => d.name.toLowerCase() === destinationName.toLowerCase()) || null;
}

// Helper function to get destinations by category
export function getDestinationsByCategory(category) {
  return category === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === category);
}

// Helper function to get highlighted destinations
export function getHighlightedDestinations(limit = 3) {
  return destinations
    .filter(dest => dest.category === 'highlight')
    .slice(0, limit);
}
