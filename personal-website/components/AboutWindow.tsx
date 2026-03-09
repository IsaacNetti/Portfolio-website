
export default function AboutWindow() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src="Profile.png"
          alt="Profile"
          className="w-24 h-24 rounded"
        />
        <div>
          <h2 className="text-accent text-lg font-bold">Isaac Netti</h2>
          <p className="text-text">Creating engaging web experiences</p>
        </div>
      </div>
      <p className="text-text leading-relaxed">Using modern technologies and IT background to make custom web solutions that are both functional and aesthetically pleasing. Contact me if you're interested in a custom website your users will love!</p>
    </div>
  );
}