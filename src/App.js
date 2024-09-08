import React from "react";
import RootRouter from "./routes";
import BorderButton from "./components/form/button/BorderButton";
import "./App.css"
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import InputField from "./components/form/input/InputField";
import GroupButton from "./components/form/button/GroupButton";

function App() {
  return (<>
    <ThemeProvider theme={theme}>
      <div className="flex justify-center  gap-2 p-5">
        <BorderButton label="Primary" name="Submit" variant=""/>
        <BorderButton label="Secondary" name="Submit" themeType="secondary" />
      </div>
      <div className="flex justify-center  gap-2 p-5">
        <InputField label="Primary" focused={true}/>
        <InputField label="Secondary" themeType="secondary" size={"small"} />
      </div>
      <div><GroupButton buttons={[
        {
          name:"One",
          onClick:()=>{}
        },
        {
          name:"Two",
          onClick:()=>{}
        }
      ]}
      orientation="vertical"/></div>
      <RootRouter />
      <ol>
        <li>To Do :</li>
        <li>Create All themes of buttons (Inprogress)</li>
        <li>Create All themes of inputs</li>
        <li>Create All themes of select</li>
        <li>Create All themes of radio</li>
        <li>Create All themes of checkbox</li>
        <li>Create All themes of autosearch</li>
        <li>Create All themes of table with export</li>
        <li>Create All themes of pagination</li>
        <li>Notify with different theme</li>
        <li>Model</li>

      </ol>
    </ThemeProvider>
  </>
  );
}

export default App;
