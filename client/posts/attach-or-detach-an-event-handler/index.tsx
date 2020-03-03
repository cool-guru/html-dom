import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Use the on attribute (not recommended)

You can set the event handler via the \`on{eventName}\` attribute, where \`eventName\` represents the name of event.
For example:

~~~ javascript
ele.onclick = function() {
    ...
};

// Remove the event handler
delete ele.onclick;
~~~

This approach isn't recommended because we can only attach one handler for each event. Setting the \`onclick\` attribute, for example,
will override any existing handler for the \`click\` event.

## Use the addEventListener method

~~~ javascript
const handler = function() {
    ...
};

// Atatch handler to the \`click\` event
ele.addEventListener('click', handler);

// Detach the handler from the \`click\` event
ele.removeEventListener('click', handler);
~~~

Note that the event name is passed as the first parameter in both the \`addEventListener\` and \`removeEventListener\` methods.
It differs from the first approach which requires to prefix the event name with \`on\`.

If you want the handler to be invoke once, then look at the [Create one time event handler](/create-one-time-event-handler) post.
`}
/>
<RelatedPosts
    slugs={[
        'detect-if-the-caps-lock-is-on',
        'get-the-size-of-an-image',
        'review-an-image-before-uploading-it',
        'replace-broken-images',
        'resize-an-iframe-to-fit-its-content',
        'resize-the-width-of-a-text-box-to-fit-its-content-automatically',
        'select-the-text-of-a-textarea-automatically',
    ]}
/>
</>
    );
};
