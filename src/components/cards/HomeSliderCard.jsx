export default function HomeSliderCard({ bannerImage }) {
  return (
    <div className="w-96 mx-0 relative overflow-hidden h-64 z-[-20] rounded-xl">
      <img
        src={bannerImage}
        alt="banner"
        className="w-full h-full object-cover object-center z-10 opacity-100"
      />
    </div>
  );
}
