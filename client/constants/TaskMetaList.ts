import TaskType from './TaskType';

export interface TaskMeta {
    taskType: TaskType;
    title: string;
    slug: string;
}

const TaskMetaList: TaskMeta[] = [
    { taskType: TaskType.AddClass, title: 'Add or remove class from an element', slug: 'add-or-remove-class-from-an-element' },
    { taskType: TaskType.Match, title: 'Check an element against a selector', slug: 'check-an-element-against-a-selector' },
    { taskType: TaskType.HasClass, title: 'Check if an element has given class', slug: 'check-if-an-element-has-given-class' },
    { taskType: TaskType.Clone, title: 'Clone an element', slug: 'clone-an-element' },
    { taskType: TaskType.Create, title: 'Create an element', slug: 'create-an-element' },
    { taskType: TaskType.Ready, title: 'Execute code when the document is ready', slug: 'execute-code-when-the-document-is-ready' },
    { taskType: TaskType.Closest, title: 'Get the closest element by given selector', slug: 'get-the-closest-element-by-given-selector' },
    { taskType: TaskType.LoopNodeList, title: 'Loop over a NodeList', slug: 'loop-over-a-nodelist' },
    { taskType: TaskType.RemoveAllChildren, title: 'Remove all children of a node', slug: 'remove-all-children-of-a-node' },
    { taskType: TaskType.Remove, title: 'Remove an element', slug: 'remove-an-element' },
    { taskType: TaskType.Replace, title: 'Replace an element', slug: 'replace-an-element' },
    { taskType: TaskType.Select, title: 'Select an element or list of elements', slug: 'select-an-element-or-list-of-elements' },
    { taskType: TaskType.Show, title: 'Show or hide an element', slug: 'show-or-hide-an-element' },
];

export default TaskMetaList;
