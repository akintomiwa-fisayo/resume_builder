/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-inner-declarations */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const lib = {};
lib.ucFirst = (value) => {
  if (isNaN(value)) {
    let newValue = '';
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        newValue = value[0].toUpperCase();
      } else {
        newValue += value[i];
      }
    }
    return newValue;
  }
  return value;
};
lib.lcFirst = (value) => {
  if (isNaN(value)) {
    let newValue = '';
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        newValue = value[0].toLowerCase();
      } else {
        newValue += value[i];
      }
    }
    return newValue;
  }
  return value;
};
lib.isEmpty = (str) => (str ? !str.trim() : true);

lib.isElement = (o) => (
  typeof HTMLElement === 'object' ? o instanceof HTMLElement
    : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
);

lib.isEmail = (str) => (!((/[a-z0-9]+@+[a-z0-9]+\.+[a-z]{3,}/i.test(str) === false || /[^a-z0-9._@]/i.test(str) === true)));
lib.isObject = (variable) => (variable && typeof variable === 'object' && variable.constructor === Object);

lib.isDescendant = (e, query) => {
  const matches = typeof (query) === 'string' ? document.querySelectorAll(query) : query;
  let el = lib.isElement(e) ? e : document.querySelector(e);
  let matchesLen = 0;
  if (lib.isElement(matches)) {
    if (query.contains(el)) return query;
  } else if (matches) {
    matchesLen = matches.length;
    while (el && !(el.tagName === 'HTML')) {
      for (let i = 0; i < matchesLen; i += 1) {
        if (el === matches[i]) return el;
      }

      el = el.parentElement;
    }
  }
  return false;
};

lib.isUpperCase = (v) => (!!(v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()));

lib.isLowerCase = (v) => (!!(v.toUpperCase() !== v.toLowerCase() && v === v.toLowerCase()));
lib.capitalize = (word) => {
  if (isNaN(word) && !lib.isEmpty(word)) {
    let newWord = '';
    const subValue = word.split(' ');
    const subValueLength = subValue.length;
    for (let j = 0; j < subValueLength; j += 1) {
      const value = subValue[j];
      for (let i = 0; i < value.length; i += 1) {
        if (i === 0) {
          newWord += value[0].toUpperCase();
        } else {
          newWord += value[i];
        }
      }

      if (j < subValueLength) {
        newWord += ' ';
      }
    }

    return newWord;
  }
  return word;
};

lib.deleteIndex = (value, ...indexes) => {
  // can input as much parameter as possible but first parameter much be an array obj or string
  const newArray = [];
  const argumentsLength = indexes.length;
  let save = true;
  for (let j = 0; j < value.length; j += 1) {
    save = true;
    for (let i = 0; i < argumentsLength; i += 1) {
      const currentIndex = indexes[i];
      if (j === currentIndex) {
        save = false;
        break;
      }
    }
    if (save) newArray.push(value[j]);
  }
  return typeof (value) === 'string' ? newArray.join('') : newArray;
};

lib.popMessage = (m, timeout = 4500) => {
  const animationTime = 300; // <== value must be the same here and in general.less
  const showMsg = (msg) => {
    setTimeout(() => {
      msg.classList.add('show');
    }, 100);
  };
  let popMsg = document.querySelector('#popMessage');
  const msg = document.createElement('DIV');
  msg.classList = 'message';
  msg.innerHTML = m;

  if (!popMsg) {
    // alert('popMsg not created yet');
    popMsg = document.createElement('DIV');
    popMsg.id = 'popMessage';
    popMsg.appendChild(msg);
    document.querySelector('#root').appendChild(popMsg);
    showMsg(msg);
  } else {
    popMsg.appendChild(msg);
    showMsg(msg);
  }

  setTimeout(() => {
    msg.classList.remove('show');
    setTimeout(() => {
      popMsg.removeChild(msg);
      if (!popMsg.children[0]) {
        document.querySelector('#root').removeChild(popMsg);
      }
    }, animationTime);
  }, timeout);
};

lib.popAlert = (msg) => {
  /* alert();
      USING POPALERT
      #can send in html tags;
      #cant take in functions or methods but can take in string getting methods e.g(document.getElementById(id).innerHTML)
      #can style elements but will have to do the code as a string variable e.g var name= " <b style='color:red'>the name</b> is a smart ass "
      #can set a sub line---passing it as a sting too in the parameters, string starting with 'sub~'
      */
  let popAlert = document.getElementById('popAlert');
  const enterToCancelPopAlert = (event) => {
  // alert("just entered enterToCancelPopAlert()")
    if (event.keyCode === 13) {
      event.preventDefault(); // <== prevent any other function that has been attached to the event
      popCancel();
    }
  };

  const popCancel = () => {
    const pA = document.getElementById('popAlert');
    if (pA) {
      document.querySelector('#root').removeChild(pA);
    }
    window.removeEventListener('keydown', enterToCancelPopAlert);
  };

  if (!popAlert) {
    popAlert = document.createElement('div');
    popAlert.id = 'popAlert';
    popAlert.innerHTML = ` <div class="fk" >
      <div class='content' >
        <div> ${msg}</div>
      </div>\
      <div class='cancel-holder'>
        <button class='btn btn-default cancel'>close</button>
      </div>
    </div> `;
  }
  document.querySelector('#root').appendChild(popAlert);


  document.querySelector('#popAlert .cancel').addEventListener('click', popCancel);
  window.addEventListener('keydown', enterToCancelPopAlert);
};

lib.JSONtoArray = (json) => {
  const r = [];
  // eslint-disable-next-line no-restricted-syntax
  if (lib.isObject(json)) Object.keys(json).forEach((key) => { r.push(json[key]); });
  return r;
};

lib.JSONParse = (str) => {
  try {
    const o = JSON.parse(str);
    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === "object",
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && typeof o === 'object') return o;
  } catch (e) {
    // console.log(e);
  }

  return false;
};

lib.getWeekDay = (day) => {
  const weekdays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  return isNaN(day) ? false : weekdays[day];
};

lib.getMonth = (month) => {
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  return isNaN(month) ? false : months[month];
};

lib.getRelativeTime = (timestamp, relative = true) => {
  const d1 = new Date();
  const d2 = new Date(timestamp);
  let relativeTime = '';

  let year = d2.getFullYear();
  year = d1.getFullYear() > year ? year : '';
  const month = lib.getMonth(d2.getMonth());
  let hour = d2.getHours();
  const hourPref = hour >= 12 ? 'pm' : 'am';
  if (hour === 0) {
    hour = 12;
  } else {
    hour = hour > 12 ? hour - 12 : hour;
  }
  const date = d2.getDate() + 1;
  const minutes = d2.getMinutes();
  let minutesDbl = `${minutes}`;
  minutesDbl = minutesDbl.length === 1 ? `0${minutesDbl}` : minutesDbl;
  const day = lib.getWeekDay(d2.getDay());
  if (relative) {
    const diffInMilliseconds = d1 - d2;
    const diffInSec = Math.floor(diffInMilliseconds / 1000);
    if (diffInSec >= 60) { // 60 seconds make a minute
      const diffInMinutes = Math.floor(diffInSec / 60);
      if (diffInMinutes >= 60) { // 60 minutes make in an hour
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours >= 24) { // 24 hours make in a day
          const diffInDays = Math.floor(diffInHours / 24);
          if (diffInDays >= 7) { // 7 day make in a week
            relativeTime = `${day} ${month} ${date} ${year} at ${hour}:${minutesDbl} ${hourPref}`;
          } else if (diffInDays === 1) {
            relativeTime = `yesterday at ${hour}:${minutesDbl} ${hourPref}`;
          } else {
            relativeTime = `last ${day} at ${hour}:${minutesDbl} ${hourPref}`;
          }
        } else relativeTime = `${diffInHours}hr${diffInHours > 1 ? 's' : ''} ago`;
      } else relativeTime = `${diffInMinutes}min${diffInMinutes > 1 ? 's' : ''} ago`;
    } else relativeTime = 'just now';
  } else {
    relativeTime = `${day} ${month} ${date} ${year} at ${hour}:${minutesDbl} ${hourPref}`;
  }

  return relativeTime;
};

const onDOMChangeDefaultConfig = {
  attributes: false,
  attributeOldValue: false,
  childList: false,
  characterData: false,
  characterDataOldValue: false,
  subtree: false,
  targetNode: document, // <== Select the node that will be observed for mutations
};
lib.onDOMChange = (config = onDOMChangeDefaultConfig, callback = (mutationsList, observe) => {}) => {
  // Options for the observer (which mutations to observe)
  const Config = {
    ...onDOMChangeDefaultConfig,
    ...config,
  };

  // Create an observer instance linked to the callback function
  const { MutationObserver } = window;
  const observer = new MutationObserver(callback); // <== Callback function to execute when mutations are observed

  // Start observing the target node for configured mutations
  observer.observe(Config.targetNode, Config);
  // Later, you can stop observing
  // observer.disconnect();
  return observer;
};

lib.heroInput = {
  validateHeroInput: (heroInput) => {
    const { value } = heroInput.querySelector('.hero-input-field');
    if (!value || isEmpty(value)) {
      heroInput.classList.remove('filled');
    } else {
      heroInput.classList.add('filled');
    }
  },
  onFocus: (event) => {
    const heroInput = isDescendant(event.target, '.hero-input');
    if (!heroInput.classList.contains('focused')) {
      heroInput.classList.add('focused');
      lib.heroInput.validateHeroInput(heroInput);
    }
  },

  onBlur: (event) => {
    const heroInput = isDescendant(event.target, '.hero-input');
    if (heroInput.classList.contains('focused')) {
      heroInput.classList.remove('focused');
      lib.heroInput.validateHeroInput(heroInput);
    }
  },

  onInput: (event) => {
    const input = event.target;
    const heroInput = isDescendant(input, '.hero-input');
    if (heroInput.classList.contains('mandatory')) {
      if (isEmpty(input.value)) {
        heroInput.classList.add('Error');
      } else {
        heroInput.classList.remove('Error');
      }
    }
  },

  onClick: (event) => {
    let field = isDescendant(event.target, '.hero-input-field');
    if (!field) {
      const heroInput = isDescendant(event.target, '.hero-input');
      field = heroInput.querySelector('.hero-input-field');
      if (field.tagName !== 'SELECT') {
        field.focus();
      }
    }
  },
  stop: () => { },
  init: (params = {
    onFocus: () => { console.log('the on extra focus'); },
    onBlur: () => { console.log('the on extra blur'); },
    onInput: () => { console.log('the on extra input'); },
    onInit: () => { console.log('inited a heroinout instance'); },
  }) => {
    // Handle browser autofill event
    document.querySelector('html').addEventListener('animationstart', (event) => {
      const { target } = event;
      const { animationName } = event;
      if (animationName === 'onAutoFillStart') {
        const heroInput = isDescendant(target, '.hero-input');
        // if (heroInput) heroInput.classList.add('filled');
        if (heroInput) lib.heroInput.validateHeroInput(heroInput);
      }
    });

    const init = () => {
      const heroInputs = document.querySelectorAll('.hero-input');
      for (let i = 0; i < heroInputs.length; i += 1) {
      // var hi =
        if (heroInputs[i].init_hero_input !== true) {
          heroInputs[i].init_hero_input = true;
          heroInputs[i].addEventListener('click', lib.heroInput.onClick);
          const input = heroInputs[i].querySelector('.hero-input-field');
          input.addEventListener('focus', (event) => {
            lib.heroInput.onFocus(event);
            if (params.onFocus) params.onFocus(event);
          });
          input.addEventListener('blur', (event) => {
            lib.heroInput.onBlur(event);
            if (params.onBlur) params.onBlur(event);
          });
          input.addEventListener('input', (event) => {
            lib.heroInput.onInput(event);
            if (params.onInput) params.onInput(event);
          });


          if (isEmpty(input.value) && input.hasAttribute('value')) {
            input.focus();
            input.value = input.getAttribute('value');
            input.blur();
          }
        }
      }
    };
    init();

    const observer = lib.onDOMChange({ childList: true, subtree: true }, (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const addedChildren = mutation.addedNodes;
          // console.log("childList attributeName is = > ", mutation.attributeName ,", mutation \n=> ", mutation)
          if (addedChildren.length > 0) {
            init();
          }
        }
      }
    });

    lib.heroInput.stop = () => {
      observer.disconnect();
    };
  },
};

lib.heroCheckBox = {
  onClick: (parent) => {
    const checkBox = parent.querySelector('.hero-check-box-field');
    if (checkBox.classList.contains('checked')) {
      checkBox.classList.remove('checked');
    } else checkBox.classList.add('checked');
  },
  stop: () => {},
  init: (params = {
    onClick: (heroCheckBox) => {},
  }) => {
    const init = () => {
      const checkBoxes = document.querySelectorAll('.hero-check-box');
      for (let i = 0; i < checkBoxes.length; i += 1) {
        if (checkBoxes[i].init_check_box !== true) {
          checkBoxes[i].init_check_box = true;
          checkBoxes[i].addEventListener('click', (event) => {
            lib.heroCheckBox.onClick(checkBoxes[i]);
            if (params.onClick) params.onClick(event);
          });
        }
      }
    };

    init();

    const observer = lib.onDOMChange({ childList: true, subtree: true }, (mutationsList) => {
      for (const mutation of mutationsList) {
        // console.log('mutation for checkbox is = > ', mutation, 'asnd observer is => ', observer);
        if (mutation.type === 'childList') {
          const addedChildren = mutation.addedNodes;
          // console.log("childList attributeName is = > ", mutation.attributeName ,", mutation \n=> ", mutation)
          if (addedChildren.length > 0) {
            init();
          }
        }
      }
    });

    lib.heroCheckBox.stop = () => {
      observer.disconnect();
    };
  },
};

lib.isCountry = (country) => {
  const countries = [
    'afghanistan',
    'albania',
    'algeria',
    'andorra',
    'angola',
    'antigua and barbuda',
    'argentina',
    'armenia',
    'australia',
    'austria',
    'azerbaijan',
    'bahamas',
    'bahrain',
    'bangladesh',
    'barbados',
    'belarus',
    'belgium',
    'belize',
    'benin',
    'bhutan',
    'bolivia',
    'bosnia and herzegovina',
    'botswana',
    'brazil',
    'brunei',
    'bulgaria',
    'burkina faso',
    'burundi',
    'cote d ivoire',
    'cabo verde',
    'cambodia',
    'cameroon',
    'canada',
    'central african republic',
    'chad',
    'chile',
    'china',
    'colombia',
    'comoros',
    'congo',
    'costa rica',
    'croatia',
    'cuba',
    'cyprus',
    'czech republic',
    'democratic republic of the congo',
    'denmark',
    'djibouti',
    'dominica',
    'dominican republic',
    'ecuador',
    'egypt',
    'el salvador',
    'equatorial guinea',
    'eritrea',
    'estonia',
    'ethiopia',
    'fiji',
    'finland',
    'france',
    'gabon',
    'gambia',
    'georgia',
    'germany',
    'ghana',
    'greece',
    'grenada',
    'guatemala',
    'guinea',
    'guineabissau',
    'guyana',
    'haiti',
    'holy see',
    'honduras',
    'hungary',
    'iceland',
    'india',
    'indonesia',
    'iran',
    'iraq',
    'ireland',
    'israel',
    'italy',
    'jamaica',
    'japan',
    'jordan',
    'kazakhstan',
    'kenya',
    'kiribati',
    'kuwait',
    'kyrgyzstan',
    'laos',
    'latvia',
    'lebanon',
    'lesotho',
    'liberia',
    'libya',
    'liechtenstein',
    'lithuania',
    'luxembourg',
    'macedonia',
    'madagascar',
    'malawi',
    'malaysia',
    'maldives',
    'mali',
    'malta',
    'marshall islands',
    'mauritania',
    'mauritius',
    'mexico',
    'micronesia',
    'moldova',
    'monaco',
    'mongolia',
    'montenegro',
    'morocco',
    'mozambique',
    'myanmar',
    'namibia',
    'nauru',
    'nepal',
    'netherlands',
    'new zealand',
    'nicaragua',
    'niger',
    'nigeria',
    'north korea',
    'norway',
    'oman',
    'pakistan',
    'palau',
    'palestine state',
    'panama',
    'papua new guinea',
    'paraguay',
    'peru',
    'philippines',
    'poland',
    'portugal',
    'qatar',
    'romania',
    'russia',
    'rwanda',
    'saint kitts and nevis',
    'saint lucia',
    'saint vincent and the grenadines',
    'samoa',
    'san marino',
    'sao tome and principe',
    'saudi arabia',
    'senegal',
    'serbia',
    'seychelles',
    'sierra leone',
    'singapore',
    'slovakia',
    'slovenia',
    'solomon islands',
    'somalia',
    'south africa',
    'south korea',
    'south sudan',
    'spain',
    'sri lanka',
    'sudan',
    'suriname',
    'swaziland',
    'sweden',
    'switzerland',
    'syria',
    'tajikistan',
    'tanzania',
    'thailand',
    'timorleste',
    'togo',
    'tonga',
    'trinidad and tobago',
    'tunisia',
    'turkey',
    'turkmenistan',
    'tuvalu',
    'uganda',
    'ukraine',
    'united arab emirates',
    'united kingdom',
    'united states of america',
    'uruguay',
    'uzbekistan',
    'vanuatu',
    'venezuela',
    'viet nam',
    'yemen',
    'zambia',
    'zimbabwe',
  ];
  return countries.indexOf(country) !== -1;
};

lib.arrNormalize = (arr) => {
  const newArr = [];
  for (const value of arr) if (newArr.indexOf(value) === -1) newArr.push(value);
  return newArr;
};

lib.devalueString = (string) => {
  let returnee = '';
  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i])) {
      // popMessage(string[i] + " is isUpperCase")
      returnee += ` ${string[i].toLowerCase()}`;
    } else if (string[i] === '_' || string[i] === '-') {
      returnee += ' ';
    } else {
      returnee += string[i];
    }
  }

  return returnee;
};

export const { ucFirst } = lib;
export const { lcFirst } = lib;
export const { devalueString } = lib;
export const { onDOMChange } = lib;
export const { isEmpty } = lib;
export const { isElement } = lib;
export const { isEmail } = lib;
export const { isObject } = lib;
export const { isDescendant } = lib;
export const { isUpperCase } = lib;
export const { isLowerCase } = lib;
export const { capitalize } = lib;
export const { deleteIndex } = lib;
export const { popMessage } = lib;
export const { popAlert } = lib;
export const { JSONtoArray } = lib;
export const { JSONParse } = lib;
export const { heroInput } = lib;
export const { heroCheckBox } = lib;
export const { isCountry } = lib;
export const { getWeekDay } = lib;
export const { getMonth } = lib;
export const { getRelativeTime } = lib;
export const { arrNormalize } = lib;
