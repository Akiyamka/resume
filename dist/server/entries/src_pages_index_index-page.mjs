import cl from 'clsx';
import { jsx, jsxs, Fragment } from 'preact/jsx-runtime';
import { formatDistanceStrict } from 'date-fns';

const variables = '';

const header$3 = "_header_yu0zg_1";
const heading = "_heading_yu0zg_7";
const subheading = "_subheading_yu0zg_12";
const s$7 = {
	header: header$3,
	heading: heading,
	subheading: subheading
};

function Header(props) {
  return jsx("header", {
    class: cl(props.classes.container, props.classes.header, s$7.header),
    children: jsxs("h2", {
      children: [jsx("div", {
        class: s$7.heading,
        children: props.heading
      }), jsx("div", {
        class: s$7.subheading,
        children: props.subheading
      })]
    })
  });
}

const address = "_address_1i0ac_1";
const contactsList = "_contactsList_1i0ac_6";
const s$6 = {
	address: address,
	contactsList: contactsList
};

function LinkWithLabel({
  label,
  link,
  text
}) {
  return jsxs("div", {
    children: [jsxs("span", {
      children: [label, ": "]
    }), jsx("a", {
      href: link,
      target: "_blank",
      children: text
    })]
  });
}
function Contacts(props) {
  if (props.contacts.length === 0)
    return null;
  return jsx("address", {
    class: cl(props.classes.container, props.classes.content, props.classes.header, s$6.address),
    children: jsx("div", {
      class: s$6.contactsList,
      children: props.contacts.map((c) => c.link ? jsx(LinkWithLabel, {
        label: c.label,
        link: c.link,
        text: c.value
      }) : jsxs("span", {
        children: [c.label, ": ", c.label]
      }))
    })
  });
}

const skills = "_skills_lyar4_1";
const level$1 = "_level_lyar4_14";
const s$5 = {
	skills: skills,
	level: level$1
};

const category_name_skills = "Skills";
const skills_levels = {
	intermediate: "Intermediate",
	experienced: "Experienced",
	advanced: "Advanced",
	expert: "Expert"
};
const t$3 = {
	category_name_skills: category_name_skills,
	skills_levels: skills_levels
};

function Skills(props) {
  return jsxs("div", {
    class: cl(props.classes.container, s$5.skills),
    children: [jsx("h3", {
      class: props.classes.header,
      children: t$3.category_name_skills
    }), jsx("table", {
      class: props.classes.content,
      children: jsx("tbody", {
        children: props.skills.map((skill) => jsxs("tr", {
          title: skill.tip,
          children: [jsxs("td", {
            children: [skill.title, jsx("sup", {
              children: skill.tip ? "?" : ""
            })]
          }), jsx("td", {
            class: s$5.level,
            children: t$3.skills_levels[skill.level]
          })]
        }))
      })
    })]
  });
}

const languages = "_languages_ksu5k_1";
const level = "_level_ksu5k_14";
const s$4 = {
	languages: languages,
	level: level
};

const category_name_languages = "Languages";
const languages_levels = {
	native: "Native",
	a1: "Beginner",
	a2: "Elementary",
	b1: "Intermediate English",
	b2: "Upper-Intermediate",
	c1: "Advanced",
	c2: "Proficiency"
};
const t$2 = {
	category_name_languages: category_name_languages,
	languages_levels: languages_levels
};

function Languages(props) {
  return jsxs("div", {
    class: cl(props.classes.container, s$4.languages),
    children: [jsx("h3", {
      class: props.classes.header,
      children: t$2.category_name_languages
    }), jsx("table", {
      class: props.classes.content,
      children: jsx("tbody", {
        children: props.languages.map((lang) => jsxs("tr", {
          children: [jsxs("td", {
            children: [lang.title, jsx("sup", {})]
          }), jsx("td", {
            class: s$4.level,
            children: t$2.languages_levels[lang.level]
          })]
        }))
      })
    })]
  });
}

const experience$1 = "_experience_1v6ws_1";
const categoryHeader$1 = "_categoryHeader_1v6ws_13";
const availableSpace = "_availableSpace_1v6ws_20";
const scrollable$1 = "_scrollable_1v6ws_26";
const period$1 = "_period_1v6ws_46";
const header$2 = "_header_1v6ws_51";
const responsibilities = "_responsibilities_1v6ws_66";
const position = "_position_1v6ws_66";
const techContainer = "_techContainer_1v6ws_80";
const techChips = "_techChips_1v6ws_87";
const timeMarker$1 = "_timeMarker_1v6ws_94";
const dateContainer$1 = "_dateContainer_1v6ws_111";
const opaque = "_opaque_1v6ws_116";
const s$3 = {
	experience: experience$1,
	categoryHeader: categoryHeader$1,
	availableSpace: availableSpace,
	scrollable: scrollable$1,
	period: period$1,
	header: header$2,
	responsibilities: responsibilities,
	position: position,
	techContainer: techContainer,
	techChips: techChips,
	timeMarker: timeMarker$1,
	dateContainer: dateContainer$1,
	opaque: opaque
};

const category_name_experience = "Experience";
const experience_responsibilities = "Responsibilities";
const experience_tech_stack = "Tech stack";
const experience_position = "Position";
const t$1 = {
	category_name_experience: category_name_experience,
	experience_responsibilities: experience_responsibilities,
	experience_tech_stack: experience_tech_stack,
	experience_position: experience_position
};

const nowInUTC = () => new Date(Date.now()).toUTCString();
const getDiff = (utcStart, utcEnd) => formatDistanceStrict(new Date(utcStart), new Date(utcEnd ?? nowInUTC()));
const getYears = (utcStart, utcEnd) => {
  const start = new Date(utcStart).getFullYear();
  const end = new Date(utcEnd ?? nowInUTC()).getFullYear();
  return `${start} - ${end}`;
};
function TimeDistanceInWords(props) {
  const distance = getDiff(props.utcStart, props.utcEnd);
  const distanceYear = getYears(props.utcStart, props.utcEnd);
  return distance ? jsxs("div", {
    title: distanceYear,
    children: [distance, jsx("sup", {
      children: "?"
    })]
  }) : null;
}

const external = "_external_t0xsq_7";
const s$2 = {
	external: external
};

function SmartLink({
  href,
  children
}) {
  if (!href)
    return jsx(Fragment, {
      children
    });
  const isExternalLink = href.startsWith("http") && new URL(href).host !== globalThis.location?.host;
  return jsx("a", {
    href,
    target: isExternalLink ? "_blank" : void 0,
    class: cl({
      [s$2.external]: isExternalLink
    }),
    title: href,
    children
  });
}

const sortByDateDescending = (periods) => [...periods].sort((p1, p2) => Date.parse(p2.date_start) - Date.parse(p1.date_start));

function Experience(props) {
  const sortedByDatePeriods = sortByDateDescending(props.experience.periods);
  const startEmployment = sortedByDatePeriods.at(-1)?.date_start;
  return jsxs("div", {
    class: cl(props.classes.container, s$3.experience),
    children: [jsxs("div", {
      class: cl(props.classes.header, s$3.categoryHeader),
      children: [jsxs("h3", {
        children: [" ", t$1.category_name_experience]
      }), startEmployment && jsx(TimeDistanceInWords, {
        utcStart: startEmployment
      })]
    }), jsx("div", {
      class: s$3.availableSpace,
      children: jsx("div", {
        class: cl(s$3.scrollable, props.classes.content),
        children: sortedByDatePeriods.map((period, i, arr) => jsxs("div", {
          class: s$3.period,
          children: [jsxs("div", {
            class: s$3.header,
            children: [jsxs("div", {
              children: [jsx("h4", {
                class: s$3.name,
                children: jsx(SmartLink, {
                  href: period.homepage,
                  children: period.company_name
                })
              }), jsx("div", {
                class: s$3.domain,
                children: period.domain.join(", ")
              })]
            }), jsx(TimeDistanceInWords, {
              utcStart: period.date_start,
              utcEnd: period.date_end
            })]
          }), jsxs("div", {
            class: s$3.position,
            children: [jsxs("div", {
              children: [t$1.experience_position, ":"]
            }), jsx("div", {
              children: period.position
            })]
          }), jsxs("div", {
            class: s$3.responsibilities,
            children: [jsxs("div", {
              children: [t$1.experience_responsibilities, ":"]
            }), jsx("ul", {
              children: period.responsibilities.map((resp) => jsx("li", {
                children: resp
              }))
            })]
          }), jsxs("div", {
            class: s$3.techStack,
            children: [jsxs("div", {
              children: [t$1.experience_tech_stack, ":"]
            }), jsx("div", {
              class: s$3.techContainer,
              children: period.tech_stack.map((resp) => jsx("span", {
                class: s$3.techChips,
                children: resp
              }))
            })]
          }), jsx("div", {
            class: cl(s$3.timeMarker, {
              [s$3.opaque]: i === arr.length - 1
            }),
            children: jsx("div", {
              class: s$3.dateContainer,
              children: new Date(period.date_start).toLocaleDateString()
            })
          })]
        }))
      })
    })]
  });
}

const resumeGrid = "_resumeGrid_1mmwb_1";
const footer = "_footer_1mmwb_13";
const header$1 = "_header_1mmwb_27";
const top = "_top_1mmwb_35";
const cell = "_cell_1mmwb_39";
const right = "_right_1mmwb_62";
const left = "_left_1mmwb_67";
const s$1 = {
	resumeGrid: resumeGrid,
	footer: footer,
	header: header$1,
	top: top,
	cell: cell,
	right: right,
	left: left
};

const education = "_education_183ok_1";
const categoryHeader = "_categoryHeader_183ok_13";
const scrollable = "_scrollable_183ok_20";
const experience = "_experience_183ok_25";
const period = "_period_183ok_37";
const header = "_header_183ok_42";
const timeMarker = "_timeMarker_183ok_57";
const dateContainer = "_dateContainer_183ok_74";
const s = {
	education: education,
	categoryHeader: categoryHeader,
	scrollable: scrollable,
	experience: experience,
	period: period,
	header: header,
	timeMarker: timeMarker,
	dateContainer: dateContainer
};

const category_name_education = "Education";
const t = {
	category_name_education: category_name_education
};

function Education(props) {
  const sortedByDatePeriods = sortByDateDescending(props.education.periods);
  return jsxs("div", {
    class: cl(props.classes.container, s.education),
    children: [jsx("div", {
      class: cl(props.classes.header, s.categoryHeader),
      children: jsxs("h3", {
        children: [" ", t.category_name_education]
      })
    }), jsx("div", {
      class: cl(s.scrollable, props.classes.content),
      children: sortedByDatePeriods.map((period) => jsx("div", {
        class: s.period,
        children: jsxs("div", {
          class: s.header,
          children: [jsxs("div", {
            children: [jsx("h4", {
              class: s.name,
              children: jsx(SmartLink, {
                href: period.homepage,
                children: period.educational_facility
              })
            }), jsx("div", {
              class: s.specialty,
              children: period.specialty
            })]
          }), jsx(TimeDistanceInWords, {
            utcStart: period.date_start,
            utcEnd: period.date_end
          })]
        })
      }))
    })]
  });
}

const defaultClassList = (container) => ({
  container,
  header: s$1.header,
  content: s$1.cell
});
function MainPage({
  resume,
  lastUpdateDate
}) {
  return jsxs("div", {
    id: "index-page",
    children: [jsxs("article", {
      class: s$1.resumeGrid,
      children: [jsx(Header, {
        classes: defaultClassList(s$1.top),
        heading: resume.name,
        subheading: resume.job_title
      }), jsx(Contacts, {
        classes: defaultClassList(s$1.top),
        contacts: resume.contacts
      }), jsx(Experience, {
        classes: defaultClassList(s$1.left),
        experience: resume.experience
      }), jsx(Skills, {
        classes: defaultClassList(s$1.right),
        skills: resume.skills
      }), jsx(Education, {
        classes: defaultClassList(s$1.left),
        education: resume.education
      }), jsx(Languages, {
        classes: defaultClassList(s$1.right),
        languages: resume.languages
      })]
    }), jsx("footer", {
      class: s$1.footer,
      children: jsxs("span", {
        style: {
          "margin": "auto"
        },
        children: ["Last Update: ", lastUpdateDate.toLocaleString()]
      })
    })]
  });
}

export { MainPage as Page };
