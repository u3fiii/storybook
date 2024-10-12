import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as a}from"./index-RYns6xqu.js";import{a as f}from"./arrow-up-1-bold-DB1FVJYB.js";const g="data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.5%2010.5H15.5Z'%20fill='%23FAFEFD'/%3e%3cpath%20d='M5.5%2010.5H15.5'%20stroke='%23FAFEFD'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.5%2015.5V5.5'%20stroke='%23FAFEFD'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",b=({items:h})=>{const[n,m]=a.useState(null),s=a.useRef([]),x=t=>{m(n===t?null:t)};return a.useEffect(()=>{if(n!==null&&s.current[n]){const t=s.current[n];t&&(t.style.height=`${t.scrollHeight}px`)}},[n]),e.jsx("div",{className:"collapsible-group",children:h.map((t,o)=>{var l;return e.jsxs("div",{className:"collapsible",children:[e.jsxs("button",{className:`collapsible-header ${n===o?"open":""}`,onClick:()=>x(o),children:[e.jsxs("div",{className:"collapsible-header-right",children:[e.jsx("img",{src:g,alt:"plus icon"}),t.title]}),e.jsx("span",{className:`collapsible-arrow ${n===o?"open":""}`,children:e.jsx("img",{src:f,alt:"arrow icon"})})]}),e.jsx("div",{className:`collapsible-content ${n===o?"open":""}`,ref:u=>s.current[o]=u,style:{height:n===o?`${(l=s.current[o])==null?void 0:l.scrollHeight}px`:"0"},children:t.content})]},o)})})},y=[{title:"استیکینگ چگونه کار می‌کند؟",content:e.jsx("div",{className:"content-wrapper",children:e.jsx("p",{children:"بیت کوین، با نماد BTC، پدیده انقلابی قرن ۲۱ است که گرچه در نگاه اول فقط یک پول دیجیتال به نظر می‌رسد، اما در بطن جنبش و فرهنگی نو را به جهان معرفی کرده است، بنابراین آشنایی کامل با این پادشاه ارزهای دیجیتال بر هر کسی واجب است."})})},{title:"آیا تمامی رمزارزها قابلیت استیک دارند؟",content:e.jsx("div",{className:"content-wrapper",children:e.jsx("p",{children:"به زبان ساده، بیت کوین نوعی پول دیجیتال است؛ اما بر خلاف پول‌های کاغذی رایج مانند ریال، دلار یا یورو که هر روز استفاده می‌کنیم."})})},{title:"مزایای استیکینگ چیست؟",content:e.jsx("div",{className:"content-wrapper",children:e.jsx("p",{children:"حال اگر بخواهیم تعریف فنی‌تری برای مفهوم برترین ارز دیجیتال ارائه دهیم، باید بگوییم بیت کوین ارز دیجیتالی همتا به همتا (P2P) است که به صورت غیرمتمرکز اداره می‌شود و تمام سوابق مرتبط با آن به صورت زنجیره‌وار، روی دفتر کلی توزیع‌شده به نام بلاک چین (Blockchain) ذخیره می‌شود."})})},{title:"آیا همه می‌توانند در استیکینگ شرکت کنند؟",content:e.jsx("div",{className:"content-wrapper",children:e.jsx("p",{children:"به عبارت ساده، پشتوانه ارز رایج هر کشور، قدرت اقتصادی آن کشور است. همان‌طور که گفته شد، بیت کوین نه توسط دولتی به وجود آمده و نه توسط دولتی کنترل می‌شود. همان‌طور که در ابتدای مطلب گفتیم، بیت کوین نوعی پول دیجیتالی است."})})}],d=()=>e.jsx("div",{children:e.jsx(b,{items:y})});d.__docgenInfo={description:"",methods:[],displayName:"App"};const S={title:"Collapsible",component:d},i={args:{},parameters:{docs:{description:{story:`
### Collapsible Component Animation

The \`Collapsible\` component uses CSS transitions to animate the height and opacity of the collapsible content. JavaScript is used to dynamically calculate and set the height of the content, ensuring smooth transitions.

#### CSS Code for Animation

The following CSS code is used to animate the collapsible content:

\`\`\`scss
.collapsible {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
  .collapsible-header {
    background-color: #f5f5f5;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 16px;

    .collapsible-arrow {
      transition: transform 0.3s ease;
    }

    &.open .collapsible-arrow {
      transform: rotate(180deg);
    }
  }

  .collapsible-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.4s ease;
    padding: 0 15px;
    opacity: 0;

    &.open {
      opacity: 1;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
\`\`\`

#### Explanation of the Animation

1. **CSS Transitions**:
   - The \`collapsible-content\` class uses CSS transitions to animate the \`max-height\` and \`opacity\` properties.
   - The \`transition\` property is set to \`max-height 0.4s ease, opacity 0.4s ease\`, which means that changes to the \`max-height\` and \`opacity\` properties will be animated over 0.4 seconds with an easing function for smoothness.

2. **Initial State**:
   - By default, the \`collapsible-content\` has \`max-height: 0\` and \`opacity: 0\`, making it invisible and collapsed.

3. **Open State**:
   - When the \`open\` class is added, the \`collapsible-content\` transitions to \`opacity: 1\` and its \`max-height\` is dynamically set to the content's scroll height using JavaScript.
   - The padding is also adjusted to provide spacing inside the content.

4. **JavaScript for Dynamic Height**:
   - JavaScript is used to dynamically calculate the height of the content when it is opened.
   - The \`useEffect\` hook sets the height of the content to its \`scrollHeight\` when the content is opened, ensuring a smooth transition.

\`\`\`tsx
import React, { useState, useRef, useEffect } from "react";
import "../styles/components/collapsible.scss";

interface CollapsibleItem {
  title: string;
  content: React.ReactNode;
}

interface CollapsibleProps {
  items: CollapsibleItem[];
}

const Collapsible: React.FC<CollapsibleProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      const content = contentRefs.current[openIndex];
      if (content) {
        content.style.height = \`\${content.scrollHeight}px\`;
      }
    }
  }, [openIndex]);

  return (
    <div className="collapsible-group">
      {items.map((item, index) => (
        <div className="collapsible" key={index}>
          <button
            className="collapsible-header"
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span
              className={\`collapsible-arrow \${openIndex === index ? "open" : ""}\`}
            >
              ▼
            </span>
          </button>
          <div
            className={\`collapsible-content \${openIndex === index ? "open" : ""}\`}
            ref={(el) => (contentRefs.current[index] = el)}
            style={{ height: openIndex === index ? \`\${contentRefs.current[index]?.scrollHeight}px\` : '0' }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapsible;
\`\`\`
        `}},layout:"centered"},tags:["autodocs"]};var c,r,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`
### Collapsible Component Animation

The \\\`Collapsible\\\` component uses CSS transitions to animate the height and opacity of the collapsible content. JavaScript is used to dynamically calculate and set the height of the content, ensuring smooth transitions.

#### CSS Code for Animation

The following CSS code is used to animate the collapsible content:

\\\`\\\`\\\`scss
.collapsible {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
  .collapsible-header {
    background-color: #f5f5f5;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 16px;

    .collapsible-arrow {
      transition: transform 0.3s ease;
    }

    &.open .collapsible-arrow {
      transform: rotate(180deg);
    }
  }

  .collapsible-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.4s ease;
    padding: 0 15px;
    opacity: 0;

    &.open {
      opacity: 1;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
\\\`\\\`\\\`

#### Explanation of the Animation

1. **CSS Transitions**:
   - The \\\`collapsible-content\\\` class uses CSS transitions to animate the \\\`max-height\\\` and \\\`opacity\\\` properties.
   - The \\\`transition\\\` property is set to \\\`max-height 0.4s ease, opacity 0.4s ease\\\`, which means that changes to the \\\`max-height\\\` and \\\`opacity\\\` properties will be animated over 0.4 seconds with an easing function for smoothness.

2. **Initial State**:
   - By default, the \\\`collapsible-content\\\` has \\\`max-height: 0\\\` and \\\`opacity: 0\\\`, making it invisible and collapsed.

3. **Open State**:
   - When the \\\`open\\\` class is added, the \\\`collapsible-content\\\` transitions to \\\`opacity: 1\\\` and its \\\`max-height\\\` is dynamically set to the content's scroll height using JavaScript.
   - The padding is also adjusted to provide spacing inside the content.

4. **JavaScript for Dynamic Height**:
   - JavaScript is used to dynamically calculate the height of the content when it is opened.
   - The \\\`useEffect\\\` hook sets the height of the content to its \\\`scrollHeight\\\` when the content is opened, ensuring a smooth transition.

\\\`\\\`\\\`tsx
import React, { useState, useRef, useEffect } from "react";
import "../styles/components/collapsible.scss";

interface CollapsibleItem {
  title: string;
  content: React.ReactNode;
}

interface CollapsibleProps {
  items: CollapsibleItem[];
}

const Collapsible: React.FC<CollapsibleProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      const content = contentRefs.current[openIndex];
      if (content) {
        content.style.height = \\\`\\\${content.scrollHeight}px\\\`;
      }
    }
  }, [openIndex]);

  return (
    <div className="collapsible-group">
      {items.map((item, index) => (
        <div className="collapsible" key={index}>
          <button
            className="collapsible-header"
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span
              className={\\\`collapsible-arrow \\\${openIndex === index ? "open" : ""}\\\`}
            >
              ▼
            </span>
          </button>
          <div
            className={\\\`collapsible-content \\\${openIndex === index ? "open" : ""}\\\`}
            ref={(el) => (contentRefs.current[index] = el)}
            style={{ height: openIndex === index ? \\\`\\\${contentRefs.current[index]?.scrollHeight}px\\\` : '0' }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapsible;
\\\`\\\`\\\`
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(p=(r=i.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const I=["Base"];export{i as Base,I as __namedExportsOrder,S as default};
