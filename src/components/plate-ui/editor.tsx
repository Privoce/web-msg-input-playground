import React from 'react';
import { PlateContent, useEditorRef } from '@udecode/plate-common';
import { useKey } from 'rooks';

import { cn, isMobile } from '@/lib/utils';

import type { PlateContentProps } from '@udecode/plate-common';

export type EditorProps = PlateContentProps & {
  sendMessage: () => void;
};

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ id, sendMessage, className, disabled, readOnly, ...props }, ref) => {
    const editorRef = useEditorRef(id);
    useKey(
      'Enter',
      (evt) => {
        console.log('enter', editorRef, evt);

        if (!editorRef) return;
        if (evt.shiftKey || evt.ctrlKey || evt.altKey || evt.isComposing) {
          return true;
        }
        evt.preventDefault();
        sendMessage();
        editorRef.reset();
      },
      {
        when: !isMobile(),
        // @ts-ignore
        target: ref,
      }
    );
    return (
      <div
        ref={ref}
        className="relative h-fit w-full rounded-lg border bg-background pl-10 shadow"
      >
        <PlateContent
          className={cn(
            'relative overflow-x-auto whitespace-pre-wrap break-words',
            'min-h-[40px] w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none',
            '[&_[data-slate-placeholder]]:text-muted-foreground [&_[data-slate-placeholder]]:!opacity-100',
            '[&_[data-slate-placeholder]]:top-[auto_!important]',
            className
          )}
          spellCheck={false}
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          aria-disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);
Editor.displayName = 'Editor';

export { Editor };
