<template>
  <section class="references">
    <div class="container">
      <div class="head">
        <div>
          <h2>Referanslarımız</h2>
          <p class="desc">
            Yalıtım, altyapı ve endüstriyel tesis projelerinden seçili işler.
          </p>
        </div>
        <span class="count">{{ references.length }} proje</span>
      </div>

      <div class="grid">
        <div
          v-for="(item, i) in references"
          :key="i"
          class="cell"
        >
          <span class="index">{{ i + 1 }}</span>
          <span class="text">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const references = [
  'YAKUP YILDIZ VİLLASI-YENİDOĞAN (ŞİMDİKİ YENİDOĞAN POLİS KARAKOLU)',
  'VELLER TURZ.A.Ş. KONUTU-CENGELKÖY',
  'NURETTİN YEMLİHALİOĞLU OTELİ-SULTANAHMET (ŞİMDİKİ ERESİN OTEL)',
  'KADIKÖY BÖLGESİ ALTYAPI MÜTEFERRİK KANAL İŞİ-İSKİ GENELMÜDÜRLÜĞÜ',
  'İŞ BANKASI DOĞU MARMARA ŞUB..DEPREM HASAR TESPİTLERİ VE RÖLEVELENDİRİLMESİ',
  'MAXİ ALIŞVERİŞ MERKEZİ STATİK PROJELERİ-ÇENGELKÖY',
  'Ø1800 ÇB OLİMPİYAT STADI-ŞAHİNTEPESİ İSALE HATTI',
  'ŞAHİNTEPESİ 20.000 m³ SU DEPOSU',
  'ŞAHİNTEPESİ MANEVRA ODASI',
  'ŞAHİNTEPESİ TERFİ MERKEZİ VE ÇEVRE DÜZENLEMESİ',
  'ECZACIBAŞI KANYON AVM KONUT BLOKLARI ÇELİK İŞLERİ',
  'PHARMAKİM İLAÇ VE DEPOLAMA TESİSLERİ-YENİDOĞAN',
  'EMİN VAFİ KORUSU TURGUT ELTEMUR VİLLASI I(BOĞAZİÇİ ESKİ ESER)',
  'CENGİZ ARISAN YALISI RIHTIMI-BEYKAZ',
  'DÜNYA BANKASI MERSİN AKBELEN 20.000 m³ SU DEPOSU',
  'BAKÜ VEYSELOĞLU HOLDİNG.GIDA DEPOSU',
  'MURİÇ KALIP-TASARIM PLASTİK TUZLA ÜRETİM VE İDARE BİNASI',
  'EKİN KİMYA DİLOVASI DEPOLAMA TESİSLERİ VE İDARE BİNASI',
  'PHARMA TREND İLAÇ ÇATALCA SERBEST BÖLGE DEPOLAMA VE İDARE BİNASI',
  'KOŞUYOLU BİBER CAFE (ŞİMDİKİ STARBUCKS) KABA İNŞAATI',
  'GÜZEL OTO TİC.A.Ş. ÇATALCA SERBEST BÖLGE DEPOLAMA VE İDARE BİNASI 2014',
  'ÇATALCA FERHATPAŞA KONUT İNŞAATI 2015',
  'GÜZEL OTO TİC.A.Ş. ÇATALCA SERBEST BÖLGE DEPOLAMA VE İDARE BİNASI 2017',
  'TAKSİM 360 KONUT PROJESİ 2018',
  'VARYAP MERİDYEN VALE KÖPRÜSÜ,ŞAP VE SAHA BETONLARI 2018',
  'KONUT İNŞAATI - AYDIN 2018',
  'KONUT İNŞAATI - PENDİK 2019',
  'KONUT İNŞAATI - AYDIN 2020',
  'KONUT İNŞAATI - SİLİVRİ 2021',
  'KONUT İNŞAATI - BURSA (KAYI OBA 3-4-5-6-7 ETAP 80.000 m²) 2022 DEVAM EDİYOR'
]
</script>

<style scoped>
:root {
  --brand: #0c2b4d;
  --brand-12: rgba(12, 43, 77, 0.12);
  --brand-08: rgba(12, 43, 77, 0.08);
  --hover: #143c6b;
}

.references {
  background-color: #f6f8fc;
  color: #1f2937;
  padding: 3.5rem 0;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Başlık kısmı */
.head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

h2 {
  color: var(--brand);
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
}

.desc {
  margin: 0.25rem 0 0;
  color: #8a98a9;
  font-size: 1rem;
}

.count {
  background: var(--brand);
  color: #fff;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
}

/* Grid tablo */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--brand-12);
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
}

.cell {
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0.9rem;
  border-right: 1px solid var(--brand-12);
  border-bottom: 1px solid var(--brand-12);
  background: #fff;
  transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
}

.cell:nth-child(3n) {
  border-right: 0;
}

.cell:hover {
  background: #eef2f6;
  box-shadow: 0 6px 16px rgba(12, 43, 77, 0.1);
  transform: translateY(-2px);
}

/* Index numarası */
.index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--brand-08);
  color: var(--brand);
  font-weight: 700;
  font-size: 0.9rem;
}

.text {
  font-weight: 600;
  color: #0c2b4d;
  line-height: 1.35;
}

/* Responsive */
@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cell:nth-child(3n) {
    border-right: 1px solid var(--brand-12);
  }
  .cell:nth-child(2n) {
    border-right: 0;
  }
}

@media (max-width: 576px) {
  .head {
    flex-direction: column;
    align-items: flex-start;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .cell {
    grid-template-columns: 32px 1fr;
    padding: 0.9rem 0.8rem;
  }
  .count {
    align-self: flex-start;
  }
}
</style>
