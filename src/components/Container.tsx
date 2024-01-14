"use client";
import React, { useState } from "react";
import FormProvider, { FormInputs } from "./forms/FormProvider";
import Markdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import remarkGfm from "remark-gfm";
import "@mdxeditor/editor/style.css";

const Container = () => {
	const [notes, setNotes] = useState<Array<FormInputs>>([]);
	const addNote = (note: FormInputs) => {
		setNotes((prevNotes) => [note, ...prevNotes]);
	};
	return (
		<div className="flex flex-col justify-start items-center w-full h-full p-6">
			<FormProvider addNote={(note: FormInputs) => addNote(note)} />
			<div className="py-2 gap-2 w-11/12 sm:w-[500px] grid grid-cols-1 sm:grid-cols-2">
				{notes.map((note, index) => {
					return (
						<Card className="bg-transparent text-white col-span-1" key={index}>
							<CardHeader>
								<CardTitle className={"text-lg"}>{note.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<Markdown className="render-mdx" remarkPlugins={[remarkGfm]}>
									{note.description}
								</Markdown>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default Container;
