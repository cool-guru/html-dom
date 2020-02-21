import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Reload and keep the POST data

~~~ javascript
location.reload();
~~~

## Reload and ignore the POST data

~~~ javascript
location.href = location.href;
~~~

## Might be useful

* [Redirect to another page](redirect-to-another-page)
`}
/>
    );
};
