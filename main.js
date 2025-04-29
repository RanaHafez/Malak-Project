const landingText = {
  ar: {
    title: "الدول العربية",
    text: "الدول العربية هي مجموعة من الدول التي  يمثل فيها العرب الشريحة الأكبر من السكان .تتشارك الدول العربية في اللغة والدين والثقافة والعادات. و تضم 22 دولة جميعهم أعضاء في جامعة الدول العربية. يمتد الوطن العربي من المحيط الأطلسي غربًا إلى الخليج العربي شرقًا، بين قارتي آسيا وأفريقيا. تتميز هذه الدول بتضاريس متنوعة من الصحاري، الهضاب، الجبال والسهول، وتتمتع ايضاً بموارد طبيعية وفيرة و متنوعة .",
  },
  ch: {
    title: "阿拉伯国家",
    text: "阿拉伯国家是指以阿拉伯人为主体民族的国家，这些国家拥有共同的语言阿拉伯语，在宗教、文化和风俗习惯等方面有很多相似之处。阿拉伯国家共有22个，均为阿拉伯联盟成员，地理上从西部大西洋延伸到东部阿拉伯湾，分布于亚洲和非洲两大洲。这些国家横跨沙漠、高原、山脉和平原，拥有丰富的自然资源。",
  },
};

function setContent() {
  document.querySelector(".landing-title").textContent =
    landingText[selectedLanguage].title;
  document.querySelector(".landing-text").textContent =
    landingText[selectedLanguage].text;

  document.querySelector(".map-look-btn").textContent =
    selectedLanguage === "ar" ? "انظر الخريطة" : "地图";
}

function changeMainTextDirection() {
  const title = document.querySelector(".landing-title");
  const text = document.querySelector(".landing-text");

  if (selectedLanguage === "ar") {
    text.setAttribute("dir", "rtl");
  } else {
    text.setAttribute("dir", "ltr");
  }
}

setContent();
changeMainTextDirection();
function changeLanguage() {
  selectedLanguage = selectedLanguage === "ar" ? "ch" : "ar";
  setContent();
  changeMainTextDirection(); // make sure this function exists
}
