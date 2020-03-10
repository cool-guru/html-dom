import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Returns the raw text content of the \`ele\` element and its children.
All the HTML tags are excluded.

~~~ javascript
const text = ele.textContent;
~~~
`}
/>
<RelatedPosts
    slugs={[
        'get-or-set-the-html-of-an-element',
        'strip-html-from-a-given-text',
    ]}
/>
</>
    );
};
