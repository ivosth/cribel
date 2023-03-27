import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";
import { useEffect } from "react";

import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import "react-quill/dist/quill.core.css";

Quill.register("modules/emoji", Emoji);

//https://codesandbox.io/s/react-quill-with-markdown-g8193
//https://codesandbox.io/s/text-editor-emoji-tflbuu //Save text after submit
//https://stackoverflow.com/questions/55321607/how-to-set-a-character-length-in-react-quill
//https://github.com/zenoamaro/react-quill/issues/501

// https://github.com/zenoamaro/react-quill/issues/632
const Link = Quill.import('formats/link');
Link.sanitize = function(url) {
  // quill by default creates relative links if scheme is missing.
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `http://${url}`
  }
  return url;
}


function RichEditor(props) {
  let editorRef;
  const toolbarOptions = [
      ["bold", "italic", "underline", "link", { list: "bullet" }, "clean"]
    ];

  useEffect(() => {
    const input = document.querySelector("input[data-link]");
    input.dataset.link = "https://www.site.com";
    input.placeholder = "https://www.site.com";
  }, []);


  return (
      <ReactQuill
        theme="bubble"
        onChange={props.saveContent}
        className="my-editor"
        ref={editorRef}
        modules={{
          toolbar: {
            container: toolbarOptions
          },
          "emoji-toolbar": true,
          "emoji-textarea": true,
          "emoji-shortname": false
        }}
        
      />
  );
}

export default RichEditor;
