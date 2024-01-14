"use client";

import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { forwardRef } from "react";

const Editor = dynamic(() => import("./MDXProvider"), {
	ssr: false,
});

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const MDX = forwardRef<MDXEditorMethods, MDXEditorProps>(
	(props, ref) => <Editor {...props} editorRef={ref} />
);

MDX.displayName = "MDX";
