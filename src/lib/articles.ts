export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  keywords: string[];
  sections: ArticleSection[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const articles: Article[] = [
  {
    slug: "duvar-kagidinizi-kendiniz-yapin",
    title: "Duvar Kağıdınızı Kendiniz Yapın: Adım Adım Uygulama Rehberi",
    description:
      "Evde duvar kağıdı uygulaması için ölçü, yüzey hazırlığı, yapıştırıcı, desen hizası ve son kontroller. Dijital duvar kağıdı ve klasik rulo için güvenli adımlar.",
    publishDate: "2026-03-23",
    readTime: "12 dk",
    keywords: ["duvar kağıdı", "dijital duvar kağıdı", "duvar kağıdı uygulaması"],
    sections: [
      {
        heading: "Ölçü ve sipariş: hatanın önüne geçin",
        paragraphs: [
          "Duvar kağıdı uygulamasında en sık yapılan hata, ölçü eksikliği veya tek duvara göre genelleme yapmaktır. Her duvarın enini ve boyunu ayrı ayrı ölçün; tavan–duvar birleşiminde milimetrik farklar bile son şeritte problem çıkarabilir.",
          "Priz, anahtar, klima sini, kolon ve niş gibi unsurları çizim üzerinde işaretlemek, dijital duvar kağıdı gibi geniş panel siparişlerinde desen hizasını korumak için şarttır. Ölçüleri not defterine oda adıyla yazmak, uygulama günü karışıklığı önler.",
          "Sipariş vermeden önce üreticinin veya tedarikçinin önerdiği fire oranını okuyun. Desen tekrarı (rapport) varsa, metrajı rapporta göre yukarı yuvarlamak gerekir.",
        ],
        bullets: [
          "Toplam metrajı bulduktan sonra en az %10 genel fire payı ekleyin.",
          "Tavan yüksekliği duvardan duvara değişiyorsa en yüksek noktaya göre hesap yapın.",
          "Sipariş öncesi tüm ölçüleri ikinci bir kişiyle çapraz kontrol edin.",
        ],
      },
      {
        heading: "Yüzey hazırlığı: tutunmanın temeli",
        paragraphs: [
          "Temiz, kuru, sağlam ve yeterince düz bir yüzey olmadan profesyonel sonuç beklemek zordur. Kabaran eski boyayı, gevşek sıvaları ve yağlı lekeleri temizleyin; gerekirse ince macun ve zımpara ile pürüzsüz bir tabaka oluşturun.",
          "Emici yüzeylerde uyumlu bir astar, yapıştırıcının düzgün kurumasını ve duvar kağıdının kenarlardan sökülmesini kolaylaştırır. Astar seçiminde duvar kağıdı türü ve yapıştırıcı üreticisinin teknik föyünü dikkate alın.",
          "Yeni alçı veya çimento yüzeylerinde nem oranı düşene kadar beklemek ve kapalı ortamda gerekirse nem ölçümü yapmak uzun vadede kabarma riskini azaltır.",
        ],
      },
      {
        heading: "Araçlar, sıra ve çalışma ortamı",
        paragraphs: [
          "Plaka makası veya keskin bıçak, düz sapan veya lazer şakul, sünger rulo, yumuşak spatula, mikrofiber bez ve uygun kaplar işi hızlandırır. Metrekareyi büyük alanlarda iskele veya güvenli platform kullanımını planlayın.",
          "Oda sıcaklığı ve hava akışı, yapıştırıcının kuruma süresini etkiler. Kapı ve pencereleri draughtan koruyun; aşırı sıcak veya çok nemli günlerde kuruma süreleri değişebilir.",
        ],
        bullets: [
          "İşe başlamadan elektrik priz kapaklarını sökün veya maskeleyin.",
          "Yapıştırıcıyı üreticinin belirttiği dinlenme süresiyle kullanın.",
        ],
      },
      {
        heading: "Yapıştırma ve ek yerlerini yönetme",
        paragraphs: [
          "İlk şeridi düz bir referans çizgisine göre dik yerleştirmek tüm duvarın hizasını belirler. Sonraki şeritlerde desen takibini her ekte kontrol edin; dijital duvar kağıdında panel numaraları varsa sıraya kesinlikle uyun.",
          "Hava kabarcıklarını rulo ile merkezden dışa doğru nazikçe sıkın. Taşan yapıştırıcıyı gecikmeden nemli bezle temizleyerek desen yüzeyine sirayet etmesini engelleyin.",
          "Köşe ve tavan birleşimlerinde fazla gerdirmeden, elastik malzemeye zarar vermeden düzgün kesim yapın. Köşe içlerinde küçük kılcal çizikler ileride kalkma olarak büyüyebilir.",
        ],
      },
      {
        heading: "Son kontrol ve bakım önerisi",
        paragraphs: [
          "Uygulama bittikten sonra odayı bir süre havalandırın; yapıştırıcı tam kurumadan mobilya yaslamayın veya intensif temizlik yapmayın.",
          "Kuruma sürecinde sıcak hava üfleme cihazını doğrudan duvar kağıdına tutmaktan kaçının; ani kuruma eklerde gerilim yaratabilir.",
        ],
      },
    ],
  },
  {
    slug: "dijital-duvar-kagidi-secim-rehberi",
    title: "Dijital Duvar Kağıdı Seçim Rehberi: Mekana Uygun Deseni Bulun",
    description:
      "Dijital duvar kağıdı seçerken oda işlevi, gün ışığı, desen ölçeği ve renk psikolojisi. Salon, yatak odası ve çalışma alanı için karar verme rehberi.",
    publishDate: "2026-03-21",
    readTime: "11 dk",
    keywords: ["dijital duvar kağıdı", "duvar kağıdı seçimi", "mekana uygun duvar kağıdı"],
    sections: [
      {
        heading: "Mekanın kullanım amacıyla başlayın",
        paragraphs: [
          "Salonda sosyalleşme ve televizyon izleme, yatak odasında dinlenme, çalışma köşesinde ise odaklanma beklenir. Bu nedenle duvar kağıdı seçerken yalnızca görsele değil, gün içindeki kullanım yoğunluğuna da odaklanın.",
          "Dijital duvar kağıdı, yüksek çözünürlüklü baskı sayesinde fotoğraf, illustration veya özel desenle mekâna güçlü bir tema kazandırır. Yoğun desenli bir seçim için önce mobilya ve zemin nötr mü değerlendirin; aksi halde görsel yük artabilir.",
          "Çocuklu veya evcil hayvanlı evlerde temizlenebilir yüzey ve dayanıklı malzeme önceliği, estetik kadar pratiklik sağlar.",
        ],
      },
      {
        heading: "Işık yönü, cephe ve renk sıcaklığı",
        paragraphs: [
          "Doğal ışığı az alan kuzey cepheli odalarda açık krem, bej veya soğuk gri tonları mekânı ferah gösterebilir. Güney cephede güçlü güneş alan salonlarda çok açık tonlar bazen soluk görünebilir; bu durumda kontrollü doygunluk taşıyan desenler daha dengelidir.",
          "Yapay aydınlatmanın rengi (ılık beyaz, gün ışığı vb.) duvar kağıdı tonunu akşam saatlerinde değiştirir. Numuneyi hem gündüz hem akşam lambası altında değerlendirmek yanlış hayal kırıklığını önler.",
        ],
        bullets: [
          "Kuzey cephe: krem, bej, açık gri ve düşük kontrastlı desenler.",
          "Güney cephe: toprak, zeytin ve kontrollü vurgu renkleri.",
          "Dar koridor: küçük ölçekli motif veya dikey hafif çizgi etkisi.",
        ],
      },
      {
        heading: "Desen ölçeği ve odanın en–boy oranı",
        paragraphs: [
          "Büyük ölçekli motif dar alanda baskın görünür; küçük ölçekli desen geniş salonda “çok tekrar ediyor” hissi yaratabilir. Tavan yüksekliği düşükse yatay geçişli veya sakin desenler tavanı sıkıştırmaz.",
          "Tek duvarda büyük desen (vurgu duvarı), diğer yüzeylerde düz boya veya düz renk duvar kağıdı kombinasyonu dengeyi korur.",
        ],
      },
      {
        heading: "Uzun ömürlü ve zamansız seçim",
        paragraphs: [
          "Trend bir desen kısa sürede sıkılabilir; mobilya değişimlerine uyum sağlayan nötr tabanlı desenler uzun yıl memnuniyet sunar.",
          "Dijital duvar kağıdı siparişinde üretim toleransı ve renk parti farkı konularını tedarikçiyle netleştirin; özellikle ek sipariş gerektiren büyük projelerde parti numarası önemlidir.",
        ],
      },
    ],
  },
  {
    slug: "duvar-kagidi-renk-uyumu-nasil-yapilir",
    title: "Duvar Kağıdı Renk Uyumu Nasıl Yapılır?",
    description:
      "Mobilya, zemin, tavan ve aydınlatma ile duvar kağıdı renk uyumu. 60–30–10 kuralı, sıcak–soğuk ton eşleştirme ve numune testi ile profesyonel sonuç.",
    publishDate: "2026-03-20",
    readTime: "10 dk",
    keywords: ["duvar kağıdı", "dijital duvar kağıdı", "renk uyumu"],
    sections: [
      {
        heading: "60-30-10 kuralı ile dengeli dağılım",
        paragraphs: [
          "İç mimarlıkta sık kullanılan 60-30-10 yaklaşımı, mekânın yaklaşık %60’ını ana renk, %30’unu ikincil renk, %10’unu vurgu rengine ayırmayı önerir. Duvar kağıdı genelde ana veya ikincil katmanda yer alır; halı ve koltuk kumaşı ile çakışıp çakışmadığını bu çerçevede kontrol edin.",
          "Dijital duvar kağıdı çok renkli ve hareketli olduğunda, diğer yüzeylerde tek bir “köprü rengi” seçip tüm aksesuarlarda tekrar etmek düzen hissi verir.",
        ],
      },
      {
        heading: "Ahşap, metal ve zeminle uyum",
        paragraphs: [
          "Ceviz ve meşe gibi sıcak ahşaplarda toprak, kiremit ve zeytin tonları doğal uyum sağlar. Soğuk gri zemin ve saten metal aksesuarlarla birlikte düşünüyorsanız, duvar kağıdında çok sıcak turuncu tabanlar yerine griye çalan nötrler daha uyumlu olabilir.",
          "Halı desenli ve renkli ise duvar daha sakin kalmalıdır; aksi durumda iki büyük yüzey birbiriyle yarışır.",
        ],
        bullets: [
          "Açık meşe mobilya + pastel desenli duvar kağıdı: yumuşak atmosfer.",
          "Koyu antrasit mobilya + açık fonlu desen: derinlik ve kontrast.",
          "Krom detay + düşük doygun desen: modern çizgi.",
        ],
      },
      {
        heading: "Monokromatik ve komplementer stratejiler",
        paragraphs: [
          "Monokromatik palet (aynı rengin tonları) sakin ve “yüksek bütünlük” verir. Komplementer (zıt spektrum) vurgularda ise tek duvarda güçlü bir renk, diğerlerinde nötr kullanmak göz yormaz.",
          "Renk körlüğü veya ekran farkı nedeniyle dijital görsel ile gerçek baskı arasında ton farkı olabilir; nihai kararı fiziksel numune ile verin.",
        ],
      },
      {
        heading: "Numune ve gün–gece testi",
        paragraphs: [
          "Aynı duvar kağıdı örneği kuzey ve güney duvara, farklı saatlerde farklı görünebilir. Mümkünse A4 veya rulo numuneyi birkaç gün aynı duvarda tutup sabah–öğle–akşam gözlemleyin.",
        ],
      },
    ],
  },
  {
    slug: "dijital-duvar-kagidi-ile-kucuk-odalar-buyuk-gorunsun",
    title: "Dijital Duvar Kağıdı ile Küçük Odaları Daha Büyük Göstermenin Yolları",
    description:
      "Küçük mekanda dijital duvar kağıdı ile derinlik, tavan yüksekliği illüzyonu ve ferahlık. Renk, desen ölçeği ve vurgu duvarı stratejileri.",
    publishDate: "2026-03-18",
    readTime: "10 dk",
    keywords: ["dijital duvar kağıdı", "duvar kağıdı", "küçük oda dekorasyonu"],
    sections: [
      {
        heading: "Perspektif ve derinlik etkisi",
        paragraphs: [
          "Uzaklaşan yol, yumuşak orman perspektifi veya hafif geometrik ileri–geri katmanlar küçük odada “derinlik” illüzyonu yaratır. Dijital duvar kağıdı bu tür görsellerde çözünürlük avantajı sağlar.",
          "Çok karışık ve küçük tekrarlı motif gözü yorar; tek odaklı, havadar bir kompozisyon daha geniş algı verir.",
        ],
      },
      {
        heading: "Dikey çizgi ve tavan hissi",
        paragraphs: [
          "İnce dikey çizgiler veya hafif dikey doku, alçak tavanlı odalarda bakışı yukarı çeker. Ancak çizgileri dört duvara yaymak yerine tek duvarda veya köşede kullanmak dengeli kalır.",
          "Tavanı açık renk ve mümkünse mat tutmak, duvar deseninin baskınlığını dengelemeye yardımcı olur.",
        ],
        bullets: [
          "Tek duvarda vurgu; diğer yüzeylerde sakin ton.",
          "Perdeyi tavandan zemine uzatıp storları geniş tutmak dikey süreklilik sağlar.",
          "Parlak lake mobilya yansıması ile desen “çiftlenmesin” diye konum planlayın.",
        ],
      },
      {
        heading: "Açık tonlar ve kontrast sınırlaması",
        paragraphs: [
          "Küçük alanda siyah–beyaz sert kontrast mekânı “keskin” ve dar gösterebilir. Yumuşak kontrastlı, gölgeli geçişli desenler daha geniş algı verir.",
          "Zemin halısı koyuysa duvarları bir ton açık tutmak dengeyi sağlar.",
        ],
      },
      {
        heading: "Mobilya ölçeği ve boşluk bırakma",
        paragraphs: [
          "Küçük odada büyük mobilya ölçeği duvarın neredeyse tamamını kaplıyorsa desenin büyük kısmı görünmez olur. Bu durumda ya mobilyayı sadeleştirin ya da desenin en etkileyici kısmının görünen bölgeye denk gelmesini planlayın.",
        ],
      },
    ],
  },
  {
    slug: "duvar-kagidi-bakimi-ve-uzun-omurlu-kullanim",
    title: "Duvar Kağıdı Bakımı ve Uzun Ömürlü Kullanım İpuçları",
    description:
      "Duvar kağıdı ve dijital duvar kağıdı temizliği, nem kontrolü, leke çıkarma ve onarım. Yüzey tipine göre doğru ürün ve sıklık.",
    publishDate: "2026-03-16",
    readTime: "11 dk",
    keywords: ["duvar kağıdı bakımı", "duvar kağıdı", "dijital duvar kağıdı temizliği"],
    sections: [
      {
        heading: "Rutin temizlik alışkanlığı",
        paragraphs: [
          "Toz, özellikle kabartmalı ve dokulu yüzeylerde birikerek deseni matlaştırır. Haftalık kuru veya çok hafif nemli mikrofiber bezle yukarıdan aşağı silmek yüzeyi çizmeden temizler.",
          "Vakumlama yerine bez tercih etmek, uçların ve köşelerin çekilmesini azaltır. Sert fırçalardan kaçının.",
        ],
        bullets: [
          "Aşındırıcı sünger ve kolonya gibi agresif ürünlerden uzak durun.",
          "Leke anında müdahale edin; kurumuş leke daha zor çıkar.",
        ],
      },
      {
        heading: "Nem, buhar ve mutfak kullanımı",
        paragraphs: [
          "Mutfak ve banyo bitişi duvarlarda yağlı buhar ve sıçrama, kenar bantlarında zayıflamaya yol açabilir. Davlumbaz kullanımı, kısa süreli yoğun buhar ve düzenli havalandırma önemlidir.",
          "Yoğun nemli mevsimlerde iç ortam nemi izlenmeli; sürekli küf riski varsa önce yapısal nem çözümü düşünülmeli, duvar kağıdı semptomu tedavi etmez.",
        ],
      },
      {
        heading: "Silinebilir yüzeyler ve üretici önerisi",
        paragraphs: [
          "“Silinebilir” etiketi her üründe aynı dayanımı garanti etmez. Temizlik öncesi üreticinin izin verdiği deterjan türü ve sürtünme limitini okuyun.",
          "Önce görünmeyen köşede küçük deneme yaparak renk veya yüzey değişimi olup olmadığını kontrol edin.",
        ],
      },
      {
        heading: "Küçük onarım ve yedek parça",
        paragraphs: [
          "Küçük sıyrık veya köşe kalkması erken müdahale ile büyümeden kapatılabilir. Aynı desen ve partiden yedek şerit bulundurmak kesim–yama onarımını mümkün kılar.",
        ],
      },
    ],
  },
  {
    slug: "ofislerde-duvar-kagidi-kullanimi",
    title: "Ofislerde Duvar Kağıdı Kullanımı: Kurumsal ve Modern Çözümler",
    description:
      "Ofis ve çalışma alanlarında duvar kağıdı ve dijital duvar kağıdı ile marka kimliği, verimlilik ve dayanıklılık. Karşılama, açık ofis ve toplantı odası örnekleri.",
    publishDate: "2026-03-14",
    readTime: "12 dk",
    keywords: ["duvar kağıdı", "dijital duvar kağıdı", "ofis dekorasyonu"],
    sections: [
      {
        heading: "Marka kimliğini fiziksel deneyime dönüştürün",
        paragraphs: [
          "Kurumsal renk paleti ve logonun tonlarıyla uyumlu dijital duvar kağıdı, ziyaretçinin ilk izlenimini güçlendirir. Giriş holü, asansör önü veya marka duvarı için yüksek çözünürlüklü baskı net görünüm sağlar.",
          "Çok parlak veya çok hareketli desen, karşılama alanında kısa süreli dikkat çeker; uzun süre bekleyen ziyaretçiler için gözü yormayan denge aranmalıdır.",
        ],
      },
      {
        heading: "Alan tipine göre desen seçimi",
        paragraphs: [
          "Odaklanma gerektiren açık ofis bölgelerinde nötr, düşük kontrastlı desenler; kreatif ekipler için kontrollü bir “enerji” tonu taşıyan vurgu duvarı tercih edilebilir.",
          "Toplantı odasında arka planda desen varsa, ekran yansıması ve kamera görüşü için parlaklık kontrolü yapılmalıdır.",
        ],
        bullets: [
          "Toplantı odası: dikkat dağıtmayan, sakin doku.",
          "Karşılama: marka hikayesini destekleyen güçlü görsel.",
          "Mola alanı: sıcak tonlarla çalışan dostça atmosfer.",
        ],
      },
      {
        heading: "Yoğun trafik ve bakım maliyeti",
        paragraphs: [
          "Koridor ve fotokopi yakını gibi bölgelerde çizilmeye dayanıklı yüzey ve kolay silinebilir seçenekler işletme maliyetini düşürür.",
          "Gece temizlik firması ile uyumlu, kimyasal toleransı yüksek ürün seçimi yerleşik sözleşmelerde sorun çıkarmaz.",
        ],
      },
      {
        heading: "Akustik beklentileri doğru çerçeveleyin",
        paragraphs: [
          "Duvar kağıdı tek başına tam akustik panelli çözüm yerine geçmez; ancak yüzey hareketi ve malzeme katmanı ile yankı hissini hafif destekleyebilir. Asıl akustik ihtiyaç için panel ve tavan çözümleri ayrı planlanmalıdır.",
        ],
      },
    ],
  },
  {
    slug: "oteller-icin-dijital-duvar-kagidi-cozumleri",
    title: "Oteller İçin Dijital Duvar Kağıdı Çözümleri",
    description:
      "Otel lobisi, koridor ve konaklama biriminde dijital duvar kağıdı: konsept bütünlüğü, fire ve parti yönetimi, yüksek trafik dayanımı.",
    publishDate: "2026-03-12",
    readTime: "11 dk",
    keywords: ["dijital duvar kağıdı", "duvar kağıdı", "otel dekorasyonu"],
    sections: [
      {
        heading: "Lobide ilk izlenim ve marka farklılaşması",
        paragraphs: [
          "Konuğun tesisle kurduğu ilk duygusal bağ çoğu zaman lobi ve resepsiyon çevresinde oluşur. Özgün dijital duvar kağıdı tasarımları, yerel kültüre veya marka hikayesine referans vererek oteli rakiplerinden ayırır.",
          "Çift yükseklikli lobilerde panel birleşimlerinin planlanması ve erişim iskelesi uygulaması maliyet kalemini etkiler; proje başında netleştirilmelidir.",
        ],
      },
      {
        heading: "Oda tipleri arasında tutarlı dil",
        paragraphs: [
          "Standart, deluxe ve suit odalarda renk ve motif ailesi korunup yoğunluk değiştirilirse tesis bütünlüğü bozulmaz. Koridor deseni odalara “ön bahşiş” gibi hazırlayıcı bir geçiş sunabilir.",
        ],
        bullets: [
          "Standart oda: dinlendirici nötr taban.",
          "Suit: premium doku ve daha büyük motif ölçeği.",
          "Koridor: yönlendirici, tekrar göz yormayan desen.",
        ],
      },
      {
        heading: "Yangın, hijyen ve düzenlemeler",
        paragraphs: [
          "Ticari projelerde kullanılan malzemelerin yönetmeliklere uygun sınıflandırması ve sertifikaları proje onay süreçlerinde istenir. Bu nedenle tedarikçiyle teknik dokümantasyonu önceden talep edin.",
          "Yüksek el değen yüzeylerde silinebilirlik ve antimikrobiyal iddialar varsa bağımsız test raporlarını sorun.",
        ],
      },
      {
        heading: "Operasyonel dayanıklılık",
        paragraphs: [
          "Bagaj çarpması, temizlik arabası ve vale trafiği lobilerde yüzey yıpranmasını hızlandırır. Uygun yüzey dayanımı ve zamanında yerel onarım protokolü operasyonu destekler.",
        ],
      },
    ],
  },
  {
    slug: "cocuk-odasi-duvar-kagidi-fikirleri",
    title: "Çocuk Odası Duvar Kağıdı Fikirleri: Eğlenceli ve Güvenli Tasarımlar",
    description:
      "Çocuk odası için duvar kağıdı ve dijital duvar kağıdı: yaş gruplarına göre tema, renk psikolojisi, güvenli malzeme ve güncellenebilir tasarım.",
    publishDate: "2026-03-10",
    readTime: "11 dk",
    keywords: ["duvar kağıdı", "dijital duvar kağıdı", "çocuk odası dekorasyonu"],
    sections: [
      {
        heading: "Yaş grubuna göre tema ve ölçek",
        paragraphs: [
          "Bebek ve küçük çocuk döneminde yumuşak pasteller ve sade motifler; okul çağında hobiler, haritalar veya sevilen renkler öne çıkar. Ergenlik öncesi dönemde çocuğun görüşünü almak odanın sahiplenilmesini artırır.",
          "Dijital duvar kağıdı ile isim, sevilen karakter tonunda kişiselleştirme mümkündür; fakat çok modaya bağlı temalar kısa sürede sıkılabilir, bu yüzden “kolay güncellenebilir” vurgu duvarı stratejisi düşünün.",
        ],
      },
      {
        heading: "Renk dengesi ve uyku alanı",
        paragraphs: [
          "Yüksek doygun turuncu veya kırmızı, oyun için uygunken uyku köşesinde fazla uyarıcı olabilir. Uyku alanına daha sakin tonlar, oyun duvarına kontrollü canlılık vermek işlevsel ayrım sağlar.",
        ],
        bullets: [
          "Uyku bölümü: düşük kontrast, mat yüzey.",
          "Oyun duvarı: eğlenceli ve sınırlı alanda yoğun desen.",
          "Çalışma köşesi: dikkat dağıtmayan geometri veya düz ton.",
        ],
      },
      {
        heading: "Malzeme, koku ve temizlik",
        paragraphs: [
          "Çocuk odasında düşük VOC ve üretici bilgilendirmesine göre “çocuk odasına uygun” etiketli ürünler tercih edilmelidir. Kurulum sonrası odayı planlı şekilde havalandırın.",
          "Silinebilir yüzey, pastel boya lekeleri ve parmak izlerinde pratiklik sağlar.",
        ],
      },
      {
        heading: "Güvenli mobilya yerleşimi",
        paragraphs: [
          "Ağır kitaplık ve karyolaları duvar kağıdı vurgu duvarına yaslamadan önce duvara sabitleme ve deprem riskine yönelik önlemler çocuk güvenliği için önceliklidir.",
        ],
      },
    ],
  },
  {
    slug: "duvar-kagidi-trendleri-2026",
    title: "Duvar Kağıdı Trendleri 2026: Öne Çıkan Desen ve Renkler",
    description:
      "2026 duvar kağıdı ve dijital duvar kağıdı trendleri: doğal doku, büyük ölçekli botanik, zamansız toprak paleti ve kişiye özel baskı.",
    publishDate: "2026-03-08",
    readTime: "10 dk",
    keywords: ["duvar kağıdı trendleri", "dijital duvar kağıdı", "duvar kağıdı"],
    sections: [
      {
        heading: "Doğadan ilham: doku ve huzur",
        paragraphs: [
          "Taş, keten, beton ve ahşapın yumuşatılmış yorumları, 2026’da mekâna sakin ama karakterli bir zemin veriyor. Gerçek malzeme kadar bakım istemeyen bu görünümler, özellikle yoğun şehir hayatında tercih ediliyor.",
          "Yeşilin farklı tonları ve botanik çizimler, iç mekân–dış mekân bağını güçlendirir.",
        ],
      },
      {
        heading: "Büyük desenler ve tek duvarda vurgu",
        paragraphs: [
          "Geniş ölçekli çiçek ve yaprak motifleri, tüm odaya yayıldığında baskın olabilir; tek duvarda kullanıldığında ise lüks ve sanatsal bir odak oluşturur.",
        ],
        bullets: [
          "Botanik ve sürdürülebilirlik temalı grafikler.",
          "Yumuşak geometri ve organik formlar.",
          "Toprak, kil, taş ve bitki tonları.",
        ],
      },
      {
        heading: "Dijital baskı ile kişiselleştirme",
        paragraphs: [
          "Standart kataloglardan sıkılan kullanıcılar, kendi fotoğrafı, illüstrasyonu veya mekâna ölçülü tasarımı dijital duvar kağıdı olarak bastırabiliyor. Bu trend özellikle oturma odası ve yatak başı duvarlarında güçleniyor.",
          "Kişiselleştirmede çözünürlük ve renk yönetimi (profil ve kalibrasyon) sonuç kalitesini belirler.",
        ],
      },
      {
        heading: "Trend ile zamansızlığı dengelemek",
        paragraphs: [
          "Modaya tam kapanmak yerine nötr bir taban üzerinde trend vurgusu kullanmak, birkaç yıl sonra yenileme ihtiyacını azaltır.",
        ],
      },
    ],
  },
  {
    slug: "duvar-kagidi-fiyatlarini-etkileyen-faktorler",
    title: "Duvar Kağıdı Fiyatlarını Etkileyen Faktörler",
    description:
      "Duvar kağıdı ve dijital duvar kağıdı fiyatını belirleyen metraj, malzeme sınıfı, baskı çözünürlüğü, özel tasarım, yüzey hazırlığı ve uygulama zorluğu.",
    publishDate: "2026-03-06",
    readTime: "11 dk",
    keywords: ["duvar kağıdı fiyatları", "dijital duvar kağıdı", "duvar kağıdı"],
    sections: [
      {
        heading: "Malzeme sınıfı ve baskı teknolojisi",
        paragraphs: [
          "Vinil, dokulu non-woven veya tekstil tabanlı ürünler farklı dayanım ve fiyat seviyelerinde gelir. Dijital duvar kağıdı için kullanılan mürekkep kalitesi, UV dayanımı ve laminasyon yaşam süresini uzatır.",
          "Aynı görseli düşük çözünürlükte basmak maliyeti düşürür fakat yakından pikselli görünüm riski doğurur.",
        ],
      },
      {
        heading: "Metraj, rapport ve fire",
        paragraphs: [
          "Desen tekrarı yüksek veya panel genişliği standarttan farklı ürünlerde fire oranı artar. Bu doğrudan toplam m² fiyatına yansır.",
          "Niş, kolon ve tavan çıkıntıları uygulama süresini ve hata riskini artırarak işçilik maliyetini yükseltir.",
        ],
        bullets: [
          "Toplam net metrekare + üretici fire önerisi.",
          "Yüzey düzeltme ve astar ihtiyacı.",
          "Yüksek tavan ve iskele gereksinimi.",
        ],
      },
      {
        heading: "Tasarım lisansı ve özel üretim",
        paragraphs: [
          "Telifli sanat eseri veya stok görsel lisansı bazı dijital baskılarda ek kalemdir. Kişiye özel vektör çizim veya renk revizyonu da teklifi etkiler.",
        ],
      },
      {
        heading: "Toplam sahip olma maliyeti",
        paragraphs: [
          "İlk satın alma fiyatı düşük olsa bile sık bakım veya erken yenileme gerektiren ürün uzun vadede pahalı olabilir. Silinebilirlik, kenar dayanımı ve garanti süreleri karşılaştırmada sorulmalıdır.",
        ],
      },
    ],
  },
  {
    slug: "duvar-kagidi-uygulamasinda-sik-yapilan-hatalar",
    title: "Duvar Kağıdı Uygulamasında Sık Yapılan Hatalar ve Çözümleri",
    description:
      "Duvar kağıdı ve dijital duvar kağıdı uygulamasında ölçü, yüzey, yapıştırıcı, desen hizası ve kuruma süreleriyle ilgili yaygın hataların profesyonel çözümleri.",
    publishDate: "2026-03-05",
    readTime: "13 dk",
    keywords: ["duvar kağıdı", "dijital duvar kağıdı", "duvar kağıdı uygulama hataları"],
    sections: [
      {
        heading: "Yanlış ölçü ve yetersiz fire",
        paragraphs: [
          "Maliyeti ve sonuç kalitesini bozan en yaygın sorun, tek duvar ölçüsüyle tüm odayı sipariş etmek veya kapı–pencere düşümünü yanlış yorumlamaktır. Dijital duvar kağıdı büyük panellerde eksik metraj, desen sürekliliğini bölerek tamir edilemez hatalara yol açabilir.",
          "Her duvar için brüt alan hesabını ayrı yapın; kritik eşiklerde ek şerit siparişi ihtimalini değerlendirin.",
        ],
        bullets: [
          "Her duvarı ayrı ölçün, yükseklik farklarını not edin.",
          "Desen rapportu varsa üreticinin önerdiği fireyi uygulayın.",
          "Şerit genişliği ve panel yönünü (dikey/yatay) planlayın.",
        ],
      },
      {
        heading: "Yüzey hazırlığını atlama",
        paragraphs: [
          "Tozlu, yağlı veya nemli duvarda yapıştırıcı tutunmaz; kısa sürede kabarma ve kenar kalkması görülür. Kabaran boya ve gevşek sıvalar mutlaka giderilmelidir.",
          "Emicilik farklı bölgelerde (eski onarım–yeni alçı) yapıştırıcıyı farklı miktarda uygulama veya astar ile dengeleme gerekebilir.",
        ],
      },
      {
        heading: "Yanlış yapıştırıcı veya aşırı/eksik sürme",
        paragraphs: [
          "Her duvar kağıdı aynı yapıştırıcı ile uyumlu değildir. Ağır dokulu ürünlerde güçlü yapıştırıcı; hafif vinilde üretici önerisi farklı olabilir.",
          "Çok kalın sürmek duvara hava kabarcığı, çok ince sürmek ise kenarlarda tutunmama riski doğurur.",
        ],
      },
      {
        heading: "Desen hizası ve sıra disiplini",
        paragraphs: [
          "Panelleri rastgele sırada asmak desen kaymasına neden olur. Numaralı dijital duvar kağıdı setlerinde sıra ve yön talimatlarına harfiyen uyulmalıdır.",
          "Işık geliş yönü gölgelerde ek çizgilerini belirginleştirebilir; ilk paneli ana bakış açısına göre hizalayın.",
        ],
      },
      {
        heading: "Profesyonel plan ve kontrol listesi",
        paragraphs: [
          "Kesim sırası, sandalye–iş platformu konumu ve elektrik kesintisi günü önceden netleştiğinde süre aşımı ve hata azalır.",
        ],
      },
    ],
  },
  {
    slug: "dijital-duvar-kagidi-mi-boya-mi",
    title: "Dijital Duvar Kağıdı mı Boya mı? Karşılaştırmalı Rehber",
    description:
      "Dijital duvar kağıdı ile boya karşılaştırması: estetik çeşitlilik, maliyet, yenileme sıklığı, uygulama süresi ve bakım.",
    publishDate: "2026-03-04",
    readTime: "12 dk",
    keywords: ["dijital duvar kağıdı", "duvar kağıdı", "duvar boyası karşılaştırma"],
    sections: [
      {
        heading: "Estetik ve tema gücü",
        paragraphs: [
          "Düz boya geniş renk yelpazesi sunar ancak fotoğrafik derinlik, manzara veya özel grafik etkisi sağlamaz. Dijital duvar kağıdı bu anlamda “mekânın sanat eseri” rolünü üstlenebilir.",
          "Otel, mağaza veya marka duvarı gibi alanlarda hikâye anlatımı için duvar kağıdı genelde daha güçlüdür.",
        ],
      },
      {
        heading: "Maliyet ve yenileme döngüsü",
        paragraphs: [
          "İlk yatırımda kaliteli boya genellikle daha uygunken, sık renk değişimi yapılan evlerde toplam maliyet zamanla artar. Dayanıklı duvar kağıdı uzun süre aynı görünümü koruyabilir.",
          "Kısmi hasar senaryosunda boya küçük alanı tamir ettirir; duvar kağıdında yama görünürlüğü tasarıma bağlıdır.",
        ],
        bullets: [
          "Boya: hızlı renk değişimi, düzenli tazeleme ihtimali.",
          "Duvar kağıdı: daha uzun görsel sabitlik, tematik güç.",
          "Dijital duvar kağıdı: özel tasarımda premium segment.",
        ],
      },
      {
        heading: "Uygulama süresi ve hazırlık",
        paragraphs: [
          "Boya birden fazla kat ve kuruma süresi gerektirir; duvar kağıdı uygulaması yüzey hazırsa tek günde bitebilir. Ancak duvar kağıdında ölçü ve planlama öncesi daha kritiktir.",
        ],
      },
      {
        heading: "Hangi durumda hangisi?",
        paragraphs: [
          "Vurgu duvarı, tematik çocuk odası veya kurumsal kimlik duvarı hedefleniyorsa dijital duvar kağıdı öne çıkar. Kiracı ve kısa süreli konutta hızlı nötrleşme isteniyorsa mat boya pratik olabilir.",
        ],
      },
    ],
  },
  {
    slug: "duvar-kagidi-olcu-alma-rehberi",
    title: "Duvar Kağıdı Ölçü Alma Rehberi: Hatasız Hesaplama Yöntemi",
    description:
      "Duvar kağıdı ve dijital duvar kağıdı siparişi için metrekare hesabı, rapport, kapı–pencere düşümü, kolon ve fire. Çapraz kontrol formülü.",
    publishDate: "2026-03-03",
    readTime: "12 dk",
    keywords: ["duvar kağıdı ölçü alma", "duvar kağıdı", "dijital duvar kağıdı"],
    sections: [
      {
        heading: "Temel metrekare hesabı",
        paragraphs: [
          "Her düz duvar için en × boy ile alan bulunur; tüm duvarların toplamı brüt ihtiyacı verir. Ölçü birimi olarak metre kullanıp sonucu iki ondalıkla not almak hata payını düşürür.",
          "Kapı ve pencere açıklıklarını tam alandan düşmek maliyeti düşürür; fakat desen hizasında bu açıklıklar yine de kesim ve eşleştirme gerektirdiği için bazı uygulamacılar kısmi fire bırakır.",
        ],
      },
      {
        heading: "Fire oranını neden artırmalısınız?",
        paragraphs: [
          "Kesim artıkları, ilk şerit hizalama denemesi ve köşe dönüşleri fire oluşturur. Rapportlu desenlerde iki şerit arasında “eşleşmeyen” bölüm zorunlu olarak çöpe gidebilir.",
        ],
        bullets: [
          "Düz veya düşük rapport: yaklaşık %8–12 fire.",
          "Büyük tekrarlı desen: %15–20 ve üzeri fire mümkün.",
          "Kırık planlı oda veya çok niş: ek pay zorunlu.",
        ],
      },
      {
        heading: "Kolon, niş ve kırık hat",
        paragraphs: [
          "Kolon ölçüsünü çevreleyerek veya yükselen düzlem gibi ayrı yazarak toplamı kaçırmayın. Alçalı tavan ve lento gibi yapılar ayrı ölçü alanlarını oluşturur.",
          "Dijital duvar kağıdı panellerinde yükseklik tavandan tavana net ölçülmelidir; süpürgelik sonrası görünür yükseklik ile karıştırılmamalıdır.",
        ],
      },
      {
        heading: "Sipariş öncesi son kontrol listesi",
        paragraphs: [
          "Ölçüleri ikinci kişi ile okuyun; özellikle yüksek tavanlarda merdiven kaynaklı yanlış okuma sık görülür.",
          "Üreticiden rollo/panel genişliği ve minimum sipariş bilgisini alın; geniş panel tek parça yükseklik limiti varsa bunu planlayın.",
        ],
      },
    ],
  },
  {
    slug: "salon-icin-duvar-kagidi-fikirleri",
    title: "Salon İçin Duvar Kağıdı Fikirleri: Modern ve Şık Kombinler",
    description:
      "Salon duvar kağıdı ve dijital duvar kağıdı: TV duvarı, kanepesi koltuk uyumu, halı–perde–avize ile renk dengesi ve zamansız seçim.",
    publishDate: "2026-03-02",
    readTime: "13 dk",
    keywords: ["duvar kağıdı", "dijital duvar kağıdı", "salon dekorasyonu"],
    sections: [
      {
        heading: "Vurgu duvarı ile odak oluşturma",
        paragraphs: [
          "TV ünitesi veya kanepe arkası tek duvarda güçlü desen kullanmak salonun “sahnesini” tanımlar. Dört duvara aynı yoğunlukta desen çoğu evde bunaltıcı olur.",
          "Dijital duvar kağıdı ile manzara veya büyük ölçekli çiçekler kullanıyorsanız mobilya ve rafların desenin kritik bölümünü kesmemesine dikkat edin.",
        ],
      },
      {
        heading: "Mobilya tonu ve desen dengesi",
        paragraphs: [
          "Koyu koltuklarla açık fonlu duvar kağıdı veya açık kumaşla orta kontrastlı desen iyi çalışır. Sehpa ve TV ünitesinin ahşabı, duvar kağıdındaki bir ikincil renkle köprülenebilir.",
        ],
        bullets: [
          "Ahşap tonlarıyla toprak paleti.",
          "Modern metal ayak + nötr–gri desen.",
          "Klasik mobilya + yumuşak floral veya damask hissi (ölçek kontrollü).",
        ],
      },
      {
        heading: "Aydınlatma ve parlak yüzeyler",
        paragraphs: [
          "Spot ışıkları desen üzerinde parlama yaratabilir; mat yüzeyli duvar kağıdı veya ışığın açısını ayarlamak rahatsızlığı azaltır.",
          "Gün ışığı salonlarda renkler canlı görünür; lamba altında tekrar değerlendirin.",
        ],
      },
      {
        heading: "Zamansızlık ve trend dengesi",
        paragraphs: [
          "Sadece trend için seçilen çok moda bir desen birkaç sezonda sıkabilir. Nötr tabanda güçlü tek duvar vurgusu, güncelleme ihtiyacını tek yüzeyle sınırlar.",
        ],
      },
    ],
  },
  {
    slug: "yatak-odasi-icin-duvar-kagidi-onerileri",
    title: "Yatak Odası İçin Duvar Kağıdı Önerileri: Huzurlu Mekan Tasarımı",
    description:
      "Yatak odasında duvar kağıdı ve dijital duvar kağıdı: başucu duvarı odak, sakin palet, tekstil uyumu ve ışıkla gece–gün görünümü.",
    publishDate: "2026-03-01",
    readTime: "12 dk",
    keywords: ["duvar kağıdı", "dijital duvar kağıdı", "yatak odası dekorasyonu"],
    sections: [
      {
        heading: "Başucu duvarında odak",
        paragraphs: [
          "Yatak başının arkasındaki duvar, desenli duvar kağıdı için en doğal yerdir; karşı duvarda sakin ton veya düz yüzey uyku için gözü rahatlatır.",
          "Raflı başlık ve mobilier desenin üzerini kapatacaksa motif seçiminde “kayıp alanı” hesaba katın.",
        ],
      },
      {
        heading: "Dinlendirici renk ve düşük uyarım",
        paragraphs: [
          "Kırık beyaz, bej, lavanta, soluk yeşil ve köpük gri gibi tonlar uyku kalitesine katkı sunan sakin paletlerdir. Yüksek kontrast çizgiler uyarıcı olabilir; yine de kişisel tercih ve oda yönü ile denge kurulmalıdır.",
        ],
        bullets: [
          "Düşük kontrastlı motif veya çok hafif doku.",
          "Mat veya saten mat yüzey; gece lambası altında göz kırpmayan.",
          "Ayna ve parlak yüzey yansımasını yatak hizasında sınırlama.",
        ],
      },
      {
        heading: "Tekstil ve halı ile tamamlama",
        paragraphs: [
          "Nevresim, yatak örtüsü ve halı tonlarını duvar kağıdı ile aynı ailede tutmak odayı “toparlama” hissine kavuşturur. Desenli duvar kağıdı seçildiyse tekstilde sade desen tercih edin.",
        ],
      },
      {
        heading: "Numune ve gün–gece gözlemi",
        paragraphs: [
          "Yatak odasında sabah güneşi ve gece başucu lambası duvar kağıdını farklı gösterir; numune birkaç gün duvarınızda kalsın.",
        ],
      },
    ],
  },
];

export const commonFaqs: FaqItem[] = [
  {
    question: "Dijital duvar kağıdı ile klasik duvar kağıdı arasında fark nedir?",
    answer:
      "Dijital duvar kağıdı, yüksek çözünürlüklü baskı teknolojisiyle daha özgün ve kişiselleştirilebilir desenler sunar. Klasik duvar kağıdı ise daha standart desen koleksiyonlarına sahiptir.",
  },
  {
    question: "Duvar kağıdı uygulaması ne kadar sürer?",
    answer:
      "Ortalama bir oda için yüzey hazırlığına bağlı olarak 1 gün içinde uygulama tamamlanabilir. Yüzeyde onarım ihtiyacı varsa süre uzayabilir.",
  },
  {
    question: "Duvar kağıdı silinebilir mi?",
    answer:
      "Ürünün yüzey tipine göre değişir. Çoğu modern duvar kağıdı hafif nemli bez ile silinebilir; sert kimyasal ürünlerden kaçınılmalıdır.",
  },
  {
    question: "Duvar kağıdı fiyatı nasıl hesaplanır?",
    answer:
      "Fiyat; metrekare, malzeme türü, baskı kalitesi ve uygulama zorluğuna göre belirlenir. Net maliyet için doğru ölçü alınması gerekir.",
  },
  {
    question: "Kiralık evde duvar kağıdı kullanılır mı?",
    answer:
      "Evet, doğru astar ve uygun yapıştırıcı ile duvar yüzeyine zarar vermeden uygulama ve söküm mümkündür. Uygulama öncesi yüzey analizi önerilir.",
  },
  {
    question: "Küçük odalar için hangi duvar kağıdı tercih edilmeli?",
    answer:
      "Açık renkler, küçük ölçekli desenler ve perspektif etkili dijital duvar kağıdı seçenekleri küçük odaları daha geniş gösterir.",
  },
  {
    question: "Duvar kağıdı rutubetli duvara uygulanır mı?",
    answer:
      "Rutubet sorunu çözülmeden uygulama önerilmez. Önce nem kaynağı giderilmeli, yüzey kurutulmalı ve ardından duvar kağıdı uygulanmalıdır.",
  },
  {
    question: "Dijital duvar kağıdı kişiye özel üretilebilir mi?",
    answer:
      "Evet, ölçüye ve konsepte özel üretim yapılabilir. Mekana uygun desen, renk ve ölçü optimizasyonu ile özel baskı hazırlanabilir.",
  },
  {
    question: "Duvar kağıdı hangi yüzeylere uygulanmaz?",
    answer:
      "Sürekli nem alan, dökülen ve sağlam olmayan yüzeylere doğrudan uygulama önerilmez. Önce yüzey onarımı, kurutma ve astar yapılmalıdır.",
  },
  {
    question: "Uygulama sonrası duvar kağıdı ne zaman silinmeli?",
    answer:
      "Yapıştırıcının tamamen kuruması için genellikle 48 saat beklemek gerekir. Bu süreden önce yoğun temizlik yapılması tavsiye edilmez.",
  },
  {
    question: "Duvar kağıdı çocuklu evler için uygun mudur?",
    answer:
      "Kolay temizlenebilir ve dayanıklı yüzeyli ürünler tercih edildiğinde çocuklu evlerde de güvenle kullanılabilir. Renk ve desen seçiminde sakin tonlar önerilir.",
  },
  {
    question: "Eski duvar kağıdının üzerine yeni duvar kağıdı uygulanır mı?",
    answer:
      "Teknik olarak bazı durumlarda mümkün olsa da en doğru yöntem eski kaplamayı söküp yüzeyi hazırladıktan sonra yeni uygulama yapmaktır.",
  },
  {
    question: "Duvar kağıdı uygulaması sonrası koku olur mu?",
    answer:
      "Kaliteli malzeme ve doğru yapıştırıcı kullanıldığında koku kısa sürede dağılır. Uygulamadan sonra ortamın düzenli havalandırılması yeterlidir.",
  },
  {
    question: "Dijital duvar kağıdı ne kadar sürede üretilir?",
    answer:
      "Ölçü onayı, desen seçimi ve baskı yoğunluğuna bağlı olarak üretim süresi değişir. Genellikle birkaç iş günü içinde üretim tamamlanır.",
  },
  {
    question: "Küf problemi olan duvara duvar kağıdı yapılır mı?",
    answer:
      "Küf kaynağı çözülmeden uygulama yapılmamalıdır. Önce izolasyon ve yüzey temizliği yapılmalı, sonrasında duvar kağıdı düşünülmelidir.",
  },
  {
    question: "Duvar kağıdı güneşte solar mı?",
    answer:
      "Yüksek güneş alan mekanlarda zamanla ton değişimi olabilir. UV dayanımı yüksek ürünler ve doğru perdeleme ile bu etki minimuma indirilebilir.",
  },
  {
    question: "Duvar kağıdı söküldüğünde duvara zarar verir mi?",
    answer:
      "Doğru astar ve uygun ürünle yapılan uygulamalarda söküm daha kontrollü olur. Yanlış uygulamalarda boya kalkması gibi riskler görülebilir.",
  },
  {
    question: "Metrekare hesabı için profesyonel destek almak gerekir mi?",
    answer:
      "Basit alanlarda kullanıcı ölçüsü yeterli olabilir. Ancak desen devamı, niş ve kolon gibi detaylı yüzeylerde profesyonel ölçülendirme hata riskini azaltır.",
  },
];

export function getAllArticles() {
  return [...articles].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCommonFaqs() {
  return commonFaqs;
}
