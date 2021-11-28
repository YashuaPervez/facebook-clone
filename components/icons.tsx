interface IconProps {
  size: number;
  color?: string;
}

interface IconPropsWithStatus extends IconProps {
  status: boolean;
  altColor: string;
}

export const Settings: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 5}
      height={size * 5}
      viewBox="0 0 50 50"
    >
      <path
        fill={color}
        d="M22.205 2a1 1 0 00-.986.838l-.973 5.955c-1.17.34-2.285.8-3.336 1.371l-4.914-3.51a1 1 0 00-1.287.106l-3.89 3.886a1 1 0 00-.112 1.282l3.457 4.945a16.92 16.92 0 00-1.398 3.36l-5.93.986a1 1 0 00-.834.986v5.5a1 1 0 00.824.986l5.934 1.051a16.82 16.82 0 001.394 3.36l-3.5 4.896a1 1 0 00.106 1.287l3.888 3.89a1 1 0 001.28.114l4.955-3.469a16.85 16.85 0 003.346 1.381l.99 5.963a1 1 0 00.986.836h5.5a1 1 0 00.986-.826l1.061-5.986a16.85 16.85 0 003.33-1.397l4.988 3.5a1 1 0 001.282-.111l3.888-3.893a1 1 0 00.104-1.29l-3.557-4.938a16.769 16.769 0 001.367-3.311l6.018-1.055a1 1 0 00.826-.986v-5.5a1 1 0 00-.838-.986l-6.008-.983a16.885 16.885 0 00-1.37-3.306l3.507-4.998a1 1 0 00-.111-1.282l-3.89-3.888a1 1 0 00-1.292-.104l-4.924 3.541a16.76 16.76 0 00-3.334-1.389l-1.047-5.984A1 1 0 0027.705 2h-5.5zm.852 2h3.808l.996 5.686a1 1 0 00.743.798c1.462.365 2.836.943 4.09 1.702a1 1 0 001.1-.043l4.68-3.364 2.694 2.694-3.332 4.748a1 1 0 00-.04 1.09 14.926 14.926 0 011.686 4.07 1 1 0 00.809.744l5.707.934v3.808l-5.719 1.004a1 1 0 00-.797.746 14.798 14.798 0 01-1.681 4.069 1 1 0 00.045 1.1l3.379 4.689-2.694 2.695-4.74-3.326a1 1 0 00-1.094-.035 14.894 14.894 0 01-4.08 1.709 1 1 0 00-.74.794L26.867 46h-3.814l-.942-5.662a1 1 0 00-.746-.807 14.902 14.902 0 01-4.105-1.695 1 1 0 00-1.088.039l-4.703 3.295-2.696-2.7 3.325-4.646a1 1 0 00.04-1.1 14.859 14.859 0 01-1.71-4.115 1 1 0 00-.795-.742l-5.631-1v-3.814l5.627-.936a1 1 0 00.807-.744 14.953 14.953 0 011.71-4.117 1 1 0 00-.035-1.092L8.826 11.47l2.697-2.696 4.663 3.332a1 1 0 001.095.043 14.83 14.83 0 014.104-1.685 1 1 0 00.748-.81L23.057 4zM25 17c-4.406 0-8 3.594-8 8 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.406-3.594-8-8-8zm0 2c3.326 0 6 2.674 6 6s-2.674 6-6 6-6-2.674-6-6 2.674-6 6-6z"
      ></path>
    </svg>
  );
};

export const More: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 210 210"
      version="1.1"
      viewBox="0 0 210 210"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <g>
        <path
          fill={color}
          d="M25 80C11.215 80 0 91.215 0 105s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z"
        ></path>
        <path
          fill={color}
          d="M105 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z"
        ></path>
        <path
          fill={color}
          d="M185 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z"
        ></path>
      </g>
    </svg>
  );
};

export const Friends: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 5}
      height={size * 5}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M10 4a4 4 0 100 8 4 4 0 000-8zM4 8a6 6 0 1112 0A6 6 0 014 8zm12.828-4.243a1 1 0 011.415 0 6 6 0 010 8.486 1 1 0 11-1.415-1.415 4 4 0 000-5.656 1 1 0 010-1.415zm.702 13a1 1 0 011.212-.727c1.328.332 2.169 1.18 2.652 2.148.468.935.606 1.98.606 2.822a1 1 0 11-2 0c0-.657-.112-1.363-.394-1.928-.267-.533-.677-.934-1.349-1.102a1 1 0 01-.727-1.212zM6.5 18C5.24 18 4 19.213 4 21a1 1 0 11-2 0c0-2.632 1.893-5 4.5-5h7c2.607 0 4.5 2.368 4.5 5a1 1 0 11-2 0c0-1.787-1.24-3-2.5-3h-7z"
      ></path>
    </svg>
  );
};

export const PaperPlane: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 297 297"
      version="1.1"
      viewBox="0 0 297 297"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={color}
        d="M274.556 9.36L7.53 121.792c-8.754 3.686-10.206 15.481-2.607 21.18l49.523 37.142L278.762 15.616c2.981-2.981-.321-7.892-4.206-6.256zM290.875 25.249l-2.358 1.729L106.87 208.626l93.153 62.101c6.749 4.5 15.929 1.35 18.494-6.346l78.273-234.82c1.184-3.552-2.896-6.526-5.915-4.312z"
      ></path>
      <path
        fill={color}
        d="M71.92 287.965L129.44 241.619 98.665 221.103z"
      ></path>
      <path
        fill={color}
        d="M89.868 204.51l.003-.003 102.422-102.422c1.609-1.609-.557-4.133-2.392-2.788l-128.04 93.895v79.714l26.357-65.892a7.458 7.458 0 011.65-2.504z"
      ></path>
    </svg>
  );
};

export const GraduationCap: React.FC<IconProps> = ({
  size,
  color = "#000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 5}
      height={size * 5}
      x="0"
      y="0"
      enableBackground="new 0 0 32.006 32.005"
      version="1.1"
      viewBox="0 0 32.006 32.005"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M28.948 10.992l3.058-1.144-15.803-4.911L0 10.338l6.075 2.025v9.078l.124.207c.097.162 2.467 3.965 10.073 3.965 7.73 0 9.205-3.956 9.263-4.125l.048-.139V12.25l1.624-.607v11.354h-.959v4.071h3.66v-4.071h-.958V10.992h-.002zm-5.106 10.022c-.287.555-1.828 2.856-7.57 2.856-5.717 0-7.937-2.289-8.456-2.947v-7.98l8.413 2.805 7.613-2.846v8.112zM16.195 13.9L5.507 10.338l10.715-3.571 10.406 3.234L16.195 13.9z"
      ></path>
    </svg>
  );
};

export const LocationMarker: React.FC<IconProps> = ({
  size,
  color = "#000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 315 315"
      version="1.1"
      viewBox="0 0 315 315"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={color}
        d="M157.5 0C93.319 0 41.103 52.215 41.103 116.397c0 62.138 106.113 190.466 110.63 195.898a7.502 7.502 0 0011.534 0c4.518-5.433 110.63-133.76 110.63-195.898C273.897 52.215 221.682 0 157.5 0zm0 295.598c-9.409-11.749-28.958-36.781-48.303-65.397-34.734-51.379-53.094-90.732-53.094-113.804C56.103 60.486 101.59 15 157.5 15c55.91 0 101.397 45.486 101.397 101.397 0 23.071-18.359 62.424-53.094 113.804-19.346 28.616-38.894 53.648-48.303 65.397z"
      ></path>
      <path
        fill={color}
        d="M195.657 213.956a7.5 7.5 0 00-10.413 2.017c-10.121 14.982-21.459 30.684-33.699 46.67a7.5 7.5 0 001.395 10.514 7.463 7.463 0 004.554 1.546 7.489 7.489 0 005.96-2.941c12.42-16.22 23.933-32.165 34.219-47.392a7.5 7.5 0 00-2.016-10.414zM157.5 57.5C123.589 57.5 96 85.089 96 119s27.589 61.5 61.5 61.5S219 152.911 219 119s-27.589-61.5-61.5-61.5zm0 108c-25.64 0-46.5-20.86-46.5-46.5s20.86-46.5 46.5-46.5c25.641 0 46.5 20.86 46.5 46.5s-20.859 46.5-46.5 46.5z"
      ></path>
    </svg>
  );
};

export const Suitcase: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 400 400"
      version="1.1"
      viewBox="0 0 400 400"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={color}
        d="M360 72H260V48c0-13.2-10.8-24-24-24h-72c-13.2 0-24 10.8-24 24v24H40C18 72 0 90 0 112v224c0 22 18 40 40 40h320c22 0 40-18 40-40V112c0-22-18-40-40-40zM156 48c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v24h-88V48zM64 360H40c-13.2 0-24-10.8-24-24V112c0-13.2 10.8-24 24-24h24v272zm320-24c0 13.2-10.8 24-24 24h-24V188c0-4.4-3.6-8-8-8s-8 3.6-8 8v172H80V88h280c13.2 0 24 10.8 24 24v224z"
      ></path>
      <path
        fill={color}
        d="M328 132c-4.4 0-8 3.6-8 8v12c0 4.4 3.6 8 8 8s8-3.6 8-8v-12c0-4.4-3.6-8-8-8z"
      ></path>
    </svg>
  );
};

export const Search: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 128 128"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={color}
        d="M110.58 109.35L87.69 80a41.55 41.55 0 10-8.77 7l22.85 29.25a5.58 5.58 0 007.87 1 5.6 5.6 0 00.94-7.9zM62 82.91a32 32 0 1127.52-27.55A32 32 0 0162 82.91z"
      ></path>
    </svg>
  );
};

export const Image: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 5}
      height={size * 5}
      x="0"
      y="0"
      enableBackground="new 0 0 606.365 606.366"
      version="1.1"
      viewBox="0 0 606.365 606.366"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M547.727 144.345h-13.619v-13.618c0-32.059-26.08-58.14-58.139-58.14H58.64C26.581 72.587.5 98.669.5 130.727v273.155c0 32.058 26.082 58.14 58.14 58.14h13.618v13.618c0 32.059 26.082 58.14 58.14 58.14h417.327c32.059 0 58.141-26.081 58.141-58.14V202.485c-.001-32.059-26.081-58.14-58.139-58.14zm15.298 331.294c0 8.45-6.85 15.3-15.299 15.3H130.398c-8.45 0-15.3-6.85-15.3-15.3V202.485c0-8.451 6.85-15.3 15.3-15.3H547.727c8.449 0 15.299 6.85 15.299 15.3v273.154zM43.34 403.881V130.727c0-8.45 6.85-15.3 15.3-15.3h417.329c8.449 0 15.299 6.85 15.299 15.3v13.618h-360.87c-32.058 0-58.14 26.082-58.14 58.14v216.696H58.641c-8.451 0-15.301-6.85-15.301-15.3z"
      ></path>
      <path
        fill={color}
        d="M547.725 534.279H130.397c-32.334 0-58.64-26.306-58.64-58.64v-13.118H58.64c-32.334 0-58.64-26.306-58.64-58.64V130.727c0-32.334 26.306-58.64 58.64-58.64h417.329c32.333 0 58.639 26.306 58.639 58.64v13.118h13.119c32.333 0 58.639 26.306 58.639 58.64v273.154c-.001 32.334-26.306 58.64-58.641 58.64zM58.64 73.086C26.857 73.086 1 98.944 1 130.727v273.155c0 31.782 25.857 57.64 57.64 57.64h14.118v14.118c0 31.782 25.857 57.64 57.64 57.64h417.327c31.783 0 57.641-25.857 57.641-57.64V202.485c0-31.783-25.856-57.64-57.639-57.64h-14.119v-14.118c0-31.783-25.856-57.64-57.639-57.64H58.64zm489.087 418.353H130.398c-8.712 0-15.8-7.088-15.8-15.8V202.485c0-8.712 7.088-15.8 15.8-15.8h417.329c8.712 0 15.799 7.088 15.799 15.8v273.154c-.001 8.712-7.088 15.8-15.799 15.8zM130.398 187.685c-8.161 0-14.8 6.64-14.8 14.8v273.154c0 8.161 6.639 14.8 14.8 14.8h417.329c8.16 0 14.799-6.639 14.799-14.8V202.485c0-8.161-6.639-14.8-14.799-14.8H130.398zm-57.64 231.996H58.641c-8.712 0-15.801-7.088-15.801-15.8V130.727c0-8.712 7.088-15.8 15.8-15.8h417.329c8.712 0 15.799 7.088 15.799 15.8v14.118h-361.37c-31.783 0-57.64 25.857-57.64 57.64v217.196zM58.64 115.926c-8.161 0-14.8 6.639-14.8 14.8v273.155c0 8.16 6.64 14.8 14.801 14.8h13.118V202.485c0-32.334 26.306-58.64 58.64-58.64h360.37v-13.118c0-8.161-6.639-14.8-14.799-14.8H58.64z"
      ></path>
      <path
        fill={color}
        d="M502.035 427.5l-14.096-14.097-68.252-68.252c-5.975-5.976-15.662-5.976-21.637 0l-38.783 38.782-72.451-72.451c-5.975-5.976-15.663-5.976-21.637 0L157.48 419.181l-8.32 8.319c-3.57 3.57-5.005 8.464-4.31 13.101a15.228 15.228 0 004.31 8.537l8.656 8.655a15.232 15.232 0 008.054 4.228c1.827.334 3.702.334 5.528 0a15.217 15.217 0 008.055-4.228l17.192-17.192 21.42-21.42 47.113-47.113c5.975-5.976 15.663-5.976 21.637 0l47.112 47.113 21.42 21.42 17.193 17.192a15.23 15.23 0 008.055 4.228c1.826.334 3.701.334 5.527 0a15.22 15.22 0 008.055-4.228l8.656-8.655a15.243 15.243 0 004.309-8.537c.695-4.637-.738-9.53-4.309-13.101l-8.32-8.319-4.953-4.954 19.307-19.309 24.264 24.263 21.42 21.42 17.191 17.192a15.232 15.232 0 007.57 4.129c3.635.787 7.498.239 10.811-1.646a15.314 15.314 0 003.258-2.482l8.654-8.655c5.611-5.61 5.953-14.493 1.029-20.503-.322-.391-.664-.77-1.029-1.136z"
      ></path>
      <path
        fill={color}
        d="M383.359 462.772c-.955 0-1.915-.088-2.854-.259a15.705 15.705 0 01-8.318-4.366l-85.726-85.726c-2.795-2.796-6.512-4.335-10.465-4.335s-7.67 1.539-10.465 4.335l-85.725 85.726a15.701 15.701 0 01-8.318 4.366c-1.877.342-3.83.342-5.708 0a15.705 15.705 0 01-8.318-4.366l-8.656-8.655a15.675 15.675 0 01-4.451-8.816c-.741-4.942.923-10 4.451-13.528L264.825 311.13c2.984-2.984 6.952-4.628 11.172-4.628s8.188 1.644 11.172 4.628l72.098 72.098 38.43-38.429c2.984-2.984 6.951-4.628 11.172-4.628s8.188 1.644 11.172 4.628l82.348 82.349c.364.364.722.758 1.062 1.17a15.739 15.739 0 01-1.062 21.175l-8.654 8.655a15.792 15.792 0 01-11.168 4.623h-.001c-1.128 0-2.258-.12-3.358-.359a15.734 15.734 0 01-7.818-4.264l-62.521-62.521-18.6 18.602 12.92 12.92a15.876 15.876 0 014.449 13.528 15.681 15.681 0 01-4.449 8.816l-8.656 8.655a15.705 15.705 0 01-8.318 4.366c-.941.17-1.901.258-2.856.258zm-107.362-95.686c4.22 0 8.188 1.644 11.172 4.628l85.726 85.726a14.707 14.707 0 007.791 4.089c1.758.322 3.59.322 5.348 0a14.707 14.707 0 007.791-4.089l8.656-8.655a14.696 14.696 0 004.168-8.258 14.874 14.874 0 00-4.168-12.673l-13.627-13.627 20.014-20.016 63.229 63.229a14.74 14.74 0 007.322 3.994c3.538.764 7.328.188 10.458-1.593a14.84 14.84 0 003.151-2.401l8.654-8.655a14.744 14.744 0 00.996-19.833 15.728 15.728 0 00-.996-1.098l-82.348-82.349c-2.795-2.796-6.512-4.335-10.465-4.335s-7.67 1.539-10.465 4.335l-39.137 39.136-72.805-72.805c-2.795-2.796-6.512-4.335-10.465-4.335s-7.669 1.539-10.465 4.335L149.514 427.854a14.87 14.87 0 00-4.168 12.673 14.68 14.68 0 004.168 8.258l8.656 8.655a14.707 14.707 0 007.791 4.089c1.76.322 3.59.322 5.349 0a14.704 14.704 0 007.791-4.089l85.725-85.726a15.693 15.693 0 0111.171-4.628z"
      ></path>
      <g>
        <path
          fill={color}
          d="M491.268 213.967a58.727 58.727 0 00-21.523-4.063c-32.551 0-59.033 26.482-59.033 59.032 0 32.551 26.482 59.032 59.033 59.032 7.59 0 14.852-1.441 21.523-4.063a59.237 59.237 0 0021.42-14.51c9.969-10.574 16.088-24.814 16.088-40.459 0-15.644-6.119-29.885-16.088-40.459a59.233 59.233 0 00-21.42-14.51zm-21.526 71.161c-8.941 0-16.191-7.25-16.191-16.192s7.25-16.191 16.191-16.191c8.943 0 16.193 7.25 16.193 16.191.001 8.942-7.249 16.192-16.193 16.192z"
        ></path>
        <path
          fill={color}
          d="M469.744 328.467c-32.827 0-59.533-26.706-59.533-59.532 0-32.826 26.706-59.532 59.533-59.532a59.11 59.11 0 0121.706 4.098c8.114 3.188 15.584 8.248 21.602 14.632 10.462 11.098 16.224 25.588 16.224 40.802s-5.762 29.704-16.224 40.802c-6.016 6.383-13.485 11.442-21.602 14.633a59.114 59.114 0 01-21.706 4.097zm0-118.064c-32.275 0-58.533 26.257-58.533 58.532 0 32.275 26.258 58.532 58.533 58.532a58.091 58.091 0 0021.341-4.029c7.979-3.136 15.323-8.11 21.238-14.387 10.287-10.912 15.952-25.158 15.952-40.116s-5.665-29.205-15.952-40.116c-5.916-6.277-13.261-11.252-21.238-14.387a58.116 58.116 0 00-21.341-4.029zm-.002 75.225c-9.204 0-16.691-7.488-16.691-16.692s7.487-16.691 16.691-16.691c9.205 0 16.693 7.488 16.693 16.691.001 9.204-7.488 16.692-16.693 16.692zm0-32.384c-8.652 0-15.691 7.039-15.691 15.691 0 8.653 7.039 15.692 15.691 15.692 8.653 0 15.693-7.04 15.693-15.692.001-8.652-7.039-15.691-15.693-15.691z"
        ></path>
      </g>
    </svg>
  );
};

export const Close: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 47.971 47.971"
      version="1.1"
      viewBox="0 0 47.971 47.971"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={color}
        d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"
      ></path>
    </svg>
  );
};

export const Like: React.FC<IconPropsWithStatus> = ({
  size,
  color = "#000",
  status,
  altColor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 58 58"
      version="1.1"
      viewBox="0 0 58 58"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={status ? altColor : color}
        d="M9.5 43c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      ></path>
      <path
        fill={status ? altColor : color}
        d="M56.5 35c0-2.495-1.375-3.662-2.715-4.233A4.992 4.992 0 0055.5 27c0-2.757-2.243-5-5-5H36.134l.729-3.41c.973-4.549.334-9.716.116-11.191C36.461 3.906 33.372 0 30.013 0h-.239C28.178 0 25.5.909 25.5 7c0 14.821-6.687 15-7 15h-1v-2h-16v38h16v-2h28c2.757 0 5-2.243 5-5a4.98 4.98 0 00-1.069-3.087A5.008 5.008 0 0053.5 43a4.98 4.98 0 00-1.069-3.087A5.008 5.008 0 0056.5 35zm-53 21V22h12v34h-12z"
      ></path>
    </svg>
  );
};

export const RightArrow: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 20.633 20.633"
      version="1.1"
      viewBox="0 0 20.633 20.633"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={color}
        d="M15.621 9.844L5.971.195A.652.652 0 005.5 0a.664.664 0 00-.473.195l-.013.012a.677.677 0 00-.197.475v4.682c0 .178.071.348.197.471l4.481 4.482-4.481 4.479a.667.667 0 00-.197.475v4.68c0 .18.071.354.197.475l.013.01a.664.664 0 00.947 0l9.647-9.646a.671.671 0 000-.946z"
      ></path>
    </svg>
  );
};

export const Loading: React.FC<IconProps> = ({ size, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 204.481 204.481"
      version="1.1"
      viewBox="0 0 204.481 204.481"
      xmlSpace="preserve"
      width={size * 5}
      height={size * 5}
    >
      <path
        fill={color}
        d="M162.116 38.31a7.43 7.43 0 00.454-.67c.033-.055.068-.109.1-.164a7.72 7.72 0 00.419-.857c.014-.034.024-.069.038-.104a7.492 7.492 0 00.314-1.008c.068-.288.124-.581.157-.881l.008-.052a7.48 7.48 0 00.043-.796V7.5a7.5 7.5 0 00-7.5-7.5H48.332a7.5 7.5 0 00-7.5 7.5v26.279c0 .269.016.534.043.796l.008.052c.034.3.089.593.157.881.016.069.035.138.053.207.073.273.159.541.261.801.013.034.024.069.038.104.121.296.262.581.419.857.032.056.067.109.1.164.14.232.291.455.454.67.027.035.047.074.074.109l50.255 63.821-50.255 63.821c-.028.035-.047.074-.074.109a7.43 7.43 0 00-.454.67c-.033.055-.068.109-.1.164a7.72 7.72 0 00-.419.857c-.014.034-.024.069-.038.104a7.492 7.492 0 00-.314 1.008 7.308 7.308 0 00-.157.881l-.008.052a7.48 7.48 0 00-.043.796v26.279a7.5 7.5 0 007.5 7.5h107.817a7.5 7.5 0 007.5-7.5v-26.279c0-.269-.016-.534-.043-.796l-.008-.052a7.51 7.51 0 00-.157-.881c-.016-.069-.035-.138-.053-.207a7.492 7.492 0 00-.261-.801c-.013-.034-.024-.069-.038-.104a7.383 7.383 0 00-.419-.857c-.032-.056-.067-.109-.1-.164a7.646 7.646 0 00-.454-.67c-.027-.035-.047-.074-.074-.109l-50.255-63.821 50.255-63.821c.028-.035.047-.074.074-.11zM148.649 15v11.279H55.832V15h92.817zM55.832 189.481v-11.279h92.817v11.279H55.832zm84.866-26.279H63.784l38.457-48.838 38.457 48.838zm-38.457-73.084L63.784 41.279h76.914l-38.457 48.839z"
      ></path>
    </svg>
  );
};
