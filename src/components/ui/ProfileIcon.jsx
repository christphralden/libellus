import placeholder from '../../lib/assets/pp.webp';

export function ProfileIcon() {
  return (
    <div className="inline-block rounded-full overflow-hidden h-10 w-10 border-[1px] border-d-accent">
      <img
        src={placeholder}
        alt="Profile icon"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
