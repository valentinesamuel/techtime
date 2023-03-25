import { useState } from "react";
import Button from "../../Button/Button.component";
import Sprinkles from "../../Sprinkles/Sprinkles.component";
import CourseCard from "../CoursesCard/CoursesCard.component";
import {
  CourseCardContainer,
  CourseCategoryContainer,
  CourseCategoryTab,
  Tab,
} from "./CourseCategories.styles";

type Props = {};

const CourseCategories = (props: Props) => {
  const [selected, setSelected] = useState("all");
  return (
    <CourseCategoryContainer>
      <CourseCategoryTab>
        <Tab
          className={selected === "all" ? "isActive" : ""}
          onClick={() => setSelected("all")}
        >
          <p>All Categories</p>
        </Tab>
        <Tab
          className={selected === "design" ? "isActive" : ""}
          onClick={() => setSelected("design")}
        >
          <p>Design</p>
        </Tab>
        <Tab
          className={selected === "development" ? "isActive" : ""}
          onClick={() => setSelected("development")}
        >
          <p>development</p>
        </Tab>
        <Tab
          className={selected === "marketing" ? "isActive" : ""}
          onClick={() => setSelected("marketing")}
        >
          <p>marketing</p>
        </Tab>
      </CourseCategoryTab>
      <CourseCardContainer>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </CourseCardContainer>
      <div className="button">
        <Button role="primary">View Courses</Button>
      </div>
    </CourseCategoryContainer>
  );
};

export default CourseCategories;
