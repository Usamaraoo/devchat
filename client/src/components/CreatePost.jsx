// Import React dependencies.
import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import { graylight } from '../data/StyleGuide'


export default function CreatePost() {
    const initialValue = [
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]
    const [editor] = useState(() => withReact(createEditor()))

    return <div className={`bg${graylight} w-4/5 m-auto my-3`}>
        <Slate editor={editor} initialValue={initialValue}  >
            <Editable onKeyDown={event => {
                console.log(event.key)
            }} />
        </Slate>
    </div>
    // return <><h1>ok</h1></>
};