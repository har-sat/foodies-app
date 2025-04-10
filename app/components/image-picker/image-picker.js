"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handleSelectImageClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <button
          className= {classes.button}
          type="button"
          onClick={handleSelectImageClick}
        >
          <div className={classes.preview}>
            {!pickedImage && <p>Pick an image</p>}
            {pickedImage && <Image src={pickedImage} alt="user image" fill />}
          </div>
          <input
            ref={imageInputRef}
            className={classes.input}
            type="file"
            id={name}
            accept="image/png image/jpeg image/hevc"
            name={name}
            onChange={handleImageChange}
            required
          />
        </button>
      </div>
    </div>
  );
}
