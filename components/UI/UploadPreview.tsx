// Components
import { Close } from "../icons";

type UploadPreviewProps = {
  previewURL: string;
  clear: () => void;
};

const UploadPreview: React.FC<UploadPreviewProps> = ({ previewURL, clear }) => {
  return (
    <div className="relative mx-auto w-40">
      <div className="absolute -right-2 -top-2">
        <button
          type="button"
          className="bg-red-500 h-5 w-5 flex items-center justify-center border border-red-600 rounded-full"
          onClick={clear}
        >
          <Close color="#fff" size={1.8} />
        </button>
      </div>
      <div className="w-full  mb-3 rounded-lg overflow-hidden border border-black">
        <img src={previewURL} className="w-full" />
      </div>
    </div>
  );
};

export default UploadPreview;
