import { useRef, useEffect, Dispatch, SetStateAction } from "react";
import IconButton from "../UI/IconButton";
import { Image } from "../icons";

type FilePickerProps = {
  setPreviewURL: Dispatch<SetStateAction<string>>;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
};

const FilePicker: React.FC<FilePickerProps> = ({
  setPreviewURL,
  selectedFile,
  setSelectedFile,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const fileChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target?.files?.[0];
    if (!file) return setSelectedFile(null);
    setSelectedFile(file);
  };

  const updatePreviewUrl = () => {
    if (!selectedFile) {
      return setPreviewURL("");
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewURL(fileReader.result as string);
    };
    fileReader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    updatePreviewUrl();
  }, [selectedFile]);

  return (
    <div>
      <IconButton
        onClick={(e) => {
          inputRef.current?.click();
        }}
      >
        <Image color="#fff" size={6} />
      </IconButton>
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={fileChangeHandler}
      />
    </div>
  );
};

export default FilePicker;
