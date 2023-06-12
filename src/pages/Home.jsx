import ContentSlider from "../components/sliders/ContentSlider";
import HomeSlider from "../components/sliders/HomeSlider";
import SliderData from "../lib/data/SliderCourses.json";
import CourseData from "../lib/data/CoursesData.json";


export default function Home() {
  const sliders = SliderData.sliders;
  const python = CourseData.courses.python;
  const c = CourseData.courses.c;
  const java = CourseData.courses.java;
  return (
    <>
      <div className="pt-20 flex flex-col gap-6">
        <div className="h-fit w-full">
          <HomeSlider courses={sliders}></HomeSlider>
        </div>
        <div className="flex-col space-y-12">
          <ContentSlider title="Python 101" courses={python} category="python"></ContentSlider>
          <ContentSlider title="Binusian Nih Bos" courses={c} category="c"></ContentSlider>
          <ContentSlider title="JavTot" courses={java} category="java"></ContentSlider>
        </div>
      </div>
  
    </>
  );
}
// di home masi testing ini coba bikin lebih variatif kayak misalnya, recommended, categories dll gitu lah
