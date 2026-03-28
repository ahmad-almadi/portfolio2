export default function SoundToggle() {
  return (
    <div className="sound_button_wrap">
      <div
        id="sound"
        data-w-id="3cd39303-6eec-b41b-b3a7-495cfc754662"
        className="sound_button"
      >
        <img
          style={{ opacity: 1 }}
          loading="lazy"
          alt="sound turned on button icon"
          src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6907252714e095ebae57738d_SOUND.svg"
          className="unmute_icon"
        />
        <img
          style={{ opacity: 0 }}
          loading="lazy"
          alt="sound turned off button icon"
          src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6907252714e095ebae57738e_Group%2044.svg"
          className="mute_icon"
        />
      </div>
    </div>
  );
}
