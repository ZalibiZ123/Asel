// Данные проектов.
// Здесь легко заменить логотипы, тексты, изображения и результаты на реальные.
const projects = [
  {
    id: 1,
    logo: "logo1.png",
    companyName: "Педагогический отряд Думан",
    shortDescription:
      "Отряд занимается обучением высококвалифицированных вожатых для работы в детских оздоровительных лагерях.",
    niche: "Education",
    tasks: [
      "Обновить визуальный стиль аккаунта",
      "Повысить узнаваемость и привлечь новых обучающихся через Instagram",
      "Раскрыть работу педотряда"
    ],
    workDone: [
      "Разработала контент-рубрики и визуальную систему",
      "Сняла UGC-видео и Reels под разработанные сценарии",
      "Пересобрала подачу stories и контент-план"
    ],
    results: [
      "Рост количества подписчиков с 800 до 5000",
      "Создан визуальный стиль аккаунта",
      "Запущены новые рубрики раскрывающие работу педотряда"
    ],
    headerImage: "header1.PNG",
    beforeImage:
      "dumando.PNG",
    afterImage:
      "dumanposle.PNG",
    beforeImage1:
      "dumando1.PNG",
    afterImage1:
      "dumanposle1.PNG"
  },
  {
    id: 2,
    logo: "logo2.PNG",
    companyName: "Магазин канцелярских товаров Ерзат",
    shortDescription:
      "Самый крупный магазин розничной и оптовой продажи канцелярских товаров в столице!",
    niche: "Retail and sales",
    tasks: [
      "Усилить визуальное восприятие бренда",
      "Показать продукцию магазина через учебные/рабочие нужды покупателей",
      "Поднять качество контента для рекламных запусков"
    ],
    workDone: [
      "Подготовила креативную концепцию контента",
      "Организовала UGC-съёмки и подачу через эмоции",
      "Создала сценарии для коротких Reels-видео"
    ],
    results: [
      "Контент стал более цельным и узнаваемым",
      "Рост интереса к новым товарам",
      "Повышение онлайн продаж и перенаправления трафика в отдел по продажам"
    ],
    headerImage: "header2.PNG",
    beforeImage:
      "doerzat.PNG",
    afterImage:
      "posleerzat.PNG",
    beforeImage1:
      "erzatdo1.PNG",
    afterImage1:
      "erzatposle1.PNG",
    extraImage: "tiktok.jpg",
    extraDescription: "Ведение TikTok-аккаунта магазина канцелярии «Ерзат»: создание креативного и вовлекающего контента для продвижения товаров. Короткие видео с показом продукции в трендовом и повседневном формате. Повышение узнаваемости бренда и привлечение новой аудитории."
  },
  {
    id: 3,
    logo: "logo3.jpg",
    companyName: "Контент для бизнеса и экспертов",
    shortDescription:
      "Делаю Reels для бизнеса и экспертов, которые привлекают внимание и превращают просмотры в клиентов. Контент с идеей, смыслом и подачей под вашу аудиторию.",
    niche: "Lifestyle / Creative / Personal brand etc. ",
    centerText: "Съёмка и монтаж Reels для экспертов и бизнеса в разных нишах. От идеи до реализации: подача, динамика, удержание внимания. Примеры работ ниже:",
    reels: [
    { title: "Экспертный ролик", url: "https://www.instagram.com/reel/DWa9GYxDCrD/?igsh=MTd2bTFvNnVhM3V5Mg==" },
    { title: "Ролик для школы", url: "https://www.instagram.com/reel/DPs8MxIDNcO/?igsh=MWw3OHIyd3dlbTkxYg==" },
    { title: "Ролик для школы", url: "https://www.instagram.com/reel/DODQRT6DBxO/?igsh=dnhsOGZwd3RqZml4" },
    { title: "Ролик для школы", url: "https://www.instagram.com/reel/DPs83FrDMyk/?igsh=MWk1a2h5MnY1aHhpaw==" },
    { title: "Рекламный ролик", url: "https://www.instagram.com/reel/DW_9t0HCPDT/?igsh=aGg2MG01cnV1dmU1" },
    { title: "UGC контент", url: "https://www.instagram.com/reel/DVfaC1GiKUy/?igsh=MmxydXprcjBmaWZr" },
    { title: "UGC контент", url: "https://www.instagram.com/reel/DVJdpV0CN_8/?igsh=MWd4b2cxdzlhcm52cA==" }
  ]
  }
];


const projectsGrid = document.getElementById("projectsGrid");
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");
const parallaxItems = document.querySelectorAll(".parallax-item");
const revealElements = document.querySelectorAll(".reveal");


function initRotatingText() {
  const circle = document.getElementById("rotatingText");
  if (!circle) return;

  const text = circle.textContent.trim();
  circle.textContent = "";

  const characters = text.split("");
  const angleStep = 360 / characters.length;
  const spans = [];

  const isMobile = window.innerWidth <= 560;
  const isTablet = window.innerWidth <= 820;

  let radius = 190;
  if (isMobile) {
    radius = 110;
  } else if (isTablet) {
    radius = 145;
  }

  characters.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.dataset.baseAngle = String(index * angleStep);
    circle.appendChild(span);
    spans.push(span);
  });

  let rotation = 0;

  function animate() {
    rotation += 0.1;

    spans.forEach((span) => {
      const baseAngle = Number(span.dataset.baseAngle);
      const angle = baseAngle + rotation;

      span.style.transform = `
        rotate(${angle}deg)
        translateY(-${radius}px)
      `;
    });

    requestAnimationFrame(animate);
  }

  animate();
}
/**
 * Рендер карточек проектов.
 */
function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <article 
          class="project-card js-tilt-card reveal" 
          data-index="${index}" 
          tabindex="0"
          aria-label="Открыть проект ${project.companyName}"
        >
          <div class="project-card__glow"></div>
          <div class="project-card__glare"></div>

          <div class="project-card__content">
            <div class="project-card__logo-wrap">
              <img 
                src="${project.logo}" 
                alt="Логотип ${project.companyName}" 
                class="project-card__logo"
              />
            </div>

            <h3 class="project-card__name">${project.companyName}</h3>
            <p class="project-card__description">${project.shortDescription}</p>

            <div class="project-card__footer">
              <span class="project-card__badge">${project.niche}</span>

              <span class="project-card__more">
                Подробнее
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 5.5 20 12l-6.5 6.5-1.06-1.06 4.69-4.69H4v-1.5h13.13l-4.69-4.69L13.5 5.5Z" fill="currentColor"/>
                </svg>
              </span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  initTiltCards();
  initProjectCardEvents();
  refreshRevealObserver();
}

function createProjectBodyByType(project) {
  const headerImage = project.headerImage || "";
const beforeImage = project.beforeImage || "";
const afterImage = project.afterImage || "";
const extraImage = project.extraImage || "";
const extraDescription = project.extraDescription || "";
const centerText = project.centerText || "";
const reels = project.reels || [];

const tasks = Array.isArray(project.tasks) ? project.tasks : [];
  const workDone = Array.isArray(project.workDone) ? project.workDone : [];
  const results = Array.isArray(project.results) ? project.results : [];

  const tasksList = tasks.map((item) => `<li>${item}</li>`).join("");
  const workDoneList = workDone.map((item) => `<li>${item}</li>`).join("");
  const resultsList = results.map((item) => `<li>${item}</li>`).join("");
  // Тип 1:
  // шапка аккаунта по центру, ниже две картинки до/после
  if (project.id === 1) {
    return `
      <div class="modal-project">
      <div class="modal-project__top">
        <div class="modal-project__logo-area">
          <img src="${project.logo}" alt="Логотип ${project.companyName}" />
        </div>

        <div class="modal-project__info">
          <h3 id="modalTitle">${project.companyName}</h3>
          <div class="modal-project__meta">${project.niche}</div>

          <div class="modal-project__detail-list">
            <div class="modal-project__detail">
              <strong>Задачи</strong>
              <ul>${tasksList}</ul>
            </div>

            <div class="modal-project__detail">
              <strong>Что делала</strong>
              <ul>${workDoneList}</ul>
            </div>

            <div class="modal-project__detail">
              <strong>Результаты</strong>
              <ul>${resultsList}</ul>
            </div>
          </div>
        </div>
      </div>
    
    
      <div class="modal-project__comparison">
        <div class="modal-project__header-preview">
          <div class="modal-project__single-image">
            <img src="${project.headerImage}" alt="Шапка аккаунта ${project.companyName}" />
          </div>
        </div>

        <div class="modal-project__comparison-grid">
          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.beforeImage}" alt="Сетка до работы со мной — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">Сетка до работы со мной</div>
          </div>

          <div class="comparison-arrow" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffb37a"></stop>
                  <stop offset="50%" stop-color="#ff7b72"></stop>
                  <stop offset="100%" stop-color="#ff9fb2"></stop>
                </linearGradient>
              </defs>
              <path d="M18 88 C 30 46, 66 26, 95 32"></path>
              <polygon points="90,23 106,33 88,39"></polygon>
            </svg>
          </div>

          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.afterImage}" alt="После — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">После</div>
          </div>
      </div>
      <br>
      <div class="modal-project__comparison-grid">
          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.beforeImage1}" alt="Просмотры до работы со мной — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">Просмотры до работы со мной</div>
          </div>

          <div class="comparison-arrow" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffb37a"></stop>
                  <stop offset="50%" stop-color="#ff7b72"></stop>
                  <stop offset="100%" stop-color="#ff9fb2"></stop>
                </linearGradient>
              </defs>
              <path d="M18 88 C 30 46, 66 26, 95 32"></path>
              <polygon points="90,23 106,33 88,39"></polygon>
            </svg>
          </div>

          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.afterImage1}" alt="После — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">После</div>
          </div>
        </div>
        <br>
    `;
  }

  // Тип 2:
  // как тип 1 + еще 1 фото по центру и описание ниже
  if (project.id === 2) {
    return `
      <div class="modal-project">
      <div class="modal-project__top">
        <div class="modal-project__logo-area">
          <img src="${project.logo}" alt="Логотип ${project.companyName}" />
        </div>

        <div class="modal-project__info">
          <h3 id="modalTitle">${project.companyName}</h3>
          <div class="modal-project__meta">${project.niche}</div>

          <div class="modal-project__detail-list">
            <div class="modal-project__detail">
              <strong>Задачи</strong>
              <ul>${tasksList}</ul>
            </div>

            <div class="modal-project__detail">
              <strong>Что делала</strong>
              <ul>${workDoneList}</ul>
            </div>

            <div class="modal-project__detail">
              <strong>Результаты</strong>
              <ul>${resultsList}</ul>
            </div>
          </div>
        </div>
      </div>
    
      <div class="modal-project__comparison">
        <div class="modal-project__header-preview">
          <div class="modal-project__single-image">
            <img src="${project.headerImage}" alt="Шапка аккаунта ${project.companyName}" />
          </div>
        </div>

        <div class="modal-project__comparison-grid">
          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.beforeImage}" alt="Сетка до работы со мной — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">Сетка до работы со мной</div>
          </div>

          <div class="comparison-arrow" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffb37a"></stop>
                  <stop offset="50%" stop-color="#ff7b72"></stop>
                  <stop offset="100%" stop-color="#ff9fb2"></stop>
                </linearGradient>
              </defs>
              <path d="M18 88 C 30 46, 66 26, 95 32"></path>
              <polygon points="90,23 106,33 88,39"></polygon>
            </svg>
          </div>

          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.afterImage}" alt="После — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">После</div>
          </div>
        </div>
        
        <br>
        
        <div class="modal-project__comparison-grid">
          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.beforeImage1}" alt="Просмотры до работы со мной — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">Просмотры до работы со мной</div>
          </div>

          <div class="comparison-arrow" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffb37a"></stop>
                  <stop offset="50%" stop-color="#ff7b72"></stop>
                  <stop offset="100%" stop-color="#ff9fb2"></stop>
                </linearGradient>
              </defs>
              <path d="M18 88 C 30 46, 66 26, 95 32"></path>
              <polygon points="90,23 106,33 88,39"></polygon>
            </svg>
          </div>

          <div class="comparison-card">
            <div class="comparison-card__image">
              <img src="${project.afterImage1}" alt="После — ${project.companyName}" />
            </div>
            <div class="comparison-card__caption">После</div>
          </div>
        </div>
<br>
        <div class="modal-project__extra-preview">
          <div class="modal-project__single-image modal-project__single-image--extra">
  <img src="${extraImage}" alt="Дополнительный пример ${project.companyName}" />
</div>
          <p class="modal-project__extra-description">${project.extraDescription}</p>
        </div>
      </div>
    `;
  }

  // Тип 3:
  // текст по центру + кнопки-ссылки на reels
  if (project.id === 3) {
    const reelsHtml = (project.reels || [])
      .map(
        (reel) => `
          <a href="${reel.url}" target="_blank" rel="noopener noreferrer" class="modal-project__reel-link">
            <span class="modal-project__reel-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="currentColor"/>
  </svg>
</span>
            <span>${reel.title}</span>
          </a>
        `
      )
      .join("");

    return `
     <div class="modal-project__info">
          <h3 id="modalTitle">${project.companyName}</h3>
          <div class="modal-project__meta">${project.niche}</div></div>
      <div class="modal-project__comparison">
        <div class="modal-project__center-text">
          <p>${project.centerText}</p>
        </div>

        <div class="modal-project__reels-grid">
          ${reelsHtml}
        </div>
      </div>
    `;
  }

  return "";
}

/**
 * Создание HTML для модалки проекта.
 */
function createProjectModalContent(project) {
const tasks = Array.isArray(project.tasks) ? project.tasks : [];
  const workDone = Array.isArray(project.workDone) ? project.workDone : [];
  const results = Array.isArray(project.results) ? project.results : [];

  const tasksList = tasks.map((item) => `<li>${item}</li>`).join("");
  const workDoneList = workDone.map((item) => `<li>${item}</li>`).join("");
  const resultsList = results.map((item) => `<li>${item}</li>`).join("");

  return createProjectBodyByType(project);
}



/**
 * Открытие модального окна.
 */
function openProjectModal(index) {
  const project = projects[index];
  if (!project) return;

  modalBody.innerHTML = createProjectModalContent(project);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * Закрытие модального окна.
 */
function closeProjectModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/**
 * Инициализация событий карточек.
 */
function initProjectCardEvents() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const index = card.dataset.index;

    card.addEventListener("click", () => openProjectModal(index));

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(index);
      }
    });
  });
}

/**
 * Реалистичный tilt-эффект карточек.
 * Наклон зависит от положения курсора.
 */
function initTiltCards() {
  const tiltCards = document.querySelectorAll(".js-tilt-card");

  tiltCards.forEach((card) => {
    const glare = card.querySelector(".project-card__glare");
    let currentX = 0;
    let currentY = 0;

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 16;
      const rotateX = -((y - centerY) / centerY) * 16;

      currentX = rotateX;
      currentY = rotateY;

      card.style.transform = `
        perspective(1000px)
        rotateX(${currentX}deg)
        rotateY(${currentY}deg)
        scale3d(1.04, 1.04, 1.04)
      `;

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.opacity = "1";
        glare.style.background = `
          radial-gradient(
            circle at ${glareX}% ${glareY}%,
            rgba(255,255,255,0.45),
            rgba(255,255,255,0.06) 28%,
            rgba(255,255,255,0) 58%
          )
        `;
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;

      if (glare) {
        glare.style.opacity = "0";
      }
    });
  });
}

/**
 * Reveal-анимация при скролле.
 */
let revealObserver;

function initRevealObserver() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}

function refreshRevealObserver() {
  if (revealObserver) {
    document.querySelectorAll(".reveal").forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        revealObserver.observe(element);
      }
    });
  }
}

/**
 * Параллакс декоративных элементов в hero.
 */
function initParallax() {
  const isMobile = window.matchMedia("(max-width: 820px)").matches;
  if (isMobile) return;

  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.speed) || 0.1;
      const moveX = x * speed * 30;
      const moveY = y * speed * 30;

      item.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });
}



/**
 * События модалки.
 */
modalClose.addEventListener("click", closeProjectModal);
modalBackdrop.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeProjectModal();
  }
});

/**
 * Инициализация.
 */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initRevealObserver();
  initParallax();
  initRotatingText();
});