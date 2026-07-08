import { defineClientConfig } from "vuepress/client";
import { nextTick, onMounted } from "vue";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getNavbarOffset = () => {
  const navbar = document.querySelector<HTMLElement>(".vp-navbar");
  return navbar ? navbar.offsetHeight + 18 : 88;
};

const getHashTarget = (hash: string) => {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  const escapedId = window.CSS?.escape ? CSS.escape(id) : id.replace(/"/g, '\\"');
  return document.getElementById(id) || document.querySelector(`[name="${escapedId}"]`);
};

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

const scrollToHash = (hash: string) => {
  const target = getHashTarget(hash);
  if (!target) return;

  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - getNavbarOffset();

  if (prefersReducedMotion()) {
    window.scrollTo(0, targetTop);
    return;
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const duration = Math.min(850, Math.max(320, Math.abs(distance) * 0.45));
  const startTime = performance.now();

  const step = (time: number) => {
    const progress = Math.min(1, (time - startTime) / duration);
    window.scrollTo(0, startTop + distance * easeOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

export default defineClientConfig({
  enhance({ router }) {
    router.afterEach((to) => {
      if (!to.hash) return;

      nextTick(() => {
        scrollToHash(to.hash);
      });
    });
  },
  setup() {
    onMounted(() => {
      window.addEventListener("click", (event) => {
        const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
          'a[href*="#"]'
        );

        if (!link || link.target || event.defaultPrevented) return;

        const url = new URL(link.href, window.location.href);
        const isSamePage =
          url.origin === window.location.origin &&
          url.pathname === window.location.pathname &&
          url.search === window.location.search;

        if (!isSamePage || !url.hash) return;

        event.preventDefault();
        history.pushState(null, "", url.hash);
        scrollToHash(url.hash);
      });
    });
  },
});
