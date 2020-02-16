import loadable, { LoadableComponent } from '@loadable/component';
import React from 'react';

import './spinner.css';

interface TaskLoaderProps {
    taskType: string;
}

// In order to create a link to another page that is dynamically loaded (via <Link to="...">),
// the page chunks have to be loadable by @loadable.
// We have to add a magic comment /* #__LOADABLE__ */ here
// and the following plugin to Babel's settings (.babelrc):
//  {
//      "plugins": ["@loadable/babel-plugin"],
//  }
const loadDetails = /* #__LOADABLE__ */ (props: TaskLoaderProps) => import(`../tasks/${props.taskType}`);

const TaskLoader: LoadableComponent<TaskLoaderProps> = loadable(loadDetails, {
    fallback: (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <svg className="spinner" width="64px" height="64px" viewBox="0 0 32 32">
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="12"
                    stroke="rgba(0, 0, 0, 0.4)"
                    strokeDasharray={Math.PI * 2 * 9}
                    strokeLinecap="round"
                    strokeWidth="4"
                />
            </svg>
        </div>
    ),
});

export default TaskLoader;
