import React, { useState } from "react";

import { PostsService } from "@api/services/posts.service";

import { Page } from "@components/page";
import { SimpleButton } from "@components/buttons/simple-button";
import { ImageUploader } from "@components/image-uploader";
import { Textarea } from "@components/textarea";

import styles from "./styles.module.scss";

export const CreatePost: React.FC = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File>();
  const form = React.createRef<HTMLFormElement>();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    PostsService.createPost(content, image || "");
  }

  function handleFileUpload(newImage: File) {
    setImage(newImage);
  }

  return (
    <Page>
      <div className={styles.header}>
        <h1>Create post</h1>
      </div>
      <form className={styles.form} onSubmit={onSubmit} ref={form}>
        <div className={styles.imageUploaderWrapper}>
          <ImageUploader onUpload={handleFileUpload} />
        </div>
        <div className={styles.contentWrapper}>
          <Textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setContent(e.target.value);
            }}
            placeholder={"Content"}
          />
          <SimpleButton
            text={"Post"}
            size={"medium"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              form.current?.submit();
            }}
          />
        </div>
      </form>
    </Page>
  );
};
