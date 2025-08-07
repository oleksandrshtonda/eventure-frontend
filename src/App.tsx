import { useState } from "react";
import "./App.css";
import Input from "./shared/ui/input/input.component";

import GoogleIcon from "./shared/assets/svg/google-icon.svg?react";
import SearchIcon from "./shared/assets/svg/search-icon.svg?react";
import EyeOpenIcon from "./shared/assets/svg/eye-open-icon.svg?react";
import EyeClosedIcon from "./shared/assets/svg/eye-closed-icon.svg?react";

function App() {
  const [text, setText] = useState<string>("");

  return (
    <div className="ui-container">
      <Input
        value={text}
        setter={setText}
        RightIcon={EyeOpenIcon}
        LeftIcon={EyeClosedIcon}
        label="hehehhe"
      >
        Enter text
      </Input>
    </div>
  );
}

export default App;
