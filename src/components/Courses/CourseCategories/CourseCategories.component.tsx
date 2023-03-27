import { useState } from "react";
import Button from "../../Button/Button.component";
import tabs from "./Tabs.json";
import courses from "../CoursesCard/Course.json";
import CourseCard from "../CoursesCard/CoursesCard.component";
import {
  CourseCardContainer,
  CourseCategoryContainer,
  CourseCategoryTab,
  Tab,
} from "./CourseCategories.styles";

const CourseCategories = () => {
  const [selected, setSelected] = useState("all");
  const [visibleCourses, setVisibleCourses] = useState(courses);

  const handleVisibleCourses = (courseSelected: string) => {
    let displayedCourses = courses;
    if (courseSelected !== "all") {
      displayedCourses = courses.filter((course) => {
        return course.category.toLowerCase() === courseSelected.toLowerCase();
      });
    }
    setVisibleCourses(displayedCourses);
  };

  const onTabSelect = (tabCategory: string) => {
    setSelected(tabCategory);
    handleVisibleCourses(tabCategory);
  };

  return (
    <CourseCategoryContainer>
      <CourseCategoryTab>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
              className={selected === tab.category ? "isActive" : ""}
              onClick={() => onTabSelect(tab.category)}
            >
              <p>{tab.name}</p>
            </Tab>
          );
        })}
      </CourseCategoryTab>
      <CourseCardContainer>
        {visibleCourses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              author={course.author}
              category={course.category}
              courseImage={course.courseImage}
              duration={course.duration}
              price={course.price}
              rating={course.rating}
              students={course.students}
              title={course.title}
            />
          );
        })}
      </CourseCardContainer>
      <div className="button">
        <Button role="primary" onClick={()=> alert("Sorry, that's all we have🥺")}>View Courses</Button>
      </div>
    </CourseCategoryContainer>
  );
};

export default CourseCategories;
