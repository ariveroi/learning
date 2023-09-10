import React, { useEffect, useState, useRef, Fragment } from "react";

import { ImgWrapper, Image, Button, Article } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const [show, ref] = useNearScreen();
  return (
    <Article ref={ref}>
      {show && (
        <Fragment>
          <a href={"detail/" + id}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" />
            {likes} Likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
