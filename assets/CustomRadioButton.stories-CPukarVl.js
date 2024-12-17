import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";const o=({label:t,name:n,value:s,checked:i,onChange:u})=>e.jsx(e.Fragment,{children:e.jsxs("label",{className:`custom-radio-button ${i?"active":""}`,children:[e.jsx("div",{className:"radio-pulse"}),e.jsx("input",{type:"radio",name:n,value:s,checked:i,onChange:()=>u(s)}),e.jsx("span",{className:"custom-radio-button__checkmark"}),t]})});o.__docgenInfo={description:"",methods:[],displayName:"CustomRadioButton",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const h={title:"CustomRadioButton",component:o},a={render:()=>{const[t,n]=l.useState("bitcoin");return e.jsxs("div",{className:"radio-container",children:[e.jsx(o,{label:"بیت‌کوین",name:"customRadio",value:"bitcoin",checked:t==="bitcoin",onChange:n}),e.jsx(o,{label:"اتریوم",name:"customRadio",value:"ethereum",checked:t==="ethereum",onChange:n}),e.jsx(o,{label:"دوج کوین",name:"customRadio",value:"dogecoin",checked:t==="dogecoin",onChange:n})]})},parameters:{docs:{description:{story:`
### Custom Radio Button Component

The \`CustomRadioButton\` component is a custom-styled radio button that uses CSS for styling and animations. This example demonstrates the component with Farsi labels.

#### CSS Code

The following CSS code is used to style the custom radio button:

\`\`\`scss
.custom-radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;

  input[type="radio"] {
    display: none;
  }

  .custom-radio-button__checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    transition: background-color 0.3s ease;

    &:after {
      content: "";
      width: 12px;
      height: 12px;
      background-color: #007bff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.3s ease;
    }
  }

  input[type="radio"]:checked + .custom-radio-button__checkmark:after {
    transform: translate(-50%, -50%) scale(1);
  }
}
\`\`\`

- The \`input[type="radio"]\` is hidden using \`display: none\`.
- The \`.custom-radio-button__checkmark\` is styled to look like a radio button.
- The \`::after\` pseudo-element is used to create the inner circle that appears when the radio button is checked.
- The \`transform\` property is used to animate the inner circle's appearance.

This combination of CSS and React provides a smooth and visually appealing custom radio button component.
        `}},layout:"centered"},tags:["autodocs"]};var r,d,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState("bitcoin");
    return <div className="radio-container">
        <CustomRadioButton label="بیت‌کوین" name="customRadio" value="bitcoin" checked={selectedValue === "bitcoin"} onChange={setSelectedValue} />
        <CustomRadioButton label="اتریوم" name="customRadio" value="ethereum" checked={selectedValue === "ethereum"} onChange={setSelectedValue} />
        <CustomRadioButton label="دوج کوین" name="customRadio" value="dogecoin" checked={selectedValue === "dogecoin"} onChange={setSelectedValue} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
### Custom Radio Button Component

The \\\`CustomRadioButton\\\` component is a custom-styled radio button that uses CSS for styling and animations. This example demonstrates the component with Farsi labels.

#### CSS Code

The following CSS code is used to style the custom radio button:

\\\`\\\`\\\`scss
.custom-radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;

  input[type="radio"] {
    display: none;
  }

  .custom-radio-button__checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    transition: background-color 0.3s ease;

    &:after {
      content: "";
      width: 12px;
      height: 12px;
      background-color: #007bff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.3s ease;
    }
  }

  input[type="radio"]:checked + .custom-radio-button__checkmark:after {
    transform: translate(-50%, -50%) scale(1);
  }
}
\\\`\\\`\\\`

- The \\\`input[type="radio"]\\\` is hidden using \\\`display: none\\\`.
- The \\\`.custom-radio-button__checkmark\\\` is styled to look like a radio button.
- The \\\`::after\\\` pseudo-element is used to create the inner circle that appears when the radio button is checked.
- The \\\`transform\\\` property is used to animate the inner circle's appearance.

This combination of CSS and React provides a smooth and visually appealing custom radio button component.
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,h as default};
