import { ICommand, TextState, TextApi } from './';
export declare type AlterLineFunction = (line: string, index: number) => string;
/**
 * Inserts insertionString before each line
 */
export declare function insertBeforeEachLine(selectedText: string, insertBefore: string | AlterLineFunction): {
    modifiedText: string;
    insertionLength: number;
};
export declare const makeList: (state: TextState, api: TextApi, insertBefore: string | AlterLineFunction) => void;
export declare const unorderedListCommand: ICommand;
export declare const orderedListCommand: ICommand;
export declare const checkedListCommand: ICommand;
