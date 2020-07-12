import React from 'react';
import { ReactMarkdownProps } from 'react-markdown';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { IProps } from './utils';
import TextArea, { ITextAreaProps } from './components/TextArea';
import { ICommand, CommandOrchestrator } from './commands';
import './index.less';
export interface MDEditorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, IProps {
    /**
     * The Markdown value.
     */
    value?: string;
    /**
     * Event handler for the `onChange` event.
     */
    onChange?: (value?: string) => void;
    /**
     * Can be used to make `Markdown Editor` focus itself on initialization. Defaults to on.
     * it will be set to true when either the source `textarea` is focused,
     * or it has an `autofocus` attribute and no other element is focused.
     */
    autoFocus?: ITextAreaProps['autoFocus'];
    /**
     * The height of the editor.
     */
    height?: React.CSSProperties['height'];
    /**
     * Show drag and drop tool. Set the height of the editor.
     */
    visiableDragbar?: boolean;
    /**
     * Show markdown preview.
     */
    preview?: 'live' | 'edit' | 'preview';
    fullscreen?: boolean;
    /**
     * Maximum drag height. `visiableDragbar=true`
     */
    maxHeight?: number;
    /**
     * Minimum drag height. `visiableDragbar=true`
     */
    minHeight?: number;
    /**
     * This is reset [react-markdown](https://github.com/rexxars/react-markdown) settings.
     */
    previewOptions?: ReactMarkdownProps;
    /**
     * Set the `textarea` related props.
     */
    textareaProps?: ITextAreaProps;
    /**
     * The number of characters to insert when pressing tab key.
     * Default `2` spaces.
     */
    tabSize?: number;
    /**
     * You can create your own commands or reuse existing commands.
     */
    commands?: ICommand[];
}
export interface MDEditorState {
    height: React.CSSProperties['height'];
    preview?: MDEditorProps['preview'];
    fullscreen?: boolean;
    value?: string;
}
export default class MDEditor extends React.PureComponent<MDEditorProps, MDEditorState> {
    static Markdown: typeof MarkdownPreview;
    static displayName: string;
    preview: React.RefObject<MarkdownPreview>;
    textarea: React.RefObject<TextArea>;
    commandOrchestrator: CommandOrchestrator;
    leftScroll: boolean;
    static defaultProps: MDEditorProps;
    constructor(props: MDEditorProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: MDEditorProps): void;
    private handleScroll;
    private handleChange;
    handleCommand: (command: ICommand) => void;
    render(): JSX.Element;
}
