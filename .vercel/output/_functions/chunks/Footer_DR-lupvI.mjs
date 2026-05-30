import { c as createComponent } from './astro-component_Dpxd0C9c.mjs';
import 'piccolore';
import { m as maybeRenderHead, s as spreadAttributes, h as addAttribute, o as renderSlot, r as renderTemplate, n as renderComponent, p as renderHead } from './entrypoint_6Uu9wMgq.mjs';
import 'clsx';

const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$ArrowUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ArrowUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m5 12 7-7 7 7"></path> <path d="M12 19V5"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/ArrowUp.astro", void 0);

const $$ChevronRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ChevronRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m9 18 6-6-6-6"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/ChevronRight.astro", void 0);

const $$CircleCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CircleCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="m9 12 2 2 4-4"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/CircleCheck.astro", void 0);

const $$CodeXml = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CodeXml;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "code-xml", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m18 16 4-4-4-4"></path> <path d="m6 8-4 4 4 4"></path> <path d="m14.5 4-5 16"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/CodeXml.astro", void 0);

const $$Cpu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cpu;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "cpu", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 20v2"></path> <path d="M12 2v2"></path> <path d="M17 20v2"></path> <path d="M17 2v2"></path> <path d="M2 12h2"></path> <path d="M2 17h2"></path> <path d="M2 7h2"></path> <path d="M20 12h2"></path> <path d="M20 17h2"></path> <path d="M20 7h2"></path> <path d="M7 20v2"></path> <path d="M7 2v2"></path> <rect x="4" y="4" width="16" height="16" rx="2"></rect> <rect x="8" y="8" width="8" height="8" rx="1"></rect> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Cpu.astro", void 0);

const $$Download = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Download;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "download", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 15V3"></path> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path> <path d="m7 10 5 5 5-5"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Download.astro", void 0);

const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExternalLink;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "external-link", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/ExternalLink.astro", void 0);

const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "github", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path> <path d="M9 18c-4.51 2-5-2-7-2"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Github.astro", void 0);

const $$Globe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Globe;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "globe", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Globe.astro", void 0);

const $$Layers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layers;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "layers", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Layers.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "linkedin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Linkedin.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$ShoppingBag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ShoppingBag;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shopping-bag", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 10a4 4 0 0 1-8 0"></path> <path d="M3.103 6.034h17.794"></path> <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/ShoppingBag.astro", void 0);

const $$Zap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Zap;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "zap", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path> ` })}`;
}, "G:/dev/vBarbo/node_modules/lucide-astro/dist/Zap.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Vinicius Barbo | Frontend Developer", lang = "pt" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<html", ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/manifest.json"><meta name="generator"', "><title>", "</title>", "</head> <body data-astro-cid-sckkx6r4> ", ` <script type="module">
			import '../scripts/main.ts';
		<\/script> </body> </html> `])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "G:/dev/vBarbo/src/layouts/Layout.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Menu;
  const { menu } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="menu"> ${menu.map((item) => {
    return renderTemplate`<li class="menu-item"${addAttribute(item.link.replace("#", ""), "data-link")}> <a${addAttribute(item.link, "href")}${addAttribute(item.title, "title")}>${item.title}</a> </li>`;
  })} </ul>`;
}, "G:/dev/vBarbo/src/components/sections/Header/Menu.astro", void 0);

const $$Actions$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Actions$1;
  const { lang } = Astro2.props;
  const switchLang = lang === "pt" ? "/en" : "/";
  const switchLabel = lang === "pt" ? "PT-BR" : "EN";
  const resumeLabel = lang === "pt" ? "Currículo" : "Resume";
  const resumeLink = lang === "pt" ? "/curriculo-vinicius.pdf" : "/resume-vinicius.pdf";
  return renderTemplate`${maybeRenderHead()}<div class="actions"> <a${addAttribute(switchLang, "href")}${addAttribute(`${lang === "pt" ? "Português Brasileiro" : "English"}`, "title")} class="action -lang"> ${renderComponent($$result, "Globe", $$Globe, {})} ${switchLabel} </a> <a${addAttribute(resumeLink, "href")}${addAttribute(`${lang === "pt" ? "Baixar currículo" : "Downlod resume"}`, "title")} class="action -resume" download> ${renderComponent($$result, "Download", $$Download, {})} ${resumeLabel} </a> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Header/Actions.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="logo-section"> <div class="logo"> <span class="text-logo">vB</span> </div> <button data-open-menu class="open-mobile"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </button> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Header/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { t, menu, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header"> <nav class="container"> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Menu", $$Menu, { "menu": menu })} ${renderComponent($$result, "Actions", $$Actions$1, { "actions": t, "lang": lang })} </nav> </header>`;
}, "G:/dev/vBarbo/src/components/sections/Header/Header.astro", void 0);

const $$UpperInfos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UpperInfos;
  const { hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="upper"> <div class="dot"></div> ${hero.upper} </div>`;
}, "G:/dev/vBarbo/src/components/sections/Hero/UpperInfos.astro", void 0);

const $$MainInfos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainInfos;
  const { hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="main-infos"> <div class="title color-drac-purple">${hero.title}</div> <div class="text">${hero.text}</div> <div class="desc">${hero.description}</div> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Hero/MainInfos.astro", void 0);

const $$Actions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Actions;
  const { hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="actions"> <a href="#contact"${addAttribute(hero.contact, "title")} class="btn">${hero.contact}</a> <a href="#projects"${addAttribute(hero.projects, "title")} class="btn -white">${hero.projects}</a> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Hero/Actions.astro", void 0);

const $$BottomInfos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BottomInfos;
  const { links, hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bottom-infos"> <div class="social"> <div class="section-title">${hero.bottomTitle}</div> <div class="links"> <a${addAttribute(links.linkedin, "href")} title="LinkedIn" class="icon">${renderComponent($$result, "Linkedin", $$Linkedin, {})}</a> <a${addAttribute(links.github, "href")} title="GitHub" class="icon">${renderComponent($$result, "Github", $$Github, {})}</a> <a${addAttribute(`mailto:${links.email}`, "href")} title="Email" class="icon">${renderComponent($$result, "Mail", $$Mail, {})}</a> </div> </div> <div class="divisor"></div> <div class="badges"> ${hero.badges.map((badge) => renderTemplate`<span class="badge">${badge.label}</span>`)} </div> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Hero/BottomInfos.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const { hero, links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section hero container"> ${renderComponent($$result, "UpperInfos", $$UpperInfos, { "hero": hero })} ${renderComponent($$result, "MainInfos", $$MainInfos, { "hero": hero })} ${renderComponent($$result, "Actions", $$Actions, { "hero": hero })} ${renderComponent($$result, "BottomInfos", $$BottomInfos, { "hero": hero, "links": links })} </section>`;
}, "G:/dev/vBarbo/src/components/sections/Hero/Hero.astro", void 0);

const $$SectionHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionHead;
  const { section } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="section-head"> <h2 class="main-title">${section.title}</h2> <p class="text">${section.text}</p> </div>`;
}, "G:/dev/vBarbo/src/components/ui/SectionHead.astro", void 0);

const $$Cards$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cards$1;
  const { about } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cards"> ${about.cards.map((card) => renderTemplate`<div class="card"> <span class="card-title">${card.title}</span> <span class="card-desc">${card.desc}</span> </div>`)} </div>`;
}, "G:/dev/vBarbo/src/components/sections/About/Cards.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const { about } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section about container"> <div class="anchor" id="about"></div> ${renderComponent($$result, "SectionHead", $$SectionHead, { "section": about })} ${renderComponent($$result, "Cards", $$Cards$1, { "about": about })} </section>`;
}, "G:/dev/vBarbo/src/components/sections/About/About.astro", void 0);

const $$Cards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cards;
  const { cards } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cards"> ${cards.map((card) => {
    const Icon = card.icon;
    return renderTemplate`<div class="card"> ${Icon && renderTemplate`<div class="icon">${renderComponent($$result, "Icon", Icon, {})}</div>`} <span class="card-title">${card.title}</span> <span class="card-desc">${card.desc}</span> </div>`;
  })} </div>`;
}, "G:/dev/vBarbo/src/components/sections/Expertise/Cards.astro", void 0);

const $$Expertise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Expertise;
  const { expertise } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section expertise container"> <div class="anchor" id="expertise"></div> ${renderComponent($$result, "SectionHead", $$SectionHead, { "section": expertise })} ${renderComponent($$result, "Cards", $$Cards, { "cards": expertise.cards })} </section>`;
}, "G:/dev/vBarbo/src/components/sections/Expertise/Expertise.astro", void 0);

const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Categories;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="categories" style=""> ${categories.map((category) => {
    const Icon = category.icon;
    return renderTemplate`<div class="category"> <h3 class="category-title"> ${Icon && renderTemplate`<div${addAttribute(`icon ${category.color}`, "class")}>${renderComponent($$result, "Icon", Icon, {})}</div>`} ${category.title} </h3> <ul class="stack"> ${category.items.map((item) => renderTemplate`<li class="item">${item}</li>`)} </ul> </div>`;
  })} </div>`;
}, "G:/dev/vBarbo/src/components/sections/Technical/Categories.astro", void 0);

const $$Technical = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Technical;
  const { technical } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section technical container"> <div class="anchor" id="skills"></div> ${renderComponent($$result, "SectionHead", $$SectionHead, { "section": technical })} ${renderComponent($$result, "Categories", $$Categories, { "categories": technical.categories })} </section>`;
}, "G:/dev/vBarbo/src/components/sections/Technical/Technical.astro", void 0);

const $$Jobs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Jobs;
  const { jobs } = Astro2.props;
  const slugify = (value) => value.toLowerCase().replace(/\s+/g, "-");
  return renderTemplate`${maybeRenderHead()}<div class="jobs"> <div class="job-tabs"> ${jobs.map((job) => {
    return renderTemplate`<div class="job-tab"${addAttribute(slugify(job.company), "data-tab")}>${job.company}</div>`;
  })} </div> <div class="job-content"> ${jobs.map((job) => {
    return renderTemplate`<div class="job"${addAttribute(slugify(job.company), "data-content")}> <div class="infos"> <div class="period color-drac-purple">${job.start} — ${job.end}</div> <div class="company">${job.company}</div> <div class="role">${job.role}</div> <div class="tags"> ${job.tags.map((tag) => {
      return renderTemplate`<div class="tag">${tag}</div>`;
    })} </div> </div> <ul class="bullets"> ${job.bullets.map((bullet) => {
      return renderTemplate`<li class="bullet">${bullet}</li>`;
    })} </ul> </div>`;
  })} </div> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Experience/Jobs.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Experience;
  const { experience } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section experience container"> <div class="anchor" id="experience"></div> ${renderComponent($$result, "SectionHead", $$SectionHead, { "section": experience })} ${renderComponent($$result, "Jobs", $$Jobs, { "jobs": experience.jobs })} </section>`;
}, "G:/dev/vBarbo/src/components/sections/Experience/Experience.astro", void 0);

const $$ContactHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContactHead;
  const { contact } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contact-head"> <h2 class="title">${contact.headTitle}</h2> <p class="desc">${renderComponent($$result, "CircleCheck", $$CircleCheck, {})} ${contact.headDesc}</p> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Contact/ContactHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Form;
  const { contact } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<form class="contact-form" data-contact-form> <input type="text" name="website" tabindex="-1" autocomplete="off" style="display:none;"> <div class="inputs"> <input type="text" name="name" class="input" required', '> <input type="email" name="email" class="input" required', '> </div> <div class="text"> <textarea name="message" class="textarea" required', '></textarea> </div> <button class="btn" type="submit">', `</button> </form> <script type="module">
  const form = document.querySelector('[data-contact-form]');

  if (form instanceof HTMLFormElement) {
  const button = form.querySelector('button');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!(button instanceof HTMLButtonElement)) return;

    button.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Honeypot anti-spam
    if (data.website) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) { throw new Error( 'Erro ao enviar') }

      console.info('Mensagem enviada');
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      button.disabled = false;
    }
    });
  }
<\/script>`])), maybeRenderHead(), addAttribute(contact.formName, "placeholder"), addAttribute(contact.formEmail, "placeholder"), addAttribute(contact.formMessage, "placeholder"), contact.formButton);
}, "G:/dev/vBarbo/src/components/sections/Contact/Form.astro", void 0);

const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Social;
  const { contact, links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contact-social"> <div class="top"> <div class="text">${contact.findMe}</div> <div class="socials"> <a${addAttribute(links.linkedin, "href")} title="LinkedIn" class="card"> <div class="social"><div class="icon">${renderComponent($$result, "Linkedin", $$Linkedin, {})}</div> LinkedIn</div> <div class="external">${renderComponent($$result, "ExternalLink", $$ExternalLink, {})}</div> </a> <a${addAttribute(links.github, "href")} title="GitHub" class="card"> <div class="social"><div class="icon">${renderComponent($$result, "Github", $$Github, {})}</div> GitHub</div> <div class="external">${renderComponent($$result, "ExternalLink", $$ExternalLink, {})}</div> </a> </div> </div> <div class="bottom"> <div class="text">${contact.mail}</div> <a${addAttribute(`mailto:${links.email}`, "href")} title="E-mail" class="email">${links.email} ${renderComponent($$result, "ChevronRight", $$ChevronRight, {})}</a> </div> </div>`;
}, "G:/dev/vBarbo/src/components/sections/Contact/Social.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contact;
  const { contact, links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section contact container"> <div class="anchor" id="contact"></div> ${renderComponent($$result, "ContactHead", $$ContactHead, { "contact": contact })} <div class="content"> ${renderComponent($$result, "Form", $$Form, { "contact": contact })} ${renderComponent($$result, "Social", $$Social, { "contact": contact, "links": links })} </div> </section>`;
}, "G:/dev/vBarbo/src/components/sections/Contact/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { footer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="footer container"> <div class="copyright"> <div class="copy">${footer.copy}</div> <div class="rights">${footer.rights}</div> </div> <button class="back-to-top" data-back-to-top> ${footer.top} ${renderComponent($$result, "ArrowUp", $$ArrowUp, {})} </button> </footer>`;
}, "G:/dev/vBarbo/src/components/sections/Footer/Footer.astro", void 0);

export { $$ShoppingBag as $, $$CodeXml as a, $$Zap as b, $$Layers as c, $$Cpu as d, $$Layout as e, $$Header as f, $$Hero as g, $$About as h, $$Expertise as i, $$Technical as j, $$Experience as k, $$Contact as l, $$Footer as m };
