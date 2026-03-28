"use client";

import axios from "axios";
import { useEffect } from "react";

const wModInitScript = `!function(o,c){var n=c.documentElement,t="w-mod-";n.classList.contains(t+"js")||n.classList.add(t+"js"),("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&n.classList.add(t+"touch")}(window,document);`;

const lenisScript = `
(function () {
  if (!window.Lenis || window.__billoLenis) return;
  const lenis = new window.Lenis({
    autoRaf: true,
    duration: 2,
  });
  window.__billoLenis = lenis;

  if (!window.__billoHeroTypingCompleted) {
    lenis.stop();
  }

  window.addEventListener("billo:hero-scroll-unlock", function () {
    if (window.__billoLenis) {
      window.__billoLenis.start();
    }
  });
})();
`;

const textSplitScript = `
(function () {
  if (!window.gsap || !window.ScrollTrigger || !window.SplitType) return;

  function initTextSplit() {
    if (window.__billoTextSplitInitialized) return;
    window.__billoTextSplitInitialized = true;

    setTimeout(function () {
      new window.SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span"
      });

      function createScrollTrigger(triggerEl, timeline) {
        window.ScrollTrigger.create({
          trigger: triggerEl,
          start: "top bottom",
          onLeaveBack: function () {
            timeline.progress(0);
            timeline.pause();
          }
        });

        window.ScrollTrigger.create({
          trigger: triggerEl,
          start: "top 60%",
          onEnter: function () {
            timeline.play();
          }
        });
      }

      document.querySelectorAll("[words-slide-up]").forEach(function (el) {
        const tl = window.gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll(".word"), {
          opacity: 0,
          yPercent: 100,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: { amount: 0.5 }
        });
        createScrollTrigger(el, tl);
      });

      document.querySelectorAll("[words-rotate-in]").forEach(function (el) {
        const tl = window.gsap.timeline({ paused: true });
        window.gsap.set(el.querySelectorAll(".word"), { transformPerspective: 1000 });
        tl.from(el.querySelectorAll(".word"), {
          rotationX: -90,
          duration: 0.6,
          ease: "power2.out",
          stagger: { amount: 0.6 }
        });
        createScrollTrigger(el, tl);
      });

      document.querySelectorAll("[words-slide-from-right]").forEach(function (el) {
        const tl = window.gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll(".word"), {
          opacity: 0,
          x: "1em",
          duration: 0.6,
          ease: "power2.out",
          stagger: { amount: 0.2 }
        });
        createScrollTrigger(el, tl);
      });

      document.querySelectorAll("[letters-slide-up]").forEach(function (el) {
        const tl = window.gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll(".char"), {
          yPercent: 100,
          duration: 0.2,
          ease: "power1.out",
          stagger: { amount: 0.6 }
        });
        createScrollTrigger(el, tl);
      });

      document.querySelectorAll("[letters-fade-in]").forEach(function (el) {
        const tl = window.gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll(".char"), {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          stagger: { amount: 2 }
        });
        createScrollTrigger(el, tl);
      });

      document.querySelectorAll("[letters-fade-in-delay]").forEach(function (el) {
        const tl = window.gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll(".char"), {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          stagger: { each: 0.04, from: "start" }
        });
        createScrollTrigger(el, tl);
      });

      document.querySelectorAll("[letters-fade-in-random-delay]").forEach(function (el) {
        const tl = window.gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll(".char"), {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          stagger: { amount: 1.2, from: "random" }
        });
        createScrollTrigger(el, tl);
      });

      document.querySelectorAll("[scrub-each-word]").forEach(function (el) {
        window.gsap.from(el.querySelectorAll(".word"), {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top center",
            scrub: true
          },
          opacity: 0.4,
          duration: 0.2,
          stagger: 0.4
        });
      });

      window.gsap.set("[text-split]", { opacity: 1 });
      window.ScrollTrigger.refresh();
    }, 300);
  }

  window.gsap.registerPlugin(window.ScrollTrigger);

  if (document.readyState === "complete") {
    initTextSplit();
  } else {
    window.addEventListener("load", initTextSplit, { once: true });
  }
})();
`;

const typedScript = `
(function () {
  if (!window.Typed) return;

  function initTypedLazy(selector, options) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    // Check if it's already initialized
    if (element.hasAttribute("data-typed-inited")) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!element.hasAttribute("data-typed-inited")) {
                    element.setAttribute("data-typed-inited", "true");
                    element.innerHTML = ""; // Clear fallback content
                    new window.Typed(selector, options);
                }
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(element);
  }

  function initHeroTyped(force) {
    const el = document.querySelector("#typer-hero");
    if (!el) return;

    if (window.heroTypedInst) {
      window.heroTypedInst.destroy();
      window.heroTypedInst = null;
    }

    if (!force && el.hasAttribute("data-typed-inited")) return;

    el.setAttribute("data-typed-inited", "true");
    el.innerHTML = "";

    window.heroTypedInst = new window.Typed("#typer-hero", {
      strings: [
        "<i></i>Hey, I’m Ahmad ",
        "Full Stack Engineer",
        "Scroll down and see my work!"
      ],
      typeSpeed: 25,
      loop: false,
      onComplete: function () {
        window.setTimeout(function () {
          window.dispatchEvent(new CustomEvent("billo:hero-typing-complete"));
        }, 300);
      }
    });
  }

  // Modal explicitly re-initialized on click
  window.__reinitModalTyped = function() {
    if (window.modalTypedInst) {
      window.modalTypedInst.destroy();
    }
    const el = document.querySelector("#typer-modal");
    if (el) el.innerHTML = "";
    
    window.modalTypedInst = new window.Typed("#typer-modal", {
      strings: ["<i></i>Hey human ", "I'll deliver your message straight to Ahmad!"],
      typeSpeed: 40,
      loop: true,
      backDelay: 3000
    });
  };

  function initAllTyped() {
    if (window.__billoTypedInitialized) return;
    window.__billoTypedInitialized = true;

    initTypedLazy("#typer-footer-button", {
      strings: ["<i></i>Yes Human! that button, press it NOW. thank you!", "I am waiting..."],
      typeSpeed: 40,
      loop: true,
      backDelay: 2000
    });

    initTypedLazy("#typer-footer", {
      strings: ["<i></i>What are you waiting for?", "Smash that 'Let's connect' button human! "],
      typeSpeed: 40,
      loop: true,
      backDelay: 3000
    });

    if (!document.querySelector(".c-preloader")) {
      initHeroTyped(false);
    }

    if (window.__billoHeroSequenceStarted) {
      initHeroTyped(true);
    }
  }

  window.addEventListener("billo:hero-ready", function () {
    initHeroTyped(true);
  });

  window.addEventListener("billo:hero-typing-complete", function () {
    window.__billoHeroTypingCompleted = true;
    document.body.classList.add("hero-ready");
    window.setTimeout(function () {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    }, 60);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllTyped, { once: true });
  } else {
    initAllTyped();
  }
})();
`;

const soundScript = `
(function () {
  if (!window.jQuery || !window.Howl || !window.Howler) return;

  window.jQuery(function ($) {
    let audioUnlocked = false;
    let sounds = null;
    let queuedBackgroundStart = false;

    function getSounds() {
      if (sounds) return sounds;
      sounds = {
        sound: new window.Howl({ src: ["https://cdn.jsdelivr.net/gh/bedantpixeto/audio/ES_MM%20Beep%2043%20-%20SFX%20Producer.mp3"], volume: 0.3 }),
        bgSound: new window.Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69075d954c44c34dc329df73_aeolian-futuristics-atmo-track-119821.mp3"], volume: 0.1, loop: true }),
        orbSound: new window.Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6907408596b2ea520c731176_robot-broken-loading-206293.mp3"], volume: 0.4 }),
        orbSoundHappy: new window.Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69074aa385c0c5cdaa894e6c_robot_excited.mp3"], volume: 0.4 }),
        orbSoundHappyShort0: new window.Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69087e40c634cb1c87a3ed2c_robot_excited-short0.mp3"], volume: 0.4 }),
        orbSoundSad0: new window.Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69087e40d64b7ca9ce9370ee_robot_sad0.mp3"], volume: 0.4 }),
        orbSoundSad: new window.Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69074aa3e8ae78c8333cd20f_robot_sad.mp3"], volume: 0.4 }),
        clickSound: new window.Howl({ src: ["https://cdn.jsdelivr.net/gh/bedantpixeto/audio/ES_MM%20Beep%2043%20-%20SFX%20Producer.mp3"] }),
        hoverSound: new window.Howl({ src: ["https://cdn.jsdelivr.net/gh/bedantpixeto/audio/hover-1.mp3"] }),
        typingSound: new window.Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69088acb99898eaef231aff2_Digital%20Fururistic%20Typing-%20extended.MP3"], volume: 0.3, loop: true })
      };
      return sounds;
    }

    let soundOn = localStorage.getItem("soundOn");
    if (soundOn === null) soundOn = "true";
    if (soundOn === "false") {
      window.Howler.mute(true);
      $("#sound").addClass("muted");
    }

    function canPlayAudio() {
      return audioUnlocked && !window.Howler._muted;
    }

    function playHowl(howl) {
      if (!canPlayAudio()) return;
      howl.play();
    }

    function unlockAudio() {
      if (audioUnlocked) return;
      audioUnlocked = true;
      const s = getSounds();
      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
      if (queuedBackgroundStart || !window.Howler._muted) {
        playHowl(s.bgSound);
        queuedBackgroundStart = false;
      }
    }

    document.addEventListener("pointerdown", unlockAudio, { once: true });
    document.addEventListener("keydown", unlockAudio, { once: true });

    $("#sound").on("click", function () {
      unlockAudio();
      $(this).toggleClass("muted");
      const isMuted = $(this).hasClass("muted");
      window.Howler.mute(isMuted);
      localStorage.setItem("soundOn", String(!isMuted));

      if (!isMuted) {
        playHowl(getSounds().bgSound);
      } else if (sounds) {
        sounds.bgSound.pause();
        sounds.typingSound.pause();
      }
    });

    $("[data-activate-sound]").on("click", function () {
      unlockAudio();
      playHowl(getSounds().sound);
    });

    $("[data-bgsound], [data-bgSound]").on("click", function () {
      unlockAudio();
      playHowl(getSounds().bgSound);
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        if (sounds) {
          sounds.bgSound.pause();
          sounds.typingSound.pause();
          sounds.orbSoundHappy.pause();
        }
      } else if (sounds) {
        playHowl(sounds.bgSound);
      } else if (!window.Howler._muted) {
        queuedBackgroundStart = true;
      }
    });

    $("[data-hover]").on("mouseenter", function () {
      const s = getSounds();
      playHowl(s.hoverSound);
      s.orbSoundSad0.stop();
      playHowl(s.orbSoundHappyShort0);
    });

    $("[data-hover]").on("mouseleave", function () {
      const s = getSounds();
      s.orbSoundHappyShort0.stop();
      playHowl(s.orbSoundSad0);
    });

    $("[data-click-formopen]").on("click", function () {
      const s = getSounds();
      unlockAudio();
      s.orbSoundSad0.stop();
      s.orbSoundSad.stop();
      s.orbSoundHappyShort0.stop();
      if(sounds) s.typingSound.stop();
      playHowl(s.orbSoundHappy);
      
      // Trigger live re-type in modal
      if (window.__reinitModalTyped) {
        setTimeout(() => window.__reinitModalTyped(), 400);
      }
    });

    $("[data-click-formclose]").on("click", function () {
      const s = getSounds();
      s.orbSoundHappy.stop();
      playHowl(s.orbSoundSad);
    });

    $("[data-click]").on("click", function () {
      unlockAudio();
      playHowl(getSounds().clickSound);
    });

    $("[data-click2]").on("click", function () {
      unlockAudio();
      playHowl(getSounds().hoverSound);
    });

    $("[data-hoverorb]").on("mouseenter", function () {
      const s = getSounds();
      playHowl(s.orbSound);
    }).on("mouseleave", function () {
      if (sounds) sounds.orbSound.stop();
    });

    // ----------------------------------------------------
    // Flawless typing sound syncer via MutationObserver
    // ----------------------------------------------------
    const typingBoxes = ["#typer-footer", "#typer-hero", "#typer-footer-button", "#typer-modal"];
    window.__visibleTypingElements = new Set();
    
    function isElementVisuallyVisible(el) {
       if (!el) return false;
       const rect = el.getBoundingClientRect();
       if (rect.width === 0 || rect.height === 0) return false;
       const computed = window.getComputedStyle(el);
       if (computed.opacity === "0" || computed.display === "none" || computed.visibility === "hidden") return false;
       const modalWrapper = el.closest('.modal_wrapper');
       if (modalWrapper) {
          const wrapperStyle = window.getComputedStyle(modalWrapper);
          if (wrapperStyle.opacity === "0" || wrapperStyle.display === "none" || wrapperStyle.visibility === "hidden") return false;
       }
       return true;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          window.__visibleTypingElements.add("#" + entry.target.id);
        } else {
          window.__visibleTypingElements.delete("#" + entry.target.id);
        }
      });
    }, { threshold: 0.1 });

    let typingTimeout = null;
    const mutObserver = new MutationObserver((mutations) => {
        let isAudibleType = false;
        
        mutations.forEach(m => {
           typingBoxes.forEach(selector => {
               const el = document.querySelector(selector);
               if (el && el.contains(m.target)) {
                   if (window.__visibleTypingElements.has(selector) && isElementVisuallyVisible(el)) {
                       isAudibleType = true;
                   }
               }
           });
        });

        if(isAudibleType) {
           const s = getSounds();
           if(!window.Howler._muted && !document.hidden && audioUnlocked) {
               if(!s.typingSound.playing()) s.typingSound.play();
           }
           if (typingTimeout) clearTimeout(typingTimeout);
           typingTimeout = setTimeout(() => {
               if(sounds) sounds.typingSound.pause();
           }, 100); // Stop sound entirely if typing pauses for more than 100ms
        }
    });

    // Wait slightly to ensure Typed instances render the DOM elements
    setTimeout(() => {
      typingBoxes.forEach(function (id) {
        const el = document.querySelector(id);
        if (el) {
           observer.observe(el);
           mutObserver.observe(el, { characterData: true, childList: true, subtree: true });
        }
      });
    }, 1000);

    if (!window.Howler._muted) {
      queuedBackgroundStart = true;
    }
  });
})();
`;

const chatbotScript = `
(function() {
  if (!window.axios) {
    console.error("Axios is not available for the chatbot.");
    return;
  }

  const CONFIG = {
    apiUrl: "/api/chat",
    typingSpeed: 30,
    maxHistory: 5,
    typingSoundVolume: 0.15
  };

  const chatButton = document.getElementById("ai-chat-button");
  const chatModal = document.getElementById("ai-chat-modal");
  const chatClose = document.querySelector(".ai-chat-close");
  const chatForm = document.getElementById("ai-chat-form");
  const chatInput = document.getElementById("ai-chat-input");
  const messagesContainer = document.getElementById("ai-messages");
  const typingIndicator = document.getElementById("ai-typing");
  const quickQuestions = document.getElementById("quick-questions");
  const typingSound = document.getElementById("ai-typing-sound");

  if (!chatButton || !chatModal || !chatClose || !chatForm || !chatInput || !messagesContainer || !typingIndicator || !typingSound) {
    return;
  }

  let conversationHistory = [];
  let isTyping = false;
  let currentTypeInterval = null;

  typingSound.volume = CONFIG.typingSoundVolume;

  const initialTime = document.getElementById("initial-time");
  if (initialTime) {
    initialTime.textContent = formatTime(new Date());
  }

  chatButton.addEventListener("click", openModal);
  chatClose.addEventListener("click", closeModal);
  chatModal.addEventListener("click", function (e) {
    if (e.target === chatModal) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && chatModal.classList.contains("active")) {
      closeModal();
    }
  });

  function openModal() {
    chatModal.classList.add("active");
    document.body.classList.add("ai-chat-open");
    chatInput.focus();
  }

  function closeModal() {
    chatModal.classList.remove("active");
    document.body.classList.remove("ai-chat-open");
    stopTypingSound();
  }

  function playTypingSound() {
    try {
      typingSound.currentTime = 0;
      typingSound.play().catch(function () {});
    } catch (e) {}
  }

  function stopTypingSound() {
    try {
      typingSound.pause();
      typingSound.currentTime = 0;
    } catch (e) {}
  }

  chatForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message || isTyping) return;

    addUserMessage(message);
    chatInput.value = "";
    hideQuickQuestions();
    await sendMessage(message);
  });

  document.querySelectorAll(".ai-quick-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const question = btn.getAttribute("data-question");
      chatInput.value = question || "";
      chatInput.focus();
    });
  });

  function addUserMessage(content) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "ai-message user";
    messageDiv.innerHTML = '<div class="ai-message-avatar user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div><div class="ai-message-bubble">' + escapeHtml(content) + '</div><div class="ai-message-time">' + formatTime(new Date()) + "</div></div>";

    if (typingIndicator.previousElementSibling) {
      messagesContainer.insertBefore(messageDiv, typingIndicator);
    } else {
      messagesContainer.appendChild(messageDiv);
    }

    scrollToBottom();
    conversationHistory.push({ role: "user", content: content });
  }

  function addBotMessage(content, typing) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "ai-message bot";
    const messageId = "msg-" + Date.now();
    messageDiv.id = messageId;
    messageDiv.innerHTML = '<div class="ai-message-avatar bot"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></div><div><div class="ai-message-bubble" id="' + messageId + '-content"></div><div class="ai-message-time">' + formatTime(new Date()) + "</div></div>";

    messagesContainer.insertBefore(messageDiv, typingIndicator);
    scrollToBottom();

    if (typing) {
      typeMessage(messageId + "-content", content);
    } else {
      const contentEl = document.getElementById(messageId + "-content");
      if (contentEl) contentEl.textContent = content;
    }

    conversationHistory.push({ role: "assistant", content: content });
  }

  function typeMessage(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let index = 0;
    element.innerHTML = '<span class="ai-typing-cursor"></span>';
    playTypingSound();

    currentTypeInterval = setInterval(function () {
      if (index < text.length) {
        element.innerHTML = escapeHtml(text.substring(0, index + 1)) + '<span class="ai-typing-cursor"></span>';
        index += 1;
        scrollToBottom();
      } else {
        element.innerHTML = escapeHtml(text);
        clearInterval(currentTypeInterval);
        currentTypeInterval = null;
        stopTypingSound();
      }
    }, CONFIG.typingSpeed);
  }

  async function sendMessage(message) {
    showTyping();

    try {
      const response = await window.axios.post(
        CONFIG.apiUrl,
        {
          message: message,
          conversationHistory: conversationHistory.slice(-CONFIG.maxHistory)
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      hideTyping();
      addBotMessage(response.data.response, true);
    } catch (error) {
      console.error("Chat error:", error);
      hideTyping();
      const responseError =
        error &&
        error.response &&
        error.response.data &&
        typeof error.response.data.error === "string" &&
        error.response.data.error
          ? error.response.data.error
          : null;

      addBotMessage(
        responseError ||
          (error instanceof Error && error.message
          ? error.message
          : "Oops! Something went wrong. Please try again."),
        true
      );
    }
  }

  function showTyping() {
    isTyping = true;
    typingIndicator.classList.add("active");
    chatInput.disabled = true;
    scrollToBottom();
  }

  function hideTyping() {
    isTyping = false;
    typingIndicator.classList.remove("active");
    chatInput.disabled = false;
    chatInput.focus();
  }

  function hideQuickQuestions() {
    if (quickQuestions) quickQuestions.style.display = "none";
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  window.addEventListener("beforeunload", function () {
    stopTypingSound();
    if (currentTypeInterval) clearInterval(currentTypeInterval);
  });
})();
`;

type ExternalScript = {
  src: string;
  crossOrigin?: string;
};

const CRITICAL_EXTERNAL_SCRIPTS: ExternalScript[] = [
  {
    src: "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68f3884d9e35f473a885d321",
    crossOrigin: "anonymous",
  },
  {
    src: "https://wubflow-shield.nocodexport.dev/gsap/3.14.2/gsap.min.js",
  },
  {
    src: "https://wubflow-shield.nocodexport.dev/gsap/3.14.2/SplitText.min.js",
  },
  {
    src: "https://wubflow-shield.nocodexport.dev/gsap/3.14.2/ScrollTrigger.min.js",
  },
  {
    src: "https://wubflow-shield.nocodexport.dev/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js",
    crossOrigin: "anonymous",
  },
  {
    src: "https://wubflow-shield.nocodexport.dev/68f3884d9e35f473a885d321/js/webflow.schunk.8208d3e53b97e3c7.js",
    crossOrigin: "anonymous",
  },
  {
    src: "https://wubflow-shield.nocodexport.dev/68f3884d9e35f473a885d321/js/webflow.schunk.1d6e3072cb432cf9.js",
    crossOrigin: "anonymous",
  },
  {
    src: "https://wubflow-shield.nocodexport.dev/68f3884d9e35f473a885d321/js/webflow.54ac5312.a10549c34a12cf8d.js",
    crossOrigin: "anonymous",
  },
  {
    src: "https://unpkg.com/split-type",
  },
];

const DEFERRED_EXTERNAL_SCRIPTS: ExternalScript[] = [
  {
    src: "https://unpkg.com/lenis@1.3.11/dist/lenis.min.js",
  },
  {
    src: "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js",
  },
  {
    src: "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js",
  },
];

declare global {
  interface Window {
    __billoScriptsLoaded?: boolean;
    axios?: typeof axios;
  }
}

export default function LegacyScripts() {
  useEffect(() => {
    if (window.__billoScriptsLoaded) return;
    window.__billoScriptsLoaded = true;
    window.axios = axios;

    const appendInlineScript = (id: string, code: string) => {
      if (document.querySelector(`script[data-billo-inline="${id}"]`)) return;
      const script = document.createElement("script");
      script.dataset.billoInline = id;
      script.text = code;
      document.head.appendChild(script);
    };

    const appendExternalScript = (src: string, crossOrigin?: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(
          `script[data-billo-src="${src}"]`,
        ) as HTMLScriptElement | null;

        if (existing) {
          if (existing.dataset.loaded === "true") {
            resolve();
            return;
          }

          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener(
            "error",
            () => reject(new Error(`Failed to load ${src}`)),
            { once: true },
          );
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.defer = false;
        script.dataset.billoSrc = src;
        if (crossOrigin) {
          script.crossOrigin = crossOrigin;
        }
        script.addEventListener(
          "load",
          () => {
            script.dataset.loaded = "true";
            resolve();
          },
          { once: true },
        );
        script.addEventListener(
          "error",
          () => reject(new Error(`Failed to load ${src}`)),
          { once: true },
        );
        document.head.appendChild(script);
      });

    appendInlineScript("w-mod-init", wModInitScript);

    const appendInlineForScript = (src: string) => {
      if (src === "https://unpkg.com/lenis@1.3.11/dist/lenis.min.js") {
        appendInlineScript("legacy-lenis-inline", lenisScript);
      }

      if (src === "https://unpkg.com/split-type") {
        appendInlineScript("legacy-text-split-inline", textSplitScript);
      }

      if (src === "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js") {
        appendInlineScript("legacy-typed-inline", typedScript);
      }

      if (
        src ===
        "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"
      ) {
        appendInlineScript("legacy-sound-inline", soundScript);
      }
    };

    const loadScriptGroup = async (scripts: ExternalScript[]) => {
      for (const script of scripts) {
        await appendExternalScript(script.src, script.crossOrigin);
        appendInlineForScript(script.src);
      }
    };

    let deferredScheduled = false;
    const scheduleDeferredEnhancements = () => {
      if (deferredScheduled) return;
      deferredScheduled = true;

      const startDeferredLoad = () => {
        void (async () => {
          try {
            await loadScriptGroup(DEFERRED_EXTERNAL_SCRIPTS);
            appendInlineScript("legacy-chatbot-inline", chatbotScript);
          } catch (error) {
            console.error("Deferred legacy asset load failed:", error);
          }
        })();
      };

      const idleWindow = window as Window & {
        requestIdleCallback?: (
          callback: IdleRequestCallback,
          options?: IdleRequestOptions,
        ) => number;
      };

      if (idleWindow.requestIdleCallback) {
        idleWindow.requestIdleCallback(startDeferredLoad, { timeout: 1500 });
        return;
      }

      globalThis.setTimeout(startDeferredLoad, 300);
    };

    (async () => {
      try {
        await loadScriptGroup(CRITICAL_EXTERNAL_SCRIPTS);

        if (document.readyState === "complete") {
          scheduleDeferredEnhancements();
        } else {
          window.addEventListener("load", scheduleDeferredEnhancements, {
            once: true,
          });
        }
      } catch (error) {
        console.error("Legacy asset load failed:", error);
      }
    })();
  }, []);

  return null;
}
