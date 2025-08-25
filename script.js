const countryList = {
  AED: "🇦🇪 AE",
  AFN: "🇦🇫 AF",
  XCD: "🇦🇬 AG",
  ALL: "🇦🇱 AL",
  AMD: "🇦🇲 AM",
  ANG: "🇳🇱 AN",
  AOA: "🇦🇴 AO",
  ARS: "🇦🇷 AR",
  AUD: "🇦🇺 AU",
  AZN: "🇦🇿 AZ",
  BAM: "🇧🇦 BA",
  BBD: "🇧🇧 BB",
  BDT: "🇧🇩 BD",
  BGN: "🇧🇬 BG",
  BHD: "🇧🇭 BH",
  BIF: "🇧🇮 BI",
  BMD: "🇧🇲 BM",
  BND: "🇧🇳 BN",
  BOB: "🇧🇴 BO",
  BRL: "🇧🇷 BR",
  BSD: "🇧🇸 BS",
  NOK: "🇧🇻 BV",
  BWP: "🇧🇼 BW",
  BYN: "🇧🇾 BY",
  BZD: "🇧🇿 BZ",
  CAD: "🇨🇦 CA",
  CDF: "🇨🇩 CD",
  CHF: "🇨🇭 CH",
  CLP: "🇨🇱 CL",
  CNY: "🇨🇳 CN",
  COP: "🇨🇴 CO",
  CRC: "🇨🇷 CR",
  CUP: "🇨🇺 CU",
  CVE: "🇨🇻 CV",
  CZK: "🇨🇿 CZ",
  DJF: "🇩🇯 DJ",
  DKK: "🇩🇰 DK",
  DOP: "🇩🇴 DO",
  DZD: "🇩🇿 DZ",
  EGP: "🇪🇬 EG",
  ETB: "🇪🇹 ET",
  EUR: "🇪🇺 EU",
  FJD: "🇫🇯 FJ",
  FKP: "🇫🇰 FK",
  GBP: "🇬🇧 GB",
  GEL: "🇬🇪 GE",
  GHS: "🇬🇭 GH",
  GIP: "🇬🇮 GI",
  GMD: "🇬🇲 GM",
  GNF: "🇬🇳 GN",
  GTQ: "🇬🇹 GT",
  GYD: "🇬🇾 GY",
  HKD: "🇭🇰 HK",
  HNL: "🇭🇳 HN",
  HRK: "🇭🇷 HR",
  HTG: "🇭🇹 HT",
  HUF: "🇭🇺 HU",
  IDR: "🇮🇩 ID",
  ILS: "🇮🇱 IL",
  INR: "🇮🇳 IN",
  IQD: "🇮🇶 IQ",
  IRR: "🇮🇷 IR",
  ISK: "🇮🇸 IS",
  JMD: "🇯🇲 JM",
  JOD: "🇯🇴 JO",
  JPY: "🇯🇵 JP",
  KES: "🇰🇪 KE",
  KGS: "🇰🇬 KG",
  KHR: "🇰🇭 KH",
  KMF: "🇰🇲 KM",
  KRW: "🇰🇷 KR",
  KWD: "🇰🇼 KW",
  KZT: "🇰🇿 KZ",
  LAK: "🇱🇦 LA",
  LBP: "🇱🇧 LB",
  LKR: "🇱🇰 LK",
  LRD: "🇱🇷 LR",
  LSL: "🇱🇸 LS",
  LYD: "🇱🇾 LY",
  MAD: "🇲🇦 MA",
  MDL: "🇲🇩 MD",
  MGA: "🇲🇬 MG",
  MKD: "🇲🇰 MK",
  MMK: "🇲🇲 MM",
  MNT: "🇲🇳 MN",
  MOP: "🇲🇴 MO",
  MUR: "🇲🇺 MU",
  MVR: "🇲🇻 MV",
  MWK: "🇲🇼 MW",
  MXN: "🇲🇽 MX",
  MYR: "🇲🇾 MY",
  MZN: "🇲🇿 MZ",
  NAD: "🇳🇦 NA",
  NGN: "🇳🇬 NG",
  NIO: "🇳🇮 NI",
  NPR: "🇳🇵 NP",
  NZD: "🇳🇿 NZ",
  OMR: "🇴🇲 OM",
  PAB: "🇵🇦 PA",
  PEN: "🇵🇪 PE",
  PGK: "🇵🇬 PG",
  PHP: "🇵🇭 PH",
  PKR: "🇵🇰 PK",
  PLN: "🇵🇱 PL",
  PYG: "🇵🇾 PY",
  QAR: "🇶🇦 QA",
  RON: "🇷🇴 RO",
  RSD: "🇷🇸 RS",
  RUB: "🇷🇺 RU",
  RWF: "🇷🇼 RW",
  SAR: "🇸🇦 SA",
  SBD: "🇸🇧 SB",
  SCR: "🇸🇨 SC",
  SDG: "🇸🇩 SD",
  SEK: "🇸🇪 SE",
  SGD: "🇸🇬 SG",
  SLL: "🇸🇱 SL",
  SOS: "🇸🇴 SO",
  SRD: "🇸🇷 SR",
  SZL: "🇸🇿 SZ",
  THB: "🇹🇭 TH",
  TJS: "🇹🇯 TJ",
  TMT: "🇹🇲 TM",
  TND: "🇹🇳 TN",
  TRY: "🇹🇷 TR",
  TTD: "🇹🇹 TT",
  TWD: "🇹🇼 TW",
  TZS: "🇹🇿 TZ",
  UAH: "🇺🇦 UA",
  UGX: "🇺🇬 UG",
  USD: "🇺🇸 US",
  UYU: "🇺🇾 UY",
  UZS: "🇺🇿 UZ",
  VEF: "🇻🇪 VE",
  VND: "🇻🇳 VN",
  VUV: "🇻🇺 VU",
  YER: "🇾🇪 YE",
  ZAR: "🇿🇦 ZA",
  ZMW: "🇿🇲 ZM",
  ZWL: "🇿🇼 ZW",
};


const amount = document.querySelector("#amount");
const fromCntry = document.querySelector("#from");
const toCntry = document.querySelector("#to");
const exchangeBtn = document.querySelector("#exchange-btn");
const result = document.querySelector(".result");
const exchangeIcon = document.querySelector("#exchange-icon")

window.addEventListener("DOMContentLoaded", () => {
  for (let currencyCode in countryList) {
    let option1 = document.createElement("option");
    option1.value = currencyCode.toLowerCase();
    option1.innerText = currencyCode;
    fromCntry.appendChild(option1);
    if (currencyCode === "PKR") option1.selected = true;

    let option2 = document.createElement("option");
    option2.value = currencyCode.toLowerCase();
    option2.innerText = currencyCode;
    toCntry.appendChild(option2);
    if (currencyCode === "USD") option2.selected = true;
  }
});

exchangeIcon.addEventListener("click", () => {
  let temp = fromCntry.value;
  fromCntry.value = toCntry.value;
  toCntry.value = temp;
});


exchangeBtn.addEventListener("click", async () => {
  let amountVal = parseFloat(amount.value);
  let fromVal = fromCntry.value.toLowerCase();
  let toVal = toCntry.value.toLowerCase();

  if (isNaN(amountVal) || amountVal <= 0) {
    result.innerText = "Enter a valid amount.";
    return;
  }

  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromVal}.json`;

  try {
    let res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    let data = await res.json();
    console.log("API response →", data);

    let rate = data[fromVal][toVal];
    if (!rate) {
      result.innerText = `Conversion not available for ${fromVal.toUpperCase()} → ${toVal.toUpperCase()}`;
      return;
    }

    let finalAmount = amountVal * rate;

    result.innerText = `${amountVal} ${fromVal.toUpperCase()} = ${finalAmount.toFixed(2)} ${toVal.toUpperCase()} 
    (1 ${fromVal.toUpperCase()} = ${rate.toFixed(2)} ${toVal.toUpperCase()})`;
  } catch (error) {
    console.error("Fetch error:", error);
    result.innerText = "Something went wrong.";
  }
});
