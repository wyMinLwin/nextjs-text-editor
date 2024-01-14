"use client";
import React, { FC, useRef } from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { MDX } from "./MDX";
import { Button } from "../ui/button";
import { MDXEditorMethods } from "@mdxeditor/editor";

export type FormInputs = {
	title: string;
	description: string;
};
const FormProvider: FC<{ addNote: (note: FormInputs) => void }> = ({
	addNote,
}) => {
	const formInputs = useForm<FormInputs>({
		defaultValues: {
			title: "",
			description: "",
		},
	});
	const submitHandler: SubmitHandler<FormInputs> = (data) => {
		console.log(data);
		addNote(data);
		formInputs.reset();
		ref.current?.setMarkdown("");
	};
	const ref = useRef<MDXEditorMethods>(null);
	return (
		<div className="w-11/12 sm:w-[500px]">
			<Form {...formInputs}>
				<form onSubmit={formInputs.handleSubmit(submitHandler)}>
					<FormField
						rules={{
							required: { value: true, message: "Title should not be empty!" },
						}}
						control={formInputs.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Enter Title" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						// control={formInputs.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<MDX
										markdown={field.value}
										onChange={(markdown) =>
											formInputs.setValue("description", markdown)
										}
										ref={ref}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="flex justify-center">
						<Button
							type="submit"
							className="mt-2 self-center"
							variant="secondary"
						>
							Save
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default FormProvider;
