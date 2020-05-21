const skills = [
  {
    id: 'html',
    title: 'HTML',
    color: '#930700',
    info:
      'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!',
    link: 'https://www.w3schools.com/html/',
    video: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
    videotitle: 'HTML Crash Course For Absolute Beginners',
    videoauthor: 'Traversy Media',
  },
  {
    id: 'git',
    title: 'Git',
    color: '#093145',
    info:
      'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.',
    link: 'https://git-scm.com/doc',
    video: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
    videotitle: 'Git & GitHub Crash Course For Beginners',
    videoauthor: 'Traversy Media',
  },
  {
    id: 'css',
    title: 'CSS',
    color: '#222344',
    info:
      'CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.',
    link: 'https://www.w3schools.com/css/default.asp',
    video: 'https://www.youtube.com/watch?v=1PnVor36_40',
    videotitle: 'Learn CSS in 20 Minutes',
    videoauthor: 'Web Dev Simplified',
  },
  {
    id: 'cssboxmodel',
    title: 'CSS Box Model',
    color: '#339933',
    info:
      'All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.',
    link: 'https://www.w3schools.com/css/css_boxmodel.asp',
    video: 'https://www.youtube.com/watch?v=rIO5326FgPE',
    videotitle: 'Learn CSS Box Model In 8 Minutes',
    videoauthor: 'Web Dev Simplified',
  },
  {
    id: 'cssflexbox',
    title: 'CSS Flexbox',
    color: '#394007',
    info:
      'The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).',
    link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    video: 'https://www.youtube.com/watch?v=fYq5PXgSsbE',
    videotitle: 'Learn Flexbox in 15 Minutes',
    videoauthor: 'Web Dev Simplified',
    practice: 'https://flexboxfroggy.com/',
  },
  {
    id: 'cssgrid',
    title: 'CSS Grid',
    color: '#464F30',
    info:
      'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.',
    link: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
    video: 'https://www.youtube.com/watch?v=EFafSYg-PkI',
    videotitle: 'CSS Grid Tutorial | CSS Grid Crash Course',
    videoauthor: 'Dev Ed',
  },
  {
    id: 'csscustomproperties',
    title: 'CSS Variables',
    color: '#215E39',
    info:
      'Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. ',
    link:
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties',
    video: 'https://www.youtube.com/watch?v=sQUB039MG0I',
    videotitle: 'CSS Variables Tutorial (CSS Custom Properties)',
    videoauthor: 'Traversy Media',
  },
  {
    id: 'csssass',
    title: 'SASS',
    color: '#00005C',
    info:
      'Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.',
    link: 'https://sass-lang.com/documentation',
    video: 'https://www.youtube.com/watch?v=Zz6eOVaaelI',
    videotitle: 'Learn Sass In 20 Minutes | Sass Crash Course',
    videoauthor: 'Dev Ed',
  },
  {
    id: 'cssless',
    title: 'LESS',
    color: '#342E5C',
    info:
      'Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles.',
    link: 'http://lesscss.org/features/',
    video: 'https://www.youtube.com/watch?v=YD91G8DdUsw',
    videotitle: 'Less CSS Pre-Processor Tutorial',
    videoauthor: 'Traversy Media',
  },
  {
    id: 'cssmediaqueries',
    title: 'Media Queries',
    color: '#8B008B',
    info:
      'Media query is a CSS technique introduced in CSS3. It uses the @media rule to include a block of CSS properties only if a certain condition is true.',
    link: 'https://www.w3schools.com/css/css_rwd_mediaqueries.asp',
    video: 'https://www.youtube.com/watch?v=yU7jJ3NbPdA',
    videotitle: 'Learn CSS Media Query In 7 Minutes',
    videoauthor: 'Web Dev Simplified',
  },
  {
    id: 'cssstyledcomponents',
    title: 'Styled Components',
    color: '#910D27',
    info:
      'styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.',
    link: 'https://styled-components.com/docs/basics',
    video: 'https://www.youtube.com/watch?v=3SpAg5tr7Ws',
    videotitle: 'React Styled Components (Next Level CSS?)',
    videoauthor: 'Classsed',
  },
  {
    id: 'javascriptclosures',
    title: 'Closures',
    color: '#8F3900',
    info:
      'A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.',
    link:
      'https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4',
    video: 'https://www.youtube.com/watch?v=3a0I8ICR1Vg',
    videotitle: 'Learn Closures In 7 Minutes',
    videoauthor: 'Web Dev Simplified',
  },
  {
    id: 'javascripthoisting',
    title: 'Hoisting',
    color: '#204A45',
    info:
      "Hoisting is JavaScript's default behavior of moving declarations to the top.",
    link: 'https://www.w3schools.com/js/js_hoisting.asp',
    video: 'https://www.youtube.com/watch?v=C1PZh_ea-7I',
    videotitle: 'Hoisting - Beau teaches JavaScript',
    videoauthor: 'freeCodeCamp.org',
  },
  {
    id: 'javascriptthiskeyword',
    title: '"this" keyword',
    color: '#ff6600',
    info:
      'The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used.',
    link: 'https://www.w3schools.com/js/js_this.asp',
    video: 'https://www.youtube.com/watch?v=eOI9GzMfd24',
    videotitle: 'THIS keyword - Beau teaches JavaScript',
    videoauthor: 'freeCodeCamp.org',
  },
  {
    id: 'javascriptconstandlet',
    title: 'Scope',
    color: '#9A2617',
    info:
      'Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.',
    link: 'https://scotch.io/tutorials/understanding-scope-in-javascript',
    video: 'https://www.youtube.com/watch?v=XgSjoHgy3Rk',
    videotitle: 'JavaScript Let vs Var vs Constant | Mosh',
    videoauthor: 'Programming with Mosh',
  },
  {
    id: 'javascriptarrowfunctions',
    title: 'Arrow Functions',
    color: '#cc33ff',
    info:
      'Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.',
    link: 'https://www.w3schools.com/js/js_arrow_function.asp',
    video: 'https://www.youtube.com/watch?v=22fyYvxz-do',
    videotitle: 'Arrow Functions - Beau teaches JavaScript',
    videoauthor: 'freeCodeCamp.org',
  },
  {
    id: 'javascriptternary',
    title: 'Ternary Operator',
    color: '#234B53',
    info:
      'The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.',
    link:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator',
    video: 'https://www.youtube.com/watch?v=s4sB1hm73tw',
    videotitle: 'Ternary Operator - Beau teaches JavaScript',
    videoauthor: 'freeCodeCamp.org',
  },
  {
    id: 'javascriptmapmethod',
    title: 'Map Method',
    color: '#0A4D34',
    info:
      'The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.',
    link:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
    video: 'https://www.youtube.com/watch?v=P4RAFdZDn3M',
    videotitle: 'map Array Method | JavaScript Tutorial',
    videoauthor: 'Florin Pop',
  },
  {
    id: 'javascriptfiltermethod',
    title: 'Filter Method',
    color: '#B40330',
    info:
      'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
    link:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
    video: 'https://www.youtube.com/watch?v=mJGv12UHqXc',
    videotitle: 'filter Array Method | JavaScript Tutorial',
    videoauthor: 'Florin Pop',
  },
  {
    id: 'javascriptreducemethod',
    title: 'Reduce Method',
    color: '#004EC2',
    info:
      'The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.',
    link:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
    video: 'https://www.youtube.com/watch?v=IXp06KekEjM',
    videotitle: 'reduce Array Method | JavaScript Tutorial',
    videoauthor: 'Florin Pop',
  },
];

export default skills;
