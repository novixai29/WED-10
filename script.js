/* ==========================================================
   WED-010 — THE WEDDING EDITION

   غيّر بيانات الزبون من هنا فقط
========================================================== */

const WEDDING = {

  /* ========================================================
     COUPLE
  ======================================================== */

  groom:
    "أحمد",

  bride:
    "مريم",


  groomEnglish:
    "AHMED",

  brideEnglish:
    "MARYAM",


  /* ========================================================
     EVENT
  ======================================================== */

  startAt:
    "2027-10-14T19:00:00+03:00",

  durationHours:
    3,

  timeZone:
    "Asia/Baghdad",


  /* ========================================================
     VENUE
  ======================================================== */

  venue:
    "قاعة أوريانا",

  city:
    "أربيل",

  address:
    "أربيل - العراق",


  /* ========================================================
     GOOGLE MAPS
  ======================================================== */

  mapsUrl:
    "",


  /* ========================================================
     FINAL URL
  ======================================================== */

  shareUrl:
    "",


  /* ========================================================
     PAGE
  ======================================================== */

  title:
    "دعوة زفاف أحمد ومريم",


  /* ========================================================
     TEXT
  ======================================================== */

  heroMessage:
    "نلتقي لنحتفل ببداية العمر",


  invitationText:
    "يسعدنا أن نشارككم بداية حكايتنا وندعوكم لتكونوا جزءاً من ليلة زفاف أحمد ومريم في أمسية نحتفظ بها في الذاكرة وتكتمل بحضور من نحب.",


  /* ========================================================
     OPENING
  ======================================================== */

  openingStorageKey:
    "WED010_WEDDING_EDITION_OPENED"

};



/* ==========================================================
   HELPERS
========================================================== */

const $ = (selector) =>
  document.querySelector(selector);



function setText(
  selector,
  value
) {

  const element =
    $(selector);


  if (element) {

    element.textContent =
      value;

  }

}



/* ==========================================================
   DATE
========================================================== */

const EVENT_DATE =
  new Date(
    WEDDING.startAt
  );



function getArabicDateParts() {

  const weekday =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        weekday:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const fullDate =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        day:
          "numeric",

        month:
          "long",

        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const month =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        month:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    weekday,
    fullDate,
    month,
    time
  };

}



function getEnglishDateParts() {

  const weekday =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        weekday:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const day =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        day:
          "2-digit",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const month =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        month:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const monthShort =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        month:
          "short",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const year =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "en-US",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    weekday,
    day,
    month,
    monthShort,
    year,
    time
  };

}



/* ==========================================================
   EVENT DATE COMPONENTS
========================================================== */

function getEventCalendarParts() {

  const parts =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        year:
          "numeric",

        month:
          "2-digit",

        day:
          "2-digit",

        timeZone:
          WEDDING.timeZone
      }
    )
      .formatToParts(
        EVENT_DATE
      );


  const object = {};


  parts.forEach(
    (part) => {

      if (
        part.type !== "literal"
      ) {

        object[part.type] =
          Number(
            part.value
          );

      }

    }
  );


  return {

    year:
      object.year,

    month:
      object.month,

    day:
      object.day

  };

}



/* ==========================================================
   RENDER
========================================================== */

function renderWeddingData() {

  const arabic =
    getArabicDateParts();


  const english =
    getEnglishDateParts();


  const coupleArabic =
    `${WEDDING.groom} × ${WEDDING.bride}`;


  const coupleEnglish =
    `${WEDDING.groomEnglish} × ${WEDDING.brideEnglish}`;


  document.title =
    WEDDING.title;



  /* ========================================================
     OPENING
  ======================================================== */

  setText(
    "#openingNames",
    coupleArabic
  );


  setText(
    "#openingDate",
    `${english.day} ${english.monthShort} ${english.year}`
  );



  /* ========================================================
     EDITOR LETTER
  ======================================================== */

  setText(
    "#invitationText",
    WEDDING.invitationText
  );


  setText(
    "#editorGroom",
    WEDDING.groom
  );


  setText(
    "#editorBride",
    WEDDING.bride
  );



  /* ========================================================
     FEATURE
  ======================================================== */

  setText(
    "#featureDateTop",
    `${english.month} ${english.day} — ${english.year}`
  );


  setText(
    "#groomName",
    WEDDING.groom
  );


  setText(
    "#brideName",
    WEDDING.bride
  );


  setText(
    "#heroMessage",
    WEDDING.heroMessage
  );



  /* ========================================================
     EVENT
  ======================================================== */

  setText(
    "#eventWeekday",
    arabic.weekday
  );


  setText(
    "#eventDate",
    arabic.fullDate
  );


  setText(
    "#eventTime",
    arabic.time
  );


  setText(
    "#calendarMonth",
    arabic.month
  );


  setText(
    "#calendarYear",
    english.year
  );


  setText(
    "#calendarEventDay",
    english.day
  );



  /* ========================================================
     VENUE
  ======================================================== */

  setText(
    "#venueTitle",
    WEDDING.venue
  );


  setText(
    "#venueCity",
    WEDDING.city
  );


  setText(
    "#venueAddress",
    WEDDING.address
  );


  setText(
    "#venueDate",
    `${english.day} ${english.monthShort} ${english.year}`
  );


  setText(
    "#venueTime",
    english.time
  );



  /* ========================================================
     CLOSING
  ======================================================== */

  setText(
    "#closingNames",
    coupleArabic
  );


  setText(
    "#closingDate",
    `${english.day} · ${english.monthShort} · ${english.year}`
  );


  setText(
    "#footerNames",
    coupleEnglish
  );

}



/* ==========================================================
   OPENING
========================================================== */

const editionOpening =
  $("#editionOpening");


const openEdition =
  $("#openEdition");


const magazineShell =
  $("#magazineShell");


const magazineTrack =
  $("#magazineTrack");


const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );



function invitationWasOpened() {

  try {

    return (
      sessionStorage.getItem(
        WEDDING.openingStorageKey
      ) === "true"
    );

  } catch {

    return false;

  }

}



function rememberOpening() {

  try {

    sessionStorage.setItem(
      WEDDING.openingStorageKey,
      "true"
    );

  } catch {

    /* ignore */

  }

}



function completeOpening() {

  editionOpening
    .classList
    .add(
      "is-complete"
    );


  editionOpening
    .setAttribute(
      "aria-hidden",
      "true"
    );


  document.body
    .classList
    .add(
      "invitation-ready"
    );


  window.setTimeout(
    () => {

      magazineTrack.focus({
        preventScroll:
          true
      });

    },
    80
  );

}



function startEditionOpening() {

  if (
    editionOpening
      .classList
      .contains(
        "is-opening"
      )
  ) {

    return;

  }


  rememberOpening();


  if (
    reduceMotion.matches
  ) {

    completeOpening();

    return;

  }


  /*
    1
    تختفي معلومات الغلاف
  */

  editionOpening
    .classList
    .add(
      "is-opening"
    );


  /*
    2
    الصفحة البيضاء تعبر مثل قلب صفحة مجلة
  */

  window.setTimeout(
    () => {

      editionOpening
        .classList
        .add(
          "page-turn"
        );

    },
    280
  );


  /*
    3
    الصفحة تستمر إلى الجهة الثانية
  */

  window.setTimeout(
    () => {

      editionOpening
        .classList
        .add(
          "page-exit"
        );

    },
    850
  );


  /*
    4
    إظهار المجلة
  */

  window.setTimeout(
    () => {

      completeOpening();

    },
    1350
  );

}



function initializeOpening() {

  if (
    invitationWasOpened()
  ) {

    editionOpening
      .classList
      .add(
        "is-complete"
      );


    editionOpening
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body
      .classList
      .add(
        "invitation-ready"
      );

  }

}



openEdition
  .addEventListener(
    "click",
    startEditionOpening
  );



/* ==========================================================
   MAGAZINE NAVIGATION
========================================================== */

const pages =
  Array.from(
    document.querySelectorAll(
      ".issue-page"
    )
  );


const dots =
  Array.from(
    document.querySelectorAll(
      ".page-dot"
    )
  );


const currentPageText =
  $("#currentPage");


const totalPagesText =
  $("#totalPages");


const progressBar =
  $("#pageProgressBar");


const prevPageButton =
  $("#prevPage");


const nextPageButton =
  $("#nextPage");


let currentPageIndex =
  0;


totalPagesText.textContent =
  String(
    pages.length
  )
    .padStart(
      2,
      "0"
    );



function getPageWidth() {

  return window.innerWidth;

}



function goToPage(
  index
) {

  const safeIndex =
    Math.max(
      0,
      Math.min(
        pages.length - 1,
        index
      )
    );


  magazineTrack.scrollTo(
    {
      left:
        safeIndex *
        getPageWidth(),

      behavior:
        reduceMotion.matches
          ? "auto"
          : "smooth"
    }
  );

}



function updateMagazineUI() {

  const width =
    getPageWidth();


  const rawIndex =
    magazineTrack.scrollLeft /
    width;


  currentPageIndex =
    Math.max(
      0,
      Math.min(
        pages.length - 1,
        Math.round(
          rawIndex
        )
      )
    );


  currentPageText.textContent =
    String(
      currentPageIndex + 1
    )
      .padStart(
        2,
        "0"
      );


  dots.forEach(
    (
      dot,
      index
    ) => {

      dot.classList.toggle(
        "is-active",
        index ===
          currentPageIndex
      );

    }
  );


  const percentage =
    (
      (
        currentPageIndex + 1
      ) /
      pages.length
    ) *
    100;


  progressBar.style.width =
    `${percentage}%`;


  prevPageButton.disabled =
    currentPageIndex === 0;


  nextPageButton.disabled =
    currentPageIndex ===
    pages.length - 1;

}



dots.forEach(
  (
    dot,
    index
  ) => {

    dot.addEventListener(
      "click",
      () => {

        goToPage(
          index
        );

      }
    );

  }
);



prevPageButton
  .addEventListener(
    "click",
    () => {

      goToPage(
        currentPageIndex - 1
      );

    }
  );



nextPageButton
  .addEventListener(
    "click",
    () => {

      goToPage(
        currentPageIndex + 1
      );

    }
  );



let scrollFrame =
  null;



magazineTrack
  .addEventListener(
    "scroll",
    () => {

      if (
        scrollFrame
      ) {

        cancelAnimationFrame(
          scrollFrame
        );

      }


      scrollFrame =
        requestAnimationFrame(
          updateMagazineUI
        );

    },
    {
      passive:
        true
    }
  );



/* ==========================================================
   KEYBOARD NAVIGATION
========================================================== */

magazineTrack
  .addEventListener(
    "keydown",
    (
      event
    ) => {

      if (
        event.key ===
        "ArrowRight"
      ) {

        event.preventDefault();

        goToPage(
          currentPageIndex + 1
        );

      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        event.preventDefault();

        goToPage(
          currentPageIndex - 1
        );

      }

    }
  );



/* ==========================================================
   DESKTOP MOUSE WHEEL
========================================================== */

function initializeWheelNavigation() {

  if (
    reduceMotion.matches
  ) {

    return;

  }


  if (
    !window.matchMedia(
      "(min-width: 800px)"
    ).matches
  ) {

    return;

  }


  let wheelLocked =
    false;


  magazineTrack.addEventListener(
    "wheel",
    (
      event
    ) => {

      if (
        Math.abs(
          event.deltaY
        ) <
        15
      ) {

        return;

      }


      event.preventDefault();


      if (
        wheelLocked
      ) {

        return;

      }


      wheelLocked =
        true;


      if (
        event.deltaY > 0
      ) {

        goToPage(
          currentPageIndex + 1
        );

      } else {

        goToPage(
          currentPageIndex - 1
        );

      }


      window.setTimeout(
        () => {

          wheelLocked =
            false;

        },
        650
      );

    },
    {
      passive:
        false
    }
  );

}



/* ==========================================================
   RESIZE
========================================================== */

window.addEventListener(
  "resize",
  () => {

    magazineTrack.scrollLeft =
      currentPageIndex *
      getPageWidth();


    updateMagazineUI();

  }
);



/* ==========================================================
   CALENDAR GRID
========================================================== */

function renderCalendar() {

  const calendarGrid =
    $("#calendarGrid");


  const parts =
    getEventCalendarParts();


  const firstDay =
    new Date(
      Date.UTC(
        parts.year,
        parts.month - 1,
        1
      )
    );


  /*
    JS:
    Sunday = 0
    Monday = 1
    ...
    Saturday = 6

    التقويم هنا يبدأ بالسبت:
    Saturday -> 0
    Sunday -> 1
    ...
  */

  const startingIndex =
    (
      firstDay.getUTCDay() +
      1
    ) %
    7;


  const daysInMonth =
    new Date(
      Date.UTC(
        parts.year,
        parts.month,
        0
      )
    )
      .getUTCDate();


  calendarGrid.innerHTML =
    "";


  for (
    let i = 0;
    i < startingIndex;
    i++
  ) {

    const empty =
      document.createElement(
        "div"
      );


    empty.className =
      "calendar-day is-empty";


    calendarGrid.appendChild(
      empty
    );

  }


  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {

    const cell =
      document.createElement(
        "div"
      );


    cell.className =
      "calendar-day";


    cell.textContent =
      day;


    if (
      day ===
      parts.day
    ) {

      cell.classList.add(
        "is-event"
      );


      cell.setAttribute(
        "aria-label",
        `موعد حفل الزفاف يوم ${day}`
      );

    }


    calendarGrid.appendChild(
      cell
    );

  }


  const usedCells =
    startingIndex +
    daysInMonth;


  const remaining =
    (
      7 -
      (
        usedCells %
        7
      )
    ) %
    7;


  for (
    let i = 0;
    i < remaining;
    i++
  ) {

    const empty =
      document.createElement(
        "div"
      );


    empty.className =
      "calendar-day is-empty";


    calendarGrid.appendChild(
      empty
    );

  }

}



/* ==========================================================
   COUNTDOWN
========================================================== */

let countdownTimer =
  null;



function padCountdown(
  value
) {

  return String(
    Math.max(
      0,
      value
    )
  )
    .padStart(
      2,
      "0"
    );

}



function updateCountdown() {

  const difference =
    EVENT_DATE.getTime() -
    Date.now();


  if (
    difference <= 0
  ) {

    setText(
      "#days",
      "00"
    );


    setText(
      "#hours",
      "00"
    );


    setText(
      "#minutes",
      "00"
    );


    setText(
      "#seconds",
      "00"
    );


    setText(
      "#countdownStatus",
      "صدر العدد المنتظر"
    );


    if (
      countdownTimer
    ) {

      clearInterval(
        countdownTimer
      );

    }


    return;

  }


  const second =
    1000;


  const minute =
    second * 60;


  const hour =
    minute * 60;


  const day =
    hour * 24;


  const days =
    Math.floor(
      difference /
      day
    );


  const hours =
    Math.floor(
      (
        difference %
        day
      ) /
      hour
    );


  const minutes =
    Math.floor(
      (
        difference %
        hour
      ) /
      minute
    );


  const seconds =
    Math.floor(
      (
        difference %
        minute
      ) /
      second
    );


  setText(
    "#days",
    padCountdown(
      days
    )
  );


  setText(
    "#hours",
    padCountdown(
      hours
    )
  );


  setText(
    "#minutes",
    padCountdown(
      minutes
    )
  );


  setText(
    "#seconds",
    padCountdown(
      seconds
    )
  );

}



function initializeCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



/* ==========================================================
   MAPS
========================================================== */

function getMapsUrl() {

  if (
    WEDDING.mapsUrl &&
    WEDDING.mapsUrl.trim()
  ) {

    return (
      WEDDING.mapsUrl.trim()
    );

  }


  const query =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      query
    )
  );

}



function initializeMaps() {

  $("#mapsButton").href =
    getMapsUrl();

}



/* ==========================================================
   SHARE URL
========================================================== */

function getShareUrl() {

  if (
    WEDDING.shareUrl &&
    WEDDING.shareUrl.trim()
  ) {

    return (
      WEDDING.shareUrl.trim()
    );

  }


  return window.location.href;

}



/* ==========================================================
   ICS HELPERS
========================================================== */

function pad2(
  value
) {

  return String(
    value
  )
    .padStart(
      2,
      "0"
    );

}



function formatUTCForICS(
  date
) {

  return (
    date.getUTCFullYear() +

    pad2(
      date.getUTCMonth() + 1
    ) +

    pad2(
      date.getUTCDate()
    ) +

    "T" +

    pad2(
      date.getUTCHours()
    ) +

    pad2(
      date.getUTCMinutes()
    ) +

    pad2(
      date.getUTCSeconds()
    ) +

    "Z"
  );

}



function escapeICS(
  value
) {

  return String(
    value
  )
    .replace(
      /\\/g,
      "\\\\"
    )
    .replace(
      /\n/g,
      "\\n"
    )
    .replace(
      /,/g,
      "\\,"
    )
    .replace(
      /;/g,
      "\\;"
    );

}



/* ==========================================================
   CREATE ICS
========================================================== */

function createICS() {

  const start =
    new Date(
      WEDDING.startAt
    );


  const end =
    new Date(
      start.getTime() +
      WEDDING.durationHours *
      60 *
      60 *
      1000
    );


  const now =
    new Date();


  const url =
    getShareUrl();


  const location =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" - ");


  const description =
    `يسعد ${WEDDING.groom} و${WEDDING.bride} دعوتكم لمشاركتهما فرحة الزفاف.${url ? ` رابط الدعوة: ${url}` : ""}`;


  const uid =
    `wed010-${start.getTime()}@inviteus.party`;


  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//InviteUs//The Wedding Edition//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${formatUTCForICS(now)}
DTSTART:${formatUTCForICS(start)}
DTEND:${formatUTCForICS(end)}
SUMMARY:${escapeICS(`زفاف ${WEDDING.groom} و${WEDDING.bride}`)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(url)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

}



/* ==========================================================
   DOWNLOAD CALENDAR
========================================================== */

function downloadICS() {

  const content =
    createICS();


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `wedding-${WEDDING.groom}-${WEDDING.bride}.ics`;


  document.body
    .appendChild(
      link
    );


  link.click();


  link.remove();


  window.setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    500
  );


  showToast(
    "تم إنشاء ملف التقويم"
  );

}



$("#calendarButton")
  .addEventListener(
    "click",
    downloadICS
  );



/* ==========================================================
   SHARE
========================================================== */

function getShareText() {

  const date =
    getArabicDateParts();


  return (
    `يسعد ${WEDDING.groom} و${WEDDING.bride} دعوتكم لمشاركتهما فرحة الزفاف، ` +
    `وذلك يوم ${date.weekday} ${date.fullDate} ` +
    `في ${WEDDING.venue}.`
  );

}



async function copyToClipboard(
  text
) {

  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {

    await navigator.clipboard
      .writeText(
        text
      );


    return;

  }


  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body
    .appendChild(
      textarea
    );


  textarea.select();


  document.execCommand(
    "copy"
  );


  textarea.remove();

}



async function shareInvitation() {

  const text =
    getShareText();


  const url =
    getShareUrl();


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        {
          title:
            WEDDING.title,

          text:
            text,

          url:
            url
        }
      );


      return;

    } catch (
      error
    ) {

      if (
        error?.name ===
        "AbortError"
      ) {

        return;

      }

    }

  }


  try {

    await copyToClipboard(
      `${text}\n${url}`
    );


    showToast(
      "تم نسخ نص الدعوة والرابط"
    );

  } catch {

    showToast(
      "تعذر نسخ رابط الدعوة"
    );

  }

}



$("#shareButton")
  .addEventListener(
    "click",
    shareInvitation
  );



/* ==========================================================
   TOAST
========================================================== */

let toastTimer =
  null;



function showToast(
  message
) {

  const toast =
    $("#toast");


  toast.textContent =
    message;


  toast
    .classList
    .add(
      "is-visible"
    );


  if (
    toastTimer
  ) {

    clearTimeout(
      toastTimer
    );

  }


  toastTimer =
    window.setTimeout(
      () => {

        toast
          .classList
          .remove(
            "is-visible"
          );

      },
      2500
    );

}



/* ==========================================================
   INITIALIZE
========================================================== */

function initialize() {

  renderWeddingData();

  initializeOpening();

  renderCalendar();

  initializeCountdown();

  initializeMaps();

  initializeWheelNavigation();

  updateMagazineUI();

}



document.addEventListener(
  "DOMContentLoaded",
  initialize
);
