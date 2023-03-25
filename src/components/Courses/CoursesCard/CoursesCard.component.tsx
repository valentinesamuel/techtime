import {
  CardContainer,
  CourseImage,
  CourseInstructor,
  CourseLength,
  CourseLengthImages,
  CourseTitle,
  Tags,
} from "./CoursesCard.styles";
import star from "../../../assets/images/star.svg";
import time from "../../../assets/images/time.svg";
import smalltime from "../../../assets/images/small-time.svg";
import book from "../../../assets/images/book.svg";
import smallbook from "../../../assets/images/small-book.svg";
import smallstar from "../../../assets/images/small-star.svg";

type Props = {};

const CourseCard = (props: Props) => {
  return (
    <CardContainer>
      <CourseImage src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
      <Tags>
        <div className="tag">
          <p>Design</p>
        </div>
        <div className="rating">
          <p>4.7k</p> <CourseLengthImages imgUrl={star} smallimg={smallstar} />
          <p>(32.7k+)</p>
        </div>
      </Tags>
      <CourseTitle>Introduction to user research in UX Design</CourseTitle>
      <CourseLength>
        <div className="duration">
          <CourseLengthImages imgUrl={time} smallimg={smalltime} />
          <p>23hrs 50 mins</p>
        </div>
        <div className="lessons">
          <CourseLengthImages imgUrl={book} smallimg={smallbook} />
          <p>15 Lessons</p>
        </div>
      </CourseLength>
      <CourseInstructor>
        <div className="instructor">
          <img src="https://images.unsplash.com/photo-1679690029578-547c6807cbd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <p>Leonard Victor</p>
        </div>
        <div className="price">
          <p>$15.00</p>
        </div>
      </CourseInstructor>
    </CardContainer>
  );
};

export default CourseCard;
