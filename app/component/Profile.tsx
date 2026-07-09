const Profile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="h-6 w-6"
    >
      <defs>
        <clipPath id="circle-clip">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>

      <circle cx="50" cy="50" r="50" fill="#0078d4" />

      <g clip-path="url(#circle-clip)">
        <circle cx="50" cy="37" r="15.5" fill="#50b4f3" />

        <circle cx="50" cy="85" r="27.5" fill="#50b4f3" />
      </g>
    </svg>
  );
};

export default Profile;
