import { TestimonyCardContainer } from "./TestimonyCard.styles";

type Props = {
  id?: number;
  testimony: string;
  image: string;
  name: string;
  designation: string;
};

const TestimonyCard = (props: Props) => {
  return (
    <TestimonyCardContainer>
      <p className="testimony">
        {props.testimony}Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Molestiae facilis consectetur, iure officia adipisci delectus,
        minima suscipit magni nisi ex voluptatibus illo, quis fugit tenetur?
        Illo enim, nemo officiis ducimus sit atque nam numquam odio itaque
        quidem perspiciatis voluptatibus illum? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
      <div className="profile">
        <img src={props.image} />
        <div className="names">
          <p className="name">{props.name}</p>
          <p className="title">{props.designation}</p>
        </div>
      </div>
    </TestimonyCardContainer>
  );
};

export default TestimonyCard;
