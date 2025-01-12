import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default RTE = ({ name, control, lable, defaultValue = "" }) => {
	return (
		<div className="w-full">
			{lable && <lable className="inline-block mb-1 pl-1">{lable}</lable>}
            <Controller 
                name = {name || "Content"}
                control={control}
                render={({field: {onChange}}) => (
                    <Editor
                        initialValue="Default value"
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                
                            ],
                            toolbar:
                                'undo redo | blocks | image | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
		</div>
	);
};
