"use client";

import { useEffect } from "react";
import UpcomingConference from "../research/upcoming_conference";

const eResources = [
  {
    id: 1,
    title: "Scopus",
    description:
      "Scopus is a comprehensive abstract and citation database used for academic research across various disciplines. Developed by Elsevier, it is widely utilized by researchers, academics, and institutions to access a broad range of scientific literature and track research impact. A total of over 2900+ academic journals from various disciplines are indexed in this database.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-scopus.jpg",
    href: "https://www.elsevier.com/en-in/products/scopus",
  },
  {
    id: 2,
    title: "LexisNexis",
    description:
      "LexisNexis is a global provider of information and analytics solutions for professionals in the legal, risk management, corporate, government, and academic sectors, offering content-enabled workflows, data analytics, and AI-powered tools to enhance decision-making and productivity. LexisNexis pioneered the electronic accessibility of legal documents and has since evolved into a comprehensive database offering a vast range of resources such as legal resources, legal news, business and company information, IPR, Taxation and Labour Law etc.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-lexisnexis.jpg",
    href: "https://www.lexisnexis.com/community/insights/professional/resources",
  },
  {
    id: 3,
    title: "DELNET",
    description:
      "DELNET was started at the India International Centre Library in January 1988 and was registered as a society in 1992. It was initially supported by the National Information System for Science and Technology (NISSAT), Department of Scientific and Industrial Research, Government of India. It was subsequently supported by the National Informatics Centre, Department of Information Technology, Ministry of Communications and Information Technology, Government of India and the Ministry of Culture, Government of India.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-delnet.jpg",
    href: "https://www.delnet.in/",
  },
  {
    id: 4,
    title: "Drillbit",
    description:
      "Drillbit is a cloud-based tool designed to assist educators and students in managing and improving academic writing skills. Drillbit is designed to enhance the writing process, providing tools and resources that support better writing practices and academic integrity. Its focus on grammar, style, and feedback makes it a valuable resource for both students looking to improve their writing and educators aiming to support their students’ development.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-drillbit.jpg",
    href: "https://www.drillbitplagiarism.com/",
  },
  {
    id: 5,
    title: "Turnitin",
    description:
      "Turnitin is widely used across educational institutions to maintain academic integrity and improve the quality of scholarly work. It’s important to note that while Turnitin is a powerful tool, it should be used as part of a broader approach to teaching academic integrity and writing skills.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-turnitin.jpg",
    href: "https://www.turnitin.com/",
  },
  {
    id: 6,
    title: "NPTEL",
    description:
      "NPTEL serves as one of the world's largest online repositories for engineering, basic sciences, and humanities courseware. It is a joint venture of the IITs and IISc, funded by the Ministry of Education (MoE), Government of India, and was launched in 2003. NPTEL offers over 70,000 hours of video content and more than 3,200 unique courses for self-study in various disciplines at both undergraduate and postgraduate levels.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-nptel.jpg",
    href: "https://nptel.ac.in/",
  },
  {
    id: 7,
    title: "NDLI",
    description:
      "The National Digital Library of India (NDLI) is a virtual repository of learning resources, including textbooks, articles, videos, audio books, lectures, simulations, and fiction, sponsored by the Ministry of Education under the National Mission on Education through Information and Communication Technology (NMEICT).  It provides a single-window search facility and its interface supports 10–12 major Indian languages.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-ndli.jpg",
    href: "https://club.ndl.iitkgp.ac.in/club-home",
  },
  {
    id: 8,
    title: "IRINS",
    description:
      "IRINS is web-based Research Information Management (RIM) service developed by the Information and Library Network (INFLIBNET) Centre. The portal facilitates academic, R&D organizations and faculty members, scientists to collect, curate and showcase scholarly communication activities and provide an opportunity to create the scholarly network. The IRINS is available as free software-as-service to the academic and R&D organizations in India. The IRINS would support to integrate the existing research management system such as HR system, course management, grant management system, institutional repository, open and commercial citation databases, scholarly publishers, etc. It has integrated with academic identity such as ORCID ID, ScopusID, Research ID, Microsoft Academic ID, Google Scholar ID for ingesting the scholarly publication from various sources.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-irins.jpg",
    href: "https://irins.org/",
  },
  {
    id: 9,
    title: "INFEED",
    description:
      "INDIAN Access Management Federation (INFED), the first Federation in India, has adopted Shibboleth, a standard-based open-source software, for authenticating authorized users from colleges and universities and provide them seamless access to e-resources from anywhere, anytime. The INFLIBNET Centre, as one of its core mandates, provides access to scholarly e-resource to universities and colleges in India under the e-ShodhSindhu. The INFED is being set-up as a centralized agency to coordinate with member institutions in the process of implementation of user authentication and access control mechanism distributed across participating institutions using standardized rules and metadata for exchange of attributes.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-infed.jpg",
    href: "https://infeed.in/",
  },
];

export default function LibraryResource() {
  useEffect(() => {
    const wrapper = document.querySelector(".library-e-resources-wrapper");
    if (!wrapper) return;

    // 1) Change button text to "Open Link"
    const replaceButtonText = () => {
      const all = wrapper.querySelectorAll("*");
      all.forEach((el) => {
        const txt = el.textContent?.trim();
        if (txt === "Register Now") {
          if (el.children.length === 0) el.textContent = "Open Link";
        }
      });
    };

    // 2) Read More / Read Less for description (without touching UpcomingConference)
    const RESOURCE_DESC = new Map(eResources.map((r) => [r.title, r.description]));
    const expandedTitles = new Set();

    const setupReadMore = () => {
      const slides = wrapper.querySelectorAll(".swiper-slide");
      slides.forEach((slide) => {
        const titleEl = slide.querySelector("h1, h2, h3");
        const title = titleEl?.textContent?.trim();
        if (!title || !RESOURCE_DESC.has(title)) return;

        if (slide.querySelector(".library-desc")) return;

        const full = RESOURCE_DESC.get(title);

        const nodes = slide.querySelectorAll("p, div, span");
        let descNode = null;
        nodes.forEach((n) => {
          if (descNode) return;
          const t = n.textContent?.trim();
          if (t === full) descNode = n;
        });
        if (!descNode) return;

        const descWrap = document.createElement("div");
        descWrap.className = "library-desc-wrap";

        const descSpan = document.createElement("span");
        descSpan.className = "library-desc";
        descSpan.textContent = full;

        if (expandedTitles.has(title)) descSpan.classList.add("is-expanded");

        descNode.replaceWith(descWrap);
        descWrap.appendChild(descSpan);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "library-readmore";
        btn.setAttribute("data-title", title);
        btn.textContent = expandedTitles.has(title) ? "Read less" : "Read more";
        descWrap.appendChild(btn);

        requestAnimationFrame(() => {
          const isExpanded = descSpan.classList.contains("is-expanded");
          if (!isExpanded) {
            const overflows = descSpan.scrollHeight > descSpan.clientHeight + 1;
            if (!overflows) btn.style.display = "none";
          }
        });
      });
    };

    const toggleReadMore = (e) => {
      let el = e.target;
      while (el && el !== wrapper) {
        if (el.classList?.contains("library-readmore")) {
          const title = el.getAttribute("data-title");
          if (!title) return;

          const wrap = el.closest(".library-desc-wrap");
          const desc = wrap?.querySelector(".library-desc");
          if (!desc) return;

          const willExpand = !desc.classList.contains("is-expanded");
          desc.classList.toggle("is-expanded", willExpand);

          if (willExpand) expandedTitles.add(title);
          else expandedTitles.delete(title);

          el.textContent = willExpand ? "Read less" : "Read more";
          return;
        }
        el = el.parentElement;
      }
    };

    // 3) Make "Open Link" open href of active slide
    const getActiveHref = () => {
      const active = wrapper.querySelector(".swiper-slide-active");
      if (!active) return null;

      const rawIdx = active.getAttribute("data-swiper-slide-index");
      if (rawIdx !== null && rawIdx !== "") {
        const idx = Number(rawIdx);
        return eResources[idx]?.href || null;
      }

      const titleEl = active.querySelector("h3, h2, h1");
      const title = titleEl?.textContent?.trim();
      const found = eResources.find((r) => r.title === title);
      return found?.href || null;
    };

    const clickHandler = (e) => {
      // readmore
      toggleReadMore(e);

      // open link
      let el = e.target;
      while (el && el !== wrapper) {
        const t = el.textContent?.trim();
        if (t === "Open Link" || t === "Register Now") {
          const href = getActiveHref();
          if (href) window.open(href, "_blank", "noopener,noreferrer");
          return;
        }
        el = el.parentElement;
      }
    };

    replaceButtonText();
    setupReadMore();

    const mo = new MutationObserver(() => {
      replaceButtonText();
      setupReadMore();
    });
    mo.observe(wrapper, { childList: true, subtree: true });

    wrapper.addEventListener("click", clickHandler, true);

    return () => {
      wrapper.removeEventListener("click", clickHandler, true);
      mo.disconnect();
    };
  }, []);

  return (
    <div className="library-e-resources-wrapper py-12 md:py-16">
      <style jsx global>{`
        /* =============================
           Layout fixes for MOBILE images
           ============================= */

        /* Ensure card inner layout can wrap on small screens */
        @media (max-width: 768px) {
          .library-e-resources-wrapper :global(.swiper-slide > div > div) {
            flex-direction: column !important;
            align-items: center !important;
            gap: 14px !important;
          }
        }

        /* Image container: NEVER collapse on mobile */
        .library-e-resources-wrapper
          :global(.swiper-slide .overflow-hidden.rounded-xl) {
          flex: 0 0 34% !important;
          max-width: 34% !important;
          height: 170px !important;
          background: transparent !important;

          display: flex !important;
          justify-content: center !important;
          align-items: center !important;

          padding: 0 !important;
          margin: 0 auto !important;
          min-width: 140px !important; /* prevents disappearing */
        }

        /* Mobile: make image full width and visible */
        @media (max-width: 768px) {
          .library-e-resources-wrapper
            :global(.swiper-slide .overflow-hidden.rounded-xl) {
            flex: 0 0 auto !important;
            max-width: 100% !important;
            width: 100% !important;
            height: 190px !important;
            min-width: 0 !important;
          }
        }

        .library-e-resources-wrapper
          :global(.swiper-slide .overflow-hidden.rounded-xl > span),
        .library-e-resources-wrapper
          :global(.swiper-slide .overflow-hidden.rounded-xl > div) {
          width: 100% !important;
          height: 100% !important;

          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }

        /* image itself */
        .library-e-resources-wrapper :global(.swiper-slide img.object-cover) {
          width: auto !important;
          max-width: 90% !important;
          max-height: 100% !important;

          object-fit: contain !important;
          object-position: center !important;

          display: block !important;
          margin: 0 auto !important;
        }

        /* Mobile: allow larger image */
        @media (max-width: 768px) {
          .library-e-resources-wrapper :global(.swiper-slide img.object-cover) {
            max-width: 92% !important;
            max-height: 96% !important;
          }
        }

        /* Increase top padding inside card */
        .library-e-resources-wrapper :global(.swiper-slide > div) {
          padding-top: 32px !important;
        }

        @media (max-width: 768px) {
          .library-e-resources-wrapper :global(.swiper-slide > div) {
            padding-top: 18px !important;
          }
        }

        /* =============================
           Read More styles
           ============================= */

        .library-e-resources-wrapper :global(.library-desc-wrap) {
          margin-top: 8px;
        }

        .library-e-resources-wrapper :global(.library-desc) {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;

          line-height: 1.65;
          font-size: 0.95rem;
          color: rgba(17, 24, 39, 0.82);
        }

        .library-e-resources-wrapper :global(.library-desc.is-expanded) {
          -webkit-line-clamp: unset;
          display: block;
          overflow: visible;
        }

        .library-e-resources-wrapper :global(.library-readmore) {
          margin-top: 8px;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;

          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.1px;

          color: var(--red);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .library-e-resources-wrapper :global(.library-readmore:hover) {
          opacity: 0.9;
        }

        .library-e-resources-wrapper :global(.library-readmore:focus-visible) {
          outline: 2px solid rgba(0, 0, 0, 0.25);
          outline-offset: 3px;
          border-radius: 6px;
        }
      `}</style>

      <UpcomingConference
        conferences={eResources}
        title="E-Resources"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
        showCategory={false}
        showDate={false}
        imageHeight={170}
        navigationType="arrows"
      />
    </div>
  );
}
