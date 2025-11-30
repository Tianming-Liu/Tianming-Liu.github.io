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
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-envlink",
          title: 'EnvLink',
          description: "Multi-modal Sensing and Visualization System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/envlink/";
            },},{id: "projects-flowing-center",
          title: 'Flowing Center',
          description: "Data-driven Design &amp; Agent-Based Modeling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flowing_center/";
            },},{id: "projects-geoscanner",
          title: 'GeoScanner',
          description: "Portable Mobile Sensing Solution",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geoscanner/";
            },},{id: "projects-geotracker",
          title: 'GeoTracker',
          description: "Context-aware Geospatial Interaction Platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geotracker/";
            },},{id: "projects-pocket-park-generation-system",
          title: 'Pocket Park Generation System',
          description: "Urban Data Analysis &amp; Data-driven Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pocket_park_design/";
            },},{id: "projects-time-slip",
          title: 'Time Slip',
          description: "Parametric Design &amp; Dynamic Simulation  &amp; Design Visualization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/time_slip_design/";
            },},{
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
