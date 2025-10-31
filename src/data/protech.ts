export interface ProductData {
  slug: string
  name: string
  short: string
  image: string
  long: string
}

export const protechProducts: ProductData[] = [
  {
    slug: 'tpo-membran',
    name: 'TPO Membran',
    short: 'Termoplastik poliolefin esaslı, uzun ömürlü çatı su yalıtım örtüsü.',
    image: '/products/tpo.png',
    long: `
      <h3>TPO Membran</h3>
      <p>TPO membran, termoplastik poliolefin ham maddesinden üretilen teknolojik çatı su yalıtım örtüsüdür.
      Standart homojen modelinin yanında farklı uygulama alanları için polyester donatılı, ekstra yansıtma yüzeyli
      ve keçe lamineli olarak üretilebilmektedir.</p>
      <ul>
        <li>Toksik ve sağlığa zararlı madde içermez, çevre dostudur.</li>
        <li>Poliolefin yapısı sayesinde yüksek dayanıklılık ve elastikiyet sunar.</li>
        <li>Isı yansıtıcı yapısı ile enerji tasarrufu sağlar.</li>
        <li>Her türlü hava koşuluna ve UV ışınlarına karşı yüksek dirençlidir.</li>
      </ul>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Zorlu hava koşullarına maruz kalan çatıların su yalıtımı</li>
        <li>Çelik ve beton çatılar, kubbeler</li>
        <li>Teras ve otopark çatılar</li>
        <li>Hafif metal çatılar</li>
      </ul>
    `
  },
  {
    slug: 'su-tutucu-bant',
    name: 'PVC Su Tutucu Bant',
    short: 'Beton birleşim yerlerinde su sızdırmazlığı sağlayan PVC esaslı malzeme.',
    image: '/products/su.png',
    long: `
      <h3>PVC Waterstop (Su Tutucu Bant)</h3>
      <p>Farklı zamanlarda dökülen betonların birleşim yerlerinde sızdırmazlık sağlamak amacıyla kullanılan PVC esaslı malzemedir.
      Özellikle suyun sürekli bulunduğu veya yeraltı su seviyesinin altında kalan yapılarda su geçirimsizliğini sağlar.</p>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Su depoları, sulama kanalları, göletler, barajlar, yüzme havuzları</li>
        <li>İsale tünelleri, rıhtımlar, temeller, istinat duvarları</li>
        <li>Endüstriyel yapılar, tüneller ve viyadükler</li>
      </ul>
    `
  },
  {
    slug: 'pvc-geomembran',
    name: 'PVC Geomembran',
    short: 'Dayanıklı, esnek ve uzun ömürlü PVC esaslı su yalıtım örtüsü.',
    image: '/products/pvc.jpg',
    long: `
      <h3>PVC Geomembran</h3>
      <p>Poli-Vinil-Clorur (PVC) esaslı, iklim ve hava koşullarına dayanıklı uzun ömürlü su yalıtım malzemesidir.</p>
      <ul>
        <li>Farklı kalınlık, renk ve formatlarda üretilebilir.</li>
        <li>Yumuşak ve kolay şekil alır; her türlü yapıya uygulanabilir.</li>
        <li>Delinme ve bitki köklerine karşı yüksek mukavemete sahiptir.</li>
        <li>-40°C ile +80°C aralığında çalışabilir, yanmaz ve korozyona dayanıklıdır.</li>
      </ul>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Bina temel, çatı, teras ve otopark yalıtımları</li>
        <li>Baraj, tünel, kanal ve gölet projeleri</li>
        <li>Arıtma tesisi, içme suyu deposu ve havuzlar</li>
        <li>Metro ve demir yolu tünelleri</li>
      </ul>
    `
  },
  {
    slug: 'geocell',
    name: 'GEOCELL',
    short: 'Eğimli alanlarda toprak kaybını önleyen hücresel dolgu sistemi.',
    image: '/products/geocell.png',
    long: `
      <h3>GEOCELL</h3>
      <p>Yüksek yoğunluklu polietilenden üretilmiş üç boyutlu, petek dokulu hücresel dolgu malzemesidir.
      Eğimli yüzeylerde toprak kaybını engeller, drenajı kolaylaştırır ve taşıma gücünü artırır.</p>
      <ul>
        <li>Delikli yapısı drenajı kolaylaştırır.</li>
        <li>Doğal dolgu malzemesiyle ekonomik çözümler sağlar.</li>
        <li>Taşıma gücünü artırarak çökmeleri önler.</li>
        <li>Su ve rüzgâr erozyonuna karşı koruma sağlar.</li>
      </ul>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Demir yolu, kara yolu, hava limanı projeleri</li>
        <li>Zayıf zemin ıslahı</li>
        <li>Eğimli alanlarda erozyon kontrolü</li>
        <li>Sulama kanalları, istinat duvarı dolguları</li>
      </ul>
    `
  },
  {
    slug: 'polietilen-geomembran',
    name: 'Polietilen Geomembran',
    short: 'Yüksek mukavemetli, kimyasal dayanımı yüksek su yalıtım malzemesi.',
    image: '/products/polıetılen.png',
    long: `
      <h3>Polietilen Geomembran</h3>
      <p>Polietilen ham maddenin katkılarla şekillendirilmesiyle elde edilen yüksek yoğunluklu su yalıtım malzemesidir.
      Kimyasallara ve UV ışınlarına karşı dayanıklıdır, yırtılma ve delinmelere karşı son derece dirençlidir.</p>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Katı ve sıvı atık depolama sahaları</li>
        <li>Gölet, su kanalı ve tarımsal havuzlar</li>
        <li>Bina temelleri, perde duvarlar, tüneller</li>
        <li>Hidroelektrik santraller, gübre çukurları, maden sahaları</li>
      </ul>
    `
  },
  {
    slug: 'geotekstil',
    name: 'Geotekstil',
    short: 'Filtre, drenaj ve ayırma amaçlı uzun ömürlü sentetik tekstil malzemesi.',
    image: '/products/geotekstil.png',
    long: `
      <h3>Geotekstiller</h3>
      <p>Polipropilen ve polyester elyafın sık iğneleme ve ısıl işlemle üretilmesiyle elde edilen malzemedir.
      Filtre, drenaj, ayırma ve koruma amacıyla kullanılır.</p>
      <ul>
        <li>Asit, deniz suyu ve bakterilere dayanıklıdır.</li>
        <li>UV ışınlarına dayanıklıdır, uzun ömürlüdür.</li>
        <li>Zeminleri ayırma ve koruma görevini üstlenir.</li>
        <li>Geomembran altına serilerek kök dayanımı sağlar.</li>
      </ul>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Katı/sıvı atık alanları, yollar, tüneller</li>
        <li>Temeller, bahçeler, teraslar</li>
        <li>Gölet ve baraj uygulamaları</li>
      </ul>
    `
  },
  {
    slug: 'geogrid',
    name: 'Geogrid',
    short: 'Yüksek çekme dayanımlı polimer donatılı zemin güçlendirme malzemesi.',
    image: '/products/geogrid.png',
    long: `
      <h3>Geogrid</h3>
      <p>Yüksek çekme ve düşük sünme özellikli, kare veya dikdörtgen boşluklu polimer malzemedir.
      Zemin güçlendirme ve erozyon kontrolü uygulamalarında kullanılır.</p>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Erozyon kontrolü</li>
        <li>Kara ve demir yolu dolgu güçlendirmeleri</li>
        <li>Toprak kaymasını önleme</li>
        <li>Geoduvar yapımı ve eğimli bölgelerde depolama alanları</li>
      </ul>
    `
  },
  {
    slug: 'epdm-geomembran',
    name: 'EPDM Geomembran',
    short: 'Kauçuk esaslı, yüksek elastikiyetli ve UV dayanımlı geomembran.',
    image: '/products/epdm.png',
    long: `
      <h3>EPDM Geomembran</h3>
      <p>Etilen, propilen ve dien monomerin reaksiyonu ile elde edilen kauçuk geomembrandır.
      UV ışınlarına, yüksek ısıya ve yıpratıcı dış etkenlere karşı dayanıklıdır.</p>
      <ul>
        <li>-40°C ila +120°C sıcaklıklara dayanır.</li>
        <li>Yüksek elastikiyet ve uzun ömür sağlar.</li>
        <li>Dış etkilere ve kimyasallara karşı dirençlidir.</li>
      </ul>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Çatı, teras, kubbe, yangın havuzları</li>
        <li>Sulama kanalları, göletler ve su depoları</li>
        <li>Sıvı atık depolama alanları</li>
      </ul>
    `
  },
  {
    slug: 'drenaj-levhasi',
    name: 'Drenaj Levhası',
    short: 'HDPE esaslı, toprak altı koruma ve su yalıtım malzemesi.',
    image: '/products/drenaj.png',
    long: `
      <h3>Drenaj Levhası</h3>
      <p>Yüksek yoğunluklu polietilenden (HDPE) üretilen kabarcıklı levhadır.
      Yapı ile zemin arasında hava boşluğu oluşturur, basıncı azaltır ve suyun drenajını sağlar.</p>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Bodrum ve perde duvarlar</li>
        <li>Zeminler, otoparklar, çatı terasları</li>
        <li>Toprak altı su basıncına maruz kalan alanlar</li>
      </ul>
    `
  },
  
  {
    slug: 'geonet',
    name: 'Geonet (Drenaj Kompozit)',
    short: 'Basınca dayanıklı, sıvı ve gaz tahliyesi sağlayan drenaj malzemesi.',
    image: '/products/geonet.png',
    long: `
      <h3>Geonet (Drenaj Kompozit)</h3>
      <p>Basınca dayanıklı 3D yapısı sayesinde sıvı ve gaz tahliyesi sağlar.
      HDPE esaslı olup bir veya iki yüzü geotekstille lamine edilir.</p>
      <ul>
        <li>Filtre görevi görür, drenaj kanallarının tıkanmasını önler.</li>
        <li>Yüksek akış kapasitesi ve basınç dayanımı sağlar.</li>
      </ul>
      <h4>Kullanım Alanları</h4>
      <ul>
        <li>Kara ve demir yolları, katı atık sahaları</li>
        <li>Bina temelleri ve tüneller</li>
      </ul>
    `
  }
]
