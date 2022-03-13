import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-79fdd481","/home.html",{"title":"Project home","icon":"home","type":"home","readingTime":{"minutes":0.17,"words":51},"excerpt":"This is an example of a normal homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related descriptions of "},["/home","/home.md"]],
  ["v-184f4da6","/intro.html",{"title":"Intro Page","icon":"info","type":"article","readingTime":{"minutes":0.03,"words":8},"excerpt":"Intro Page Place your introducation and profile here."},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"title":"PostHCI","icon":"home","type":"home","readingTime":{"minutes":0,"words":0},"excerpt":""},["/index.html","/README.md"]],
  ["v-0e503981","/slide.html",{"title":"Slide page","icon":"slides","type":"slide","readingTime":{"minutes":3.22,"words":965},"excerpt":"@slidestart Slide Demo A simple slide demo and useful hints. \" By Mr.Hope. Please scroll mousewheel down to the next slide\" --- Marking Slides 👇 -- Marking Slides Use --- to mark "},["/slide","/slide.md"]],
  ["v-7444f2a0","/bio/",{"title":"Bio","type":"article","readingTime":{"minutes":0.77,"words":231},"excerpt":"Bio Computer Scientist, Mechatronic Engineer, and Ph.D. Researcher in the Human-Centered Ubiquitous Media group at LMU Munich. My research field is human-computer interaction, part"},["/bio/index.html","/bio/README.md"]],
  ["v-145ac574","/blog/",{"title":"Blog","type":"article","readingTime":{"minutes":0.01,"words":3},"excerpt":"Blog Under Construction"},["/blog/index.html","/blog/README.md"]],
  ["v-96536bf0","/contact/",{"title":"Contact","type":"article","readingTime":{"minutes":0.31,"words":93},"excerpt":"Contact Mail\r\" steeven.villa[at]ifi.lmu.de \"\r\" D.Villa[at]lmu.de\" Phones\r\" +33 7 6634 9410 (Mobile) \"\r\" +49 89 2180 75146 (Office)\" Address \r\" Room 453 - Frauenlobstraße 7a - 80337"},["/contact/index.html","/contact/README.md"]],
  ["v-4c863446","/guide/disable.html",{"title":"Component disabled","icon":"config","type":"article","readingTime":{"minutes":0.14,"words":42},"excerpt":"<p>You can disable some functions on the page by setting the Frontmatter of the page.</p>\n","category":["Guide"],"tag":["disable"]},["/guide/disable","/guide/disable.md"]],
  ["v-bf720700","/guide/encrypt.html",{"title":"Encryption article","icon":"lock","type":"article","readingTime":{"minutes":0.28,"words":84},"excerpt":"Encryption article The actual article content. Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 te","category":["Guide"],"tag":["encryption"],"isEncrypted":true},["/guide/encrypt","/guide/encrypt.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":"Markdown Enhance","icon":"markdown","type":"article","readingTime":{"minutes":2.21,"words":664},"excerpt":"<p>Every document page in VuePress is rendered by Markdown.</p>\n<p>You need to build your document or blog page by creating and writing Markdown in the corresponding path.</p>\n","category":["Guide"],"tag":["markdown"]},["/guide/markdown","/guide/markdown.md"]],
  ["v-4eaf9f84","/guide/page.html",{"title":"page config","icon":"page","type":"article","readingTime":{"minutes":0.39,"words":116},"excerpt":"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\n","author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true},["/guide/page","/guide/page.md"]],
  ["v-fffb8e28","/guide/",{"title":"Guides","icon":"creative","type":"article","readingTime":{"minutes":0.04,"words":13},"excerpt":"Guides Page Config; Markdown Enhance; Function Disable; Encryption Demo;","category":["Guide"]},["/guide/index.html","/guide/README.md"]],
  ["v-5a814a99","/posts/article10.html",{"title":"Article 10","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 10 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-10T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article10","/posts/article10.md"]],
  ["v-7beb5be1","/posts/article9.html",{"title":"Article 9","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 9 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-09T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article9","/posts/article9.md"]],
  ["v-65aff427","/publications/publications_legacy.html",{"title":"Research","type":"article","readingTime":{"minutes":2.27,"words":681},"excerpt":"Research [//]: # (Todo: add timeline style) Master's and Bachelor's thesis topics: --- If you are interested send me an email or contact me via the MIMUC slack workspace :mask: Cur"},["/publications/publications_legacy","/publications/publications_legacy.md"]],
  ["v-13c33eef","/publications/",{"title":"Publications","type":"article","readingTime":{"minutes":7.79,"words":2336},"excerpt":"Publications <Paper v-for=\"paper in posts\" :year=\"paper.year\" :title=\"paper.title\" :authors=\"paper.authors\" :venue=\"paper.venue\" :link=\"paper.link\" :abstract=\"paper.abstract\" :pict"},["/publications/index.html","/publications/README.md"]],
  ["v-393700ae","/teaching/",{"title":"Teaching","type":"article","readingTime":{"minutes":0.79,"words":238},"excerpt":"Teaching Lectures / Courses\rParctical Course SWH:Sketching with Hardware @LMU (SS2022) ; \rParctical Course SWH:Sketching with Hardware Basics @LMU (SS2022) ; \rPractical Course: VR "},["/teaching/index.html","/teaching/README.md"]],
  ["v-199562c6","/theses/",{"title":"Available Topics for thesis","type":"article","readingTime":{"minutes":1.15,"words":344},"excerpt":"Available Topics for thesis The following is a list of available topics for Bachelor's and Master's thesis. In addition, you will find a tentative title for your thesis, a short ab"},["/theses/index.html","/theses/README.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"Articles","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"Encrypted","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"Slides","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"Star","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"Timeline","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-ac0c2a6a","/category/guide/",{"title":"Guide Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/guide/index.html"]],
  ["v-c5a9e2d6","/tag/disable/",{"title":"disable Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/disable/index.html"]],
  ["v-3e5b7b84","/category/categorya/",{"title":"CategoryA Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/categorya/index.html"]],
  ["v-cbedfc04","/tag/encryption/",{"title":"encryption Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/encryption/index.html"]],
  ["v-3e5b7ba3","/category/categoryb/",{"title":"CategoryB Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/categoryb/index.html"]],
  ["v-484552dc","/tag/markdown/",{"title":"markdown Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/markdown/index.html"]],
  ["v-26f8293d","/tag/page-config/",{"title":"Page config Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/page-config/index.html"]],
  ["v-30e296fe","/tag/guide/",{"title":"Guide Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/guide/index.html"]],
  ["v-06bbb262","/tag/tag-a/",{"title":"tag A Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/tag-a/index.html"]],
  ["v-06bbb224","/tag/tag-b/",{"title":"tag B Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/tag-b/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
