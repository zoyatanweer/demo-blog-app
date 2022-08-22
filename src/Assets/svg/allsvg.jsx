function LoginIcon(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5l-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
      ></path>
    </svg>
  );
}

function LogoutIcon(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
      ></path>
    </svg>
  );
}
export { LoginIcon, LogoutIcon };
