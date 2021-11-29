//
import { Close } from "../icons";
import { colors } from "../../styles/colors";

type ChipProps = {
  children: React.ReactNode;
  remove?: () => void;
};

const Chip: React.FC<ChipProps> = ({ children, remove }) => {
  return (
    <span
      className={`bg-primary-main mr-2 mb-2 inline-block ${
        remove ? "pl-5 pr-7" : "px-5"
      } py-1 rounded-full text-white font-semibold inline-flex items-center`}
      onClick={remove}
    >
      {children}
      {!!remove && (
        <button className="h-6 w-6 inline-flex items-center justify-center bg-white rounded-full -mr-6 ml-2">
          <Close size={1.9} color={colors.primary.semidark} />
        </button>
      )}
    </span>
  );
};

export default Chip;
