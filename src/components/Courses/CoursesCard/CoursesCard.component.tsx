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

type Props = {
  id?:number,
  category: string;
  title: string;
  duration: {
    time: string;
    lessons: number;
  };
  author: {
    name: string;
    image: string;
  };
  courseImage: string;
  price: number;
  rating: number;
  students: string;
};

const CourseCard = (props: Props) => {
  return (
    <CardContainer>
      <CourseImage src={props.courseImage} />
      <Tags>
        <div className="tag">
          <p>{props.category}</p>
        </div>
        <div className="rating">
          <p>{props.rating}</p>
          <CourseLengthImages imgUrl={star} smallimg={smallstar} />
          <p>({props.students})</p>
        </div>
      </Tags>
      <CourseTitle>{props.title}</CourseTitle>
      <CourseLength>
        <div className="duration">
          <CourseLengthImages imgUrl={time} smallimg={smalltime} />
          <p>{props.duration.time}</p>
        </div>
        <div className="lessons">
          <CourseLengthImages imgUrl={book} smallimg={smallbook} />
          <p>{props.duration.lessons} Lessons</p>
        </div>
      </CourseLength>
      <CourseInstructor>
        <div className="instructor">
          <img src={props.author.image} />
          <p>{props.author.name}</p>
        </div>
        <div className="price">
          <p>${props.price}.00</p>
        </div>
      </CourseInstructor>
    </CardContainer>
  );
};

export default CourseCard;
