import React, { Component } from 'react';
import 'prismjs/components/prism-markdown.js';
import { IProps } from '../../utils';
import './index.less';
export interface ITextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'onScroll'>, IProps {
    onChange?: (value?: string) => void;
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
    value?: string;
    tabSize?: number;
}
export interface ITextAreaState {
    value?: string;
}
export default class TextArea extends Component<ITextAreaProps, ITextAreaState> {
    preElm: React.RefObject<HTMLPreElement>;
    warp: React.RefObject<HTMLDivElement>;
    text: React.RefObject<HTMLTextAreaElement>;
    static defaultProps: ITextAreaProps;
    static state: ITextAreaState;
    constructor(props: ITextAreaProps);
    private handleChange;
    componentDidMount(): Promise<void>;
    UNSAFE_componentWillReceiveProps(nextProps: ITextAreaProps): void;
    shouldComponentUpdate(nextProps: ITextAreaProps, nextState: ITextAreaState): boolean;
    highlight(): Promise<void>;
    render(): JSX.Element;
}
