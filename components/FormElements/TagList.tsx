import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

// Components
import Button from "../UI/Button";
import Chip from "../UI/Chip";

export type Tag = { value: string; id: string };

type TagListProps = {
  setTags: Dispatch<SetStateAction<Tag[]>>;
  tags: Tag[];
  heading?: string;
};

const TagList: React.FC<TagListProps> = ({ tags, heading, setTags }) => {
  const [input, setInput] = useState<string>("");

  const addTagHandler = () => {
    if (!input) return;

    const newTags = [...tags, { value: input, id: uuid() }];
    setTags(newTags);
    setInput("");
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[a-zA-Z ]*$/)) {
      setInput(e.target.value);
    }
  };

  const inputKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const code = e.keyCode;
    if (code === 13) {
      e.preventDefault();
    }
  };

  const inputKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const code = e.keyCode;
    if (code === 13) {
      addTagHandler();
    }
  };

  return (
    <div className="mb-4">
      <h4 className="mb-1 text-lg font-semibold">{heading}</h4>
      <div className="mt-1 mb-2">
        {tags.map((tag) => (
          <Chip
            key={tag.id}
            remove={() => {
              setTags((prev) => prev.filter((t) => t.id !== tag.id));
            }}
          >
            {tag.value}
          </Chip>
        ))}
      </div>
      <div>
        <input
          id="tag"
          placeholder="Tag"
          value={input}
          onChange={inputChangeHandler}
          onKeyUp={inputKeyUpHandler}
          onKeyDown={inputKeyDownHandler}
          className="bg-white border border-gray-200 outline-none py-2 px-3 rounded focus:border-blue-400 mr-2"
          autoComplete="off"
        />
        <Button className="h-10" type="submit" onClick={addTagHandler}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default TagList;
