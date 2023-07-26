import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

import * as React from 'react';
import { useState } from 'react';
import {
  faDownLeftAndUpRightToCenter,
  faMaximize,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { sampleText } from './data';
import './style.css';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { openDiv } from './util';

export default function App() {
  const [text, setText] = useState({ sampleText }.sampleText);
  const [openEdit, setOpenEdit] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  return (
    <div id="wrapper">
      <div
        id="editorDiv"
        //style={{ height: openEdit ? '100vh' : 'auto' }}
        className={openEdit ? 'open' : openPreview ? 'hide' : ''}
      >
        <div id="editorLabel">
          <FontAwesomeIcon
            icon={faFreeCodeCamp}
            style={{ margin: '0 10px 0 5px' }}
          />
          <span>Editor</span>

          <FontAwesomeIcon
            icon={openEdit ? faDownLeftAndUpRightToCenter : faMaximize}
            id="maxEditor"
            className="maxIcon"
            onClick={(e) => setOpenEdit(!openEdit)}
          />
        </div>

        <textarea
          id="editor"
          name="editor"
          rows={4}
          cols={50}
          value={text}
          onChange={(e) => setText(e.target.value)}
          // style={{ height: open ? '100vh' : 'auto' }}
        ></textarea>
      </div>

      <div
        id="previewDiv"
        className={openPreview ? 'open' : openEdit ? 'hide' : ''}
      >
        <div id="editorLabel">
          <FontAwesomeIcon
            icon={faFreeCodeCamp}
            style={{ margin: '0 10px 0 5px' }}
          />

          <span>Preview</span>

          <FontAwesomeIcon
            icon={openPreview ? faDownLeftAndUpRightToCenter : faMaximize}
            id="maxPreview"
            className="maxIcon"
            onClick={() => setOpenPreview(!openPreview)}
          />
        </div>

        <div
          id="preview"
          //style={{ height: open ? '100vh' : 'auto' }}
        >
          <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * 
 * "{`# Welcome to my React Markdown Previewer! ## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div> \`, between 2 backticks.`}"
 * User Story #1: I can see a textarea element with a corresponding id="editor".

User Story #2: I can see an element with a corresponding id="preview".

User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.
 */
