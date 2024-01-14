"use client";
import type { ForwardedRef } from "react";
import {
	headingsPlugin,
	listsPlugin,
	quotePlugin,
	thematicBreakPlugin,
	markdownShortcutPlugin,
	MDXEditor,
	type MDXEditorMethods,
	type MDXEditorProps,
	toolbarPlugin,
	UndoRedo,
	BoldItalicUnderlineToggles,
	CodeToggle,
	CreateLink,
	linkDialogPlugin,
	ListsToggle,
	linkPlugin,
	imagePlugin,
	InsertImage,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

const MDXProvider = ({
	editorRef,
	...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) => {
	return (
		// @ts-ignore
		<div className="border border-white rounded-md h-fit overflow-scroll">
			<MDXEditor
				contentEditableClassName="editor-height"
				className="dark-theme"
				autoFocus={true}
				plugins={[
					// Example Plugin Usage
					imagePlugin({
						imageUploadHandler: () => {
							return Promise.resolve(
								"https://i1.sndcdn.com/avatars-CkLqCmTeMPSVzN50-GiKLzA-t500x500.jpg"
							);
						},
					}),
					linkPlugin(),
					linkDialogPlugin(),
					headingsPlugin(),
					listsPlugin(),
					quotePlugin(),
					thematicBreakPlugin(),
					markdownShortcutPlugin(),
					toolbarPlugin({
						toolbarContents: () => (
							<>
								{""}
								<UndoRedo />
								<BoldItalicUnderlineToggles />
								<CodeToggle />
								<CreateLink />
								<ListsToggle />
								<InsertImage />
							</>
						),
					}),
				]}
				{...props}
				ref={editorRef}
			/>
		</div>
	);
};

export default MDXProvider;
