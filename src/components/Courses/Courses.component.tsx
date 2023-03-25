import blueCross from "../../assets/images/blue-cross.svg";
import CourseCategories from "./CourseCategories/CourseCategories.component";

import {
  BlueCross,
  CoursesContainer,
  CoursesDescription,
  CoursesHeading,
  CoursesSprinkles,
} from "./Courses.styles";

type Props = {};

const Courses = (props: Props) => {
  return (
    <CoursesContainer>
      <CoursesSprinkles>
        <BlueCross src={blueCross} />
      </CoursesSprinkles>
      <CoursesHeading>Browse Our Popular Courses</CoursesHeading>
      <CoursesDescription>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </CoursesDescription>
      <CourseCategories />
    </CoursesContainer>
  );
};

export default Courses;
