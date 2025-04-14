// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Some cool stuff I wanna show.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-why-this",
        
          title: "Why this.",
        
        description: "Reasons behind my idea of writing things down.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/why/";
          
        },
      },{id: "books-atomic-habits",
          title: 'Atomic Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/atomic_habits/";
            },},{id: "books-l-39-uomo-più-ricco-di-babilonia",
          title: 'L&amp;#39;uomo più ricco di Babilonia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/babilonia/";
            },},{id: "books-la-società-senza-dolore-perché-abbiamo-bandito-la-sofferenza-dalle-nostre-vite",
          title: 'La società senza dolore. Perché abbiamo bandito la sofferenza dalle nostre vite',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/byung-chul-han1/";
            },},{id: "books-come-parlare-in-pubblico-e-convincere-gli-altri",
          title: 'Come parlare in pubblico e convincere gli altri',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dc1/";
            },},{id: "books-hands-on-machine-learning",
          title: 'Hands-On Machine Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/handsonML/";
            },},{id: "books-",
          title: '',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/outliers/";
            },},{id: "books-siddharta",
          title: 'Siddharta',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/siddharta/";
            },},{id: "news-just-joined-cornell-university-️",
          title: 'Just joined Cornell University! 🐻🇺🇸❤️🥳',
          description: "",
          section: "News",},{id: "news-i-decided-to-swich-major-for-my-masters-here-39-s-why",
          title: 'I decided to swich major for my masters, here&amp;#39;s why.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-kalman-filters",
          title: 'Kalman Filters',
          description: "A gentle introduction to Kalman filters and a simple application",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kalman-filters/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6C%69%61.%7A%6F%6E%74%61%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/eliazonta", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/happyeliia", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
