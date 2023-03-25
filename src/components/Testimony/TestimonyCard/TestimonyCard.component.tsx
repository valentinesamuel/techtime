import { TestimonyCardContainer } from "./TestimonyCard.styles";
type Props = {}

const   TestimonyCard = (props:Props) => {
  return (
    <TestimonyCardContainer>
      <p className="testimony">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        facilis consectetur, iure officia adipisci delectus, minima suscipit
        magni nisi ex voluptatibus illo, quis fugit tenetur? Illo enim, nemo
        officiis ducimus sit atque nam numquam odio itaque quidem perspiciatis
        voluptatibus illum? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Molestiae facilis consectetur, iure off Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Molestiae facilis consectetur, iure
        officia adipisci delectus, minima suscipit magni nisi ex voluptatibus
        illo, quis fugit tenetur? Illo enim, nemo officiis ducimus sit atque nam
        numquam odio itaque quidem perspiciatis voluptatibus illum? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Molestiae facilis
        consectetur, iure off
      </p>
      <div className="profile">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        <div className="names">
          <p className="name">Bella Ki Moon</p>
          <p className="title">Product Designer</p>
        </div>
      </div>
    </TestimonyCardContainer>
  );
}

export default TestimonyCard